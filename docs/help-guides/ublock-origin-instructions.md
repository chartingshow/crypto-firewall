## uBlock Origin Instructions

This shows you how to add the filter list to [uBlock Origin](https://ublockorigin.com/) on a computer device (this guide may differ slightly on mobile devices).

1. Open uBlock Origin, by clicking on the browser extension found at the top of the browser window.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/1.jpg" /></p>

2. Next open the settings by clicking on the cogs icon.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/2.jpg" /></p>

3. Go to the **Filter Lists** tab.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/3.jpg" /></p>

4. Click on the **Import...** which should then show a box, copy and paste **one** of the following URL's to add the Crypto Firewall filter list:

### Lite (stable) Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/lite-version.txt
```

### Full (stable) Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/full-version.txt
```

### Mega (stable) Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/mega-version.txt
```

### Beta (unstable) Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/beta-version.txt
```

#### Recommended versions

The firewall is known to reduce performance slightly and this is why we have several **different** versions.

Here's a suggested guide based on cpu processors:

- **Intel i3** - use `full` version (if you experience bad performance then try `lite` version instead).
- **Intel i5** - use `full` version (if you experience bad performance then try `lite` version instead).
- **Intel i7** - use `mega` version (if you experience bad performance then try `full` version instead).
- **Intel i9** - use `beta` or `mega` versions (if you experience bad performance then try `full` version instead).

- **AMD Ryzen 3** - use `lite` version (if you experience bad performance then try `full` version instead).
- **AMD Ryzen 5** - use `full` version (if you experience bad performance then try `lite` version instead).
- **AMD Ryzen 7** - use `mega` version (if you experience bad performance then try `full` version instead).
- **AMD Ryzen 9** - use `beta` or `mega` versions (if you experience bad performance then try `full` version instead).

When you have selected the filter list you want to use, click on the "**Add**" button to add it to your custom filter lists.

Example:

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/4b.jpg" /></p>

5. Click on the **Apply Changes** button.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/5b.jpg" /></p>

6. You should now see the following under a **Custom** section.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/6.jpg" /></p>

7. The custom filter list has now been added and you can close uBlock Origin.

**Note:** Over time the filter lists will get updated and users should repeat steps 1 - 3 and then click on the clock icon next to **Block Bad Crypto Filter Lists**

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/7.jpg" /></p>

After that the clock icon will change and you then click on the **Update Now** button to get the latest filter list protection.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/8.jpg" /></p>

### Crypto Annoyances (Optional Step)

The file `block-crypto-annoyances.txt` is a filter list that contains rules and filters to block various annoyances and unwanted content specifically related to cryptocurrency websites and related platforms.

You can add this extra filter list by repeating steps 4 and 5 and using this the below url:

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/block-crypto-annoyances.txt
```

Here's a breakdown of what the Crypto Annoyances Block filter list file does:

1.  **General Annoyance Blocking**:
    *   Removes parameters from URLs (like `utm_` parameters used for tracking).
    *   Blocks cookie consent prompts and banners.

2.  **Social Media Blocks**:
    *   Targets specific elements on social media platforms to remove promoted content.

3.  **TradingView Annoyances**:
    *   Hides popups, notifications and other distracting elements on TradingView.
    *   Blocks telemetry and tracking scripts.

4.  **Exchange Blocks**:
    *   Removes compliance banners on Binance, Coinbase and other crypto exchanges.
    *   Removes banners and pop-ups.

5.  **Crypto Blocks**:
    *   Targets various cryptocurrency-related websites (CoinGecko, CoinMarketCap, etc.).
    *   Hides or removes elements such as ads, banners, social media feeds and other promotional content.

In summary, this filter list aims to provide a cleaner, less distracting experience when browsing cryptocurrency-related websites by blocking common annoyances, ads and tracking mechanisms.
