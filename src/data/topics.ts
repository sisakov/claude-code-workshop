export interface Topic {
  id: string;
  path: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}

export const topics: Topic[] = [
  {
    id: "welcome",
    path: "/",
    label: "Welcome",
    description: "Overview of the Claude Code workshop",
    icon: "Home",
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: "installation",
    path: "/installation",
    label: "Installation",
    description: "Install Claude Code on macOS, Linux, or Windows",
    icon: "Download",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "modes",
    path: "/modes",
    label: "Modes",
    description: "Interactive, non-interactive, and print modes",
    icon: "Layers",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "context",
    path: "/context",
    label: "Context & Memory",
    description: "CLAUDE.md, /init, memory types, and shared memory",
    icon: "Brain",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "commands",
    path: "/commands",
    label: "Commands",
    description: "Slash commands and keyboard shortcuts reference",
    icon: "Terminal",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: "mcp-agents",
    path: "/mcp-agents",
    label: "MCP & Agents",
    description: "Model Context Protocol tools and agent patterns",
    icon: "Puzzle",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "exercises",
    path: "/exercises",
    label: "Exercises",
    description: "Practice prompts to sharpen your Claude Code skills",
    icon: "Dumbbell",
    color: "bg-yellow-100 text-yellow-700",
  },
];
