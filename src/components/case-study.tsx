import { PanelHeader, SectionHeading } from "@/components/hud";
import type { CaseStudy } from "@/content";

type CaseStudyProps = {
  study: CaseStudy;
};

export function ProblemBlock({ study }: CaseStudyProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
      <div className="hud">
        <PanelHeader>Problem</PanelHeader>
        <p className="p-6 text-xl leading-8 sm:p-10 sm:text-2xl sm:leading-10">{study.problem}</p>
      </div>
    </section>
  );
}

export function CaseStudySections({ study }: CaseStudyProps) {
  return (
    <>
      {study.pipeline && (
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading kicker="Architecture" title="How it works" />
          <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[0.6875rem] tracking-widest uppercase">
            {study.pipeline.map((stage, index) => (
              <span key={stage} className="flex max-w-full items-center gap-2">
                <span className="max-w-full border border-line-strong bg-background px-3 py-2 break-words">
                  {stage}
                </span>
                {index < study.pipeline!.length - 1 && <span className="text-muted">→</span>}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading kicker="Decisions" title="Key decisions" />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {study.decisions.map((decision) => (
            <li key={decision.name} className="hud flex min-w-0 flex-col gap-3 p-6">
              <span className="font-mono text-xs tracking-widest uppercase">{decision.name}</span>
              <span className="text-sm leading-6 text-muted">{decision.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {study.proof && (
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading kicker="Evidence" title="Proof" />
          <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {study.proof.map((item) => (
              <div key={item.label} className="flex min-w-0 flex-col gap-1 bg-background p-4">
                <dt className="label">{item.label}</dt>
                <dd className="font-mono text-xl break-words tabular-nums">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading kicker="Honest status" title="Limits & next" />
        <ul className="hud mt-8 divide-y divide-line">
          {study.limits.map((limit) => (
            <li key={limit} className="flex gap-3 px-6 py-4">
              <span aria-hidden className="font-mono text-xs text-muted">
                ›
              </span>
              <span className="text-sm leading-6 text-muted">{limit}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
