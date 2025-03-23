/**
 * @file crypto-mining-blocker.js
 * @title Enhanced Cryptocurrency Mining Blocker Scriptlet
 * @description  An advanced scriptlet designed to block cryptocurrency mining scripts,
 *               cryptojacking attempts, and related malicious activities. This scriptlet
 *               integrates multiple detection methods and patterns sourced from
 *               reputable blocklists to provide comprehensive protection against
 *               in-browser mining threats.
 * @version 1.0.0
 * @copyright (c) The Charting Show (https://github.com/chartingshow/crypto-firewall)
 * @license GPL-3.0 license - (View LICENSE file for details)
 *
 * This Scriptlet is intended to be used with Brave Browser's custom scriptlets feature
 * to enhance protection against cryptocurrency mining.
 *
 * Original Authors: Charting Show Team
 *
 * Contributions and feedback are welcome!
 */
;(function () {
  const miningPatterns = {
    scripts: [
      'coin-?hive',
      'cryptonight',
      'miner',
      'xmrig',
      'cryptoloot',
      'coinhive',
      'minero',
      'jsecoin',
      'cryptojack',
      'deepMiner',
      'crypto-notminer',
      'cloudcoin',
      '2giga',
      'cryptobara',
      '/lib/cryptonight\\.',
      'kryptos\\.js',
      'cryptoworker',
    ],
    domains: [
      'coin-hive.com',
      'coinhive.com',
      'cryptoloot.pro',
      'miner.rocks',
      'jsecoin.com',
      '2giga.link',
      'crypto-loot.com',
      'grfstool.com',
      'minemytraffic',
      'ppoi.org',
      'projectpoi.com',
      'authedmine',
    ],
    paths: [
      '/lib/',
      '/miner.js',
      '/cryptonight.',
      '/worker.js',
      '/cn.js',
      '/wasm/',
      '/miner/',
      '/cryptojs/',
    ],
  }

  // Block WebSocket connections to mining pools
  const nativeWebSocket = window.WebSocket
  window.WebSocket = function (url) {
    if (miningPatterns.domains.some((d) => url.includes(d))) {
      console.log('Blocked mining WebSocket:', url)
      return {send: () => {}, close: () => {}}
    }
    return new nativeWebSocket(url)
  }

  // Block script elements and network requests
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === 'SCRIPT') {
          const src = node.src || node.innerText
          if (isMiningScript(src)) {
            node.remove()
            console.log('Blocked mining script:', src)
          }
        }
      })
    })
  })

  function isMiningScript(src) {
    return (
      miningPatterns.scripts.some((p) => src.match(new RegExp(p, 'i'))) ||
      miningPatterns.domains.some((d) => src.includes(d)) ||
      miningPatterns.paths.some((p) => src.includes(p))
    )
  }

  // Start observing
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  })

  // Block inline mining attempts
  Object.defineProperty(window, 'CoinHive', {
    get: () => ({
      ASMJS: false,
      WASM: false,
      autoThreads: false,
      start: () => console.warn('CoinHive blocked'),
      stop: () => {},
    }),
    configurable: false,
    enumerable: true,
  })

  // Block WebAssembly mining modules
  Object.defineProperty(WebAssembly, 'instantiate', {
    value: function () {
      const [bytes] = arguments
      if (
        bytes instanceof ArrayBuffer &&
        new Uint8Array(bytes).some(
          (v, i) => i < 64 && v.toString(16) === '6d696e65',
        )
      ) {
        // 'mine' in hex
        console.log('Blocked WebAssembly miner')
        return Promise.reject(new Error('Mining blocked'))
      }
      return WebAssembly.instantiate.apply(this, arguments)
    },
    configurable: false,
    writable: false,
  })

  // Block iframe-based miners
  document.addEventListener('beforescriptexecute', (e) => {
    if (isMiningScript(e.target.src)) {
      e.preventDefault()
      e.stopPropagation()
    }
  })
})()
