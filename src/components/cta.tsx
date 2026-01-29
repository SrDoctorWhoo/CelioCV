export function CTA() {
  return (
    <section className="py-14">
      <div className="card mx-auto max-w-4xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-zinc-100">
          Vamos Resolver Seu Problema
        </h2>

        <p className="mt-3 text-zinc-300">
          Me explique o contexto. Eu retorno com diagnóstico técnico, próximos passos e uma proposta objetiva.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#contato" className="btn-solid">
            Falar Sobre Um Projeto
          </a>

          <a
            href="https://wa.me/5561981643467?text=Oi%20C%C3%A9lio!%20Quero%20falar%20sobre%20um%20projeto."
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            WhatsApp Direto
          </a>
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Diagnóstico Sem Compromisso • Resposta Direta • Escopo Claro
        </p>
      </div>
    </section>
  );
}
