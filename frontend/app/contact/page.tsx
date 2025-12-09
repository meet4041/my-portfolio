'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 px-4 pb-20 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      
      {/* Left Side: Info */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1"
      >
        <h1 className="text-5xl font-bold mb-6">Let's Chat</h1>
        <p className="text-gray-400 text-lg mb-10">
          Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-xl">
            <div className="p-4 bg-slate-800 rounded-full text-blue-400"><FaEnvelope /></div>
            <span>contact@meetgandhi.dev</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <div className="p-4 bg-slate-800 rounded-full text-purple-400"><FaPhone /></div>
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <div className="p-4 bg-slate-800 rounded-full text-green-400"><FaMapMarkerAlt /></div>
            <span>Ahmedabad, India</span>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Form */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 bg-slate-900 p-8 rounded-3xl border border-white/5"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea rows={5} className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Hey, I have a project idea..." />
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </motion.div>
    </main>
  );
}