# Brave Browser Desktop Installation Guide

This guide will help you install the Crypto Firewall extension on the Brave browser for desktop.

## Step 1: Open the Brave Browser

You can download the Brave browser from [here](https://brave.com/download/). Then click on the "Get Brave" button to download the installer for your operating system. Once the download is complete, open the installer and follow the on-screen instructions to install the browser.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/1.jpg" alt="Brave Browser" /></p>

If you already have it installed, open the browser.

## Step 2: Open the Settings Page

In the top right corner of the browser, click on the three horizontal lines (menu icon) and select "Settings" from the dropdown menu. Alternatively, you can type `brave://settings/` in the address bar and press Enter.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/2.jpg" alt="Brave Browser" /></p>

## Step 3: Go to "Shields" Settings

In the left sidebar, click on "Shields" to access the Shields settings. This is where you can manage your privacy and security settings.

Then select the "Content Filtering" option. This will allow you to manage the content filtering settings for the Brave browser.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/3.jpg" alt="Brave Browser" /></p>

## Step 4: Add custom filter lists

In the "Content Filters" section, scroll down to the "Custom filter lists" section. Here, you can add custom filter lists to enhance your browsing experience.

Select one of the following URL's to add the Crypto Firewall filter list:

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

#### Recommended versions

The firewall is known to reduce performance slightly and this is why we have several **different** versions.

Here's a suggested guide based on cpu processors:

- **Intel i3** - use `full` version (if you experience bad performance then try `lite` version instead).
- **Intel i5** - use `full` version (if you experience bad performance then try `lite` version instead).
- **Intel i7** - use `mega` version (if you experience bad performance then try `full` version instead).
- **Intel i9** - use `beta` or `mega` (if you experience bad performance then try `full` version instead).

- **AMD Ryzen 3** - use `lite` version (if you experience bad performance then try `full` version instead).
- **AMD Ryzen 5** - use `full` version (if you experience bad performance then try `lite` version instead).
- **AMD Ryzen 7** - use `mega` version (if you experience bad performance then try `full` version instead).
- **AMD Ryzen 9** - use `beta` or `mega` (if you experience bad performance then try `full` version instead).

When you have selected the filter list you want to use, click on the "Add" button to add it to your custom filter lists.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/4.jpg" alt="Brave Browser" /></p>

## Step 5: Displayed in the custom list section

The crypto firewall filter list will now be displayed in the custom filter lists section. You can enable or disable it by toggling the switch next to it. You can also remove it by clicking on the "Remove" button. Note the "Last updated" date to ensure you are using the latest version of the filter list. You can also check the "Update now" button to update the filter list manually.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/5.jpg" alt="Brave Browser" /></p>

## Step 6: Developer mode

Uner the "custom lists" section, you can enable the "Developer mode" by turning on the toggle switch. This will allow you to see the developer options for the filter list.

Next copy the code found here: https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/crypto-annoyances-adblock.txt

Then paste it into the "Create custom filters" text box and click on the "Save changes" button.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/6.jpg" alt="Brave Browser" /></p>

## Step 7: Custom Scriplets

In the "Custom Scriplets" section, you can add custom scripts to enhance your browsing experience. You can add scripts to block ads, trackers and other unwanted content.

Click on the button "Add new scriplet" to add a new script. You can also edit or remove existing scripts by clicking on the "Edit" or "Remove" buttons.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/7.jpg" alt="Brave Browser" /></p>

## Step 8: Add Custom Scriplets - Crypto Mining Blocker

For the "Name" field, enter `crypto-mining-blocker` - this needs to be the **same as the name of the script you are adding!**

In the "Content" field, copy and paste the following script, by going to the following URL: https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/scriptlets/crypto-mining-blocker.js

Lastly, click on the "Save" button to save the script.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/8.jpg" alt="Brave Browser" /></p>

## Step 9: Updated Custom Scriplets

In the "Custom Scriplets" section, you can see the custom script you just added called: `user-crypto-mining-blocker.js`. The name of the script is `user-crypto-mining-blocker.js` - this is the name of the script that will be used to block crypto mining scripts.

**Note:** Brave browser may have a different name for the script, but it will still work the same way!

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/9.jpg" alt="Brave Browser" /></p>

## Step 10: Update the "Create custom filters"

You will now need to add the following code to the "Create custom filters" text box:

```
! Custom scriptlets
*##+js(user-crypto-mining-blocker.js)
```

Scroll down to the bottom of the text box and paste the code into the text box. This will allow the "Crypto Mining Blocker" script to run on all webpages and block crypto mining scripts automatically.

Then click on the "Save changes" button to save the changes.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/10.jpg" alt="Brave Browser" /></p>

## Step 11: Add Custom Scriplets - Block Bad Developer Packages (optional step)

If you are a **developer** and want to block bad developer packages, for example that have been hacked or contains malicious code such as a crypto drainer, you can add the following code to the "Custom scriplets" section.

Click on the button "Add new scriplet" to add a new script. You can also edit or remove existing scripts by clicking on the "Edit" or "Remove" buttons.

For the "Name" field, enter `bad-packages-browser-extensions` - this needs to be the **same as the name of the script you are adding!**

In the "Content" field, copy and paste the following script, by going to the following URL: https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/scriptlets/bad-packages-browser-extensions.js

Lastly, click on the "Save" button to save the script.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/brave-browser/desktop/11.jpg" alt="Brave Browser" /></p>

## Step 12: Update the "Create custom filters"

You will now need to add the following code to the "Create custom filters" text box:

```
! Custom scriptlets
*##+js(user-crypto-mining-blocker.js)
*##+js(user-bad-packages-browser-extensions.js)
```

Scroll down to the bottom of the text box and paste the code into the text box. This will allow the "Crypto Mining Blocker" script to run on all webpages and block crypto mining scripts automatically.

Then click on the "Save changes" button to save the changes.

## Step 13: Restart the Browser

After you have added the custom filter lists and scripts, restart the Brave browser to apply the changes. This will ensure that the custom filter lists and scripts are loaded and applied to all webpages you visit.

### Step 14: Enjoy Safe Browsing

You have successfully installed the Crypto Firewall extension on the Brave browser for desktop. You can now enjoy safe browsing and protect yourself from unwanted ads, trackers and crypto mining scripts.

You can also check the "Update now" button to update the filter list manually.

### More Custom Scriplets

Lastly, you can check out more free custom scriplets in this guide: [Scriptlets Instructions](https://github.com/chartingshow/crypto-firewall/blob/master/docs/help-guides/scriplets-instructions.md)
