# 🔒 AdBlock + Crypto Firewall Installation Guide

This guide will help you install [AdBlock](https://getadblock.com/en/) on your browser and configure it to block malicious crypto domains using **Crypto Firewall** lists.

## 🧩 Step 1 – Install AdBlock

Choose your browser and click the corresponding link below to install **AdBlock**:

* **Google Chrome:** [getadblock.com/en/chrome](https://getadblock.com/en/chrome/)
* **Mozilla Firefox:** [getadblock.com/en/firefox](https://getadblock.com/en/firefox/)
* **Safari (Mac):** [getadblock.com/en/safari](https://getadblock.com/en/safari/)
* **iOS (iPhone/iPad):** [getadblock.com/en/iOS](https://getadblock.com/en/iOS/)
* **Android (Samsung, etc.):** [getadblock.com/en/android/](https://getadblock.com/en/android/)

### ➕ How to Install

1. Visit the link for your browser above.
2. Click **"Get AdBlock Now"** or the **"Add to \[Your Browser]"** button.
3. Follow the on-screen prompts to complete installation.
4. Once installed, you will see the **AdBlock icon** in your browser toolbar.

## 🔐 Step 2 – Add Crypto Firewall to AdBlock

Crypto Firewall is a powerful filter list that blocks phishing, scam, and malicious crypto-related domains.

### ✅ Choose Your Protection Level

You can pick **one** of the following filter lists to add to AdBlock:

| Version             | Description                           | Link                                                                                                    |
| ------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Lite (Stable)**   | Balanced list for most users          | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt` |
| **Full (Stable)**   | Extended protection with more domains | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt` |
| **Mega (Stable)**   | Maximum protection, largest list      | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt` |
| **Beta (Unstable)** | Latest updates, may cause issues      | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt` |

## 🛠️ How to Add the Crypto Firewall List to AdBlock

> ⚠️ Make sure AdBlock is installed before starting.

### Step-by-Step Instructions

1. **Open AdBlock Settings**

   * Click the **AdBlock icon** in your browser toolbar.
   * Choose **"Options"** or **"Settings"**.

2. **Go to Filter Lists**

   * Click the **"Customize"** or **"Filter Lists"** tab.

3. **Add a New Filter List**

   * Scroll to the bottom of the page and find **"Custom Filters"** or **"Manually Edit Your Filters"**.
   * Paste your preferred Crypto Firewall list URL into the box. For example:

     ```
     https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt
     ```

4. **Save & Reload**

   * Click **"Save"** or **"Apply Changes"**.
   * You may need to refresh your browser tabs for the new filters to take effect.

## 📁 Optional: Add IP and Hosts-Based Protection

For more advanced protection, you can add these additional lists:

### 🔹 IP Blocklist (for IP-based filtering)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-adblock.txt
```

### 🔹 Hosts Lists (for DNS-based blocking, with tools like Pi-hole)

* **Domains Only:**

  ```
  https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
  ```
* **Domains and IPs:**

  ```
  https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt
  ```

## 🧪 Tips & Notes

* Only **add one primary list** (Lite, Full, Mega, or Beta) to avoid duplicate or conflicting entries.
* The lists are **automatically updated** when hosted on GitHub.
* To reduce browser lag, avoid using **Mega or Beta** lists on low-end devices.
* Want mobile protection? iOS and Android versions of AdBlock support custom filters too!

## 🆘 Help & Troubleshooting

If you run into issues:

* Double-check the filter list URL was copied **exactly**.
* Make sure you **only add the list once**.
* Refresh your browser or **restart** it after applying changes.

For more help, visit the official [AdBlock Help Center](https://help.getadblock.com/).
