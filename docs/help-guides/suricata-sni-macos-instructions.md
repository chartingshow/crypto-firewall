# 🛡️ Suricata SNI + Crypto Firewall Setup Guide for macOS

This guide shows you how to install [Suricata](https://suricata.io/) with **Server Name Indication (SNI)** support on **macOS**, and how to apply the **Crypto Firewall blocklist** to detect and block malicious domains and IPs related to crypto threats.

## 📦 Prerequisites

* macOS 12 (Monterey) or newer
* [Homebrew](https://brew.sh/) installed
* Terminal access
* Admin privileges (via `sudo`)

## ⚙️ Step 1: Install Suricata

Open Terminal and run:

```bash
brew install suricata
```

> This installs the latest version of Suricata via Homebrew.

## 📍 Step 2: Enable TLS + SNI Logging in Suricata

You'll configure Suricata to parse **TLS SNI (Server Name Indication)** and log it.

### A. Locate the Suricata config file

```bash
brew list suricata
```

This shows you where Suricata is installed. Typically, the config file is here:

```bash
/usr/local/etc/suricata/suricata.yaml
```

### B. Edit the config

Open the config file with a text editor:

```bash
nano /usr/local/etc/suricata/suricata.yaml
```

#### Enable TLS and SNI support:

```yaml
app-layer:
  protocols:
    tls:
      enabled: yes
      detection-ports:
        dp: 443
      sni-policy: all
```

#### Enable TLS logging in `eve-log`:

```yaml
outputs:
  - eve-log:
      enabled: yes
      filetype: regular
      filename: /usr/local/var/log/suricata/eve.json
      types:
        - tls:
            extended: yes
```

Save and exit with `Ctrl + X`, then `Y`, then `Enter`.

## 🚫 Step 3: Add the Crypto Firewall Blocklist

The Crypto Firewall blocklist includes malicious crypto-related domains and IPs. Suricata uses `.rules` files to apply these.

### A. Download the rules

Choose one:

* Domains + IPs:
  [suricata-sni-domains-and-ips.rules](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/suricata-sni-domains-and-ips.rules)

* Domains only:
  [suricata-sni-domains-only.rules](https://github.com/chartingshow/crypto-firewall/raw/refs/heads/master/src/blacklists/suricata-sni-domains-only.rules)

Download into Suricata's rules directory:

```bash
cd /usr/local/etc/suricata/rules
curl -O https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-sni-domains-and-ips.rules
```

Rename for consistency (optional):

```bash
mv suricata-sni-domains-and-ips.rules crypto-firewall.rules
```

### B. Add rules to Suricata config

Edit the config again:

```bash
nano /usr/local/etc/suricata/suricata.yaml
```

Find the `rule-files:` section and add:

```yaml
rule-files:
  - crypto-firewall.rules
```

Save and exit.

## 🔁 Step 4: Test + Run Suricata

### A. Test config is valid:

```bash
suricata -T -c /usr/local/etc/suricata/suricata.yaml -v
```

### B. Start Suricata (Live Mode)

You'll need to run with elevated privileges and specify an interface.

First, list your network interfaces:

```bash
ifconfig
```

Identify your main internet interface (commonly `en0` or `en1`).

Then run Suricata in live mode:

```bash
sudo suricata -c /usr/local/etc/suricata/suricata.yaml -i en0
```

> Replace `en0` with the correct interface name.

Suricata will now monitor your traffic and apply the rules from the Crypto Firewall.

## 📊 Step 5: Monitor for Detections

Suricata writes logs here:

```bash
/usr/local/var/log/suricata/eve.json
```

You can watch real-time logs with:

```bash
tail -f /usr/local/var/log/suricata/eve.json
```

Or filter for SNI (TLS) traffic:

```bash
grep '"event_type":"tls"' /usr/local/var/log/suricata/eve.json
```

Use `jq` for pretty formatting:

```bash
brew install jq
jq 'select(.event_type=="tls")' /usr/local/var/log/suricata/eve.json
```

## 🔄 Step 6: Keep Rules Updated

To update the rules in future:

```bash
cd /usr/local/etc/suricata/rules
curl -O https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-sni-domains-and-ips.rules -o crypto-firewall.rules
sudo pkill -HUP suricata
```

Optional: Set a weekly `launchd` job or cron to auto-update.

## ✅ Done!

You've successfully installed Suricata on macOS with:

* ✅ TLS/SNI detection and logging
* ✅ Crypto Firewall domain/IP blocklist protection
* ✅ Real-time logging for malicious activity

## 📚 Resources

* 🔗 [Suricata Official Website](https://suricata.io/)
* 🔐 [Crypto Firewall Rules](https://github.com/chartingshow/crypto-firewall)
* 📁 [Suricata GitHub](https://github.com/OISF/suricata)
* 📖 [SNI on Wikipedia](https://en.wikipedia.org/wiki/Server_Name_Indication)
