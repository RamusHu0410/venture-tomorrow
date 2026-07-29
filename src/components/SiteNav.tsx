import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/events", label: "Past Events" },
  { href: "/participate", label: "Participate" },
  { href: "/partner", label: "Partner" },
];

export function SiteNav() {
  return (
    <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 pt-8 sm:px-10">
      <Link
        href="/"
        className="font-heading text-sm font-semibold tracking-wide text-chrome"
      >
        VENTURE TOMORROW&trade;
      </Link>
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-silver/70">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-chrome"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
