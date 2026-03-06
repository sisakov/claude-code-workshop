import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Download,
  Layers,
  Brain,
  Terminal,
  Puzzle,
  Dumbbell,
} from "lucide-react";
import { topics } from "@/data/topics";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

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

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-5 border-b">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <Terminal className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold leading-none">Claude Code</p>
            <p className="text-xs text-muted-foreground mt-0.5">Workshop</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="px-2 space-y-1">
          {topics.map((topic) => {
            const Icon = iconMap[topic.icon as IconName] ?? Home;
            const isActive =
              topic.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(topic.path);

            return (
              <NavLink
                key={topic.id}
                to={topic.path}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {topic.label}
              </NavLink>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="px-4 py-3 border-t">
        <p className="text-xs text-muted-foreground">
          Claude Code Workshop · 2025
        </p>
      </div>
    </div>
  );
}
