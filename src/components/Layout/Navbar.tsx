'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useI18n, Trans, Language } from '@/hooks/useI18n';
import { cn } from '@/lib/utils';
import { useState } from 'react'; // Import useState

const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
  ];

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 p-1 backdrop-blur-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-full text-sm transition-all duration-300 hover:bg-white/20',
            language === lang.code ? 'bg-white/30 shadow-sm scale-110' : 'opacity-50 grayscale hover:grayscale-0'
          )}
          title={lang.label}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export default function Navbar() {
  const navItems = [
    { key: 'navHome', href: '/#home' },
    { key: 'navAbout', href: '/#about' },
    { key: 'navJourney', href: '/#journey' },
    { key: 'navProjects', href: '/projects' },
  ] as const;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 z-50 w-full px-4 py-6 md:px-6 md:py-8"
    >
      {/* Navigation Bar */}
      <nav className={cn(
        "mx-auto flex w-full items-center justify-between rounded-full border border-white/40 bg-white/40 px-6 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-md", // Mobile layout
        "md:max-w-7xl md:grid md:grid-cols-3 md:px-8 md:py-4 md:backdrop-blur-xl" // Desktop grid layout
      )}>

        {/* Column 1 (Desktop) / Left Side (Mobile) */}
        <div className="flex items-center">
          {/* Hamburger Button (Mobile Only) */}
          <button
            onClick={toggleMobileMenu}
            className="block md:hidden h-7 w-7 cursor-pointer p-1 mr-4"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-full w-full text-black bg-black"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon (3 lines)
              <div className="flex flex-col justify-between h-full">
                <span className="block h-0.5 w-full rounded-full bg-black"></span>
                <span className="block h-0.5 w-full rounded-full bg-black"></span>
                <span className="block h-0.5 w-full rounded-full bg-black"></span>
              </div>
            )}
          </button>
          {/* Placeholder for Logo or brand on desktop */}
          <div className="hidden md:block"> {/* Placeholder for potential logo on desktop */}
            {/* If there was a logo, it would go here */}
          </div>
        </div>

        {/* Column 2 (Desktop) / Center (Mobile - empty for now) */}
        <div className="hidden md:flex md:items-center md:justify-center">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group relative whitespace-nowrap text-xs uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-900 px-3"
            >
              <Trans i18nKey={item.key} />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Column 3 (Desktop) / Right Side (Mobile) */}
        <div className="flex items-center justify-end">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/50 transition-opacity duration-300"
          onClick={toggleMobileMenu} // Close menu when clicking on the backdrop
          style={{
            // Glassmorphism styles
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            backdropFilter: 'blur(12px) saturate(180%)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(209, 213, 219, 0.3)',
          }}
          aria-modal="true"
          role="dialog"
        >
          <div className="flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}> {/* Stop propagation to prevent closing when clicking on menu items */}
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative text-xl uppercase tracking-[0.2em] text-zinc-800 transition-colors hover:text-rose-500"
                onClick={() => {
                  toggleMobileMenu(); // Close menu on link click
                }}
              >
                <Trans i18nKey={item.key} />
                {/* Underline effect for mobile links */}
                <span className="absolute -bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 bg-rose-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="mt-10"> {/* More spacing */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
