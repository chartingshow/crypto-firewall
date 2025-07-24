# 📱 How to Use Crypto Firewall with Blokada on iOS

**Applies to:** iPhone / iPad (iOS) users using [Blokada on the App Store](https://apps.apple.com/us/app/ad-blocker-vpn-dns-blokada/id1508341781)

## ⚠️ Important iOS Limitations

> iOS **does not allow** custom blocklists like on Android.
> Blokada on iOS uses a **VPN-based DNS firewall** with fixed blocklists.

You **cannot directly add** the Crypto Firewall blocklist to Blokada on iOS — but you **can** still protect yourself using DNS-based filtering and pair it with **other apps or system-level protections** for stronger coverage.

## ✅ What You Can Still Do

* Use Blokada’s default ad-blocking DNS
* Enable Blokada VPN protection on iOS
* Optionally, set up **NextDNS** or **ControlD**, which allow custom lists like Crypto Firewall
* Combine with **Safari content blockers** (like 1Blocker or AdGuard)

## 1️⃣ Step 1: Install Blokada on iOS

1. Open the **App Store** on your iPhone or iPad
2. Search for:

   ```
   Blokada
   ```
3. Tap this official app:
   [Ad Blocker VPN & DNS | Blokada](https://apps.apple.com/us/app/ad-blocker-vpn-dns-blokada/id1508341781)
4. Tap **Get** and install

## 2️⃣ Step 2: Set Up Blokada VPN

1. Launch the **Blokada app**
2. Accept the terms and go through the onboarding screens
3. Tap the **Power icon** to enable Blokada
4. Allow Blokada to add a **VPN configuration**
5. Confirm activation when prompted by iOS

Blokada will now block known ad, tracker and malware domains via its selected DNS.

## 3️⃣ Step 3: Improve Protection (Optional)

Since custom blocklists like Crypto Firewall **cannot** be added directly in iOS Blokada, here are your best alternative options:

### 🔹 Option A: Use Crypto Firewall with **NextDNS** (Recommended)

NextDNS is a private DNS service that **does support** custom blocklists.

#### How to Use Crypto Firewall on iOS with NextDNS:

1. Go to [https://nextdns.io](https://nextdns.io) and create a free account
2. In your dashboard, go to **"Blocklists"**
3. Click **Add a blocklist** and choose **"Custom"**
4. Paste one or more of these URLs:

| Version | URL                                                                                                              |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| Full    | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt`          |
| Mega    | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt`          |
| Hosts   | `https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/hosts-domains-and-ips.txt` |

5. Save changes
6. On your iPhone, go to:
   `Settings` → `Wi-Fi` → (tap your network) → `Configure DNS` → `Manual`
7. Add your **NextDNS IPv4 DNS servers**

   * You can find these in your NextDNS setup guide

✅ Now, you're using Crypto Firewall through a private DNS — system-wide on iOS.

### 🔹 Option B: Use a Safari Content Blocker

Blokada does **not block in-app ads or Safari ads** on iOS. You can install:

* **AdGuard** or **1Blocker** (from App Store)
* Enable them in `Settings → Safari → Extensions`
* Choose lists or add custom domains (if supported)

### 🔹 Option C: Use ControlD DNS (Advanced)

Like NextDNS, [ControlD](https://controld.com/) also supports **custom blocklists**, including Crypto Firewall lists.

## 🛡️ Summary

| Method          | Crypto Firewall Support | Notes                               |
| --------------- | ----------------------- | ----------------------------------- |
| Blokada (iOS)   | ❌ Not supported         | No custom lists on iOS Blokada      |
| NextDNS         | ✅ Full support          | Custom DNS + Crypto Firewall        |
| ControlD        | ✅ Full support          | Similar to NextDNS                  |
| Safari blockers | ⚠️ Limited              | May allow domain-based filters only |

## 🔚 Final Thoughts

* Blokada on iOS is excellent for **basic privacy and ad blocking**.
* For **Crypto Firewall-level protection**, pair Blokada with **NextDNS**.
* Always keep your iOS and apps updated for best security.
