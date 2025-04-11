import {JSDOM} from 'jsdom'

/**
 * @file crypto-price-highlighter.test.js
 * @description Unit tests for the crypto-price-highlighter scriptlet.
 */

describe('crypto-price-highlighter', () => {
  let dom
  let document

  beforeEach(() => {
    dom = new JSDOM(
      '<!DOCTYPE html><html><body><p>$100 BTC</p><p>$0.5 DOGE</p></body></html>',
      {
        runScripts: 'dangerously',
        resources: 'usable',
      },
    )
    document = dom.window.document
    global.document = document
    global.window = dom.window
    global.MutationObserver = dom.window.MutationObserver
  })

  afterEach(() => {
    dom.window.close()
    jest.resetModules()
  })

  test('should highlight cryptocurrency prices in the DOM', async () => {
    // Mock fetch for top 100 cryptocurrencies
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{symbol: 'BTC'}, {symbol: 'DOGE'}]),
      }),
    )

    // Load the script
    await import('./crypto-price-highlighter.js')

    const highlightedElements = document.querySelectorAll('mark')
    expect(highlightedElements.length).toBe(2)

    const btcHighlight = highlightedElements[0]
    expect(btcHighlight.textContent).toBe('$100 BTC')
    expect(btcHighlight.style.backgroundColor).toBe('rgb(0, 116, 217)') // Blue for high prices

    const dogeHighlight = highlightedElements[1]
    expect(dogeHighlight.textContent).toBe('$0.5 DOGE')
    expect(dogeHighlight.style.backgroundColor).toBe('rgb(255, 65, 54)') // Red for low prices
  })

  test('should add tooltips to highlighted prices', async () => {
    // Mock fetch for top 100 cryptocurrencies
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{symbol: 'BTC'}, {symbol: 'DOGE'}]),
      }),
    )

    // Load the script
    await import('./crypto-price-highlighter.js')

    const btcHighlight = document.querySelector('mark')
    expect(btcHighlight.title).toBe('Current price of BTC: $100')
  })

  test('should create a price summary in the DOM', async () => {
    // Mock fetch for top 100 cryptocurrencies
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{symbol: 'BTC'}, {symbol: 'DOGE'}]),
      }),
    )

    // Load the script
    await import('./crypto-price-highlighter.js')

    const summary = document.getElementById('crypto-price-summary')
    expect(summary).not.toBeNull()

    const priceList = summary.querySelectorAll('li')
    expect(priceList.length).toBe(2)
    expect(priceList[0].textContent).toBe('BTC: $100')
    expect(priceList[1].textContent).toBe('DOGE: $0.5')
  })

  test('should update highlights and summary on DOM changes', async () => {
    // Mock fetch for top 100 cryptocurrencies
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{symbol: 'BTC'}, {symbol: 'DOGE'}]),
      }),
    )

    // Load the script
    await import('./crypto-price-highlighter.js')

    // Simulate DOM change
    const newParagraph = document.createElement('p')
    newParagraph.textContent = '$50 ETH'
    document.body.appendChild(newParagraph)

    // Wait for MutationObserver to process changes
    await new Promise((resolve) => setTimeout(resolve, 100))

    const highlightedElements = document.querySelectorAll('mark')
    expect(highlightedElements.length).toBe(3)

    const ethHighlight = highlightedElements[2]
    expect(ethHighlight.textContent).toBe('$50 ETH')
    expect(ethHighlight.style.backgroundColor).toBe('rgb(255, 220, 0)') // Yellow for medium prices

    const priceList = document.querySelectorAll('#crypto-price-summary li')
    expect(priceList.length).toBe(3)
    expect(priceList[2].textContent).toBe('ETH: $50')
  })
})
