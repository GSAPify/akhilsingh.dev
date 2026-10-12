import Link from "next/link";
import { PanelHeader, StatusPill } from "@/components/hud";
import { products, projectHref } from "@/content";

type Project = (typeof products)[number];

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li>
      <Link
        href={projectHref(project.slug)}
        className="hud group flex h-full flex-col transition-colors hover:border-line-strong"
      >
        <PanelHeader right={<StatusPill status={project.status} />}>{project.line}</PanelHeader>
        <div className="flex flex-1 flex-col gap-4 p-5">
          <div>
            <h3 className="font-mono text-lg font-semibold group-hover:text-foreground">
              {project.name}
            </h3>
            <span className="label">{project.lang}</span>
          </div>
          <p className="text-sm leading-6 text-muted">{project.summary}</p>
          <div className="mt-auto flex items-baseline gap-2 border-t border-line pt-4">
            <span className="font-mono text-2xl font-semibold">{project.headline.value}</span>
            <span className="font-mono text-xs text-muted">{project.headline.unit}</span>
          </div>
          <ul className="flex flex-col gap-1 font-mono text-[0.6875rem] text-muted">
            {project.metrics.map((metric) => (
              <li key={metric}>› {metric}</li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}

export function NextBuildCard() {
  return (
    <li className="flex flex-col border border-dashed border-line-strong bg-panel">
      <PanelHeader right={<StatusPill status="queued" />}>06</PanelHeader>
      <div className="flex flex-1 flex-col justify-center gap-3 p-5">
        <h3 className="font-mono text-lg font-semibold">Next build</h3>
        <p className="text-sm leading-6 text-muted">
          Slot reserved. More open-source projects are on the way.
        </p>
        <span className="font-mono text-xs text-muted">Spec in progress</span>
      </div>
    </li>
  );
}
