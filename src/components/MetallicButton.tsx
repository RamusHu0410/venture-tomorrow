"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface MetallicButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function MetallicButton({
  children,
  href = "#",
  variant = "primary",
  className,
}: MetallicButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      initial="rest"
      animate="rest"
      className={cn(
        "group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 font-heading text-sm font-medium tracking-wide transition-colors",
        isPrimary
          ? "text-graphite"
          : "text-chrome border border-silver/30",
        className
      )}
      style={
        isPrimary
          ? {
              background:
                "linear-gradient(180deg, #f5f7fa 0%, #d7dbe1 45%, #a9adb6 55%, #eef0f3 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.25), 0 8px 20px -8px rgba(0,0,0,0.6)",
            }
          : {
              background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }
      }
    >
      <motion.span
        aria-hidden
        variants={{
          rest: { x: "-120%" },
          hover: { x: "120%" },
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 skew-x-[-20deg] bg-white/40 blur-md"
      />
      <span className="relative z-20">{children}</span>
      {!isPrimary && (
        <span className="relative z-20 ml-2 text-blue transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </motion.a>
  );
}
