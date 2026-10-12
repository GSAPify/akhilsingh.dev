// Every figure here comes from the product's own README or git history. Update both together.

export type Status = "shipped" | "building" | "rnd" | "queued";

export const statusLabel: Record<Status, string> = {
  shipped: "Shipped",
  building: "In build",
  rnd: "R&D",
  queued: "Queued",
};

export const github = "https://github.com/GSAPify";

export function projectHref(slug: string) {
  return `/projects/${slug}/`;
}

export const edith = {
  slug: "edith",
  name: "EDITH",
  expansion: "Even Dead I'm The Hero",
  href: `${github}/EDITH`,
  license: "MIT",
  firstCommit: "2026-07-05T19:58:33+05:30",
  summary:
    "A local-first, voice-first AI presence for macOS. EDITH remembers your projects and working style, watches your dev sessions, and takes action on your behalf. Everything runs inside one daemon: edithd.",
  principle:
    "Local-first is a constraint, not a preference. The graph, transcripts and keys stay on the machine. The only thing that leaves is a redacted payload to the model gateway.",
  telemetry: [
    { label: "Commits", value: "183" },
    { label: "Test files", value: "66" },
    { label: "Slices built", value: "0 to 6" },
    { label: "Runtime", value: "1 daemon" },
  ],
  subsystems: [
    {
      name: "Voice loop",
      core: true,
      detail: "Wake word, speech-to-text and text-to-speech. ElevenLabs or local Piper.",
    },
    {
      name: "Graph memory",
      detail: "Kuzu graph plus sqlite-vec vectors, on disk, with bounded compaction.",
    },
    {
      name: "Tiered router",
      detail: "Sonnet is the talking voice. Opus thinks in the background and never blocks a turn.",
    },
    {
      name: "Redaction choke-point",
      detail: "Runs inside every model call and on every TTS and bus payload.",
    },
    {
      name: "Autonomy gate",
      detail: "Default-deny over a closed action vocabulary, with a windowed token budget.",
    },
    {
      name: "Session awareness",
      detail: "Taps every Claude Code terminal and narrates what changed.",
    },
    {
      name: "Desktop control",
      core: true,
      detail: "Launches apps and drives terminals through osascript and open.",
    },
    {
      name: "PR review skill",
      detail: "First autonomous action. Confirm-gated before anything is posted.",
    },
  ],
  slices: [
    { id: "00", name: "North-star architecture", state: "Done" },
    { id: "01", name: "Memory, Brain, edithd, Control API", state: "Done" },
    { id: "02", name: "PR-review skill", state: "Done" },
    { id: "03", name: "Voice: wake, STT, TTS", state: "Core done" },
    { id: "04", name: "Session awareness", state: "Done" },
    { id: "05", name: "Router + latency masking", state: "Done" },
    { id: "06", name: "Desktop control", state: "Core done" },
  ],
  requirements: "macOS · Apple Silicon · Python 3.11 · any Anthropic-compatible gateway",
};

export const ohlcv = {
  slug: "ohlcv-validator",
  line: "02",
  name: "ohlcv-validator",
  version: "v0.1.0",
  license: "MIT",
  lang: "C++20",
  href: `${github}/ohlcv-validator`,
  summary:
    "A low-latency market-data pipeline built to HFT engineering standards. It validates live and exchange-style feeds on a zero-allocation hot path, reconstructs a redundant A/B multicast feed, and rebuilds an L2 order book with snapshot recovery.",
  bar: "Every correctness claim has a test. Every performance claim has a measurement.",
  hotPath: { value: "6.03", unit: "ns / record", note: "single core · Apple Silicon · 2026-07-27" },
  // x86 rdtscp tail, Ryzen 9 7900X3D. Bars scale against the largest value.
  latency: [
    { label: "p50", ns: 20 },
    { label: "p99", ns: 30 },
    { label: "p99.9", ns: 40 },
  ],
  throughput: [
    { label: "Single core", value: "165.8M rec/s", note: "Apple Silicon" },
    { label: "24 cores", value: "~1.1B rec/s", note: "x86" },
  ],
  hardening: [
    { label: "C++ tests", value: "115" },
    { label: "Python tests", value: "32" },
    { label: "Sanitizers", value: "ASan · UBSan · TSan" },
    { label: "Parser", value: "Fuzzed" },
  ],
  proofs: [
    {
      name: "Zero allocations, proven",
      detail: "A test overrides global operator new and fails on any hot-path allocation.",
    },
    {
      name: "A/B feed arbitration",
      detail: "Every sequence delivered once, in order, from whichever line wins. Real gaps detected, reorders tolerated.",
    },
    {
      name: "Snapshot recovery",
      detail: "A gapped stream rebuilt through recovery is byte-identical to a from-scratch build.",
    },
    {
      name: "Binary over JSON",
      detail: "The measured path reads fixed-stride 88-byte records straight from mmap. No parse, no copy.",
    },
  ],
  pipeline: ["Line A + B", "FeedArbitrator", "WireRecord", "Validator", "Violations"],
};

export const products = [
  {
    slug: "mach",
    line: "03",
    name: "Mach",
    lang: "Python",
    status: "shipped" as Status,
    summary:
      "Audio intelligence platform: real-time WebSocket streaming, Chromaprint and constellation fingerprinting, and spectral analysis mapped with UMAP.",
    headline: { value: "Live", unit: "audio stream", note: "WebSocket" },
    metrics: ["Plugin DSP effects chain", "Spectral + harmonic analysis", "3D audio map"],
    href: `${github}/bird_mach`,
  },
  {
    slug: "akhil-skills",
    line: "04",
    name: "akhil-skills",
    lang: "Python",
    status: "shipped" as Status,
    summary:
      "Portable agent skills: concise procedures for how a coding agent should work, with validate, install and doctor tooling.",
    headline: { value: "7", unit: "original skills", note: "Agent Skills" },
    metrics: ["Validate · install · doctor", "Claude Code and Cursor", "User or project scope"],
    href: `${github}/akhil-skills`,
  },
  {
    slug: "isaacxakhil",
    line: "05",
    name: "IsacxAkhil",
    lang: "Python · Rust",
    status: "rnd" as Status,
    summary:
      "Sim-to-real 6-DoF object pose estimation around Isaac Sim and YCB objects, with a Rust crate for fast ONNX inference.",
    headline: { value: "6-DoF", unit: "pose tracking", note: "Isaac Sim" },
    metrics: ["Target: YCB sim-to-real", "YOLO to ONNX export", "Rust vision-inference"],
    href: `${github}/IsacxAkhil`,
  },
];

export const lineBoard = [
  { line: "01", name: "EDITH", status: "building" as Status, slug: edith.slug },
  { line: ohlcv.line, name: ohlcv.name, status: "shipped" as Status, slug: ohlcv.slug },
  ...products.map(({ line, name, status, slug }) => ({ line, name, status, slug })),
  { line: "06", name: "Next build", status: "queued" as Status, slug: undefined },
];

export const process = [
  { step: "01", name: "Spec", detail: "North-star architecture first, then one spec per slice." },
  { step: "02", name: "Slice", detail: "Ship vertical slices that work end to end, not layers." },
  {
    step: "03",
    name: "Test first",
    detail: "Red to green. Hardware and network sit behind injectable seams.",
  },
  {
    step: "04",
    name: "Measure",
    detail: "Every performance claim has a benchmark with its date, host and command.",
  },
  {
    step: "05",
    name: "Record",
    detail: "Each slice closes with a completion record. Limitations get written down.",
  },
];

export const contact = [
  { label: "GitHub", href: github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akhil-singh-/" },
  { label: "Email", href: "mailto:akhilshreds1010@gmail.com" },
];

/** Case-study sections shown on each project page. Optional sections are skipped when absent. */
export type CaseStudy = {
  problem: string;
  pipeline?: string[];
  decisions: { name: string; detail: string }[];
  proof?: { label: string; value: string }[];
  limits: string[];
};

// Sources: each repo's README (EDITH "Limitations", ohlcv "Why this exists" and "Engineering
// decisions"), its ADRs and LOG.md. Keep in step with the repos; do not add unsourced claims.
export const caseStudies: Record<string, CaseStudy> = {
  edith: {
    problem:
      "A voice assistant that remembers your projects and working style across sessions and acts on your behalf, without your graph, transcripts or keys ever leaving the machine.",
    decisions: [
      {
        name: "Local-first as a constraint",
        detail: "Memory, transcripts and keys stay on disk. Only a redacted payload goes to the model gateway.",
      },
      {
        name: "Sonnet talks, Opus thinks",
        detail: "A spoken turn gets a fast Sonnet acknowledgement. Deep reasoning runs in the background and reports back later.",
      },
      {
        name: "One redaction choke-point",
        detail: "The same sanitizer runs inside every model call and on every TTS and bus payload.",
      },
      {
        name: "Default-deny autonomy",
        detail: "Actions pass a gate over a closed vocabulary, with a token budget that never gates the live voice path.",
      },
      {
        name: "Injectable seams everywhere",
        detail: "Mic, wake word, STT, TTS, gh, the gateway and osascript sit behind seams, so the core is tested headlessly.",
      },
    ],
    limits: [
      "The autonomy gate's ASK verdict is unreachable today, so it has two verdicts in practice, not three.",
      "There is no SIGTERM handler, so stopping the LaunchAgent skips compaction and a clean store close.",
      "Logs are neither redacted nor rotated.",
      "Embedded Kuzu is single-process, so the viewer, finder and ingest need the daemon stopped first.",
      "Live hardware smoke tests (launchd, menu bar, full voice loop, desktop actions) are still owner-run and outstanding.",
    ],
  },
  "ohlcv-validator": {
    problem:
      "Most market-data validators check daily bars for research. This one targets the hot path instead: validating live and exchange-style feeds with zero allocations, using the cache-aware, measured techniques low-latency trading systems are built on.",
    decisions: [
      {
        name: "Binary over JSON for the measured path",
        detail: "Fixed-layout records are read straight from mmap. A live JSON feed exists as a real-data demo, but it is not what gets timed.",
      },
      {
        name: "Throughput, framed honestly",
        detail: "Per-record cost is below Apple Silicon's ~41 ns clock floor, so latency tails are measured on x86 with rdtscp instead.",
      },
      {
        name: "Claims proven, not asserted",
        detail: "Zero allocations is a test that overrides global operator new and fails on any hot-path allocation.",
      },
      {
        name: "Reconstruction with tolerance",
        detail: "Trade-to-bar checks use a relative tolerance, because real feeds round prices to a tick.",
      },
    ],
    limits: [
      "The multicast integration test is built but kept out of CI, since runners do not guarantee multicast.",
      "macOS multicast loopback drops packets under bursts, so the demo publisher is paced. Linux is reliable.",
      "Gap handling is detection, not recovery: a detected gap is where a real system would request a retransmit.",
      "The order book is L2. Per-order L3 is a follow-up.",
    ],
  },
  mach: {
    problem:
      "Mach turns audio from a file, a microphone or a browser tab into analysis you can explore: real-time spectral and harmonic features, fingerprints to match and compare recordings, and a 3D map of the sound.",
    pipeline: ["File, mic or tab audio", "WebSocket stream", "Spectral + harmonic analysis", "Fingerprinting", "UMAP 3D map"],
    decisions: [
      { name: "FastAPI and Pydantic", detail: "The API is FastAPI with Pydantic validation (ADR 0001, ADR 0009)." },
      { name: "WebSockets for live updates", detail: "The live view streams over WebSockets (ADR 0011)." },
      { name: "UMAP for the 3D map", detail: "Audio features are projected into the explorable 3D space with UMAP (ADR 0006)." },
      { name: "Plugin effects chain", detail: "DSP effects are plugins on an extensible chain, not hard-coded stages." },
    ],
    proof: [
      { label: "Test files", value: "432" },
      { label: "CI", value: "Passing" },
      { label: "Deploy", value: "Docker + Render" },
      { label: "CLI", value: "analyze · compare" },
    ],
    limits: ["No benchmarks for latency or fingerprint-matching accuracy are published yet."],
  },
  "akhil-skills": {
    problem:
      "akhil-skills packages how I want coding agents to work into seven portable Agent Skills, so Claude Code and Cursor follow the same procedures in every repo. Facts about a specific repo live in project memory instead.",
    pipeline: ["validate.sh", "install.sh", "doctor.sh", "build-archive.sh"],
    decisions: [
      { name: "Procedures, not facts", detail: "Skills say how to work. What is true about one repo stays in project memory." },
      {
        name: "Provenance kept",
        detail: "The vendored Matt Pocock skills keep their MIT license and a pinned checksum manifest.",
      },
      { name: "Reference, do not copy", detail: "Managed plugins and other material are referenced, never copied in." },
      { name: "One installer, two agents", detail: "--agent claude, cursor or both, at user or project scope." },
    ],
    proof: [
      { label: "Original skills", value: "7" },
      { label: "Vendored sets", value: "1" },
      { label: "Checks", value: "validate · doctor" },
      { label: "Agents", value: "Claude Code · Cursor" },
    ],
    limits: [
      "The skills encode one engineer's workflow, so they are opinionated by design.",
      "There is no eval harness yet that measures whether a skill changes agent behaviour.",
    ],
  },
  isaacxakhil: {
    problem:
      "A sim-to-real 6-DoF object pose estimation stack around Isaac Sim: synthetic data, pose estimation, tracking and latency measurement, evaluated against real YCB objects.",
    pipeline: [
      "Isaac Sim scene",
      "Replicator synthetic data",
      "Keypoints + PnP pose",
      "EKF tracking",
      "ONNX + Rust loop",
      "Real YCB evaluation",
    ],
    decisions: [
      {
        name: "Keypoints + PnP over RGB-D fusion",
        detail: "A clearer geometry story that is easier to debug with overlays. Depth stays available for refinement (ADR 001).",
      },
      {
        name: "Minimal Rust scope",
        detail: "A tracker crate first. Full Rust inference only after the model and evaluation work (ADR 002).",
      },
      { name: "YCB as the benchmark anchor", detail: "3 to 5 physical YCB counterparts for the sim-to-real evaluation." },
      {
        name: "A written cut order",
        detail: "If the schedule slips: drop full Rust inference, then multi-object tracking, then real-world ablations. Never the sim-to-real photos, latency or failure analysis.",
      },
    ],
    proof: [
      { label: "Headless Franka scene", value: "Runs, exit 0" },
      { label: "GPU", value: "RTX 4070 SUPER, CUDA" },
      { label: "Rust", value: "Loads ONNX models" },
      { label: "Plan", value: "6 phases" },
    ],
    limits: [
      "Early days: Phase 1 (Isaac Sim foundation) is in progress, and there is no trained model or result yet.",
      "In review: YOLOv8 decoding in Rust that matches Ultralytics to under 0.7 px, a tested Python package, CI and license files.",
    ],
  },
};
