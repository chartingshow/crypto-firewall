# 🛡️ How to Install AdGuard and Add Crypto Firewall Protection

This step-by-step guide will show you how to install **AdGuard** and then add the **Crypto Firewall** blocklists to improve your protection against malicious cryptocurrency scams, fake wallets, and phishing threats.

## ✅ Step 1: Install AdGuard

**AdGuard** is a powerful network-level ad blocker and privacy tool available for multiple platforms. Follow the instructions for your preferred device:

### 🔹 **Windows / Mac**

1. Visit the official AdGuard website:
   👉 [https://adguard.com/](https://adguard.com/)

2. Click **"Download"** in the top navigation bar.

3. Choose your platform (Windows or macOS) and click **"Download"** again.

4. Open the installer and follow the on-screen instructions to install AdGuard.

5. Once installed, launch AdGuard and complete the initial setup.

### 🔹 **Android**

> 📌 Note: You must install the **standalone AdGuard app** (.apk) from their official website — not the Play Store version, which has limited functionality.

1. Open a browser on your Android device.

2. Go to: 👉 [https://adguard.com/en/adguard-android/overview.html](https://adguard.com/en/adguard-android/overview.html)

3. Tap **"Download"** and install the `.apk` file.

4. If prompted, allow installation from unknown sources.

5. Open AdGuard and follow the setup instructions.

### 🔹 **iOS (iPhone / iPad)**

> ⚠️ iOS version uses Safari Content Blockers, which are more limited.

1. Open the App Store.

2. Search for **"AdGuard"** and install it. Or use this link: https://apps.apple.com/us/app/adguard-adblock-privacy/id1047223162

3. After installation, go to `Settings` → `Safari` → `Content Blockers`, and enable **AdGuard**.

4. Open the AdGuard app and complete setup.

## 🔧 Step 2: Add Crypto Firewall to AdGuard

Once AdGuard is installed, you can now add the **Crypto Firewall** blocklists.

### 🌐 For Desktop Apps (Windows/macOS)

1. Open the AdGuard application.

2. Go to the **Settings** (⚙️) menu.

3. Navigate to **Filters** → **Custom Filters** (or **User Filters** in older versions).

4. Click **"Add Custom Filter"**.

5. For each Crypto Firewall list you want to use, enter:

   * **Filter Name**: e.g., `Crypto Firewall - Full Version`
   * **Filter URL**: Use one of the options below:

#### 📄 Recommended Blocklist URLs

Choose one or more:

| Version     | Description                            | URL                                                                                                     |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Lite**    | Minimal and stable                     | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt` |
| **Full** ✅  | Most popular, stable                   | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt` |
| **Mega**    | Extra aggressive (includes everything) | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt` |
| **Beta** ⚠️ | Experimental and unstable              | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt` |

6. Click **"Add"** or **"Save"**, then ensure the filter is **enabled**.

### 📱 For Android

1. Open the **AdGuard app**.

2. Tap the **menu icon** (☰) → `Content Blocking` → `Filters`.

3. Scroll to the bottom and tap **"Custom"**.

4. Tap **"Add custom filter"**.

5. Enter a **Name** (e.g., `Crypto Firewall - Full`) and **URL** from the list above.

6. Tap **"Save"**, then **enable** the filter.

### 🍏 For iOS

> Due to Safari limitations, you can only use a subset of filters.

1. Open the AdGuard app.

2. Go to `Settings` → `Safari Protection` → `Filters`.

3. Tap **"Custom Filters"**.

4. Add a new filter with the Crypto Firewall URL of your choice.

> 💡 **Note:** Full protection is limited on iOS. For better results, consider using AdGuard DNS or the desktop version.

## 🧱 Optional: Use IP and Hosts Lists

Advanced users can also add IP-based or hosts-based blocking via AdGuard Home or DNS.

* **IP Adblock List**
  `https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-adblock.txt`

* **Hosts – Domains Only**
  `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt`

* **Hosts – Domains and IPs**
  `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt`

> Use these in DNS-based platforms like **AdGuard Home**, **Pi-hole**, or **NextDNS** if you're familiar with managing hosts/IP rules.

## 🧪 Testing It Works

To check if Crypto Firewall is blocking threats:

1. Visit a known crypto phishing site (e.g., one listed in the blocklists).
2. You should see a **block message** or the page will fail to load.
3. Alternatively, use a site like [https://adblock-tester.com](https://adblock-tester.com) to check filter effectiveness.

## 🔄 Updating Filters

AdGuard will automatically fetch and update filters. But you can also:

* Open AdGuard → go to **Filters** → click **"Update now"** next to your custom filters.

## 🛠 Troubleshooting

* ❌ **Filter not working?**
  Double-check the URL and ensure it starts with `https://` and ends in `.txt`.

* 🚫 **Overblocking?**
  Try switching from `Mega` to `Full` or `Lite` for more balanced filtering.

* 💬 Still stuck?
  Visit the [Crypto Firewall GitHub](https://github.com/chartingshow/crypto-firewall) for support.

## ✅ Done!

You've now successfully installed **AdGuard** and enabled **Crypto Firewall protection** to block crypto-related scams, malicious wallet phishing sites, and dangerous blockchain threats.

Stay safe out there! 🛡🚫🪙
