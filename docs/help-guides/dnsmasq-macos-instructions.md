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

# 🍏 Crypto-Firewall: macOS setup with dnsmasq

This guide walks you through using `dnsmasq` with the Crypto-Firewall blocklist on macOS.

## 1. Install `dnsmasq`

Use [Homebrew](https://brew.sh) to install:

```bash
brew install dnsmasq
````

## 2. Create dnsmasq configuration

Create a config directory if it doesn’t exist:

```bash
sudo mkdir -p /usr/local/etc/dnsmasq.d
```

## 3. Download the Crypto-Firewall blocklist

Fetch the blocklist, which is already formatted for `dnsmasq` (using `address=/domain/0.0.0.0`):

```bash
sudo curl -L https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt -o /usr/local/etc/dnsmasq.d/crypto-firewall.conf
```

The file includes lines like:

```
address=/ads.example.com/0.0.0.0
address=/tracker.example.org/0.0.0.0
```

No need to convert or reformat the file.

## 4. Configure dnsmasq

Edit or create the main config file:

```bash
sudo nano /usr/local/etc/dnsmasq.conf
```

Add this line:

```conf
conf-dir=/usr/local/etc/dnsmasq.d
```

Save and exit.

## 5. Start and enable dnsmasq

Set up `dnsmasq` to run automatically:

```bash
sudo brew services start dnsmasq
```

If already running, restart it:

```bash
sudo brew services restart dnsmasq
```

## 6. Point macOS to use dnsmasq

### Option A: Modify `/etc/resolv.conf`

Not persistent (resets on reboot):

```bash
sudo bash -c 'echo "nameserver 127.0.0.1" > /etc/resolv.conf'
```

### Option B: Use network settings (more persistent)

You can add 127.0.0.1 as a DNS server in:

**System Settings > Network > Advanced > DNS**

Move it to the top of the list.

## 7. Test the blocklist

Try looking up a known blocked domain:

```bash
dig ads.example.com @127.0.0.1
```

It should return:

```
;; ANSWER SECTION:
ads.example.com. 0 IN A 0.0.0.0
```

## 8. Automate updates (optional)

You can create a cron job or script to auto-update the blocklist.

Create a script, e.g. `~/update-firewall.sh`:

```bash
#!/bin/bash
curl -sL https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt -o /usr/local/etc/dnsmasq.d/crypto-firewall.conf
brew services restart dnsmasq
```

Make it executable:

```bash
chmod +x ~/update-firewall.sh
```

Schedule it with `cron`, `launchd`, or a reminder.

## Summary

| Step | Action                                     |
| ---- | ------------------------------------------ |
| 1    | Install `dnsmasq` via Homebrew             |
| 2    | Download the correctly formatted blocklist |
| 3    | Store it in `/usr/local/etc/dnsmasq.d/`    |
| 4    | Configure `dnsmasq.conf`                   |
| 5    | Start dnsmasq with `brew services`         |
| 6    | Set system DNS to `127.0.0.1`              |
| 7    | Test with `dig` or `nslookup`              |
| 8    | (Optional) Schedule automatic updates      |

## 💡 Tips & Notes

* `dnsmasq` caches DNS entries. Use `sudo systemctl restart dnsmasq` after updates.
* Use only **one blacklist at a time** per file unless you merge them.
* `dnsmasq` is a local resolver. You can set your router or system to use `127.0.0.1` as DNS to benefit from the filtering.

## 📚 Resources

* Official Docs: [https://thekelleys.org.uk/dnsmasq/doc.html](https://thekelleys.org.uk/dnsmasq/doc.html)
* Source Code: [https://thekelleys.org.uk/gitweb/?p=dnsmasq.git](https://thekelleys.org.uk/gitweb/?p=dnsmasq.git)
* Crypto Firewall Lists: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
