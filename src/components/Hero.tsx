"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px circle at 15% 10%, rgba(109,91,255,0.16), transparent 60%), radial-gradient(500px circle at 85% 30%, rgba(34,211,238,0.12), transparent 60%)",
        }}
      />
      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-mono text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to full-stack & freelance opportunities
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]} —{" "}
            <span className="text-gradient">{profile.title}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>

          <ul className="mt-6 flex flex-col gap-2">
            {profile.heroHighlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-foreground/90">
                <span className="h-1 w-1 rounded-full bg-accent-2" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              View my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent"
            >
              <Mail size={16} />
              Contact me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-background-elevated">
            <div
              aria-hidden
              className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-accent to-accent-2 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
            />
            <Image
              src={profile.headshot}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 80vw, 400px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
