import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion";

const experience = [
  {
    title: "goiás esporte clube",
    time: "atual",
    bullets: [
      "administração e automações em erp (sankhya).",
      "consultas sql, regras de negócio e suporte a operação.",
      "dashboards e relatórios para decisão.",
    ],
  },
  {
    title: "grupo imerge",
    time: "passado",
    bullets: [
      "gestão e suporte em erp (senior mega).",
      "processos, dados e integração com áreas de negócio.",
    ],
  },
  {
    title: "two v technology",
    time: "paralelo",
    bullets: [
      "sites, consultoria de ti, servidores, segurança e automações.",
      "dashboards e soluções sob medida.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-12">
      <h2 className="section-title">experiência</h2>

      <div className="mt-6 grid gap-4">
        {experience.map((e, idx) => (
          <Reveal key={e.title} delay={idx * 0.05}>
            <div className="card p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-semibold text-zinc-100">{e.title}</p>
                <span className="pill">{e.time}</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 text-emerald-300" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
