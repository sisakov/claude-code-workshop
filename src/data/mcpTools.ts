export interface McpTool {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  installCommand: string;
  features: string[];
  category: "browser" | "documentation" | "planning";
}

export const mcpTools: McpTool[] = [
  {
    id: "chrome-devtools",
    name: "Chrome DevTools MCP",
    description:
      "Connect Claude Code directly to Chrome DevTools — inspect DOM, run JS, capture network requests, and screenshot pages without leaving your terminal.",
    githubUrl: "https://github.com/ChromeDevTools/chrome-devtools-mcp",
    installCommand:
      'claude mcp add chrome-devtools -- npx -y @chrome-devtools/mcp@latest',
    features: [
      "DOM inspection and manipulation",
      "JavaScript execution in browser context",
      "Network request monitoring",
      "Screenshot and page capture",
      "Console log streaming",
    ],
    category: "browser",
  },
  {
    id: "context7",
    name: "Context7",
    description:
      "Bring up-to-date library documentation directly into Claude's context. Never deal with hallucinated APIs again — Context7 fetches real docs from the source.",
    githubUrl: "https://github.com/upstash/context7",
    installCommand:
      "claude mcp add context7 -- npx -y @upstash/context7-mcp@latest",
    features: [
      "Real-time documentation lookup",
      "Supports hundreds of libraries",
      "Code example retrieval",
      "Version-specific docs",
      "Reduces API hallucinations",
    ],
    category: "documentation",
  },
  {
    id: "plannotator",
    name: "Plannotator",
    description:
      "A planning and annotation MCP tool that helps Claude Code create structured implementation plans with inline annotations and approval workflows.",
    githubUrl: "https://github.com/backnotprop/plannotator",
    installCommand:
      "claude mcp add plannotator -- npx -y @backnotprop/plannotator-mcp@latest",
    features: [
      "Structured plan generation",
      "Inline code annotations",
      "Approval workflow support",
      "Plan versioning",
      "Integration with Claude Code plan mode",
    ],
    category: "planning",
  },
];
