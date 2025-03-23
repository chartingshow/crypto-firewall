/**
 * @file crypto-conversion-calculator.js
 * @title Advanced Cryptocurrency Conversion Calculator Scriptlet
 * @description A comprehensive scriptlet that adds a dynamic cryptocurrency conversion
 *              calculator to web pages. It utilizes the CoinGecko API to fetch real-time
 *              price data for a wide range of cryptocurrencies and fiat currencies.
 *              Features include live conversion, currency swapping, and support for
 *              multiple coins and fiat currencies.
 * @version 1.0.0
 * @copyright (c) The Charting Show (https://github.com/chartingshow/crypto-firewall)
 * @license GPL-3.0 license - (View LICENSE file for details)
 *
 * This Scriptlet is intended to be used with Brave Browser's custom scriptlets feature
 * to add a powerful cryptocurrency conversion tool to web pages.
 *
 * Original Authors: Charting Show Team
 *
 * Contributions and feedback are welcome!
 */
(async function() {
    const apiBaseUrl = 'https://api.coingecko.com/api/v3';
    const supportedCurrencies = [
      'USD',
      'EUR',
      'GBP',
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
      'TON'
    ]; // Add more fiat or crypto currencies as needed
        
    // Create the calculator UI
    const calculator = document.createElement('div');
    calculator.style.cssText = 'position: fixed; bottom: 20px; right: 20px; background: #f9f9f9; border: 1px solid #ccc; padding: 20px; border-radius: 10px; z-index: 10000;';
    calculator.innerHTML = `
        <h3>Crypto Conversion Calculator</h3>
        <input type="number" id="cryptoAmount" placeholder="Amount" style="width: 100%; margin-bottom: 10px;">
        <select id="cryptoFrom" style="width: 100%; margin-bottom: 10px;"></select>
        <select id="cryptoTo" style="width: 100%; margin-bottom: 10px;"></select>
        <button id="convertCrypto" style="width: 100%; margin-bottom: 10px;">Convert</button>
        <button id="swapCrypto" style="width: 100%; margin-bottom: 10px;">Swap</button>
        <div id="cryptoResult"></div>
    `;
    document.body.appendChild(calculator);

    const cryptoFromSelect = document.getElementById('cryptoFrom');
    const cryptoToSelect = document.getElementById('cryptoTo');
    const convertButton = document.getElementById('convertCrypto');
    const swapButton = document.getElementById('swapCrypto');
    const resultDiv = document.getElementById('cryptoResult');

    // Fetch supported coins from CoinGecko
    async function fetchSupportedCoins() {
        try {
            const response = await fetch(`${apiBaseUrl}/coins/list`);
            const coins = await response.json();
            return coins.map(coin => coin.id);
        } catch (error) {
            console.error('Error fetching supported coins:', error);
            return [];
        }
    }

    // Populate dropdowns with supported coins
    async function populateDropdowns() {
        const coins = await fetchSupportedCoins();
        if (coins.length === 0) {
            resultDiv.textContent = 'Failed to load supported coins.';
            return;
        }
        
        coins.forEach(coin => {
            const optionFrom = document.createElement('option');
            optionFrom.value = coin;
            optionFrom.textContent = coin;
            cryptoFromSelect.appendChild(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = coin;
            optionTo.textContent = coin;
            cryptoToSelect.appendChild(optionTo);
        });

        // Add fiat currencies
        supportedCurrencies.forEach(currency => {
            const fiatOptionFrom = document.createElement('option');
            fiatOptionFrom.value = currency;
            fiatOptionFrom.textContent = currency.toUpperCase();
            cryptoFromSelect.appendChild(fiatOptionFrom);

            const fiatOptionTo = document.createElement('option');
            fiatOptionTo.value = currency;
            fiatOptionTo.textContent = currency.toUpperCase();
            cryptoToSelect.appendChild(fiatOptionTo);
        });
    }

    // Fetch conversion rates from CoinGecko API
    async function fetchConversionRate(from, to) {
        try {
            const response = await fetch(`${apiBaseUrl}/simple/price?ids=${from}&vs_currencies=${to}`);
            const data = await response.json();
            return data[from]?.[to] || null;
        } catch (error) {
            console.error('Error fetching conversion rate:', error);
            return null;
        }
    }

    // Handle conversion
    async function handleConversion() {
        const amount = parseFloat(document.getElementById('cryptoAmount').value);
        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Please enter a valid amount.';
            return;
        }

        const fromCurrency = cryptoFromSelect.value;
        const toCurrency = cryptoToSelect.value;

        if (!fromCurrency || !toCurrency) {
            resultDiv.textContent = 'Please select both currencies.';
            return;
        }

        const rate = await fetchConversionRate(fromCurrency, toCurrency);
        if (rate === null) {
            resultDiv.textContent = `Failed to fetch conversion rate for ${fromCurrency} to ${toCurrency}.`;
            return;
        }

        const convertedAmount = amount * rate;
        resultDiv.textContent = `${amount} ${fromCurrency} ≈ ${convertedAmount.toFixed(6)} ${toCurrency}`;
    }

    // Handle swapping currencies
    function handleSwap() {
        const tempValue = cryptoFromSelect.value;
        cryptoFromSelect.value = cryptoToSelect.value;
        cryptoToSelect.value = tempValue;
    }

    // Event listeners
    convertButton.addEventListener('click', handleConversion);
    swapButton.addEventListener('click', handleSwap);

    // Initialize dropdowns
    populateDropdowns();
})();
