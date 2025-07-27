# 🛡️ Dnsmasq on Windows + Crypto Firewall Installation Guide

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

## ✅ Option 1: Use WSL (Windows Subsystem for Linux) – *Recommended*

This is the **easiest and most reliable** way to run `dnsmasq` on Windows.

### 🔧 Steps:

1. **Install WSL + Ubuntu**
   Follow the Microsoft guide:
   [https://learn.microsoft.com/en-us/windows/wsl/install](https://learn.microsoft.com/en-us/windows/wsl/install)

2. **Open Ubuntu in WSL** and install `dnsmasq`:

```bash
sudo apt update
sudo apt install dnsmasq curl -y
```

3. **Configure and use it** just like on Linux
   (Use the same Crypto Firewall guide I gave earlier)

4. **Forward Windows DNS to WSL (`127.0.0.1`)**

   * Go to `Control Panel > Network and Sharing > Adapter Settings`
   * Right-click your network > Properties > IPv4 > DNS
   * Set Preferred DNS to `127.0.0.1`

> 🧠 Note: You may need to run WSL and `dnsmasq` on startup manually, or create a task to do it.

## 🐳 Option 2: Run `dnsmasq` in Docker (on Windows)

If you have **Docker Desktop** installed:

```bash
docker run --name dnsmasq -d -p 53:53/udp jpillora/dnsmasq \
  -A /#/127.0.0.1 \
  --addn-hosts=/etc/dnsmasq/crypto-hosts
```

But first, mount the Crypto Firewall hosts file into the container.

### Steps:

1. Download the list:

```bash
curl -o crypto-hosts https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
```

2. Start container with volume mount:

```bash
docker run --name dnsmasq -d -p 53:53/udp \
  -v ${PWD}/crypto-hosts:/etc/dnsmasq/crypto-hosts \
  jpillora/dnsmasq --addn-hosts=/etc/dnsmasq/crypto-hosts
```

## ❌ Option 3: Native Windows Port (Not Recommended)

There’s no official native port of `dnsmasq` for Windows. Old forks exist, but they are:

* ❌ Outdated
* ❌ Unsupported
* ❌ May have compatibility issues or security risks

Use **WSL** or **Docker** instead.

## 🧪 Bonus: Use Simple DNSCrypt or Technitium DNS (as Alternatives)

If you're mainly using `dnsmasq` for **DNS-level blocking**, consider:

### 🟦 [Technitium DNS Server](https://technitium.com/dns/)

* Free, cross-platform
* GUI, runs on Windows natively
* Supports blocklists and `hosts`-style filters

You can easily import the Crypto Firewall list into Technitium:

1. Open Technitium GUI
2. Go to **Blocklist** settings
3. Add this URL:

```text
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
```

> ✅ No Linux knowledge needed

## ✅ Summary: Best Way for Windows Users

| Method         | Difficulty | Notes                        |
| -------------- | ---------- | ---------------------------- |
| WSL + Ubuntu   | ⭐ Easy     | Most like native Linux       |
| Docker         | ⭐⭐ Medium  | Portable & isolated          |
| Technitium DNS | ⭐ Easiest  | Windows native + GUI support |
| Native Port    | ❌ Avoid    | Outdated, unsupported        |

## 💡 Tips & Notes

* `dnsmasq` caches DNS entries. Use `sudo systemctl restart dnsmasq` after updates.
* Use only **one blacklist at a time** per file unless you merge them.
* `dnsmasq` is a local resolver. You can set your router or system to use `127.0.0.1` as DNS to benefit from the filtering.

## 📚 Resources

* Official Docs: [https://thekelleys.org.uk/dnsmasq/doc.html](https://thekelleys.org.uk/dnsmasq/doc.html)
* Source Code: [https://thekelleys.org.uk/gitweb/?p=dnsmasq.git](https://thekelleys.org.uk/gitweb/?p=dnsmasq.git)
* Crypto Firewall Lists: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
