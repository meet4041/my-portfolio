'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaBrain, FaCode, FaServer } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Languages",
    description: "The foundations I use to reason about systems and ship reliable code.",
    skills: ["Python", "JavaScript", "Dart", "Go", "Java", "C", "C++"]
  },
  {
    title: "Web & Mobile",
    description: "Interfaces and APIs that make technical products clear and useful.",
    skills: ["React", "Next.js", "Flutter", "Flask", "Django", "FastAPI", "Tailwind CSS"]
  },
  {
    title: "AI & Data",
    description: "The toolkit behind computer-vision, data, and language-model workflows.",
    skills: ["OpenCV", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "LLMs", "Computer Vision"]
  },
  {
    title: "Databases",
    description: "Practical storage choices for products, APIs, and data-heavy features.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Supabase"]
  },
  {
    title: "Tools",
    description: "The everyday tools I use to test, collaborate, deploy, and improve.",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code"]
  }
];

const focusAreas = [
  { icon: <FaBrain />, title: 'Applied AI', text: 'Computer vision, LLM integration, and model workflows designed around real user problems.' },
  { icon: <FaServer />, title: 'Backend systems', text: 'APIs, data processing, authentication, and infrastructure that keep products dependable.' },
  { icon: <FaCode />, title: 'Product engineering', text: 'Taking a working idea from prototype to a clear, responsive experience.' },
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
          The tools I use to build and ship.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
        >
          A practical stack shaped by coursework, personal projects, and production AI work.
        </motion.p>
      </div>

      <section className="mb-16 grid gap-4 md:grid-cols-3">
        {focusAreas.map((area, index) => (
          <motion.article key={area.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="surface-card rounded-lg p-6 hover:-translate-y-1 hover:border-[rgba(107,255,211,.4)]">
            <div className="mb-5 flex h-11 w-11 items-center justify-center border border-[var(--color-line)] bg-[rgba(107,255,211,.05)] text-lg text-[var(--color-accent)]">{area.icon}</div>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">{area.title}</h2>
            <p className="mt-3 leading-7 text-[var(--color-muted)]">{area.text}</p>
          </motion.article>
        ))}
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="surface-card group rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(107,255,211,.4)]"
          >
            <h3 className="mb-6 font-mono text-xl font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
              {category.title}
            </h3>
            <p className="mb-6 min-h-14 leading-6 text-[var(--color-muted)]">{category.description}</p>
            
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

      <section className="surface-card mx-auto mt-16 max-w-4xl rounded-lg p-10 text-center md:p-14">
        <p className="eyebrow mb-4">Proof over buzzwords</p>
        <h2 className="section-title text-4xl font-semibold text-[var(--color-text)] md:text-5xl">See these skills in action.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">Explore the projects where these tools come together to solve real problems across AI, backend engineering, and product development.</p>
        <Link href="/projects" className="mt-8 inline-flex items-center gap-3 bg-[var(--color-accent)] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[.14em] text-[#04100d] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(107,255,211,.22)]">Explore projects <FaArrowRight /></Link>
      </section>
    </main>
  );
}
