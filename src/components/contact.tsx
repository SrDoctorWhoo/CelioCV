import { Mail, MessageCircle, Github, Linkedin, ArrowRight } from "lucide-react";
import { Reveal, HoverLift } from "@/components/motion";

const CONTACT = {
  email: "seuemail@dominio.com",
  whatsapp: "5562999999999",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
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
            me chama e descreve o problema. eu respondo com caminho, prazo e solução.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ContactCard
              title="whatsapp"
              value={CONTACT.whatsapp}
              desc="resposta rápida e direta"
              href={`https://wa.me/${CONTACT.whatsapp}?text=oi%20c%C3%A9lio!%20vi%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto.`}
              icon={<MessageCircle size={18} className="text-emerald-300" />}
            />

            <ContactCard
              title="email"
              value={CONTACT.email}
              desc="pra propostas e docs"
              href={`mailto:${CONTACT.email}`}
              icon={<Mail size={18} className="text-emerald-300" />}
            />

            <ContactCard
              title="linkedin"
              value="abrir perfil"
              desc="histórico e networking"
              href={CONTACT.linkedin}
              icon={<Linkedin size={18} className="text-emerald-300" />}
            />

            <ContactCard
              title="github"
              value="ver repositórios"
              desc="código e projetos"
              href={CONTACT.github}
              icon={<Github size={18} className="text-emerald-300" />}
            />
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            se quiser, eu adiciono: modal de case (detalhes do projeto), botão “baixar cv em pdf” e página “serviços”.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
