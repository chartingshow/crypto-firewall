# 🛡️ Suricata + Crypto Firewall Blocklist: Installation Guide

This guide explains how to:

1. ✅ Install **Suricata** (an open-source intrusion detection/prevention system).
2. 🔐 Add the **Crypto Firewall** blocklist to Suricata, blocking known malicious crypto domains and IPs.

## 📦 Step 1: Install Suricata

Suricata can be installed on most Linux distributions, as well as macOS and Windows. We'll cover installation for **Ubuntu/Debian**, **CentOS/RHEL**, and **macOS**.

> 🧠 More on Suricata: [Wikipedia](https://en.wikipedia.org/wiki/Suricata_%28software%29) | [Official Site](https://suricata.io/) | [GitHub](https://github.com/OISF/suricata)

### 🐧 A. Ubuntu / Debian (Recommended)

```bash
sudo apt update
sudo apt install -y suricata
```

You can confirm Suricata is installed:

```bash
suricata --build-info
```

### 🐧 B. CentOS / RHEL

Enable the EPEL repository:

```bash
sudo yum install epel-release
```

Then install Suricata:

```bash
sudo yum install suricata
```

### 🍎 C. macOS (via Homebrew)

Install Homebrew if not already:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Suricata:

```bash
brew install suricata
```

## ⚙️ Step 2: Configure Suricata to Use the Crypto Firewall Blocklist

Crypto Firewall provides a curated blocklist of **malicious crypto-related domains and IP addresses**, compatible with Suricata's `.rules` format.

### 📂 A. Download the Rules

1. **Option 1: Domains and IPs**

```bash
wget -O /etc/suricata/rules/crypto-firewall.rules \
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-domains-and-ips.rules
```

2. **Option 2: Domains Only**

```bash
wget -O /etc/suricata/rules/crypto-firewall.rules \
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-domains-only.rules
```

> Choose only **one** of the above options depending on your needs.

### 🛠️ B. Include the Rules in Suricata's Config

Edit the Suricata configuration file (usually located at `/etc/suricata/suricata.yaml`):

```bash
sudo nano /etc/suricata/suricata.yaml
```

Find the section that starts with:

```yaml
rule-files:
```

Then add the line:

```yaml
  - crypto-firewall.rules
```

Example:

```yaml
rule-files:
  - suricata.rules
  - crypto-firewall.rules
```

Save and close the file.

### 🔄 C. Test and Restart Suricata

Validate your config:

```bash
sudo suricata -T -c /etc/suricata/suricata.yaml -v
```

If there are **no errors**, restart Suricata:

#### Ubuntu/Debian:

```bash
sudo systemctl restart suricata
```

#### CentOS/RHEL:

```bash
sudo systemctl restart suricata
```

#### macOS:

```bash
brew services restart suricata
```

## 🔍 Step 3: Verify Crypto Firewall is Active

Check Suricata's logs for alerts:

```bash
sudo tail -f /var/log/suricata/fast.log
```

You should see entries if any blocked domains or IPs are accessed.

## 🧼 Optional: Keep the Blocklist Updated

You can automate blocklist updates using `cron`.

Example: Add this to crontab (edit with `crontab -e`):

```bash
0 3 * * * wget -q -O /etc/suricata/rules/crypto-firewall.rules https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-domains-and-ips.rules && systemctl restart suricata
```

This updates the list every day at 3 AM and restarts Suricata.

## ✅ Done!

Suricata is now filtering connections using the Crypto Firewall blocklist.

If you have questions, you can explore:

* [Suricata Documentation](https://suricata.readthedocs.io/)
* [Crypto Firewall GitHub](https://github.com/chartingshow/crypto-firewall/)

⭐ If you found this helpful, consider starring the [Crypto Firewall GitHub repo](https://github.com/chartingshow/crypto-firewall) and sharing this guide!
