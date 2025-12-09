'use client';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Frontend",
        // Combined your React ecosystem skills with the tools you are currently using
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React Native",
            "Framer Motion",
            "HTML5/CSS3"
        ]
    },
    {
        title: "Backend",
        // Included your strong backend mix: Node/Express plus Python, Go, and PHP
        skills: [
            "Node.js",
            "Express.js",
            "Python (Django/Flask)",
            "Go (Golang)",
            "PHP",
            "MongoDB",
            "PostgreSQL"
        ]
    },
    {
        title: "Tools & DevOps",
        // Focused on the tools seen in your projects (Vercel, Git) and profile
        skills: [
            "Git & GitHub",
            "Linux/Bash",
            "Vercel",
            "Render",
            "Postman",
            "Figma",
            "Supabase",
            "VS Code"
        ]
    },
    {
        title: "Soft Skills",
        // Highlighted your writing and mentorship content found in your profile
        skills: [
            "Technical Writing",
            "Mentorship",
            "Communication",
            "Problem Solving",
            "Continuous Learning",
            "Community Building"
        ]
    }
];

export default function Skills() {
    return (
        <main className="min-h-screen pt-24 px-4 pb-20 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Technical <span className="text-purple-500">Arsenal</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    A comprehensive list of the tools, languages, and frameworks I use to bring digital products to life.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-900 transition-colors"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-blue-400 border-b border-white/5 pb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <span key={skill} className="bg-white/5 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all cursor-default">
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