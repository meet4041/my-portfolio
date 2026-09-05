'use client';
import { motion } from 'framer-motion';
import { FaPython, FaBrain, FaRobot } from 'react-icons/fa';
import { SiC, SiCplusplus, SiGo, SiFlask, SiDjango, SiSupabase } from 'react-icons/si';

const techStack = [
  { name: 'Python', icon: <FaPython />, color: "text-yellow-400" },
  { name: 'C', icon: <SiC />, color: "text-blue-500" },
  { name: 'C++', icon: <SiCplusplus />, color: "text-blue-600" },
  { name: 'Go', icon: <SiGo />, color: "text-cyan-400" },
  { name: 'Flask', icon: <SiFlask />, color: "text-white" },
  { name: 'Django', icon: <SiDjango />, color: "text-green-600" },
  { name: 'Supabase', icon: <SiSupabase />, color: "text-emerald-400" },
  { name: 'Machine Learning', icon: <FaBrain />, color: "text-pink-500" },
  { name: 'LLM', icon: <FaRobot />, color: "text-violet-400" },
];

export default function About() {
  return (
    <main className="min-h-screen w-full px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="eyebrow">About</p>
            <h1 className="section-title text-6xl font-semibold text-[var(--color-text)] md:text-7xl">
              An AI-focused developer who likes systems that feel clean.
            </h1>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[var(--color-muted)] md:text-xl">
            <p>
              Hi, I&apos;m <span className="font-semibold text-[var(--color-text)]">Meet Gandhi</span>.
              My journey in tech is driven by a simple motto:
              <span className="mt-4 block border-l-2 border-[var(--color-accent)] bg-[rgba(107,255,211,.04)] py-3 pl-6 font-mono text-sm text-[var(--color-accent)]">
                &ldquo;Trying to make &lsquo;Hello World&rsquo; a new &lsquo;abc&rsquo;.&rdquo;
              </span>
            </p>
            <p>
              I am an <strong className="text-[var(--color-text)]">AI/ML Engineer at BOSC Tech Labs</strong> and currently work on CricVision, an AI-powered cricket coaching product. I am also pursuing my <strong className="text-[var(--color-text)]">M.Sc. IT at DAIICT (&apos;26)</strong>.
            </p>
            <p>
              Outside work, I have helped organize sessions and events with the <strong className="text-[var(--color-text)]">AI Club</strong> and <strong className="text-[var(--color-text)]">GDG on Campus</strong> at DAIICT. Those communities taught me as much about explaining technical ideas and working with people as they did about software.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="surface-card rounded-lg p-8 md:p-10"
        >
          <div className="mb-10 text-center">
            <p className="eyebrow mb-3">Toolkit</p>
            <h3 className="font-mono text-3xl font-semibold text-[var(--color-text)]">TECH_STACK</h3>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <div className={`text-5xl ${tech.color} transition-all group-hover:scale-105`}>
                  {tech.icon}
                </div>
                <span className="text-center text-sm font-semibold text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
