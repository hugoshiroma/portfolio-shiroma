'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="container mx-auto max-w-7xl">
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
              Hugo Gaio <br />
              <span className="text-rose-400">Shiroma</span>
            </motion.h1>
          </div>

          <div className="overflow-hidden max-w-2xl">
            <motion.p 
              variants={itemVariants}
              className="text-lg text-zinc-400 sm:text-xl md:text-2xl leading-relaxed"
            >
              Specializing in building exceptional digital experiences. 
              Currently crafting the future of the web with React and Next.js.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="mt-4 flex items-center gap-6">
            <button className="group flex items-center gap-2 text-sm uppercase tracking-widest text-white transition-colors hover:text-zinc-400">
              View Projects
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
            <div className="h-px w-20 bg-zinc-800" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
              Senior Frontend Engineer
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-20 -right-20 -z-10 h-96 w-96 rounded-full bg-zinc-900/50 blur-[120px]" />
    </section>
  );
}
