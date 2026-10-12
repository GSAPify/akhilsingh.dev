import type { Metadata } from "next";
import { PanelHeader, SectionHeading } from "@/components/hud";
import { contact, process } from "@/content";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:pt-20">
        <SectionHeading kicker="About" title="Akhil Singh" />
        <div className="mt-8 flex max-w-2xl flex-col gap-5">
          <p className="text-base leading-7 text-muted sm:text-lg">
            I build AI systems and the infrastructure underneath them: voice assistants, retrieval
            pipelines, and C++ that gets measured in nanoseconds. Most of my day-to-day work lives
            in private repos. This is the open-source side.
          </p>
          <p className="text-sm leading-6 text-muted">
            Off the keyboard: national cross-country mountain biking champion, 2021.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading kicker="Software factory" title="How we build" />
        <div className="relative mt-10">
          <div
            className="absolute top-[22px] right-0 left-0 hidden h-px bg-line-strong lg:block"
            aria-hidden
          >
            <span className="packet absolute -top-[3px] size-[7px] rounded-full bg-foreground shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
          </div>
          <ol className="grid gap-4 lg:grid-cols-5">
            {process.map((step) => (
              <li key={step.step} className="relative flex flex-col gap-3">
                <span className="relative z-10 grid size-11 place-items-center border border-foreground/60 bg-background font-mono text-sm">
                  {step.step}
                </span>
                <h3 className="font-mono text-sm font-semibold tracking-widest uppercase">
                  {step.name}
                </h3>
                <p className="text-sm leading-6 text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pt-16 pb-10 sm:px-6">
        <div className="hud">
          <PanelHeader>Contact</PanelHeader>
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Want a walkthrough of the architecture?
              </h2>
              <p className="text-muted">Happy to go deep on any of it.</p>
            </div>
            <ul className="flex flex-wrap gap-3">
              {contact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block border border-line-strong px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors hover:border-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
