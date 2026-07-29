"use client";

import { useState, type FormEvent } from "react";
import { GridBackground, NoiseOverlay } from "@/components/GridBackground";
import { SiteNav } from "@/components/SiteNav";
import { TechLabel } from "@/components/TechLabel";
import { GlassPanel } from "@/components/GlassPanel";

const inputClass =
  "w-full rounded-lg border border-silver/15 bg-white/5 px-4 py-3 font-body text-sm text-chrome placeholder:text-silver/40 outline-none transition-colors focus:border-blue/60";

export default function ParticipatePage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/participate", {
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
        <TechLabel>Apply to the program</TechLabel>
        <h1 className="metal-text mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
          Participate
        </h1>
        <p className="mt-6 max-w-lg text-balance font-body text-base leading-relaxed text-silver sm:text-lg">
          Tell us a bit about yourself and we&rsquo;ll reach out with next steps for the
          next cohort.
        </p>

        <GlassPanel className="mt-12 p-8 sm:p-10">
          {status === "success" ? (
            <p className="font-body text-base text-chrome">
              Thanks for applying — we&rsquo;ve received your submission and will be in
              touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                name="fullName"
                required
                placeholder="Full name"
                className={`${inputClass} sm:col-span-2`}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className={`${inputClass} sm:col-span-2`}
              />
              <input name="school" placeholder="School" className={inputClass} />
              <input
                name="gradeOrYear"
                placeholder="Grade / year"
                className={inputClass}
              />
              <input
                name="city"
                placeholder="City"
                className={`${inputClass} sm:col-span-2`}
              />
              <input
                name="interest"
                placeholder="What are you most interested in? (AI, entrepreneurship, mentorship...)"
                className={`${inputClass} sm:col-span-2`}
              />
              <textarea
                name="message"
                placeholder="Anything else you'd like us to know?"
                rows={4}
                className={`${inputClass} resize-none sm:col-span-2`}
              />

              {status === "error" && (
                <p className="text-sm text-red-400 sm:col-span-2">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex items-center justify-center rounded-full px-8 py-3.5 font-heading text-sm font-medium tracking-wide text-graphite transition-opacity disabled:opacity-60 sm:col-span-2"
                style={{
                  background:
                    "linear-gradient(180deg, #f5f7fa 0%, #d7dbe1 45%, #a9adb6 55%, #eef0f3 100%)",
                }}
              >
                {status === "submitting" ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </GlassPanel>
      </div>
    </section>
  );
}
