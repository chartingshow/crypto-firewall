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

# Crypto-Firewall: Windows setup with dnsmasq

This guide helps you set up the Crypto-Firewall blocklist on Windows using `dnsmasq` via WSL, Docker, or a third-party DNS appliance.

## ⚙️ Method 1: Using WSL (Windows Subsystem for Linux)

### Step 1: Install WSL and a Linux distro (e.g. Ubuntu)

Open PowerShell as Administrator:

```powershell
wsl --install
````

Restart your computer if prompted.

### Step 2: Launch Ubuntu (or your distro), then install `dnsmasq`

```bash
sudo apt update
sudo apt install dnsmasq curl
```

### Step 3: Download the Crypto-Firewall blocklist

```bash
sudo mkdir -p /etc/dnsmasq.d
sudo curl -L https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt -o /etc/dnsmasq.d/crypto-firewall.conf
```

This file is already formatted correctly for `dnsmasq`:

```
address=/ads.example.com/0.0.0.0
address=/trackers.example.net/0.0.0.0
```

### Step 4: Configure `dnsmasq`

Edit `/etc/dnsmasq.conf`:

```bash
sudo nano /etc/dnsmasq.conf
```

Add:

```conf
conf-dir=/etc/dnsmasq.d
```

Save and exit.

### Step 5: Run `dnsmasq` manually

Start `dnsmasq` in WSL:

```bash
sudo dnsmasq --no-daemon
```

This will run it interactively. You can also run it in the background with:

```bash
sudo dnsmasq
```

### Step 6: Set Windows DNS to 127.0.0.1

1. Open **Control Panel > Network and Sharing Center > Change adapter settings**
2. Right-click your network adapter → Properties
3. Select `Internet Protocol Version 4 (TCP/IPv4)` → Properties
4. Use the following DNS server:

   * Preferred: `127.0.0.1`
   * Alternate: Leave blank or use a fallback (e.g., `1.1.1.1`)

### Step 7: Test

Open CMD or PowerShell:

```powershell
nslookup ads.example.com 127.0.0.1
```

Should return `0.0.0.0`.

## ⚙️ Method 2: Using Docker on Windows

If you prefer not to use WSL, run dnsmasq in a Docker container:

### Step 1: Create a custom blocklist directory

Create a folder like `C:\dnsmasq\conf` and save the blocklist:

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt" -OutFile "C:\dnsmasq\conf\crypto-firewall.conf"
```

### Step 2: Run dnsmasq container

```powershell
docker run -d --name crypto-dnsmasq `
  -p 53:53/udp `
  -v C:\dnsmasq\conf:/etc/dnsmasq.d `
  --restart unless-stopped `
  andyshinn/dnsmasq:2.78
```

Make sure your system’s DNS points to `127.0.0.1` as above.

## 🛠️ Updating the blocklist

To update:

### WSL:

```bash
sudo curl -L https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt -o /etc/dnsmasq.d/crypto-firewall.conf
sudo pkill dnsmasq && sudo dnsmasq
```

### Docker:

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/dnsmasq.txt" -OutFile "C:\dnsmasq\conf\crypto-firewall.conf"
docker restart crypto-dnsmasq
```

## ✅ Summary

| Step | Action                                           |
| ---- | ------------------------------------------------ |
| 1    | Use WSL or Docker to run `dnsmasq`               |
| 2    | Download Crypto-Firewall `dnsmasq.txt` blocklist |
| 3    | Place it in a dnsmasq config directory           |
| 4    | Point Windows DNS to `127.0.0.1`                 |
| 5    | Test with `nslookup`                             |
| 6    | Set up auto-update scripts if desired            |

## 💡 Tips & Notes

* `dnsmasq` caches DNS entries. Use `sudo systemctl restart dnsmasq` after updates.
* Use only **one blacklist at a time** per file unless you merge them.
* `dnsmasq` is a local resolver. You can set your router or system to use `127.0.0.1` as DNS to benefit from the filtering.

## 📚 Resources

* Official Docs: [https://thekelleys.org.uk/dnsmasq/doc.html](https://thekelleys.org.uk/dnsmasq/doc.html)
* Source Code: [https://thekelleys.org.uk/gitweb/?p=dnsmasq.git](https://thekelleys.org.uk/gitweb/?p=dnsmasq.git)
* Crypto Firewall Lists: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
