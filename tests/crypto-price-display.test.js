const { JSDOM } = require('jsdom');
const fetchMock = require('jest-fetch-mock');
const { fetchPrices } = require('./crypto-price-display');
const { updatePriceDisplay } = require('./crypto-price-display');
const { fetchPrices } = require('./crypto-price-display');

/**
 * @file crypto-price-display.test.js
 * @description Unit tests for the crypto-price-display.js scriptlet.
 */


fetchMock.enableMocks();

describe('crypto-price-display.js', () => {
    let dom;
    let document;

    beforeEach(() => {
        // Set up a mock DOM environment
        dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
            url: 'http://localhost',
        });
        document = dom.window.document;
        global.document = document;
        global.window = dom.window;
        global.fetch = fetchMock;
    });

    afterEach(() => {
        fetchMock.resetMocks();
    });

    test('should create a price display container', () => {
        require('./crypto-price-display');
        const container = document.getElementById('crypto-price-container');
        expect(container).not.toBeNull();
        expect(container.style.position).toBe('fixed');
        expect(container.style.top).toBe('10px');
        expect(container.style.right).toBe('10px');
    });

    test('should fetch cryptocurrency prices from the API', async () => {
        const mockResponse = {
            bitcoin: { usd: 50000, usd_24h_change: 2.5 },
            ethereum: { usd: 4000, usd_24h_change: -1.2 },
            ripple: { usd: 1, usd_24h_change: 0.5 },
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

        const data = await fetchPrices();

        expect(fetchMock).toHaveBeenCalledWith(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd&include_24hr_change=true'
        );
        expect(data).toEqual(mockResponse);
    });

    test('should update the price display with fetched data', () => {
        const mockData = {
            bitcoin: { usd: 50000, usd_24h_change: 2.5 },
            ethereum: { usd: 4000, usd_24h_change: -1.2 },
            ripple: { usd: 1, usd_24h_change: 0.5 },
        };

        require('./crypto-price-display');

        updatePriceDisplay(mockData);

        const container = document.getElementById('crypto-price-container');
        expect(container.innerHTML).toContain('BITCOIN: $50000.00');
        expect(container.innerHTML).toContain('(2.50%)');
        expect(container.innerHTML).toContain('ETHEREUM: $4000.00');
        expect(container.innerHTML).toContain('(-1.20%)');
        expect(container.innerHTML).toContain('RIPPLE: $1.00');
        expect(container.innerHTML).toContain('(0.50%)');
    });

    test('should handle API fetch errors gracefully', async () => {
        fetchMock.mockRejectOnce(new Error('API request failed'));

        const data = await fetchPrices();

        expect(data).toBeNull();
        expect(console.error).toHaveBeenCalledWith(
            'Error fetching prices:',
            expect.any(Error)
        );
    });
});
