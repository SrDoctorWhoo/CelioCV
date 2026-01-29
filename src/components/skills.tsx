import { Reveal } from "@/components/motion";

const groups = [
  {
    title: "Dados & BI",
    skills: ["SQL", "Power BI", "Modelagem de Dados", "KPIs", "ETL"],
  },
  {
    title: "Automação & Sistemas",
    skills: ["Power Automate", "Power Apps", "Node.js", "PHP / Laravel", "APIs"],
  },
  {
    title: "Infraestrutura",
    skills: ["AWS", "Linux", "Deploy", "Monitoramento", "Segurança / Firewall"],
  },
  {
    title: "ERP",
    skills: ["Sankhya", "Regras de Negócio", "Procedures", "Integrações"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title">Skills</h2>
        <p className="text-sm text-zinc-400">Uso Diário / Nível Avançado</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {groups.map((g, idx) => (
          <Reveal key={g.title} delay={idx * 0.05}>
            <div className="card p-5">
              <p className="font-semibold text-zinc-100">{g.title}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
