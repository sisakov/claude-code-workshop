import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { topics } from "@/data/topics";

interface TopBarProps {
  sidebarOpen: boolean;
  onToggle: () => void;
}

export function TopBar({ sidebarOpen, onToggle }: TopBarProps) {
  const location = useLocation();
  const currentTopic = topics.find((t) =>
    t.path === "/" ? location.pathname === "/" : location.pathname.startsWith(t.path)
  );

  return (
    <header className="h-14 border-b bg-background/95 backdrop-blur flex items-center px-4 gap-3 lg:hidden sticky top-0 z-30">
      <Button variant="ghost" size="icon" onClick={onToggle} className="shrink-0">
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      <div className="flex items-center gap-2 min-w-0">
        <span className="font-semibold text-sm truncate">
          {currentTopic?.label ?? "Claude Code Workshop"}
        </span>
      </div>
    </header>
  );
}
