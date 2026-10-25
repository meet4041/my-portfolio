'use client';
import { motion } from 'framer-motion';
import type { FormEvent } from 'react';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = `Portfolio enquiry from ${name || 'a visitor'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:meetgandhi4041@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 md:px-10 lg:flex-row lg:items-center lg:gap-24">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-8"
      >
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="section-title mb-6 text-5xl font-semibold text-[var(--color-text)] md:text-7xl">
            Let&apos;s talk about the work.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)]">
            If you have a role, a collaboration, or an interesting engineering problem in mind, send me an email. I usually reply within a day or two.
          </p>
          <div className="inline-flex items-center gap-3 border border-[var(--color-line)] bg-[rgba(107,255,211,.04)] px-4 py-3 font-mono text-xs uppercase tracking-[.14em] text-[var(--color-accent)]">
            <span className="status-dot h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
            Open to thoughtful opportunities
          </div>
        </div>

        <div className="space-y-6">
          <a href="mailto:meetgandhi4041@gmail.com" className="flex items-center gap-5 group">
            <div className="border border-[var(--color-line)] bg-[rgba(107,255,211,.04)] p-4 text-[var(--color-accent)]">
                <FaEnvelope size={20} />
            </div>
            <span className="text-lg text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]">meetgandhi4041@gmail.com</span>
          </a>

          <a href="tel:+916352314322" className="flex items-center gap-5 group">
            <div className="border border-[var(--color-line)] bg-[rgba(107,255,211,.04)] p-4 text-[var(--color-accent)]">
                <FaPhone size={20} />
            </div>
            <span className="text-lg text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]">+91 6352314322</span>
          </a>

          <div className="flex items-center gap-5 group">
            <div className="border border-[var(--color-line)] bg-[rgba(107,255,211,.04)] p-4 text-[var(--color-accent)]">
                <FaMapMarkerAlt size={20} />
            </div>
            <span className="text-lg text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]">Ahmedabad, India</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="surface-card w-full flex-1 rounded-lg p-8 md:p-10"
      >
        <div className="space-y-8">
          <div>
            <p className="eyebrow mb-4">Start a conversation</p>
            <h2 className="text-3xl font-semibold text-[var(--color-text)]">Tell me what you&apos;re building.</h2>
            <p className="mt-4 leading-7 text-[var(--color-muted)]">Share a little context and your email app will open with a ready-to-send message. I usually reply within one or two days.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[var(--color-soft)]">Name</span>
                <input name="name" required placeholder="Your name" className="w-full border border-[var(--color-line)] bg-black/20 px-4 py-3 text-[var(--color-text)] outline-none placeholder:text-[var(--color-soft)] focus:border-[var(--color-accent)]" />
              </label>
              <label className="space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[var(--color-soft)]">Email</span>
                <input name="email" type="email" required placeholder="you@example.com" className="w-full border border-[var(--color-line)] bg-black/20 px-4 py-3 text-[var(--color-text)] outline-none placeholder:text-[var(--color-soft)] focus:border-[var(--color-accent)]" />
              </label>
            </div>
            <label className="block space-y-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[var(--color-soft)]">Message</span>
              <textarea name="message" required rows={5} placeholder="What are you working on?" className="w-full resize-y border border-[var(--color-line)] bg-black/20 px-4 py-3 leading-7 text-[var(--color-text)] outline-none placeholder:text-[var(--color-soft)] focus:border-[var(--color-accent)]" />
            </label>
            <button type="submit" className="inline-flex w-full items-center justify-between bg-[var(--color-accent)] px-5 py-4 font-mono text-xs font-bold uppercase tracking-[.12em] text-[#04100d] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(107,255,211,.22)]">
              Open email draft <FaArrowRight />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-3">
            <a href="https://github.com/meet4041" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-[var(--color-line)] px-4 py-3 font-mono text-xs uppercase text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/meetgandhi4041/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-[var(--color-line)] px-4 py-3 font-mono text-xs uppercase text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
