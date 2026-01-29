import { ArrowRight, BarChart3, Workflow, MessageSquare, Code2, Wrench } from "lucide-react";
import { Reveal, HoverLift } from "@/components/motion";

const services = [
  {
    icon: BarChart3,
    title: "Dashboards & BI",
    subtitle: "Indicadores claros para decisão",
    bullets: [
      "KPIs, filtros, visão executiva e governança",
      "Modelagem de dados e medidas (DAX quando necessário)",
      "Publicação, acesso e manutenção",
    ],
    delivery: "Prazo Médio: 7–15 Dias",
    from: "A Partir De: Sob Escopo",
  },
  {
    icon: Workflow,
    title: "Automações (Microsoft 365)",
    subtitle: "Menos retrabalho, mais controle",
    bullets: [
      "Aprovações, alertas e rotinas automatizadas",
      "Logs e auditoria básica",
      "Integração com Forms, Lists, Excel e Teams",
    ],
    delivery: "Prazo Médio: 3–10 Dias",
    from: "A Partir De: Sob Escopo",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp & Bots",
    subtitle: "Atendimento escalável e rastreável",
    bullets: [
      "Funil guiado + Handoff para humano",
      "Registro de leads/pedidos e integrações",
      "Painel/CRM sob demanda",
    ],
    delivery: "Prazo Médio: 7–20 Dias",
    from: "A Partir De: Sob Escopo",
  },
  {
    icon: Code2,
    title: "Sites & Sistemas Web",
    subtitle: "Login, painel e operação",
    bullets: [
      "Landing rápida e responsiva",
      "Admin/painel e cadastros",
      "Integrações (WhatsApp/E-mail) + SEO básico",
    ],
    delivery: "Prazo Médio: 7–25 Dias",
    from: "A Partir De: Sob Escopo",
  },
  {
    icon: Wrench,
    title: "ERP (Sankhya) & Dados",
    subtitle: "Regras, queries e automações",
    bullets: [
      "Procedures/consultas com regras de negócio",
      "Rotinas e validações para reduzir inconsistências",
      "Relatórios e rastreio operacional",
    ],
    delivery: "Prazo Médio: 5–15 Dias",
    from: "A Partir De: Sob Escopo",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-12">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="section-title">Serviços</h2>
        <p className="text-sm text-zinc-400">
          Escopo Claro • Entrega Objetiva • Foco em Resultado
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={idx * 0.04}>
              <HoverLift>
                <div className="card card-hover p-5">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-zinc-800 bg-zinc-950/40">
                      <Icon size={18} className="text-emerald-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-zinc-100">{s.title}</p>
                      <p className="mt-1 text-sm text-zinc-400">{s.subtitle}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="pill">{s.delivery}</span>
                    <span className="pill">{s.from}</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <a href="#contato" className="text-sm font-semibold text-emerald-300">
                      Quero Este Serviço <ArrowRight size={16} className="inline" />
                    </a>
                    <span className="text-xs text-zinc-500">Resposta Rápida</span>
                  </div>
                </div>
              </HoverLift>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
