'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-20 md:pt-0">
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-indigo-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-rose-500/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="z-10 max-w-4xl w-full space-y-8">
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">
            Meet Gandhi
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-4"
        >
          <span className="text-zinc-200 font-medium block mb-2">Software Engineer & Data Science Practitioner</span>
          Bridging the gap between robust systems programming and modern AI applications.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4"
        >
          <Link href="/projects" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto group bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5">
              View Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
            </button>
          </Link>
          
          <div className="flex gap-4">
            <SocialLink href="https://github.com/meet4041" icon={<FaGithub />} />
            <SocialLink href="https://www.linkedin.com/in/meetgandhi4041/" icon={<FaLinkedin />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper Component for Social Icons
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-600 transition-all hover:scale-110"
  >
    {icon}
  </a>
);

export default Hero;