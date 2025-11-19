# Claude Code vs Kimi-K2: Agentic Coding Comparison

This repository contains the results of an experimental comparison between Claude Code (using Claude Sonnet) and Kimi-K2 models connected to Claude Code through a custom proxy server.
See my blog post [here](https://ai-practice.hashnode.dev/using-claude-code-with-kimi-k2-real-world-experiment)

## Experiment Overview

Both AI models were given the **identical task** from `blog.md`: build a fully functioning personal blog website using Next.js with Tailwind CSS, markdown parsing, YAML frontmatter support, and a responsive sidebar navigation.

### Starting Prompt
```
Read the task from file ../blog.md and implement the project.
Use port 3010 for this app.
```

## Repository Structure

```
.
├── blog.md                 # Original task specification
├── claude/                 # Claude Code implementation
│   └── blog-website/
└── kimi-k2-resoning/       # Kimi-K2 (reasoning mode) implementation
```

## Implementations

### Claude Code
- Model: Claude Sonnet 4.5
- Location: `claude/blog-website/`
- Native Claude Code integration

### Kimi-K2 Experiments
- Models: Kimi-K2 (via OpenRouter API)
- Modes tested:
  - **thinking**: Standard reasoning approach
  - **reasoning**: Enhanced reasoning capabilities
- Connected through custom proxy server


## How to Run the Applications

Each implementation is a standalone Next.js application that can be run independently.

### Claude Code Implementation
```bash
cd claude/blog-website
npm install
npm run dev
```
Visit http://localhost:3011 to view the application.

### Kimi-K2 (Reasoning Mode) Implementation
```bash
cd kimi-k2-resoning
npm install
npm run dev
```
Visit http://localhost:3012 to view the application.

## Related Resources

- **Proxy Server**: [claude-code-proxy](https://github.com/nikolaev-fb/claude-code-proxy) - Custom proxy to connect Claude Code with OpenRouter API models
- **Blog Post**: [Coming soon]

## Purpose

This experiment explores how different AI models approach the same coding task when operating through the Claude Code interface, comparing:
- Code organization and architecture decisions
- Completeness of implementation
- Problem-solving approaches
- Code quality and best practices
- Token usage
- Costs
- Speed

## Notes

- Each model received the exact same starting prompt
- No human intervention during implementation
- All implementations were generated autonomously by the respective AI models
