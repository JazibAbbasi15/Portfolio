"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "glass" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-mono text-lg font-semibold tracking-tight">
          Jazib<span className="text-gradient">.dev</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-border px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon size={19} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={19} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
