"use client";

import { motion, type Variants } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { TechLabel } from "@/components/TechLabel";
import { GlassPanel } from "@/components/GlassPanel";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function IntroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-carbon py-28 sm:py-32">
      <GridBackground className="opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
        >
          <TechLabel>Keep with the innovation</TechLabel>
          <h2 className="metal-text mt-6 max-w-3xl font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Who are we
          </h2>
          <p className="mt-6 max-w-2xl text-balance font-body text-base leading-relaxed text-silver sm:text-lg">
            We run free, project-based AI bootcamps, hackathons, and speaker series for
            students across Ontario. Our members leave with a shipped product, a network
            of founders and engineers, and the confidence to start their own venture.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <GlassPanel className="h-full p-8 sm:p-10">
              <TechLabel className="text-silver/50">PROBLEM // 002.A</TechLabel>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-chrome">
                The AI skills gap starts in high school
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-silver/80">
                Most students graduate having never built a real machine learning project
                or talked to someone actually working in AI. By the time they reach
                university, they&rsquo;re already years behind their peers.
              </p>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.25}
            variants={fadeUp}
          >
            <GlassPanel className="h-full border-blue/20 p-8 sm:p-10">
              <TechLabel className="text-blue/70">SOLUTION // 002.B</TechLabel>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-chrome">
                A program built and run by students, for students
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-silver/80">
                Venture Tomorrow pairs cohorts with mentors from industry to build real AI
                products in weeks, not years, then gives them the stage, funding leads, and
                network to turn that project into a venture.
              </p>
            </GlassPanel>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.4}
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-silver/10 pt-8"
        >
          <TechLabel dot={false} className="text-silver/40">
            Code of Conduct
          </TechLabel>
          <TechLabel dot={false} className="text-silver/40">
            Travel Guidelines
          </TechLabel>
          <TechLabel dot={false} className="text-silver/40">
            Privacy Policy
          </TechLabel>
          <TechLabel dot={false} className="text-silver/40">
            2026 Teaser
          </TechLabel>
        </motion.div>
      </div>
    </section>
  );
}
