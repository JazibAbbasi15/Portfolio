"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./icons/BrandIcons";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated transition-colors hover:border-accent"
    >
      <button
        onClick={() => onOpen(project)}
        className="relative aspect-[16/10] w-full overflow-hidden text-left"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-white">
            Featured
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-1 text-sm text-accent-2">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/80"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => onOpen(project)}
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Details
          </button>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon size={15} />
            Repo
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ExternalLink size={15} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
