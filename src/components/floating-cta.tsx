"use client";

import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="https://wa.me/5561981643467?text=Oi%20C%C3%A9lio!%20Quero%20falar%20sobre%20um%20projeto."
      target="_blank"
      rel="noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        rounded-full border border-zinc-800
        bg-zinc-950/90 px-4 py-3
        text-sm font-semibold text-zinc-100
        shadow-lg backdrop-blur
        transition-all hover:scale-[1.03] hover:border-zinc-600
      "
      aria-label="Falar Sobre Um Projeto no WhatsApp"
    >
      <MessageCircle size={18} className="text-emerald-400" />
      Falar Sobre Um Projeto
    </a>
  );
}
