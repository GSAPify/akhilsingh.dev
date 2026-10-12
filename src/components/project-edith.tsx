import { PanelHeader, StatusDot, StatusPill } from "@/components/hud";
import { Elapsed } from "@/components/live-clock";
import { edith } from "@/content";

export function EdithDetail() {
  return (
    <section id="edith" className="mx-auto w-full max-w-7xl scroll-mt-16 px-4 py-16 sm:px-6">
      <div className="hud">
        <PanelHeader
          right={
            <span className="font-mono text-[0.6875rem] tracking-widest tabular-nums">
              <Elapsed since={edith.firstCommit} />
            </span>
          }
        >
          Flagship · time in development
        </PanelHeader>

        <div className="grid gap-10 p-6 sm:p-10 [&>*]:min-w-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status="building" />
              <span className="label text-foreground">Open source · {edith.license}</span>
              <span className="label">Python · macOS · local-first</span>
            </div>
            <div>
              <h2 className="font-mono text-6xl font-semibold tracking-[0.12em] sm:text-7xl">
                {edith.name}
              </h2>
              <p className="label mt-2">{edith.expansion}</p>
            </div>
            <p className="text-lg leading-8">{edith.summary}</p>
            <p className="border-l-2 border-foreground/60 pl-4 leading-7 text-muted">
              {edith.principle}
            </p>
            <dl className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {edith.telemetry.map((telemetry) => (
                <div key={telemetry.label} className="flex flex-col gap-1 bg-background p-4">
                  <dt className="label">{telemetry.label}</dt>
                  <dd className="font-mono text-xl tabular-nums">{telemetry.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-4">
            <span className="label">Latency shape: Opus never blocks a spoken turn</span>
            <pre className="overflow-x-auto border border-line bg-background/80 p-4 font-mono text-[0.6875rem] leading-5 text-muted sm:text-xs">
              {`"think about our sharding strategy"
      │
      ├──> `}
              <span className="text-foreground">SONNET</span>
              {`  ack now ──> "On it. I'll follow up."
      │                        turn ends, mic free
      │
      └──> `}
              <span className="text-foreground">OPUS</span>
              {`    think_async, off the critical path
                 ├──> remember(detail)
                 └──> spoken summary, later`}
            </pre>

            <span className="label mt-2">Build sheet</span>
            <ul className="divide-y divide-line border border-line">
              {edith.slices.map((slice) => (
                <li key={slice.id} className="flex items-center gap-4 px-4 py-2">
                  <span className="font-mono text-xs text-muted">S{slice.id}</span>
                  <span className="flex-1 text-sm">{slice.name}</span>
                  <span
                    className={`font-mono text-[0.625rem] tracking-widest uppercase ${slice.state === "Done" ? "text-foreground" : "text-muted"}`}
                  >
                    {slice.state}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line p-6 sm:p-10">
          <span className="label">Subsystems</span>
          <ul className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {edith.subsystems.map((subsystem) => (
              <li key={subsystem.name} className="flex flex-col gap-2 bg-background p-4">
                <span className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
                  <StatusDot status={subsystem.core ? "queued" : "shipped"} />
                  {subsystem.name}
                </span>
                <span className="text-sm leading-6 text-muted">{subsystem.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 border-t border-line px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span className="label">{edith.requirements}</span>
          <a
            href={edith.href}
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
