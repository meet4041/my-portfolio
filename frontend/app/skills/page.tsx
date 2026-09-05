'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "Go", "React", "Java", "JavaScript"]
  },
  {
    title: "Frameworks",
    skills: ["Flask", "Django", "FastAPI", "Flutter", "Tailwind", "Bootstrap", "Next.js"]
  },
  {
    title: "Cloud & Databases",
    skills: ["MongoDB", "MySQL", "Supabase", "PostgreSQL", "SQLite"]
  },
  {
    title: "Libraries & Tools",
    skills: ["Numpy", "Pandas", "Matplotlib", "OpenCV", "Git", "GitHub", "Docker", "Postman", "VS Code"]
  },
  {
    title: "Coursework & Interests",
    skills: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "Agentic AI", "AI/ML"]
  },
  {
    title: "Soft Skills",
    skills: ["Team Collaboration", "Leadership", "Problem Solving", "Communication", "Time Management"]
  }
];

export default function Skills() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 pb-20 pt-10 md:px-10">
      <div className="mb-20 text-center">
        <p className="eyebrow mb-3">Capabilities</p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-6 text-5xl font-semibold text-[var(--color-text)] md:text-7xl"
        >
          Technical depth for AI and modern product engineering.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
        >
          The stack I use when building model-backed features, developer-friendly systems, and polished interfaces.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="surface-card group rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(107,255,211,.4)]"
          >
            <h3 className="mb-6 font-mono text-xl font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="cursor-default border border-[var(--color-line)] bg-[rgba(107,255,211,.04)] px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
