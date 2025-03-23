/**
 * @file crypto-price-display.js
 * @title Real-time Cryptocurrency Price Display Scriptlet
 * @description  A dynamic scriptlet that fetches and displays real-time cryptocurrency
 *               prices using the CoinGecko API. It creates a floating display on web pages,
 *               showing current prices and 24-hour changes for multiple cryptocurrencies.
 *               The display updates automatically at regular intervals.
 * @version 1.0.0
 * @copyright (c) The Charting Show (https://github.com/chartingshow/crypto-firewall)
 * @license GPL-3.0 license - (View LICENSE file for details)
 *
 * This Scriptlet is intended to be used with Brave Browser's custom scriptlets feature
 * to display real-time cryptocurrency prices on web pages.
 *
 * Original Authors: Charting Show Team
 *
 * Contributions and feedback are welcome!
 */

(function() {
    const API_BASE_URL = 'https://api.coingecko.com/api/v3';
    const REFRESH_INTERVAL = 60000; // 60 seconds
    const COINS = ['bitcoin', 'ethereum', 'ripple']; // Add more coins as needed

    function createPriceDisplay() {
        const container = document.createElement('div');
        container.id = 'crypto-price-container';
        container.style.cssText = 'position: fixed; top: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 10px; border-radius: 5px; font-family: Arial, sans-serif;';
        document.body.appendChild(container);
    }

    async function fetchPrices() {
        try {
            const response = await fetch(`${API_BASE_URL}/simple/price?ids=${COINS.join(',')}&vs_currencies=usd&include_24hr_change=true`);
            if (!response.ok) throw new Error('API request failed');
            return await response.json();
        } catch (error) {
            console.error('Error fetching prices:', error);
            return null;
        }
    }

    function updatePriceDisplay(data) {
        const container = document.getElementById('crypto-price-container');
        if (!container || !data) return;

        container.innerHTML = COINS.map(coin => {
            const price = data[coin]?.usd;
            const change24h = data[coin]?.usd_24h_change;
            const changeColor = change24h >= 0 ? 'green' : 'red';
            return `
                <div style="margin-bottom: 5px;">
                    <strong>${coin.toUpperCase()}:</strong> $${price?.toFixed(2) || 'N/A'}
                    <span style="color: ${changeColor};">(${change24h?.toFixed(2) || 'N/A'}%)</span>
                </div>
            `;
        }).join('');
    }

    function refreshPrices() {
        fetchPrices().then(updatePriceDisplay);
    }

    createPriceDisplay();
    refreshPrices();
    setInterval(refreshPrices, REFRESH_INTERVAL);
})();
