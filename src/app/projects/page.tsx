import type { Metadata } from "next";
import Link from "next/link";
import { PanelHeader, SectionHeading, StatusPill } from "@/components/hud";
import { NextBuildCard, ProjectCard } from "@/components/project-card";
import { edith, ohlcv, products, projectHref } from "@/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:pt-20">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
          This is the open-source side.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <SectionHeading kicker="Featured" title="Featured projects" />
        <div className="mt-8 grid w-full gap-4 md:grid-cols-2">
          <Link href={projectHref(edith.slug)} className="hud group flex flex-col">
            <PanelHeader right={<StatusPill status="building" />}>Flagship</PanelHeader>
            <div className="flex flex-col gap-3 p-5 sm:p-6">
              <h2 className="font-mono text-2xl font-semibold tracking-[0.12em]">{edith.name}</h2>
              <p className="text-sm leading-6 text-muted">
                Local-first, voice-first AI assistant for macOS with graph memory and a tiered
                model router.
              </p>
              <span className="label group-hover:text-foreground">View details →</span>
            </div>
          </Link>

          <Link href={projectHref(ohlcv.slug)} className="hud group flex flex-col">
            <PanelHeader right={<StatusPill status="shipped" />}>Featured</PanelHeader>
            <div className="flex flex-col gap-3 p-5 sm:p-6">
              <h2 className="font-mono text-2xl font-semibold">{ohlcv.name}</h2>
              <p className="text-sm leading-6 text-muted">
                C++20 market-data pipeline. {ohlcv.hotPath.value} ns per record, zero allocations on
                the hot path.
              </p>
              <span className="label group-hover:text-foreground">View details →</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading kicker="Projects" title="More projects" />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <NextBuildCard />
        </ul>
      </section>
    </>
  );
}
