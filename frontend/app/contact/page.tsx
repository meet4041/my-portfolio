'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
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
            Let&apos;s make something that feels effortless.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)]">
            Whether you have a project idea, a role, or a collaboration in mind, I&apos;d love to hear what you&apos;re building.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-5 group">
            <div className="border border-[var(--color-line)] bg-[rgba(107,255,211,.04)] p-4 text-[var(--color-accent)]">
                <FaEnvelope size={20} />
            </div>
            <span className="text-lg text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]">meetgandhi4041@gmail.com</span>
          </div>

          <div className="flex items-center gap-5 group">
            <div className="border border-[var(--color-line)] bg-[rgba(107,255,211,.04)] p-4 text-[var(--color-accent)]">
                <FaPhone size={20} />
            </div>
            <span className="text-lg text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]">+91 6352314322</span>
          </div>

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
        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-muted)]">Name</label>
            <input 
                type="text" 
                className="w-full border border-[var(--color-line)] bg-black/25 p-4 font-mono text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none placeholder:text-[var(--color-soft)]" 
                placeholder="John Doe" 
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-muted)]">Email</label>
            <input 
                type="email" 
                className="w-full border border-[var(--color-line)] bg-black/25 p-4 font-mono text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none placeholder:text-[var(--color-soft)]" 
                placeholder="john@example.com" 
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-muted)]">Message</label>
            <textarea 
                rows={5} 
                className="w-full resize-none border border-[var(--color-line)] bg-black/25 p-4 font-mono text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none placeholder:text-[var(--color-soft)]" 
                placeholder="Hey, I have a project idea..." 
            />
          </div>
          <button className="w-full bg-[var(--color-accent)] py-4 font-mono text-xs font-bold uppercase tracking-[.14em] text-[#04100d] hover:shadow-[0_0_30px_rgba(107,255,211,.2)]">
            Send Message
          </button>
        </form>
      </motion.div>
    </main>
  );
}
