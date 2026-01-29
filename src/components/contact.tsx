import { Mail, MessageCircle, Github, Linkedin, ArrowRight } from "lucide-react";
import { Reveal, HoverLift } from "@/components/motion";

const CONTACT = {
  email: "celioveloso.dev@gmail.com",
  whatsapp: "5561981643467",
  linkedin: "https://www.linkedin.com/in/celioveloso",
  github: "https://github.com/celioveloso",
};

function ContactCard({
  title,
  value,
  desc,
  href,
  icon,
}: {
  title: string;
  value: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <HoverLift>
      <a
        className="card card-hover block p-5"
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-zinc-800 bg-zinc-950/40">
              {icon}
            </div>
            <div>
              <p className="text-sm text-zinc-400">{title}</p>
              <p className="mt-0.5 font-semibold text-zinc-100">{value}</p>
            </div>
          </div>

          <ArrowRight size={18} className="text-zinc-400" />
        </div>

        <p className="mt-3 text-sm text-zinc-300">{desc}</p>
      </a>
    </HoverLift>
  );
}

export function Contact() {
  return (
    <section id="contato" className="py-12">
      <Reveal>
        <div className="card p-6 md:p-8">
          <h2 className="section-title">contato</h2>
          <p className="mt-2 text-zinc-300">
            entre em contato, explique o contexto do seu problema ou ideia.
            eu retorno com diagnóstico técnico, prazo estimado e a melhor solução possível.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ContactCard
              title="whatsapp"
              value="+55 61 98164-3467"
              desc="canal mais rápido para conversas diretas e alinhamentos iniciais"
              href={`https://wa.me/${CONTACT.whatsapp}?text=oi%20c%C3%A9lio!%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.`}
              icon={<MessageCircle size={18} className="text-emerald-300" />}
            />

            <ContactCard
              title="email"
              value={CONTACT.email}
              desc="ideal para propostas formais, documentos e detalhes técnicos"
              href={`mailto:${CONTACT.email}`}
              icon={<Mail size={18} className="text-emerald-300" />}
            />

            <ContactCard
              title="linkedin"
              value="ver perfil profissional"
              desc="experiência, histórico profissional e networking"
              href={CONTACT.linkedin}
              icon={<Linkedin size={18} className="text-emerald-300" />}
            />

            <ContactCard
              title="github"
              value="explorar repositórios"
              desc="projetos, código-fonte e soluções em produção"
              href={CONTACT.github}
              icon={<Github size={18} className="text-emerald-300" />}
            />
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            extensões disponíveis sob demanda: página de serviços, estudos de caso detalhados,
            botão para download do currículo em pdf e modais explicativos de projetos.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
