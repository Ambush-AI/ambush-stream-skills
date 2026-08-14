# Ambush Streams for Claude Code

[![skills.sh](https://skills.sh/b/Ambush-AI/ambush-stream-skills)](https://skills.sh/Ambush-AI/ambush-stream-skills)

Create, review, and manage personalized Ambush news streams from Claude Code.

## Install in Claude Code

Add the Ambush AI marketplace and install the plugin:

```sh
claude plugin marketplace add Ambush-AI/ambush-stream-skills
claude plugin install ambush-streams@ambush-ai
```

Start a new Claude Code session or run `/reload-plugins`. Open `/mcp` to connect
your Ambush account with OAuth, then ask Claude to manage your streams naturally
or invoke `/ambush-streams:manage-ambush-streams` explicitly.

## Install as a standalone agent skill

Install the Ambush stream-management skill with the open skills CLI:

```sh
npx skills add Ambush-AI/ambush-stream-skills --skill manage-ambush-streams
```

To install it globally for Codex without prompts:

```sh
npx skills add Ambush-AI/ambush-stream-skills \
  --skill manage-ambush-streams \
  --agent codex \
  --global \
  --yes
```

The skill declares the production Ambush Streams MCP server at
`https://api.ambush.ai/mcp`. On supported OpenAI surfaces, connect your Ambush
account with OAuth when prompted. Other agent hosts may require configuring that
remote MCP server separately.

## Example requests

- "Create a stream for material cybersecurity incidents affecting Canadian banks."
- "Pause my AI regulation stream."
- "Show the five latest items from my semiconductor supply-chain stream."

## Included skills

- [`manage-ambush-streams`](skills/manage-ambush-streams/SKILL.md): create, inspect,
  update, pause, resume, and permanently delete streams, and review emitted news
  items.
