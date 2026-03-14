'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Star, Zap } from 'lucide-react';
import { useI18n, Trans } from '@/hooks/useI18n';
import { useMemo } from 'react';

export default function JourneyTimeline() {
  const { t } = useI18n();

  const experiences = useMemo(() => [
    {
      year: '2011 - 2013',
      title: t('exp1Title'),
      company: 'AOC',
      description: t('exp1Desc'),
      icon: <GraduationCap className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      year: '2018 - 2019',
      title: t('exp2Title'),
      company: 'Zellar (Incubada GTP)',
      description: t('exp2Desc'),
      icon: <Zap className="h-5 w-5" />,
      color: 'bg-rose-100 text-rose-600',
    },
    {
      year: '2019 - 2021',
      title: t('exp3Title'),
      company: 'Acesso Soluções de Pagamentos',
      description: t('exp3Desc'),
      icon: <Briefcase className="h-5 w-5" />,
      color: 'bg-slate-100 text-slate-600',
    },
    {
      year: '2021 - Hoje',
      title: t('exp4Title'),
      company: 'Méliuz',
      description: t('exp4Desc'),
      icon: <Star className="h-5 w-5" />,
      color: 'bg-yellow-100 text-yellow-600',
    },
  ], [t]);

  return (
    <section id="journey" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
              <Trans i18nKey="journeyLabel" />
            </span>
            <h2 className="text-5xl font-bold tracking-tighter sm:text-7xl">
              <Trans i18nKey="journeyTitle1" /> <span className="text-rose-400"><Trans i18nKey="journeyTitle2" /></span>
            </h2>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-zinc-200 hidden md:block" />

            <div className="flex flex-col gap-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="glass group rounded-3xl p-8 transition-all hover:shadow-xl hover:shadow-rose-500/5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`h-10 w-10 rounded-2xl flex items-center justify-center ${exp.color}`}>
                          {exp.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                            {exp.year === 'Hoje' ? t('todayLabel') : exp.year}
                          </p>
                          <h4 className="text-xl font-bold">{exp.title}</h4>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-rose-500 mb-2">{exp.company}</p>
                      <p className="text-zinc-500 leading-relaxed text-sm">{exp.description}</p>
                    </div>
                  </div>

                  {/* Circle on the line */}
                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#fafafa] bg-rose-400 hidden md:block" />

                  {/* Spacer for layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
