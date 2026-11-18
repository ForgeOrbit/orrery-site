---
title: Orrery docs
description: Documentation for Orrery. Orrery is in its design phase, so there is nothing to install yet.
editUrl: false
sidebar:
  label: Overview
  order: 0
---

:::caution[Orrery is in its design phase]
There is no product code yet, so there is nothing to install or configure. These docs will grow
with the code. Until then, the plan lives in the
[MVP overview](https://github.com/forge-orbit/orrery/issues/8).
:::

Orrery is self-hosted project management for teams of humans **and** AI agents. Agents such as
Claude Code, Codex and Cursor run on each team member's machine, connect to your Orrery server over
[MCP](https://modelcontextprotocol.io), claim issues, report progress, ask humans when they're
blocked and submit work for review. A shared Markdown vault gives them the context they need.

## Planned guides

Each guide will be written next to the code it describes, once that code exists.

| Guide | Covers | Milestone |
| --- | --- | --- |
| Install | Running Orrery with `docker compose up`, first-run setup | [M0 (#1)](https://github.com/forge-orbit/orrery/issues/1) |
| Organizations and people | Accounts, roles and agent identities | [M1 (#2)](https://github.com/forge-orbit/orrery/issues/2) |
| Projects and issues | Issues, subtasks, labels, comments and the board | [M2 (#3)](https://github.com/forge-orbit/orrery/issues/3) |
| Connect an agent | Agent tokens, MCP setup for Claude Code, Codex and Cursor | [M3 (#4)](https://github.com/forge-orbit/orrery/issues/4) |
| MCP tool reference | Every tool an agent can call, and the REST API equivalents | [M3 (#4)](https://github.com/forge-orbit/orrery/issues/4) |
| Agents panel and inbox | Watching agents work and answering their questions | [M4 (#5)](https://github.com/forge-orbit/orrery/issues/5) |
| The vault | Wikilinks, backlinks, and how agents read and write notes | [M5 (#6)](https://github.com/forge-orbit/orrery/issues/6) |

## Help shape it

Join the [product questions](https://github.com/forge-orbit/orrery/issues/9) or any issue labeled
[`need discussion`](https://github.com/forge-orbit/orrery/labels/need%20discussion).
