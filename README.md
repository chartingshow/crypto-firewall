<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/firewall-icon.png" width="128" height="128" /></p>

<h1 align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/Title-Emoji.svg" /></h1>

The **Crypto Firewall** is a threat intelligence and blocking system built to defend against crypto-related threats including phishing, scams, malware, and cryptojacking.

With continuously updated **blocklists, filters, and indicators of compromise (IOCs)**, it can be deployed across browsers, operating systems, and networks—helping you stay protected in an increasingly hostile crypto environment.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/cover-1.jpg" /></p>

If you discover a false positive or need to add a new block, then feel free to raise an [Issue](https://github.com/chartingshow/crypto-firewall/issues/new/choose) or a [Pull request](https://github.com/chartingshow/crypto-firewall/pulls) to **add/remove** them to the lists.

<p align="center">
    <img src="/assets/images/charting-show-badge-2.png" height="20" alt="Charting Show" />
    <img src="/assets/images/stars.svg" alt="stars" />
    <img src="/assets/images/type-package-2.png" height="20" alt="package" />
    <a href="https://circleci.com/gh/chartingshow/crypto-firewall"><img src="/assets/images/circleci.svg"></a>
    <img src="/assets/images/code.svg" />
    <a href="CODE_OF_CONDUCT.md"><img src="/assets/images/conduct.svg" alt="conduct" /></a>
    <a href="https://github.com/chartingshow/crypto-firewall/tree/master/docs"><img src="/assets/images/docs.svg" alt="docs" /></a>
    <a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" /></a>
</p>

## Table of Contents 📑

### [Overview](#overview-1)

  * [Quick Start ⚡](#quick-start-)

### [Getting Started](#getting-started-1)

  * [Installation ❤️](#installation-%EF%B8%8F)
    + [Browser Blocking 🌟](#browser-blocking-)
    + [Ad Blockers ☀️](#ad-blockers-%EF%B8%8F)
    + [Network / DNS Filtering 🔓](#network--dns-filtering-)
    + [Firewalls / IDS / SIEM 🛡️](#firewalls--ids--siem-%EF%B8%8F)
    + [Operating System Blocking 🌟](#operating-system-blocking-)
  * [Crypto Annoyances (Optional Step) 🚀](#crypto-annoyances-optional-step-)

### [Usage & Versions](#usage--versions-1)

  * [Basic usage 🔥](#basic-usage-)
  * [Recommended versions ✅](#recommended-versions-)
  * [Stable Versions 🏆](#stable-versions-)
    + [Lite Version](#lite-version)
    + [Full Version](#full-version)
    + [Mega Version](#mega-version)
  * [Beta Version ⚠️](#beta-version-%EF%B8%8F)

### [Blocklists & Intelligence](#blocklists--intelligence-1)

  * [Core Infrastructure Blocking 🌐](#core-infrastructure-blocking-)
  * [Application & User Threats 👨‍💻](#application--user-threats-%E2%80%8D)
  * [Blockchain Threat Intelligence 🕵️](#blockchain-threat-intelligence-%EF%B8%8F)
  * [Sanctions & Compliance 🚫](#sanctions--compliance-)

### [Modules](#modules-1)

  * [Modules ⚙️](#modules-%EF%B8%8F)

### [Project & Community](#project--community-1)

  * [Issues 🔨](#issues-)
  * [Changelog 🏆](#changelog-)
  * [Support / Donations 💗💗💗](#support--donations-)
  * [Sponsors ✨](#sponsors-)
  * [Backers ✨](#backers-)
  * [Contributions ✨](#contributions-)
    + [Contribution Terms](#contribution-terms)
  * [Requesting Icons 🎁](#requesting-icons-)

### [Security & Legal](#security--legal-1)

  * [Security 🔐](#security-)
  * [Disclaimer ⚠️](#disclaimer-%EF%B8%8F)
  * [Legal ⚖️](#legal-%EF%B8%8F)
  * [License 📄](#license-)
    + [Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)](#many-thanks-to-all-the-stargazers-who-have-supported-this-project-with-stars)
    + [SEO Keywords](#seo-keywords)

# Overview

Crypto Firewall is a threat intelligence and blocking system designed to defend against crypto-related threats including phishing, scams, malware, and cryptojacking.

It provides continuously updated blocklists and indicators of compromise (IOCs) for use across browsers, operating systems, and network-level security tools.

<details>
<summary><strong>Why Crypto Firewall?</strong></summary>

The cryptocurrency ecosystem is a high-value target for attackers, with threats evolving faster than traditional protections.

Crypto Firewall reduces risk by:

- Blocking malicious domains and infrastructure
- Preventing phishing and scam access
- Disrupting cryptojacking and malicious scripts
- Integrating with modern security tooling

</details>

## Quick Start ⚡

Get protected in under 2 minutes:

1. Install an ad blocker (e.g. Brave or uBlock Origin)
2. Add one list:

- **Lite (low resource):**

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt
```

- **Full (recommended):**

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt
```

- **Mega (maximum protection):**

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt
```

3. Restart your browser

➡️ See [Installation](#installation) for advanced setups

<details>
<summary><strong>Recommended Setup</strong></summary>

- **Most users:** Full  
- **High-performance / network-level:** Mega  
- **Low-end devices / mobile:** Lite  
- **Testing / early adopters:** Beta

</details>

<details>
<summary><strong>Who is this for?</strong></summary>

- Individual traders and investors  
- Security-conscious users  
- Developers and system administrators  
- Network operators and security teams  

Supports deployment at:

- Browser level (ad blockers)  
- OS level (hosts file)  
- Network level (DNS, firewalls, IDS/IPS)

</details>

<details>
<summary><strong>Threat Model</strong></summary>

**Mitigates:**
- Phishing and scam infrastructure  
- Cryptojacking (browser-based mining)  
- Malware distribution endpoints  
- Command-and-control (C2) servers  
- Fraudulent blockchain services  

**Does not cover:**
- Zero-day exploits  
- Compromised endpoints  
- Social engineering outside detectable infrastructure  

</details>

<details>
<summary><strong>Scope & Limitations</strong></summary>

- Not a complete security solution  
- Not a replacement for antivirus or endpoint protection  
- Not guaranteed to block all threats  

Use as part of a **layered security strategy**.

</details>

<details>
<summary><strong>Data & Updates</strong></summary>

Blocklists are continuously updated from:

- Threat intelligence research  
- Community contributions  
- Ongoing analysis of emerging threats  

Enable automatic updates where supported.

</details>

# Getting Started

## Installation ❤️

Deploy Crypto Firewall at the **browser, system, or network level** for layered protection.

### Browser Blocking 🌟

Install an ad blocker that supports Adblock Plus-compatible filter lists.

#### Recommended ⭐

- ![Brave](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave.png) **[Brave Desktop Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/brave-desktop-browser-instructions.md)**  
- ![Brave](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave.png) **[Brave Mobile Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/brave-mobile-browser-instructions.md)**  

Built-in ad/tracker blocking with strong privacy defaults.

#### Alternatives ✨

- ![AdBlock Browser](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/adblock-browser.png) **[AdBlock Browser Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/adblock-browser-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/chrome.png" width="16" /> **Chrome Browser Guide** – MV3 limits (~30k rules)

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/firefox.png" width="16" /> [Firefox Guide](https://www.mozilla.org/firefox/new/) – Recommended for full extension capability

- ![Opera](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/opera.png) **Opera Browser Guide** – Native ad blocking

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/vivaldi.png" width="16" /> **[Vivaldi Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/vivaldi-browser-instructions.md)**

### Ad Blockers ☀️

Use with:

- ![AdAway](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/adaway.png) **[AdAway Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/adaway-instructions.md)**

- ![AdBlock Plus](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/adblock-plus.png) **[AdBlock Plus Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/adblock-plus-instructions.md)**

- ![AdGuard](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/adguard.png) **[AdGuard Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/adguard-instructions.md)**

- ![Blokada](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/blokada.png) **[Blokada Android Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/blokada-android-instructions.md)**
- ![Blokada](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/blokada.png) **[Blokada iOS Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/blokada-ios-instructions.md)**

- ![DNS66](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/dns66.png) **[DNS66 Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/dns66-instructions.md)**

- ![uBlock](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock.png) **[uBlock Origin (MV2) Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/ublock-origin-instructions.md)**  
- ![uBlock](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock.png) **[uBlock Origin Lite (MV3) Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/ublock-origin-lite-instructions.md)**

### Network / DNS Filtering 🔓

Deploy at network level for system-wide protection:

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/bind-logo.png" width="16" /> **[Bind RPZ Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/bind-rpz-instructions.md)**  
- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/bind-logo.png" width="16" /> **[Bind Zone Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/bind-zone-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/blocky-logo.png" width="16" /> **[Blocky Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/blocky-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/dnsmasq.png" alt="Dnsmasq" width="16" height="16" /> **[Dnsmasq Android Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/dnsmasq-android-instructions.md)**
- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/dnsmasq.png" alt="Dnsmasq" width="16" height="16" /> **[Dnsmasq Linux Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/dnsmasq-linux-instructions.md)**
- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/dnsmasq.png" alt="Dnsmasq" width="16" height="16" /> **[Dnsmasq Mac OS Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/dnsmasq-macos-instructions.md)**
- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/dnsmasq.png" alt="Dnsmasq" width="16" height="16" /> **[Dnsmasq Windows Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/dnsmasq-windows-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/dnscrypt-proxy.png" width="16" /> **[Dnscrypt-Proxy Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/dnscrypt-proxy-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/nextdns-logo.png" width="16" /> **[NextDNS Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/nextdns-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/pi-hole.png" width="16" /> **[Pi-hole Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/pi-hole-instructions.md)**

### Firewalls / IDS / SIEM 🛡️

For advanced deployments:

- ![pfSense](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/pfSense.png) **[pfSense + pfBlockerNG Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/pfsense-pfblockerng-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/snort-logo.png" width="16" /> **[Snort3 Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/snort3-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/splunk-icon.png" width="16" /> **[Splunk Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/splunk-instructions.md)**  
- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/splunk-icon.png" width="16" /> **[Splunk App Guide](https://splunkbase.splunk.com/app/8341)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/suricata-logo.png" alt="Suricata" width="16" height="16" /> **[Suricata Linux & Mac OS Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/suricata-linux-macos-instructions.md)**
- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/suricata-logo.png" alt="Suricata" width="16" height="16" /> **[Suricata Windows Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/suricata-windows-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/suricata-logo.png" alt="Suricata SNI" width="16" height="16" /> **[Suricata SNI Linux Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/suricata-sni-linux-instructions.md)**
- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/suricata-logo.png" alt="Suricata SNI" width="16" height="16" /> **[Suricata SNI Mac OS Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/suricata-sni-macos-instructions.md)**
- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/suricata-logo.png" alt="Suricata SNI" width="16" height="16" /> **[Suricata SNI Windows Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/suricata-sni-windows-instructions.md)**

### Operating System Blocking 🌟

Apply system-wide blocking via hosts file:

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/linux.png" width="16" /> **[Linux Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/linux-hosts-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/mac-os.png" width="16" /> **[macOS Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/mac-hosts-instructions.md)**

- <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/microsoft.png" width="16" /> **[Windows Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/windows-hosts-instructions.md)**

#### Hosts Lists

- Domains only:  
  https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt

- Domains + IPs:  
  https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt

- Editing guide:  
  https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/how-to-edit-your-hosts-file.md

## Crypto Annoyances (Optional) 🚀

Removes UI clutter, trackers, and promotional noise (non-breaking):

- **[Crypto Annoyances Filter](https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/block-crypto-annoyances.txt)**

**Quick add:**

- ![Brave](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave.png) **[Brave Desktop Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/brave-desktop-browser-instructions.md#step-6-developer-mode)**  
- ![Brave](https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave.png) **[Brave Mobile Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/brave-mobile-browser-instructions.md#step-10-add-custom-filter-list-url)**  

# Usage & Versions

## Basic usage 🔥

For a thorough explanation on how to add the to your adblocker, open one of the help guides found in this folder:

- https://github.com/chartingshow/crypto-firewall/tree/master/docs

## Recommended versions ✅

Filtering may impact performance. Choose a version based on your device capability:

### Suggested Versions (Performance & Device)

Choose a version based on your device performance. If unsure, start with `full` and adjust based on performance.

- **Low-End Devices**  
  → `lite` (upgrade to `full` if stable)

- **Mid-Range Devices**  
  → `full` (downgrade to `lite` if needed)

- **High-Performance Devices**  
  → `mega` (fallback: `full`)

- **Enthusiast / Workstations**  
  → `mega` or `beta` (fallback: `full`)

## Stable Versions 🏆

### Lite Version

The `Lite` version **excludes all the modules**.

There are two methods to install into your adblocker:

1. Click the link below:

- [https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt&title=Crypto%20Firewall%20Lite%20Version](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt&title=Crypto%20Firewall%20Lite%20Version)

2. Copy and paste the link in the settings of the ad-blocker:

- https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt

### Full Version

The `Full` version **contains all the modules (except the [crypto annoyances (stable)](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/crypto-annoyances-ublock.txt), [domains (stable)](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/domain-filters/), [subdomains (stable)](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/subdomain-filters/), [urls (stable)](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/url-filters/) and [adverts-filters (unstable)](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/adverts-filters) modules)**.

There are two methods to install into your adblocker:

1. Click the link below:

- [https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt&title=Crypto%20Firewall%20Full%20Version](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt&title=Crypto%20Firewall%20Full%20Version)

2. Copy and paste the link in the settings of the ad-blocker:

- https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt

### Mega Version

The `Mega` version **contains all the modules (except [adverts-filters (unstable)](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/adverts-filters) module)**.

There are two methods to install into your adblocker:

1. Click the link below:

- [https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt&title=Crypto%20Firewall%20Mega%20Version](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt&title=Crypto%20Firewall%20Mega%20Version)

2. Copy and paste the link in the settings of the ad-blocker:

- https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt

## Beta Version ⚠️

The `Beta` version **contains all the stable and unstable modules**.

> To help the repo grow, please feel free to **report any bugs!**

There are two methods to install into your adblocker:

1. Click the link below:

- [https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt&title=Crypto%20Firewall%20Beta%20Version](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt&title=Crypto%20Firewall%20Beta%20Version)

2. Copy and paste the link in the settings of the ad-blocker:

- https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt

# Blocklists & Intelligence

## Core Infrastructure Blocking 🌐

- **Free DNS / Hosting**  
  Blocks high-abuse hosting providers frequently used for malware.  
  → https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/free-dns-hosting/

- **ASN Blocking**  
  Blocks entire network ranges linked to malicious activity.  
  → https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/asn.txt

- **IP Blocking**  
  Blocks known malicious IPs (e.g. C2 servers, malware infrastructure).  
  → https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/ip.txt  
  → https://github.com/chartingshow/crypto-firewall/blob/master/src/ip-adblock.txt

- **Custom IP Lists (Advanced)**  
  Targeted IP blocks that may overlap with shared infrastructure — review before use.  
  → https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/custom-ip-block-lists

## Application & User Threats 👨‍💻

- **Malicious Extensions & Packages**  
  Blocks known malicious browser extensions and software packages.  
  → https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/packages-and-extensions

- **Email Threats**  
  Blocks scam, ransomware, sextortion, and blackmail email addresses.  
  → https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/email.txt

- **Spam Calls**  
  References tools to block scam and spoofed numbers.  
  → https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/spam-calls/list.md

## Blockchain Threat Intelligence 🕵️

- **Wallet Addresses**  
  Blocks known malicious or scam-linked wallet addresses.  
  → https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/blockchain-wallet-addresses/

- **Transactions**  
  Blocks suspicious transaction hashes linked to fraud or C2 activity.  
  → https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/blockchain-transactions

- **Mining Pools**  
  Blocks malicious or high-risk mining pool addresses.  
  → https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/mining-pools-addresses/

## Sanctions & Compliance 🚫

- **OFAC Sanctions**  
  Blocks sanctioned digital currency addresses (SDN and related lists).  
  → https://github.com/chartingshow/crypto-firewall/tree/master/src/ofac-sanctioned-digital-currency-addresses  
  → https://home.treasury.gov/policy-issues/financial-sanctions/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists

# Modules

## Modules ⚙️

Crypto Firewall modules are grouped by threat type and use case:

### Core Threat Categories 🚨
Primary security filters targeting high-risk threats.

- [Malware Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/malware-filters)
- [Phishing Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/phishing-filters)
- [Phishing Other Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/phishing-other-filters)
- [Scam Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/scam-filters)
- [Fraud Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/fraud-filters)
- [Ransomware Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/ransomware-filters)

### Infrastructure & Network 🌐
Focuses on domains, botnets, and network-level indicators.

- [Botnet Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/botnet-filters)
- [Domain Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/domain-filters)
- [Subdomain Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/subdomain-filters)
- [Url Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/url-filters)
- [URLhaus Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/urlhaus-filters)

### Content & Behaviour 🧠
Targets ads, tracking, and misleading content.

- [Ad Server Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/ad-servers)
- [Adverts Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/adverts-filters)
- [Tracking Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/tracking-filters)  
  **⚠️ May break websites (blocks JavaScript-heavy functionality)**

- [Fake News Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/fake-news-filters)

### Specialised Threats 🎯
Targeted filters for specific attack vectors.

- [Bank Phishing Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/bank-phishing-filters)
- [Pig Butchering Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/pig-butchering-filters)
- [PUP Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/pup-filters)
- [Abuse Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/abuse-filters)
- [Malicious Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/malicious-filters)

# Project & Community

## Issues 🔨

<img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed-raw/chartingshow/crypto-firewall?style=plastic"> <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/chartingshow/crypto-firewall">

If you face any issue, you can create a new issue in the `Issues` tab and we will be glad to help you out!

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/github-contribution-grid-snake.svg" /></p>

## Changelog 🏆

Please see [CHANGELOG](https://github.com/chartingshow/crypto-firewall/releases) for more information what has changed recently.

## Support / Donations 💗💗💗

<p><a href="https://opencollective.com/charting-show"><img align="center" src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/support-charting-show.jpg" /></a></p>

If you like Charting Show you can support the project's improvements and development of new features with a donation to our collective.

👉 [https://opencollective.com/chartingshow](https://opencollective.com/chartingshow)

## Sponsors ✨

Support us by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/chartingshow#category-CONTRIBUTE)]

<a href="#" target="_blank"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/avatars-2.png" width="64"></a>

## Backers ✨

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/chartingshow#category-CONTRIBUTE)]

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/charting-show-backers-2.png"></p>

## Contributions ✨

This project exists thanks to all the people who contribute.

<p align="center">
  <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/charting-show-contributors-2.png" />
</p>

We are actively inviting new contributors! To get started, please read the [contribution guide](CONTRIBUTING.md).

This project is only possible thanks to the work of many dedicated contributors. Everyone is encouraged to help in ways large and small. Here are a few ways you can contribute:

* Review existing content and help fix spelling, grammar, or clarity issues
* Pick an open [issue](https://github.com/chartingshow/crypto-firewall/issues) and submit a pull request
* Open a new issue to suggest improvements, report bugs, or propose features

### Contribution Terms

By submitting a contribution (including pull requests, issues, or any form of content), you agree that your contributions will be licensed under the **GNU General Public License v3.0 (GPL-3.0)**.

You also confirm that:

* You have the legal right to contribute the content
* Your contribution does not violate any third-party rights
* Any included third-party material complies with its respective licensing terms

## Requesting Icons 🎁

When you want to request a icon please feel to create a issue. See our [contribution guidelines](CONTRIBUTING.md) for more information.

# Security & Legal

## Security 🔐

We take security seriously and appreciate responsible disclosure.

If you discover a **security vulnerability**, please report it **privately** by contacting the maintainers rather than opening a public issue. This allows us to investigate and address the issue without exposing users to unnecessary risk.

For general bugs, false positives, or feature requests, please use the GitHub Issues tab.

## Disclaimer ⚠️

<details>
<summary><strong>No Warranty</strong></summary>

This software is provided **"as is"**, without warranty of any kind, express or implied, including but not limited to:

- Fitness for a particular purpose
- Reliability or availability
- Protection against all security threats

See the GNU General Public License v3.0 for full details.
</details>

<details>
<summary><strong>Limitation of Liability</strong></summary>

In no event shall the maintainers or contributors be held liable for:

- Financial loss (including cryptocurrency loss)
- Security breaches or system compromise
- Data loss or corruption
- Service disruption or downtime
- Any direct, indirect, incidental, or consequential damages

arising from the use of this project.
</details>

<details>
<summary><strong>False Positives</strong></summary>

Due to the nature of threat intelligence and filtering systems:

- Legitimate domains, IPs, or services **may be incorrectly blocked**
- Malicious actors may evade detection

Users are responsible for reviewing and validating the data before applying it in production environments.
</details>

<details>
<summary><strong>Financial Disclaimer</strong></summary>

This project **does not provide financial or investment advice**.

Users should always conduct their own due diligence when interacting with cryptocurrency platforms, wallets, or transactions.
</details>

<details>
<summary><strong>Use at Your Own Risk</strong></summary>

By using this project, you acknowledge that:

- Security is a constantly evolving landscape
- No solution can provide complete protection
- You are solely responsible for how you implement and use this project
</details>

## Legal ⚖️

This project provides curated blocklists, filtering rules, and security guidance intended to help reduce exposure to malicious activity within the cryptocurrency ecosystem.

<details>
<summary><strong>Scope and Purpose</strong></summary>

Crypto Firewall is a **defensive security resource**, not a guarantee of protection. It is designed to assist users in identifying and blocking known threats, but it should be used as part of a broader security strategy.

This project **does not function as a traditional firewall appliance**, and should not be relied upon as a sole line of defense.
</details>

<details>
<summary><strong>Data Sources</strong></summary>

Data included in this project is derived from a combination of:

- Publicly available threat intelligence sources
- Community contributions
- Independent research

While we aim for accuracy and relevance, **we do not guarantee the completeness, accuracy, or timeliness** of any data provided.
</details>

<details>
<summary><strong>Third-Party Services</strong></summary>

This project may reference third-party platforms, services, or trademarks (e.g. exchanges, browsers, tools).

All trademarks, logos, and brand names are the property of their respective owners.

This project is **not affiliated with, endorsed by, or associated with any third-party services** mentioned.
</details>

## License 📄

Copyright (c) Charting Show.

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.

You are free to:

- Use, study, and run the software
- Modify and adapt the code
- Distribute original or modified versions

provided that any derivative work is also licensed under GPL-3.0.

For full license terms, see the `LICENSE` file or visit:
https://www.gnu.org/licenses/gpl-3.0

### Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

<p align="center"><img src="/assets/images/stargazers-2.png" alt="stars"></p>

### SEO Keywords

crypto security, crypto firewall, crypto scam protection, phishing protection, malicious domains, IP blocklist, ASN blocking, Web3 security, DeFi security, scam wallet blacklist, adblock crypto filter, DNS filtering, network security, threat intelligence, fraud prevention, crypto malware, browser protection, crypto phishing sites

[⬆ back to top](#table-of-contents-)

<p align="center">Made with ❤️ for the Decentralized World.</p>
