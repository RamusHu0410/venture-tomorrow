"use client";

import { motion } from "framer-motion";

interface Node {
  id: string;
  x: number;
  y: number;
  r: number;
}

interface Link {
  from: string;
  to: string;
  delay: number;
}

const NODES: Node[] = [
  { id: "core", x: 300, y: 300, r: 7 },
  { id: "a", x: 140, y: 150, r: 4 },
  { id: "b", x: 460, y: 130, r: 4 },
  { id: "c", x: 520, y: 320, r: 5 },
  { id: "d", x: 420, y: 470, r: 4 },
  { id: "e", x: 180, y: 480, r: 4 },
  { id: "f", x: 90, y: 330, r: 4 },
  { id: "g", x: 300, y: 90, r: 3 },
  { id: "h", x: 540, y: 460, r: 3 },
  { id: "i", x: 80, y: 130, r: 3 },
];

const LINKS: Link[] = [
  { from: "core", to: "a", delay: 0 },
  { from: "core", to: "b", delay: 0.3 },
  { from: "core", to: "c", delay: 0.6 },
  { from: "core", to: "d", delay: 0.9 },
  { from: "core", to: "e", delay: 1.2 },
  { from: "core", to: "f", delay: 1.5 },
  { from: "a", to: "g", delay: 0.2 },
  { from: "b", to: "g", delay: 0.5 },
  { from: "c", to: "h", delay: 0.8 },
  { from: "d", to: "h", delay: 1.1 },
  { from: "f", to: "i", delay: 1.4 },
  { from: "a", to: "i", delay: 1.7 },
];

const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

export function NetworkVisual() {
  return (
    <div className="relative aspect-square w-full max-w-xl mx-auto">
      <svg
        viewBox="0 0 600 600"
        className="h-full w-full"
        role="img"
        aria-label="Abstract diagram of a connected innovation network"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5fa8ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#5fa8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c0c4cc" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#f5f7fa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c0c4cc" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* concentric blueprint rings */}
        {[110, 170, 230].map((r, i) => (
          <motion.circle
            key={r}
            cx={300}
            cy={300}
            r={r}
            fill="none"
            stroke="#c0c4cc"
            strokeOpacity={0.12}
            strokeDasharray={i === 1 ? "2 6" : undefined}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
          />
        ))}

        {/* core glow */}
        <circle cx={300} cy={300} r={90} fill="url(#coreGlow)" />

        {/* connection lines */}
        {LINKS.map((link, idx) => {
          const from = nodeMap[link.from];
          const to = nodeMap[link.to];
          return (
            <motion.line
              key={idx}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#c0c4cc"
              strokeOpacity={0.22}
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.4, delay: link.delay, ease: "easeInOut" }}
            />
          );
        })}

        {/* traveling glow pulses along each link */}
        {LINKS.map((link, idx) => {
          const from = nodeMap[link.from];
          const to = nodeMap[link.to];
          return (
            <motion.circle
              key={`pulse-${idx}`}
              r={2.2}
              fill="#5fa8ff"
              initial={{ opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 0.9, 0],
              }}
              transition={{
                duration: 2.6,
                delay: 2 + link.delay,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* nodes */}
        {NODES.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r + 6}
              fill="none"
              stroke="#5fa8ff"
              strokeOpacity={0.25}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{
                duration: 3,
                delay: 1 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.id === "core" ? "#f5f7fa" : "#c0c4cc"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
            />
          </g>
        ))}

        {/* floating particles */}
        {Array.from({ length: 14 }).map((_, i) => {
          const x = 40 + ((i * 137) % 520);
          const y = 40 + ((i * 91) % 520);
          return (
            <motion.circle
              key={`particle-${i}`}
              cx={x}
              cy={y}
              r={1}
              fill="#c0c4cc"
              initial={{ opacity: 0.1 }}
              animate={{ y: [y, y - 18, y], opacity: [0.1, 0.5, 0.1] }}
              transition={{
                duration: 6 + (i % 5),
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* corner blueprint marks */}
        <g stroke="#c0c4cc" strokeOpacity={0.3} strokeWidth={1}>
          <path d="M20 40 V20 H40" fill="none" />
          <path d="M560 20 H580 V40" fill="none" />
          <path d="M20 560 V580 H40" fill="none" />
          <path d="M580 560 V580 H560" fill="none" />
        </g>
      </svg>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-silver/40">
        Fig. 01 — Venture Network Topology
      </div>
    </div>
  );
}
