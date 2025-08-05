# 🛡️ Suricata SNI + Crypto Firewall Setup Guide for **Windows 10/11**

This guide shows how to install [Suricata](https://suricata.io/) on Windows with **TLS SNI (Server Name Indication)** support, and how to block malicious crypto domains and IPs using the [Crypto Firewall](https://github.com/chartingshow/crypto-firewall) blocklist.

## 📦 Requirements

* Windows 10 or 11 (64-bit)
* Admin privileges
* [WinPcap](https://www.winpcap.org/) or [Npcap](https://npcap.com/) installed
* Access to CMD or PowerShell
* Internet connection

## ⚙️ Step 1: Install Suricata

### A. Download Suricata for Windows

1. Go to the official Suricata download page:
   👉 [https://suricata.io/download/](https://suricata.io/download/)

2. Click on **"Windows Installer (64-bit)"** under **Suricata**.

3. Run the installer and follow the prompts to install Suricata to:

```text
C:\Program Files\Suricata\
```

Make sure to check the box to install **WinPcap/Npcap** if prompted.

## 🌐 Step 2: Enable TLS + SNI Parsing

### A. Open the config file

Navigate to:

```text
C:\Program Files\Suricata\suricata.yaml
```

Right-click > **Open With > Notepad** (or Notepad++).

### B. Configure TLS + SNI settings

Find and modify the following section:

```yaml
app-layer:
  protocols:
    tls:
      enabled: yes
      detection-ports:
        dp: 443
      sni-policy: all
```

Then scroll to `outputs:` and enable **TLS logging**:

```yaml
outputs:
  - eve-log:
      enabled: yes
      filetype: regular
      filename: eve.json
      types:
        - tls:
            extended: yes
```

> This logs TLS connections and captures SNI (e.g., website domains seen in HTTPS).

Save and close the file.

## 🚫 Step 3: Add the Crypto Firewall Blocklist

This step integrates the rule files from the [Crypto Firewall project](https://github.com/chartingshow/crypto-firewall).

### A. Download Crypto Rules

Choose your preferred version:

* 🔒 [Domains + IPs](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/suricata-sni-domains-and-ips.rules)
* 🌐 [Domains only](https://github.com/chartingshow/crypto-firewall/raw/refs/heads/master/src/blacklists/suricata-sni-domains-only.rules)

#### Use PowerShell or download manually:

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-sni-domains-and-ips.rules" -OutFile "C:\Program Files\Suricata\rules\crypto-firewall.rules"
```

### B. Add rule file to Suricata config

Open:

```text
C:\Program Files\Suricata\suricata.yaml
```

Find the section:

```yaml
rule-files:
  - suricata.rules
```

And append:

```yaml
  - crypto-firewall.rules
```

Make sure the file is saved in:

```text
C:\Program Files\Suricata\rules\
```

## 🔁 Step 4: Run Suricata on a Network Interface

### A. Identify your network interface

Open PowerShell and run:

```powershell
Get-NetAdapter
```

Note the name of your active adapter (e.g., `Ethernet`, `Wi-Fi`).

### B. Run Suricata in live mode

Replace `Ethernet` with your interface name:

```cmd
cd "C:\Program Files\Suricata\"
suricata.exe -i Ethernet -c suricata.yaml -v
```

This starts Suricata in real-time, inspecting traffic and logging SNI-based connections.

## 📊 Step 5: Monitor Logs

The log file is created in the same folder where Suricata is run. If `eve.json` is missing, check permissions or the config.

To view live logs:

```powershell
Get-Content .\eve.json -Wait
```

Or search for SNI detections:

```powershell
Select-String '"event_type":"tls"' .\eve.json
```

For JSON filtering, install [jq for Windows](https://github.com/stedolan/jq/releases):

```powershell
jq 'select(.event_type=="tls")' eve.json
```

## 🔄 Step 6: Update Crypto Rules (Optional)

To keep the blocklist fresh:

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-sni-domains-and-ips.rules" -OutFile "C:\Program Files\Suricata\rules\crypto-firewall.rules"
```

Then restart Suricata manually or close and re-run the command in Step 4.

## ✅ Done!

Your Windows system is now:

* 🧠 Monitoring TLS traffic for SNI domains
* 🔐 Blocking known crypto scams and threats
* 📄 Logging detections to `eve.json` for audit/review

## 📚 Resources

* 🔗 [Suricata.io](https://suricata.io/)
* 🔐 [Crypto Firewall GitHub](https://github.com/chartingshow/crypto-firewall)
* 🧾 [SNI on Wikipedia](https://en.wikipedia.org/wiki/Server_Name_Indication)
