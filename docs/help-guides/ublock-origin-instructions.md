## uBlock Origin Instructions

This shows you how to add the filter list to [uBlock Origin](https://ublockorigin.com/) on a computer device (this guide may differ slightly on mobile devices).

1. Open uBlock Origin, by clicking on the browser extension found at the top of the browser window.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/1.jpg" /></p>

2. Next open the settings by clicking on the cogs icon.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/2.jpg" /></p>

3. Go to the **Filter Lists** tab.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/ublock/3.jpg" /></p>

4. Click on the **Import...** which should then show a box, copy and paste **one** of the following version URL's:

### Lite (stable) Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-lite.txt
```

### Full (stable) Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-full.txt
```

### Mega (stable) Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-mega.txt
```

### Beta (unstable) Version

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/nomalware-beta.txt
```

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

The file `crypto-annoyances-adblock.txt` is a filter list that contains rules and filters to block various annoyances and unwanted content specifically related to cryptocurrency websites and related platforms.

You can add this extra filter list by repeating steps 4 and 5 and using this the below url:

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/crypto-annoyances-adblock.txt
```

Here's a breakdown of what the `crypto-annoyances-adblock.txt` file does:

1.  **General Annoyance Blocking**:
    *   Removes parameters from URLs (like `utm_` parameters used for tracking).
    *   Blocks cookie consent prompts and banners.

2.  **Social Media Blocks**:
    *   Targets specific elements on Twitter to remove promoted content.

3.  **TradingView Annoyances**:
    *   Hides popups, notifications, and other distracting elements on TradingView.
    *   Blocks telemetry and tracking scripts.

4.  **Exchange Blocks**:
    *   Removes compliance banners on Binance.

5.  **Crypto Blocks**:
    *   Targets various cryptocurrency-related websites (Coinbase, CoinGecko, CoinMarketCap, etc.).
    *   Hides or removes elements such as ads, banners, social media feeds, and other promotional content.

In summary, this filter list aims to provide a cleaner, less distracting experience when browsing cryptocurrency-related websites by blocking common annoyances, ads, and tracking mechanisms.
