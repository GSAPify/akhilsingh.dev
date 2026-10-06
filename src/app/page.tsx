// Placeholder content. Edit these and push; Cloudflare Pages redeploys on every push to main.
const profile = {
  name: "Akhil Singh",
  role: "Engineer",
  tagline: "I build things for the web. This is where some of them live.",
  about:
    "A short paragraph about who you are, what you work on, and what you care about. Keep it to two or three sentences.",
};

const projects = [
  {
    title: "Project one",
    description: "One line on what it does and why it is interesting.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
  },
  {
    title: "Project two",
    description: "One line on what it does and why it is interesting.",
    tags: ["Python", "AWS"],
    href: "#",
  },
  {
    title: "Project three",
    description: "One line on what it does and why it is interesting.",
    tags: ["React", "Cloudflare"],
    href: "#",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/GSAPify" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "#" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-24 px-6 py-24 sm:py-32">
      <section className="flex flex-col gap-6">
        <p className="font-mono text-sm text-zinc-500">{profile.role}</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {profile.tagline}
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-sm uppercase tracking-widest text-zinc-500">
          About
        </h2>
        <p className="max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">
          {profile.about}
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-sm uppercase tracking-widest text-zinc-500">
          Projects
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                className="flex h-full flex-col gap-3 rounded-2xl border border-black/[.08] p-5 transition-colors hover:bg-black/[.03] dark:border-white/[.12] dark:hover:bg-white/[.04]"
              >
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/[.05] px-2.5 py-0.5 font-mono text-xs dark:bg-white/[.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="flex flex-col gap-4 border-t border-black/[.08] pt-8 dark:border-white/[.12]">
        <h2 className="font-mono text-sm uppercase tracking-widest text-zinc-500">
          Contact
        </h2>
        <ul className="flex flex-wrap gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
