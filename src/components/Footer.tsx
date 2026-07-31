import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail size={18} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
