# 🔒 How to Use Crypto Firewall with Blokada (Android)

**Applies to:** Android users only (Blokada 5 and 6 are not available on iOS with custom blocklists)

## ✅ What You’ll Need

* An Android device
* A working internet connection
* The **Blokada app** installed (via [Blokada.org](https://blokada.org/))
* One or more **Crypto Firewall** blocklists (links provided below)

## 1️⃣ Step 1: Install Blokada

Blokada is **not available on Google Play** due to its network-blocking capabilities. Follow these steps to install it safely:

### 🔹 Option A: Download from Blokada Website

1. Go to [https://blokada.org/](https://blokada.org/)
2. Tap **Download**.
3. Choose **Blokada 5 APK** or **Blokada 6 (Advanced users)**.
4. Download the APK file to your device.
5. When prompted, allow your browser to install unknown apps.
6. Tap the downloaded file to install Blokada.
7. Launch the Blokada app.

> 💡 **Recommended:** Use **Blokada 5** unless you know how to configure Blokada 6 manually.

## 2️⃣ Step 2: Enable Blokada VPN

1. Open the Blokada app.
2. Tap the **power icon** (🟢) to enable protection.
3. Allow the VPN permission when prompted.

This enables DNS-level ad blocking and filtering.

## 3️⃣ Step 3: Add Crypto Firewall Blocklists

Blokada lets you add custom blocklists to filter unwanted traffic.

### 📍 Where to Find the Lists

You can choose one or more of the following **Crypto Firewall** blocklists based on your needs:

| Version         | Description                   | URL                                                                                                     |
| --------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| Lite (stable)   | Lightweight protection        | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt` |
| Full (stable)   | Standard strong protection    | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt` |
| Mega (stable)   | Aggressive blocking           | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt` |
| Beta (unstable) | Cutting edge, may break sites | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt` |

### ✅ Add the Blocklist in Blokada 5

1. Open the **Blokada** app.
2. Tap the **Shield icon** (bottom menu).
3. Tap **Blocklists**.
4. Tap **+ Add a new blocklist** (or scroll down to **Add via URL**).
5. Paste the URL of the Crypto Firewall list (e.g., the Full version):

   ```
   https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt
   ```
6. Tap **Add**.
7. Enable the new blocklist by toggling the switch next to its name.

> 🔄 You can update lists manually or let Blokada auto-update them.

## 4️⃣ Optional: Use Hosts-Based Lists or IP Blocking

If you're a power user, you can also add **hosts-based** or **IP-based** lists:

### 🔹 Hosts Files:

| Type          | URL                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| Domains only  | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt`    |
| Domains + IPs | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt` |

### 🔹 IP Blocking List:

* IP list:
  `https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-adblock.txt`

> ⚠️ Not all versions of Blokada fully support IP blocking; results may vary.

## 🔁 How to Switch Blocklist Versions

To switch to a different Crypto Firewall version:

1. Go to the **Blocklists** section.
2. Tap the **"⋮" (three-dot menu)** next to the current list.
3. Tap **Remove** or **Disable**.
4. Tap **Add via URL** and paste your new preferred version.

## 🚨 Troubleshooting Tips

* If websites break or load incorrectly, try switching to the **Lite** version.
* Don’t add too many lists — overloading can slow down your device.
* Always keep Blokada running in the background for protection.

## 🙋 Need Help?

* Visit the official Blokada FAQ: [https://blokada.org/help](https://blokada.org/help)
* Learn more about Crypto Firewall: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)

## 🔚 Summary

| Task                                                     | Status |
| -------------------------------------------------------- | ------ |
| Install Blokada                                          | ✅      |
| Enable VPN                                               | ✅      |
| Add Crypto Firewall                                      | ✅      |
| Stay protected from crypto scams, phishing and trackers | 🔐     |
