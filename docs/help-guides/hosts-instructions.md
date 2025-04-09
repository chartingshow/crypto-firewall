## Hosts Instructions

1. Go to the location of your `hosts` file this depends on your system:

- Linux: `/etc/hosts` folder.
- MacOS: `/etc/hosts` folder.
- Windows: `C:\Windows\System32\drivers\etc\hosts` folder.

Whichever OS you use, you will require **escalated privileges** to edit the file (either use `sudo` for Linux/MacOS or administrative account on Windows). Or you can use command below for linux

```
sudo -- sh -c 'curl -sS https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/hosts-domains-only.txt >> /etc/hosts'
```
or

```
sudo -- sh -c 'curl -sS https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/hosts-domains-and-ips.txt >> /etc/hosts'
```

**Note:** On Windows computers it's easier to `copy` the `hosts` file out of the `C:\Windows\System32\drivers\etc\hosts` folder and edit it somewhere else and then copy the updated saved file back into the `C:\Windows\System32\drivers\etc\hosts` folder.

2. Now simply copy and paste the contents from the file found here into your `hosts` file.

- [https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt](https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt)
- [https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt](https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt)

3. Save the `hosts` file and you're done.

4. Check on this github repo periodically for updates to the `hosts` file as you will need to manually update the `hosts` file yourself.
