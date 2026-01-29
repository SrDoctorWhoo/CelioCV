"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Reveal, HoverLift } from "@/components/motion";
import { SpotlightCard } from "@/components/spotlight-card";
import { ProjectModal, type Project } from "@/components/project-modal";

const projects: Project[] = [
  {
    title: "Dashboards Executivos (BI)",
    desc: "Painéis com indicadores, filtros e visão executiva. Foco em decisão rápida e confiável.",
    tags: ["Power BI", "SQL", "KPIs"],
    result: "Reduz o tempo de análise e aumenta a rastreabilidade das informações.",
    link: null,
    details: [
      "Levantamento de requisitos com as áreas",
      "Modelagem de dados e criação de medidas/KPIs",
      "Layout executivo com filtros por contexto",
      "Publicação e governança (acesso e manutenção)",
    ],
  },
  {
    title: "Automações no Office 365",
    desc: "Rotinas para reduzir retrabalho: aprovações, alertas, integrações e logs.",
    tags: ["Power Automate", "Power Apps", "Office 365"],
    result: "Processos mais rápidos, com menos erro humano e mais controle.",
    link: null,
    details: [
      "Desenho do fluxo e validações",
      "Registro de logs e auditoria básica",
      "Notificações e aprovações",
      "Integração com planilhas, listas e formulários",
    ],
  },
  {
    title: "Integrações & Bots no WhatsApp",
    desc: "Funil conversacional, handoff para humano, captura de leads e geração de pedidos.",
    tags: ["Node.js", "Venom/WPPConnect", "API"],
    result: "Atendimento escalável, organizado e rastreável.",
    link: null,
    details: [
      "Menu e intenções (funil guiado)",
      "Handoff para atendimento humano quando necessário",
      "Registro de leads e pedidos",
      "Integração com sistema/painel",
    ],
  },
  {
    title: "ERP (Sankhya): Regras & Automações",
    desc: "Procedures, queries e processos para automatizar rotinas e reforçar compliance.",
    tags: ["SQL Server", "ERP", "Regras de Negócio"],
    result: "Menos retrabalho, mais controle e previsibilidade na operação.",
    link: null,
    details: [
      "Regras de negócio em procedures e consultas",
      "Automação de rotinas e conferências",
      "Relatórios de validação e rastreio",
      "Apoio à operação com melhoria contínua",
    ],
  },
  {
    title: "Infraestrutura & Deploy",
    desc: "Deploy, monitoramento e base de infraestrutura para aplicações e dashboards.",
    tags: ["AWS", "Linux", "Monitoramento"],
    result: "Mais estabilidade, segurança e previsibilidade em produção.",
    link: null,
    details: [
      "Deploy e configuração de ambiente",
      "Monitoramento básico e alertas",
      "Boas práticas de segurança",
      "Documentação do ambiente",
    ],
  },
  {
    title: "Sites & Sistemas Web",
    desc: "Sites rápidos e sistemas com login/painel, focados em conversão e operação.",
    tags: ["Laravel", "React", "MySQL"],
    result: "Presença profissional e pipeline de leads mais consistente.",
    link: null,
    details: [
      "Layout moderno e responsivo",
      "Painel administrativo e cadastros",
      "Integrações (WhatsApp/E-mail)",
      "SEO básico e performance",
    ],
  },
];

function BrowserShot({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-3">
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <div className="ml-2 truncate text-xs text-zinc-400">{title}</div>
      </div>

      <div className="mt-3 h-28 rounded-xl bg-[radial-gradient(420px_circle_at_20%_20%,rgba(16,185,129,0.18),transparent_50%),radial-gradient(420px_circle_at_80%_30%,rgba(59,130,246,0.12),transparent_55%)]" />
    </div>
  );
}

export function Projects() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Project | null>(null);

  function openModal(p: Project) {
    setSelected(p);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setSelected(null);
  }

  return (
    <section id="projetos" className="py-12">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="section-title">Projetos</h2>
        <p className="text-sm text-zinc-400">
          Clique em um card para ver o case
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 0.05}>
            <HoverLift>
              <button
                type="button"
                onClick={() => openModal(p)}
                className="text-left"
              >
                <SpotlightCard className="card card-hover group p-5">
                  <div className="absolute -inset-1 -z-10 opacity-50 blur-2xl bg-[radial-gradient(500px_circle_at_20%_20%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(500px_circle_at_80%_30%,rgba(59,130,246,0.10),transparent_55%)]" />

                  <BrowserShot title={p.title} />

                  <h3 className="mt-4 text-lg font-semibold text-zinc-100">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-zinc-200">
                    <span className="text-zinc-400">Resultado:</span> {p.result}
                  </p>

                  {p.link ? (
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                      Ver Link <ExternalLink size={16} />
                    </div>
                  ) : (
                    <p className="mt-4 text-xs text-zinc-500">
                      Abrir Case →
                    </p>
                  )}
                </SpotlightCard>
              </button>
            </HoverLift>
          </Reveal>
        ))}
      </div>

      <ProjectModal open={open} onClose={closeModal} project={selected} />
    </section>
  );
}
