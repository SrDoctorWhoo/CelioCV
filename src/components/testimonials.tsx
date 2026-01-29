import { Reveal } from "@/components/motion";

const testimonials = [
  {
    quote:
      "Automatizou rotinas que consumiam horas e trouxe rastreabilidade. Hoje temos controle e previsibilidade.",
    author: "Cliente (Operação)",
  },
  {
    quote:
      "Dashboards ficaram objetivos e executivos. A tomada de decisão ficou muito mais rápida.",
    author: "Cliente (Gestão)",
  },
  {
    quote:
      "Integrações reduziram retrabalho e padronizaram o processo. Entrega foi direta e bem documentada.",
    author: "Cliente (TI)",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-12">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="section-title">Depoimentos</h2>
        <p className="text-sm text-zinc-400">Resultados Reais, Sem Enfeite</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <Reveal key={t.author} delay={idx * 0.04}>
            <div className="card p-5">
              <p className="text-sm leading-relaxed text-zinc-300">“{t.quote}”</p>
              <p className="mt-4 text-xs text-zinc-500">{t.author}</p>

              <a href="#contato" className="mt-4 inline-block text-sm font-semibold text-emerald-300">
                Quero Um Resultado Assim →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
