'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const stack = ['PYTHON', 'NEXT.JS', 'FASTAPI', 'LLM', 'POSTGRES', 'DOCKER'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-10 md:px-10 md:pt-16">
      <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative z-10">
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.16em] text-[var(--color-muted)]"><span className="status-dot h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />Ahmedabad, India · AI/ML Engineer</motion.div>
          <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.08}} className="eyebrow mb-5">AI/ML + FULL-STACK ENGINEER</motion.p>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.14}} className="section-title balanced-text max-w-4xl text-6xl font-bold sm:text-7xl md:text-[5.5rem]">I build AI products that work <span className="text-[var(--color-accent)]">outside the notebook.</span></motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.22}} className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">I&apos;m Meet Gandhi, an AI/ML Engineer at BOSC Tech Labs. I currently work on CricVision, turning cricket video into useful analysis for players and coaches.</motion.p>
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.3}} className="mt-8 flex flex-wrap gap-2">{stack.map(item => <span key={item} className="border border-[var(--color-line)] bg-[rgba(107,255,211,.035)] px-3 py-2 font-mono text-[10px] tracking-[.14em] text-[var(--color-muted)]">{item}</span>)}</motion.div>
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.36}} className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="inline-flex items-center gap-3 bg-[var(--color-accent)] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[.12em] text-[#04100d] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(107,255,211,.22)]">View my work <FaArrowRight /></Link>
            <a href="https://github.com/meet4041" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center border border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/meetgandhi4041/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center border border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><FaLinkedin /></a>
          </motion.div>
        </div>
        <div className="space-y-6">
          <motion.div initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.7,delay:.15}} className="surface-card relative overflow-hidden rounded-lg p-1">
            <div className="relative aspect-[1/1.02] overflow-hidden rounded-md">
              <Image src="/meet-gandhi-ai.jpg" alt="Meet Gandhi shown as half human and half AI" fill priority loading="eager" className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 38vw" />
              <div className="pointer-events-none absolute inset-y-0 left-1/2 w-1/2 overflow-hidden" aria-hidden="true">
                <div className="relative h-full w-[200%] -translate-x-1/2 ai-half-motion">
                  <Image src="/meet-gandhi-ai.jpg" alt="" fill className="object-cover object-center" sizes="38vw" />
                </div>
                <div className="ai-scanline absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-[rgba(107,255,211,.35)] to-transparent" />
                <span className="ai-circuit-light ai-circuit-light-one" />
                <span className="ai-circuit-light ai-circuit-light-two" />
                <span className="ai-circuit-light ai-circuit-light-three" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05080b] via-[#05080b]/70 to-transparent px-6 pb-5 pt-16">
                <p className="font-mono text-[10px] uppercase tracking-[.16em] text-[var(--color-accent)]">Meet Gandhi</p>
                <p className="mt-1 text-sm text-[var(--color-text)]">AI/ML + Full-Stack Engineer</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
