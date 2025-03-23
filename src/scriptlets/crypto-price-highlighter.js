/**
 * @file crypto-price-highlighter.js
 * @title Enhanced Cryptocurrency Price Highlighter Scriptlet
 * @description  An advanced scriptlet designed to highlight cryptocurrency prices on web pages,
 *               fetch the top 100 cryptocurrencies from CoinGecko, and provide a summary of
 *               detected prices. This scriptlet enhances the visibility of cryptocurrency
 *               prices mentioned in web content and offers quick insights through color-coding
 *               and tooltips.
 * @version 1.0.0
 * @copyright (c) The Charting Show (https://github.com/chartingshow/crypto-firewall)
 * @license GPL-3.0 license - (View LICENSE file for details)
 *
 * This Scriptlet is intended to be used with Brave Browser's custom scriptlets feature
 * to enhance cryptocurrency price visibility and information.
 *
 * Original Authors: Charting Show Team
 *
 * Contributions and feedback are welcome!
 */
;(async function () {
  async function fetchTop100Cryptos() {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1',
    )
    const data = await response.json()
    return data.map((coin) => coin.symbol.toUpperCase())
  }

  const top100Cryptos = await fetchTop100Cryptos()
  const cryptos = [
    ...new Set([
      ...top100Cryptos,
      'BTC',
      'ETH',
      'XRP',
      'LTC',
      'ADA',
      'DOGE',
      'DOT',
      'LINK',
      'BNB',
      'SOL',
      'SUI',
      'APT',
      'SEI',
      'ARB',
      'OP',
      'S',
      'NEAR',
      'TON',
    ]),
  ]

  const priceRegex = new RegExp(
    `(\\$[\\d,]+(\\.\\d{2})?)\\s*(${cryptos.join('|')})`,
    'gi',
  )

  function highlightPrices() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
    )
    let node
    while ((node = walker.nextNode())) {
      const matches = node.nodeValue.match(priceRegex)
      if (matches) {
        const span = document.createElement('span')
        span.innerHTML = node.nodeValue.replace(
          priceRegex,
          (match, price, cents, symbol) => {
            const color = getColorForPrice(
              parseFloat(price.replace('$', '').replace(',', '')),
            )
            return `<mark style="background-color: ${color}; color: white; padding: 2px 4px; border-radius: 3px;">${match}</mark>`
          },
        )
        node.parentNode.replaceChild(span, node)
      }
    }
  }

  function getColorForPrice(price) {
    if (price < 1) return '#FF4136' // Red for low prices
    if (price < 10) return '#FF851B' // Orange for medium-low prices
    if (price < 100) return '#FFDC00' // Yellow for medium prices
    if (price < 1000) return '#2ECC40' // Green for medium-high prices
    return '#0074D9' // Blue for high prices
  }

  function addPriceTooltip() {
    document.body.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'MARK') {
        const [price, symbol] = e.target.textContent.split(' ')
        e.target.title = `Current price of ${symbol}: ${price}`
      }
    })
  }

  function createPriceSummary() {
    const summary = document.createElement('div')
    summary.id = 'crypto-price-summary'
    summary.style.cssText =
      'position: fixed; top: 10px; right: 10px; background-color: rgba(255,255,255,0.9); padding: 10px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1); z-index: 9999; max-height: 80vh; overflow-y: auto;'
    summary.innerHTML =
      '<h3>Cryptocurrency Prices</h3><ul id="crypto-price-list"></ul>'
    document.body.appendChild(summary)
  }

  function updatePriceSummary() {
    const priceList = document.getElementById('crypto-price-list')
    priceList.innerHTML = ''
    const prices = {}
    document.querySelectorAll('mark').forEach((mark) => {
      const [price, symbol] = mark.textContent.split(' ')
      prices[symbol] = price
    })
    Object.entries(prices).forEach(([symbol, price]) => {
      const li = document.createElement('li')
      li.textContent = `${symbol}: ${price}`
      priceList.appendChild(li)
    })
  }

  highlightPrices()
  addPriceTooltip()
  createPriceSummary()
  updatePriceSummary()

  // Re-run on dynamic content changes
  const observer = new MutationObserver(() => {
    highlightPrices()
    updatePriceSummary()
  })
  observer.observe(document.body, {childList: true, subtree: true})
})()
