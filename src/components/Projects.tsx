"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I've shipped"
          description="A mix of client deliveries, a final year AI/blockchain platform, and independent builds — spanning web, mobile-ready, and machine learning."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} onOpen={setActive} />
          ))}
        </div>
      </Container>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
