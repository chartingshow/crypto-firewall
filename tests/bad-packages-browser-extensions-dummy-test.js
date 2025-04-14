/**
 * @file bad-packages-browser-extensions-dummy-test.js
 * @title Block Malicious Packages and Extensions
 * @description Enhanced protection against malicious packages/extensions with JSON-based threat intelligence
 * @version 2.0.0
 * @copyright (c) The Charting Show (https://github.com/chartingshow/crypto-firewall)
 * @license GPL-3.0 license
 */

/**
 * TEST INSTRUCTIONS
 * =================
 *
 * There are two ways to test this script:
 *
 * 1. AUTOMATIC TEST (recommended for quick verification):
 *    - Uncomment the `testMalwareDetection()` call at the bottom of this file
 *    - Load the script in any webpage
 *    - You should immediately see a test security alert
 *
 * 2. REAL-WORLD TEST (for full integration testing):
 *    - Keep `testMalwareDetection()` commented
 *    - Visit: https://example.com/example-phishing-kit
 *    - The script should detect the test threat from example.json
 *    - You should see a security alert matching the test data
 *
 * Note: For testing in production environment, remember to:
 * - Comment out `testMalwareDetection()` after testing
 * - Remove `testMalwareDetection()` function before final deployment
 */

;(async function () {
  // Configuration - JSON blacklist endpoints
  const blacklistURLs = {
    'npmjs.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/npm-packages.json',
    'chrome.google.com/webstore':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/chrome-extensions.json',
    'pypi.org':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/pypi-packages.json',
    'firebaseio.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/firebase-projects.json',
    'marketplace.visualstudio.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/vscode-extensions.json',
    'chrome.extension':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/blacklists/json/chrome-extension-ids.json',
    'example.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/tests/package-tests/example.json',
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
      'example.com': () => checkURLAgainstBlacklist(hostname),
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

  /**
   * TEST FUNCTION - Simulates malware detection
   *
   * Usage:
   * 1. Call this function manually from console, OR
   * 2. Uncomment the call below to run automatically on load
   *
   * Expected result:
   * - Displays a red security alert box in top-right corner
   * - Logs detection event to console
   * - Does not affect actual browsing security
   */
  function testMalwareDetection() {
    const testThreat = {
      package: 'example-phishing-kit',
      versions: '*',
      type: 'phishing',
      severity: 'critical',
      description:
        'Fake cryptocurrency wallet interface that steals credentials',
      discovered: '2025-04-15',
      remediation: 'Do not enter any credentials. Close this page immediately.',
    }

    // Override hostname and href for testing
    const originalHostname = window.location.hostname
    const originalHref = window.location.href

    Object.defineProperty(window.location, 'hostname', {
      value: 'example.com',
      configurable: true,
    })
    Object.defineProperty(window.location, 'href', {
      value: 'https://example.com/example-phishing-kit',
      configurable: true,
    })

    // Trigger alert
    showEnhancedAlert(testThreat, 'example.com')
    logThreatDetection(testThreat)

    // Restore original values
    setTimeout(() => {
      Object.defineProperty(window.location, 'hostname', {
        value: originalHostname,
      })
      Object.defineProperty(window.location, 'href', {
        value: originalHref,
      })
    }, 100)
  }

  // Uncomment the following line to enable automatic testing
  // testMalwareDetection();
})()
