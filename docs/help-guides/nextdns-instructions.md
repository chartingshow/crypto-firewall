# 🛡️ NextDNS + Crypto Firewall Setup Guide

## ✅ Overview

This guide will walk you through:

1. Installing and configuring **NextDNS** on your device or router.
2. Adding the **Crypto Firewall** to block crypto-related scams and threats.

NextDNS is a powerful DNS-based firewall and privacy tool that works on all major platforms. By integrating the Crypto Firewall blocklists, you’ll gain protection from phishing domains, fake crypto apps, scam tokens, and more.

## 1. 🔧 Set Up NextDNS on Your Device

> Visit: 🌐 [https://nextdns.io/](https://nextdns.io/) and click **"Try it now"** to get started. You’ll be assigned a unique configuration ID.

Your Configuration Page:
🔗 [https://my.nextdns.io/bb52c4](https://my.nextdns.io/bb52c4)

### 🔗 Quick Links for Platform Setup:

* **Android:** [Setup Guide](https://my.nextdns.io/bb52c4/setup#android)
* **iOS / iPadOS:** [Setup Guide](https://my.nextdns.io/bb52c4/setup#ios)
* **Windows:** [Setup Guide](https://my.nextdns.io/bb52c4/setup#windows)
* **macOS:** [Setup Guide](https://my.nextdns.io/bb52c4/setup#macos)
* **Linux:** [Setup Guide](https://my.nextdns.io/bb52c4/setup#linux)
* **ChromeOS:** [Setup Guide](https://my.nextdns.io/bb52c4/setup#chromeos)
* **Browsers (Extension):** [Setup Guide](https://my.nextdns.io/bb52c4/setup#browsers)
* **Router / Whole Home:** [Setup Guide](https://my.nextdns.io/bb52c4/setup#routers)

💡 *For Android/iOS users*, you can also use the official apps:

* [Android App (Play Store)](https://play.google.com/store/apps/details?id=com.doubleangels.nextdnsmanagement&hl=en_GB)
* [iOS App (App Store)](https://apps.apple.com/us/app/nextdns/id1463342498)

## 2. 🧱 Add the Crypto Firewall Blocklists

Now that NextDNS is installed, it’s time to enhance it with **Crypto Firewall blocklists**.

### 🔗 Step-by-Step to Add Blocklists:

1. Go to your configuration:
   👉 [https://my.nextdns.io/bb52c4](https://my.nextdns.io/bb52c4)

2. Click on the **“Privacy”** tab in the left-hand menu.

3. Scroll down to **"Blocklists"** section.

4. Click **"Add a blocklist"**.

5. Choose from the following Crypto Firewall blocklists depending on your desired level of protection:

### 🧱 Recommended Crypto Firewall Blocklists:

#### ✅ Lite Version (stable & low false positives)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt
```

#### 🔥 Full Version (more aggressive blocking)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt
```

#### 🚨 Mega Version (very aggressive, may break some sites)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt
```

#### ⚠️ Beta Version (experimental, unstable)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt
```

### Optional – IP Blocking Support (Advanced Users)

If you want to block based on IPs as well:

#### IPs (for AdBlock Plus-compatible engines):

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-AdBlock Plus.txt
```

## 3. ⚙️ Add Hosts-Based Blocking (Optional)

You can also add host-based blocking for additional security.

### 📜 Domains Only:

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
```

### 📜 Domains + IPs:

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt
```

## ✅ You're Done!

Once added, your NextDNS firewall will now block **known crypto scams, fake wallets, phishing tokens, deceptive DeFi projects**, and much more — **in real time**.

## 🔄 Troubleshooting Tips

* If NextDNS doesn’t seem to work:

  * Ensure you’ve activated your config ID.
  * Clear DNS cache on your device or router.
  * Reboot the device if necessary.

* If websites break:

  * Try switching from *Mega* to *Full* or *Lite* version of the list.
  * Check **NextDNS logs** to see what was blocked:
    [https://my.nextdns.io/bb52c4/logs](https://my.nextdns.io/bb52c4/logs)

## 🔒 Stay Protected

Keep your NextDNS and Crypto Firewall blocklists updated regularly to stay ahead of the latest scams. NextDNS fetches custom blocklists automatically once added.
