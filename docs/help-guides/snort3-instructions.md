# 🔒 Installing Snort3 with Crypto Firewall Instructions Guide

This guide explains how to install Snort3 (on Linux) and configure it with the Crypto Firewall blocklist. The Crypto Firewall protects users against crypto-related scams and malicious infrastructure by blocking known threat domains and IPs.

## Requirements

* Ubuntu 20.04+ / Debian 10+ / Fedora / CentOS / RHEL
* sudo/root access
* gcc / cmake / make

## Step 1: Install Dependencies

Install essential build tools and libraries:

```bash
sudo apt update && sudo apt install -y \
  build-essential cmake libpcap-dev libpcre3-dev \
  libdumbnet-dev bison flex zlib1g-dev \
  liblzma-dev openssl libssl-dev \
  libnghttp2-dev libdnet autoconf \
  pkg-config libunwind-dev libmnl-dev \
  libboost-all-dev git
```

## Step 2: Download and Build Snort3

```bash
cd ~
git clone https://github.com/snort3/snort3.git
cd snort3
./configure_cmake.sh --prefix=/usr/local/snort
cd build
make -j$(nproc)
sudo make install
```

Add Snort3 to your environment:

```bash
echo 'export PATH=$PATH:/usr/local/snort/bin' >> ~/.bashrc
source ~/.bashrc
```

## Step 3: Configure Snort3

Create required directories:

```bash
sudo mkdir -p /usr/local/snort/etc/snort
sudo mkdir -p /usr/local/snort/etc/snort/rules
sudo mkdir -p /var/log/snort
```

Copy sample config:

```bash
sudo cp ~/snort3/etc/snort/snort.lua /usr/local/snort/etc/snort/
```

Create an empty custom local rules file:

```bash
sudo touch /usr/local/snort/etc/snort/rules/local.rules
```

Edit `snort.lua` to include the local rules file:

```bash
sudo nano /usr/local/snort/etc/snort/snort.lua
```

Look for this line:

```lua
-- include 'local.lua'
```

Uncomment and update it to:

```lua
include 'rules/local.rules'
```

## Step 4: Test Snort3

Run a basic test:

```bash
snort -c /usr/local/snort/etc/snort/snort.lua -R /usr/local/snort/etc/snort/rules/local.rules -i <your-interface> -A alert_fast -k none
```

Replace `<your-interface>` with your network interface, e.g., `eth0` or `enp0s3`.

You should see Snort start up without errors.

## Step 5: Add Crypto Firewall Blocklist

Download the blocklist:

```bash
cd /usr/local/snort/etc/snort/rules
sudo wget -O crypto-firewall.rules https://github.com/chartingshow/crypto-firewall/raw/refs/heads/master/src/blacklists/snort-domains-and-ips.txt
```

Append the rules to `local.rules`:

```bash
sudo cat crypto-firewall.rules >> local.rules
```

Optional: If you prefer only domain-based rules, use this instead:

```bash
sudo wget -O crypto-firewall.rules https://github.com/chartingshow/crypto-firewall/raw/refs/heads/master/src/blacklists/snort-domains-only.txt
sudo cat crypto-firewall.rules >> local.rules
```

## Step 6: Enable and Run Snort3

To start Snort3 in alert mode:

```bash
snort -c /usr/local/snort/etc/snort/snort.lua -R /usr/local/snort/etc/snort/rules/local.rules -i <your-interface> -A alert_fast -k none
```

To continuously monitor logs:

```bash
tail -f /var/log/snort/alert_fast.txt
```

## Useful Links

* [Snort Official Site](https://www.snort.org/)
* [Snort3 GitHub](https://github.com/snort3/snort3)
* [Snort3 Releases](https://github.com/snort3/snort3/releases)
* [Crypto Firewall Project](https://github.com/chartingshow/crypto-firewall)

---

If you encounter issues, check your system logs, Snort output, and ensure that your network interface is in promiscuous mode.

⭐ If you found this helpful, consider starring the [Crypto Firewall GitHub repo](https://github.com/chartingshow/crypto-firewall) and sharing this guide!
