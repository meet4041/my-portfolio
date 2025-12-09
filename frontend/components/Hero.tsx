'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden relative">
      {/* Background Glow Effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]" />

      <div className="z-10 max-w-4xl">
        {/* Animated Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight"
        >
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Meet Gandhi
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          A Full Stack Developer passionate about building scalable MERN applications
          and crafting intuitive digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects">
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              View My Work <FaArrowRight />
            </button>
          </Link>
          
          <div className="flex gap-4">
            <a href="https://github.com/meet4041" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/meetgandhi4041/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-xl">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;