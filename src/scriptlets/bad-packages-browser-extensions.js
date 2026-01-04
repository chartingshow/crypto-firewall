/**
 * @file bad-packages-browser-extensions.js
 * @title Block Bad Packages and Browser Extensions
 * @description Comprehensive scriptlet to protect users from potentially
 *              malicious cryptocurrency-related packages, extensions, and projects.
 *              Checks URLs against curated blacklists (npm, PyPI, Chrome Store, etc.)
 *              and alerts users on detection.
 * @version 2.1.0
 * @copyright (c) The Charting Show
 * @license GPL-3.0 license - (View LICENSE file for details)
 *
 * Intended for Brave Browser's custom scriptlets feature.
 * Original Authors: Charting Show Team
 */

;(async function () {
  // JSON/TXT blacklist endpoints
  const blacklistURLs = {
    'addons.mozilla.org':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/firefox-extensions.txt',
  
    'addons.mozilla.org:ids':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/firefox-extensions-ids.txt',
  
    'addons.opera.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/opera-extensions.txt',
  
    'apps.apple.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/apple-app-store.txt',
  
    'chrome.extension':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/chrome-extension-ids.txt',
  
    'chrome.google.com/webstore':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/chrome-extensions.txt',
  
    'edge.extension':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/packages-and-extensions/edge-extension-ids.txt',
  
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

  // Cache for fetched blacklists
  const blacklistCache = new Map()

  // Enhanced fetch function with caching and sanitization
  async function fetchBlacklist(url) {
    const normalized = url.toLowerCase()
    if (blacklistCache.has(normalized)) return blacklistCache.get(normalized)

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
          .filter(
            (line) =>
              line &&
              !line.startsWith('#') &&
              !/<[a-z][\s\S]*>/i.test(line) // strip HTML
          )
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

      // limit cache to 10 entries
      if (blacklistCache.size > 10) blacklistCache.clear()
      blacklistCache.set(normalized, data)
      return data
    } catch (error) {
      console.error(`Failed to load blacklist from ${url}:`, error)
      return []
    }
  }

  // Check current URL against a blacklist (strict ID + optimised)
  async function checkURLAgainstBlacklist(hostname) {
    const blacklistUrl = blacklistURLs[hostname]
    if (!blacklistUrl) return
  
    const blacklist = await fetchBlacklist(blacklistUrl)
    if (!blacklist || blacklist.length === 0) return
  
    const currentURL = window.location.href.toLowerCase()
  
    // Fast exit for very short URLs
    if (currentURL.length < 10) return
  
    for (let i = 0; i < blacklist.length; i++) {
      const threat = blacklist[i]
      if (!threat || !threat.package) continue
  
      const pkg = threat.package.toLowerCase()
  
      // Chrome / Edge / Opera extension ID (32 chars)
      const isChromeStyleID = /^[a-z0-9]{32}$/.test(pkg)
  
      // Firefox UUID extension ID
      const isFirefoxUUID =
        pkg.startsWith('{') && pkg.endsWith('}')
  
      let matched = false
  
      if (isChromeStyleID) {
        // Strict Chrome-style ID matching
        matched =
          currentURL.includes(`/detail/`) &&
          currentURL.includes(pkg)
      } else if (isFirefoxUUID) {
        // Strict Firefox UUID matching
        matched =
          currentURL.includes(pkg) &&
          hostname === 'addons.mozilla.org'
      } else {
        // Slug / package / project name
        matched = currentURL.includes(pkg)
      }
  
      if (matched) {
        showEnhancedAlert(threat, hostname)
        logThreatDetection(threat)
        break
      }
    }
  }

  // Show an inline security alert (deduplicated)
  function showEnhancedAlert(threat, hostname) {
    const existing = document.querySelector('#crypto-firewall-alert')
    if (existing) existing.remove()

    const alertHTML = `
    <div id="crypto-firewall-alert"
         style="position:fixed;top:20px;right:20px;z-index:9999;
                background:#ff4444;color:white;padding:20px;
                border-radius:8px;max-width:400px;
                box-shadow:0 4px 8px rgba(0,0,0,0.3)">
      <h3 style="margin-top:0">SECURITY ALERT</h3>
      <p><strong>Malicious ${threat.type} detected:</strong> ${threat.package}</p>
      <p><strong>Severity:</strong> ${threat.severity.toUpperCase()}</p>
      <p><strong>Description:</strong> ${threat.description}</p>
      ${
        threat.remediation
          ? `<p><strong>Action Required:</strong> ${threat.remediation}</p>`
          : ''
      }
      <button onclick="this.parentNode.remove()"
              style="background:white;color:#ff4444;border:none;
                     padding:8px 16px;border-radius:4px;cursor:pointer">
        Acknowledge
      </button>
    </div>`
    document.body.insertAdjacentHTML('beforeend', alertHTML)
  }

  // Log threat detection to console or API endpoint
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
    // Optional: send log to remote endpoint
    // fetch('/api/threat-log', { method: 'POST', body: JSON.stringify(logEntry) })
  }

  // Domain-specific handlers (with subdomain support)
  function checkCurrentDomain() {
    const hostname = window.location.hostname
    const href = window.location.href

    const findDomainKey = (host) =>
      Object.keys(blacklistURLs).find(
        (key) =>
          !key.includes(':') &&
          (host === key || host.endsWith(`.${key}`))
      )

    const domainKey = findDomainKey(hostname)

    const domainHandlers = {
      'addons.mozilla.org': () => {
        checkURLAgainstBlacklist('addons.mozilla.org')
        checkURLAgainstBlacklist('addons.mozilla.org:ids')
      },
      'addons.opera.com': () => checkURLAgainstBlacklist('addons.opera.com'),
      'apps.apple.com': () => checkURLAgainstBlacklist('apps.apple.com'),
      'chrome.google.com': () => {
        if (href.includes('/webstore')) {
          checkURLAgainstBlacklist('chrome.google.com/webstore')
      
          // Opera extensions are frequently distributed via Chrome Web Store
          checkURLAgainstBlacklist('addons.opera.com')
        } else {
          checkURLAgainstBlacklist('chrome.extension')
        }
      },
      'microsoftedge.microsoft.com': () => {
        if (href.includes('/addons')) {
          checkURLAgainstBlacklist('edge.extension')
        }
      },
      'facebook.com': () => checkURLAgainstBlacklist('facebook.com'),
      'firebaseio.com': () => checkURLAgainstBlacklist('firebaseio.com'),
      'marketplace.visualstudio.com': () =>
        checkURLAgainstBlacklist('marketplace.visualstudio.com'),
      'npmjs.com': () => checkURLAgainstBlacklist('npmjs.com'),
      'open-vsx.org': () => checkURLAgainstBlacklist('open-vsx.org'),
      'pypi.org': () => checkURLAgainstBlacklist('pypi.org'),
      'play.google.com': () => checkURLAgainstBlacklist('play.google.com'),
      default: () => {
        if (hostname.endsWith('.firebaseio.com')) {
          checkURLAgainstBlacklist('firebaseio.com')
        } else if (domainKey) {
          checkURLAgainstBlacklist(domainKey)
        }
      },
    }

    ;(domainHandlers[domainKey] || domainHandlers.default)()
  }

  // Debounced initialization (prevents duplicate runs)
  let checked = false
  function safeCheck() {
    if (!checked) {
      checked = true
      checkCurrentDomain()
    }
  }

  document.addEventListener('DOMContentLoaded', safeCheck)
  window.addEventListener('load', safeCheck)
  if (document.readyState === 'complete') safeCheck()
})()
