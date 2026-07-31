"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (res.status !== 200) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something"
          description="Have a project in mind or an opportunity to discuss? Send a message or reach out directly."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-background-elevated p-5 transition-colors hover:border-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-accent-2">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm text-muted">Email</p>
                <p className="text-sm font-medium text-foreground">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-background-elevated p-5 transition-colors hover:border-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-accent-2">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm text-muted">Phone</p>
                <p className="text-sm font-medium text-foreground">{profile.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-background-elevated p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-accent-2">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="text-sm font-medium text-foreground">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-60"
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-emerald-400">Thanks — your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
