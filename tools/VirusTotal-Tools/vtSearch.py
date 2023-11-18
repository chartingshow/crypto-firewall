#!/usr/bin/env python

import os
import traceback
import hashlib
import random
import re
import optparse
import urllib
import urllib2
import time
import sys
import cPickle

apiKey = ''

vtReportURL = {'file': 'https://www.virustotal.com/vtapi/v2/file/report', 'url': 'https://www.virustotal.com/vtapi/v2/url/report'}
vtReportSeperator = {'file': ',', 'url': '\n'}

vtPkiFile = 'vtSearch.pkl'

try:
    import json
    jsonalias = json
except:
    try:
        import simplejson
        jsonalias = simplejson
    except:
        print('Modules json and simplejson missing')
        exit()

def Serialize(filename, object):
    try:
        fPickle = open(filename, 'wb')
    except:
        return False
    try:
        cPickle.dump(object, fPickle, -1)
    except:
        print sys.exc_info()
        return False
    finally:
        fPickle.close()
    return True

def SerializeDictionary(filename, dInput):
    try:
        fPickle = open(filename, 'wb')
    except:
        return False
    try:
        for item in dInput.items():
            cPickle.dump(item, fPickle, -1)
    except:
        print sys.exc_info()
        return False
    finally:
        fPickle.close()
    return True

def DeSerialize(filename):
    import os.path

    if os.path.isfile(filename):
        try:
            fPickle = open(filename, 'rb')
        except:
            return None
        try:
            object = cPickle.load(fPickle)
        except:
            return None
        finally:
            fPickle.close()
        return object
    else:
        return None

def DeSerializeDictionary(filename):
    import os.path

    dReturn = {}
    if os.path.isfile(filename):
        try:
            fPickle = open(filename, 'rb')
        except:
            return None
        try:
            while True:
                item = cPickle.load(fPickle)
                dReturn[item[0]] = item[1]
        except EOFError:
            pass
        except:
            print sys.exc_info()
            return None
        finally:
            fPickle.close()
        return dReturn
    else:
        return None

def CN(value, stringNone=''):
    if value == None:
        return stringNone
    else:
        return value

def Timestamp(epoch=None):
    if epoch == None:
        localTime = time.localtime()
    else:
        localTime = time.localtime(epoch)
    return '%04d%02d%02d-%02d%02d%02d' % localTime[0:6]

class CSVLogger():
    def __init__(self, prefix, headers, separator=';', prefixIsFullName=False):
        self.separator = separator
        if prefixIsFullName:
            self.filename = prefix
        else:
            self.filename = '%s-%s.csv' % (prefix, Timestamp())
        self.f = open(self.filename, 'w')
        self.f.write(self.separator.join(headers) + '\n')
        self.f.close()

    def PrintAndLog(self, formats, parameters):
        line = self.separator.join(formats) % parameters
        print(line)
        f = open(self.filename, 'a')
        f.write(line + '\n')
        f.close()

def VTHTTPReportRequest(searchTerm, type):
    global apiKey

    statuscode = 0
    req = urllib2.Request(vtReportURL[type], urllib.urlencode({'resource': searchTerm, 'apikey': apiKey}))
    try:
        if sys.hexversion >= 0x020601F0:
            hRequest = urllib2.urlopen(req, timeout=15)
        else:
            hRequest = urllib2.urlopen(req)
    except:
        return statuscode, None
    try:
        statuscode = hRequest.getcode()
        data = hRequest.read()
    except:
        return statuscode, None
    finally:
        hRequest.close()
    return statuscode, data

def InsertIntoTuple(tupleIn, position, value):
    listIn = list(tupleIn)
    listIn.insert(position, value)
    return tuple(listIn)

def ParseSearchterm(searchTerm, withComment):
    comment = None
    if withComment:
        index = searchTerm.find(' ')
        if index == -1:
            comment = ''
        else:
            try:
                comment = searchTerm[index + 1:]
            except:
                comment = ''
            searchTerm = searchTerm[:index]
    return (searchTerm, comment)

def LogResult(searchTerm, comment, oResult, issuedRequest, withComment, extra):
    global oLogger

    if oResult['response_code'] == 1:
        scans = []
        cves = []
        reCVE = re.compile(r'(CVE([_-])\d{4}\2\d{4,5})')
        for scan in sorted(oResult['scans']):
            if oResult['scans'][scan]['detected']:
                result = [scan, oResult['scans'][scan]['result']]
                if type == 'file':
                    result.extend([oResult['scans'][scan]['update'], oResult['scans'][scan]['version']])
                scans.append('#'.join(map(CN, result)))
            if oResult['scans'][scan]['result']:
                cves += [cve[0].upper().replace('_', '-') for cve in reCVE.findall(oResult['scans'][scan]['result'])]
        formats = ('%s', '%d', '%d', '%s', '%d', '%d', '%s', '%s', '%s')
        parameters = (searchTerm, issuedRequest, oResult['response_code'], oResult['scan_date'], oResult['positives'], oResult['total'], oResult['permalink'], ','.join(scans), ','.join(sorted(list(set(cves)))))
        if withComment:
            formats = InsertIntoTuple(formats, 1, '%s')
            parameters = InsertIntoTuple(parameters, 1, comment)
        for e in extra:
            formats = formats + ('%s', )
            parameters = parameters + (oResult[e], )
        oLogger.PrintAndLog(formats, parameters)
    else:
        formats = ('%s', '%d', '%d', '%s')
        parameters = (searchTerm, issuedRequest, oResult['response_code'], oResult['verbose_msg'])
        if withComment:
            formats = InsertIntoTuple(formats, 1, '%s')
            parameters = InsertIntoTuple(parameters, 1, comment)
        oLogger.PrintAndLog(formats, parameters)

def GetReports(searchTerms, reports, withComment, extra, type, dNotFound=None):
    global oLogger

    searchTermComments = [ParseSearchterm(searchTerm, withComment) for searchTerm in searchTerms]

    searchTerm = vtReportSeperator[type].join([searchTermComment[0] for searchTermComment in searchTermComments])
    if withComment:
        comments = vtReportSeperator[type].join([searchTermComment[1] for searchTermComment in searchTermComments])
    statuscode, jsonResponse = VTHTTPReportRequest(searchTerm, type)
    if jsonResponse == None or statuscode != 200:
        formats = ('%s', '%s', '%d')
        parameters = (searchTerm, 'Error VTHTTPReportRequest', statuscode)
        if withComment:
            formats = InsertIntoTuple(formats, 1, '%s')
            parameters = InsertIntoTuple(parameters, 1, comments)
        oLogger.PrintAndLog(formats, parameters)
        return statuscode

    try:
        if len(searchTerms) == 1:
            oResults = [jsonalias.loads(jsonResponse)]
        else:
            oResults = jsonalias.loads(jsonResponse)
    except:
        formats = ('%s', '%s', '%s', '%s')
        parameters = (searchTerm, 'Error jsonalias.loads', sys.exc_info()[1], repr(traceback.format_exc()))
        if withComment:
            formats = InsertIntoTuple(formats, 1, '%s')
            parameters = InsertIntoTuple(parameters, 1, comments)
        oLogger.PrintAndLog(formats, parameters)
        return statuscode

    for iIter in range(len(searchTerms)):
        if oResults[iIter]['response_code'] == 1:
            reports[searchTermComments[iIter][0]] = oResults[iIter]
        elif oResults[iIter]['response_code'] == 0 and dNotFound != None and not searchTermComments[iIter][0] in dNotFound:
            dNotFound[searchTermComments[iIter][0]] = True
        LogResult(searchTermComments[iIter][0], searchTermComments[iIter][1], oResults[iIter], True, withComment, extra)
    return statuscode

def File2Strings(filename):
    try:
        if filename == '':
            f = sys.stdin
        else:
            f = open(filename, 'r')
    except:
        return None
    try:
        return map(lambda line:line.rstrip('\n'), f.readlines())
    except:
        return None
    finally:
        if f != sys.stdin:
            f.close()

def Strings2File(filename, lines):
    try:
        f = open(filename, 'w')
    except:
        return None
    try:
        for line in lines:
            f.write(line + '\n')
        return True
    except:
        return None
    finally:
        f.close()

def GetPickleFile(globaldb):
    if globaldb:
        return os.path.join(os.path.dirname(sys.argv[0]), vtPkiFile)
    else:
        return vtPkiFile

def VirusTotalUpdate(filename, options):
    databaseFilename = GetPickleFile(options.globaldb)
    reports = DeSerializeDictionary(databaseFilename)
    if reports == None:
        print('No database found: %s' % databaseFilename)
        reports = {}
        return
    else:
        print('Database loaded: %d elements %s' % (len(reports), databaseFilename))

    reportsToMerge = DeSerializeDictionary(filename)
    if reportsToMerge == None:
        print('No database found: %s' % filename)
        reportsToMerge = {}
    else:
        print('Database loaded: %d elements %s' % (len(reportsToMerge), filename))

    countAdded = 0
    countUpdated = 0
    for key, value in reportsToMerge.items():
        if not key in reports:
            reports[key] = value
            countAdded += 1
        elif value['scan_date'] > reports[key]['scan_date']:
            reports[key] = value
            countUpdated += 1
    print('Records added: %d' % countAdded)
    print('Records updated: %d' % countUpdated)

    reportsToMerge = None
    if countAdded > 0 or countUpdated > 0:
        if SerializeDictionary(databaseFilename, reports):
            print('Database saved: %s' % databaseFilename)
        else:
            print('Error saving database: %s' % databaseFilename)

def VirusTotalRefresh(options):
    global oLogger

    

    headers = ('Search Term', 'Requested', 'Response', 'Scan Date', 'Detections', 'Total', 'Permalink', 'AVs', 'CVEs')
    headers = headers + tuple(options.extra)
    if options.output:
        oLogger = CSVLogger(options.output, headers, separator=options.separator, prefixIsFullName=True)
    else:
        oLogger = CSVLogger('virustotal', headers, separator=options.separator)

    reports = DeSerializeDictionary(GetPickleFile(options.globaldb))
    if reports == None:
        reports = {}

    dateshashes = sorted([(value['scan_date'], key) for key, value in reports.items()])
    searchTermsToRequest = [hash for date, hash in dateshashes if date >= options.after]

    if options.refreshrandom:
        random.shuffle(searchTermsToRequest)

    while searchTermsToRequest != []:
        statuscode = GetReports(searchTermsToRequest[0:4], reports, options.comment, options.extra, options.type)
        if statuscode == 204:
            break
        searchTermsToRequest = searchTermsToRequest[4:]
        if searchTermsToRequest != []:
            time.sleep(options.delay)
    SerializeDictionary(GetPickleFile(options.globaldb), reports)

def VirusTotalSearch(filename, options):
    global oLogger

    

    if options.md5:
        if filename == '':
            if sys.platform == 'win32':
                import msvcrt
                msvcrt.setmode(sys.stdin.fileno(), os.O_BINARY)
            data = sys.stdin.read()
        else:
            data = open(filename, 'rb').read()
        searchTerms = [hashlib.md5(data).hexdigest()]
    else:
        searchTerms = File2Strings(filename)
        if searchTerms == None:
            print('Error reading file %s' % filename)
            return
        elif searchTerms == []:
            print('No searchterms in file %s' % filename)
            return

    headers = ('Search Term', 'Requested', 'Response', 'Scan Date', 'Detections', 'Total', 'Permalink', 'AVs', 'CVEs')
    if options.comment:
        headers = InsertIntoTuple(headers, 1, 'Comment')
    headers = headers + tuple(options.extra)
    if options.output:
        oLogger = CSVLogger(options.output, headers, separator=options.separator, prefixIsFullName=True)
    else:
        oLogger = CSVLogger('virustotal', headers, separator=options.separator)

    reports = DeSerializeDictionary(GetPickleFile(options.globaldb))
    if reports == None:
        reports = {}

    dNotFound = None
    searchTerms = [searchTerm.rstrip('\r\n') for searchTerm in searchTerms]
    searchTermsToRequest = []
    if options.force:
        searchTermsToRequest = searchTerms
    else:
        for searchTermIter in searchTerms:
            searchTerm, comment = ParseSearchterm(searchTermIter, options.comment)
            if searchTerm in reports:
                LogResult(searchTerm, comment, reports[searchTerm], False, options.comment, options.extra)
            else:
                searchTermsToRequest.append(searchTermIter)
        if options.notfound:
            dNotFound = {}
            searchtermsNotfound = File2Strings(options.notfound)
            if searchtermsNotfound == None:
                searchtermsNotfound = []
            for searchtermNotfound in searchtermsNotfound:
                dNotFound[searchtermNotfound] = True
            searchTerms = searchTermsToRequest
            searchTermsToRequest = []
            for searchTermIter in searchTerms:
                searchTerm, comment = ParseSearchterm(searchTermIter, options.comment)
                if searchTerm in searchtermsNotfound:
                    LogResult(searchTerm, comment, {'response_code': 0, 'verbose_msg': 'The requested resource is not among the finished, queued or pending scans'}, False, options.comment, options.extra)
                else:
                    searchTermsToRequest.append(searchTermIter)

    while searchTermsToRequest != []:
        statuscode = GetReports(searchTermsToRequest[0:4], reports, options.comment, options.extra, options.type, dNotFound)
        if statuscode == 204 and not options.waitquota:
            break
        if statuscode == 204:
            time.sleep(60 * 60)
        else:
            searchTermsToRequest = searchTermsToRequest[4:]
            if searchTermsToRequest != []:
                time.sleep(options.delay)
    if options.notfound:
        Strings2File(options.notfound, dNotFound.keys())
    if not options.noupdate:
        SerializeDictionary(GetPickleFile(options.globaldb), reports)

def Main():
    global apiKey

    oParser = optparse.OptionParser(usage='usage: %prog [options] [file]\n' , version='%prog ')
    oParser.add_option('-d', '--delay', type=int, default=16, help='delay in seconds between queries (default 16s, VT rate limit is 4 queries per minute)')
    oParser.add_option('-c', '--comment', action='store_true', default=False, help='the search term is followed by a comment and separated by a space character')
    oParser.add_option('-f', '--force', action='store_true', default=False, help='force all request to be send to VirusTotal, even if found in local database (pkl file)')
    oParser.add_option('-k', '--key', default='', help='VirusTotal API key')
    oParser.add_option('-g', '--globaldb', action='store_true', default=False, help='use global database (pkl file) in same directory as program')
    oParser.add_option('-m', '--md5', action='store_true', default=False, help='calculate the md5 of the file and search it')
    oParser.add_option('-u', '--update', action='store_true', default=False, help='update the database (pkl file) with the provided database')
    oParser.add_option('-o', '--output', default='', help='Output to file')
    oParser.add_option('-r', '--refresh', action='store_true', default=False, help='refresh the database sequentially')
    oParser.add_option('-R', '--refreshrandom', action='store_true', default=False, help='refresh the database randomly')
    oParser.add_option('-a', '--after', default='1970-01-01', help='Date to start refreshing (default 1970-01-01)')
    oParser.add_option('-n', '--notfound', default='', help='File to keep track and skip not found searches')
    oParser.add_option('-i', '--noupdate', action='store_true', default=False, help='do not update the database') # i = immutable
    oParser.add_option('-w', '--waitquota', action='store_true', default=False, help='wait 1 hour when quota exceeded')
    oParser.add_option('-s', '--separator', default=';', help='Separator character (default ;)')
    oParser.add_option('-e', '--extra', default='', help='Extra fields to include (use , as separator)')
    oParser.add_option('-t', '--type', default='file', help='Type of resource to query (file, url)')
    (options, args) = oParser.parse_args()

    if not (len(args) <= 1 or (options.refresh or options.refreshrandom) and len(args) == 0):
        oParser.print_help()
        print('')
        return
    if options.extra == '':
        options.extra = []
    else:
        options.extra = options.extra.split(',')
    if options.update:
        VirusTotalUpdate(args[0], options)
        return
    if os.getenv('apiKey') != None:
        apiKey = os.getenv('apiKey')
    if options.key != '':
        apiKey = options.key
    if apiKey == '':
        print('You need to get a VirusTotal API key and set environment variable apiKey, use option -k or add it to this program.\nTo get your API key, you need a VirusTotal account.')
    elif options.refresh or options.refreshrandom:
        VirusTotalRefresh(options)
    elif len(args) == 0:
        VirusTotalSearch('', options)
    else:
        VirusTotalSearch(args[0], options)

if __name__ == '__main__':
    Main()



"""
Run the script
python vtSearch.py -f hashes.txt
python vtSearch.py -t url urls.txt
python vtSearch.py -e sha256 hashes.txt
"""