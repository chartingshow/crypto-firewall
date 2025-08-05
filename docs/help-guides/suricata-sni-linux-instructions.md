# 🛡️ Suricata SNI + Crypto Firewall on Linux Installation Guide

This guide walks you through setting up [Suricata](https://suricata.io/) with **SNI (Server Name Indication)** support and applying the **Crypto Firewall blocklist** to block known crypto threats using domain and IP rules.

## 📌 What You'll Need

* A Linux-based machine (Ubuntu/Debian or RHEL/CentOS recommended)
* Root or sudo access
* Internet connection
* Basic command line knowledge

## ⚙️ Step 1: Install Suricata

### Ubuntu/Debian

```bash
sudo apt update
sudo apt install -y suricata
```

### RHEL/CentOS

```bash
sudo dnf install -y epel-release
sudo dnf install -y suricata
```

> For latest builds or custom compilation: [https://github.com/OISF/suricata](https://github.com/OISF/suricata)

### Verify installation

```bash
suricata --build-info
```

## 🌐 Step 2: Enable SNI (Server Name Indication)

Suricata supports SNI via TLS logging. You need to enable **TLS detection** to parse SNI from encrypted traffic.

### Edit the Suricata config file:

```bash
sudo nano /etc/suricata/suricata.yaml
```

Search for the following block and make sure it's enabled:

```yaml
app-layer:
  protocols:
    tls:
      enabled: yes
      detection-ports:
        dp: 443
      # Extract SNI
      sni-policy: all
```

Enable **eve-log TLS** section:

```yaml
outputs:
  - eve-log:
      enabled: yes
      filetype: regular
      filename: /var/log/suricata/eve.json
      types:
        - tls:
            extended: yes
```

Save and exit.

## 🔁 Step 3: Restart Suricata

```bash
sudo systemctl restart suricata
```

Check if it's running correctly:

```bash
sudo systemctl status suricata
```

## 🚫 Step 4: Add Crypto Firewall Blocklist

Now add the [Crypto Firewall blocklist rules](https://github.com/chartingshow/crypto-firewall) to Suricata to block malicious crypto-related domains and IPs.

### A. Download the rules

You can choose from:

* 🔒 Domains + IPs:
  [suricata-sni-domains-and-ips.rules](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/suricata-sni-domains-and-ips.rules)

* 🌐 Domains Only:
  [suricata-sni-domains-only.rules](https://github.com/chartingshow/crypto-firewall/raw/refs/heads/master/src/blacklists/suricata-sni-domains-only.rules)

```bash
wget https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-sni-domains-and-ips.rules -O /etc/suricata/rules/suricata-sni.rules
```

> Adjust the file name and path as needed.

### B. Include the new rules in Suricata config

Open the Suricata config:

```bash
sudo nano /etc/suricata/suricata.yaml
```

Find the `rule-files` section and add:

```yaml
rule-files:
  - suricata-sni.rules
```

Make sure this file exists in the `/etc/suricata/rules/` directory.

### C. Test Configuration

Run Suricata config check:

```bash
sudo suricata -T -c /etc/suricata/suricata.yaml -v
```

If successful, restart Suricata:

```bash
sudo systemctl restart suricata
```

## 📊 Step 5: Monitor and Verify Blocking

Suricata logs events in:

```bash
/var/log/suricata/eve.json
```

To filter for TLS/SNI events:

```bash
grep '"event_type":"tls"' /var/log/suricata/eve.json
```

Or use `jq` for prettier output:

```bash
jq 'select(.event_type=="tls")' /var/log/suricata/eve.json
```

You should start seeing blocked domains/IPs listed in the logs.

## ✅ Done!

Your system is now:

* Monitoring encrypted traffic for SNI
* Blocking known crypto threats using domain and IP rules
* Logging all relevant TLS/SNI activity for auditing

## 🔄 Updates

To update the Crypto Firewall rules regularly:

```bash
cd /etc/suricata/rules
wget -O suricata-sni.rules https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-sni-domains-and-ips.rules
sudo systemctl restart suricata
```

You can automate this with a weekly cron job.

## 📚 Resources

* 🔗 [Suricata Official Site](https://suricata.io/)
* 🛠️ [Suricata GitHub](https://github.com/OISF/suricata)
* 🔐 [Crypto Firewall Project](https://github.com/chartingshow/crypto-firewall)
