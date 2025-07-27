# 🛡️ How to Install uBlock Origin Lite (uBOL) + Add Crypto Firewall Filter List

> **We recommend using a different piece of software! Due to the Crypto Firewall blocking more than 30K of bad websites!**

## What is uBlock Origin Lite (uBOL)?

uBlock Origin Lite, also known as uBOL, is an experimental, permission-less content blocker designed to comply with the Manifest V3 (MV3) extension framework. It blocks ads, trackers, miners and more immediately upon installation, using a default ruleset that corresponds to uBlock Origin's default filterset, including EasyList, EasyPrivacy and Peter Lowe's Ad and tracking server list.

Unlike the full version of uBlock Origin, uBlock Origin Lite has several limitations due to MV3 constraints. These include no filter list updates outside of extension updates, no crafting of custom filters, no strict-blocked pages, no per-site switches, no dynamic filtering and no importing external lists.

### Manifest V3: How Google Chrome's Update Affects Ad-Blockers

Google Chrome's Manifest V3, rolled out in June 2024, will significantly impact ad-blockers and other browser extensions. **This update limits extensions to 30,000 rules, far below the 300,000 rules many ad-blockers currently use to function effectively**. The change from the webRequest API to the declarativeNetRequest API will reduce ad-blockers' flexibility and ability to update rules in real-time.

While some ad-blockers like AdGuard, uBlock Origin Lite and Ghostery have adapted to Manifest V3, users may notice decreased effectiveness in blocking ads. This move has sparked controversy, with critics arguing it gives Google more control over extensions and potentially benefits its advertising business. As a result, some users are considering alternative browsers like Firefox, which has committed to continuing support for Manifest V2.

### 🔢 Rule Limit Details

* **The 30,000 rule limit** is imposed by **Manifest V3**, the new extension platform enforced by Chromium-based browsers like **Google Chrome** and **Microsoft Edge**.
* This limit is **not unique to uBOL** — it applies to **all extensions** that use `declarativeNetRequest` (DNR), which uBOL is built on.
* The limit includes:

  * All rules from **built-in filter lists** (like EasyList, EasyPrivacy, etc.)
  * Any **custom filter lists** you manually add (like Crypto Firewall)
  * Any **rules added dynamically**

## ✅ Step 1 – Install uBlock Origin Lite (uBOL)

uBlock Origin Lite is available for both **Google Chrome** and **Microsoft Edge**.

### 👉 For Google Chrome:

1. Open this link:
   [🔗 Chrome Web Store – uBlock Origin Lite](https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh?pli=1)

2. Click the **"Add to Chrome"** button.

3. Confirm by clicking **"Add extension"** in the popup.

4. You will see the uBOL icon (a blue shield) in your Chrome toolbar.

### 👉 For Microsoft Edge:

1. Open this link:
   [🔗 Edge Add-ons – uBlock Origin Lite](https://microsoftedge.microsoft.com/addons/detail/ublock-origin-lite/cimighlppcgcoapaliogpjjdehbnofhn)

2. Click the **"Get"** button.

3. Confirm by clicking **"Add extension"** in the popup.

4. You'll now see the uBOL icon in your Edge toolbar.

## 🔒 Step 2 – Open uBOL Dashboard

1. Click the **uBlock Origin Lite icon** in the browser toolbar.
2. In the popup that opens, click the **gear ⚙️ icon** (bottom right) to access the **uBOL dashboard**.

## 🧱 Step 3 – Add the Crypto Firewall Filter List

uBOL supports external filter lists using AdBlock Plus format (ABP syntax). You can choose one of the following Crypto Firewall filter levels:

| Version  | Description                    |
| -------- | ------------------------------ |
| **Lite** | Low impact, stable             |
| **Full** | Standard protection            |
| **Mega** | Maximum protection             |
| **Beta** | Experimental and bleeding-edge |

### ✍️ Instructions to Add the Filter List:

1. In the uBOL dashboard, scroll to the **"Custom filter lists"** section.
2. Click **"+ Add list"**.
3. Paste one of the URLs below (pick the version you prefer):

### 🔗 Crypto Firewall Filter URLs

#### ✅ Lite Version (Recommended for most users)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt
```

#### 🔐 Full Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt
```

#### 🚨 Mega Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt
```

#### 🧪 Beta Version (unstable/test)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt
```

4. After pasting the desired URL, click **"Add"**.
5. Click the **"Update now"** button to load the list.
6. You're done! The filter list will now actively block scam and malicious crypto-related domains.

## ⚙️ Optional – Add Hosts-Based Blocklists

If you use a DNS-level blocker or a separate hosts manager (not through uBOL), you can also use these hosts files:

* **Domains Only**

  ```
  https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
  ```

* **Domains and IPs**

  ```
  https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt
  ```

## 💡 Notes

* uBOL does **not** support advanced dynamic filtering like the full uBlock Origin. It's designed to be lightweight and permissions-free.
* You can update the filter lists at any time by returning to the dashboard and clicking **"Update now."**
* For best performance, stick to **one Crypto Firewall version** at a time (Lite, Full, Mega, or Beta).

## 🧼 Uninstalling uBlock Origin Lite

1. Right-click the uBOL icon in your browser toolbar.
2. Click **"Remove from Chrome"** or **"Remove from Edge."**
3. Confirm removal.

## 🚫 uBlock Origin Lite (uBOL) – Limitations

### ❌ No Dynamic Filtering (Matrix View)

* **Missing Feature:** uBOL does **not** support dynamic filtering (i.e., the "Matrix View" in full uBlock Origin).
* **Impact:** You cannot fine-tune which scripts, iframes, or domains to block per site in real time.

### ❌ No Element Picker / Cosmetic Filtering

* **Missing Feature:** uBOL does not allow you to **manually remove elements** from pages using the picker tool.
* **Impact:** You cannot visually zap ads, banners, or other annoying UI elements.

### ❌ No Scripting or Procedural Filters

* **Missing Feature:** uBOL cannot use **scriptlets** or procedural cosmetic rules.
* **Impact:** This limits its ability to block tricky or obfuscated trackers, anti-adblockers and popups.

### ❌ No Logging / No Request Inspector

* **Missing Feature:** uBOL has **no network request logger** or traffic analysis tools.
* **Impact:** You cannot inspect what is being blocked or allowed, making it harder to debug or tune filtering.

### ❌ No Custom Script Injection

* **Missing Feature:** uBOL cannot inject custom JavaScript into web pages.
* **Impact:** Some anti-tracking or privacy rules (used in full uBO) won't work in uBOL.

### ❌ No Local Storage of Advanced Settings

* **Missing Feature:** uBOL is **stateless**, meaning it doesn't store rulesets or site-specific rules persistently beyond the filter lists.
* **Impact:** You can't make complex or long-term customizations to behavior.

### ❌ Filter List Size Limitations

* **Limited Feature:** uBOL has **less aggressive caching** and may impose size limits on imported lists depending on browser limits.
* **Impact:** Large lists like the **Mega** version of Crypto Firewall may load slower or partially.

## ✅ What uBlock Origin Lite **Can** Do Well

Despite these limitations, uBOL **does support** the following:

| Feature                                              | Supported |
| ---------------------------------------------------- | --------- |
| AdBlock Plus-style filter lists                      | ✅ Yes     |
| EasyList, EasyPrivacy, uBO Lite filters              | ✅ Yes     |
| Third-party lists (e.g. Crypto Firewall)             | 💡 Limited (Most lists block more than 30K of websites) |
| No extra permissions needed                          | ✅ Yes     |
| Fast and lightweight                                 | ✅ Yes     |
| Open-source and maintained by Raymond Hill (gorhill) | ✅ Yes     |

## 🔍 Use Cases Best Suited for uBOL

* Users who want a **set-it-and-forget-it** privacy tool.
* Corporate or school environments that **restrict browser extensions** with permissions.
* Users who prefer a **low-maintenance** experience with **low memory usage**.
* Kiosk or guest machines where dynamic filtering isn't needed.

## 🆚 Full uBlock Origin vs. uBlock Origin Lite

| Feature                 | uBlock Origin (Full) | uBlock Origin Lite |
| ----------------------- | -------------------- | ------------------ |
| Dynamic Filtering       | ✅ Yes                | ❌ No               |
| Scriptlet Injection     | ✅ Yes                | ❌ No               |
| Element Picker Tool     | ✅ Yes                | ❌ No               |
| Logger/Inspector        | ✅ Yes                | ❌ No               |
| Cosmetic Filtering      | ✅ Yes                | ❌ No               |
| Filter List Support     | ✅ Full ABP + uBO     | ✅ ABP Only         |
| Permissions Required    | ✅ Yes                | ❌ No               |
| Ideal for Power Users   | ✅ Yes                | ❌ No               |
| Lightweight & Stateless | ❌ No                 | ✅ Yes              |

### 🔗 Reference:

* GitHub: [https://github.com/uBlockOrigin/uBOL-home](https://github.com/uBlockOrigin/uBOL-home)
* Design Philosophy: uBOL is made for **privacy and simplicity**, not power-user customization!

> **We recommend using a different piece of software! Due to the Crypto Firewall blocking more than 30K of bad websites!**
