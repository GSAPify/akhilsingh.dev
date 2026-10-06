import type { ReactNode } from "react";
import { type Status, statusLabel } from "@/content";

const statusColor: Record<Status, string> = {
  shipped: "text-green",
  building: "text-cyan",
  rnd: "text-violet",
  queued: "text-amber",
};

export function StatusDot({ status }: { status: Status }) {
  return (
    <span
      aria-hidden
      className={`pulse inline-block size-1.5 shrink-0 rounded-full bg-current ${statusColor[status]}`}
    />
  );
}

export function StatusPill({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-current/30 px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] ${statusColor[status]}`}
    >
      <StatusDot status={status} />
      {statusLabel[status]}
    </span>
  );
}

export function PanelHeader({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-2.5">
      <span className="label">{children}</span>
      {right}
    </div>
  );
}

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="label text-cyan!">{kicker}</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}
