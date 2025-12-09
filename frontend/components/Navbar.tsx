'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },       // New
  { name: 'Experience', path: '/experience' }, // New
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },     // New
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Meet.dev
        </Link>

        <ul className="flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path} className="relative">
                <Link
                  href={link.path}
                  className={`text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-blue-500 mt-1"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;