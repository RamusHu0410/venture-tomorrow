import { GridBackground, NoiseOverlay } from "@/components/GridBackground";
import { SiteNav } from "@/components/SiteNav";
import { TechLabel } from "@/components/TechLabel";
import { GlassPanel } from "@/components/GlassPanel";

const events = [
  {
    date: "TBD",
    title: "Kickoff Hackathon",
    location: "Markham, ON",
    description:
      "A weekend build sprint where new members shipped their first AI project in teams.",
  },
  {
    date: "TBD",
    title: "AI Security Bootcamp",
    location: "Virtual",
    description:
      "Our speakers explaining common AI security vulnerabilities by attacking sample models.",
  },
  {
    date: "TBD",
    title: "Demo Day",
    location: "Markham, ON",
    description:
      "Cohort members pitched their final projects to mentors, partners, and local founders.",
  },
];

export default function EventsPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-graphite">
      <GridBackground />
      <NoiseOverlay />
      <SiteNav />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <TechLabel>Where we&rsquo;ve been</TechLabel>
        <h1 className="metal-text mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Past Events
        </h1>
        <p className="mt-6 max-w-2xl text-balance font-body text-base leading-relaxed text-silver sm:text-lg">
          A running log of the hackathons, workshops, and speaker series we&rsquo;ve run
          across Ontario.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <GlassPanel key={event.title} className="h-full p-8">
              <TechLabel dot={false} className="text-silver/50">
                {event.date} &middot; {event.location}
              </TechLabel>
              <h3 className="mt-4 font-heading text-xl font-semibold text-chrome">
                {event.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-silver/80">
                {event.description}
              </p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
