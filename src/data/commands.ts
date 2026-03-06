export interface Command {
  name: string;
  description: string;
  usage?: string;
  category: "model" | "session" | "navigation" | "info";
}

export const commands: Command[] = [
  {
    name: "/model",
    description: "Switch the AI model mid-session without losing context",
    usage: "/model claude-opus-4-5",
    category: "model",
  },
  {
    name: "/context",
    description: "Show current context window usage and token counts",
    usage: "/context",
    category: "info",
  },
  {
    name: "/stats",
    description: "Display session statistics including tokens used and cost",
    usage: "/stats",
    category: "info",
  },
  {
    name: "/cost",
    description: "Show the cost breakdown for the current session",
    usage: "/cost",
    category: "info",
  },
  {
    name: "/exit",
    description: "Exit Claude Code and return to the terminal",
    usage: "/exit",
    category: "session",
  },
  {
    name: "/rewind",
    description: "Undo the last action or message in the conversation",
    usage: "/rewind",
    category: "navigation",
  },
  {
    name: "/clear",
    description: "Clear the conversation history and start fresh",
    usage: "/clear",
    category: "session",
  },
  {
    name: "/help",
    description: "Show all available slash commands and keyboard shortcuts",
    usage: "/help",
    category: "info",
  },
  {
    name: "/init",
    description: "Initialize a CLAUDE.md file in the current project",
    usage: "/init",
    category: "session",
  },
  {
    name: "/compact",
    description: "Compact the conversation history to reduce token usage",
    usage: "/compact",
    category: "session",
  },
];

export const keyboardShortcuts = [
  { keys: ["Ctrl", "C"], description: "Cancel current operation" },
  { keys: ["Ctrl", "D"], description: "Exit Claude Code" },
  { keys: ["↑", "↓"], description: "Navigate command history" },
  { keys: ["Tab"], description: "Autocomplete file paths" },
  { keys: ["Esc"], description: "Cancel / go back" },
];
