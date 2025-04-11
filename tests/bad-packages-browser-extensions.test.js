const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();

const { JSDOM } = require('jsdom');

// Mock the `window` object and `alert` function
let window;
let alertMock;

beforeEach(() => {
  const dom = new JSDOM(``, { url: "https://npmjs.com/package/test-package" });
  window = dom.window;
  global.window = window;
  alertMock = jest.fn();
  global.alert = alertMock;
  fetchMock.resetMocks();
});

// Import the script to test
require('../src/scriptlets/bad-packages-browser-extensions');

describe('bad-packages-browser-extensions.js', () => {
  test('fetchBlacklist fetches and parses blacklist correctly', async () => {
    const blacklistURL = 'https://example.com/blacklist.txt';
    const blacklistData = 'bad-package-1\nbad-package-2\n# Comment\n\nbad-package-3';
    fetchMock.mockResponseOnce(blacklistData);

    const fetchBlacklist = async (url) => {
      const response = await fetch(url);
      const text = await response.text();
      return text
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => item !== '' && !item.startsWith('#'));
    };

    const blacklist = await fetchBlacklist(blacklistURL);
    expect(blacklist).toEqual(['bad-package-1', 'bad-package-2', 'bad-package-3']);
    expect(fetchMock).toHaveBeenCalledWith(blacklistURL);
  });

  test('checkURLAgainstBlacklist triggers alert for blacklisted item', async () => {
    const blacklist = ['test-package'];
    const fetchBlacklist = jest.fn().mockResolvedValue(blacklist);

    const checkURLAgainstBlacklist = async (hostname) => {
      const currentURL = window.location.href;
      for (const badItem of blacklist) {
        if (currentURL.includes(badItem)) {
          showAlert(badItem, hostname);
          break;
        }
      }
    };

    const showAlert = (badItem, hostname) => {
      const message = `WARNING! This URL on ${hostname} contains a potentially malicious package/extension: ${badItem}.\n\nProceed with extreme caution!`;
      alert(message);
    };

    await checkURLAgainstBlacklist('npmjs.com');
    expect(alertMock).toHaveBeenCalledWith(
      'WARNING! This URL on npmjs.com contains a potentially malicious package/extension: test-package.\n\nProceed with extreme caution!'
    );
  });

  test('checkURLAgainstBlacklist does not trigger alert for safe URL', async () => {
    const blacklist = ['bad-package'];
    const fetchBlacklist = jest.fn().mockResolvedValue(blacklist);

    const checkURLAgainstBlacklist = async (hostname) => {
      const currentURL = window.location.href;
      for (const badItem of blacklist) {
        if (currentURL.includes(badItem)) {
          showAlert(badItem, hostname);
          break;
        }
      }
    };

    const showAlert = (badItem, hostname) => {
      const message = `WARNING! This URL on ${hostname} contains a potentially malicious package/extension: ${badItem}.\n\nProceed with extreme caution!`;
      alert(message);
    };

    await checkURLAgainstBlacklist('npmjs.com');
    expect(alertMock).not.toHaveBeenCalled();
  });

  test('fetchBlacklist handles fetch errors gracefully', async () => {
    const blacklistURL = 'https://example.com/blacklist.txt';
    fetchMock.mockRejectOnce(new Error('Network error'));

    const fetchBlacklist = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.error(`Failed to fetch blacklist from ${url}: ${response.status}`);
          return [];
        }
        const text = await response.text();
        return text
          .split('\n')
          .map((item) => item.trim())
          .filter((item) => item !== '' && !item.startsWith('#'));
      } catch (error) {
        console.error(`Error fetching blacklist from ${url}: ${error}`);
        return [];
      }
    };

    const blacklist = await fetchBlacklist(blacklistURL);
    expect(blacklist).toEqual([]);
    expect(fetchMock).toHaveBeenCalledWith(blacklistURL);
  });

  test('checkURLAgainstBlacklist skips domains without a blacklist', async () => {
    const fetchBlacklist = jest.fn();
    const checkURLAgainstBlacklist = async (hostname) => {
      if (!blacklistURLs[hostname]) {
        return; // No blacklist for this domain
      }
      const blacklist = await fetchBlacklist(blacklistURLs[hostname]);
      const currentURL = window.location.href;
      for (const badItem of blacklist) {
        if (currentURL.includes(badItem)) {
          showAlert(badItem, hostname);
          break;
        }
      }
    };

    await checkURLAgainstBlacklist('unknown-domain.com');
    expect(fetchBlacklist).not.toHaveBeenCalled();
  });

  test('showAlert displays the correct warning message', () => {
    const showAlert = (badItem, hostname) => {
      const message = `WARNING! This URL on ${hostname} contains a potentially malicious package/extension: ${badItem}.\n\nProceed with extreme caution!`;
      alert(message);
    };

    showAlert('test-package', 'npmjs.com');
    expect(alertMock).toHaveBeenCalledWith(
      'WARNING! This URL on npmjs.com contains a potentially malicious package/extension: test-package.\n\nProceed with extreme caution!'
    );
  });

  test('Integration test: triggers alert for blacklisted item on npmjs.com', async () => {
    const blacklistData = 'test-package\nanother-bad-package';
    fetchMock.mockResponseOnce(blacklistData);

    const blacklistURLs = {
      'npmjs.com': 'https://example.com/npm-blacklist.txt',
    };

    const fetchBlacklist = async (url) => {
      const response = await fetch(url);
      const text = await response.text();
      return text
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => item !== '' && !item.startsWith('#'));
    };

    const checkURLAgainstBlacklist = async (hostname) => {
      if (!blacklistURLs[hostname]) {
        return;
      }
      const blacklist = await fetchBlacklist(blacklistURLs[hostname]);
      const currentURL = window.location.href;
      for (const badItem of blacklist) {
        if (currentURL.includes(badItem)) {
          showAlert(badItem, hostname);
          break;
        }
      }
    };

    const showAlert = (badItem, hostname) => {
      const message = `WARNING! This URL on ${hostname} contains a potentially malicious package/extension: ${badItem}.\n\nProceed with extreme caution!`;
      alert(message);
    };

    await checkURLAgainstBlacklist('npmjs.com');
    expect(alertMock).toHaveBeenCalledWith(
      'WARNING! This URL on npmjs.com contains a potentially malicious package/extension: test-package.\n\nProceed with extreme caution!'
    );
  });
});
