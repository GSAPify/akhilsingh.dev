import type { Metadata } from "next";
import Link from "next/link";
import { PanelHeader, StatusDot, StatusPill } from "@/components/hud";
import { edith, github, lineBoard, ohlcv, statusLabel } from "@/content";

const projectSlugs = ["edith", "ohlcv-validator", "mach", "akhil-skills", "isaacxakhil"];

const projectRows = lineBoard.slice(0, projectSlugs.length).map((project, index) => ({
  ...project,
  slug: projectSlugs[index],
}));

export const metadata: Metadata = {
  title: {
    absolute: "Akhil Singh",
  },
};

function projectHref(slug: string) {
  return `/projects/${slug}/`;
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-7xl gap-8 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-[1fr_300px] lg:gap-10 lg:pt-20"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Akhil Singh</h1>
            <p className="label">AI engineer · Pune, India</p>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
            I build AI systems and the infrastructure underneath them: voice assistants, retrieval
            pipelines, and C++ that gets measured in nanoseconds. Most of my day-to-day work lives
            in private repos. This is the open-source side.
          </p>
          <p className="max-w-xl text-sm leading-6 text-muted">
            Off the keyboard: national cross-country mountain biking champion, 2021.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={projectHref("edith")}
              className="border border-foreground bg-foreground px-5 py-2.5 font-mono text-xs tracking-widest text-background uppercase transition-colors hover:bg-foreground/85"
            >
              View EDITH
            </Link>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line-strong px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-colors hover:border-foreground"
            >
              Source on GitHub
            </a>
          </div>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2">
          <Link href={projectHref("edith")} className="hud group flex flex-col">
            <PanelHeader right={<StatusPill status="building" />}>Flagship</PanelHeader>
            <div className="flex flex-col gap-3 p-5">
              <h2 className="font-mono text-2xl font-semibold tracking-[0.12em]">{edith.name}</h2>
              <p className="text-sm leading-6 text-muted">
                Local-first, voice-first AI assistant for macOS with graph memory and a tiered
                model router.
              </p>
              <span className="label group-hover:text-foreground">View details →</span>
            </div>
          </Link>
          <Link href={projectHref("ohlcv-validator")} className="hud group flex flex-col">
            <PanelHeader right={<StatusPill status="shipped" />}>Featured</PanelHeader>
            <div className="flex flex-col gap-3 p-5">
              <h2 className="font-mono text-2xl font-semibold">{ohlcv.name}</h2>
              <p className="text-sm leading-6 text-muted">
                C++20 market-data pipeline. {ohlcv.hotPath.value} ns per record, zero allocations on
                the hot path.
              </p>
              <span className="label group-hover:text-foreground">View details →</span>
            </div>
          </Link>
        </div>
      </div>

      <aside className="hud self-start">
        <PanelHeader right={<span className="label">{projectRows.length}</span>}>Projects</PanelHeader>
        <ul className="divide-y divide-line">
          {projectRows.map((row) => (
            <li key={row.line}>
              <Link
                href={projectHref(row.slug)}
                className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-panel"
              >
                <span className="font-mono text-[0.6875rem] text-muted">{row.line}</span>
                <span className="flex-1 truncate font-mono text-sm">{row.name}</span>
                <span className="flex items-center gap-1.5 font-mono text-[0.625rem] tracking-widest text-muted uppercase">
                  <StatusDot status={row.status} />
                  {statusLabel[row.status]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-end border-t border-line px-4 py-3">
          <Link
            href="/projects/"
            className="font-mono text-xs tracking-widest uppercase hover:underline"
          >
            All projects →
          </Link>
        </div>
      </aside>
    </section>
  );
}

export default function Home() {
  return <Hero />;
}
