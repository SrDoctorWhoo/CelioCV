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
    title: "dashboards & bi",
    text: "indicadores claros, com contexto e ação. menos achismo, mais decisão.",
  },
  {
    icon: Database,
    title: "sql & dados",
    text: "modelagem, consultas, performance e regras de negócio sem gambiarra.",
  },
  {
    icon: Workflow,
    title: "automações",
    text: "office 365, integrações e rotinas que cortam retrabalho e erro humano.",
  },
  {
    icon: MessageSquare,
    title: "whatsapp / bots",
    text: "fluxo guiado, atendimento humano, pedidos e integrações com sistemas.",
  },
  {
    icon: Cloud,
    title: "infra & aws",
    text: "servidores, deploy, monitoramento e base pra escalar com segurança.",
  },
  {
    icon: Shield,
    title: "segurança",
    text: "boas práticas, hardening e firewall pra dormir tranquilo.",
  },
];

export function Highlights() {
  return (
    <section className="py-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title">o que eu faço</h2>
        <p className="text-sm text-zinc-400">foco em valor, não em firula</p>
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
                    <p className="font-semibold text-zinc-100">{it.title}</p>
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
