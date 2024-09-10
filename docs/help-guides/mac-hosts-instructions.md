## MAC - Hosts File Instructions

### What is the MAC host file?

The Mac hosts file is a local DNS resolver that maps hostnames to IP addresses. Here are the key points about the Mac hosts file:

#### Location and Format

- Located at `/private/etc/hosts`.
- Plain text file without an extension, simply named "hosts".
- Each line contains an IP address followed by one or more hostnames.

#### Purpose and Function

The hosts file:

- Maps hostnames to IP addresses manually.
- Is checked before querying DNS servers.
- Allows overriding DNS entries for specific domains.
- Can be used to **block access to certain websites**.

#### Security Considerations

- **Can be used as a simple firewall to block malicious websites**.
- Modifying the hosts file can impact network connectivity and web browsing.

## Instructions

1. Go to the folder location: `/private/etc/hosts`.

You will require **escalated privileges** to edit the file (use `sudo` for Linux/MacOS).

2. Now simply copy and paste the contents from the file found below by **adding it** into your `hosts` file.

- [https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts.txt](https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts.txt)

3. Save the `hosts` file and you're done. MAC will automatically block the websites listed in the crypto firewall.

4. Check on this github repo periodically for updates to the `hosts` file as you will need to manually update the `hosts` file yourself.
