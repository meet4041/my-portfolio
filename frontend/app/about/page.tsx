'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', icon: <FaDatabase className="text-green-400" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3 className="text-blue-500" /> },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 border-l-4 border-purple-500 pl-4">About Me</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Trying to make 'Hello World' a new 'abc.'<br></br>

          I am a highly motivated MSc.IT student at DAIICT’26 with a strong foundation in C, C++, Python, Numpy, Pandas, Backend Development, and MySQL. My academic journey at GLS University and Dhirubhai Ambani Institute of Information and Communication Technology, combined with professional experience at Ordex Technology & Solutions, has equipped me with expertise in web technologies like HTML & CSS and a passion for solving complex problems through technology. Actively involved in AI Club, GDGC Club, and the Sports Committee at DAIICT, I am always eager to collaborate, innovate, and grow in the tech space.
        </p>
      </motion.section>
    </main>
  );
}