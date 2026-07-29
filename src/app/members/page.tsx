import { GridBackground, NoiseOverlay } from "@/components/GridBackground";
import { SiteNav } from "@/components/SiteNav";
import { TechLabel } from "@/components/TechLabel";
import { GlassPanel } from "@/components/GlassPanel";

const team = [
  { name: "Aaron", role: "Head of Logistics", team: "Co-pres" },
  { name: "Ramus", role: "Head of Finance & Tech", team: "Co-pres" },
  { name: "Jessica", role: "Head of Marketing", team: "Co-pres" },
  { name: "Stephanie", role: "Head of PR & HR", team: "Co-pres" },
  { name: "Aiden", role: "Lead of Velocity Marketing", team: "Marketing" },
  { name: "Arianna", role: "Head of Marketing", team: "Marketing" },
  { name: "Stone", role: "Head of Education", team: "Education" },
  { name: "Enes", role: "Lead of Partnerships", team: "Growth" },
  { name: "Ricco", role: "Lead of VFX", team: "Growth" },
  { name: "Reagan", role: "Head of Design", team: "Design" },
  { name: "Noveen", role: "Head of Design", team: "Design" }
];

export default function MembersPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-graphite">
      <GridBackground />
      <NoiseOverlay />
      <SiteNav />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <TechLabel>The people behind the program</TechLabel>
        <h1 className="metal-text mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Members
        </h1>
        <p className="mt-6 max-w-2xl text-balance font-body text-base leading-relaxed text-silver sm:text-lg">
          Venture Tomorrow is run entirely by students volunteering their time to build
          the AI education platform they wish they&rsquo;d had.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <GlassPanel key={`${member.name}-${member.role}`} className="p-6">
              <TechLabel dot={false} className="text-silver/50">
                {member.team}
              </TechLabel>
              <h3 className="mt-4 font-heading text-lg font-semibold text-chrome">
                {member.name}
              </h3>
              <p className="mt-1 font-body text-sm text-silver/80">{member.role}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
