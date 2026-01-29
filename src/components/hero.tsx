"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";

const PROFILE = {
  name: "célio veloso",
  role: "analista de dados • automações • sistemas",
  tagline:
    "transformo dados e processos em decisões e automações que economizam tempo e dinheiro.",
  location: "goiânia • brasil",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  whatsapp: "5562999999999",
};

export function Hero() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="absolute inset-0 -z-10 opacity-80" />

      <div className="grid gap-10 md:grid-cols-5 md:items-center">
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-zinc-400">{PROFILE.location}</p>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300">
            <Sparkles size={14} className="text-emerald-300" />
            foco em entrega e resultado
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {PROFILE.name}
          </h1>

          <p className="mt-3 text-base text-zinc-300 md:text-lg">
            {PROFILE.role}
          </p>

          <p className="mt-5 max-w-2xl text-zinc-300">{PROFILE.tagline}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projetos" className="btn-solid">
              ver projetos <ArrowRight size={16} />
            </a>

            <a
              href={`https://wa.me/${PROFILE.whatsapp}?text=oi%20c%C3%A9lio!%20vi%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto.`}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              whatsapp <ArrowRight size={16} />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2.5 text-sm text-zinc-200 hover:border-zinc-600"
            >
              <Linkedin size={16} /> linkedin
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2.5 text-sm text-zinc-200 hover:border-zinc-600"
            >
              <Github size={16} /> github
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-zinc-200">resumo rápido</p>
              <span className="rounded-full border border-zinc-700 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300">
                disponível
              </span>
            </div>

            <div className="mt-4 grid gap-3 text-sm text-zinc-300">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                <p className="font-medium text-zinc-200">foco</p>
                <p className="mt-1">
                  dashboards, integrações, automações (office/whatsapp), sql e
                  erp.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                <p className="font-medium text-zinc-200">diferencial</p>
                <p className="mt-1">
                  entrego solução completa: dados + processo + implementação.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                <p className="font-medium text-zinc-200">stack comum</p>
                <p className="mt-1">
                  sql • power bi • sankhya/erp • node/php • aws • automações.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
