'use client';

import { motion } from 'framer-motion';
import { Trans } from '@/hooks/useI18n';
import ProjectShowcase from '@/components/sections/ProjectShowcase';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col pt-32">
      {/* Intro Section */}
      <section className="px-6 pb-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
              <Trans i18nKey="projectsLabel" />
            </span>
            <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl">
              <Trans i18nKey="projectsTitle1" /> <br />
              <span className="text-rose-400"><Trans i18nKey="projectsTitle2" /></span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-zinc-500 leading-relaxed">
              <Trans i18nKey="projectsSubtitle" />
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Project */}
      <ProjectShowcase />

      {/* Footer / Call to action */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-3xl"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-24" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800">
            <Trans i18nKey="comingSoon" />
          </h2>
          <p className="mt-4 text-zinc-500">
            <Trans i18nKey="stayTuned" />
          </p>
        </motion.div>
      </section>
    </div>
  );
}
