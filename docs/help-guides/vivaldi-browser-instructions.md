# 🛡️ How to Install Vivaldi and Add the Crypto Firewall (AdBlock Lists)

## ✅ Step 1: Install the Vivaldi Browser

### 📥 For Desktop (Windows, macOS, Linux)

1. Visit the official download page:
   👉 [https://vivaldi.com/desktop/](https://vivaldi.com/desktop/)
2. Click the **Download Vivaldi** button.
3. Open the downloaded file and follow the on-screen instructions to install.
4. Once installed, launch **Vivaldi**.

### 📱 For Android

1. Visit the Google Play Store:
   👉 [https://play.google.com/store/apps/details?id=com.vivaldi.browser](https://play.google.com/store/apps/details?id=com.vivaldi.browser)
2. Tap **Install**.
3. Open the **Vivaldi app** once the installation is complete.

Or, use the Vivaldi official Android site:
👉 [https://vivaldi.com/android/](https://vivaldi.com/android/)

### 📱 For iPhone / iPad (iOS)

1. Visit the App Store:
   👉 [https://apps.apple.com/app/vivaldi-browser/id1633234600](https://apps.apple.com/app/vivaldi-browser/id1633234600)
2. Tap **Get** and install.
3. Launch **Vivaldi** from your home screen.

Or, use the Vivaldi official iOS site:
👉 [https://vivaldi.com/ios/](https://vivaldi.com/ios/)

## 🚘 For Android Automotive

1. Go to:
   👉 [https://vivaldi.com/android/automotive/](https://vivaldi.com/android/automotive/)
2. Follow the instructions specific to your car model (Polestar, Volvo, etc.).

## 🔐 Step 2: Enable Ad Blocking in Vivaldi

Crypto Firewall works by adding **custom ad-block filter lists** to Vivaldi’s built-in tracker/ad blocker.

### 🌐 Desktop (Windows / macOS / Linux)

1. Open Vivaldi and go to:

   ```
   vivaldi://settings/privacy/
   ```

   Or:

   * Click the **Vivaldi menu (☰)** → **Settings** → **Privacy and Security**
2. Scroll to **Tracker and Ad Blocking**.
3. Ensure **Block trackers and ads** is **enabled**.
4. Click on **Manage Sources** under **Ad Blocking Sources**.

## 🔗 Step 3: Add the Crypto Firewall AdBlock Lists

In the **Manage Sources** section, scroll to the bottom and click **Add Source** for each list you want to include.

### 🧱 Recommended Crypto Firewall Blocklists:

#### ✅ Lite Version (stable & low false positives)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt
```

#### 🔥 Full Version (more aggressive blocking)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt
```

#### 🚨 Mega Version (very aggressive, may break some sites)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt
```

#### ⚠️ Beta Version (experimental, unstable)

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt
```

### 🛑 Optional: Block IP Addresses

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/ip-AdBlock Plus.txt
```

## ☑️ Final Step: Activate Your Filters

After adding each list:

1. Make sure the toggle next to each custom list is **enabled** ✅.
2. Close and reopen Vivaldi to apply the filters.

## 📝 Notes for Mobile Users

As of now, **custom filter lists** can **only be added on the desktop version** of Vivaldi. Mobile apps (Android/iOS) do not yet support custom AdBlock filter URLs.

If you want Crypto Firewall protection on mobile, consider using Brave or other browsers with support for custom lists.

## 📚 Resources

* Crypto Firewall GitHub:
  👉 [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)
* Learn more about Vivaldi’s ad blocker:
  👉 [https://help.vivaldi.com](https://help.vivaldi.com)
