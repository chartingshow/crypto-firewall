/**
 * @file bad-packages-browser-extensions.js
 * @title Block Bad Packages and Browser Extensions
 * @description A comprehensive scriptlet designed to protect users from potentially
 *              malicious cryptocurrency-related packages, extensions, and projects.
 *              This scriptlet checks URLs against blacklists of known threats,
 *              covering npm packages, Chrome extensions, PyPI packages, and Firebase
 *              projects, alerting users when they encounter potentially harmful content.
 * @version 1.0.2
 * @copyright (c) The Charting Show (https://github.com/chartingshow/crypto-firewall)
 * @license GPL-3.0 license - (View LICENSE file for details)
 *
 * This Scriptlet is intended to be used with Brave Browser's custom scriptlets feature
 * to enhance protection against cryptocurrency-related threats.
 *
 * Original Authors: Charting Show Team
 *
 * Contributions and feedback are welcome!
 */
;(async function () {
  // Define the URLs for the blacklist files
  const blacklistURLs = {
    'npmjs.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/package-names/npm-packages.txt',
    'chrome.google.com/webstore':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/package-names/chrome-store.txt',
    'pypi.org':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/package-names/pypi-packages.txt',
    'firebaseio.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/package-names/firebase-projects.txt',
    'chrome.extension':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/package-names/chrome-extension-ids.txt',
    'marketplace.visualstudio.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/package-names/vscode-packages.txt',
  }

  // Function to fetch a blacklist from a URL
  async function fetchBlacklist(url) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        console.error(
          `Failed to fetch blacklist from ${url}: ${response.status}`,
        )
        return []
      }
      const text = await response.text()
      return text
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => item !== '' && !item.startsWith('#')) // Remove empty lines and comments
    } catch (error) {
      console.error(`Error fetching blacklist from ${url}: ${error}`)
      return []
    }
  }

  // Function to check if the current URL contains a blacklisted item
  async function checkURLAgainstBlacklist(hostname) {
    if (!blacklistURLs[hostname]) {
      return // No blacklist for this domain
    }

    const blacklist = await fetchBlacklist(blacklistURLs[hostname])
    const currentURL = window.location.href

    for (const badItem of blacklist) {
      if (currentURL.includes(badItem)) {
        // Found a match! Show a warning.
        showAlert(badItem, hostname)
        break // Only show one warning at a time
      }
    }
  }

  // Function to display an alert to the user
  function showAlert(badItem, hostname) {
    const message = `WARNING! This URL on ${hostname} contains a potentially malicious package/extension: ${badItem}.\n\nProceed with extreme caution!`
    alert(message)
  }

  // Get the hostname of the current page
  const currentHostname = window.location.hostname

  // Check for chrome webstore since it's part of the url and not the hostname
  if (window.location.href.includes('chrome.google.com/webstore')) {
    checkURLAgainstBlacklist('chrome.google.com/webstore')
  }
  // Special check for Firebase projects since they usually appear as subdomains
  else if (
    currentHostname === 'firebaseio.com' ||
    currentHostname.endsWith('.firebaseio.com')
  ) {
    checkURLAgainstBlacklist('firebaseio.com')
  }
  // Check for Chrome extensions
  else if (currentHostname === 'chrome.google.com') {
    checkURLAgainstBlacklist('chrome.extension')
  }
  // Check for Visual Studio Marketplace
  else if (currentHostname === 'marketplace.visualstudio.com') {
    checkURLAgainstBlacklist('marketplace.visualstudio.com')
  } else {
    checkURLAgainstBlacklist(currentHostname)
  }
})()
