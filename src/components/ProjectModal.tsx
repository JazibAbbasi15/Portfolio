"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./icons/BrandIcons";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background-elevated"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="672px"
                className="object-cover"
              />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-1 text-sm text-accent-2">{project.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-foreground">Key highlights</h4>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                >
                  <GithubIcon size={16} />
                  View repository
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent"
                  >
                    <ExternalLink size={16} />
                    Live site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
