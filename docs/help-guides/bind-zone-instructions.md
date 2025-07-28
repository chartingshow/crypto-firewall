# 🛡️ How to Install and Configure BIND Zone with Crypto Firewall

This guide will walk you through:

* Installing the **BIND DNS server** (named)
* Setting up a **zone-based blocklist**
* Applying the **Crypto Firewall** blocklist to BIND

## ✅ Requirements

* Linux system (e.g., Ubuntu, CentOS, or RHEL-based)
* Root or sudo access
* Basic familiarity with using the command line

## 📦 Step 1: Install BIND (named)

> **BIND (Berkeley Internet Name Domain)** is the most widely used DNS server software.

### 📌 Ubuntu / Debian

```bash
sudo apt update
sudo apt install bind9 bind9utils bind9-doc -y
```

### 📌 CentOS / RHEL

```bash
sudo yum install bind bind-utils -y
```

> You can also consult the official BIND documentation:
> 👉 [https://www.isc.org/bind/](https://www.isc.org/bind/)

## 📁 Step 2: Create a New Blocklist Zone File

1. Download the Crypto Firewall BIND blocklist:

```bash
curl -o /etc/bind/blocklist.db https://github.com/chartingshow/crypto-firewall/raw/refs/heads/master/src/blacklists/bind-zone.conf
```

2. Ensure file permissions:

```bash
sudo chown root:bind /etc/bind/blocklist.db
sudo chmod 644 /etc/bind/blocklist.db
```

> 🔒 The downloaded file acts as a zone file that blocks known cryptojacking and malicious domains.

## ⚙️ Step 3: Configure BIND to Use the Blocklist Zone

### 🔧 Add the Blocklist Zone Definition

Edit the `named.conf.local` file (or equivalent based on your OS, e.g., `/etc/bind/named.conf.local` on Debian/Ubuntu):

```bash
sudo nano /etc/bind/named.conf.local
```

Add this section at the bottom:

```bash
zone "blocklist.local" {
    type master;
    file "/etc/bind/blocklist.db";
};
```

> This tells BIND to load the Crypto Firewall blocklist as a master zone.

## 🚀 Step 4: Reload and Restart BIND

### 🧪 Check Config Syntax

```bash
sudo named-checkconf
sudo named-checkzone blocklist.local /etc/bind/blocklist.db
```

### 🔁 Restart BIND

```bash
# Ubuntu/Debian
sudo systemctl restart bind9

# CentOS/RHEL
sudo systemctl restart named
```

> ✅ If no errors appear, BIND is now using the blocklist to filter malicious DNS queries!

## 🧪 Step 5: Test That It's Working

Try resolving a known blocked domain (from the blocklist):

```bash
dig +short badcrypto.domain.blocklist.local @127.0.0.1
```

If BIND returns `0.0.0.0` or an empty result, it means the domain is successfully blocked.

## 🔄 Optional: Schedule Blocklist Updates

To keep the Crypto Firewall blocklist updated, create a simple cron job:

```bash
sudo crontab -e
```

Add the following line to update the blocklist daily:

```bash
0 3 * * * curl -o /etc/bind/blocklist.db https://github.com/chartingshow/crypto-firewall/raw/refs/heads/master/src/blacklists/bind-zone.conf && systemctl reload bind9
```

> This fetches the latest blocklist and reloads BIND every night at 3 AM.

## 🧯 Troubleshooting

* **Check logs**:

  ```bash
  journalctl -xe | grep named
  ```

* **Test DNS manually**:

  ```bash
  dig @127.0.0.1 example.com
  ```

* **Firewall blocking DNS?** Ensure port 53 is open:

  ```bash
  sudo ufw allow 53
  ```

## 📚 References

* BIND Official: [https://www.isc.org/bind/](https://www.isc.org/bind/)
* Crypto Firewall GitHub: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
* Blocklist Direct: [https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/bind-zone.conf](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/bind-zone.conf)
