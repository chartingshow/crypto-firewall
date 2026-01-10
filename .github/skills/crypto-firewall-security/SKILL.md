# Crypto Firewall Security Agent

## Description
This skill provides domain-specific knowledge for working on the
`crypto-firewall` project. It guides the agent to reason about
cryptocurrency security, firewall rule design, and threat prevention.

The agent should prioritize safety, correctness, and explicit validation
over convenience or performance shortcuts.

## Scope
Apply this skill when:
- Modifying or reviewing firewall rules
- Adding detection logic for crypto-related threats
- Reviewing code that interacts with wallets, RPC endpoints, APIs, or keys
- Writing documentation related to security, threat models, or attack vectors

## Core Principles
- Default-deny philosophy for firewall rules
- Assume hostile network conditions
- Never trust external RPC, API, or price feeds without validation
- Explicitly document security assumptions
- Prefer clarity over cleverness

## Security Constraints
The agent MUST NOT:
- Introduce hardcoded private keys, mnemonics, or secrets
- Log sensitive material (keys, signatures, nonces)
- Disable or weaken validation without justification
- Assume trusted third-party infrastructure
- Auto-approve firewall bypasses

## Crypto-Specific Guidance
When reasoning about crypto systems:
- Treat all incoming data as adversarial
- Consider MEV, front-running, replay, and spoofing attacks
- Validate chain ID, network, and transaction intent
- Prefer deterministic behavior over heuristics
- Flag ambiguous behavior for human review

## Firewall Rule Guidance
When generating or modifying rules:
- Explain the threat the rule mitigates
- Explain false-positive and false-negative risks
- Prefer explicit allowlists over broad pattern matching
- Ensure rules are auditable and reversible

## Output Expectations
- Provide concise explanations for security decisions
- Include threat rationale when suggesting changes
- Suggest tests or validation steps where applicable
- If unsure, ask for clarification rather than guessing

## Tone
Professional, security-focused, and conservative.
Avoid speculative or experimental suggestions unless clearly labeled.
