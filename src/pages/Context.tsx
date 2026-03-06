import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CodeBlock } from "@/components/shared/CodeBlock";

const claudeMdExample = `# Project: My Web App

## Build & Dev Commands
\`\`\`
npm run dev      # Start dev server on :5173
npm run build    # Production build → dist/
npm run test     # Run Vitest unit tests
npm run lint     # ESLint + Prettier check
\`\`\`

## Architecture
- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS v3 + shadcn/ui
- **State**: React Query v5 for server state, Zustand for UI state
- **Routing**: React Router v6 with HashRouter for GitHub Pages

## Conventions
- Components: PascalCase files in \`src/components/\`
- Hooks: camelCase prefixed with \`use\` in \`src/hooks/\`
- All new files must have TypeScript strict mode compatible types
- Prefer named exports over default exports

## Important Notes
- NEVER commit .env files
- API base URL is in \`src/config.ts\`, not hardcoded
- Use \`cn()\` from \`@/lib/utils\` for conditional classNames`;

const memoryTypes = [
  {
    id: "claude-md",
    title: "CLAUDE.md (Project Memory)",
    description:
      "A markdown file in your project root that Claude reads automatically every session. Contains build commands, architecture notes, and coding conventions.",
    tip: "Run `/init` to generate one automatically from your project.",
    scope: "Project",
    persistence: "Permanent",
  },
  {
    id: "user-md",
    title: "~/.claude/CLAUDE.md (User Memory)",
    description:
      "A global CLAUDE.md in your home directory. Applies to every project. Use it for personal preferences, editor config, and coding style.",
    tip: "Store things like 'always use TypeScript strict mode' or 'I prefer functional components'.",
    scope: "Global",
    persistence: "Permanent",
  },
  {
    id: "session",
    title: "Session Memory",
    description:
      "Everything you say in a conversation is remembered until the session ends. Use `/compact` to summarise long sessions and free up tokens.",
    tip: "Use `#` prefix to add a strong emphasis reminder mid-session.",
    scope: "Session",
    persistence: "Temporary",
  },
  {
    id: "shared",
    title: "Shared Memory (Team)",
    description:
      "Commit CLAUDE.md to version control so all team members share the same Claude context automatically.",
    tip: "Add project-specific linting rules, API conventions, and architecture decisions to the shared CLAUDE.md.",
    scope: "Team",
    persistence: "Permanent",
  },
];

export function Context() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge variant="secondary">Context & Memory</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Context & Memory</h1>
        <p className="text-muted-foreground">
          Claude Code has a rich memory system. Understanding it lets you keep Claude
          consistently aligned with your project's standards — across sessions and across
          teammates.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Memory Types</h2>
        <Accordion type="multiple" className="w-full">
          {memoryTypes.map((mem) => (
            <AccordionItem key={mem.id} value={mem.id}>
              <AccordionTrigger>
                <div className="flex items-center gap-3 text-left">
                  <span className="font-mono text-sm font-semibold">{mem.title}</span>
                  <div className="flex gap-1.5 ml-2">
                    <Badge variant="outline" className="text-xs">{mem.scope}</Badge>
                    <Badge
                      variant={mem.persistence === "Permanent" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {mem.persistence}
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-sm text-muted-foreground">{mem.description}</p>
                <div className="flex items-start gap-2 text-sm bg-muted/60 rounded-md p-3">
                  <span className="text-primary mt-0.5 shrink-0">💡</span>
                  <span>{mem.tip}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">CLAUDE.md Deep Dive</h2>
        <Tabs defaultValue="example">
          <TabsList>
            <TabsTrigger value="example">Example File</TabsTrigger>
            <TabsTrigger value="init">Using /init</TabsTrigger>
            <TabsTrigger value="tips">Pro Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="example">
            <Card>
              <CardHeader>
                <CardTitle>Sample CLAUDE.md</CardTitle>
                <CardDescription>
                  A real-world CLAUDE.md for a React + Vite project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock code={claudeMdExample} language="markdown" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="init">
            <Card>
              <CardHeader>
                <CardTitle>Generate with /init</CardTitle>
                <CardDescription>
                  Claude analyses your repo and writes the CLAUDE.md for you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock code={`# Inside a Claude Code session:
/init

# Claude will:
# 1. Read your package.json, README, and config files
# 2. Detect your stack and conventions
# 3. Write a CLAUDE.md tailored to your project`} />
                <p className="text-sm text-muted-foreground">
                  After generation, review the file and add anything project-specific
                  Claude might have missed — secret locations, internal API conventions, etc.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips">
            <Card>
              <CardHeader>
                <CardTitle>Pro Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Keep CLAUDE.md under 500 lines — it's loaded into every session's context window",
                    "Use ## sections for easy scanning: Build Commands, Architecture, Conventions, Gotchas",
                    "Add a '## Do NOT' section for hard guardrails (e.g., never modify migrations directly)",
                    "Commit CLAUDE.md to git so the whole team benefits automatically",
                    "Use <!-- comments --> for notes to yourself that Claude should ignore",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 text-primary shrink-0">→</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-base">Shared Memory in Teams</CardTitle>
          <CardDescription>
            Commit your project's CLAUDE.md to version control
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <CodeBlock code={`# Add to git
git add CLAUDE.md
git commit -m "Add CLAUDE.md for Claude Code context"

# Now every teammate who runs Claude Code in this repo
# automatically gets the shared project context`} />
          <p className="text-sm text-muted-foreground">
            Team members can also maintain a personal <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">~/.claude/CLAUDE.md</code>{" "}
            for individual preferences that layer on top of the project's CLAUDE.md.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
