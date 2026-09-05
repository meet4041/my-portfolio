'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Journey', path: '/journey' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4 md:px-6">
        <div className="surface-card mx-auto flex max-w-6xl items-center justify-between rounded-lg px-5 py-3.5">
          <Link href="/" className="z-50 font-mono text-sm font-bold tracking-[0.12em] text-[var(--color-text)] hover:text-[var(--color-accent)]">
            MEET<span className="text-[var(--color-accent)]">.</span>GANDHI
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path} className="relative">
                  <Link
                    href={link.path}
                    className={`font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                      isActive ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)] hover:text-[var(--color-accent-strong)]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 h-px w-full bg-[var(--color-accent)]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[var(--color-muted)] hover:text-[var(--color-accent-strong)] transition-colors z-50 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[rgba(5,8,11,0.97)] backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={handleLinkClick}
                className={`font-mono text-2xl uppercase tracking-[.12em] ${
                  pathname === link.path ? 'text-[var(--color-accent)]' : 'text-[var(--color-text)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
