## Windows - Hosts File Instructions

### What is the windows host file?

The Windows hosts file is an important system file that maps hostnames to IP addresses. Here are the key points about the Windows hosts file:

#### Purpose and Function

The hosts file serves as a local DNS lookup mechanism, allowing you to:

- Map hostnames to IP addresses manually.
- Override DNS server entries for specific domains.
- **Block access to certain websites by redirecting their hostnames** to invalid IP addresses.

#### File Location and Format

- Located at `C:\Windows\System32\drivers\etc\hosts`.
- Plain text file with no file extension.
- Each line contains an IP address followed by one or more hostnames.

## Instructions

1. Go to the folder location: `C:\Windows\System32\drivers\etc\hosts`.

You will require **escalated privileges** to edit the file (administrative account on Windows).

**Note:** On Windows computers it's sometimes easier to `copy` the `hosts` file out of the `C:\Windows\System32\drivers\etc\hosts` folder and edit it somewhere else and then copy the updated (saved file) back into the `C:\Windows\System32\drivers\etc\hosts` folder.

2. Now simply copy and paste the contents from the file found below by **adding it** into your `hosts` file.

- [https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt](https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt)
- [https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt](https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt)

3. Save the `hosts` file and you're done. Windows will automatically block the websites listed in the crypto firewall.

4. Check on this github repo periodically for updates to the `hosts` file as you will need to manually update the `hosts` file yourself.
