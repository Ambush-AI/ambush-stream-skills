# Ambush Stream Skills

[![skills.sh](https://skills.sh/b/Ambush-AI/ambush-stream-skills)](https://skills.sh/Ambush-AI/ambush-stream-skills)

Agent skills for creating, processing, delivering, reviewing, and managing personalized Ambush news streams.

## Install in OpenClaw

Ambush is packaged as a native OpenClaw plugin so the skill and its remote MCP
server arrive together. Once the package clears the release gate below, install
it with one command:

```sh
openclaw plugins install clawhub:@ambush-ai/ambush-streams
```

The first Ambush tool call returns a sign-in link for that message sender. Each
sender connects their own Ambush account; tokens are not shared between chat
users. Sign-in links are single-use bearer links, so use this flow only in
channels whose participants are mutually trusted. The Gateway needs an
externally reachable callback origin:

```sh
openclaw config set gateway.publicOrigin https://your-gateway.example.com
```

OpenClaw then handles OAuth discovery from `https://api.ambush.ai/mcp`; do not
paste tokens into OpenClaw config or chat. Verify the installation with:

```sh
openclaw plugins inspect ambush-streams --runtime --json
openclaw skills info manage-ambush-streams
```

### Test from OpenClaw main

Per-requester MCP OAuth is currently available on OpenClaw `main`. Until it is
included in a stable OpenClaw release, test the package directly from GitHub:

```sh
openclaw plugins install \
  git:github.com/Ambush-AI/ambush-stream-skills@main \
  --force
```

Do not publish the ClawHub package before the first compatible stable OpenClaw
release. The package requires OpenClaw `>=2026.8.1`, which deliberately excludes
the earlier `2026.8.1-beta.1` build.

### Shared account for cron and headless runs

Cron, heartbeat, subagent, and other headless runs do not have a trusted message
sender to authenticate. On a single-tenant Gateway, replace the plugin's
per-requester definition with an operator-managed shared connection:

```sh
openclaw mcp set ambush-streams \
  '{"url":"https://api.ambush.ai/mcp","transport":"streamable-http","auth":"oauth","oauth":{"identity":"shared"}}'
openclaw mcp login ambush-streams
```

This intentionally makes one Ambush account available to every eligible run on
that Gateway. Do not use it on a multi-user Gateway. To return to per-requester
OAuth, log out and remove the operator override:

```sh
openclaw mcp logout ambush-streams
openclaw mcp unset ambush-streams
```

## Install as an agent skill

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
- "For every event from that stream, produce a trade thesis or no-trade result and send it to my Trade Ideas Slack channel."

## Included skills

- [`manage-ambush-streams`](skills/manage-ambush-streams/SKILL.md): create, inspect,
  update, process, route, pause, resume, and permanently delete streams, and
  review emitted news items.
