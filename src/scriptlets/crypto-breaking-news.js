/**
 * @file crypto-breaking-news.js
 * @title Cryptocurrency Breaking News Scriptlet
 * @description An advanced scriptlet designed to fetch and display the latest
 *              cryptocurrency news from popular RSS feeds. This scriptlet
 *              aggregates news from multiple reputable sources, sorts them
 *              by recency, and presents them in a user-friendly floating box
 *              on any webpage, providing users with real-time updates on
 *              cryptocurrency trends and developments.
 * @version 1.0.0
 * @copyright (c) The Charting Show (https://github.com/chartingshow/crypto-firewall)
 * @license GPL-3.0 license - (View LICENSE file for details)
 *
 * This Scriptlet is intended to be used with Brave Browser's custom scriptlets feature
 * to provide up-to-date cryptocurrency news.
 *
 * Original Authors: Charting Show Team
 *
 * Contributions and feedback are welcome!
 */
(async function () {
    // List of RSS feeds to fetch news from
    const rssFeeds = [
        'https://bitcoinmagazine.com/feed',
        'https://www.coindesk.com/arc/outboundfeeds/rss/',
        'https://bitcoinist.com/feed',
        'https://newsbtc.com/feed',
        'https://cryptopotato.com/feed',
        'https://dailyhodl.com/feed',
        'https://cointelegraph.com/rss'
    ];

    // Create the breaking news box container
    const newsBox = document.createElement('div');
    newsBox.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 350px;
        max-height: 400px;
        overflow-y: auto;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px;
        font-family: Arial, sans-serif;
        z-index: 9999;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    `;
    document.body.appendChild(newsBox);

    // Function to fetch and parse RSS feed
    async function fetchRSSFeed(url) {
        try {
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
            if (!response.ok) throw new Error(`Failed to fetch RSS feed: ${url}`);
            const data = await response.json();
            return data.items.slice(0, 3); // Get top 3 articles per feed
        } catch (error) {
            console.error(`Error fetching RSS feed from ${url}:`, error);
            return [];
        }
    }

    // Function to display news in the breaking news box
    function displayNews(articles) {
        newsBox.innerHTML = '<h3 style="margin-top: 0;">Breaking Crypto News</h3>';
        
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.style.marginBottom = '10px';
            articleElement.innerHTML = `
                <a href="${article.link}" target="_blank" style="text-decoration: none; color: #007bff;">
                    <strong>${article.title}</strong>
                </a>
                <p style="margin: 5px 0; color: #555;">${article.pubDate}</p>
            `;
            newsBox.appendChild(articleElement);
        });

        // Add a close button to hide the box
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.cssText = `
            position: absolute;
            top: 5px;
            right: 5px;
            background-color: #ff4d4d;
            color: white;
            border: none;
            border-radius: 3px;
            padding: 2px 5px;
            cursor: pointer;
            font-size: 12px;
        `;
        closeButton.onclick = () => (newsBox.style.display = 'none');
        newsBox.appendChild(closeButton);
    }

    // Fetch and aggregate news from all RSS feeds
    let aggregatedArticles = [];
    for (const feed of rssFeeds) {
        const articles = await fetchRSSFeed(feed);
        aggregatedArticles.push(...articles);
    }

    // Sort articles by publication date (most recent first)
    aggregatedArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    // Display the top articles in the breaking news box
    displayNews(aggregatedArticles.slice(0, 10)); // Show top 10 articles

})();
