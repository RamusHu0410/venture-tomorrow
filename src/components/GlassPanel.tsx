import { cn } from "@/lib/cn";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl metal-surface backdrop-blur-sm",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-noise opacity-[0.04] mix-blend-overlay" aria-hidden />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-silver/40 to-transparent" aria-hidden />
      {children}
    </div>
  );
}
