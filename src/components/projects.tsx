"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Reveal, HoverLift } from "@/components/motion";
import { SpotlightCard } from "@/components/spotlight-card";
import { ProjectModal, type Project } from "@/components/project-modal";

const projects: Project[] = [
  {
    title: "dashboards executivos (bi)",
    desc: "painéis com indicadores, filtros e visão executiva. foco em decisão rápida.",
    tags: ["power bi", "sql", "kpis"],
    result: "reduz tempo de análise e aumenta rastreabilidade.",
    link: null,
    details: [
      "levantamento de requisitos com as áreas",
      "modelagem de dados e criação de medidas/kpis",
      "layout executivo + filtros por contexto",
      "publicação e governança (acesso e manutenção)",
    ],
  },
  {
    title: "automações office 365",
    desc: "rotinas para reduzir retrabalho: aprovações, alertas, integrações e logs.",
    tags: ["power automate", "power apps", "office 365"],
    result: "processos mais rápidos com menos erro humano.",
    link: null,
    details: [
      "desenho do fluxo e validações",
      "registro de logs e auditoria básica",
      "notificações e aprovações",
      "integração com planilhas / listas / formulários",
    ],
  },
  {
    title: "integrações & bots whatsapp",
    desc: "funil conversacional, fallback humano, captura de lead e pedidos.",
    tags: ["node", "venom/wppconnect", "api"],
    result: "atendimento escalável e rastreável.",
    link: null,
    details: [
      "menu e intenções (funil guiado)",
      "handoff para humano quando necessário",
      "registro de leads/pedidos",
      "integração com sistema/painel",
    ],
  },
  {
    title: "erp / sankhya: regras e automações",
    desc: "procedures, queries e processos para automatizar rotinas e compliance.",
    tags: ["sql server", "erp", "regras de negócio"],
    result: "menos retrabalho e mais controle.",
    link: null,
    details: [
      "regras de negócio em procedures/consultas",
      "automação de rotinas e conferências",
      "relatórios de validação e rastreio",
      "apoio a operação com melhoria contínua",
    ],
  },
  {
    title: "infra & deploy",
    desc: "deploy, monitoramento e base de infraestrutura para apps e dashboards.",
    tags: ["aws", "linux", "monitoramento"],
    result: "mais estabilidade e previsibilidade.",
    link: null,
    details: [
      "deploy e configuração de ambiente",
      "monitoramento básico e alertas",
      "boas práticas de segurança",
      "documentação do ambiente",
    ],
  },
  {
    title: "sites e sistemas web",
    desc: "sites rápidos e sistemas com login/painel, focados em conversão e operação.",
    tags: ["laravel", "react", "mysql"],
    result: "presença profissional e pipeline de lead.",
    link: null,
    details: [
      "layout moderno e responsivo",
      "painel admin e cadastros",
      "integrações (whatsapp/email)",
      "seo básico e performance",
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
        <h2 className="section-title">projetos</h2>
        <p className="text-sm text-zinc-400">
          clique em um card pra ver o case
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
                    <span className="text-zinc-400">resultado:</span> {p.result}
                  </p>

                  {p.link ? (
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                      ver link <ExternalLink size={16} />
                    </div>
                  ) : (
                    <p className="mt-4 text-xs text-zinc-500">
                      abrir case →
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
