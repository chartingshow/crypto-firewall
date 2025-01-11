# Transaction Simulation Spoofing Attack

### How the attack works

**Transaction simulation** is a feature that allows users to preview the expected outcome of a blockchain transaction before signing and executing it.

It is designed to enhance security and transparency by helping users verify what the transaction will do, like the amount of transferred cryptocurrency, gas fees and other transaction costs and other on-chain data changes.

### Attack Sequence Breakdown

1. The attackers lure victims to a malicious website that mimics a legitimate platform
2. The attackers initiates what is made to appear as a "**Claim ETH function**".
3. The transaction simulation shows that the user will receive a small amount in ETH.
4. However, a time delay between the simulation and the execution allows the attackers to alter the on-chain contract state to change what the transaction will actually do if "approved".
5. The victim, trusting the wallet's transaction simulation result, signs the transaction, allowing the website to **drain their wallet of all crypto and send it to the attacker's wallet**.

The core vulnerability lies in the time gap between transaction simulation and execution. Malicious actors have developed phishing sites that can manipulate on-chain states during this crucial window, leading to devastating results.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/transaction-simulation-spoofing/transaction-simulation-spoofing.jpg" alt="Transaction Simulation Spoofing"></p>

This new attack vector represents a significant evolution in phishing techniques.

Rather than relying on simple deception, attackers are now exploiting trusted wallet features that users rely on for security. This sophisticated approach makes detection particularly challenging.

The blockchain monitoring platform suggests that Web3 wallets reduce the simulation refresh rates to match blockchain block times, force refresh simulation results before critical operations, and add expiration warnings to warn users about the risk.

> From the user's perspective, this new attack shows why **wallet simulation shouldn't be trusted!**
>
> Cryptocurrency holders should treat "**free claim**" offers such as "**Air Drops**" on obscure websites with caution and only trust verified dApps!

## Learn More

https://drops.scamsniffer.io/transaction-simulation-spoofing-a-new-threat-in-web3/
