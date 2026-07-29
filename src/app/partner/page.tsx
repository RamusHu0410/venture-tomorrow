"use client";

import { useState, type FormEvent } from "react";
import { GridBackground, NoiseOverlay } from "@/components/GridBackground";
import { SiteNav } from "@/components/SiteNav";
import { TechLabel } from "@/components/TechLabel";
import { GlassPanel } from "@/components/GlassPanel";

const inputClass =
  "w-full rounded-lg border border-silver/15 bg-white/5 px-4 py-3 font-body text-sm text-chrome placeholder:text-silver/40 outline-none transition-colors focus:border-blue/60";

export default function PartnerPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-graphite">
      <GridBackground />
      <NoiseOverlay />
      <SiteNav />

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-24">
        <TechLabel dot={false} className="text-blue/70">
          Work with us
        </TechLabel>
        <h1 className="metal-text mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
          Partner With Us
        </h1>
        <p className="mt-6 max-w-lg text-balance font-body text-base leading-relaxed text-silver sm:text-lg">
          Sponsors, schools, and companies help us run the program. Tell us about your
          organization and how you&rsquo;d like to get involved.
        </p>

        <GlassPanel className="mt-12 border-blue/20 p-8 sm:p-10">
          {status === "success" ? (
            <p className="font-body text-base text-chrome">
              Thanks for reaching out — our partnerships team will follow up shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                name="contactName"
                required
                placeholder="Contact name"
                className={`${inputClass} sm:col-span-2`}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className={`${inputClass} sm:col-span-2`}
              />
              <input
                name="organization"
                required
                placeholder="Organization"
                className={inputClass}
              />
              <input
                name="role"
                placeholder="Your role"
                className={inputClass}
              />
              <input
                name="partnerType"
                placeholder="How would you like to partner? (sponsor, mentor, venue, hiring...)"
                className={`${inputClass} sm:col-span-2`}
              />
              <textarea
                name="message"
                placeholder="Tell us more"
                rows={4}
                className={`${inputClass} resize-none sm:col-span-2`}
              />

              {status === "error" && (
                <p className="text-sm text-red-400 sm:col-span-2">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-silver/30 px-8 py-3.5 font-heading text-sm font-medium tracking-wide text-chrome transition-opacity disabled:opacity-60 sm:col-span-2"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
              >
                {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </GlassPanel>
      </div>
    </section>
  );
}
