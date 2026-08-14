# Ambush Stream Skills

[![skills.sh](https://skills.sh/b/Ambush-AI/ambush-stream-skills)](https://skills.sh/Ambush-AI/ambush-stream-skills)

Agent skills for creating, reviewing, and managing personalized Ambush news streams.

## Install

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
