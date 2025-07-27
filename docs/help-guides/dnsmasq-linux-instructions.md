# 🛡️ Dnsmasq on Linux + Crypto Firewall Installation Guide

This guide explains how to:

1. ✅ Install `dnsmasq` (lightweight DNS forwarder & DHCP server)
2. 🔒 Add Crypto Firewall blocklists to `dnsmasq`
3. 🚀 Restart and verify your setup

> **Works on**: Linux (Debian, Ubuntu, Fedora, etc.) / WSL / Raspberry Pi

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

## 📦 Step 1: Install `dnsmasq`

### Ubuntu / Debian

Open a terminal and run:

```bash
sudo apt update
sudo apt install dnsmasq -y
```

### Fedora

```bash
sudo dnf install dnsmasq -y
```

### Arch / Manjaro

```bash
sudo pacman -S dnsmasq
```

## 📁 Step 2: Configure `dnsmasq`

### 1. Edit `dnsmasq.conf`

Open the config file:

```bash
sudo nano /etc/dnsmasq.conf
```

Scroll to the bottom and **add these lines**:

```conf
# Crypto Firewall Blacklists (Lite version example)
addn-hosts=/etc/dnsmasq.d/crypto-firewall-lite.hosts
```

> 🔄 You can replace `lite` with `full`, `mega`, `beta`, or a hosts version (see below).

## ⬇️ Step 3: Download the Crypto Firewall Lists

### 1. Create a config folder

```bash
sudo mkdir -p /etc/dnsmasq.d
cd /etc/dnsmasq.d
```

### 2. Choose your preferred list and download it

**Lite Version (domains only):**

```bash
sudo curl -o crypto-firewall-lite.hosts https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
```

**Or use another version:**

* 🔥 Full: `hosts-domains-and-ips.txt`
* 🧱 IP Only: `ip-AdBlock Plus.txt`
* 🧪 Beta: `beta-version.txt`
* 💥 Mega: `mega-version.txt`

> You can rename the file as needed and update the path in your `dnsmasq.conf`.

## 🔄 Step 4: Restart Dnsmasq

```bash
sudo systemctl restart dnsmasq
```

To enable on boot:

```bash
sudo systemctl enable dnsmasq
```

## ✅ Step 5: Test if It’s Working

Try resolving a blocked crypto domain (from the list):

```bash
dig badcryptoexample.com @127.0.0.1
```

You should get:

```none
;; ->>HEADER<<- ... NXDOMAIN ...
```

Or simply check with:

```bash
nslookup badcryptoexample.com 127.0.0.1
```

If blocked, it means the DNS is working as a firewall ✅

## 🔄 Updating the Blocklist (Recommended Weekly)

```bash
cd /etc/dnsmasq.d
sudo curl -o crypto-firewall-lite.hosts https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
sudo systemctl restart dnsmasq
```

You can automate this with a cron job if desired.

## 💡 Tips & Notes

* `dnsmasq` caches DNS entries. Use `sudo systemctl restart dnsmasq` after updates.
* Use only **one blacklist at a time** per file unless you merge them.
* `dnsmasq` is a local resolver. You can set your router or system to use `127.0.0.1` as DNS to benefit from the filtering.

## 📚 Resources

* Official Docs: [https://thekelleys.org.uk/dnsmasq/doc.html](https://thekelleys.org.uk/dnsmasq/doc.html)
* Source Code: [https://thekelleys.org.uk/gitweb/?p=dnsmasq.git](https://thekelleys.org.uk/gitweb/?p=dnsmasq.git)
* Crypto Firewall Lists: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
