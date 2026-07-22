import { cn } from "@/lib/cn";

interface TechLabelProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export function TechLabel({ children, className, dot = true }: TechLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.28em] text-silver/70",
        className
      )}
    >
      {dot && <span className="h-1 w-1 rounded-full bg-blue shadow-[0_0_8px_2px_rgba(95,168,255,0.7)]" />}
      {children}
    </div>
  );
}
