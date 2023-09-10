## How To Block Any IP Address In MAC

The easiest way to block IP addresses on a Mac is to block them for your entire network via your router. If you want to block an IP address on just your Mac, use the Terminal to create a new rule in your PacketFilter Configuration file.

1. Find the IP address you want to block from the list found here: https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/src/lists/ip.txt

2. [Open Terminal](#how-to-open-terminal-on-mac) and enter the following to open the PacketFilter Configuration file:

```
$ sudo vim /etc/pf.conf
```

3. Enter the following, replacing *IP address* with the address you want to block (for example, 69.63.176.13).

```
block drop from any to IP ADDRESS
```

To block a range of addresses, replace *any* with an IP address. For example:

```
block drop from 66.220.144.0 to 66.220.159.255
```

4. Enter the following to enable the packet filter and load the rule you created:

```
$ pfctl -e -f /etc/pf.conf
```

5. The IP address is blocked. To disable the rule, enter this command:

```
$ pfctl -d
```

### How to Open Terminal on Mac

Terminal typically resides on the Dock. The icon resembles a command-line input screen with a white > (greater than) symbol set against a black background.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/mac/1.jpg" /></p>

You can also access the Terminal app through the Launchpad.

1. Click the "rocket" icon located on the Dock. This opens the MacOS Launchpad.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/mac/2.jpg" /></p>

2. Click the **Other** folder.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/mac/3.jpg" /></p>

3. Click the **Terminal** app.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/mac/4.jpg" /></p>
