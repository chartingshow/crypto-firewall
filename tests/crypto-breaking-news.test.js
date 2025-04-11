const {JSDOM} = require('jsdom')
const fetchMock = require('jest-fetch-mock')

/**
 * @file crypto-breaking-news.test.js
 * @description Unit tests for the crypto-breaking-news.js scriptlet.
 */

fetchMock.enableMocks()

describe('crypto-breaking-news.js', () => {
  let dom
  let document

  beforeEach(() => {
    // Set up a mock DOM environment
    dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
      url: 'http://localhost',
    })
    document = dom.window.document
    global.document = document
    global.window = dom.window
    global.fetch = fetchMock
  })

  afterEach(() => {
    fetchMock.resetMocks()
  })

  test('should create a breaking news box in the DOM', async () => {
    require('./crypto-breaking-news')
    await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for async code to execute

    const newsBox = document.querySelector('div')
    expect(newsBox).not.toBeNull()
    expect(newsBox.style.position).toBe('fixed')
    expect(newsBox.style.bottom).toBe('20px')
    expect(newsBox.style.right).toBe('20px')
  })

  test('should fetch and display news articles', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        items: [
          {
            title: 'Bitcoin Hits New High',
            link: 'https://example.com/bitcoin-high',
            pubDate: '2023-01-01T12:00:00Z',
          },
          {
            title: 'Ethereum Update Released',
            link: 'https://example.com/ethereum-update',
            pubDate: '2023-01-02T12:00:00Z',
          },
        ],
      }),
    )

    require('./crypto-breaking-news')
    await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for async code to execute

    const articles = document.querySelectorAll('div a')
    expect(articles.length).toBe(2)
    expect(articles[0].textContent).toContain('Bitcoin Hits New High')
    expect(articles[1].textContent).toContain('Ethereum Update Released')
  })

  test('should handle fetch errors gracefully', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch'))

    require('./crypto-breaking-news')
    await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for async code to execute

    const articles = document.querySelectorAll('div a')
    expect(articles.length).toBe(0) // No articles should be displayed
  })

  test('should add a close button to the news box', async () => {
    require('./crypto-breaking-news')
    await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for async code to execute

    const closeButton = document.querySelector('button')
    expect(closeButton).not.toBeNull()
    expect(closeButton.textContent).toBe('Close')

    // Simulate clicking the close button
    closeButton.click()
    const newsBox = document.querySelector('div')
    expect(newsBox.style.display).toBe('none')
  })
})
