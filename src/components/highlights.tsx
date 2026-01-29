import {
  BarChart3,
  Shield,
  Workflow,
  Database,
  Cloud,
  MessageSquare,
} from "lucide-react";
import { Reveal, HoverLift } from "@/components/motion";

const items = [
  {
    icon: BarChart3,
    title: "Dashboards & BI",
    text:
      "Indicadores claros, com contexto e direcionamento. Menos achismo, mais decisão.",
  },
  {
    icon: Database,
    title: "SQL & Dados",
    text:
      "Modelagem, consultas, performance e regras de negócio bem definidas, sem gambiarra.",
  },
  {
    icon: Workflow,
    title: "Automações",
    text:
      "Office 365, integrações e rotinas que reduzem retrabalho e erro humano.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp & Bots",
    text:
      "Fluxos guiados, atendimento humano, pedidos e integrações com sistemas.",
  },
  {
    icon: Cloud,
    title: "Infra & AWS",
    text:
      "Servidores, deploy e monitoramento com base sólida para escalar com segurança.",
  },
  {
    icon: Shield,
    title: "Segurança",
    text:
      "Boas práticas, hardening e firewall para operar com tranquilidade.",
  },
];

export function Highlights() {
  return (
    <section className="py-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title">O Que Eu Faço</h2>
        <p className="text-sm text-zinc-400">
          Foco em valor, não em firula
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => {
          const Icon = it.icon;
          return (
            <Reveal key={it.title} delay={idx * 0.04}>
              <HoverLift>
                <div className="card card-hover p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-zinc-800 bg-zinc-950/40">
                      <Icon size={18} className="text-emerald-300" />
                    </div>
                    <p className="font-semibold text-zinc-100">
                      {it.title}
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {it.text}
                  </p>
                </div>
              </HoverLift>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
