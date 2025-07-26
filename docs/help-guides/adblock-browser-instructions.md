# 🛡️ AdBlock Browser – Installation & Crypto Firewall Setup Guide

Welcome! This guide walks you through:

1. Installing **AdBlock Browser** on **Windows**, **macOS**, **Android**, or **iOS**
2. Adding the **Crypto Firewall** blocklists (Lite, Full, Mega, Beta, and IP filters)

> **Estimated time: 5–10 minutes**

## ✅ Step 1: Install AdBlock Browser

### 🪟 Windows

1. Visit the official AdBlock Browser site:
   👉 [https://adblockbrowser.org/](https://adblockbrowser.org/)
2. Click **Download for Windows** (you may be redirected to a GitHub or installer page).
3. Save the `.exe` file and run it.
4. Follow the install instructions.
5. Open **AdBlock Browser** from the Start Menu or desktop.

### 🍎 macOS

1. Go to the official download page:
   👉 [https://downloads.adblockbrowser.org/adblockbrowser.dmg](https://downloads.adblockbrowser.org/adblockbrowser.dmg)
2. Click the link to download the `.dmg` file.
3. Open the `.dmg` file once it finishes downloading.
4. **Drag the AdBlock Browser icon** into your **Applications** folder.
5. Go to **Applications** and launch **AdBlock Browser**.

> If you see a security warning, go to **System Preferences** → **Security & Privacy** → and click **Open Anyway** under the General tab.

### 📱 Android (Google Play Store)

1. Open **Google Play Store**.
2. Search for `AdBlock Browser`, or go directly to:
   👉 [https://play.google.com/store/apps/details?id=org.adblockplus.browser](https://play.google.com/store/apps/details?id=org.adblockplus.browser)
3. Tap **Install**.
4. Open the browser when ready.

### 🍏 iOS

> iOS does not currently support AdBlock Browser. Use **Adblock Plus for Safari** or a compatible browser that allows custom filter lists.

## 🔧 Step 2: Enable Advanced Settings

1. Open **AdBlock Browser**.
2. Click the **menu icon** (three dots ⋮ or ☰).
3. Go to **Settings** → **Ad blocking**.
4. Tap **Advanced settings** or **More blocking options**.
5. Scroll to **Custom filter lists**.
6. Tap **Add a new list**.

## 🚧 Step 3: Add Crypto Firewall Filter Lists

Choose from these filter list URLs:

| Type    | Description                          | URL                                                                                                     |
| ------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| 🟢 Lite | Minimal, stable                      | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt` |
| 🟡 Full | Stronger protection                  | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt` |
| 🔴 Mega | Max protection, may break some sites | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt` |
| ⚠️ Beta | Experimental, unstable               | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt` |

### 📥 How to Add a List

1. In the **Custom filter lists** section, click **Add a new list**.
2. Give it a name (e.g., `Crypto Firewall – Full`).
3. Paste one of the URLs above.
4. Click **Add** or **Save**.
5. Repeat for any other list you'd like to use.

> ⚠️ Tip: Using more than one large list (e.g., Full + Mega) may impact performance.

## 🔐 Optional: Add IP & Host Blocklists

### 📛 IPs (AdBlock-compatible)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-AdBlock Plus.txt
```

### 🏠 Hosts Lists (For Pi-hole, AdGuard DNS, etc.)

* **Domains Only**
  `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt`

* **Domains and IPs**
  `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt`

## 🧪 Test the Crypto Firewall

1. Visit a known scam crypto site (e.g., from [https://cryptoscamdb.org](https://cryptoscamdb.org)).
2. You should see the page blocked or redirected.
3. You can also check filtering logs if supported by your version.

## 🧼 Maintenance Tips

* Filter lists auto-update in most cases.
* You can manually refresh lists in Settings → Ad blocking.
* If legitimate websites are blocked, you can whitelist them temporarily.

## 🙋 Need Help?

🔗 [Crypto Firewall GitHub Project](https://github.com/chartingshow/crypto-firewall)
🔗 [AdBlock Browser Official Site](https://adblockbrowser.org/)
