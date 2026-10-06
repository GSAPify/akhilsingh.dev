import { PanelHeader, SectionHeading, StatusDot, StatusPill } from "@/components/hud";
import { Clock, Elapsed } from "@/components/live-clock";
import {
  contact,
  edith,
  eventLog,
  github,
  lineBoard,
  ohlcv,
  process,
  products,
  statusLabel,
} from "@/content";

const nav = [
  { href: "#edith", label: "EDITH" },
  { href: "#ohlcv", label: "ohlcv" },
  { href: "#line", label: "The line" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-7 place-items-center border border-cyan/60 font-mono text-xs font-semibold text-cyan">
            AS
          </span>
          <span className="font-mono text-xs tracking-widest uppercase">
            akhilsingh.dev
            <span className="hidden text-muted sm:inline">{" // software factory"}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label transition-colors hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 font-mono text-[0.6875rem] tracking-widest uppercase">
          <span className="hidden text-muted sm:inline">
            UTC <span className="text-foreground tabular-nums"><Clock timeZone="UTC" /></span>
          </span>
          <span className="flex items-center gap-2 text-green">
            <StatusDot status="shipped" />
            Online
          </span>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const telemetry = [
    { label: "Lines running", value: String(lineBoard.length - 1) },
    { label: "Flagship", value: edith.name },
    { label: "Fastest hot path", value: `${ohlcv.hotPath.value} ns` },
    { label: "Tightest p99", value: "30 ns" },
    { label: "Base", value: "Pune, IN" },
    { label: "Coordinates", value: "18.52°N 73.86°E" },
  ];

  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-7xl gap-4 px-4 pt-8 pb-16 sm:px-6 lg:grid-cols-[260px_1fr_280px] lg:pt-12"
    >
      <aside className="hud order-2 self-start lg:order-1">
        <PanelHeader right={<span className="label text-green">Live</span>}>
          Factory telemetry
        </PanelHeader>
        <dl className="divide-y divide-line">
          {telemetry.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-3 px-4 py-3">
              <dt className="label">{row.label}</dt>
              <dd className="font-mono text-sm whitespace-nowrap tabular-nums">{row.value}</dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-3 px-4 py-3">
            <dt className="label">Local time</dt>
            <dd className="font-mono text-sm tabular-nums text-cyan">
              <Clock timeZone="Asia/Kolkata" /> IST
            </dd>
          </div>
        </dl>
      </aside>

      <div className="order-1 flex flex-col items-center gap-8 text-center lg:order-2">
        <div className="flex flex-col items-center gap-5 pt-4">
          <span className="label flex items-center gap-2 border border-line px-3 py-1">
            <StatusDot status="building" />
            Software factory · built in the open
          </span>
          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
            Specs in.
            <br />
            <span className="glow-cyan text-cyan">Tested software out.</span>
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
            We build AI systems, low-latency infrastructure and developer tools. Every product
            ships in vertical slices, test-first, with its limits written down.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#edith"
              className="border border-cyan bg-cyan/10 px-5 py-2.5 font-mono text-xs tracking-widest text-cyan uppercase transition-colors hover:bg-cyan/20"
            >
              View EDITH
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line-strong px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-colors hover:border-cyan hover:text-cyan"
            >
              Source on GitHub
            </a>
          </div>
        </div>

        <div className="grid w-full gap-4 text-left sm:grid-cols-2">
          <a href="#edith" className="hud group flex flex-col">
            <PanelHeader right={<StatusPill status="building" />}>L01 · Flagship</PanelHeader>
            <div className="flex flex-col gap-3 p-5">
              <h2 className="font-mono text-2xl font-semibold tracking-[0.12em] text-cyan">
                {edith.name}
              </h2>
              <p className="text-sm leading-6 text-muted">
                Local-first, voice-first AI assistant for macOS with graph memory and a tiered
                model router.
              </p>
              <span className="label group-hover:text-cyan">View details →</span>
            </div>
          </a>
          <a href="#ohlcv" className="hud hud-violet group flex flex-col">
            <PanelHeader right={<StatusPill status="shipped" />}>L02 · Featured</PanelHeader>
            <div className="flex flex-col gap-3 p-5">
              <h2 className="font-mono text-2xl font-semibold text-violet">{ohlcv.name}</h2>
              <p className="text-sm leading-6 text-muted">
                C++20 market-data pipeline. {ohlcv.hotPath.value} ns per record, zero allocations on
                the hot path.
              </p>
              <span className="label group-hover:text-violet">View details →</span>
            </div>
          </a>
        </div>
      </div>

      <aside className="order-3 flex flex-col gap-4 self-start">
        <div className="hud">
          <PanelHeader right={<span className="label">{lineBoard.length} lines</span>}>
            Line status
          </PanelHeader>
          <ul className="divide-y divide-line">
            {lineBoard.map((row) => (
              <li key={row.line} className="flex items-center gap-3 px-4 py-2.5">
                <span className="font-mono text-[0.6875rem] text-muted">L{row.line}</span>
                <span className="flex-1 truncate font-mono text-sm">{row.name}</span>
                <span className="flex items-center gap-1.5 font-mono text-[0.625rem] tracking-widest text-muted uppercase">
                  <StatusDot status={row.status} />
                  {statusLabel[row.status]}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hud hud-violet">
          <PanelHeader>Event log</PanelHeader>
          <ol className="flex flex-col gap-2 px-4 py-3 font-mono text-xs leading-5">
            {eventLog.map((event) => (
              <li key={event.text} className="flex gap-2">
                <span className="shrink-0 text-violet">[{event.tag}]</span>
                <span className="text-muted">{event.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </section>
  );
}

function Edith() {
  return (
    <section id="edith" className="mx-auto w-full max-w-7xl scroll-mt-16 px-4 py-16 sm:px-6">
      <div className="hud">
        <PanelHeader
          right={
            <span className="font-mono text-[0.6875rem] tracking-widest text-cyan tabular-nums">
              <Elapsed since={edith.firstCommit} />
            </span>
          }
        >
          Line 01 · Flagship · time in development
        </PanelHeader>

        <div className="grid gap-10 p-6 sm:p-10 [&>*]:min-w-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status="building" />
              <span className="label">Python · macOS · local-first</span>
            </div>
            <div>
              <h2 className="glow-cyan font-mono text-6xl font-semibold tracking-[0.12em] text-cyan sm:text-7xl">
                {edith.name}
              </h2>
              <p className="label mt-2">{edith.expansion}</p>
            </div>
            <p className="text-lg leading-8">{edith.summary}</p>
            <p className="border-l-2 border-cyan/60 pl-4 leading-7 text-muted">
              {edith.principle}
            </p>
            <dl className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {edith.telemetry.map((t) => (
                <div key={t.label} className="flex flex-col gap-1 bg-background p-4">
                  <dt className="label">{t.label}</dt>
                  <dd className="font-mono text-xl tabular-nums">{t.value}</dd>
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
              <span className="text-cyan">SONNET</span>
              {`  ack now ──> "On it. I'll follow up."
      │                        turn ends, mic free
      │
      └──> `}
              <span className="text-violet">OPUS</span>
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
                    className={`font-mono text-[0.625rem] tracking-widest uppercase ${slice.state === "Done" ? "text-green" : "text-amber"}`}
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
            {edith.subsystems.map((sub) => (
              <li key={sub.name} className="flex flex-col gap-2 bg-background p-4">
                <span className="flex items-center gap-2 font-mono text-xs tracking-widest text-cyan uppercase">
                  <StatusDot status="shipped" />
                  {sub.name}
                </span>
                <span className="text-sm leading-6 text-muted">{sub.detail}</span>
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
            className="font-mono text-xs tracking-widest text-cyan uppercase hover:underline"
          >
            Source on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

function Ohlcv() {
  const maxNs = Math.max(...ohlcv.latency.map((l) => l.ns));
  return (
    <section id="ohlcv" className="mx-auto w-full max-w-7xl scroll-mt-16 px-4 py-16 sm:px-6">
      <div className="hud hud-violet">
        <PanelHeader right={<span className="label">{ohlcv.version} · {ohlcv.license}</span>}>
          Line 02 · Featured · low-latency systems
        </PanelHeader>

        <div className="grid gap-10 p-6 sm:p-10 [&>*]:min-w-0 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status="shipped" />
              <span className="label">{ohlcv.lang} · market data</span>
            </div>
            <h2 className="glow-violet font-mono text-3xl font-semibold tracking-tight text-violet sm:text-5xl">
              {ohlcv.name}
            </h2>
            <p className="text-lg leading-8">{ohlcv.summary}</p>
            <p className="border-l-2 border-violet/60 pl-4 leading-7 text-muted">{ohlcv.bar}</p>

            <div className="flex flex-col gap-2 border border-line bg-background/80 p-6">
              <span className="label">Hot path · validate</span>
              <span className="flex items-baseline gap-3">
                <span className="glow-violet font-mono text-6xl font-semibold tabular-nums text-violet sm:text-7xl">
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
              {ohlcv.latency.map((l) => (
                <div key={l.label} className="grid grid-cols-[56px_1fr_56px] items-center gap-3">
                  <span className="font-mono text-xs text-muted">{l.label}</span>
                  <div className="h-2 bg-line">
                    <div
                      className="bar h-full bg-gradient-to-r from-cyan to-violet shadow-[0_0_12px_rgba(167,139,250,0.6)]"
                      style={{ width: `${(l.ns / maxNs) * 100}%` }}
                    />
                  </div>
                  <span className="text-right font-mono text-sm tabular-nums">{l.ns} ns</span>
                </div>
              ))}
            </div>

            <dl className="grid grid-cols-2 gap-px border border-line bg-line">
              {ohlcv.throughput.map((t) => (
                <div key={t.label} className="flex flex-col gap-1 bg-background p-4">
                  <dt className="label">{t.label} · {t.note}</dt>
                  <dd className="font-mono text-lg tabular-nums text-violet sm:text-2xl">{t.value}</dd>
                </div>
              ))}
              {ohlcv.hardening.map((h) => (
                <div key={h.label} className="flex flex-col gap-1 bg-background p-4">
                  <dt className="label">{h.label}</dt>
                  <dd className="font-mono text-base">{h.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-3">
              <span className="label">Feed path</span>
              <div className="relative flex flex-wrap items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-widest">
                {ohlcv.pipeline.map((stage, i) => (
                  <span key={stage} className="flex items-center gap-2">
                    <span className="border border-line-strong bg-background px-2 py-1">{stage}</span>
                    {i < ohlcv.pipeline.length - 1 && <span className="text-violet">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ul className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ohlcv.proofs.map((proof) => (
            <li key={proof.name} className="flex flex-col gap-2 bg-background p-6">
              <span className="font-mono text-xs tracking-widest text-violet uppercase">
                {proof.name}
              </span>
              <span className="text-sm leading-6 text-muted">{proof.detail}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-end border-t border-line px-6 py-4 sm:px-10">
          <a
            href={ohlcv.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest text-violet uppercase hover:underline"
          >
            Source on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

function Line() {
  return (
    <section id="line" className="mx-auto w-full max-w-7xl scroll-mt-16 px-4 py-16 sm:px-6">
      <SectionHeading kicker="The line" title="Also coming off the line" />
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hud group flex h-full flex-col transition-colors hover:border-line-strong"
            >
              <PanelHeader right={<StatusPill status={p.status} />}>L{p.line}</PanelHeader>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <div>
                  <h3 className="font-mono text-lg font-semibold group-hover:text-cyan">{p.name}</h3>
                  <span className="label">{p.lang}</span>
                </div>
                <p className="text-sm leading-6 text-muted">{p.summary}</p>
                <div className="mt-auto flex items-baseline gap-2 border-t border-line pt-4">
                  <span className="font-mono text-2xl font-semibold text-cyan">{p.headline.value}</span>
                  <span className="font-mono text-xs text-muted">{p.headline.unit}</span>
                </div>
                <ul className="flex flex-col gap-1 font-mono text-[0.6875rem] text-muted">
                  {p.metrics.map((m) => (
                    <li key={m}>› {m}</li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
        <li className="flex flex-col border border-dashed border-amber/40 bg-panel">
          <PanelHeader right={<StatusPill status="queued" />}>L06</PanelHeader>
          <div className="flex flex-1 flex-col justify-center gap-3 p-5">
            <h3 className="font-mono text-lg font-semibold text-amber">Next build</h3>
            <p className="text-sm leading-6 text-muted">
              Slot reserved. More open-source builds are coming down the line.
            </p>
            <span className="font-mono text-xs text-amber">
              Spec in progress
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto w-full max-w-7xl scroll-mt-16 px-4 py-16 sm:px-6">
      <SectionHeading kicker="Assembly line" title="How the factory runs" />
      <div className="relative mt-10">
        <div className="absolute top-[22px] right-0 left-0 hidden h-px bg-line-strong lg:block" aria-hidden>
          <span className="packet absolute -top-[3px] size-[7px] rounded-full bg-cyan shadow-[0_0_12px_var(--cyan)]" />
        </div>
        <ol className="grid gap-4 lg:grid-cols-5">
          {process.map((s) => (
            <li key={s.step} className="relative flex flex-col gap-3">
              <span className="relative z-10 grid size-11 place-items-center border border-cyan/60 bg-background font-mono text-sm text-cyan">
                {s.step}
              </span>
              <h3 className="font-mono text-sm font-semibold tracking-widest uppercase">{s.name}</h3>
              <p className="text-sm leading-6 text-muted">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-16 px-4 pt-16 pb-10 sm:px-6">
      <div className="hud">
        <PanelHeader right={<span className="label text-green">Channel open</span>}>
          Comms
        </PanelHeader>
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">Want a walkthrough of the architecture?</h2>
            <p className="text-muted">Happy to go deep on any of it.</p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {contact.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block border border-line-strong px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors hover:border-cyan hover:text-cyan"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="mt-8 flex flex-col gap-2 font-mono text-[0.6875rem] tracking-widest text-muted uppercase sm:flex-row sm:justify-between">
        <span>© 2026 Akhil Singh · akhilsingh.dev</span>
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative z-10 flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Edith />
        <Ohlcv />
        <Line />
        <Process />
        <Contact />
      </main>
    </div>
  );
}
