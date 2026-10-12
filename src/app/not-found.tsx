import Link from "next/link";
import { PanelHeader } from "@/components/hud";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-16 sm:px-6">
      <div className="hud w-full max-w-xl">
        <PanelHeader>404</PanelHeader>
        <div className="flex flex-col gap-6 p-6 sm:p-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
            <p className="text-muted">The requested page does not exist.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="border border-foreground bg-foreground px-4 py-2 font-mono text-xs tracking-widest text-background uppercase transition-colors hover:bg-foreground/85"
            >
              Home
            </Link>
            <Link
              href="/projects/"
              className="border border-line-strong px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors hover:border-foreground"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
