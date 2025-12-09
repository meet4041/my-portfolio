'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-20 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      
      {/* Left Side: Info */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-8"
      >
        <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Let's <span className="text-indigo-500">Chat</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
        </div>

        <div className="space-y-6">
          {/* Email Item */}
          <div className="flex items-center gap-5 group">
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-indigo-400 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors">
                <FaEnvelope size={20} />
            </div>
            <span className="text-zinc-300 text-lg group-hover:text-white transition-colors">meetgandhi4041@gmail.com</span>
          </div>

          {/* Phone Item */}
          <div className="flex items-center gap-5 group">
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-rose-400 group-hover:border-rose-500/50 group-hover:bg-rose-500/10 transition-colors">
                <FaPhone size={20} />
            </div>
            <span className="text-zinc-300 text-lg group-hover:text-white transition-colors">+91 6452314322</span>
          </div>

          {/* Location Item */}
          <div className="flex items-center gap-5 group">
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                <FaMapMarkerAlt size={20} />
            </div>
            <span className="text-zinc-300 text-lg group-hover:text-white transition-colors">Ahmedabad, India</span>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Form */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 w-full bg-zinc-900/50 p-8 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm shadow-xl"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
            <input 
                type="text" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600" 
                placeholder="John Doe" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
            <input 
                type="email" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600" 
                placeholder="john@example.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
            <textarea 
                rows={5} 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600 resize-none" 
                placeholder="Hey, I have a project idea..." 
            />
          </div>
          <button className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
            Send Message
          </button>
        </form>
      </motion.div>
    </main>
  );
}