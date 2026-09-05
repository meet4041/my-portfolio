'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

// 13 Projects: 3 Real + 10 Placeholders
const resumeProjects = [
  // --- REAL PROJECTS ---
  {
    _id: "1",
    title: "Althub-Student-Connect",
    description: "A modern platform connecting students, alumni, and institutions — built for mentorship, career growth, and community engagement.",
    image: "/althub.png",
    tags: ["JavaScript", "Node", "React", "MongoDB"],
    liveLink: "https://althub-student-connect-mu.vercel.app",
    githubLink: "https://github.com/meet4041/Althub-Student-Connect"
  },
  {
    _id: "2",
    title: "Placemate",
    description: "Placemate aims to provide a centralized, efficient solution for managing campus recruitment drives by connecting placement officers, students, and companies on a single platform.",
    image: "/placemate.jpeg",
    tags: ["Javascript", "Python"],
    liveLink: "https://placemate-coral.vercel.app",
    githubLink: "https://github.com/meet4041/placemate"
  },

  {
    _id: "3",
    title: "AgroAID",
    description: "A Machine Learning solution for crop and soil prediction. Uses Decision Trees and Random Forests to achieve an R² score of 0.89.",
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

  // --- PLACEHOLDER PROJECTS (Slots 4-13) ---
  {
    _id: "5",
    title: "Network Anomaly Detector",
    description: "A Python tool detecting unusual traffic patterns using statistical analysis and ML models to prevent potential security breaches.",
    image: "/network.png",
    tags: ["Python", "Networking", "Cybersecurity"],
    liveLink: "",
    githubLink: "https://github.com/meet4041/network-anomaly"
  },
  {
    _id: "6",
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js 15, Tailwind CSS, and Framer Motion, featuring a modern glassmorphism UI.",
    image: "/portfolio.png",
    tags: ["Next.js", "React", "Tailwind"],
    liveLink: "https://meetgandhi.dev",
    githubLink: "https://github.com/meet4041/my-portfolio"
  },
  {
    _id: "7",
    title: "techMed",
    description: "techMed (E-pharma) is a user-friendly Site which will be used as a third party service provider between the user and pharmacy.",
    image: "/techMed.jpeg",
    tags: ["Python(flask)", "Bootstrap", "MongoDB"],
    githubLink: "https://github.com/meet4041/techMed"
  },
  {
    _id: "8",
    title: "Nexus Library System",
    description: "Nexus is an AI-powered library system that modernizes resource management through enhanced security, intelligent search, and object-oriented design.",
    image: "/nexus.jpeg",
    tags: ["OOPs(Object Orienetd Programming)", "Rich Library"],
    githubLink: "https://github.com/meet4041/Nexus-Library-System"
  },
  {
    _id: "9",
    title: "Samudrasetu",
    description: "Coastal Safety Gujarat is a comprehensive coastal safety and alert system designed to enhance disaster preparedness and protect coastal communities in Gujarat, India.",
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
    liveLink: "krux-finance-app.vercel.app",
    githubLink: "https://github.com/meet4041/krux-finance-app"
  },

  {
    _id: "12",
    title: "Blood Bank P2P",
    description: "A Blood Bank management system, which regulates the blood inventory, users and hospitals, and also fetch the real time nearby hospital list.",
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

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/projects`);
        if (!res.ok) throw new Error("Backend offline");
        const data = await res.json();

        if (data.length === 0) {
          setProjects(resumeProjects);
        } else {
          setProjects(data);
        }
      } catch {
        console.log('Using static project data.');
        setProjects(resumeProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-[1400px] px-6 pb-20 pt-10 md:px-10">
      <div className="mb-16 space-y-4 text-center">
        <p className="eyebrow">Selected Work</p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title text-5xl font-semibold text-[var(--color-text)] md:text-7xl"
        >
          Featured work with clarity at the core.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
        >
          A mix of product design, web engineering, backend systems, and AI-driven experiments.
        </motion.p>
      </div>

      {loading ? (
        <div className="flex justify-center mt-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-accent)] border-t-transparent"></div>
        </div>
      ) : (
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
      )}
    </main>
  );
}
