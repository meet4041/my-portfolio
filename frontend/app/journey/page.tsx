'use client';
import { motion } from 'framer-motion';

// Data from Meet-Gandhi.pdf
const history = [
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
    desc: "Sports Committee Demonstrated strong leadership and organizational skills by managing logistics, inventory, and scheduling for inter-university athletic tournaments. Cultivated teamwork and discipline among peers while ensuring the seamless execution of high-energy sporting events under tight deadlines."
  },
  {
    role: "Member",
    company: "Google Developer Group on Campus(GDG) DAIICT",
    link: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A97938393&keywords=google%20developer%20groups%20on%20campus%20dau&origin=RICH_QUERY_SUGGESTION&position=0&searchId=3f28e23a-6e54-4aa7-aeb3-33010a396ef8&sid=Bai&spellCorrectionEnabled=false",
    date: "Jan 2024 - Dec 2025",
    desc: "GDG (Google Developer Groups) Served as a key organizer for campus tech events and hackathons, connecting students with industry standards and the broader developer ecosystem. Facilitated hands-on sessions and community meetups that encouraged skill development in modern web and cloud technologies."
  },
  {
    role: "Member",
    company: "AI Club DAIICT",
    link: "https://www.linkedin.com/company/ai-club-daiict/posts/?feedView=all",
    date: "Sep 2024 - Dec 2025",
    desc: "Actively engaged in exploring emerging artificial intelligence trends by organizing technical workshops and collaborative coding sessions for the student body. Fostered a culture of peer learning and innovation, helping members bridge the gap between theoretical concepts and practical machine learning applications."
  },
  {
    role: "MSc - Information Technology",
    company: "Dhirubhai Ambani Institute (DAU)",
    // College Website
    link: "https://www.daiict.ac.in",
    date: "2024 - Present",
    desc: "Pursuing Master's degree. Member of AI Club and Google Developer Club & Sports Committee."
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
    <main className="min-h-screen pt-24 px-4 pb-20 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">My Journey</h1>
      
      <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-0 md:pl-8 space-y-12">
        {history.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Dot on the timeline */}
            <div className="absolute -left-[9px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            
            <div className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all">
              <span className="text-sm text-indigo-500 font-mono mb-2 block">{item.date}</span>
              <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
              
              {/* UPDATED: Company Name with Link */}
              <h4 className="text-xl text-gray-400 mb-4 flex items-center gap-2">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 hover:underline transition-colors decoration-indigo-500/50 flex items-center gap-1 w-fit"
                >
                  {item.company}
                  {/* External Link Icon (SVG) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block opacity-70">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </h4>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}