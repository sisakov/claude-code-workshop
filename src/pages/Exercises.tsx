import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/CopyButton";
import { exercises } from "@/data/exercises";
import { cn } from "@/lib/utils";

const difficultyColors = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-orange-100 text-orange-700",
  advanced: "bg-red-100 text-red-700",
};

export function Exercises() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge variant="secondary">Practice</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Exercises</h1>
        <p className="text-muted-foreground">
          Copy any prompt, paste it into Claude Code, and build something real.
          These exercises cover the full range of Claude Code capabilities — from
          bootstrapping projects to MCP integrations.
        </p>
      </div>

      <div className="space-y-4">
        {exercises.map((exercise) => (
          <Card key={exercise.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center flex-wrap gap-2">
                    <CardTitle className="text-base">{exercise.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className={cn("text-xs", difficultyColors[exercise.difficulty])}
                    >
                      {exercise.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>{exercise.description}</CardDescription>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exercise.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative rounded-lg border bg-muted/40">
                <div className="flex items-center justify-between px-4 py-2 border-b">
                  <span className="text-xs text-muted-foreground font-medium">Prompt</span>
                  <CopyButton text={exercise.prompt} />
                </div>
                <pre className="p-4 text-sm leading-relaxed whitespace-pre-wrap font-mono text-foreground/80 overflow-x-auto">
                  {exercise.prompt}
                </pre>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(exercise.prompt)}
                >
                  Copy Prompt
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-dashed bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">Tips for Better Results</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              "Open Claude Code in your project directory before pasting a prompt",
              "Paste prompts into an interactive session, not as one-liners",
              "After Claude finishes, ask it to run the build and fix any errors",
              "Use plan mode (Shift+Tab) for complex exercises before Claude touches files",
              "Commit often — use `git diff` to review changes before accepting them",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5 text-primary shrink-0">→</span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
