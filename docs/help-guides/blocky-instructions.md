# 🛡️ 🔒 How to Install Blocky with Crypto Firewall

## 1. Installing Blocky 🧩

### A. Prepare configuration

Create a `config.yml` (or a directory of `.yml` files) based on the official docs.
A minimal example:

```yaml
upstreams:
  groups:
    default:
      - 9.9.9.9
      - tcp‑tls:1.1.1.1:853
      - https://dns.digitale-gesellschaft.ch/dns-query
blocking:
  denylists:
    default:
      - https://raw.githubusercontent.com/chartingshow/crypto‑firewall/refs/heads/master/src/blacklists/domains‑only.txt
  clientGroupsBlock:
    default:
      - default
ports:
  dns: 53
  http: 4000
```

### B. Install and run Blocky

#### Option 1: Standalone binary

1. Download the latest release binary from GitHub (choose your OS/arch).
2. Place it and your `config.yml` in the same directory
3. Grant permission to bind port 53 (non-root approach):

```bash
sudo setcap 'cap_net_bind_service=+ep' ./blocky
```

4. Run:

```bash
./blocky --config config.yml
```

#### Option 2: Docker / Docker‑Compose

Run with `docker`:

```bash
docker run --name blocky \
  -v /path/to/config.yml:/app/config.yml:ro \
  -p 53:53/udp \
  -p 53:53/tcp \
  -p 4000:4000 \
  spx01/blocky
```

Or via `docker-compose.yml`:

```yaml
version: '2.1'
services:
  blocky:
    image: spx01/blocky
    container_name: blocky
    restart: unless-stopped
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "4000:4000/tcp"
    volumes:
      - ./config.yml:/app/config.yml:ro
```

Then start:

```bash
docker-compose up -d
```

### C. Optional: Install via script or package manager

There are installer scripts and community packaging for CentOS, Fedora, Debian, Ubuntu, Homebrew, NixOS, etc. See the official docs for your OS.

### D. Enable as systemd service (if using binary)

Create a dedicated user (e.g. `blocky`) for security. Then add `/etc/systemd/system/blocky.service`:

```ini
[Unit]
Description=Blocky DNS
After=network.target

[Service]
Type=simple
User=blocky
WorkingDirectory=/opt/blocky
ExecStart=/opt/blocky/blocky --config config.yml
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable blocky
sudo systemctl start blocky
```

## 2. Adding the Crypto Firewall Blocklist to Blocky

The Crypto Firewall domain-only list is hosted here:

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/domains-only.txt
```

### ✅ Add it to your `config.yml`:

```yaml
blocking:
  denylists:
    crypto_firewall:
      - https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/domains-only.txt
  clientGroupsBlock:
    default:
      - crypto_firewall
```

Blocky will periodically download and refresh this list automatically (default every 4 hours).

## 📋 Full Example `config.yml`

```yaml
upstreams:
  groups:
    default:
      - 9.9.9.9
      - https://dns.digitale-gesellschaft.ch/dns-query

blocking:
  denylists:
    crypto_firewall:
      - https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/domains-only.txt
  clientGroupsBlock:
    default:
      - crypto_firewall

ports:
  dns: 53
  http: 4000

log:
  level: error
```

## 3. Finishing Setup

### A. Restart Blocky

```bash
# Binary
./blocky --config config.yml   # or systemctl restart blocky
# Docker
docker restart blocky          # or docker-compose restart
```

### B. Test DNS

Use a DNS tool like `dig` or `nslookup`:

```bash
dig @127.0.0.1 example.com
```

If `example.com` is in the blocklist, it should return NXDOMAIN or 0.0.0.0.

### C. Point your network to Blocky

* Set your router or DHCP to give Blocky’s IP as DNS server
* Or configure individual clients manually

Now Blocky is live on port 53, blocking domains from the Crypto Firewall list.

## 🚀 Summary

| Step | Description                                          |
| ---- | ---------------------------------------------------- |
| 1    | Create `config.yml` referencing Crypto Firewall list |
| 2    | Install and run Blocky binary or Docker container    |
| 3    | Ensure Blocky can bind DNS port                      |
| 4    | Restart and test DNS resolution                      |
| 5    | Point clients or router to Blocky                    |

✅ You've now installed **Blocky** and activated the **Crypto Firewall** domain blocklist to shield against cryptojacking, malware, phishing, and other online threats.

For more advanced features — such as regex blocking, client-based rules, Prometheus metrics, or a web GUI — consult the official Blocky resources:

### 📚 Official Blocky Documentation & Resources

* 📘 **Docs (latest):**
  [https://0xerr0r.github.io/blocky/latest/](https://0xerr0r.github.io/blocky/latest/)

* ⚙️ **Installation Guide:**
  [https://0xerr0r.github.io/blocky/latest/installation/](https://0xerr0r.github.io/blocky/latest/installation/)

* 🛠️ **GitHub Repository (source code, issues, wiki):**
  [https://github.com/0xERR0R/blocky](https://github.com/0xERR0R/blocky)

* 📦 **Download Latest Releases (binaries):**
  [https://github.com/0xERR0R/blocky/releases](https://github.com/0xERR0R/blocky/releases)
  
⭐ If you found this helpful, consider starring the [Crypto Firewall GitHub repo](https://github.com/chartingshow/crypto-firewall) and sharing this guide!
