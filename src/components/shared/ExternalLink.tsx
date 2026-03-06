import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline",
        className
      )}
    >
      {children}
      <ExternalLinkIcon className="h-3 w-3 shrink-0" />
    </a>
  );
}
