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

# Crypto-Firewall: Linux setup with dnsmasq

This guide helps you set up Crypto-Firewall's domain blocklist on a Linux system using `dnsmasq`.

## 1. Install `dnsmasq`

Install via your package manager:

**Debian/Ubuntu:**

```bash
sudo apt update
sudo apt install dnsmasq
````

**Fedora:**

```bash
sudo dnf install dnsmasq
```

**Arch:**

```bash
sudo pacman -S dnsmasq
```

## 2. Download the Crypto-Firewall blocklist

Download the preformatted `dnsmasq` blocklist file (uses `address=/domain/0.0.0.0` format):

```bash
sudo wget https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt -O /etc/dnsmasq.d/crypto-firewall.conf
```

This file is already in the correct format. Example entries:

```
address=/ads.example.com/0.0.0.0
address=/tracker.example.org/0.0.0.0
```

## 3. Configure `dnsmasq` to load the blocklist

Make sure your main config file includes the blocklist directory:

```bash
# In /etc/dnsmasq.conf
conf-dir=/etc/dnsmasq.d
```

Or include the file directly:

```bash
conf-file=/etc/dnsmasq.d/crypto-firewall.conf
```

## 4. Restart `dnsmasq`

After adding the blocklist, restart the service:

```bash
sudo systemctl restart dnsmasq
```

Or, if not using systemd:

```bash
sudo service dnsmasq restart
```

## 5. Point your system to use `dnsmasq` as the DNS server

Edit your DNS settings (e.g., `/etc/resolv.conf` or Network Manager) to use:

```
nameserver 127.0.0.1
```

Make sure no other DNS servers override this.

For persistent setup on NetworkManager systems:

```bash
sudo nmcli device modify <your-interface> ipv4.dns "127.0.0.1"
sudo nmcli connection up <your-interface>
```

## 6. Test the blocking

You can test if blocking is active:

```bash
dig ads.example.com @127.0.0.1
# Should return 0.0.0.0
```

Or with `nslookup`:

```bash
nslookup tracker.example.org 127.0.0.1
```

## 7. Keep the list up to date

Set up a cron job to auto-update the blocklist weekly:

```bash
sudo crontab -e
```

Add the line:

```cron
0 4 * * 1 wget -q https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt -O /etc/dnsmasq.d/crypto-firewall.conf && systemctl restart dnsmasq
```

This downloads the latest list every Monday at 4:00 AM and restarts `dnsmasq`.

## Summary

| Step | Action                                                  |
| ---- | ------------------------------------------------------- |
| 1    | Install `dnsmasq`                                       |
| 2    | Download `dnsmasq.txt` (already formatted)              |
| 3    | Place in `/etc/dnsmasq.d/` and configure `dnsmasq.conf` |
| 4    | Restart service                                         |
| 5    | Set `127.0.0.1` as DNS server                           |
| 6    | Test blocklist                                          |
| 7    | Schedule automatic updates                              |

## 💡 Tips & Notes

* `dnsmasq` caches DNS entries. Use `sudo systemctl restart dnsmasq` after updates.
* Use only **one blacklist at a time** per file unless you merge them.
* `dnsmasq` is a local resolver. You can set your router or system to use `127.0.0.1` as DNS to benefit from the filtering.

## 📚 Resources

* Official Docs: [https://thekelleys.org.uk/dnsmasq/doc.html](https://thekelleys.org.uk/dnsmasq/doc.html)
* Source Code: [https://thekelleys.org.uk/gitweb/?p=dnsmasq.git](https://thekelleys.org.uk/gitweb/?p=dnsmasq.git)
* Crypto Firewall Lists: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
