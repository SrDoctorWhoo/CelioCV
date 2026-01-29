import { Reveal } from "@/components/motion";

const groups = [
  {
    title: "dados & bi",
    skills: ["sql", "power bi", "modelagem", "kpis", "etl"],
  },
  {
    title: "automação & sistemas",
    skills: ["power automate", "power apps", "node.js", "php/laravel", "apis"],
  },
  {
    title: "infra",
    skills: ["aws", "linux", "deploy", "monitoramento", "segurança/firewall"],
  },
  {
    title: "erp",
    skills: ["sankhya", "regras de negócio", "procedures", "integrações"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title">skills</h2>
        <p className="text-sm text-zinc-400">uso diário / avançado</p>
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
