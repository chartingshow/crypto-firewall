# 🛡️ How to Install and Configure BIND RPZ with Crypto Firewall

This guide walks you through:

* Installing **BIND (named)** DNS server
* Enabling **RPZ (Response Policy Zones)**
* Applying the **Crypto Firewall** DNS blocklist to protect your system from cryptojacking and malicious domains

## ✅ Requirements

* Linux system (Ubuntu, Debian, CentOS, etc.)
* Root/sudo privileges
* Basic terminal/command-line experience

## 📦 Step 1: Install BIND

> BIND (Berkeley Internet Name Domain) is the most widely used open-source DNS server.

### 📌 Ubuntu / Debian

```bash
sudo apt update
sudo apt install bind9 bind9utils bind9-doc -y
```

### 📌 CentOS / RHEL

```bash
sudo yum install bind bind-utils -y
```

More info: 👉 [https://www.isc.org/bind/](https://www.isc.org/bind/)

## ⚙️ Step 2: Download the Crypto Firewall RPZ Blocklist

Download the Crypto Firewall blocklist in RPZ-compatible format:

```bash
sudo curl -o /etc/bind/rpz-firewall.db https://github.com/chartingshow/crypto-firewall/raw/refs/heads/master/src/blacklists/bind-rpz.conf
```

Set correct permissions:

```bash
sudo chown root:bind /etc/bind/rpz-firewall.db
sudo chmod 644 /etc/bind/rpz-firewall.db
```

## 🧩 Step 3: Configure RPZ in BIND

RPZ is configured like a standard DNS zone, but it's used to **intercept and override** malicious DNS responses.

### 🔧 Add RPZ Zone to BIND

Open your RPZ zone configuration file:

```bash
sudo nano /etc/bind/named.conf.local
```

Add this at the bottom:

```bash
zone "rpz.blocklist.local" {
    type master;
    file "/etc/bind/rpz-firewall.db";
};
```

### 🔧 Enable RPZ in BIND Options

Edit your main BIND options file:

```bash
sudo nano /etc/bind/named.conf.options
```

Inside the `options` block, ensure recursion is enabled:

```bash
recursion yes;
```

Now add the `response-policy` directive:

```bash
response-policy {
    zone "rpz.blocklist.local";
};
```

✅ Example section:

```bash
options {
    directory "/var/cache/bind";

    recursion yes;
    allow-query { any; };

    response-policy {
        zone "rpz.blocklist.local";
    };
};
```

## 🔁 Step 4: Check Configuration & Restart BIND

### 🧪 Validate Configuration

```bash
sudo named-checkconf
sudo named-checkzone rpz.blocklist.local /etc/bind/rpz-firewall.db
```

If no errors appear, you're good to go!

### 🔄 Restart BIND

```bash
# Ubuntu/Debian
sudo systemctl restart bind9

# CentOS/RHEL
sudo systemctl restart named
```

## 🧪 Step 5: Test That RPZ Is Working

Try resolving a domain known to be blocked by Crypto Firewall:

```bash
dig badcrypto.example.com @127.0.0.1
```

If configured correctly, BIND should **return 0.0.0.0** or a **REFUSED/NXDOMAIN** response, depending on your RPZ policy.

## 🔄 Optional: Auto-Update the Blocklist

Schedule daily updates using `cron`:

```bash
sudo crontab -e
```

Add this line:

```bash
0 3 * * * curl -o /etc/bind/rpz-firewall.db https://github.com/chartingshow/crypto-firewall/raw/refs/heads/master/src/blacklists/bind-rpz.conf && systemctl reload bind9
```

> This updates the Crypto Firewall blocklist every night at 3 AM and reloads BIND.

## 🧯 Troubleshooting

* **Logs for errors**:

  ```bash
  journalctl -xe | grep named
  ```

* **Verify RPZ is triggered**:

  ```bash
  dig +short blocked.domain.test @127.0.0.1
  ```

* **Make sure recursion is enabled** if you're running a local resolver:

  ```bash
  recursion yes;
  ```

## 📚 References

* BIND (ISC): [https://www.isc.org/bind/](https://www.isc.org/bind/)
* Crypto Firewall: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
* Blocklist RPZ File: [https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/bind-rpz.conf](https://github.com/chartingshow/crypto-firewall/blob/master/src/blacklists/bind-rpz.conf)

## 🔐 What is RPZ?

> **Response Policy Zones (RPZ)** let you create DNS firewall rules by overriding DNS responses. This is especially useful for blocking domains linked to **cryptojacking**, **malware**, and **phishing**.

You're now protected with **Crypto Firewall** on **BIND RPZ**!

🛡️ DNS filtering at the resolver level is one of the most effective first-line defenses against malicious domains.

⭐ If you found this helpful, consider starring the [Crypto Firewall GitHub repo](https://github.com/chartingshow/crypto-firewall) and sharing this guide!
