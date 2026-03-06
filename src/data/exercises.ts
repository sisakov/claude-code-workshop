export interface Exercise {
  id: string;
  title: string;
  description: string;
  prompt: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
}

export const exercises: Exercise[] = [
  {
    id: "vibe-certificate",
    title: "Vibe Coding Certificate",
    description:
      "Ask Claude Code to generate a complete, deployable HTML certificate page with GitHub Actions workflow.",
    prompt: `Create web pages that I can host on GitHub Pages, that will look like a vibe coding certificate.
The certificate should have official design, decorative borders, fields for recipient/course/date/signature,
parchment color scheme, responsive, print-friendly, QR code placeholder, GitHub Actions workflow.`,
    difficulty: "intermediate",
    tags: ["HTML", "CSS", "GitHub Actions", "GitHub Pages"],
  },
  {
    id: "claude-md-init",
    title: "Bootstrap CLAUDE.md",
    description:
      "Have Claude Code analyse your project and generate a comprehensive CLAUDE.md with commands, architecture notes, and coding conventions.",
    prompt: `Use /init to create a CLAUDE.md for this project. Then expand it with:
1. Key npm/build commands
2. Project architecture overview (max 3 paragraphs)
3. Coding conventions (TypeScript strictness, naming, file organisation)
4. Common gotchas specific to this codebase`,
    difficulty: "beginner",
    tags: ["CLAUDE.md", "Context", "Best practices"],
  },
  {
    id: "mcp-browser-debug",
    title: "Browser Debug Session",
    description:
      "Use the Chrome DevTools MCP to have Claude Code diagnose a front-end bug by inspecting the live DOM.",
    prompt: `Open Chrome to localhost:5173 using the Chrome DevTools MCP.
Take a screenshot, then inspect the console for any errors.
If there are errors, read the relevant source files and fix them.
Confirm the fix by taking a second screenshot.`,
    difficulty: "advanced",
    tags: ["MCP", "Chrome DevTools", "Debugging"],
  },
  {
    id: "refactor-with-plan",
    title: "Refactor with Plan Mode",
    description:
      "Use Claude Code's plan mode to safely refactor a module before touching any code.",
    prompt: `Enter plan mode and propose a refactor for the largest file in src/.
The refactor should:
- Reduce cognitive complexity
- Extract reusable helpers
- Improve TypeScript types
Show the plan, wait for my approval, then implement it.`,
    difficulty: "intermediate",
    tags: ["Plan mode", "Refactoring", "TypeScript"],
  },
  {
    id: "context7-docs",
    title: "API Discovery with Context7",
    description:
      "Use the Context7 MCP to look up the latest React Query v5 API and write a custom hook.",
    prompt: `Using the Context7 MCP, look up the latest React Query v5 documentation.
Then create a custom useUserData hook that:
- Fetches /api/users/:id
- Handles loading, error, and success states
- Uses staleTime of 5 minutes
- Includes TypeScript types for the response`,
    difficulty: "intermediate",
    tags: ["Context7", "MCP", "React Query", "TypeScript"],
  },
  {
    id: "github-actions",
    title: "CI/CD Pipeline Setup",
    description:
      "Ask Claude Code to create a complete GitHub Actions pipeline for your project.",
    prompt: `Create a GitHub Actions CI/CD pipeline for this project that:
1. Runs on every push to main and on pull requests
2. Installs dependencies with npm ci
3. Runs TypeScript type checking
4. Builds the project
5. Deploys to GitHub Pages on pushes to main only
Include proper caching for node_modules.`,
    difficulty: "beginner",
    tags: ["GitHub Actions", "CI/CD", "Deployment"],
  },
];
