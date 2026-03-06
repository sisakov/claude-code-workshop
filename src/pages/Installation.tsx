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

      <Tabs defaultValue="native">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="native">Native</TabsTrigger>
          <TabsTrigger value="macos">macOS</TabsTrigger>
          <TabsTrigger value="linux">Linux</TabsTrigger>
          <TabsTrigger value="windows">Windows</TabsTrigger>
          <TabsTrigger value="npm">npm / pnpm</TabsTrigger>
        </TabsList>

        <TabsContent value="native" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Native Install <Badge className="ml-2">Recommended</Badge></CardTitle>
              <CardDescription>
                The fastest way to install Claude Code on macOS, Linux, or WSL. No Node.js required.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">macOS, Linux, WSL:</p>
              <CodeBlock code="curl -fsSL https://claude.ai/install.sh | bash" />
              <p className="text-sm text-muted-foreground">
                After install, run <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">claude</code> in
                your terminal. On first launch you'll be prompted to authenticate.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

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

      <Card>
        <CardHeader>
          <CardTitle>Workshop Configuration</CardTitle>
          <CardDescription>
            Configure Claude Code to use the workshop LiteLLM proxy and Bedrock models
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Add the following to{" "}
            <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">~/.claude/settings.json</code>{" "}
            (create the file if it doesn't exist):
          </p>
          <CodeBlock language="json" code={`{
  "env": {
    "ANTHROPIC_BASE_URL": "https://litellm.prod.outshift.ai",
    "ANTHROPIC_AUTH_TOKEN": "sk-***",
    "ANTHROPIC_MODEL": "bedrock/global.anthropic.claude-sonnet-4-6",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "bedrock/global.anthropic.claude-sonnet-4-6",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "bedrock/global.anthropic.claude-opus-4-6-v1",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "bedrock/global.anthropic.claude-haiku-4-5-20251001-v1:0",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  },
  "autoUpdatesChannel": "stable",
  "model": "opus"
}`} />
          <p className="text-sm text-muted-foreground">
            Replace <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">sk-***</code> with your actual token, then apply using one of the methods below.
          </p>

          <p className="text-sm font-medium">Option A — one-liner (heredoc)</p>
          <CodeBlock code={`mkdir -p ~/.claude && cat > ~/.claude/settings.json << 'EOF'
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://litellm.prod.outshift.ai",
    "ANTHROPIC_AUTH_TOKEN": "sk-***",
    "ANTHROPIC_MODEL": "bedrock/global.anthropic.claude-sonnet-4-6",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "bedrock/global.anthropic.claude-sonnet-4-6",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "bedrock/global.anthropic.claude-opus-4-6-v1",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "bedrock/global.anthropic.claude-haiku-4-5-20251001-v1:0",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  },
  "autoUpdatesChannel": "stable",
  "model": "opus"
}
EOF`} />

          <p className="text-sm font-medium">Option B — edit with vi</p>
          <CodeBlock code={`# 1. Create the directory if it doesn't exist
mkdir -p ~/.claude

# 2. Open (or create) the file in vi
vi ~/.claude/settings.json`} />
          <div className="rounded-md border border-muted bg-muted/30 px-4 py-3 text-sm text-muted-foreground space-y-1">
            <p>Inside vi:</p>
            <p><code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">i</code> — enter Insert mode, then paste the JSON above</p>
            <p><code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">Esc</code> — return to Normal mode</p>
            <p><code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">:wq</code> — write the file and quit</p>
          </div>

          <p className="text-sm font-medium">Verify with cat</p>
          <CodeBlock code={`cat ~/.claude/settings.json`} />
          <div className="rounded-md border border-muted bg-muted/30 px-4 py-3 text-sm text-muted-foreground space-y-1">
            <p><strong className="text-foreground">env</strong> — environment variables injected into every Claude Code session. <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">ANTHROPIC_BASE_URL</code> points Claude at the LiteLLM proxy instead of api.anthropic.com.</p>
            <p><strong className="text-foreground">model</strong> — sets the default model tier (<code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">opus</code>, <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">sonnet</code>, or <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">haiku</code>); the <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">ANTHROPIC_DEFAULT_*_MODEL</code> vars map each tier to its Bedrock model ID.</p>
            <p><strong className="text-foreground">autoUpdatesChannel</strong> — pins Claude Code to stable releases only.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
