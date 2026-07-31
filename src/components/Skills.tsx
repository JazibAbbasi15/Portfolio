"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build with"
          description="A generalist stack spanning web, mobile, and systems-level languages — picked up shipping real client and academic projects."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-background-elevated p-6"
            >
              <h3 className="font-mono text-sm uppercase tracking-wider text-accent-2">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground/90 transition-colors hover:border-accent hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
