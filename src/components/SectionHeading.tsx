"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <span className="text-sm font-mono tracking-widest text-accent-2 uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
