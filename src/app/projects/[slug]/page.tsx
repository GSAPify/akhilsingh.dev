import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PanelHeader, StatusPill } from "@/components/hud";
import { EdithDetail } from "@/components/project-edith";
import { OhlcvDetail } from "@/components/project-ohlcv";
import { edith, ohlcv, products } from "@/content";

const projects = [edith, ohlcv, ...products];

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

type Product = (typeof products)[number];

type ProductDetailProps = {
  project: Product;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.name,
  };
}

function ProductDetail({ project }: ProductDetailProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
      <div className="hud">
        <PanelHeader right={<StatusPill status={project.status} />}>{project.line}</PanelHeader>
        <div className="grid gap-10 p-6 sm:p-10 [&>*]:min-w-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-5">
            <span className="label">{project.lang}</span>
            <h1 className="font-mono text-4xl font-semibold tracking-tight sm:text-6xl">
              {project.name}
            </h1>
            <p className="text-lg leading-8 text-muted">{project.summary}</p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 border border-line bg-background/80 p-6">
              <span className="label">{project.headline.note}</span>
              <span className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-4xl font-semibold tabular-nums sm:text-5xl">
                  {project.headline.value}
                </span>
                <span className="font-mono text-sm text-muted">{project.headline.unit}</span>
              </span>
            </div>

            <ul className="divide-y divide-line border border-line">
              {project.metrics.map((metric) => (
                <li key={metric} className="px-4 py-3 font-mono text-sm text-muted">
                  › {metric}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-end border-t border-line px-6 py-4 sm:px-10">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase hover:underline"
          >
            Source on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

function renderProjectDetail(slug: string) {
  if (slug === edith.slug) {
    return <EdithDetail />;
  }

  if (slug === ohlcv.slug) {
    return <OhlcvDetail />;
  }

  const project = products.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProductDetail project={project} />;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:pt-16">
        <Link
          href="/projects/"
          className="font-mono text-xs tracking-widest text-muted uppercase hover:text-foreground"
        >
          ← All projects
        </Link>
      </div>
      {renderProjectDetail(slug)}
    </>
  );
}
