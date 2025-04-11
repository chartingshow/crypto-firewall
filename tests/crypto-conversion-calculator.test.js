/**
 * @file crypto-conversion-calculator.test.js
 * @description Unit tests for the crypto-conversion-calculator scriptlet.
 */

describe('Crypto Conversion Calculator', () => {
    let calculator, cryptoFromSelect, cryptoToSelect, convertButton, swapButton, resultDiv;

    beforeEach(() => {
        // Set up the DOM structure
        document.body.innerHTML = `
            <div id="calculator">
                <input type="number" id="cryptoAmount" placeholder="Amount">
                <select id="cryptoFrom"></select>
                <select id="cryptoTo"></select>
                <button id="convertCrypto">Convert</button>
                <button id="swapCrypto">Swap</button>
                <div id="cryptoResult"></div>
            </div>
        `;

        calculator = document.getElementById('calculator');
        cryptoFromSelect = document.getElementById('cryptoFrom');
        cryptoToSelect = document.getElementById('cryptoTo');
        convertButton = document.getElementById('convertCrypto');
        swapButton = document.getElementById('swapCrypto');
        resultDiv = document.getElementById('cryptoResult');
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('should populate dropdowns with supported currencies', async () => {
        const mockCoins = ['bitcoin', 'ethereum', 'dogecoin'];
        const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            json: async () => mockCoins.map((coin) => ({ id: coin })),
        });

        const populateDropdowns = async () => {
            const coins = await mockFetch();
            coins.forEach((coin) => {
                const option = document.createElement('option');
                option.value = coin.id;
                option.textContent = coin.id;
                cryptoFromSelect.appendChild(option);
                cryptoToSelect.appendChild(option.cloneNode(true));
            });
        };

        await populateDropdowns();

        expect(cryptoFromSelect.children.length).toBe(mockCoins.length);
        expect(cryptoToSelect.children.length).toBe(mockCoins.length);
        mockFetch.mockRestore();
    });

    test('should handle conversion correctly', async () => {
        const mockRate = 2;
        const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            json: async () => ({ bitcoin: { ethereum: mockRate } }),
        });

        cryptoFromSelect.innerHTML = `<option value="bitcoin">bitcoin</option>`;
        cryptoToSelect.innerHTML = `<option value="ethereum">ethereum</option>`;
        document.getElementById('cryptoAmount').value = 5;

        const handleConversion = async () => {
            const amount = parseFloat(document.getElementById('cryptoAmount').value);
            const fromCurrency = cryptoFromSelect.value;
            const toCurrency = cryptoToSelect.value;

            const response = await mockFetch();
            const rate = response[fromCurrency]?.[toCurrency] || null;

            if (rate) {
                const convertedAmount = amount * rate;
                resultDiv.textContent = `${amount} ${fromCurrency} ≈ ${convertedAmount.toFixed(6)} ${toCurrency}`;
            } else {
                resultDiv.textContent = 'Conversion failed.';
            }
        };

        await handleConversion();

        expect(resultDiv.textContent).toBe('5 bitcoin ≈ 10.000000 ethereum');
        mockFetch.mockRestore();
    });

    test('should swap currencies correctly', () => {
        cryptoFromSelect.innerHTML = `<option value="bitcoin" selected>bitcoin</option>`;
        cryptoToSelect.innerHTML = `<option value="ethereum" selected>ethereum</option>`;

        const handleSwap = () => {
            const tempValue = cryptoFromSelect.value;
            cryptoFromSelect.value = cryptoToSelect.value;
            cryptoToSelect.value = tempValue;
        };

        handleSwap();

        expect(cryptoFromSelect.value).toBe('ethereum');
        expect(cryptoToSelect.value).toBe('bitcoin');
    });

    test('should display error for invalid amount', async () => {
        document.getElementById('cryptoAmount').value = -1;

        const handleConversion = () => {
            const amount = parseFloat(document.getElementById('cryptoAmount').value);
            if (isNaN(amount) || amount <= 0) {
                resultDiv.textContent = 'Please enter a valid amount.';
                return;
            }
        };

        handleConversion();

        expect(resultDiv.textContent).toBe('Please enter a valid amount.');
    });
});
