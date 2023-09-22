## Ice Phishing Scams

### What is Ice Phishing?

Ice phishing is a type of attack that is exclusive to the Web3 world whereby a user is tricked into signing permissions allowing for a malicious actor to spend a user's tokens. This differs from traditional phishing attacks which aim to access confidential information such as private keys or passwords via social engineering. This makes ice phishing a considerable threat to Web3 investors since interacting with DeFi protocols requires you to grant permissions to interact.

The hacker just needs to make a user believe that the malicious address that they are granting approval to is legitimate. Once a user has approved permissions for the scammer to spend tokens, then the assets are at risk of being drained.

### Ice Phishing On-chain

The first stage of an ice phishing attack occurs when the victim is tricked into **approving an EOA** or **a malicious contract to spend tokens from the victim's wallet**. We can see an example of this in the below transaction:

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/1.jpg" alt="Ice Phishing"></p>

Above: `Approval` transaction.

The next phase occurs when the ice phishing address initiates a `TransferFrom` transaction which transfers tokens from the victim to an address that the ice phisher chooses. In the below example, USDT is transferred to `0x9ca3b...`

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/2.jpg" alt="Ice Phishing"></p>

Above: `Transferfrom` transaction.

We can see that the ice phisher (0x4632) initiates the transaction between the victim and the recipient. What is important to emphasize here is that the recipient address is not always the wallet that has ice phished you, it's the wallet that initiated the transaction. The ice phisher often sends users' funds to a second EOA that they control. You can see a transaction flow below:

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/3.jpg" alt="Ice Phishing"></p>

Above: Ice Phishing Attack Flow.

If you see a suspicious transaction in your wallet you need to check to see if the initiating EOA has been granted permissions to spend your tokens. You can check this for yourself on scan sites such as Etherscan or Debank.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/4.jpg" alt="Ice Phishing"></p>

Above: Wallet contract approvals as found on Etherscan.

If you see an address that you don't recognize, or one that has initiated transactions without your approval then you should revoke permissions. You can do this by visiting sites like revoke.cash or connecting your wallet to the scan site to revoke.

1.  Here is how you revoke permissions on scan sites such as Etherscan.
2.  Visit [https://etherscan.io/tokenapprovalchecker](https://etherscan.io/tokenapprovalchecker) and search for your wallet.
3.  Connect your wallet.
4.  Hit the ERC-20, ERC-721 or ERC-1155 tabs and find the address you wish to revoke.
5.  Click the revoke button.

## Could This Address be an Ice Phish?

The first indicators that a user is at risk of becoming a victim of ice phishing will be apparent in the URL or dApp that they are viewing. Malicious sites will either mimic a legitimate project's page, or display fake partnerships with legitimate companies. We often see scam sites using the CertiK logo showing a fake audit or fake partnership. Below is an example of one of the many fake mining pools that uses CertiK's logo and other legitimate companies to create a sense of trustworthiness.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/5a.jpg" alt="Ice Phishing"></p>

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/5b.jpg" alt="Ice Phishing"></p>

Above: Fake mining URL.

When signing approvals on this site, you are allowing a malicious EOA to spend an unlimited amount of USDT from your wallet. This essentially means that all USDT that you own is at risk.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/6.jpg" alt="Ice Phishing"></p>

Above: MetaMask Approval Prompt.

There are some on-chain checks that you can do yourself as part of your own research. You can take the address presented to you on the dApp or URL that you're interacting with and search for it on scan sites such as Etherscan for suspicious activity. For example, we detected suspicious ice phishing activity on `EOA 0x13a...5dE49` which we found was funded by Tornado Cash withdrawals.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/7.jpg" alt="Ice Phishing"></p>

Above: Tornado Cash Withdrawals.

Upon further investigation, we see that `0x13a...5dE49` targeted the Pulse community with a key community member warning users of the dangers of ice phishing.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/8.jpg" alt="Ice Phishing"></p>

By investigating some of the victim wallets and the complaints on social media, we found a fake Twitter page which was likely related to the ice phishing wallets.

## How to Protect Yourself

The easiest way to prevent yourself from becoming a victim of ice phishing is by going to trusted sites such as Coinmarketcap.com, coingecko.com, etc. to verify official sites. Many ice phishing scams can be found on social media such as Twitter, where fake profiles are disguising themselves as legitimate projects and promoting fake airdrops as an example. To gain attention, Twitter accounts are often tagged by bots in these fake accounts posts.

In the below example, we can see a fake Optimism Twitter account promoting a phishing URL. A simple check on CoinMarketCap or Coingecko would display the legitimate site.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/ice-phishing/9.jpg" alt="Ice Phishing"></p>

Above: Fake Optimism Twitter account. 

Always take a moment to verify if the URL or dApp that you are interacting with is legitimate. If you are not sure, double check by visiting trusted sources.

## Links

https://www.microsoft.com/en-us/security/blog/2022/02/16/ice-phishing-on-the-blockchain/
