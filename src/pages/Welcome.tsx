import { useNavigate } from "react-router-dom";
import {
  Home,
  Download,
  Layers,
  Brain,
  Terminal,
  Puzzle,
  Dumbbell,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { topics } from "@/data/topics";
import { cn } from "@/lib/utils";

const iconMap = {
  Home,
  Download,
  Layers,
  Brain,
  Terminal,
  Puzzle,
  Dumbbell,
} as const;

type IconName = keyof typeof iconMap;

export function Welcome() {
  const navigate = useNavigate();
  const navTopics = topics.filter((t) => t.id !== "welcome");

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Interactive Workshop</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Claude Code Workshop
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A hands-on guide to mastering Claude Code — Anthropic's AI-powered
          terminal assistant. Learn installation, modes, context management, MCP
          integrations, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {navTopics.map((topic) => {
          const Icon = iconMap[topic.icon as IconName] ?? Terminal;

          return (
            <Card
              key={topic.id}
              className="cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group"
              onClick={() => navigate(topic.path)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={cn("p-2 rounded-lg w-fit", topic.color)}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-base mt-3">{topic.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{topic.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="rounded-lg border bg-muted/50 p-6 space-y-3">
        <h2 className="font-semibold">Prerequisites</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">→</span>
            Node.js 18+ installed on your machine
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">→</span>
            An Anthropic API key (get one at console.anthropic.com)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">→</span>
            Basic familiarity with the terminal
          </li>
        </ul>
      </div>
    </div>
  );
}
