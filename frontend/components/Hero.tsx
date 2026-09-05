'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaArrowRight, FaCodeBranch } from 'react-icons/fa';

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
        <motion.div initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.7,delay:.15}} className="surface-card relative overflow-hidden rounded-lg p-1">
          <div className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-3 font-mono text-[10px] tracking-[.12em] text-[var(--color-soft)]"><span>CURRENT WORK</span><span>2026</span></div>
          <div className="space-y-6 p-6 md:p-8">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[.16em] text-[var(--color-accent)]">CricVision</p><h2 className="text-3xl font-semibold leading-tight text-[var(--color-text)]">Computer vision for cricket coaching.</h2><p className="mt-4 leading-7 text-[var(--color-muted)]">Building video-analysis workflows that turn raw match and practice footage into feedback people can act on.</p></div>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)]"><div className="bg-[#081014] p-5"><p className="font-mono text-sm font-bold text-[var(--color-accent)]">AI/ML</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--color-soft)]">Engineering</p></div><div className="bg-[#081014] p-5"><p className="font-mono text-sm font-bold text-[var(--color-accent-strong)]">VIDEO</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--color-soft)]">Analysis</p></div></div>
            <div className="border border-[var(--color-line)] bg-black/30 p-4 font-mono text-[11px] leading-6 text-[var(--color-muted)]"><p className="mb-2 flex items-center gap-2 text-[var(--color-accent)]"><FaCodeBranch /> BOSC TECH LABS</p><p>Intern → AI/ML Engineer</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
