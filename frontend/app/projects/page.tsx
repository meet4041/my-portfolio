'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    _id: "1",
    title: "Althub Student Connect",
    description: "A platform where students, alumni, and institutions can connect around mentorship, career opportunities, and their campus community.",
    image: "/althub.png",
    tags: ["JavaScript", "Node", "React", "MongoDB"],
    liveLink: "https://althub-student-connect-mu.vercel.app",
    githubLink: "https://github.com/meet4041/Althub-Student-Connect"
  },
  {
    _id: "2",
    title: "Placemate",
    description: "A shared workspace for placement officers, students, and companies to manage campus recruitment drives in one place.",
    image: "/placemate.jpeg",
    tags: ["Javascript", "Python"],
    liveLink: "https://placemate-coral.vercel.app",
    githubLink: "https://github.com/meet4041/placemate"
  },

  {
    _id: "3",
    title: "AgroAID",
    description: "A crop and soil prediction tool built with decision trees and random forests, achieving an R² score of 0.89 on the project dataset.",
    image: "/agroaid.jpeg",
    tags: ["Python", "Scikit-learn", "ML", "Flask"],
    liveLink: "",
    githubLink: "https://github.com/meet4041/AgroAID"
  },
  {
    _id: "4",
    title: "Mini Drive",
    description: "A secure file management system featuring semantic search via OpenAI embeddings and time-limited sharing links.",
    image: "/mini-drive.jpeg",
    tags: ["Django", "Python", "SQLite", "Bootstrap"],
    liveLink: "",
    githubLink: "https://github.com/meet4041/mini-drive"
  },

  {
    _id: "5",
    title: "Network Anomaly Detector",
    description: "A Python tool that combines statistical analysis and machine-learning models to identify unusual patterns in network traffic.",
    image: "/network.png",
    tags: ["Python", "Networking", "Cybersecurity"],
    liveLink: "",
    githubLink: "https://github.com/meet4041/network-anomaly"
  },
  {
    _id: "6",
    title: "Portfolio Website",
    description: "The site you are viewing: a responsive portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    image: "/portfolio.png",
    tags: ["Next.js", "React", "Tailwind"],
    liveLink: "https://meetgandhi.dev",
    githubLink: "https://github.com/meet4041/my-portfolio"
  },
  {
    _id: "7",
    title: "techMed",
    description: "An e-pharmacy platform designed to connect customers with pharmacies through a simple ordering experience.",
    image: "/techMed.jpeg",
    tags: ["Python(flask)", "Bootstrap", "MongoDB"],
    githubLink: "https://github.com/meet4041/techMed"
  },
  {
    _id: "8",
    title: "Nexus Library System",
    description: "A terminal-based library management system with intelligent search, role-based workflows, and an object-oriented Python architecture.",
    image: "/nexus.jpeg",
    tags: ["Python", "OOP", "Rich"],
    githubLink: "https://github.com/meet4041/Nexus-Library-System"
  },
  {
    _id: "9",
    title: "Samudrasetu",
    description: "A coastal alert and preparedness system designed to help communities in Gujarat access timely safety information.",
    image: "/samudrasetu.jpeg",
    tags: ["Django", "Twillio", "Tailwind CSS"],
    liveLink: "",
    githubLink: "https://github.com/meet4041"
  },
  {
    _id: "10",
    title: "Cognitiv Trust Secure Assistant",
    description: "A VS Code extension that scans your code using Semgrep to detect insecure patterns and surfaces them as Diagnostics with optional Quick Fixes.",
    image: "/cognitiv.png",
    tags: ["Python", "Typescript"],
    githubLink: "https://github.com/meet4041"
  },
  {
    _id: "11",
    title: "KRUX Finance Support App",
    description: "Customer-facing chat and support-agent dashboard built with Next.js App Router, TypeScript, and Tailwind CSS v4.",
    image: "/Krux.png",
    tags: ["Next.js", "React", "Typescript"],
    liveLink: "https://krux-finance-app.vercel.app",
    githubLink: "https://github.com/meet4041/krux-finance-app"
  },

  {
    _id: "12",
    title: "Blood Bank P2P",
    description: "A peer-to-peer blood-bank system for managing inventory, users, hospitals, and nearby care locations.",
    image: "/blood-bank.png",
    tags: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://blood-bank-p2p.vercel.app",
    githubLink: "https://github.com/meet4041/blood-bank-p2p"
  },
  {
    _id: "13",
    title: "Josh - AI Finance Assistant",
    description: "An AI finance agent built with Node.js, Groq API, and Llama3. Features intelligent query routing and tracks income/expenses with 90% accuracy.",
    image: "/josh.jpeg",
    tags: ["Node.js", "Llama 3", "Groq API", "GenAI"],
    githubLink: "https://github.com/meet4041/Josh-AI-Finance-Assistant"
  },

];

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1400px] px-6 pb-20 pt-10 md:px-10">
      <div className="mb-16 space-y-4 text-center">
        <p className="eyebrow">Selected Work</p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title text-5xl font-semibold text-[var(--color-text)] md:text-7xl"
        >
          Things I&apos;ve built and learned from.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
        >
          Projects from coursework, internships, and independent experiments across AI, backend systems, and product development.
        </motion.p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image || ''}
                tags={project.tags}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            </motion.div>
          ))}
        </div>
    </main>
  );
}
