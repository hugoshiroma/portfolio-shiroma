'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useI18n, Trans, Language } from '@/hooks/useI18n';
import { cn } from '@/lib/utils';

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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 z-50 w-full px-4 py-6 md:px-6 md:py-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/40 bg-white/40 px-6 py-3 backdrop-blur-md shadow-lg ring-1 ring-black/5 md:grid md:grid-cols-3 md:px-8 md:py-4 md:backdrop-blur-xl">
        {/* Left: Brand/Logo (Hidden on mobile, empty on desktop for centering) */}
        <div className="hidden md:block" />

        {/* Center: Nav Items */}
        <div className="flex flex-1 justify-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group relative whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-900 md:text-[10px] md:tracking-[0.25em]"
            >
              <Trans i18nKey={item.key} />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end">
          <LanguageSwitcher />
        </div>
      </nav>
    </motion.header>
  );
}
