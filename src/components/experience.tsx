import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion";

const experience = [
  {
    title: "OAB-GO",
    role: "Analista de Requisitos Jr (Dados & Integrações)",
    time: "2025 — Atual",
    bullets: [
      "Documentação técnica de requisitos e desenho de integrações orientadas a dados.",
      "Criação de fluxos de automação e tratamento de dados utilizando n8n e rotinas internas.",
      "Desenvolvimento de relatórios dinâmicos via JasperReports integrados ao ERP.",
    ],
  },
  {
    title: "Two V Technology",
    role: "Analista de Dados / BI (Freelance)",
    time: "2022 — Atual",
    bullets: [
      "Modelagem de dados e criação de dashboards gerenciais e operacionais em Power BI.",
      "Desenvolvimento de consultas SQL e pipelines simples de ETL para padronização e carga de dados.",
      "Construção de APIs REST e integrações para captura de dados e automação de rotinas.",
    ],
  },
  {
    title: "Goiás Esporte Clube",
    role: "Suporte & Desenvolvimento (Dados Operacionais)",
    time: "2024 — 2025",
    bullets: [
      "Manutenção de sistemas internos em PHP e apoio a rotinas operacionais orientadas a dados.",
      "Implementação de soluções low-code com Power Apps e Power Automate no Microsoft 365.",
      "Organização e padronização de informações para relatórios e acompanhamento interno.",
    ],
  },
  {
    title: "Grupo Imerge / TLM / Novka",
    role: "Analista de Processos & Dados",
    time: "2022 — 2023",
    bullets: [
      "Otimização de fluxos de dados e automação de processos administrativos.",
      "Suporte técnico em banco de dados e geração de relatórios de produtividade.",
      "Padronização e validação de dados para redução de inconsistências operacionais.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-12">
      <h2 className="section-title">Experiência</h2>

      <div className="mt-6 grid gap-4">
        {experience.map((e, idx) => (
          <Reveal key={`${e.title}-${e.time}`} delay={idx * 0.05}>
            <div className="card p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-zinc-100">{e.title}</p>
                  <p className="mt-1 text-sm text-zinc-400">{e.role}</p>
                </div>
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
