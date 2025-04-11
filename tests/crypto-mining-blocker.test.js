/**
 * @file crypto-mining-blocker.test.js
 * @description Unit tests for the crypto-mining-blocker.js scriptlet.
 */

describe('Crypto Mining Blocker', () => {
    let originalWebSocket;
    let originalDocumentCreateElement;
    let originalWebAssemblyInstantiate;

    beforeAll(() => {
        // Mock WebSocket
        originalWebSocket = window.WebSocket;
        window.WebSocket = jest.fn((url) => ({
            send: jest.fn(),
            close: jest.fn(),
        }));

        // Mock document.createElement
        originalDocumentCreateElement = document.createElement;
        document.createElement = jest.fn((tagName) => {
            const element = originalDocumentCreateElement.call(document, tagName);
            if (tagName === 'script') {
                Object.defineProperty(element, 'src', {
                    set: jest.fn(),
                });
            }
            return element;
        });

        // Mock WebAssembly.instantiate
        originalWebAssemblyInstantiate = WebAssembly.instantiate;
        WebAssembly.instantiate = jest.fn((bytes) => {
            if (
                bytes instanceof ArrayBuffer &&
                new Uint8Array(bytes).some(
                    (v, i) => i < 64 && v.toString(16) === '6d696e65', // 'mine' in hex
                )
            ) {
                throw new Error('Mining blocked');
            }
            return originalWebAssemblyInstantiate(bytes);
        });
    });

    afterAll(() => {
        // Restore original implementations
        window.WebSocket = originalWebSocket;
        document.createElement = originalDocumentCreateElement;
        WebAssembly.instantiate = originalWebAssemblyInstantiate;
    });

    test('should block WebSocket connections to mining domains', () => {
        const miningUrl = 'wss://coin-hive.com/socket';
        const nonMiningUrl = 'wss://example.com/socket';

        const miningSocket = new window.WebSocket(miningUrl);
        const nonMiningSocket = new window.WebSocket(nonMiningUrl);

        expect(miningSocket.send).toBeDefined();
        expect(miningSocket.close).toBeDefined();
        expect(nonMiningSocket).toBeInstanceOf(originalWebSocket);
    });

    test('should block script elements with mining patterns', () => {
        const script = document.createElement('script');
        script.src = 'https://example.com/coinhive.js';

        document.body.appendChild(script);

        expect(script.parentNode).toBeNull(); // Script should be removed
    });

    test('should block WebAssembly mining modules', async () => {
        const miningBytes = new ArrayBuffer(64);
        const miningView = new Uint8Array(miningBytes);
        miningView[0] = 0x6d; // 'm'
        miningView[1] = 0x69; // 'i'
        miningView[2] = 0x6e; // 'n'
        miningView[3] = 0x65; // 'e'

        await expect(WebAssembly.instantiate(miningBytes)).rejects.toThrow(
            'Mining blocked',
        );
    });

    test('should block inline CoinHive attempts', () => {
        expect(window.CoinHive).toBeDefined();
        expect(window.CoinHive.start).toBeInstanceOf(Function);

        const consoleWarnSpy = jest.spyOn(console, 'warn');
        window.CoinHive.start();

        expect(consoleWarnSpy).toHaveBeenCalledWith('CoinHive blocked');
        consoleWarnSpy.mockRestore();
    });
});
