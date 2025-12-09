'use client';

import Hero from "@/components/Hero";
import Link from 'next/link';
// 1. Import the Next.js Image component
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaArrowRight } from 'react-icons/fa';

// Mock data for services preview
const services = [
  { icon: <FaCode />, title: "Frontend Dev", desc: "Crafting responsive, interactive UIs with React & Next.js." },
  { icon: <FaServer />, title: "Backend API", desc: "Building robust REST & GraphQL APIs with Node.js." },
  { icon: <FaMobileAlt />, title: "Mobile Apps", desc: "Developing cross-platform apps using React Native." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Services Preview Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I don't just write code; I build digital solutions that solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all hover:-translate-y-2"
            >
              <div className="text-4xl text-purple-400 mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Featured Project Banner */}
      <section className="py-20 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1">
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Featured Work</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Building the Future of Tech</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Check out my latest project, a full-stack AI dashboard that helps users visualize data in real-time. 
              Built with the MERN stack and powered by Next.js 15.
            </p>
            <Link href="/projects">
              <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-gray-200 transition-colors">
                View All Projects
              </button>
            </Link>
          </div>
          
          {/* Image Container */}
          <div className="flex-1 h-64 md:h-96 w-full relative overflow-hidden rounded-2xl group order-1 md:order-2 border border-white/10">
             {/* 2. The Next.js Image Component 
                - Replace the src below with your image path (e.g., src="/my-project.png")
                - 'fill' makes it take up the parent container's space
                - 'object-cover' ensures it doesn't stretch distortingly
             */}
             <Image 
               src="/image.png" // TODO: Replace with your local image path
               alt="Featured Project Screenshot"
               fill
               className="object-cover group-hover:scale-110 transition-transform duration-700"
             />
             
             {/* Optional: A subtle overlay tint to make it match the theme better */}
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-blue-900/30 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action (CTA) */}
      <section className="py-32 text-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 md:p-20 shadow-2xl shadow-purple-900/50"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Have an Idea?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            I am currently open for freelance projects and job opportunities. Let's build something amazing together.
          </p>
          <Link href="/contact">
            <button className="bg-slate-950 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
              Contact Me <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}