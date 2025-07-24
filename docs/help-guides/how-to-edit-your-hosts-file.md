# How to Edit Your Hosts File on Linux, Windows and macOS

The hosts file is used to map domain names (hostnames) to IP addresses. It is a plain-text file used by all operating systems including, Linux, Windows and macOS.

The hosts file has priority over DNS. When you type in the domain name of a web site you want to visit, the domain name must be translated into its corresponding IP Address. The operating system first checks its hosts file for the corresponding domain and if there is no entry for the domain, it will query the configured DNS servers to resolve the specified domain name. This affects only the computer on which the change is made, rather than how the domain is resolved worldwide.

Using the hosts file to map a domain to an IP address is particularly useful when you want to test your website without changing the domain DNS settings. For example, you are migrating your website to a new server and you want to verify whether it is fully functional before pointing the domain to the new server. The hosts file can also be used to block websites on your computer.

## Hosts File Format

Entries in the hosts file have the following format:

```
IPAddress DomainName [DomainAliases]
```

The IP address and the domain names should be separated by at least one space or tab. The lines starting with # are comments and are ignored.

To add an entry to the hosts file, simply open the file in your text editor. Below is a sample hosts file:

```
# Static table lookup for hostnames.
# See hosts(5) for details.
127.0.1.1 linuxize.desktop linuxize
127.0.0.1 localhost
```

The hosts file changes take effect immediately except in cases where the DNS entries are cached by applications.

To undo the changes, simply open the file and remove the lines you added.

## Modify Hosts File in Linux

On Linux, the full path to the file is `/etc/hosts`

The instructions below are valid for all Linux distribution, including Ubuntu, CentOS, RHEL, Debian and Linux Mint:

1. In your terminal window, open the hosts file using your favorite text editor:

```
sudo nano /etc/hosts
```

When prompted, enter your sudo password.

2. Scroll down to the end of the file and add your new entries:

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/hosts/hosts-1.jpg" alt="Hosts File" /></p>

3. Save the changes.

## Modify Hosts File in Windows

On Windows, the full path to the file is `c:\Windows\System32\Drivers\etc\hosts` The instructions below are valid for Windows 10 and Windows 11.

1. Press the Windows key and type Notepad in the search field.

2. Right-click on the Notepad icon and select Run as administrator.

3. In Notepad, click File then Open. In the File name field, paste `c:\Windows\System32\drivers\etc\hosts`

4. Scroll down to the end of the file and add your new entries:

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/hosts/hosts-2.jpg" alt="Hosts File" /></p>

5. Save the changes by clicking File > Save.

## Modify Hosts File in macOS

On macOS, the full path to the file is /etc/hosts. The instructions below are valid for all macOS versions.

1. In your terminal window, open the hosts file using your favorite text editor:

```
sudo nano /etc/hosts
```

When prompted, enter your administrative password.

2. Scroll down to the end of the file and add your new entries:

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/hosts/hosts-3.jpg" alt="Hosts File" /></p>

3. Save the changes and flush the DNS cache:

```
dscacheutil -flushcache
```
