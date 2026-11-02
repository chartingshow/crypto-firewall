# Crypto Drainers: How Wallet-Draining Scams Work and How to Stay Protected

Cryptocurrency theft does not always require a hacked exchange, stolen password, or compromised recovery phrase. A crypto drainer can exploit a transaction or permission that a wallet owner was tricked into authorising. The victim may think they are claiming an airdrop, verifying an account, joining a community, or minting an NFT; the request in their wallet may actually allow assets to be transferred away.

This guide explains the common attack patterns, the difference between connecting and authorising a wallet, the permissions that deserve special attention, and the steps to take if something goes wrong.

> **Key rule:** Never approve a wallet request solely because a website says it is necessary. Verify the site, the requested action, the spender, the asset, and the permission before signing. If the details are unclear, reject the request.

## What Is a Crypto Drainer?

A **crypto drainer** is malicious software or a scam workflow designed to obtain cryptocurrency or NFTs from a victim's wallet. Many drainers are embedded in phishing websites masquerading as legitimate Web3 services. Others are delivered through compromised websites or deceptive links shared on social platforms.

The attack commonly relies on **social engineering and wallet authorisation**, not on breaking blockchain cryptography. A malicious prompt can ask the user to transfer funds, approve another address to spend tokens, grant broad NFT permissions, or sign data that can later be used to authorise a transfer.

The exact impact depends on the blockchain, wallet, token standard, and request being signed. A drainer cannot generally withdraw assets merely because a user viewed a page or connected a wallet. However, compromised devices, stolen keys, and malicious wallet extensions are separate threats that can bypass this normal approval model.

## How a Wallet-Draining Attack Unfolds

1. **The lure:** A victim encounters an unexpected airdrop, NFT mint, staking reward, token migration, wallet-verification page, or fake technical-support message.
2. **The imitation:** A phishing site copies the branding of a well-known exchange, protocol, wallet, or community. The link may arrive through an advertisement, search result, compromised account, or direct message.
3. **The wallet connection:** The site asks to connect a wallet. Connection usually reveals the public address and allows the site to propose requests; it does not itself grant spending rights.
4. **The dangerous request:** The user is asked to confirm a transfer, approve a spender, enable NFT operator access, or sign a permit or other authorisation. The surrounding page may describe this as a harmless identity check or a gasless claim.
5. **The asset movement:** If the request confers sufficient authority, an attacker or attacker-controlled contract may transfer the affected assets immediately or later, while that authority remains valid.

A successful attack may involve one prompt or several. A drainer may also selectively target valuable tokens or NFTs, so an apparently uneventful interaction should not automatically be treated as safe.

## Understand the Wallet Requests That Matter

| Request | What it normally does | Why it can be dangerous |
| --- | --- | --- |
| **Connect wallet** | Allows a site to identify your public wallet address and request further actions. | Not a transfer authorisation by itself, but it can precede a deceptive request. |
| **Send / transfer** | Authorises a transaction moving assets or invoking a contract. | A malicious destination or contract call can cause an immediate loss. |
| **ERC-20 `approve`** | Grants a specified spender an allowance for a particular token. | An excessive or unlimited allowance can let that spender move the token later. |
| **ERC-721 / ERC-1155 operator approval** | Allows an operator to manage NFTs under the permission's scope. | `setApprovalForAll` can expose multiple NFTs in a collection or token contract. |
| **Permit / EIP-2612** | Uses a signed message to authorise token spending, where supported. | A signature may enable an attacker to establish spending rights without the victim first sending an on-chain approval transaction. |
| **Permit2** | Supports signature-based token permissions and transfers after relevant token approvals are in place. | A deceptive signature can authorise spending under the applicable amount, spender, nonce, and deadline conditions. |
| **Other typed-data signatures or delegations** | Authorise application-specific actions. | The exact effect varies; an unfamiliar signature must not be assumed harmless simply because no gas fee appears. |

**Permit and Permit2 are legitimate mechanisms, not malware.** The threat comes from approving an unauthorised spender, amount, action, or recipient. Similarly, an unlimited approval is not proof of a scam, but it exposes more assets if the approved spender is malicious or later compromised.

### Why “gasless” does not mean “risk-free”

A site may invite users to sign an **off-chain message** rather than pay a transaction fee. Some signatures are harmless login challenges; others are cryptographic authorisations that another party can submit on-chain. A valid permit may remain usable until its deadline, subject to its nonce and other constraints. In some attacks, theft occurs well after the original interaction.

Always examine the **token, spender, allowance, chain, contract, expiry, and intended operation** when your wallet provides them. If a wallet cannot explain what a signature will do, do not treat the request as safe.

## Drainer-as-a-Service and Phishing Campaigns

Wallet draining is not limited to individual scam pages. Some criminal groups operate **Drainer-as-a-Service (DaaS)** arrangements: one group maintains malicious infrastructure and wallet-draining components, while other participants attract victims through phishing campaigns. This helps explain why similar scams appear across unrelated brands, communities, and websites.

Common distribution channels include fraudulent search advertisements, fake airdrop announcements, impersonated support accounts, compromised social profiles, lookalike domains, and community invitations. A legitimate-looking page or a trusted account posting a link does not establish that a request is safe; real accounts and websites can be compromised.

## How to Spot a Crypto Drainer Before it Empties Your Wallet

The platforms are designed to make malicious wallet interactions look routine. Knowing what to look for is the first line of defense. Watch for these warning signs before connecting your wallet to any crypto site:

- Wallet connection requested immediately on a crypto/NFT/airdrop site.
- Unexpected signature or “Approve” requests before receiving anything.
- Requests for unlimited token approvals or Permit/Permit2 permissions.
- “Gasless claim” or “off-chain signature” prompts that still require wallet approval.
- Fake urgency: “claim now,” “wallet verification,” “limited mint,” “expiring rewards.”
- Links received through Telegram, Discord, X/Twitter DMs, or fake support accounts.
- Recently created or suspicious-looking crypto domains.
- Websites cloned from legitimate DeFi, NFT, or exchange platforms.
- Multiple redirects before reaching the wallet prompt.
- Wallet warnings ignored or bypassed.
- Using a main wallet with large holdings for unknown Web3 sites.
- Repeated prompts to reconnect or re-sign transactions.
- Influencer or project accounts suddenly pushing unexpected mint/claim links.
- Browser tabs opening new wallet approval windows automatically.
- Transaction details that are vague, empty, or difficult to understand.
- “Free NFT” or “free token” campaigns requiring approvals first.
- Discord or Telegram admins privately messaging users first.
- Websites asking users to disable wallet security protections.
- Wallet drained immediately after signing a message instead of sending funds manually.
- Any platform pressuring users to act fast before verifying legitimacy.

**Not every warning sign proves a site is malicious.** Treat these indicators as reasons to stop, investigate independently, and refuse unverified permissions. The absence of obvious red flags is not a guarantee of safety.

## A Practical Safety Check Before You Sign

1. **Open the official site independently.** Use a saved bookmark or a known project directory rather than an unsolicited message or sponsored result. Check the entire hostname, not only the logo or page title.
2. **Confirm the action makes sense.** An NFT giveaway should not casually require approval to spend unrelated stablecoins or manage an entire NFT collection.
3. **Read the wallet prompt, not just the webpage.** Check the network, token, spender or operator address, amount, destination, and expiration whenever available.
4. **Avoid unnecessary unlimited allowances.** Set a limited spending cap when the wallet and protocol allow it. Revoke permissions you no longer need.
5. **Keep high-value assets separate.** Store long-term holdings in a wallet that is not routinely connected to unfamiliar applications. Use a low-value interaction wallet for experimental sites.
6. **Keep security controls enabled.** Use an up-to-date wallet, browser, and operating system, and pay attention to transaction simulations and security warnings. These tools may miss new threats.
7. **Never disclose recovery phrases or private keys.** Legitimate support agents and dapps do not need them. A hardware wallet helps protect keys, but it cannot make a malicious approval safe if you authorise it.
8. **Stop when uncertain.** Reject the request and verify details through an independent, trusted channel before proceeding.

### Example: A Fake Token Claim

An account posts a link claiming that holders have ten minutes to collect a reward. The page looks like the real project and displays a familiar **Connect Wallet** button. After connecting, the user sees **Sign to verify eligibility**. The actual request, however, grants a spender permission over an existing token rather than authorising receipt of a reward.

The critical warning is the **mismatch between the advertised action and the wallet permission**. The safe response is to reject the request, close the page, and check the announcement through the project's independently verified channels.

## What to Do If You Approved Something Suspicious

**Act promptly, but do not follow instructions from an unknown “recovery expert.”** Recovery scams frequently target people who have already lost funds.

1. **Stop interacting with the suspicious site.** Reject further prompts and preserve the URL and screenshots without submitting new transactions.
2. **Determine what happened.** Identify the wallet address, blockchain, transaction hash, affected token, contract, and spender or operator if possible. Check the relevant chain explorer.
3. **Check and revoke risky allowances.** Use a well-established approval-management service reached through its verified official address, such as [Revoke.cash](https://revoke.cash/), or supported wallet/explorer tools. Review each relevant blockchain. Revoking on-chain permissions generally requires a network transaction and gas fees.
4. **Account for signed permits.** An off-chain permit signature may not appear as an existing token allowance before it is used. Where supported, invalidate the relevant nonce or permission; if its validity or scope is uncertain, move at-risk assets to a newly secured wallet.
5. **Treat exposed recovery phrases or private keys as a full compromise.** Create a new wallet from a clean, trusted environment and move any assets that can still be secured. Revoking approvals is not enough when an attacker controls the keys.
6. **Secure related accounts and devices.** Remove suspicious extensions, update software, change exposed passwords, and enable multifactor authentication on related services. Avoid restoring a suspected compromised wallet as your primary wallet.
7. **Preserve evidence and report the scam.** Keep timestamps, links, addresses, transaction identifiers, screenshots, and messages. Report fraudulent sites to the hosting provider, wallet or browser security service, relevant platform, and appropriate authorities.

**Important:** Disconnecting a website from a wallet does **not** cancel an existing on-chain token approval. Revoking an allowance does **not** reverse an already completed transaction. If you are unsure whether the threat is limited to an approval or includes a stolen key, prioritise securing remaining assets with independent, qualified assistance.

## Where Crypto Firewall Fits In

[Crypto Firewall](https://github.com/chartingshow/crypto-firewall) provides continuously updated blocklists and indicators intended to reduce exposure to crypto-related phishing, scam domains, malicious infrastructure, and other web threats. Its lists can be deployed through compatible browser blockers, DNS filtering, operating-system hosts files, and network security tools.

These controls can help prevent a browser or network from reaching **known** malicious infrastructure. They are most effective when combined with safe wallet practices, verified links, cautious transaction review, and regular permission audits.

**Limitations to understand:**

- A newly created scam website may not yet appear on any blocklist.
- Legitimate platforms or accounts can be compromised without changing their domains.
- DNS and IP filtering cannot determine whether an individual wallet signature grants dangerous permissions.
- Blocking a website after an approval is signed cannot undo that authorisation or recover assets.
- Some blocklist entries can produce false positives; coverage varies by list, platform, and update frequency.

Use Crypto Firewall as **one layer of defence**, not as a replacement for verifying wallet requests.

## Frequently Asked Questions

### Can a website drain my wallet just because I connected it?

**Not ordinarily.** A standard connection lets a site see your address and request actions. Asset movement usually requires a separate authorised transaction, permit, approval, delegation, or compromise of wallet credentials. Do not confuse connection with permission to spend.

### Does a hardware wallet prevent crypto drainers?

A hardware wallet helps keep private keys isolated, but it cannot prevent losses when the owner knowingly or unknowingly confirms a malicious transaction or spending permission. Review the details on the trusted device display wherever possible.

### Can a malicious approval be used later?

**Yes.** A standing token allowance or NFT operator permission can remain active after you leave a website. Some signed permits may also be usable later, subject to the mechanism's deadline, nonce, and other conditions.

### Can stolen cryptocurrency be recovered by revoking approvals?

**No.** Revocation is a preventative measure against additional authorised spending; it does not reverse confirmed blockchain transfers. Be sceptical of anyone promising guaranteed recovery in exchange for fees, seed phrases, or wallet access.

**Disclaimer:** This is educational security guidance, not a guarantee against cryptocurrency theft. Attack techniques and wallet interfaces change. Always verify requests independently and use multiple layers of protection.
