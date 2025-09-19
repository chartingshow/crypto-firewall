/**
 * @file bad-packages-browser-extensions.js
 * @title Block Bad Packages and Browser Extensions
 * @description A comprehensive scriptlet designed to protect users from potentially
 *              malicious cryptocurrency-related packages, extensions, and projects.
 *              This scriptlet checks URLs against blacklists of known threats,
 *              covering npm packages, Chrome extensions, PyPI packages, and Firebase
 *              projects, alerting users when they encounter potentially harmful content.
 *              Enhanced protection against malicious packages/extensions with JSON-based
 *              threat intelligence.
 * @version 2.0.7
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
  // Updated JSON blacklist endpoints
  const blacklistURLs = {
    'addons.mozilla.org':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/firefox-extensions.txt',
    'apps.apple.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/apple-app-store.txt',
    'chrome.extension':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/chrome-extension-ids.txt',
    'chrome.google.com/webstore':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/chrome-extensions.txt',
    'facebook.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/facebook-ids.txt',
    'firebaseio.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/firebase-projects.txt',
    'marketplace.visualstudio.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/vscode-extensions.txt',
    'npmjs.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/npm-packages.txt',
    'open-vsx.org':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/vsxcode-extensions.txt',
    'play.google.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/google-play.txt',
    'pypi.org':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/pypi-packages.txt',
  }

  // Cache for storing fetched blacklists
  const blacklistCache = new Map()

  // Enhanced fetch function with caching, now supports .json and .txt (ignores # comments in .txt)
  async function fetchBlacklist(url) {
    if (blacklistCache.has(url)) {
      return blacklistCache.get(url)
    }

    try {
      const response = await fetch(url, {cache: 'no-cache'})
      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      let data
      if (url.endsWith('.json')) {
        data = await response.json()
      } else if (url.endsWith('.txt')) {
        const text = await response.text()
        data = text
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter((line) => line && !line.startsWith('#'))
          .map((pkg) => ({
            package: pkg,
            type: 'unknown',
            severity: 'unknown',
            description: '',
            remediation: '',
          }))
      } else {
        data = []
      }
      blacklistCache.set(url, data)
      return data
    } catch (error) {
      console.error(`Failed to load blacklist from ${url}:`, error)
      return []
    }
  }

  // Improved URL checking with threat context
  async function checkURLAgainstBlacklist(hostname) {
    const blacklistUrl = blacklistURLs[hostname]
    if (!blacklistUrl) return

    // Use new fetchBlacklist function
    const blacklist = await fetchBlacklist(blacklistUrl)
    const currentURL = window.location.href.toLowerCase()

    for (const threat of blacklist) {
      if (currentURL.includes(threat.package.toLowerCase())) {
        showEnhancedAlert(threat, hostname)
        logThreatDetection(threat)
        break
      }
    }
  }

  // Advanced alert with remediation guidance
  function showEnhancedAlert(threat, hostname) {
    const alertHTML = `
    <div style="position:fixed;top:20px;right:20px;z-index:9999;
                background:#ff4444;color:white;padding:20px;
                border-radius:8px;max-width:400px;box-shadow:0 4px 8px rgba(0,0,0,0.3)">
      <h3 style="margin-top:0">SECURITY ALERT</h3>
      <p><strong>Malicious ${threat.type} detected:</strong> ${threat.package}</p>
      <p><strong>Severity:</strong> ${threat.severity.toUpperCase()}</p>
      <p><strong>Description:</strong> ${threat.description}</p>
      ${threat.remediation ? `<p><strong>Action Required:</strong> ${threat.remediation}</p>` : ''}
      <button onclick="this.parentNode.remove()" 
              style="background:white;color:#ff4444;border:none;padding:8px 16px;border-radius:4px;cursor:pointer">
        Acknowledge
      </button>
    </div>
    `
    document.body.insertAdjacentHTML('beforeend', alertHTML)
  }

  // Threat logging function
  function logThreatDetection(threat) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      threat: threat.package,
      type: threat.type,
      severity: threat.severity,
      url: window.location.href,
      userAgent: navigator.userAgent,
    }
    console.warn('Threat detected:', logEntry)

    // Optional: Send to analytics endpoint
    // fetch('/api/threat-log', { method: 'POST', body: JSON.stringify(logEntry) });
  }

  // Domain-specific handlers
  function checkCurrentDomain() {
    const {hostname, href} = window.location

    const domainHandlers = {
      'addons.mozilla.org': () => checkURLAgainstBlacklist(hostname),
      'apps.apple.com': () => checkURLAgainstBlacklist(hostname),
      'chrome.google.com': () =>
        href.includes('/webstore')
          ? checkURLAgainstBlacklist('chrome.google.com/webstore')
          : checkURLAgainstBlacklist('chrome.extension'),
      'facebook.com': () => checkURLAgainstBlacklist(hostname),
      'firebaseio.com': () => checkURLAgainstBlacklist(hostname),
      'marketplace.visualstudio.com': () => checkURLAgainstBlacklist(hostname),
      'npmjs.com': () => checkURLAgainstBlacklist(hostname),
      'open-vsx.org': () => checkURLAgainstBlacklist(hostname),
      'pypi.org': () => checkURLAgainstBlacklist(hostname),
      'play.google.com': () => checkURLAgainstBlacklist(hostname),
      default: () => {
        if (hostname.endsWith('.firebaseio.com')) {
          checkURLAgainstBlacklist('firebaseio.com')
        }
      },
    }

    ;(domainHandlers[hostname] || domainHandlers.default)()
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', checkCurrentDomain)
  window.addEventListener('load', checkCurrentDomain)
  if (document.readyState === 'complete') checkCurrentDomain()
})()
