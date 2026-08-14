# Ambush Feed Skills

[![skills.sh](https://skills.sh/b/Ambush-AI/ambush-feed-skills)](https://skills.sh/Ambush-AI/ambush-feed-skills)

Agent skills for creating, reviewing, and managing personalized Ambush news feeds.

## Install

Install the Ambush feed-management skill with the open skills CLI:

```sh
npx skills add Ambush-AI/ambush-feed-skills --skill manage-ambush-feeds
```

To install it globally for Codex without prompts:

```sh
npx skills add Ambush-AI/ambush-feed-skills \
  --skill manage-ambush-feeds \
  --agent codex \
  --global \
  --yes
```

The skill declares the production Ambush Feeds MCP server at
`https://api.ambush.ai/mcp`. On supported OpenAI surfaces, connect your Ambush
account with OAuth when prompted. Other agent hosts may require configuring that
remote MCP server separately.

## Example requests

- "Create a feed for material cybersecurity incidents affecting Canadian banks."
- "Pause my AI regulation feed."
- "Show the five latest items from my semiconductor supply-chain feed."

## Included skills

- [`manage-ambush-feeds`](skills/manage-ambush-feeds/SKILL.md): create, inspect,
  update, pause, resume, and permanently delete feeds, and review emitted news
  items.
