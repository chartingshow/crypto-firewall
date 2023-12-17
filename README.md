<p align="center">
  <img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/firewall-icon.png" width="128" height="128"/>
</p>

<h1 align="center">Charting Show - Crypto Firewall</h1>

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/cover-1.jpg" /></p>

Blocks browser-based crypto mining, cryptojacking, banking and crypto malware and phishing websites, apps and hackers command-and-control (C2) servers. The goal of this project is to help you safe and help you avoid getting scammed and losing your cryptocurrencies.

If you discover a false positive or need to add a new block, then feel free to raise an [Issue](https://github.com/chartingshow/crypto-firewall/issues/new/choose) or a [Pull request](https://github.com/chartingshow/crypto-firewall/pulls) to **add/remove** them to the lists.

<p align="center">
    <img src="/assets/images/badges/charting-show-badge.png" height="20" alt="Charting Show" />
    <img src="/assets/images/stars.svg" alt="stars" />
    <img src="/assets/images/badges/type-package.png" height="20" alt="package" />
    <a href="https://circleci.com/gh/chartingshow/crypto-firewall"><img src="/assets/images/circleci.svg"></a>
    <img src="/assets/images/code.svg" />
    <a href="CODE_OF_CONDUCT.md"><img src="/assets/images/conduct.svg" alt="conduct" /></a>
    <a href="https://github.com/chartingshow/crypto-firewall/tree/master/docs"><img src="/assets/images/docs.svg" alt="docs" /></a>
    <a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" /></a>
</p>

<br>

**Disclaimer:** New websites are being created all the time to steal cryptocurrencies from users, this is a cat and mouse game and these filter lists are not intended to be a complete solution! User discretion is advised, care and diligence of cyber security to avoid scams are recommended.

## Table of Contents 📑

- [Installation](#installation-%EF%B8%8F)
  - [AdBlock Filter](#adblock-filter-)
- [Basic usage](#basic-usage-)
  - [Stable Versions](#stable-versions-)
    - [Lite Version](#lite-version)
    - [Full Version](#full-version)
    - [Mega Version](#mega-version)
  - [Unstable Beta Version](#unstable-beta-version-%EF%B8%8F)
- [Hosts based blocking](#hosts-based-blocking-)
  - [Hosts](#hosts-)
  - [Adblockers](#adblockers-%EF%B8%8F)
  - [Perimeter blocking](#perimeter-blocking-)
- [Free DNS / Hosting blocking](#free-dns--hosting-blocking-)
- [IP blocking](#ip-blocking-)
  - [Custom IP block lists](#custom-ip-block-lists-)
- [Email blocking](#email-blocking-)
- [Fraudulent cryptocurrency wallet addresses](#fraudulent-cryptocurrency-wallet-addresses-%EF%B8%8F)
- [Fraudulent cryptocurrency mining pool addresses](#fraudulent-cryptocurrency-mining-pool-addresses-)
- [OFAC Sanctioned Digital Currency Addresses](#ofac-sanctioned-digital-currency-addresses-)
  - [How do we define sanctions data?](#how-do-we-define-sanctions-data)
- [Ad server blocking](#ad-server-blocking-)
- [Modules](#modules-%EF%B8%8F)
- [Issues](#issues-)
- [Changelog](#changelog-)
- [If you like the Charting Show project](#if-you-like-the-charting-show-project-)
  - [Sponsors](#sponsors-)
  - [Backers](#backers-)
- [Contributions, Feature Requests and Feedback](#contributions-feature-requests-and-feedback-)
- [Requesting icon](#requesting-icon-)
- [Security](#security-)
- [Semantic Versioning](#semantic-versioning-)
- [Legal](#legal-)
- [Copyright and License](#copyright-and-license-)
  - [Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)](#many-thanks-to-all-the-stargazers-who-have-supported-this-project-with-stars)

## Installation ❤️

### AdBlock Filter 🌟

Make sure you have an adblocker installed in your desktop or mobile browsers that uses [Adblock Plus](https://adblockplus.org/)' filter list:

- ![AdBlock](https://i.imgur.com/3KbyifF.png) [AdBlock](https://getadblock.com) (Active by default)
- ![AdBlock Plus](https://i.imgur.com/kPRCfhu.png) [Adblock Plus](https://adblockplus.org/)
- ![uBock Origin](https://i.imgur.com/PSFuzKb.png) [uBlock Origin](https://github.com/gorhill/uBlock) and [uBlock Origin Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/ublock-origin-instructions.md)
- ![AdGuard Browser Extension](https://i.imgur.com/zmMHq2j.png) [AdGuard Browser Extension](https://adguard.com/en/adguard-browser-extension/overview.html) (Included by default)
- ![AdBlock Browser](https://i.imgur.com/6pkmjA0.png) [Adblock Browser](https://adblockbrowser.org/) for **Android** and **iOS** devices
- ![Brave Browser](https://user-images.githubusercontent.com/831718/32730079-e80c013c-c853-11e7-83b4-7443bc489581.png) [Brave Browser](https://www.brave.com) (Included by default) and [Brave Browser Instructions Guide](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/brave-browser-instructions.md)
- ![Opera Browser](https://i.imgur.com/bP0t9xc.png) [Opera Browser](https://www.opera.com) (Included by default from Opera 50)

## Basic usage 🔥

For a thorough explanation on how to add the to your adblocker, open one of the help guides found in this folder:

- https://github.com/chartingshow/crypto-firewall/tree/master/docs

### Stable Versions 🏆

#### Lite Version

The `Lite` version **excludes all the modules**.

There are two methods to install into your adblocker:

1. Click the link below:

- [https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-lite.txt&title=Crypto%20Malware%20Block%20Lists](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-lite.txt&title=Crypto%20Malware%20Block%20Lists)

2. Copy and paste the link in the settings of the ad-blocker:

- https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-lite.txt

#### Full Version

The `Full` version **contains all the modules (except the [crypto annoyances (stable)](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/crypto-annoyances-ublock.txt), [domains (stable)](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/domain-filters/), [subdomains (stable)](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/subdomain-filters/), [urls (stable)](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/url-filters/) and [adverts-filters (unstable)](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/adverts-filters) modules)**.

There are two methods to install into your adblocker:

1. Click the link below:

- [https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-full.txt&title=Crypto%20Malware%20Block%20Lists](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-full.txt&title=Crypto%20Malware%20Block%20Lists)

2. Copy and paste the link in the settings of the ad-blocker:

- https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-full.txt

#### Mega Version

The `Mega` version **contains all the modules (except [adverts-filters (unstable)](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/adverts-filters) module)**.

There are two methods to install into your adblocker:

1. Click the link below:

- [https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-mega.txt&title=Crypto%20Malware%20Block%20Lists](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-mega.txt&title=Crypto%20Malware%20Block%20Lists)

2. Copy and paste the link in the settings of the ad-blocker:

- https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-mega.txt

### Unstable Beta Version ⚠️

The `Beta` version **contains all the stable and unstable modules**.

> To help the repo grow, please feel free to **report any bugs!**

There are two methods to install into your adblocker:

1. Click the link below:

- [https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-beta.txt&title=Crypto%20Malware%20Block%20Lists](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-beta.txt&title=Crypto%20Malware%20Block%20Lists)

2. Copy and paste the link in the settings of the ad-blocker:

- https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-beta.txt

## Hosts based blocking 💢

For the blocking based on the [HOSTS file](<https://en.wikipedia.org/wiki/Hosts_(file)>) use the below link:

- [https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts.txt](https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts.txt)

### Hosts 💾

You can simply copy and paste the contents of above file into your hosts file. The locations of your hosts file depends on your system:

- Linux: `/etc/hosts`
- MacOS: `/etc/hosts`
- Windows: `C:\Windows\System32\drivers\etc\hosts`

Whichever OS you use, you will require escalated privileges to edit the file (either use `sudo` for Linux/MacOS or administrative account on Windows). Or you can use command below for linux

```
sudo -- sh -c 'curl -sS https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/hosts.txt >> /etc/hosts'
```

### Adblockers ☀️

- ![DNS66](https://i.imgur.com/XFBuNqj.png) [DNS66](https://github.com/julian-klode/dns66) for **Android**
- ![Blokada](https://i.imgur.com/XB1l9aG.png) [Blokada](http://blokada.org/) for **Android**
- ![AdAway](https://i.imgur.com/AdWsIxw.png) [AdAway](https://github.com/AdAway/AdAway) for **Android**
- ![AdGuard](https://i.imgur.com/zmMHq2j.png) [AdGuard](https://adguard.com) for **All Platforms**

### Perimeter blocking 🔓

You may use the hosts file with below applications to block these miners on whole networks. Simply add the link to the above hosts file in each system.

- ![pfSense](https://i.imgur.com/ElyO5Ie.png) [pfSense](https://www.pfsense.org/) with [pfBlockerNG](https://www.tecmint.com/install-configure-pfblockerng-dns-black-listing-in-pfsense/)
- ![Pi-hole](https://i.imgur.com/0mgKKma.png) [Pi-hole](https://pi-hole.net)

## Free DNS / Hosting blocking 🆓

This repo blocks specific free dns / hosting services, that are completely saturated with hosting malware and viruses. This is to reduce the size of the filter lists and increase the performance. A list of services currently blocked can be found in the folder here:

- [Free DNS/Hosting Filter List](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/free-dns-hosting/)

## IP blocking 🌐

IP Addresses can also be blocked, these contain things such as command-and-control (C2) servers for crypto malware etc. You can add them to a firewall of your choice.

The IP block list can be found here:

- [IP Filter List](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/ip.txt)

For a thorough explanation on how to add block an ip address in your firewall, you can open one of the help guides found in this folder:

- https://github.com/chartingshow/crypto-firewall/tree/master/docs

### Custom IP Block Lists 📋

These custom IP address filter lists block specific malware and can be found in the folder:

- https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/custom-ip-block-lists

> The reason why these custom lists aren't in the main IP filter list is because these IP addresses maybe shared and used for public access or hosting multiple domains! These custom IP address filter lists are for advanced users who can customize them in order to not block their access or applications.

## Email blocking 📧

Email addresses can be blocked, our email block list contains known Crypto scammers, Ransomware, Sextortion and Blackmail email addresses.

The Email block list can be found here:

- [Email Filter List](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/email.txt)

To learn how to protect yourself from Sextortion emails, see here:

- https://github.com/chartingshow/crypto-firewall/blob/master/docs/scams/how-to-protect-yourself-from-sextortion-scams.md

How to Identify a Ransomware Email Attack, see here:

- https://github.com/chartingshow/crypto-firewall/blob/master/docs/scams/how-to-identify-a-ransomware-email-attack.md

## Fraudulent cryptocurrency wallet addresses 🕵️

Avoid sending cryptocurrency to bad actors and scammers, a list of bad blockchain wallet addresses can be found here in this folder:

- [Wallets Filter List](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/blockchain-wallet-addresses/)

## Fraudulent cryptocurrency mining pool addresses 🦈

Avoid joining bad cryptocurrency mining pools, a list of bad blockchain mining pool addresses can be found here in this folder:

- [Mining Pools Filter List](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/mining-pools-addresses/)

## OFAC sanctioned digital currency addresses 🚫

OFAC publishes lists of individuals and companies owned or controlled by, or acting for or on behalf of, targeted countries. It also lists individuals, groups, and entities, such as terrorists and narcotics traffickers designated under programs that are not country-specific. OFAC may add **digital currency addresses** to the SDN List to alert the public of specific **digital currency identifiers** associated with a blocked person.

The OFAC Sanctioned Digital Currency Addresses lists can be found in this folder:

- [OFAC Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/ofac-sanctioned-digital-currency-addresses)

### How do we define sanctions data?

Sanctioned entities refer to entities listed on economic/trade embargo lists, such as by the US, EU, or UN, with which anyone subject to those jurisdictions is prohibited from dealing. Currently, this includes the Specially Designated Nationals (SDN) list of the US Department of the Treasury’s Office of Foreign Assets Control (OFAC).

You can search the full list of OFAC Specially Designated Nationals in OFAC's [sanctions database](https://home.treasury.gov/policy-issues/financial-sanctions/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists).

## Ad server blocking 🇦🇩

The ad banners that you see all over the web are stored on servers. Stopping your computer communicating with another computer can be quite simple. So, if you have a list of the servers used for ad banners, it's easy to stop ad banners even getting to your browser.

These custom ad server filter block lists can be found in the folder:

- [Ad Server Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/ad-servers)

## Modules ⚙️

This repo contains various filter list modules, which users can check out in the following folders:

- [Abuse Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/abuse-filters)
- [Adverts Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/adverts-filters)
- [Domain Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/domain-filters)
- [Fraud Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/fraud-filters)
- [Malicious Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/malicious-filters)
- [Malware Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/malware-filters)
- [Phishing Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/phishing-filters)
- [Phishing Other Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/phishing-other-filters)
- [PUP Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/pup-filters)
- [Ransomware Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/ransomware-filters)
- [Scam Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/scam-filters)
- [Subdomain Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/subdomain-filters)
- [Tracking Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/tracking-filters) **(Note: This filter list blocks javascript files found on many websites and stop things from working correctly)**
- [Url Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/url-filters)
- [URLhaus Filter List](https://github.com/chartingshow/crypto-firewall/tree/master/src/blacklists/urlhaus-filters)

---

_Mining (Opt-in **and** opt-out) will be blocked by default. If you see that mining is important, you would have to [whitelist](https://adblockplus.org/filters#whitelist) the website you actually want to support._

## Issues 🔨

<img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed-raw/chartingshow/crypto-firewall?style=plastic"> <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/chartingshow/crypto-firewall">

If you face any issue, you can create a new issue in the `Issues` tab and we will be glad to help you out!

## Changelog 🏆

Please see [CHANGELOG](https://github.com/chartingshow/crypto-firewall/releases) for more information what has changed recently.

## If you like the Charting Show project 💗💗💗

<p><a href="https://opencollective.com/charting-show"><img align="center" src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/support-charting-show.jpg" /></a></p>

If you like Charting Show you can support the project's improvements and development of new features with a donation to our collective.

👉 [https://opencollective.com/chartingshow](https://opencollective.com/chartingshow)

### Sponsors ✨

Support us by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/chartingshow#category-CONTRIBUTE)]

<a href="#" target="_blank"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/avatars-1.jpg" width="64"></a>

### Backers ✨

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/chartingshow#category-CONTRIBUTE)]

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/charting-show-backers.jpg"></p>

## Contributions, Feature Requests and Feedback ✨

This project exists thanks to all the people who contribute.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/charting-show-contributors.jpg" /></p>

We are actively inviting new contributors! To start, please read the [contribution guide](CONTRIBUTING.md).

This project is only possible thanks to the work of many dedicated volunteers. Everyone is encouraged to help in ways large and small. Here are a few ways you can help:

- Read the current content and help us fix any spelling mistakes or grammatical errors.
- Choose an existing [issue](https://github.com/chartingshow/crypto-firewall/issues) on GitHub and submit a pull request to fix it.
- Open a new issue to report an opportunity for improvement.

If you find any bugs in the code or have any improvements in mind then feel free to generate a pull request.

## Requesting icon 🎁

When you want to request a icon please feel feel to create a issue. See our [contribution guidelines](CONTRIBUTING.md) for more information.

## Security 💥

If you discover any security related issues, please open an issue! We will try and sort it out asap.

## Semantic Versioning 🎁

This package uses: [Semantic Versioning](https://semver.org/).

## Legal 🔨

All logos and trademarks are the property of their respective owners.

## Copyright and License 📄

Copyright (c) Charting Show. All rights reserved.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Everyone is permitted to copy and distribute copies of Charting Show, but changing and hard forking are not allowed.

### Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

<p align="center"><img src="/assets/images/stargazers.jpg" alt="stars"></p>

[⬆ back to top](#table-of-contents-)

<p align="center">Made with ❤️ for the Decentralized World.</p>
