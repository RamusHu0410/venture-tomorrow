"use client";

import { motion, type Variants } from "framer-motion";
import { GridBackground, NoiseOverlay } from "@/components/GridBackground";
import { TechLabel } from "@/components/TechLabel";
import { MetallicButton } from "@/components/MetallicButton";
import { NetworkVisual } from "@/components/NetworkVisual";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function IntroPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-graphite">
      <GridBackground />
      <NoiseOverlay />

      {/* top hairline nav-ish rule with system label */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 sm:px-10">
        <span className="font-heading text-sm font-semibold tracking-wide text-chrome">
          VENTURE TOMORROW&trade;
        </span>
        <div className="hidden sm:block">
          <TechLabel dot={false}>Largest AI education platform in Ontario</TechLabel>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-24 pt-16 sm:px-10 lg:grid-cols-2 lg:pt-24">
        {/* Left: messaging */}
        <div>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <TechLabel>Largest AI education platform in Ontario</TechLabel>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="mt-6 font-heading text-[13vw] font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="metal-text block">Building</span>
            <span className="metal-text block">Tomorrow&rsquo;s</span>
            <span className="block text-blue">Tech Founders</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.35}
            variants={fadeUp}
            className="mt-8 max-w-md text-balance font-body text-base leading-relaxed text-silver sm:text-lg"
          >
            WHAT WE DO WHAT WE WILL DO SlOGAN YAP ETC SOMEONE TELL ME WHAT TO PUT HERE YEAH RAMUS LEAVES EXACTLY THREE LINE HERE
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MetallicButton href="#participate" variant="primary">
              Participate in the Program
            </MetallicButton>
            <MetallicButton href="#partner" variant="secondary">
              Partner With Us
            </MetallicButton>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.65}
            variants={fadeUp}
            className="mt-14 flex items-center gap-6 border-t border-silver/10 pt-6"
          >
            <TechLabel dot={false} className="text-silver/40">
              © 2026 Accompanist Guild. All rights reserved.
            </TechLabel>
          </motion.div>
        </div>

        <p>There will be a picture of something here I wish</p>
        {/* Right: 2D visualization
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <NetworkVisual />
        </motion.div>  */}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-carbon to-transparent" />
    </section>
  );
}
