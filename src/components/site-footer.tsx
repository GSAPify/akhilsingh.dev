import { contact } from "@/content";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pt-8 pb-10 font-mono text-[0.6875rem] tracking-widest text-muted uppercase sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <span>© 2026 Akhil Singh · akhilsingh.dev</span>
      <nav aria-label="Contact">
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {contact.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
