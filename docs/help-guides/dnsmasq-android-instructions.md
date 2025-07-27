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

### Option 1: Use `dnsmasq` via Termux + Root

1. Install [Termux](https://f-droid.org/packages/com.termux/) and open it.
2. Install packages:

```bash
pkg update && pkg install dnsmasq curl
```

3. Download the Crypto Firewall list:

```bash
mkdir -p ~/crypto-fw
curl -o ~/crypto-fw/hosts.txt https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
```

4. Start `dnsmasq` with config:

```bash
dnsmasq --addn-hosts=~/crypto-fw/hosts.txt --no-daemon
```

> But this won’t apply unless you redirect the system DNS to `127.0.0.1`, which **requires root or Magisk module**.

### Option 2: Use a Root App Like **AdAway** (Simpler)

* [AdAway](https://adaway.org/) supports **hosts-based blocking** and can use Crypto Firewall lists.
* Just import the URL into AdAway as a **custom hosts source**:

```text
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
```

✅ This method doesn't need `dnsmasq`, but gives the same result.

## 💡 Tips & Notes

* `dnsmasq` caches DNS entries. Use `sudo systemctl restart dnsmasq` after updates.
* Use only **one blacklist at a time** per file unless you merge them.
* `dnsmasq` is a local resolver. You can set your router or system to use `127.0.0.1` as DNS to benefit from the filtering.

## 📚 Resources

* Official Docs: [https://thekelleys.org.uk/dnsmasq/doc.html](https://thekelleys.org.uk/dnsmasq/doc.html)
* Source Code: [https://thekelleys.org.uk/gitweb/?p=dnsmasq.git](https://thekelleys.org.uk/gitweb/?p=dnsmasq.git)
* Crypto Firewall Lists: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
