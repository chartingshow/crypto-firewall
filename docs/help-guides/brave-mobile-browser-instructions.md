# Brave Browser Mobile Installation Guide

This guide will help you install the Crypto Firewall extension on the [Brave browser](https://brave.com/download/) for mobile.

## Step 1: Open the Brave Browser

You can download the Brave browser from the following sources:

- [Web](https://brave.com/download/)
- [Apple Store](https://apps.apple.com/us/app/brave-browser-search-engine/id1052879175)
- [Google Play Store](https://play.google.com/store/apps/details?id=com.brave.browser&hl=en_US)
- [Microsoft Store](https://www.microsoft.com/en-us/p/brave-private-browser/9nblggh3v0j4?activetab=pivot:overviewtab)
- [Amazon App Store](https://www.amazon.com/Brave-Private-Browser-Search-Engine/dp/B08K3QZ5X8)
- [Samsung Galaxy Store](https://galaxystore.samsung.com/detail/com.brave.browser)
- [Huawei App Gallery](https://appgallery.huawei.com/#/app/C101007195)

You can do a search for "**Brave Browser**" in your app store or use the links above to download the Brave browser.

Then click on the "**Install**" button to download the app installer for your mobile device. Once the app is installed, open the Brave browser.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/1.jpg" alt="Brave Browser" /></p>

If you already have it installed, open the Brave browser app.

## Step 2: Open the Menu

In the bottom right corner of the browser, click on the three horizontal lines (menu icon) and this will open the menu.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/2.jpg" alt="Brave Browser" /></p>

## Step 3: Open the Settings Page

Select "**Settings**" from the dropdown menu. Alternatively, you can type `brave://settings/` in the address bar and press Enter.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/3.jpg" alt="Brave Browser" /></p>

## Step 4: Go to "Brave Shields & Privacy" Settings

Under "**Features**" section, click on "**Brave Shields & Privacy**" to access the Shields settings. This is where you can manage your privacy and security settings.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/4.jpg" alt="Brave Browser" /></p>

## Step 5: Select "Content Filters"

Next go down and select the "**Content Filters**" option. This will allow you to manage the content filtering settings for the Brave browser.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/5.jpg" alt="Brave Browser" /></p>

## Step 6: Add custom filter lists

Under the "**Custom filter lists**" section. Select "**Add custom filter list**" to add a new filter list. Here, you can add custom filter lists to enhance your browsing experience.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/6.jpg" alt="Brave Browser" /></p>

## Step 7: Add Custom Filter List URL

Select one of the following URL's to add the Custom Filter List URL text field:

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

- **Tablet** - use `mega` or `full` versions (if you experience bad performance then try `full` version instead).
- **Powerful Smartphone** - use `full` version (if you experience bad performance then try `lite` version instead).
- **Low-End Smartphone** - use `lite` version.

When you have selected the filter list you want to use, copy the URL and paste it into the "**Custom filter list URL**" text field.

Then click on the "**Add**" button to add it to your custom filter lists.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/7.jpg" alt="Brave Browser" /></p>

## Step 8: Custom Filter List Updated

You should see the Crypto Firewall filter list added to the custom filter lists section. You can enable or disable it by toggling the switch next to it. You can also remove it by clicking on the "pencil" icon button at the top. You can also click on the "**Update**" button to force update the Crypto Firewall filter list manually.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/8.jpg" alt="Brave Browser" /></p>

## Step 9: Create Custom Filters

Under the "**Custom filter lists**" section. Select "**Create custom filters**" to add the "Block Crypto Annoyances Filter List" to the custom filter lists. This will allow you to create custom filters to block unwanted crypto content.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/10.jpg" alt="Brave Browser" /></p>

## Step 10: Add Custom Filter List URL

In the "**Create custom filters**" text box, copy and paste the following script, by going to the following URL: https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/crypto-annoyances-adblock.txt

Then click on the "**Save changes**" button to save the changes.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/mobile/11.jpg" alt="Brave Browser" /></p>

## Step 11: Restart the Brave browser

Next close the app and restart the Brave browser. This will ensure that the changes take effect.
