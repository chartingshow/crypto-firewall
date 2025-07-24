# 🧱 pfSense + pfBlockerNG + Crypto Firewall Integration Guide

**Block Crypto Mining, Scam Tokens and Malicious Blockchain Domains Network-Wide**

> ✅ Works with pfSense 2.7+, Netgate devices and community hardware.

## 🛠️ Step 1: Install pfBlockerNG

1. Log into your pfSense web interface.

2. Navigate to:
   **System → Package Manager → Available Packages**

3. Search for **pfBlockerNG** and install **pfBlockerNG-devel**

## ⚙️ Step 2: Enable pfBlockerNG

Once installed:

1. Go to:
   **Firewall → pfBlockerNG → General**
2. Enable pfBlockerNG
3. Set your update frequency and settings

Then click **Save**.

## 🧱 Step 3: Add Crypto Firewall Blocklists

The Crypto Firewall provides multiple blocklist formats for:

* Domains (DNSBL)
* IPs (Firewall)
* Hosts-style blocking

We'll start with **DNSBL using Adblock format lists**.

### 3.1 Navigate to DNSBL

Go to:
**Firewall → pfBlockerNG → DNSBL → DNSBL Groups**

Click **Add**

### 3.2 Add the Crypto Firewall List

| List Type          | URL                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Full (Recommended) | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt` |
| Lite               | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt` |

#### Configure Fields:

* **Name**: `CryptoFirewall`
* **Description**: `Crypto mining and scam protection`
* **DNSBL Source Type**: `EasyList`
* **Update Frequency**: `Once a day`

Click **Save DNSBL Settings**

## ⚠️ Step 4: Add IP Blocklist (Optional)

Crypto Firewall also provides an **IP-level blocklist** (for Firewall Rules).

### Navigate to:

**Firewall → pfBlockerNG → IP → IPv4 Lists**
Click **Add**

Use this source:

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-adblock.txt
```

Set:

* **List Name**: `CryptoIPBlock`
* **Format**: `Firewall Alias`
* **Update Frequency**: Daily

Click **Save**

## 🔄 Step 5: Apply & Force Update

Go to:
**Firewall → pfBlockerNG → Update**

Click:

* ✅ **Force Reload**
* 🕐 Wait for logs to finish

## ✅ Step 6: Verify Blocking

Visit known test domains like:

* `coinhive.com`
* Scam token domains or `.xyz` token phishing URLs

Then:

* Open **pfBlockerNG → Reports**
* Or go to **System Logs → DNS Resolver or Firewall**

## 🧼 Optional Tips

* You can **whitelist** entries in:
  `Firewall → pfBlockerNG → DNSBL → Whitelist`
* Adjust DNSBL settings to "deny" or "NXDOMAIN" as needed
* You can add multiple Crypto Firewall lists (Full, Mega, Beta)

## 🔗 Crypto Firewall Blocklist Links

| Type  | Format     | Link                                                                                                             |
| ----- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Lite  | EasyList   | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt`          |
| Full  | EasyList   | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt`          |
| Mega  | EasyList   | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt`          |
| IPs   | IP List    | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-adblock.txt` |
| Hosts | Hosts File | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt`    |

## 💬 Need Help?

* [Crypto Firewall GitHub](https://github.com/chartingshow/crypto-firewall)
* [pfSense Documentation](https://docs.netgate.com/pfsense/en/latest/)
