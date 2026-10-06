import { PanelHeader, SectionHeading, StatusDot, StatusPill } from "@/components/hud";
import { Clock, Elapsed } from "@/components/live-clock";
import {
  contact,
  edith,
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
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-7 place-items-center border border-foreground/60 font-mono text-xs font-semibold">
            AS
          </span>
          <span className="font-mono text-xs tracking-widest uppercase">akhilsingh.dev</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 font-mono text-[0.6875rem] tracking-widest uppercase">
          <span className="text-muted">
            UTC <span className="text-foreground tabular-nums"><Clock timeZone="UTC" /></span>
          </span>
        </div>
      </div>
    </header>
  );
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
            <a
              href="#edith"
              className="border border-foreground bg-foreground px-5 py-2.5 font-mono text-xs tracking-widest text-background uppercase transition-colors hover:bg-foreground/85"
            >
              View EDITH
            </a>
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
          <a href="#edith" className="hud group flex flex-col">
            <PanelHeader right={<StatusPill status="building" />}>Flagship</PanelHeader>
            <div className="flex flex-col gap-3 p-5">
              <h2 className="font-mono text-2xl font-semibold tracking-[0.12em]">{edith.name}</h2>
              <p className="text-sm leading-6 text-muted">
                Local-first, voice-first AI assistant for macOS with graph memory and a tiered
                model router.
              </p>
              <span className="label group-hover:text-foreground">View details →</span>
            </div>
          </a>
          <a href="#ohlcv" className="hud group flex flex-col">
            <PanelHeader right={<StatusPill status="shipped" />}>Featured</PanelHeader>
            <div className="flex flex-col gap-3 p-5">
              <h2 className="font-mono text-2xl font-semibold">{ohlcv.name}</h2>
              <p className="text-sm leading-6 text-muted">
                C++20 market-data pipeline. {ohlcv.hotPath.value} ns per record, zero allocations on
                the hot path.
              </p>
              <span className="label group-hover:text-foreground">View details →</span>
            </div>
          </a>
        </div>
      </div>

      <aside className="hud self-start">
        <PanelHeader right={<span className="label">{lineBoard.length}</span>}>Projects</PanelHeader>
        <ul className="divide-y divide-line">
          {lineBoard.map((row) => (
            <li key={row.line} className="flex items-center gap-3 px-4 py-2.5">
              <span className="font-mono text-[0.6875rem] text-muted">{row.line}</span>
              <span className="flex-1 truncate font-mono text-sm">{row.name}</span>
              <span className="flex items-center gap-1.5 font-mono text-[0.625rem] tracking-widest text-muted uppercase">
                <StatusDot status={row.status} />
                {statusLabel[row.status]}
              </span>
            </li>
          ))}
        </ul>
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
            {edith.subsystems.map((sub) => (
              <li key={sub.name} className="flex flex-col gap-2 bg-background p-4">
                <span className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
                  {/* Muted matches the build sheet: core done, live hardware smoke pending. */}
                  <StatusDot status={sub.core ? "queued" : "shipped"} />
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
            className="font-mono text-xs tracking-widest uppercase hover:underline"
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
              {ohlcv.latency.map((l) => (
                <div key={l.label} className="grid grid-cols-[56px_1fr_56px] items-center gap-3">
                  <span className="font-mono text-xs text-muted">{l.label}</span>
                  <div className="h-2 bg-line">
                    <div
                      className="bar h-full bg-foreground"
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
                  <dd className="font-mono text-lg tabular-nums sm:text-2xl">{t.value}</dd>
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
                    {i < ohlcv.pipeline.length - 1 && <span className="text-muted">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ul className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ohlcv.proofs.map((proof) => (
            <li key={proof.name} className="flex flex-col gap-2 bg-background p-6">
              <span className="font-mono text-xs tracking-widest uppercase">
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
            className="font-mono text-xs tracking-widest uppercase hover:underline"
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
    <section id="projects" className="mx-auto w-full max-w-7xl scroll-mt-16 px-4 py-16 sm:px-6">
      <SectionHeading kicker="Projects" title="More projects" />
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hud group flex h-full flex-col transition-colors hover:border-line-strong"
            >
              <PanelHeader right={<StatusPill status={p.status} />}>{p.line}</PanelHeader>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <div>
                  <h3 className="font-mono text-lg font-semibold group-hover:text-foreground">{p.name}</h3>
                  <span className="label">{p.lang}</span>
                </div>
                <p className="text-sm leading-6 text-muted">{p.summary}</p>
                <div className="mt-auto flex items-baseline gap-2 border-t border-line pt-4">
                  <span className="font-mono text-2xl font-semibold">{p.headline.value}</span>
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
        <li className="flex flex-col border border-dashed border-line-strong bg-panel">
          <PanelHeader right={<StatusPill status="queued" />}>06</PanelHeader>
          <div className="flex flex-1 flex-col justify-center gap-3 p-5">
            <h3 className="font-mono text-lg font-semibold">Next build</h3>
            <p className="text-sm leading-6 text-muted">
              Slot reserved. More open-source projects are on the way.
            </p>
            <span className="font-mono text-xs text-muted">
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
      <SectionHeading kicker="Software factory" title="How we build" />
      <div className="relative mt-10">
        <div className="absolute top-[22px] right-0 left-0 hidden h-px bg-line-strong lg:block" aria-hidden>
          <span className="packet absolute -top-[3px] size-[7px] rounded-full bg-foreground shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        </div>
        <ol className="grid gap-4 lg:grid-cols-5">
          {process.map((s) => (
            <li key={s.step} className="relative flex flex-col gap-3">
              <span className="relative z-10 grid size-11 place-items-center border border-foreground/60 bg-background font-mono text-sm">
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
        <PanelHeader>
          Contact
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
                  className="block border border-line-strong px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors hover:border-foreground"
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
