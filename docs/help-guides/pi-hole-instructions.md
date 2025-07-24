# 🚫🧱 Pi-hole Setup + Crypto Firewall Integration Guide

**Block Crypto Mining & Fraud Domains Network-Wide**

This guide walks you through:

1. Installing [Pi-hole](https://pi-hole.net/) on your network
2. Adding the [Crypto Firewall](https://github.com/chartingshow/crypto-firewall) blocklists to Pi-hole
3. Blocking crypto mining, scams, fraud, phishing and abuse at the DNS level

> ✅ This guide works for Raspberry Pi, Linux servers and other Pi-hole-supported systems.

## 🧰 What You'll Need

* A device to run Pi-hole (e.g., Raspberry Pi, Linux VM, or Docker)
* A home or office router where you can change DNS settings
* Basic terminal knowledge

## 🛠️ Step 1: Install Pi-hole

### Option A: Standard Installation (Recommended)

Run this command in your terminal:

```bash
curl -sSL https://install.pi-hole.net | bash
```

> 💡 This will launch the Pi-hole automated setup wizard. Follow the prompts.

**Important Prompts to Watch For:**

* Select your upstream DNS provider (Cloudflare is a good privacy-focused option)
* Choose the default blocklists (you can keep them enabled)
* Set a static IP address
* Decide if you want the web admin interface (recommended)

After installation, Pi-hole's web interface will be available at:

```
http://<your-device-ip>/admin
```

🧠 **Note your Pi-hole IP address** and update your **router's DNS settings** to point to it.

## 🧱 Step 2: Add the Crypto Firewall Blocklists

The Crypto Firewall project provides two types of lists:

| List Type         | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| **Domains only**  | Best for most users. Safe to use with Pi-hole.                 |
| **Domains + IPs** | More aggressive. Use with caution (may cause false positives). |

### ✅ Recommended: Use Domains-Only List

#### 1. Open Pi-hole Admin Panel

Go to:

```
http://<your-pihole-ip>/admin
```

#### 2. Log in and navigate to:

**Group Management** → **Adlists**

#### 3. Add the Crypto Firewall Adlist URL:

Paste the following URL:

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-only.txt
```

Then click **Add**.

#### 4. Update the gravity database:

Run this command in your terminal or click **Update Gravity** from the Pi-hole admin panel:

```bash
pihole -g
```

This fetches the new list and activates it.

## ⚠️ Optional: Use Domains + IPs Blocklist

> ⚠️ Not recommended unless you understand the risks — can block IPs that may be used by other services.

Add this URL **instead** of the one above:

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt
```

Then run:

```bash
pihole -g
```

## ✅ You're Done!

Pi-hole is now actively blocking:

* Crypto mining domains
* Scam tokens and phishing URLs
* Malicious blockchain-related services

Your network devices using Pi-hole as their DNS will be protected.

## 🔍 How to Confirm It's Working

Visit:

```
http://<your-pihole-ip>/admin
```

* Check **Dashboard → Top Blocked Domains**
* You should see domains like `coinhive.com`, `cryptojacking.com`, or suspicious `.xyz` tokens blocked

## 🧼 Optional Tips

* **Whitelist any false positives** in the Pi-hole dashboard if needed
* Schedule regular updates of the blocklists using a cron job:

```bash
sudo crontab -e
```

Add this line to update blocklists daily:

```
0 3 * * * /usr/local/bin/pihole -g
```
