import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { ExternalLink } from "@/components/shared/ExternalLink";

export function Installation() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge variant="secondary">Getting Started</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <p className="text-muted-foreground">
          Install Claude Code globally via npm. It works on macOS, Linux, and Windows
          (via WSL2).{" "}
          <ExternalLink href="https://docs.anthropic.com/en/docs/claude-code/overview">
            Read the official docs
          </ExternalLink>
        </p>
      </div>

      <Tabs defaultValue="macos">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="macos">macOS</TabsTrigger>
          <TabsTrigger value="linux">Linux</TabsTrigger>
          <TabsTrigger value="windows">Windows</TabsTrigger>
          <TabsTrigger value="npm">npm / pnpm</TabsTrigger>
        </TabsList>

        <TabsContent value="macos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>macOS</CardTitle>
              <CardDescription>
                Requires Node.js 18+. Install via npm or use the Mac app.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock code="npm install -g @anthropic-ai/claude-code" />
              <p className="text-sm text-muted-foreground">
                After install, run <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">claude</code> in
                your terminal. On first launch you'll be prompted to authenticate.
              </p>
              <CodeBlock code={`# Verify installation
claude --version

# Start a session
claude`} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="linux" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Linux</CardTitle>
              <CardDescription>
                Tested on Ubuntu 20.04+, Debian, and Fedora. Requires Node.js 18+.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock code={`# Install Node.js 20 (if needed)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Claude Code
npm install -g @anthropic-ai/claude-code`} />
              <CodeBlock code={`# Verify
claude --version`} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="windows" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Windows (WSL2)</CardTitle>
              <CardDescription>
                Claude Code runs best inside WSL2 on Windows. Native Windows support is limited.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock code={`# 1. Enable WSL2
wsl --install

# 2. Open Ubuntu in WSL, then install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install Claude Code
npm install -g @anthropic-ai/claude-code`} language="powershell" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="npm" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Package managers</CardTitle>
              <CardDescription>
                Use npm, pnpm, or bun — whatever you prefer.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock code={`# npm (recommended)
npm install -g @anthropic-ai/claude-code

# pnpm
pnpm add -g @anthropic-ai/claude-code

# bun
bun add -g @anthropic-ai/claude-code`} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Authentication</CardTitle>
          <CardDescription>Set your Anthropic API key</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock code={`# Option 1 — environment variable
export ANTHROPIC_API_KEY=sk-ant-...

# Option 2 — Claude Code will prompt on first run and store the key
claude`} />
          <p className="text-sm text-muted-foreground">
            Get an API key at{" "}
            <ExternalLink href="https://console.anthropic.com">
              console.anthropic.com
            </ExternalLink>
            . The key is stored in <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">~/.claude/</code>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
