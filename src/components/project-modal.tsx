"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import React from "react";

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  result: string;
  link?: string | null;
  details?: string[];
};

export function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-200 hover:border-zinc-600"
              aria-label="Fechar Modal"
            >
              <X size={18} />
            </button>

            <p className="text-xs text-zinc-500">Case</p>
            <h3 className="mt-2 text-2xl font-semibold text-zinc-100">
              {project.title}
            </h3>
            <p className="mt-3 text-zinc-300">{project.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-4">
              <p className="text-sm text-zinc-200">
                <span className="text-zinc-400">Resultado:</span> {project.result}
              </p>
            </div>

            {project.details?.length ? (
              <div className="mt-5">
                <p className="text-sm font-semibold text-zinc-200">
                  O Que Foi Feito
                </p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                  {project.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn mt-6 inline-flex"
              >
                Ver Link <ExternalLink size={16} />
              </a>
            ) : (
              <p className="mt-6 text-xs text-zinc-500">
                Case Privado • Link Sob Demanda
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
