# @aogusto/arui-mcp

An MCP server that teaches AI agents how to use [arui](https://arui.vercel.app), the React component library built on Apple HIG with a glassmorphism material.

Point your coding agent at it and the agent can look up components, their props, real usage examples, the design guide, and the install contract, so it writes arui code that actually compiles and looks right.

## What it gives an agent

Five tools, served from a manifest generated from the arui docs (never hand-written, so it stays in sync):

- `list_components(category?)` — every component with a one-line description.
- `get_component(name)` — import line, curated props, and live examples for one component.
- `search_components(query)` — find components by use case ("date picker", "toast", "command palette").
- `get_design_guide(topic?)` — the Apple HIG usage guide with the glassmorphism material, tokens, motion, and accessibility rules.
- `get_setup()` — how to install arui and wire the Tailwind v4 theme.

## Install

### Claude Code

```bash
claude mcp add arui -- npx -y @aogusto/arui-mcp
```

### Cursor, or any client that reads an `mcpServers` block

```json
{
  "mcpServers": {
    "arui": {
      "command": "npx",
      "args": ["-y", "@aogusto/arui-mcp"]
    }
  }
}
```

That is it. The server runs on stdio and ships its knowledge bundled, so there is nothing to configure.

## License

MIT
