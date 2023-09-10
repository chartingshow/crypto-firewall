<p align="center">
  <img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/firewall-icon.png" width="128" height="128"/>
</p>

<h1 align="center">Summer CMS Block Bad Crypto Filter Lists</h1>

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/cover.jpg" /></p>

This is a filter list to block browser-based crypto mining, cryptojacking, injected crypto malware websites and phishing websites (all trying to steal cryptocurrency from other users). Currently there are a few websites added into the lists. If you see other websites supporting these deeds, then feel free to raise an **Issue** or a **Pull request** to add them to the lists.

<p align="center">
    <img src="/assets/images/stars.svg" alt="stars" />
    <img src="/assets/images/badges/cms.png" height="20" alt="summer cms" />
    <img src="/assets/images/badges/type-package.png" height="20" alt="package" />
    <a href="https://circleci.com/gh/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists"><img src="/assets/images/circleci.svg"></a>
    <img src="/assets/images/code.svg" />
    <a href="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists" title="GitHub action to setup PHP"><img alt="GitHub Actions status" src="/assets/images/work-flow.svg"></a>
    <a href="CODE_OF_CONDUCT.md"><img src="/assets/images/conduct.svg" alt="conduct" /></a>
    <a href="https://github.com/Summer-CMS-Modules/sc-documentation"><img src="/assets/images/docs.svg" alt="docs" /></a>
    <a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" /></a>
    <img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists?include_prereleases">
</p>

<br>

**Disclaimer:** New websites are being created all the time to steal cryptocurrencies from users, this is a cat and mouse game and these filter lists are not intended to be a complete solution! User discretion is advised, care and diligence of cyber security to avoid scams are recommended.

You can find external information to avoid cryptocurrency scams in the following government agency websites:

- https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams
- https://www.ic3.gov/
- https://www.fca.org.uk/investsmart/crypto-basics
- https://www.fca.org.uk/investsmart/investing-crypto
- https://www.fca.org.uk/consumers/crypto-investment-scams
- https://www.ic3.gov/Media/Y2023/PSA230804
- https://www.ic3.gov/Media/Y2023/PSA230309
- https://www.fca.org.uk/multimedia/fca-and-asa-team-warn-finfluencers-risks-promoting-illegal-get-rich-quick-schemes

## Table of Contents 📑

- [Installation ❤️](#installation-%EF%B8%8F)
  - [AdBlock Filter 🌟](#adblock-filter-)
- [Basic usage 🔥](#basic-usage-)
- [Hosts based blocking 💢](#hosts-based-blocking-)
  - [Hosts 💾](#hosts-)
  - [IP 🌐](#ip-)
  - [Adblockers ☀️](#adblockers-%EF%B8%8F)
  - [Perimeter blocking 🔓](#perimeter-blocking-)
- [Issues 🔨](#issues-)
- [Changelog 🏆](#changelog-)
- [If you like the Summer CMS project 💗💗💗](#if-you-like-the-summer-cms-project-)
  - [Sponsors ✨](#sponsors-)
  - [Backers ✨](#backers-)
- [Contributions, Feature Requests and Feedback ✨](#contributions-feature-requests-and-feedback-)
- [Requesting icon 🎁](#requesting-icon-)
- [Security 💥](#security-)
- [Semantic Versioning 🎁](#semantic-versioning-)
- [Legal 🔨](#legal-)
- [Copyright and License 📄](#copyright-and-license-)
  - [Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)](#many-thanks-to-all-the-stargazers-who-have-supported-this-project-with-stars)

## Installation ❤️

### AdBlock Filter 🌟

Make sure you have an adblocker installed in your desktop or mobile browsers that uses [Adblock Plus](https://adblockplus.org/)' filter list:

- ![AdBlock](https://i.imgur.com/3KbyifF.png) [AdBlock](https://getadblock.com) (Active by default)
- ![AdBlock Plus](https://i.imgur.com/kPRCfhu.png) [Adblock Plus](https://adblockplus.org/)
- ![uBock Origin](https://i.imgur.com/PSFuzKb.png) [uBlock Origin](https://github.com/gorhill/uBlock)
- ![AdGuard Browser Extension](https://i.imgur.com/zmMHq2j.png) [AdGuard Browser Extension](https://adguard.com/en/adguard-browser-extension/overview.html) (Included by default)
- ![AdBlock Browser](https://i.imgur.com/6pkmjA0.png) [Adblock Browser](https://adblockbrowser.org/) for **Android** and **iOS** devices
- ![Brave Browser](https://user-images.githubusercontent.com/831718/32730079-e80c013c-c853-11e7-83b4-7443bc489581.png) [Brave Browser](https://www.brave.com) (Included by default)
- ![Opera Browser](https://i.imgur.com/bP0t9xc.png) [Opera Browser](https://www.opera.com) (Included by default from Opera 50)

## Basic usage 🔥

For a thorough explanation on how to add the to your adblocker, open one of the help guides found in this folder: https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/tree/master/docs

There are two methods to install into your adblocker:

1. Click the link below:

- [https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/master/src/lists/nomalware.txt&title=Crypto%20Malware%20Block%20Lists](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/master/src/lists/nomalware.txt&title=Crypto%20Malware%20Block%20Lists)

2. Copy and paste the link in the settings of the ad-blocker:

- https://raw.githubusercontent.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/master/src/lists/nomalware.txt

## Hosts based blocking 💢

For the blocking based on the [HOSTS file](<https://en.wikipedia.org/wiki/Hosts_(file)>) use the below link:

- [https://raw.githubusercontent.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/master/src/lists/hosts.txt](https://raw.githubusercontent.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/master/src/lists/hosts.txt)

### Hosts 💾

You can simply copy and paste the contents of above file into your hosts file. The locations of your hosts file depends on your system:

- Linux: `/etc/hosts`
- MacOS: `/etc/hosts`
- Windows: `C:\Windows\System32\drivers\etc\hosts`

Whichever OS you use, you will require escalated privileges to edit the file (either use `sudo` for Linux/MacOS or administrative account on Windows). Or you can use command below for linux

```
sudo -- sh -c 'curl -sS https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/src/lists/hosts.txt >> /etc/hosts'
```

## IP 🌐

IP Addresses can also be blocked, these contain things such as command-and-control (C2) servers for crypto malware etc.

You can add them to a firewall of your choice.

For a thorough explanation on how to add block an ip address in your firewall, you can open one of the help guides found in this folder: https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/tree/master/docs

### Adblockers ☀️

- ![DNS66](https://i.imgur.com/XFBuNqj.png) [DNS66](https://github.com/julian-klode/dns66) for **Android**
- ![Blokada](https://i.imgur.com/XB1l9aG.png) [Blokada](http://blokada.org/) for **Android**
- ![AdAway](https://i.imgur.com/AdWsIxw.png) [AdAway](https://github.com/AdAway/AdAway) for **Android**
- ![AdGuard](https://i.imgur.com/zmMHq2j.png) [AdGuard](https://adguard.com) for **All Platforms**

### Perimeter blocking 🔓

You may use the hosts file with below applications to block these miners on whole networks. Simply add the link to the above hosts file in each system.

- ![pfSense](https://i.imgur.com/ElyO5Ie.png) [pfSense](https://www.pfsense.org/) with [pfBlockerNG](https://www.tecmint.com/install-configure-pfblockerng-dns-black-listing-in-pfsense/)
- ![Pi-hole](https://i.imgur.com/0mgKKma.png) [Pi-hole](https://pi-hole.net)

---

_Mining (Opt-in **and** opt-out) will be blocked by default. If you see that mining is important, you would have to [whitelist](https://adblockplus.org/filters#whitelist) the website you actually want to support._

## Issues 🔨

<img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed-raw/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists?style=plastic"> <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists">

If you face any issue, you can create a new issue in the `Issues` tab and we will be glad to help you out!

## Changelog 🏆

Please see [CHANGELOG](https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/releases) for more information what has changed recently.

## If you like the Summer CMS project 💗💗💗

<p><a href="https://opencollective.com/summer-cms"><img align="center" src="/assets/images/support-summer-cms.jpg" /></a></p>

If you like Summer CMS you can support the project's improvements and development of new features with a donation to our collective.

👉 [https://opencollective.com/summer-cms](https://opencollective.com/summer-cms)

### Sponsors ✨

Support us by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/summer-cms/contribute/sir-8679/checkout)]

<a href="#" target="_blank"><img src="https://avatars.githubusercontent.com/u/83365462" width="64"></a>

### Backers ✨

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/summer-cms/contribute/backer-8632/checkout)]

<p align="center"><a href="https://opencollective.com/summercms#backers" target="_blank"><img src="/assets/images/summercms-backers.jpg"></a></p>

## Contributions, Feature Requests and Feedback ✨

This project exists thanks to all the people who contribute.

<p align="center"><img src="/assets/images/summercms-contributors.jpg" /></p>

We are actively inviting new contributors! To start, please read the [contribution guide](CONTRIBUTING.md).

This project is only possible thanks to the work of many dedicated volunteers. Everyone is encouraged to help in ways large and small. Here are a few ways you can help:

- Read the current content and help us fix any spelling mistakes or grammatical errors.
- Choose an existing [issue](https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/issues) on GitHub and submit a pull request to fix it.
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

Copyright (c) Summer CMS. All rights reserved.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Everyone is permitted to copy and distribute copies of Summer CMS, but changing and hard forking are not allowed.

### Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

<p align="center"><img src="/assets/images/stargazers.jpg" alt="stars"></p>

[⬆ back to top](#table-of-contents-)

<p align="center">Made with ❤️ for the Decentralized World.</p>
