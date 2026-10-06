// Every figure here comes from the product's own README or git history. Update both together.

export type Status = "shipped" | "building" | "rnd" | "queued";

export const statusLabel: Record<Status, string> = {
  shipped: "Shipped",
  building: "In build",
  rnd: "R&D",
  queued: "Queued",
};

export const github = "https://github.com/GSAPify";

export const edith = {
  name: "EDITH",
  expansion: "Even Dead I'm The Hero",
  href: `${github}/EDITH`,
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
  { line: "01", name: "EDITH", status: "building" as Status },
  { line: ohlcv.line, name: ohlcv.name, status: "shipped" as Status },
  ...products.map(({ line, name, status }) => ({ line, name, status })),
  { line: "06", name: "Next build", status: "queued" as Status },
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

export const eventLog = [
  { tag: "EDITH", text: "Slice 06 desktop control: core done" },
  { tag: "EDITH", text: "launchd LaunchAgent: always-on at login" },
  { tag: "EDITH", text: "Menu-bar control app over the unix socket" },
  { tag: "OHLCV", text: "ASan/UBSan across the suite, TSan on the ring" },
  { tag: "MACH", text: "Live mic and tab-audio visuals on /live" },
  { tag: "ISAAC", text: "Rust vision-inference loads exported ONNX" },
];

export const contact = [
  { label: "GitHub", href: github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akhil-singh-/" },
  { label: "Email", href: "mailto:akhilshreds1010@gmail.com" },
];
