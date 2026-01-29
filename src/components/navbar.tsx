const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#skills", label: "Skills" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-semibold tracking-wide text-zinc-100">
            Célio Veloso
          </span>
        </a>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-300 transition-colors hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn">
          Falar Comigo
        </a>
      </div>
    </div>
  );
}
