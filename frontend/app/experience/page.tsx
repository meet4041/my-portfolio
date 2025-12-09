'use client';
import { motion } from 'framer-motion';

// Mock Data - Replace with your real history
const history = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    date: "2023 - Present",
    desc: "Leading a team of 5 developers building scalable MERN applications. Improved site performance by 40%."
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    date: "2021 - 2023",
    desc: "Developed interactive UIs for over 10 client projects using React and GSAP animations."
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Hub",
    date: "2020 - 2021",
    desc: "Assisted in backend API development and database management using MongoDB."
  }
];

export default function Experience() {
  return (
    <main className="min-h-screen pt-24 px-4 pb-20 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">My Journey</h1>
      
      <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-0 md:pl-8 space-y-12">
        {history.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Dot on the timeline */}
            <div className="absolute -left-[9px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            
            <div className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
              <span className="text-sm text-purple-400 font-mono mb-2 block">{item.date}</span>
              <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
              <h4 className="text-xl text-gray-400 mb-4">{item.company}</h4>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}