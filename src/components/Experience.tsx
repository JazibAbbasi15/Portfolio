"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="Experience"
          description="Client work, freelance delivery, and the final year project that ties AI and blockchain into a full-stack build."
        />

        <div className="relative flex flex-col gap-10 border-l border-border pl-8">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.role + entry.organization}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background-elevated text-accent-2">
                <Briefcase size={13} />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
                <span className="font-mono text-xs text-muted">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent-2">
                {entry.organization}
                {entry.location ? ` · ${entry.location}` : ""}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {entry.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
