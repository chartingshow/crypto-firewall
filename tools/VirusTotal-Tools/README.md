# How to Scan Bulk IOCs with VirusTotal?

If you have ever been part of security teams like the Security Operation Center (SOC) or CIERT teams, you might have dealt with many threat analyses as part of your incident response and malware analysis job. Capturing IOAs and IOCs and analyzing captured IOAs and IOCs are some of the crustal parts of the incident response and investigation procedure. And, of course, if you get lengthy lists of URLs, domains, IPs and files, then it's not just crustal, but also it's a laborious task.

## A Short Note About VirusTotal and Its API Service

VirusTotal is a free online service that analyzes files and URLs, enabling the identification of viruses, worms, trojans and other kinds of malicious content using antivirus engines and website scanners. It also enables the generation and sharing of threat intelligence with its huge URL and file analysis database.

VirusTotal offers both public and private APIs that allow users to programmatically interact with their services. The public API has some limitations, like only allowing 500 requests per day and 4 requests per minute. The private API, on the other hand, provides more flexibility and advanced capabilities like allowing users to choose their own request rate and quota, download submitted samples, get more detailed analysis reports, etc.

### Public vs Private API

Here is a quick comparison of VirusTotal's public and private APIs:

| Feature               | Public API                       | Private API                                     |
| --------------------- | -------------------------------- | ----------------------------------------------- |
| Request rate limit    | 500 requests/day, 4 requests/min | Flexible based on service tier                  |
| File download         | No                               | Yes                                             |
| Additional metadata   | No                               | Yes e.g. first submission date, prevalence etc. |
| File behaviors        | No                               | Yes                                             |
| Advanced hunting APIs | No                               | Yes e.g. YARA based hunting                     |
| SLA                   | No                               | Yes                                             |

## What vtSearch.py can Capable to Do?

`vtsearch.py` is a Python program that is designed to search VirusTotal for hashes, IPs, domains and URLs using free public APIs. And, returns the result to a CSV file and CLI. Some of its capabilities:

- Customize delay time in sending search queries.
- Force all queries to be send to VirusTotal, even if found in local database.
- Calculate the md5 of the file and search it
- File to keep track and skip not found searches.
- Wait 1 hour when VirusTotal limitations exceeded

## How to Scan Bulk IOCs with VirusTotal?

The procedure is simple and straightforward. You just need to set up your Python environment with the VirusTotal API key. Just follow these steps to leverage VirusTotal APIs for scanning multiple IOCs in an automated manner:

### Step 1: Signup on VirusTotal and Acquire API Key

- Go to [VirusTotal.com](https://www.virustotal.com/) and create a free account.
- Navigate to your Profile and note down the API key provided. This will be used for authentication.

<p align="center"><img src="1.jpg" alt="VirusTotal Bulk Scanning"></p>

### Step 2: Download the vtSearch script

Download the Python script from here and place it on your machine. We copied it to the `C:\` Directory on our machine.

<p align="center"><img src="2.jpg" alt="VirusTotal Bulk Scanning"></p>

### Step 3: Install Python interpreter

- Download the latest Python 3.x from [python.org](https://www.python.org/downloads/) and install it.
- Add Python to a PATH environment variable.

To ensure Python interpreter is working on your machine, run this command: `python -V`

<p align="center"><img src="3.jpg" alt="VirusTotal Bulk Scanning"></p>

### Step 4: Run the Python script to Submit bulk IOCs to VirusTotal

Before running the `vtSearch.py` let's learn about a couple of arguments to pass. This script accepts arguments like `-f`, `-t`, `-e` and `-d`.

`-f` = It is a flag used to indicate the file has a list of md5 hash values.

`-t` = It is a flag used to indicate the file has a list of IPs, URLs, or Domains.

`-e` = It is a flag used to indicate the file has a list of sha256 hash values.

Some examples to Run the script:

```shell
python vtSearch.py -f hashes.txt
python vtSearch.py -t url urls.txt
python vtSearch.py -e sha256 hashes.txt
python vtSearch.py -f –d 30 hashes.txt
```

We have a file `Sample.txt` in that we saved 10 phishing domains. Let's run the script to scan the domains with VirusTotal.

```shell
python vtSearch.py -t url Sample.txt
```

<p align="center"><img src="4.jpg" alt="VirusTotal Bulk Scanning"></p>

The script creates a `csv` file to save the results. Here is the content of the `csv` file.

|                                  |           |          |                  |            |       |                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------- | --------- | -------- | ---------------- | ---------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Search Term                      | Requested | Response | Scan Date        | Detections | Total | Permalink                                                                                                                                                                                                                                                                                                                                                                                  |
| tr.amjaadasia.com                | 1         | 1        | 09-10-2023 07:20 | 6          | 90    | [https://www.virustotal.com/gui/url/92e20d94d338bafdc5b0bf6aaeff941d08d2bc1fca704aa4b64640553b92d936/detection/u-92e20d94d338bafdc5b0bf6aaeff941d08d2bc1fca704aa4b64640553b92d936-1696836027](https://www.virustotal.com/gui/url/92e20d94d338bafdc5b0bf6aaeff941d08d2bc1fca704aa4b64640553b92d936/detection/u-92e20d94d338bafdc5b0bf6aaeff941d08d2bc1fca704aa4b64640553b92d936-1696836027) |
| beachcitiesradio.com             | 1         | 1        | 09-10-2023 07:20 | 12         | 90    | [https://www.virustotal.com/gui/url/c51a98dbb1199a235fd6da4cefe3ac4f835fa4ce83434454ade1d9f0cdf92138/detection/u-c51a98dbb1199a235fd6da4cefe3ac4f835fa4ce83434454ade1d9f0cdf92138-1696836059](https://www.virustotal.com/gui/url/c51a98dbb1199a235fd6da4cefe3ac4f835fa4ce83434454ade1d9f0cdf92138/detection/u-c51a98dbb1199a235fd6da4cefe3ac4f835fa4ce83434454ade1d9f0cdf92138-1696836059) |
| acagro.ru                        | 1         | 1        | 09-10-2023 07:21 | 2          | 90    | [https://www.virustotal.com/gui/url/11a3bdbbe1dce62c0ab3aed80c4bf52861cebd15f58df071699db4cbf72343fd/detection/u-11a3bdbbe1dce62c0ab3aed80c4bf52861cebd15f58df071699db4cbf72343fd-1696836091](https://www.virustotal.com/gui/url/11a3bdbbe1dce62c0ab3aed80c4bf52861cebd15f58df071699db4cbf72343fd/detection/u-11a3bdbbe1dce62c0ab3aed80c4bf52861cebd15f58df071699db4cbf72343fd-1696836091) |
| suncontainerhouse.com            | 1         | 1        | 09-10-2023 07:22 | 4          | 90    | [https://www.virustotal.com/gui/url/53f0cd345eafdc87a0d71e541731562f9857e07d0125d9c997babec77309647a/detection/u-53f0cd345eafdc87a0d71e541731562f9857e07d0125d9c997babec77309647a-1696836123](https://www.virustotal.com/gui/url/53f0cd345eafdc87a0d71e541731562f9857e07d0125d9c997babec77309647a/detection/u-53f0cd345eafdc87a0d71e541731562f9857e07d0125d9c997babec77309647a-1696836123) |
| gpinhouse.com                    | 1         | 1        | 09-10-2023 07:22 | 20         | 91    | [https://www.virustotal.com/gui/url/0284870e502046ea8e6173310458dcb6fb7ea990e19a8050ac8008b2945b9fb3/detection/u-0284870e502046ea8e6173310458dcb6fb7ea990e19a8050ac8008b2945b9fb3-1696836155](https://www.virustotal.com/gui/url/0284870e502046ea8e6173310458dcb6fb7ea990e19a8050ac8008b2945b9fb3/detection/u-0284870e502046ea8e6173310458dcb6fb7ea990e19a8050ac8008b2945b9fb3-1696836155) |
| craigvirginialaws.com            | 1         | 1        | 09-10-2023 07:23 | 12         | 90    | [https://www.virustotal.com/gui/url/1449b3ee4b72313d5f5e021eeca97fa0a6c94933f6c8ae71b7546911ef707107/detection/u-1449b3ee4b72313d5f5e021eeca97fa0a6c94933f6c8ae71b7546911ef707107-1696836187](https://www.virustotal.com/gui/url/1449b3ee4b72313d5f5e021eeca97fa0a6c94933f6c8ae71b7546911ef707107/detection/u-1449b3ee4b72313d5f5e021eeca97fa0a6c94933f6c8ae71b7546911ef707107-1696836187) |
| discriminatieverdientaandacht.nl | 1         | 1        | 09-10-2023 07:23 | 12         | 90    | [https://www.virustotal.com/gui/url/6e8d5b03cd98a5280dbcb176f88c55dfa36d38c44fde33253b696be25cca890d/detection/u-6e8d5b03cd98a5280dbcb176f88c55dfa36d38c44fde33253b696be25cca890d-1696836219](https://www.virustotal.com/gui/url/6e8d5b03cd98a5280dbcb176f88c55dfa36d38c44fde33253b696be25cca890d/detection/u-6e8d5b03cd98a5280dbcb176f88c55dfa36d38c44fde33253b696be25cca890d-1696836219) |
| vgcrelbb.com                     | 1         | 1        | 09-10-2023 07:24 | 2          | 90    | [https://www.virustotal.com/gui/url/54b59da19556448e377cb867e32b08c383f20c83ab6fdabd712ec4835c911393/detection/u-54b59da19556448e377cb867e32b08c383f20c83ab6fdabd712ec4835c911393-1696836251](https://www.virustotal.com/gui/url/54b59da19556448e377cb867e32b08c383f20c83ab6fdabd712ec4835c911393/detection/u-54b59da19556448e377cb867e32b08c383f20c83ab6fdabd712ec4835c911393-1696836251) |
| theffegroup.com.au               | 1         | 1        | 09-10-2023 07:24 | 15         | 90    | [https://www.virustotal.com/gui/url/801e49aea0475771ce0a77bb7c22e5c8c0a7fc8026d6db896007fc7a1855357e/detection/u-801e49aea0475771ce0a77bb7c22e5c8c0a7fc8026d6db896007fc7a1855357e-1696836283](https://www.virustotal.com/gui/url/801e49aea0475771ce0a77bb7c22e5c8c0a7fc8026d6db896007fc7a1855357e/detection/u-801e49aea0475771ce0a77bb7c22e5c8c0a7fc8026d6db896007fc7a1855357e-1696836283) |
| hees.com.au                      | 1         | 1        | 09-10-2023 07:25 | 2          | 90    | [https://www.virustotal.com/gui/url/e7f6adb8ab6e8b6d952a1b855230a654ecf9f5fa2a6a54a7515d45351c7f5702/detection/u-e7f6adb8ab6e8b6d952a1b855230a654ecf9f5fa2a6a54a7515d45351c7f5702-1696836315](https://www.virustotal.com/gui/url/e7f6adb8ab6e8b6d952a1b855230a654ecf9f5fa2a6a54a7515d45351c7f5702/detection/u-e7f6adb8ab6e8b6d952a1b855230a654ecf9f5fa2a6a54a7515d45351c7f5702-1696836315) |
