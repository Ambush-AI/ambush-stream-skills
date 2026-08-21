import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const rootUrl = new URL("../", import.meta.url);

async function readJson(relativePath) {
  return JSON.parse(await readFile(new URL(relativePath, rootUrl), "utf8"));
}

test("declares a dependency-free OpenClaw plugin entry", async () => {
  const packageJson = await readJson("package.json");
  const plugin = (await import(new URL("index.js", rootUrl))).default;

  assert.equal(packageJson.name, "@ambush-ai/ambush-streams");
  assert.deepEqual(packageJson.openclaw.extensions, ["./index.js"]);
  assert.equal(packageJson.openclaw.install.minHostVersion, ">=2026.8.1");
  assert.equal(packageJson.openclaw.build.openclawVersion, "2026.8.1");
  assert.equal(packageJson.dependencies, undefined);
  assert.equal(plugin.id, "ambush-streams");
  assert.equal(typeof plugin.register, "function");
});

test("registers Ambush with requester-scoped OAuth and the current API skill", async () => {
  const manifest = await readJson("openclaw.plugin.json");
  const server = manifest.mcpServers["ambush-streams"];
  const skill = await readFile(
    new URL("skills/manage-ambush-streams/SKILL.md", rootUrl),
    "utf8",
  );

  assert.equal(manifest.id, "ambush-streams");
  assert.deepEqual(manifest.skills, ["./skills"]);
  assert.equal(server.url, "https://api.ambush.ai/mcp");
  assert.equal(server.transport, "streamable-http");
  assert.equal(server.auth, "oauth");
  assert.equal(server.oauth.identity, "per-requester");
  assert.match(skill, /^name: manage-ambush-streams$/m);
  assert.match(skill, /Process and deliver every new event/);
});
