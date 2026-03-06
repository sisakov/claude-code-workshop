import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { ExternalLink } from "@/components/shared/ExternalLink";
import { commands, keyboardShortcuts } from "@/data/commands";

const categoryLabels: Record<string, string> = {
  model: "Model Control",
  session: "Session",
  navigation: "Navigation",
  info: "Information",
};

const categoryColors: Record<string, string> = {
  model: "bg-violet-100 text-violet-700",
  session: "bg-blue-100 text-blue-700",
  navigation: "bg-green-100 text-green-700",
  info: "bg-orange-100 text-orange-700",
};

export function Commands() {
  const categories = [...new Set(commands.map((c) => c.category))];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge variant="secondary">Reference</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Commands</h1>
        <p className="text-muted-foreground">
          Slash commands are typed directly in Claude Code's interactive session.
          See the{" "}
          <ExternalLink href="https://docs.anthropic.com/en/docs/claude-code/cli-reference">
            full CLI reference
          </ExternalLink>
          .
        </p>
      </div>

      <div className="space-y-6">
        {categories.map((category) => {
          const categoryCommands = commands.filter((c) => c.category === category);
          return (
            <div key={category} className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">{categoryLabels[category]}</h2>
                <Badge className={categoryColors[category]} variant="outline">
                  {categoryCommands.length} commands
                </Badge>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {categoryCommands.map((cmd) => (
                  <Card key={cmd.name}>
                    <CardHeader className="py-4">
                      <div className="flex items-start gap-4">
                        <code className="font-mono text-sm font-semibold bg-muted px-2 py-1 rounded shrink-0">
                          {cmd.name}
                        </code>
                        <div className="space-y-1 min-w-0">
                          <CardTitle className="text-sm font-normal leading-snug">
                            {cmd.description}
                          </CardTitle>
                          {cmd.usage && (
                            <code className="text-xs text-muted-foreground font-mono">
                              {cmd.usage}
                            </code>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <Separator />
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Keyboard Shortcuts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {keyboardShortcuts.map((shortcut) => (
            <Card key={shortcut.keys.join("+")} className="flex">
              <CardContent className="flex items-center gap-3 py-3 px-4">
                <div className="flex items-center gap-1 shrink-0">
                  {shortcut.keys.map((key, i) => (
                    <span key={key} className="flex items-center gap-1">
                      <kbd className="font-mono text-xs bg-muted border px-1.5 py-0.5 rounded">
                        {key}
                      </kbd>
                      {i < shortcut.keys.length - 1 && (
                        <span className="text-muted-foreground text-xs">+</span>
                      )}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{shortcut.description}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-base">Custom Slash Commands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            You can create custom slash commands by adding <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">.md</code>{" "}
            files to <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">.claude/commands/</code> in
            your project (or <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">~/.claude/commands/</code> for global commands).
          </p>
          <CodeBlock code={`# .claude/commands/review.md
Review this code for security vulnerabilities,
performance issues, and TypeScript best practices.
Focus on $ARGUMENTS.`} language="markdown" />
          <p className="text-sm text-muted-foreground">
            Use the command with <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">/review src/api/auth.ts</code> — the
            file path becomes <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">$ARGUMENTS</code>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
