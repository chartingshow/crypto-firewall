# 🛡️ Suricata + Crypto Firewall Blocklist: Installation Guide

This guide explains how to:

1. ✅ Install **Suricata** (an open-source intrusion detection/prevention system).
2. 🔐 Add the **Crypto Firewall** blocklist to Suricata, blocking known malicious crypto domains and IPs.

## 🪟 Step 1: Download and Install Suricata (Windows)

### ✅ A. Download the Installer

Go to the official Suricata download page:

👉 [https://suricata.io/download/](https://suricata.io/download/)

Look for **Windows Installer** (typically listed under the latest stable version).

Or go directly to the GitHub releases:
👉 [https://github.com/OISF/suricata/releases](https://github.com/OISF/suricata/releases)

Download the `.msi` installer for Windows (e.g., `Suricata-7.0.5-1.msi`).

### 🛠️ B. Run the Installer

1. Double-click the `.msi` installer.
2. Follow the installation wizard.
3. Install to default location (e.g., `C:\Program Files\Suricata`) unless you prefer a custom path.
4. Allow it to install the **WinPcap** or **Npcap** driver if prompted (needed for packet capture).
5. Complete the installation.

### 📁 C. Verify the Installation

Open **Command Prompt** as Administrator, and run:

```cmd
"C:\Program Files\Suricata\suricata.exe" -V
```

You should see version information if Suricata is installed correctly.

## 🔐 Step 2: Add Crypto Firewall Blocklist

### 🗂️ A. Download the Rules File

Open **PowerShell** or **Command Prompt**, then run one of the following:

#### Option 1: Domains and IPs

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-domains-and-ips.rules" -OutFile "C:\Program Files\Suricata\rules\crypto-firewall.rules"
```

#### Option 2: Domains Only

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-domains-only.rules" -OutFile "C:\Program Files\Suricata\rules\crypto-firewall.rules"
```

> 💡 Choose one depending on whether you want both domains/IPs or just domains.

### ✏️ B. Edit the Config File

Edit the Suricata config file:

```plaintext
C:\Program Files\Suricata\suricata.yaml
```

1. Open it in **Notepad** (Run as Administrator).
2. Find the `rule-files:` section.
3. Add this line:

```yaml
  - crypto-firewall.rules
```

Example:

```yaml
rule-files:
  - suricata.rules
  - crypto-firewall.rules
```

4. Save the file.

### 🧪 C. Test the Configuration

In **Command Prompt**, run:

```cmd
cd "C:\Program Files\Suricata"
suricata.exe -T -c suricata.yaml -v
```

This checks if your config is valid. Look for `Configuration provided is valid`.

## ▶️ Step 3: Run Suricata

To run Suricata on your network interface:

1. Open **Command Prompt as Administrator**
2. Run:

```cmd
cd "C:\Program Files\Suricata"
suricata.exe -c suricata.yaml -i <InterfaceName>
```

To list available interfaces:

```cmd
suricata.exe -I
```

Replace `<InterfaceName>` with the number or name of your network interface (e.g., `3` or `Ethernet`).

## 🔍 Step 4: Check for Alerts

Suricata will log alerts to:

```plaintext
C:\Program Files\Suricata\log\fast.log
```

Open this file with Notepad to see if Suricata is blocking any crypto-related domains or IPs.

## 🔄 Optional: Auto-Update Crypto Blocklist (Manual Script)

You can create a script to update the blocklist regularly.

1. Open **Notepad** and paste:

```batch
@echo off
setlocal

set RULE_URL=https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/suricata-domains-and-ips.rules
set RULE_PATH="C:\Program Files\Suricata\rules\crypto-firewall.rules"

powershell -Command "Invoke-WebRequest -Uri '%RULE_URL%' -OutFile %RULE_PATH%"
echo Rules updated.

exit /b
```

2. Save as `update-rules.bat`
3. Run manually or set it to run with Windows Task Scheduler weekly or daily.

## ✅ Done!

Suricata is now filtering connections using the Crypto Firewall blocklist.

If you have questions, you can explore:

* [Suricata Documentation](https://suricata.readthedocs.io/)
* [Crypto Firewall GitHub](https://github.com/chartingshow/crypto-firewall/)

⭐ If you found this helpful, consider starring the [Crypto Firewall GitHub repo](https://github.com/chartingshow/crypto-firewall) and sharing this guide!
