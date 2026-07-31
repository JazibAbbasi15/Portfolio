"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading eyebrow="Background" title="Education" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {education.map((entry, i) => (
            <motion.div
              key={entry.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-background-elevated p-6"
            >
              <GraduationCap size={20} className="text-accent-2" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{entry.degree}</h3>
              <p className="mt-1 text-sm text-muted">{entry.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted">{entry.period}</p>
              {entry.details && (
                <p className="mt-3 text-sm leading-relaxed text-muted">{entry.details}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {profile.languages.map((lang) => (
            <span
              key={lang.name}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/90"
            >
              {lang.name} <span className="text-muted">· {lang.level}</span>
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
