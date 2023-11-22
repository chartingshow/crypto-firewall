## What is 'Address Poisoning' cryptocurrency scams?

Cryptocurrency wallet provider MetaMask is warning users of a new scam called 'Address Poisoning' used to trick users into sending funds to a scammer rather than an intended recipient.

When MetaMask users send or receive cryptocurrency, it appears in the wallet transaction list. Clicking the transaction displays more details, including the token, the amount sent or received, and a short form of the third party's address.

For example, below are examples of two shortened addresses that could be shown in MetaMask cryptocurrency transactions.

```
From: 0x242...54b7
To: 0x242...54b7
```

While both wallet addresses look identical in their short form, they could be completely different, easily confusing MetaMask users.

**Address poisoning** is an attack vector that, in contrast to other scams - which often use methods that have served many scammers so well, such as unlimited token approvals, phishing for your Secret Recovery Phrase, etc. - **relies on user carelessness and haste above all else**.

On the one hand, this method is rather innocuous compared to other scam types. However, it can just as easily result in a loss of funds. Let's investigate how this scam is usually structured.

### Scammers poison your transaction history

A new scam called 'Address Poisoning' relies on poisoning the wallet's transaction history with scammer's addresses that are very similar to addresses that a user recently had transactions.

The threat actor monitors the blockchain for new transactions to conduct the scam.

After selecting a target, they use a vanity address creator to create an address very similar, if not almost exactly the same, as the one involved in the recent transaction.

It should be noted that creating an address that matches a target address' prefix **or** suffix can take under a minute. However, targeting both will take far longer (possibly too long to be worthwhile) to generate.

The threat actor then sends the targeted sender's address a small amount of cryptocurrency, or even a $0 token transaction, from this new address so that the transaction appears in their wallet's history.

As the threat actor's address is very similar to a user's previous transaction, and as MetaMask shortens the addresses in the transaction history, it looks like it's from the same person.

This method effectively poisons the transaction history with multiple entries that look like they are between the same address but are using different ones - one address for the actual, legitimate transaction and the newer one from the attacker using a copycat wallet address.

The attacker then hopes that when a user needs to send cryptocurrency to someone they previously sent to, they will find the most recent transaction, which in this case is from the attacker, and sends the crypto to the scammer's address instead.

To perform a transaction, even for negligible amounts, the attacker still has to cover additional costs known as "gas", as the transaction is registered on the blockchain.

However, the threat actors are willing to invest in the scam in the hopes of a much larger payout.

Since there's no way to stop these malicious transactions from occurring on the blockchain, MetaMask is warning users to be diligent when copying addresses from transactions.

Furthermore, as clicking on the short-form address in MetaMask transactions copies it automatically to the keyboard without showing the full address, as shown in the mockup below, it is crucial to be very careful.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/address-poisoning/1.jpg" alt="address poisoning"></p>

<p align="center"><strong>Above: Copying a "transaction address" by clicking on it.</strong></p>

Instead, search your transaction list for a known valid transaction and grab the full address from a blockchain explorer like [EtherScan](https://etherscan.io/).

MetaMask also recommends you use their built-in Address Book feature at 'Settings → Contacts' to save known, valid cryptocurrency addresses for people or services you commonly send transactions.

One possible way that MetaMask could prevent these types of attacks is to create a new option that forces the displaying of complete Send and From addresses in transaction histories.

However, as Ethereum addresses are very long (66 characters), this would introduce user interface design issues.

### How does address poisoning work?

If you didn't know already, your wallet includes one or more _accounts_, each of which has its own cryptographically-generated **address**. These are long hexadecimal numbers, meaning they use both numerical _and_ (a few) alphabetical characters. This is a trait that makes them unintelligible to most people, and - critically - very, **very difficult to remember**.

This is why, supported by most web3 software, you have most likely come to rely on **copying and pasting addresses**, rather than memorizing them and typing them out. This saves a lot of time and ensures, generally, you don't make any mistakes, and that your funds always go to the right address. MetaMask falls into this category of facilitating copy-and-paste: you can copy your address with one click/tap.

**Address poisoning speculatively exploits this copy-and-paste tendency**. Here's how:

1. You send a regular, everyday, _nothing-to-see-here_ transaction to a friend, or to another account you control.
2. The scammer, who has software that monitors transfers of certain tokens (usually stablecoins), notices. **They use a 'vanity' address generator (there are many accessible with a quick web search) to create an address that closely matches yours** (sometimes, it'll match your friend's). Since they're so long, crypto wallet addresses are typically shortened. You might see the first lot of characters only, or sometimes you may see the initial 5-10 or so and the final 5-10 or so, skipping the middle. This is how most people recognize addresses: not by knowing every single character, but by becoming familiar with the start and finish. This is the tendency that address poisoning preys on.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/address-poisoning/2.jpg" alt="address poisoning"></p>

3. **The scammer sends you a transaction of negligible value from the dummy account they created** - the 'vanity' address that mimics yours or that of your contact. Usually these are transfers of zero tokens. With this, they've **poisoned **that wallet. (Though, to be clear: this doesn't actually have any negative impacts in itself.)

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/address-poisoning/3.jpg" alt="address poisoning"></p>

<p align="center"><strong>Above: The scammers address looks like your Account 1 (when it's shortened).</strong></p>

4. Since their dummy address looks so similar to yours, it's entirely possible that, the next time you need your address, **you might inadvertently copy their address from your transaction history and paste it elsewhere.** Naturally, if you paste their address by accident, you'll send funds to them and not yourself/the intended recipient. And since on-chain transactions like this are immutable (cannot be altered once confirmed), the lost funds will be irretrievable.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/address-poisoning/4.jpg" alt="address poisoning"></p>

And that's it: **all they're hoping for is that you copy the wrong address from your transaction history in your wallet**.

### How can I protect myself?

First off: **there's no way of stopping people - including scammers - from sending transactions to your address**. These are _public _blockchains we're interacting with, so anyone, anywhere can do as they please.

What we can help, though, is whether we fall victim to the scam by copying the address. This is a tricky one, and awareness is important: even those who consider themselves relatively thorough - and double-check the start and/or end of an address before they copy it - can become victims here.

Here's what we recommend:

* **Above all: check and double-check addresses before you send**. This is self-explanatory. Although it's relevant for any transaction, make particularly sure the address is correct if the assets you're sending have considerable value to you. **Checking every single character** is the only way to be completely safe.
* **Avoid copying addresses from your transaction history,** **and, if you do, check them very carefully**. This goes for both transaction history in your wallet, such as MetaMask, as well as for history shown on the block explorer. Equally, this advice applies to your own address (e.g. if you're moving funds from a centralized exchange to your MetaMask, and need to copy your MetaMask address) as much as it does the addresses of others to whom you may be sending funds.
* **Use a hardware wallet**. Hardware wallets generally require you to check and confirm any address you're sending to before allowing you to complete a transaction. Though it's possible to fall victim to this scam regardless even with this feature, this prompt may help you develop a habit of continual scrutiny of any address you use.
* **Add frequently used addresses to your address book**. In MetaMask, you can find this in `Settings > Contacts`. If you have a contact's address saved here, you can be confident it's the right one, and won't have to rely on copying and pasting every time you need it.
* **Consider using test transactions**. This involves sending a nominal amount of funds to an address to confirm it's correct before you proceed with a larger transaction. Naturally, this requires gas fees to be paid for two transactions, so depending on the gas price at the time, it may not be appealing.

### Summary

* Address poisoning involves scammers sending transactions of no value to your account from an address that's very similar to your own.
* Their hope is that you will then absent-mindedly copy this address from your transaction history in future. You or whoever you're passing your address onto will then send tokens directly to them, and not to the correct address.
* Develop a habit of thoroughly checking **every single character** of an address before you send a transaction. This is the only way to be completely sure you're sending to the right place.
