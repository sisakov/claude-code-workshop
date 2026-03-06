import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CodeBlock } from "@/components/shared/CodeBlock";

const modes = [
  {
    id: "interactive",
    title: "Interactive Mode",
    badge: "Default",
    badgeVariant: "default" as const,
    description: "A full REPL-style session with multi-turn conversation, tool use, and context retention across messages.",
    details: "Launch with just `claude` or `claude [initial prompt]`. You can ask follow-up questions, refine requests, and build on previous answers. Claude retains full context for the session.",
    commands: ["claude", "claude 'describe this codebase'"],
    useCases: [
      "Iterative development and debugging",
      "Complex multi-step refactors",
      "Interactive code exploration",
      "Learning and Q&A",
    ],
  },
  {
    id: "non-interactive",
    title: "Non-Interactive Mode",
    badge: "--print",
    badgeVariant: "secondary" as const,
    description: "Single-shot mode — send one prompt, get one response, exit. Ideal for scripting and automation.",
    details: "Use `--print` (or `-p`) to get a single response without staying in a session. Perfect for shell scripts, CI pipelines, and chaining with other tools.",
    commands: [
      "claude -p 'List all TODO comments in src/'",
      "claude --print 'Summarise the changes in this diff' < changes.diff",
      "echo 'fix this bug' | claude -p",
    ],
    useCases: [
      "CI/CD automation",
      "Pre-commit hooks",
      "Shell script integration",
      "Batch processing",
    ],
  },
  {
    id: "plan",
    title: "Plan Mode",
    badge: "shift+tab",
    badgeVariant: "outline" as const,
    description: "Claude proposes a structured plan before touching any code. You review and approve before execution.",
    details: "Activate with Shift+Tab in an interactive session, or type 'enter plan mode'. Claude will outline its approach, identify files to modify, and wait for approval. Reduces unwanted changes on complex tasks.",
    commands: ["# In a session, press Shift+Tab to toggle plan mode"],
    useCases: [
      "Large refactors",
      "Architecture changes",
      "Multi-file features",
      "Any high-risk modification",
    ],
  },
];

const shortcuts = [
  { keys: "Ctrl + C", description: "Cancel the current operation" },
  { keys: "Ctrl + D", description: "Exit Claude Code" },
  { keys: "↑ / ↓", description: "Navigate command history" },
  { keys: "Tab", description: "Autocomplete file paths and commands" },
  { keys: "Shift + Tab", description: "Toggle plan mode" },
  { keys: "Esc", description: "Cancel input / go back" },
];

export function Modes() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge variant="secondary">Core Concepts</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Modes</h1>
        <p className="text-muted-foreground">
          Claude Code has three primary operating modes. Choosing the right one
          dramatically changes how you work with it.
        </p>
      </div>

      <div className="space-y-4">
        {modes.map((mode) => (
          <Card key={mode.id}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="text-lg">{mode.title}</CardTitle>
                <Badge variant={mode.badgeVariant}>{mode.badge}</Badge>
              </div>
              <CardDescription>{mode.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{mode.details}</p>
              <CodeBlock code={mode.commands.join("\n")} />
              <div>
                <p className="text-sm font-medium mb-2">Best for:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {mode.useCases.map((uc) => (
                    <li key={uc} className="text-sm text-muted-foreground flex items-start gap-1.5">
                      <span className="mt-0.5 text-primary text-xs">✓</span>
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Keyboard Shortcuts</h2>
        <Accordion type="single" collapsible className="w-full">
          {shortcuts.map((s) => (
            <AccordionItem key={s.keys} value={s.keys}>
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <kbd className="font-mono text-xs bg-muted border px-2 py-1 rounded">{s.keys}</kbd>
                  <span className="text-sm">{s.description}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground pl-2">
                  Press <kbd className="font-mono text-xs bg-muted border px-1.5 py-0.5 rounded">{s.keys}</kbd> at any
                  point in an interactive session to {s.description.toLowerCase()}.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
