'use client';
import { motion } from 'framer-motion';

// Data from Meet-Gandhi.pdf
const history = [
  {
    role: "AI/ML Engineer",
    company: "BOSC Tech Labs",
    link: "https://bosctechlabs.com",
    date: "July 2026 - Present",
    desc: "Working on CricVision, an AI-powered cricket coaching product. My focus is video analysis: turning practice footage into clear feedback that players and coaches can use."
  },
  {
    role: "AI/ML Intern",
    company: "BOSC Tech Labs",
    link: "https://bosctechlabs.com",
    date: "January 2026 - July 2026",
    desc: "Joined BOSC as an intern and worked on applied machine-learning problems inside a product team. The role grew into my current AI/ML Engineer position."
  },
  {
    role: "Data Science Intern",
    company: "Celebal Technology",
    link: "https://celebaltech.com",
    date: "May 2025 - July 2025",
    desc: "Developed a network anomaly detection tool using Python. Implemented ML models with Scikit-learn (15% accuracy boost), preprocessed large datasets using Pandas/NumPy, and validated systems on benchmark datasets."
  },
  {
    role: "Core Member",
    company: "Sports Committee DAIICT",
    link: "https://www.linkedin.com/company/sports-committee-da-iict/posts/?feedView=all", 
    date: "Jan 2025 - Dec 2025",
    desc: "Managed logistics, inventory, and scheduling for inter-university sports events. It was hands-on work that taught me how to coordinate a team under tight deadlines."
  },
  {
    role: "Member",
    company: "GDG on Campus, DAIICT",
    link: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A97938393&keywords=google%20developer%20groups%20on%20campus%20dau&origin=RICH_QUERY_SUGGESTION&position=0&searchId=3f28e23a-6e54-4aa7-aeb3-33010a396ef8&sid=Bai&spellCorrectionEnabled=false",
    date: "Jan 2024 - Dec 2025",
    desc: "Helped organize campus tech events, hackathons, hands-on sessions, and community meetups for students interested in modern web and cloud development."
  },
  {
    role: "Member",
    company: "AI Club DAIICT",
    link: "https://www.linkedin.com/company/ai-club-daiict/posts/?feedView=all",
    date: "Sep 2024 - Dec 2025",
    desc: "Organized technical workshops and collaborative coding sessions focused on practical machine learning and peer learning."
  },
  {
    role: "MSc - Information Technology",
    company: "Dhirubhai Ambani Institute (DAU)",
    // College Website
    link: "https://www.daiict.ac.in",
    date: "2024 - Present",
    desc: "Pursuing a Master of Science in Information Technology while building experience through research-led coursework, technical communities, and industry roles."
  },
  {
    role: "BSc - Information Technology",
    company: "GLS University",
    link: "https://www.glsuniversity.ac.in",
    date: "2021 - 2024",
    desc: "Built strong foundations in programming and computer science."
  }
];

export default function Experience() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 pb-20 pt-10 md:px-8">
      <div className="mb-12 text-center">
        <p className="eyebrow mb-3">Journey</p>
        <h1 className="section-title text-5xl font-semibold text-[var(--color-text)] md:text-7xl">The path so far</h1>
      </div>
      
      <div className="relative ml-4 space-y-12 border-l border-[var(--color-line)] md:ml-0 md:pl-8">
        {history.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="absolute -left-[7px] top-0 h-3 w-3 rotate-45 bg-[var(--color-accent)] shadow-[0_0_14px_var(--color-accent)] md:-left-[39px]" />
            
            <div className="surface-card rounded-lg p-6">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">{item.date}</span>
              <h3 className="mb-1 text-3xl font-semibold text-[var(--color-text)]">{item.role}</h3>

              <h4 className="mb-4 flex items-center gap-2 text-lg text-[var(--color-muted)]">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-1 transition-colors hover:text-[var(--color-accent-strong)] hover:underline decoration-[var(--color-accent)]/50"
                >
                  {item.company}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block opacity-70">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </h4>

              <p className="text-sm leading-7 text-[var(--color-muted)] md:text-base">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
