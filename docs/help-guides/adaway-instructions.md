# 🔒 How to Install AdAway with Crypto Firewall

This guide will show you how to install the **AdAway** ad-blocking app on your Android device and configure it to use the **Crypto Firewall** blocklists. This helps block malicious or privacy-invasive crypto-related domains.

## ✅ Requirements

* Android phone or tablet.
* Rooted device **OR** non-rooted device using **VPN-based blocking** (supported by AdAway).
* Ability to install apps from outside the Play Store.

## 1. 📥 Download & Install AdAway

### Step 1 — Visit the official AdAway website:

* 🌐 [https://adaway.org](https://adaway.org)

> Or directly view the GitHub project here:
> 🔗 [https://github.com/AdAway/AdAway](https://github.com/AdAway/AdAway)

### Step 2 — Download the latest APK

* Scroll down and tap the **"Download APK"** button.
* Install the APK file on your device.

📌 **Note**: You may need to enable *"Install unknown apps"* in your Android settings:

* **Settings → Security → Install unknown apps → Enable for your browser or file manager**.

### Step 3 — Grant Permissions

* Open the AdAway app.
* On first launch, grant any required permissions.
* Choose between:

  * **Root mode** (if your device is rooted).
  * **VPN mode** (if you don't have root access).

## 2. 🔧 Configure Crypto Firewall in AdAway

### Step 1 — Launch AdAway

* Open the AdAway app.

### Step 2 — Navigate to Blocklist Sources

* Tap **Settings** (⚙️ icon or three-dot menu).
* Choose **"Blocklists"** or **"Hosts sources"** depending on your version.

### Step 3 — Add a New Source

* Tap **"+" Add Source** (usually in the lower right corner).
* Enter a name (e.g. **Crypto Firewall - Full**).
* Paste one of the URLs from the Crypto Firewall blocklists (see below).
* Tap **Save**.

## 3. 🔗 Crypto Firewall Blocklist Options

Choose **one** of the following based on your needs:

| Version             | URL                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| **Lite (stable)**   | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt` |
| **Full (stable)**   | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt` |
| **Mega (stable)**   | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt` |
| **Beta (unstable)** | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt` |

### Optional IP Blocklist (for advanced users):

* IPs only:
  `https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-adblock.txt`

## 4. 🖥️ (Alternative) Hosts-Based Lists

For hosts-based blocking, use these:

| Type              | URL                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Domains only**  | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt`    |
| **Domains & IPs** | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt` |

These can also be added the same way as the blocklist sources.

## 5. ✅ Enable & Apply Blocklists

* Make sure your Crypto Firewall source is **enabled** (toggle should be green or checked).
* Tap **Apply** or **Refresh Sources**.
* Wait for AdAway to fetch and apply the list.
* You're done! 🎉

## 6. 🔄 Keeping Your Lists Updated

* AdAway can auto-update your sources periodically.
* You can also manually refresh the sources by pulling down or tapping "Update Blocklists".

## ℹ️ Notes

* VPN mode may interfere with other VPN-based apps.
* You can mix and match multiple sources, but adding too many large lists may affect performance.
* If a website stops working, try disabling one source at a time to find the cause.

## 📬 Feedback & Support

* For Crypto Firewall updates or issues, visit:
  🔗 [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)

* For AdAway support, go to:
  🔗 [https://github.com/AdAway/AdAway/issues](https://github.com/AdAway/AdAway/issues)
