import { PanelHeader, StatusPill } from "@/components/hud";
import { ohlcv } from "@/content";

const maxNs = Math.max(...ohlcv.latency.map((latency) => latency.ns));

export function OhlcvDetail() {
  return (
    <section id="ohlcv" className="mx-auto w-full max-w-7xl scroll-mt-16 px-4 py-16 sm:px-6">
      <div className="hud">
        <PanelHeader right={<span className="label">{ohlcv.version} · {ohlcv.license}</span>}>
          Featured · low-latency systems
        </PanelHeader>

        <div className="grid gap-10 p-6 sm:p-10 [&>*]:min-w-0 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status="shipped" />
              <span className="label">{ohlcv.lang} · market data</span>
            </div>
            <h2 className="font-mono text-3xl font-semibold tracking-tight sm:text-5xl">
              {ohlcv.name}
            </h2>
            <p className="text-lg leading-8">{ohlcv.summary}</p>
            <p className="border-l-2 border-foreground/60 pl-4 leading-7 text-muted">{ohlcv.bar}</p>

            <div className="flex flex-col gap-2 border border-line bg-background/80 p-6">
              <span className="label">Hot path · validate</span>
              <span className="flex items-baseline gap-3">
                <span className="font-mono text-6xl font-semibold tabular-nums sm:text-7xl">
                  {ohlcv.hotPath.value}
                </span>
                <span className="font-mono text-sm text-muted">{ohlcv.hotPath.unit}</span>
              </span>
              <span className="label">{ohlcv.hotPath.note} · zero allocations</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="label">Latency tail · x86 · rdtscp</span>
              {ohlcv.latency.map((latency) => (
                <div
                  key={latency.label}
                  className="grid grid-cols-[56px_1fr_56px] items-center gap-3"
                >
                  <span className="font-mono text-xs text-muted">{latency.label}</span>
                  <div className="h-2 bg-line">
                    <div
                      className="bar h-full bg-foreground"
                      style={{ width: `${(latency.ns / maxNs) * 100}%` }}
                    />
                  </div>
                  <span className="text-right font-mono text-sm tabular-nums">
                    {latency.ns} ns
                  </span>
                </div>
              ))}
            </div>

            <dl className="grid grid-cols-2 gap-px border border-line bg-line">
              {ohlcv.throughput.map((throughput) => (
                <div key={throughput.label} className="flex flex-col gap-1 bg-background p-4">
                  <dt className="label">
                    {throughput.label} · {throughput.note}
                  </dt>
                  <dd className="font-mono text-lg tabular-nums sm:text-2xl">
                    {throughput.value}
                  </dd>
                </div>
              ))}
              {ohlcv.hardening.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 bg-background p-4">
                  <dt className="label">{item.label}</dt>
                  <dd className="font-mono text-base">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-3">
              <span className="label">Feed path</span>
              <div className="relative flex flex-wrap items-center gap-2 font-mono text-[0.6875rem] tracking-widest uppercase">
                {ohlcv.pipeline.map((stage, index) => (
                  <span key={stage} className="flex items-center gap-2">
                    <span className="border border-line-strong bg-background px-2 py-1">{stage}</span>
                    {index < ohlcv.pipeline.length - 1 && <span className="text-muted">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ul className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ohlcv.proofs.map((proof) => (
            <li key={proof.name} className="flex flex-col gap-2 bg-background p-6">
              <span className="font-mono text-xs tracking-widest uppercase">{proof.name}</span>
              <span className="text-sm leading-6 text-muted">{proof.detail}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-end border-t border-line px-6 py-4 sm:px-10">
          <a
            href={ohlcv.href}
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
