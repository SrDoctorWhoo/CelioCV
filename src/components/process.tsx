import { Reveal } from "@/components/motion";
import { Search, Route, Hammer, CheckCircle2, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    text: "Entendo o contexto, dores, dados disponíveis e objetivo final. Aqui nasce o escopo real.",
  },
  {
    icon: Route,
    title: "Plano de Ação",
    text: "Defino o caminho: arquitetura, entregas, prazos e riscos. Sem promessa mágica.",
  },
  {
    icon: Hammer,
    title: "Implementação",
    text: "Execução com validações, logs e padrão de qualidade. Entrega andando em produção.",
  },
  {
    icon: CheckCircle2,
    title: "Validação",
    text: "Teste com usuário/área, ajustes finos e documentação do que foi entregue.",
  },
  {
    icon: RefreshCw,
    title: "Evolução",
    text: "Melhorias contínuas: otimizações, novos indicadores, automações e suporte sob demanda.",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-12">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="section-title">Como Eu Trabalho</h2>
        <p className="text-sm text-zinc-400">Clareza No Processo = Previsibilidade Na Entrega</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={idx * 0.04}>
              <div className="card p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-zinc-800 bg-zinc-950/40">
                    <Icon size={18} className="text-emerald-300" />
                  </div>
                  <p className="font-semibold text-zinc-100">{s.title}</p>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{s.text}</p>

                <a href="#contato" className="mt-4 inline-block text-sm font-semibold text-emerald-300">
                  Pedir Diagnóstico →
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
