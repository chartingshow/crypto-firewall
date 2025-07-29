# 🛡️ How to Set Up `dnscrypt-proxy` with Crypto Firewall Protection

This guide shows you how to install [`dnscrypt-proxy`](https://github.com/DNSCrypt/dnscrypt-proxy) and configure it to block crypto mining, scam, and surveillance domains/IPs using [Crypto Firewall](https://github.com/chartingshow/crypto-firewall) blocklists.

## ✅ What You'll Need

* A supported operating system (Linux, Windows, macOS, pfSense, OpenWRT, etc.)
* Administrator or root access
* Basic command-line knowledge
* Text editor (like Notepad++, Vim, or Nano)

## 📦 Step 1: Install `dnscrypt-proxy`

### 🔵 Windows

1. Download the latest release from:
   👉 [https://github.com/DNSCrypt/dnscrypt-proxy/releases](https://github.com/DNSCrypt/dnscrypt-proxy/releases)
2. Extract the zip archive to a folder like `C:\dnscrypt-proxy\`.
3. Open PowerShell **as Administrator** and run:

   ```powershell
   .\dnscrypt-proxy.exe -service install
   .\dnscrypt-proxy.exe -service start
   ```

📄 More info: [Windows Install Guide](https://github.com/dnscrypt/dnscrypt-proxy/wiki/Installation-Windows)

### 🔵 macOS

1. Using [Homebrew](https://brew.sh):

   ```bash
   brew install dnscrypt-proxy
   ```
2. Configuration file is located at:

   ```
   /usr/local/etc/dnscrypt-proxy.toml
   ```
3. Start the service:

   ```bash
   sudo brew services start dnscrypt-proxy
   ```

📄 More info: [macOS Install Guide](https://github.com/dnscrypt/dnscrypt-proxy/wiki/Installation-macOS)

### 🔵 Linux (Generic)

```bash
sudo apt update
sudo apt install -y dnscrypt-proxy
```

Or download the binary manually from [releases](https://github.com/DNSCrypt/dnscrypt-proxy/releases) and extract to `/opt/dnscrypt-proxy/`.

Start the service:

```bash
sudo systemctl enable dnscrypt-proxy
sudo systemctl start dnscrypt-proxy
```

📄 More info: [Linux Install Guide](https://github.com/dnscrypt/dnscrypt-proxy/wiki/Installation-linux)

### 🔵 pfSense, OpenWRT, EdgeOS, OPNsense, Synology NAS

See the official links below for platform-specific setup:

* [pfSense Setup](https://github.com/dnscrypt/dnscrypt-proxy/wiki/Installation-pfsense)
* [OpenWRT Setup](https://github.com/dnscrypt/dnscrypt-proxy/wiki/Installation-on-OpenWRT)
* [EdgeOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-on-EdgeOS)
* [OPNsense](https://github.com/opnsense/docs/blob/master/source/manual/how-tos/dnscrypt-proxy.rst)
* [Synology NAS](https://github.com/SynoCommunity/spksrc/wiki/FAQ-dnscrypt-proxy)

## 🔐 Step 2: Configure Crypto Firewall Blocklists

After installation, it's time to **enhance your DNS privacy** by adding the Crypto Firewall blacklists.

### 📁 Locate the config file

Default locations:

* Linux: `/etc/dnscrypt-proxy/dnscrypt-proxy.toml`
* macOS: `/usr/local/etc/dnscrypt-proxy.toml`
* Windows: Same directory as `dnscrypt-proxy.exe`

### ✍️ Edit the configuration file

Open `dnscrypt-proxy.toml` in your text editor and find the **blocklist section**.

#### 🔧 Enable and add the blocklists:

```toml
[blacklist]
blacklist_file = 'blacklist.txt'
```

Create the `blacklist.txt` file in the same folder and add the Crypto Firewall blocklist links:

📥 Download the latest domain list:

```bash
curl -o blacklist.txt https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/domains-only.txt
```

💡 You can also set up a **cron job** or scheduled task to update it automatically.

### 🔥 Add IP-level blocking (Optional)

`dnscrypt-proxy` doesn't block IPs natively, but you can use tools like `iptables`, `pf`, or `hosts.deny`.

Example using `iptables` (Linux):

```bash
curl -s https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip.txt | while read ip; do
  sudo iptables -A INPUT -s "$ip" -j DROP
done
```

🧠 Note: This blocks inbound from listed IPs. For DNS or outbound blocking, you may need to adapt based on your firewall.

## 🧪 Step 3: Test Your Setup

Run the following to check if `dnscrypt-proxy` is running:

```bash
dig @127.0.0.1 example.com
```

If you get a valid response, it’s working. You can also test blocked domains:

```bash
dig @127.0.0.1 coinhive.com
```

Expected result: **NXDOMAIN** (blocked)

## 🔄 Optional: Auto-update the Crypto Firewall Lists

Create a script like this and schedule it weekly:

```bash
#!/bin/bash
curl -o /etc/dnscrypt-proxy/blacklist.txt https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/domains-only.txt
sudo systemctl restart dnscrypt-proxy
```

Use `cron`, `systemd timer`, or Windows Task Scheduler to automate.

## 🎉 You're All Set!

Your system now uses encrypted DNS and protects against crypto scams, malware, and shady IPs using **dnscrypt-proxy** + **Crypto Firewall**.

## 📚 Resources

* 📘 [dnscrypt-proxy Wiki](https://github.com/dnscrypt/dnscrypt-proxy/wiki)
* 🔒 [Crypto Firewall GitHub](https://github.com/chartingshow/crypto-firewall)
* 🛠️ [Blocklist Source: Domains](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/domains-only.txt)
* 🛡️ [Blocklist Source: IPs](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/ip.txt)
