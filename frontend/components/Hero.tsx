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
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.16em] text-[var(--color-muted)]"><span className="status-dot h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />System online · Ahmedabad, IN</motion.div>
          <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.08}} className="eyebrow mb-5">AI/ML + FULL-STACK ENGINEER</motion.p>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.14}} className="section-title balanced-text max-w-4xl text-6xl font-bold sm:text-7xl md:text-[5.5rem]">I engineer systems that <span className="text-[var(--color-accent)]">think.</span></motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.22}} className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">I&apos;m Meet Gandhi. I turn complex AI ideas into reliable products—from data pipelines and APIs to interfaces built for real users.</motion.p>
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.3}} className="mt-8 flex flex-wrap gap-2">{stack.map(item => <span key={item} className="border border-[var(--color-line)] bg-[rgba(107,255,211,.035)] px-3 py-2 font-mono text-[10px] tracking-[.14em] text-[var(--color-muted)]">{item}</span>)}</motion.div>
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.36}} className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="inline-flex items-center gap-3 bg-[var(--color-accent)] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[.12em] text-[#04100d] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(107,255,211,.22)]">View deployments <FaArrowRight /></Link>
            <a href="https://github.com/meet4041" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center border border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/meetgandhi4041/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center border border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><FaLinkedin /></a>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.7,delay:.15}} className="surface-card relative overflow-hidden rounded-lg p-1">
          <div className="scan-line pointer-events-none absolute left-0 top-0 z-20 h-20 w-full bg-gradient-to-b from-transparent via-[rgba(107,255,211,.08)] to-transparent" />
          <div className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-3 font-mono text-[10px] tracking-[.12em] text-[var(--color-soft)]"><span>engineer.profile</span><span>PID 4041</span></div>
          <div className="space-y-6 p-6 md:p-8">
            <div className="font-mono text-xs leading-7"><p><span className="text-[var(--color-soft)]">01</span> <span className="text-[var(--color-accent-strong)]">const</span> engineer = {'{'}</p><p className="pl-7"><span className="text-[var(--color-muted)]">name:</span> <span className="text-amber-200">&quot;Meet Gandhi&quot;</span>,</p><p className="pl-7"><span className="text-[var(--color-muted)]">focus:</span> [<span className="text-amber-200">&quot;AI&quot;</span>, <span className="text-amber-200">&quot;Systems&quot;</span>, <span className="text-amber-200">&quot;Web&quot;</span>],</p><p className="pl-7"><span className="text-[var(--color-muted)]">status:</span> <span className="text-[var(--color-accent)]">&quot;building&quot;</span></p><p>{'}'};</p></div>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)]"><div className="bg-[#081014] p-5"><p className="font-mono text-3xl font-bold text-[var(--color-accent)]">13+</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--color-soft)]">Projects shipped</p></div><div className="bg-[#081014] p-5"><p className="font-mono text-3xl font-bold text-[var(--color-accent-strong)]">AI→UI</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--color-soft)]">End-to-end scope</p></div></div>
            <div className="border border-[var(--color-line)] bg-black/30 p-4 font-mono text-[11px] leading-6 text-[var(--color-muted)]"><p className="mb-2 flex items-center gap-2 text-[var(--color-accent)]"><FaCodeBranch /> CURRENT_BRANCH</p><p><span className="text-[var(--color-soft)]">$</span> building secure AI-powered products<span className="status-dot text-[var(--color-accent)]">_</span></p></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
