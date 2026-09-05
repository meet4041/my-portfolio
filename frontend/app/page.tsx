'use client';

import Hero from "@/components/Hero";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaArrowRight } from 'react-icons/fa';

const services = [
  { icon: <FaBrain />, title: "AI Product Prototypes", desc: "Turning ML and LLM ideas into interfaces people can actually use." },
  { icon: <FaServer />, title: "Backend & APIs", desc: "Designing reliable services, data flows, and integrations that support real products." },
  { icon: <FaCode />, title: "Frontend Systems", desc: "Crafting calm, responsive interfaces that make complex workflows feel lighter." },
];

const principles = [
  'Models are only useful when the UX is clear.',
  'Developer tools should feel as polished as consumer products.',
  'Backend architecture should stay simple before it scales.',
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3">Services</p>
            <h2 className="section-title text-5xl font-semibold text-[var(--color-text)] md:text-6xl">Engineering domains</h2>
          </div>
          <p className="balanced-text max-w-xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
            I like products that feel technically sharp and visually restrained, especially where AI meets real user workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="surface-card rounded-lg p-8 hover:-translate-y-1 hover:border-[rgba(107,255,211,.38)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[var(--color-line)] bg-[rgba(107,255,211,.05)] text-xl text-[var(--color-accent)]">
                {s.icon}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-[var(--color-text)]">{s.title}</h3>
              <p className="leading-7 text-[var(--color-muted)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <div className="surface-card rounded-lg p-8 md:p-10">
          <div className="mb-8">
            <p className="eyebrow mb-3">Approach</p>
            <h2 className="section-title text-4xl font-semibold text-[var(--color-text)] md:text-5xl">Built on clear engineering principles.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-[var(--color-line)] bg-black/20 p-5"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-soft)]">
                  0{index + 1}
                </p>
                <p className="text-base leading-7 text-[var(--color-muted)]">{principle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="surface-card mx-auto max-w-5xl rounded-lg p-12 text-center md:p-20"
        >
          <p className="eyebrow mb-4">Let&apos;s create</p>
          <h2 className="section-title mb-6 text-5xl font-semibold text-[var(--color-text)] md:text-7xl">Have a complex problem? Let&apos;s ship the solution.</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            I&apos;m open to AI product builds, backend-heavy development, and frontend work where clarity matters as much as capability.
          </p>
          <Link
            href="/contact"
            className="mx-auto inline-flex items-center gap-3 bg-[var(--color-accent)] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[.14em] text-[#04100d] hover:-translate-y-0.5"
          >
            Contact Me <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
