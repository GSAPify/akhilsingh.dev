"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock } from "@/components/live-clock";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
];

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href.slice(0, -1) || pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 sm:h-12 sm:flex-nowrap sm:gap-6 sm:px-6 sm:py-0">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-7 place-items-center border border-foreground/60 font-mono text-xs font-semibold">
            AS
          </span>
          <span className="font-mono text-xs tracking-widest uppercase">akhilsingh.dev</span>
        </Link>

        <nav
          className="order-3 flex w-full items-center justify-between sm:order-none sm:w-auto sm:justify-start sm:gap-6"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const isActive = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`label transition-colors hover:text-foreground ${isActive ? "text-foreground" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 font-mono text-[0.6875rem] tracking-widest uppercase">
          <span className="text-muted">
            UTC{" "}
            <span className="text-foreground tabular-nums">
              <Clock timeZone="UTC" />
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}
