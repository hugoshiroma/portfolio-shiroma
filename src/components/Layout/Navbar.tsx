'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 z-50 w-full px-6 py-6"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/20 px-6 py-3 backdrop-blur-md shadow-sm">
        <Link href="/" className="text-xl font-bold uppercase tracking-tighter text-zinc-900">
          Shiroma
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-rose-500"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button className="hidden rounded-full bg-zinc-900 px-4 py-2 text-[10px] uppercase tracking-widest text-white transition-transform hover:scale-105 sm:block">
          Let's talk
        </button>
      </nav>
    </motion.header>
  );
}
