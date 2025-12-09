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
    // REMOVED 'bg-zinc-950' to allow the global background to show through
    <main className="min-h-screen w-full flex flex-col justify-center px-6 py-24 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Biography */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            About <span className="text-indigo-500">Me</span>
          </h1>
          
          <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed">
            <p>
              Hi, I'm <span className="text-white font-semibold">Meet Gandhi</span>. 
              My journey in tech is driven by a simple motto: 
              <span className="italic text-indigo-400 block mt-3 border-l-4 border-indigo-500 pl-6 py-2 bg-zinc-900/50 rounded-r-xl">
                "Trying to make 'Hello World' a new 'abc'."
              </span>
            </p>
            <p>
              I am currently pursuing my <strong>M.Sc. IT at DAIICT ('26)</strong>. With a strong foundation in 
              systems programming (C/C++) and modern backend architectures, I specialize in building 
              scalable solutions and intelligent AI integrations.
            </p>
            <p>
              Beyond the code, I am actively involved in the <strong>AI Club</strong> and <strong>GDGC Club</strong> at DAIICT. 
              I thrive on solving complex problems, from low-level logic to high-level machine learning models.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-zinc-900/50 p-10 rounded-[2rem] border border-white/5 backdrop-blur-sm shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-10 text-center text-white">My Tech Stack</h3>
          
          {/* Grid */}
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
                <div className={`text-5xl ${tech.color} group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center text-zinc-500 group-hover:text-white transition-colors">
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