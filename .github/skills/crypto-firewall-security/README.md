# Crypto Firewall Security Agent Skill

This Agent Skill enhances GitHub Copilot’s coding agent when working in the `crypto-firewall` repository by providing domain-specific security guidance for cryptocurrency firewall logic, threat modeling, and rule design.

The goal is to ensure that AI-assisted contributions remain conservative, auditable, and aligned with best-practice security principles.

## What This Skill Does

When enabled, this skill helps the agent:

- Apply crypto-specific security reasoning
- Design and review firewall rules using a default-deny mindset
- Identify common blockchain and Web3 attack vectors
- Avoid unsafe assumptions about RPCs, APIs, and third-party services
- Produce clearer threat rationales and safer code changes

The skill is loaded automatically and only when relevant to the task.

## When the Skill Is Used

This skill may be activated when the agent is asked to:

- Modify or create firewall rules
- Review security-sensitive code paths
- Analyze crypto transaction handling or validation
- Reason about on-chain or off-chain attack vectors
- Write or update security documentation

## Security Philosophy

The agent is instructed to follow these principles:

- Assume hostile inputs and untrusted networks
- Prefer explicit allowlists over broad pattern matching
- Avoid weakening validation or bypassing safeguards
- Require clear justification for any security trade-offs
- Flag ambiguity or risk for human review

The agent is explicitly instructed **not** to introduce secrets, disable protections, or assume trusted infrastructure.

## Enabling Agent Skills in VS Code

To enable Agent Skills support in VS Code, add the following to your `settings.json`:

```json
{
  "chat.useAgentSkills": true
}
````

Once enabled, VS Code will automatically detect skills located in `.github/skills/` and load them on demand.
