import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { ExternalLink } from "@/components/shared/ExternalLink";
import { mcpTools } from "@/data/mcpTools";
import { Github } from "lucide-react";

const categoryColors = {
  browser: "bg-blue-100 text-blue-700",
  documentation: "bg-green-100 text-green-700",
  planning: "bg-violet-100 text-violet-700",
};

export function McpAgents() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge variant="secondary">Integrations</Badge>
        <h1 className="text-3xl font-bold tracking-tight">MCP & Agents</h1>
        <p className="text-muted-foreground">
          Model Context Protocol (MCP) servers extend Claude Code with external tools —
          browser control, live documentation, planning workflows, and more. Install
          a server once; use it in every session.
        </p>
      </div>

      <Card className="bg-muted/40 border-dashed">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">What is MCP?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            MCP (Model Context Protocol) is an open standard that lets AI models communicate
            with external tools and data sources. Claude Code supports MCP servers that expose
            tools, prompts, and resources. Once added, MCP tools appear automatically in
            Claude Code sessions.
          </p>
          <CodeBlock code={`# Add an MCP server globally
claude mcp add <name> -- <command> [args...]

# List configured MCP servers
claude mcp list

# Remove an MCP server
claude mcp remove <name>`} />
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Featured MCP Tools</h2>
        <Tabs defaultValue={mcpTools[0].id}>
          <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${mcpTools.length}, 1fr)` }}>
            {mcpTools.map((tool) => (
              <TabsTrigger key={tool.id} value={tool.id}>
                {tool.name.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {mcpTools.map((tool) => (
            <TabsContent key={tool.id} value={tool.id} className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <CardTitle>{tool.name}</CardTitle>
                        <Badge
                          variant="outline"
                          className={categoryColors[tool.category]}
                        >
                          {tool.category}
                        </Badge>
                      </div>
                      <CardDescription>{tool.description}</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" asChild className="shrink-0">
                      <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5 mr-1.5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <p className="text-sm font-medium mb-2">Install command</p>
                    <CodeBlock code={tool.installCommand} />
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Features</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {tool.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-primary text-xs shrink-0">✓</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <ExternalLink href={tool.githubUrl} className="text-sm">
                      View on GitHub
                    </ExternalLink>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Agent Patterns</CardTitle>
          <CardDescription>
            Claude Code can orchestrate multi-agent workflows using the Task tool
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Claude Code can spawn sub-agents (using the <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Task</code> tool)
            to handle independent parallel workstreams — one agent researches the codebase
            while another writes tests. This is built-in; no MCP server needed.
          </p>
          <CodeBlock code={`# Example: ask Claude to parallelise work
"Analyse the src/api/ directory and src/components/ directory in parallel,
 then give me a report of which files are missing TypeScript types."`} language="text" />
          <div className="flex items-start gap-2 text-sm bg-muted/60 rounded-md p-3">
            <span className="text-primary mt-0.5 shrink-0">💡</span>
            <span>
              Claude Code has specialised sub-agent types: <strong>Explore</strong> (codebase research),{" "}
              <strong>Plan</strong> (architecture), and <strong>general-purpose</strong> (everything else).
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
