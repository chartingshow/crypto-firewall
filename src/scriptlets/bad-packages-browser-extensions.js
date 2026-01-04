/**
 * @file bad-packages-browser-extensions.js
 * @title Block Bad Packages and Browser Extensions
 * @description Comprehensive scriptlet to protect users from potentially
 *              malicious cryptocurrency-related packages, extensions, and projects.
 *              Checks URLs against curated blacklists (npm, PyPI, Chrome Store, etc.)
 *              and alerts users on detection.
 * @version 2.1.1
 * @copyright (c) The Charting Show
 * @license GPL-3.0 license
 *
 * Intended for Brave Browser's custom scriptlets feature.
 */

;(async function () {
  /* ------------------------------------------------------------------
   * Blacklist sources
   * ------------------------------------------------------------------ */
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

  /* ------------------------------------------------------------------
   * URL parsing (ONCE – performance optimised)
   * ------------------------------------------------------------------ */
  let parsedURL
  try {
    parsedURL = new URL(window.location.href)
  } catch {
    return
  }

  const CURRENT = {
    href: parsedURL.href.toLowerCase(),
    host: parsedURL.hostname.toLowerCase(),
    path: parsedURL.pathname.toLowerCase(),
  }

  /* ------------------------------------------------------------------
   * Blacklist cache
   * ------------------------------------------------------------------ */
  const blacklistCache = new Map()

  async function fetchBlacklist(url) {
    const key = url.toLowerCase()
    if (blacklistCache.has(key)) return blacklistCache.get(key)

    try {
      const response = await fetch(url, { cache: 'no-cache' })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      let data
      if (url.endsWith('.txt')) {
        const text = await response.text()
        data = text
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter(
            (l) =>
              l &&
              !l.startsWith('#') &&
              !/<[a-z][\s\S]*>/i.test(l)
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

      if (blacklistCache.size > 10) blacklistCache.clear()
      blacklistCache.set(key, data)
      return data
    } catch (err) {
      console.error(`Failed to load blacklist from ${url}`, err)
      return []
    }
  }

  /* ------------------------------------------------------------------
   * URL blacklist matching (CodeQL-safe)
   * ------------------------------------------------------------------ */
  async function checkURLAgainstBlacklist(domainKey) {
    const listURL = blacklistURLs[domainKey]
    if (!listURL) return

    const blacklist = await fetchBlacklist(listURL)
    if (!blacklist.length) return

    for (const threat of blacklist) {
      if (!threat?.package) continue

      const pkg = threat.package.toLowerCase()

      const isChromeID = /^[a-z0-9]{32}$/.test(pkg)
      const isFirefoxUUID = pkg.startsWith('{') && pkg.endsWith('}')

      let matched = false

      if (isChromeID) {
        matched =
          (
            CURRENT.host === 'chrome.google.com' ||
            CURRENT.host === 'microsoftedge.microsoft.com' ||
            CURRENT.host === 'addons.opera.com'
          ) &&
          CURRENT.path.includes('/detail/') &&
          CURRENT.path.includes(pkg)

      } else if (isFirefoxUUID) {
        matched =
          CURRENT.host === 'addons.mozilla.org' &&
          CURRENT.path.includes(pkg)

      } else {
        matched =
          CURRENT.host === domainKey &&
          CURRENT.path.includes(pkg)
      }

      if (matched) {
        showEnhancedAlert(threat)
        logThreatDetection(threat)
        break
      }
    }
  }

  /* ------------------------------------------------------------------
   * Alert UI
   * ------------------------------------------------------------------ */
  function showEnhancedAlert(threat) {
    document
      .querySelector('#crypto-firewall-alert')
      ?.remove()

    const html = `
      <div id="crypto-firewall-alert"
           style="position:fixed;top:20px;right:20px;z-index:9999;
                  background:#ff4444;color:#fff;padding:20px;
                  border-radius:8px;max-width:400px;
                  box-shadow:0 4px 8px rgba(0,0,0,.3)">
        <h3 style="margin-top:0">SECURITY ALERT</h3>
        <p><strong>Detected:</strong> ${threat.package}</p>
        <p><strong>Severity:</strong> ${String(threat.severity).toUpperCase()}</p>
        ${threat.description ? `<p>${threat.description}</p>` : ''}
        ${threat.remediation ? `<p><strong>Action:</strong> ${threat.remediation}</p>` : ''}
        <button onclick="this.parentNode.remove()"
                style="margin-top:10px;background:#fff;color:#ff4444;
                       border:none;padding:8px 16px;border-radius:4px;
                       cursor:pointer">
          Acknowledge
        </button>
      </div>
    `
    document.body.insertAdjacentHTML('beforeend', html)
  }

  function logThreatDetection(threat) {
    console.warn('Threat detected', {
      timestamp: new Date().toISOString(),
      threat: threat.package,
      type: threat.type,
      severity: threat.severity,
      url: CURRENT.href,
      userAgent: navigator.userAgent,
    })
  }

  /* ------------------------------------------------------------------
   * Domain routing
   * ------------------------------------------------------------------ */
  function checkCurrentDomain() {
    const host = CURRENT.host

    const domainHandlers = {
      'addons.mozilla.org': () => {
        checkURLAgainstBlacklist('addons.mozilla.org')
        checkURLAgainstBlacklist('addons.mozilla.org:ids')
      },
      'addons.opera.com': () => checkURLAgainstBlacklist('addons.opera.com'),
      'apps.apple.com': () => checkURLAgainstBlacklist('apps.apple.com'),
      'marketplace.visualstudio.com': () =>
        checkURLAgainstBlacklist('marketplace.visualstudio.com'),
      'npmjs.com': () => checkURLAgainstBlacklist('npmjs.com'),
      'open-vsx.org': () => checkURLAgainstBlacklist('open-vsx.org'),
      'pypi.org': () => checkURLAgainstBlacklist('pypi.org'),
      'play.google.com': () => checkURLAgainstBlacklist('play.google.com'),
      'facebook.com': () => checkURLAgainstBlacklist('facebook.com'),
    }

    if (host.endsWith('.firebaseio.com')) {
      checkURLAgainstBlacklist('firebaseio.com')
      return
    }

    domainHandlers[host]?.()
  }

  /* ------------------------------------------------------------------
   * Init (deduplicated)
   * ------------------------------------------------------------------ */
  let ran = false
  const runOnce = () => {
    if (!ran) {
      ran = true
      checkCurrentDomain()
    }
  }

  document.addEventListener('DOMContentLoaded', runOnce)
  window.addEventListener('load', runOnce)
  if (document.readyState === 'complete') runOnce()
})()
