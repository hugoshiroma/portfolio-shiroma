'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowDownRight, Linkedin, Mail } from 'lucide-react';
import { Trans } from '@/hooks/useI18n';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for high-end feel
      },
    },
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-8"
        >
          <div className="overflow-hidden">
            <motion.h1 
              variants={itemVariants}
              className="text-7xl font-bold uppercase tracking-tighter sm:text-9xl"
            >
              <Trans i18nKey="heroTitle" /> <br />
              <span className="text-rose-400"><Trans i18nKey="heroSubtitle" /></span>
            </motion.h1>
          </div>

          <div className="overflow-hidden max-w-2xl">
            <motion.p 
              variants={itemVariants}
              className="text-lg text-zinc-400 sm:text-xl md:text-2xl leading-relaxed"
            >
              <Trans i18nKey="heroDesc" />
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="mt-4 flex flex-wrap items-center gap-6">
            <button className="group flex items-center gap-2 text-sm uppercase tracking-widest text-white transition-colors hover:text-zinc-400">
              <Trans i18nKey="viewProjects" />
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>

            <div className="flex items-center gap-4 border-l border-zinc-800 pl-6">
              <a 
                href="https://www.linkedin.com/in/hugo-gaio-shiroma-ab342215b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-blue-400"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hugo.shiroma@gmail.com" 
                className="text-zinc-500 transition-colors hover:text-rose-400"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="hidden h-px w-20 bg-zinc-800 md:block" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
              <Trans i18nKey="role" />
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative background element - Using fixed size and no blur on mobile if needed */}
      <div className="absolute -bottom-20 -right-20 -z-10 h-96 w-96 rounded-full bg-zinc-900/10 blur-[120px] pointer-events-none md:bg-zinc-900/50" />
    </section>
  );
}
