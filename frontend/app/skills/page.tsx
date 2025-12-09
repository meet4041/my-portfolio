'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "Go", "React", "Java", "JavaScript"]
  },
  {
    title: "Frameworks",
    skills: ["Flask", "Django", "FastAPI", "Tailwind", "Bootstrap", "Next.js"]
  },
  {
    title: "Cloud & Databases",
    skills: ["MongoDB", "MySQL", "Supabase", "PostgreSQL", "SQLite"]
  },
  {
    title: "Libraries & Tools",
    skills: ["Numpy", "Pandas", "Matplotlib", "Git", "GitHub", "Docker", "Postman", "VS Code"]
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
    <main className="min-h-screen pt-32 px-6 pb-20 max-w-6xl mx-auto">
      
      {/* Header Section */}
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
        >
          Technical <span className="text-indigo-500">Proficiency</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-indigo-500/30 hover:bg-zinc-900 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-zinc-800/50 text-zinc-300 text-sm px-3 py-1.5 rounded-lg border border-white/5 hover:border-indigo-500/30 hover:text-white transition-colors cursor-default"
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