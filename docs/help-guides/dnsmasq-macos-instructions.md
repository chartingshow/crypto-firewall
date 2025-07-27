# 🛡️ Dnsmasq on macOS + Crypto Firewall Installation Guide

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

## 🍏 macOS Instructions (Homebrew Method)

### 🧰 Prerequisites:

* [Homebrew](https://brew.sh/) installed

### 1. Install `dnsmasq` via Homebrew

```bash
brew install dnsmasq
```

### 2. Configure

```bash
sudo mkdir -p /usr/local/etc/dnsmasq.d
sudo nano /usr/local/etc/dnsmasq.conf
```

Add this line:

```conf
addn-hosts=/usr/local/etc/dnsmasq.d/crypto-firewall-lite.hosts
```

Then download the Crypto Firewall blocklist:

```bash
sudo curl -o /usr/local/etc/dnsmasq.d/crypto-firewall-lite.hosts https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
```

### 3. Start and enable `dnsmasq`:

```bash
sudo brew services start dnsmasq
```

### 4. Use `dnsmasq` as your DNS:

* Go to **System Preferences > Network > Advanced > DNS**
* Add `127.0.0.1` as the top DNS server

## 💡 Tips & Notes

* `dnsmasq` caches DNS entries. Use `sudo systemctl restart dnsmasq` after updates.
* Use only **one blacklist at a time** per file unless you merge them.
* `dnsmasq` is a local resolver. You can set your router or system to use `127.0.0.1` as DNS to benefit from the filtering.

## 📚 Resources

* Official Docs: [https://thekelleys.org.uk/dnsmasq/doc.html](https://thekelleys.org.uk/dnsmasq/doc.html)
* Source Code: [https://thekelleys.org.uk/gitweb/?p=dnsmasq.git](https://thekelleys.org.uk/gitweb/?p=dnsmasq.git)
* Crypto Firewall Lists: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
