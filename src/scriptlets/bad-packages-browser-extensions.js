/**
 * @file bad-packages-browser-extensions.js
 * @title Block Malicious Packages and Extensions
 * @description Enhanced protection against malicious packages/extensions with JSON-based threat intelligence
 * @version 2.0.0
 * @copyright (c) The Charting Show (https://github.com/chartingshow/crypto-firewall)
 * @license GPL-3.0 license
 */
;(async function () {
  // Updated JSON blacklist endpoints
  const blacklistURLs = {
    'chrome.extension':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/chrome-extension-ids.json',
    'chrome.google.com/webstore':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/chrome-extensions.json',
    'firebaseio.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/firebase-projects.json',
    'marketplace.visualstudio.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/vscode-extensions.json',
    'npmjs.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/npm-packages.json',
    'pypi.org':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/pypi-packages.json',
  }

  // Cache for storing fetched blacklists
  const blacklistCache = new Map()

  // Enhanced fetch function with caching
  async function fetchJSONBlacklist(url) {
    if (blacklistCache.has(url)) {
      return blacklistCache.get(url)
    }

    try {
      const response = await fetch(url, {
        cache: 'no-cache',
        headers: {'Content-Type': 'application/json'},
      })

      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      const data = await response.json()
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

    const blacklist = await fetchJSONBlacklist(blacklistUrl)
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
      'chrome.google.com': () =>
        href.includes('/webstore')
          ? checkURLAgainstBlacklist('chrome.google.com/webstore')
          : checkURLAgainstBlacklist('chrome.extension'),
      'marketplace.visualstudio.com': () => checkURLAgainstBlacklist(hostname),
      'pypi.org': () => checkURLAgainstBlacklist(hostname),
      'npmjs.com': () => checkURLAgainstBlacklist(hostname),
      'firebaseio.com': () => checkURLAgainstBlacklist(hostname),
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
