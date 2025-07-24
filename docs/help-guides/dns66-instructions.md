# 📲 DNS66 Android Instructions

*Block unwanted crypto miners, phishing domains and trackers using DNS66 and Crypto Firewall*

## ✅ Step 1 – What Is DNS66?

[DNS66](https://github.com/julian-klode/dns66) is a free and open-source Android app that blocks ads, trackers and malicious domains **using DNS-level filtering and hosts files**.

It uses Android's VPN system to filter traffic locally – **no root required**.

## 🚀 Step 2 – Install DNS66

DNS66 is **not available on Google Play**, but you can download and install it safely via **F-Droid**.

### Option 1: Install via F-Droid (Recommended)

1. **Install the F-Droid app store** from the official site:
   👉 [https://f-droid.org](https://f-droid.org)

2. Open F-Droid, search for **DNS66** and tap **Install**.

### Option 2: Install Manually (APK File)

1. Visit the official GitHub page:
   👉 [https://github.com/julian-klode/dns66](https://github.com/julian-klode/dns66)

2. Scroll to the **Releases** section and download the latest `.apk` file.

3. Open the `.apk` and install it. (You may need to allow "Unknown Sources" for installation.)

## ⚙️ Step 3 – Setup DNS66 with Crypto Firewall

Once installed, follow these steps to activate DNS66 and add the **Crypto Firewall** protection:

### 🔧 A. Basic App Setup

1. Open **DNS66**.
2. Tap the **Start** button at the bottom.
   It will request VPN permissions – **tap Allow**.
3. You'll now see a key icon in your status bar – that means DNS66 is running.

### 🛡️ B. Add Crypto Firewall Adblock Lists

To block crypto mining, scams and suspicious domains, we'll add Crypto Firewall's custom blocklists.

#### 1. Go to the **Hosts** tab in DNS66

*(This is where you manage filtering sources.)*

#### 2. Tap the **"+" (Add)** icon in the top right

You will be prompted to enter a new hosts source.

#### 3. Add a name (e.g., `Crypto Firewall Mega`)

Then use one of the following URLs depending on your preference:

### ✅ Recommended Hosts Lists

| Version             | Description                       | URL                                                                                                     |
| ------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Lite** (stable)   | Basic blocklist, fast performance | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt` |
| **Full** (stable)   | More aggressive blocking          | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt` |
| **Mega** (stable)   | Maximum protection                | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt` |
| **Beta** (unstable) | Cutting edge updates              | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt` |

📝 You can also try these **HOSTS-format lists** (use these under "Hosts" tab only):

* **Domains Only**
  `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt`

* **Domains and IPs**
  `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt`

### 4. After adding, tap the toggle next to the new source to **enable it**.

### 🔁 Step 4 – Refresh and Start Filtering

1. Tap the **refresh icon** 🔄 at the top-right of the Hosts tab.
2. Go back to the **Start** tab and tap **Start** again if needed.

## 🔍 Optional: Add IP-Based Blocklist

If you'd like to block **malicious IP addresses**, add this list under the **"DNS" tab**:

* `https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-adblock.txt`

> DNS66 does not support IP filtering directly via hosts, but adding this as an external DNS might help with network-wide blocking in some advanced configurations.

## 🧪 How to Test if It's Working

You can check if DNS66 is working by visiting a known blocked site or testing DNS using a tool like:

👉 [dnsleaktest.com](https://dnsleaktest.com)
👉 [browserleaks.com/dns](https://browserleaks.com/dns)

If your traffic is routed through DNS66 and domains are blocked, the setup is successful.

## 📌 Tips and Notes

* DNS66 works only when the **VPN is active** – turning it off disables all filtering.
* You can combine Crypto Firewall with other trusted hosts sources if desired.
* If a website isn't loading, it may be blocked – toggle the list off to test.

## 🙋 Need Help?

For the latest blocklists or issues, visit:

🔗 [Crypto Firewall GitHub](https://github.com/chartingshow/crypto-firewall)
🔗 [DNS66 GitHub](https://github.com/julian-klode/dns66)
