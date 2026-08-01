"use client";

import { motion, type Variants } from "framer-motion";
import { GridBackground, NoiseOverlay } from "@/components/GridBackground";
import { TechLabel } from "@/components/TechLabel";
import { MetallicButton } from "@/components/MetallicButton";
import { SiteNav } from "@/components/SiteNav";

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

      <SiteNav />

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
            className="mt-6 font-heading text-[15vw] font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
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
            Venture Tomorrow is Ontario&rsquo;s largest student-run AI education platform,
            pairing high schoolers with hands-on machine learning curriculum, mentorship
            from industry engineers, and a pathway to launch their own ventures.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MetallicButton href="/participate" variant="primary">
              Participate in the Program
            </MetallicButton>
            <MetallicButton href="/partner" variant="secondary">
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
              © 2026 Venture Tomorrow. All rights reserved.
            </TechLabel>
          </motion.div>
        </div>

        <p className="text-silver/40">There will be a picture of something here I wish</p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-carbon to-transparent" />
    </section>
  );
}
