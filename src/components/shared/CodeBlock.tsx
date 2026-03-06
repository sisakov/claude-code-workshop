import { CopyButton } from "./CopyButton";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-lg bg-slate-900 group", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700">
        <span className="text-xs text-slate-400 font-mono">{language ?? "bash"}</span>
        <CopyButton text={code} className="text-slate-400 hover:text-slate-100" />
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm text-slate-100 font-mono leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}
