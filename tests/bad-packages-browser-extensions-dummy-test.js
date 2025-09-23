/**
 * @file bad-packages-browser-extensions-test.js
 * @title Test Scriptlet for Bad Packages / Extensions
 * @description Simulates detection of a malicious package/extension using the new blacklist format
 * @version 2.0.7
 * @copyright (c) The Charting Show
 * @license GPL-3.0 license
 */

;(async function () {
  // Updated test URL mapping (uses .txt test list instead of old JSON)
  const blacklistURLs = {
    'example.com':
      'https://raw.githubusercontent.com/chartingshow/crypto-firewall/master/src/tests/package-tests/example.txt'
  }

  const blacklistCache = new Map()

  // Reuse fetch logic from production script (supports .txt and .json)
  async function fetchBlacklist(url) {
    if (blacklistCache.has(url)) {
      return blacklistCache.get(url)
    }
    try {
      const response = await fetch(url, { cache: 'no-cache' })
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
            type: 'test',
            severity: 'critical',
            description: 'Simulated test detection',
            remediation: 'Do not proceed. This is a test alert.'
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

  async function checkURLAgainstBlacklist(hostname) {
    const blacklistUrl = blacklistURLs[hostname]
    if (!blacklistUrl) return

    const blacklist = await fetchBlacklist(blacklistUrl)
    const currentURL = window.location.href.toLowerCase()

    for (const threat of blacklist) {
      if (currentURL.includes(threat.package.toLowerCase())) {
        showEnhancedAlert(threat)
        logThreatDetection(threat)
        break
      }
    }
  }

  function showEnhancedAlert(threat) {
    const alertHTML = `
    <div style="position:fixed;top:20px;right:20px;z-index:9999;
                background:#ff4444;color:white;padding:20px;
                border-radius:8px;max-width:400px;box-shadow:0 4px 8px rgba(0,0,0,0.3)">
      <h3 style="margin-top:0">SECURITY ALERT (TEST)</h3>
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

  function logThreatDetection(threat) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      threat: threat.package,
      type: threat.type,
      severity: threat.severity,
      url: window.location.href,
      userAgent: navigator.userAgent
    }
    console.warn('TEST Threat detected:', logEntry)
  }

  /**
   * TEST FUNCTION - Simulates malware detection on example.com
   */
  function testMalwareDetection() {
    const testThreat = {
      package: 'example-phishing-kit',
      type: 'phishing',
      severity: 'critical',
      description: 'Fake crypto phishing kit (test only)',
      remediation: 'Close this page immediately (test alert).'
    }

    // Override for test
    const originalHostname = window.location.hostname
    const originalHref = window.location.href

    Object.defineProperty(window.location, 'hostname', {
      value: 'example.com',
      configurable: true
    })
    Object.defineProperty(window.location, 'href', {
      value: 'https://example.com/example-phishing-kit',
      configurable: true
    })

    showEnhancedAlert(testThreat)
    logThreatDetection(testThreat)

    // Restore
    setTimeout(() => {
      Object.defineProperty(window.location, 'hostname', { value: originalHostname })
      Object.defineProperty(window.location, 'href', { value: originalHref })
    }, 100)
  }

  // Uncomment to run automatically
  // testMalwareDetection()
})()
