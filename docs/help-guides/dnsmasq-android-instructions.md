# 🛡️ Dnsmasq on Android + Crypto Firewall Installation Guide

This guide explains how to:

1. ✅ Install `dnsmasq` (lightweight DNS forwarder & DHCP server)
2. 🔒 Add Crypto Firewall blocklists to `dnsmasq`
3. 🚀 Restart and verify your setup

## 🧱 What dnsmasq Is

**dnsmasq** is a lightweight DNS forwarder and DHCP server. It is commonly used on:

* Home routers (like OpenWRT, DD-WRT)
* Raspberry Pi or Linux servers
* Network appliances

It allows you to control DNS responses on your local network, which means you can:

* Block domains by resolving them to `0.0.0.0` or `127.0.0.1`
* Use custom host files (like `hosts.txt` from ad blocking projects)
* Filter **ads**, **malware domains**, and **phishing sites** at the **network level**, before they reach browsers or devices

### 🔒 How dnsmasq Works as a Perimeter Blocker

* It **intercepts DNS requests** from all devices on your network
* If a domain is blacklisted (e.g., `ads.example.com`), it returns a **blank or local IP**
* This stops devices from reaching the domain — ads never load, tracking fails silently

### ❌ dnsmasq Limitations (Compared to Browser-Based Ad Blockers)

| Feature                             | dnsmasq | Browser Ad Blockers (like uBO) |
| ----------------------------------- | ------- | ------------------------------ |
| Blocks based on domain name         | ✅ Yes   | ✅ Yes                          |
| Blocks specific scripts or elements | ❌ No    | ✅ Yes                          |
| Cosmetic filtering (hiding ads)     | ❌ No    | ✅ Yes                          |
| Real-time per-site control          | ❌ No    | ✅ Yes                          |
| Blocks network-wide                 | ✅ Yes   | ❌ No (per browser)             |

## 🤖 Android Instructions (Rooted Devices Only)

> ⚠️ Android must be **rooted** to use system-wide `dnsmasq`

This guide shows how to install the Crypto‑Firewall blocklist using `dnsmasq` on Android (e.g. via Termux, Android‑based routers, etc.).

## 1. Install `dnsmasq`

If using Termux:

```bash
pkg install dnsmasq
````

If using an Android‑based router (e.g. OpenWrt, LibreRouter), install via the respective package manager.

## 2. Download the correct blocklist file

Use the `dnsmasq.txt` file as a blocklist. This file is formatted for `dnsmasq address=/domain/0.0.0.0` entries. Download it directly:

```bash
wget https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt -O crypto-firewall-dnsmasq.txt
```

The `dnsmasq.txt` file contains entries like:

```
address=/ads.example.com/0.0.0.0
address=/tracker.example.net/0.0.0.0
...
```

(⚠️ Not host‑file style; it's already in `dnsmasq` format.)

## 3. Configure `dnsmasq`

Place the downloaded file in a `dnsmasq.d/` directory:

```bash
mkdir -p ~/dnsmasq.d
mv crypto-firewall-dnsmasq.txt ~/dnsmasq.d/crypto-firewall.conf
```

Update your `dnsmasq.conf` or include this with:

```conf
conf-file=~/dnsmasq.d/crypto-firewall.conf
```

or

```conf
conf-dir=~/dnsmasq.d
```

## 4. Restart `dnsmasq`

Restart the DNS service to apply the new blocklist:

```bash
pkill dnsmasq
dnsmasq
```

## 5. Verify blocking

Test that domains are blocked:

```bash
dig ads.example.com @127.0.0.1
# Should return 0.0.0.0
```

## 6. Keeping the list updated

The `dnsmasq.txt` file is updated periodically (e.g. **Last modified: 24 July 2025**). It should automatically expire/reload if you set up a scheduled update (e.g. via cron or an Android scheduler).

```bash
wget -N https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt -O ~/dnsmasq.d/crypto-firewall.conf
pkill dnsmasq && dnsmasq
```

## Summary

| Step | Action                                                            |
| ---- | ----------------------------------------------------------------- |
| 1    | Install `dnsmasq`                                                 |
| 2    | Download **dnsmasq.txt** (already properly formatted)             |
| 3    | Move it to `dnsmasq.d/` and include via `conf-file` or `conf-dir` |
| 4    | Restart `dnsmasq`                                                 |
| 5    | Test via lookup                                                   |
| 6    | Schedule regular updates as needed                                |

✅ This method doesn't need `dnsmasq`, but gives the same result.

## 💡 Tips & Notes

* `dnsmasq` caches DNS entries. Use `sudo systemctl restart dnsmasq` after updates.
* Use only **one blacklist at a time** per file unless you merge them.
* `dnsmasq` is a local resolver. You can set your router or system to use `127.0.0.1` as DNS to benefit from the filtering.

## 📚 Resources

* Official Docs: [https://thekelleys.org.uk/dnsmasq/doc.html](https://thekelleys.org.uk/dnsmasq/doc.html)
* Source Code: [https://thekelleys.org.uk/gitweb/?p=dnsmasq.git](https://thekelleys.org.uk/gitweb/?p=dnsmasq.git)
* Crypto Firewall Lists: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
