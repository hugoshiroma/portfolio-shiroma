'use client';

import { motion } from 'framer-motion';
import { 
  Database, 
  Ticket, 
  Music, 
  Terminal, 
  QrCode, 
  Layout, 
  ArrowUpRight,
  Github
} from 'lucide-react';
import { Trans, translations } from '@/hooks/useI18n';

type I18nKey = keyof typeof translations;

const FeatureCard = ({ 
  icon, 
  titleKey, 
  descKey, 
  className = "", 
  delay = 0 
}: { 
  icon: React.ReactNode; 
  titleKey: I18nKey; 
  descKey: I18nKey; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className={`glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:shadow-2xl hover:shadow-rose-500/5 ${className}`}
  >
    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-rose-100/20 blur-2xl transition-all group-hover:bg-rose-200/40" />
    
    <div className="relative flex flex-col gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 text-rose-500 shadow-sm transition-transform group-hover:scale-110">
        {icon}
      </div>
      
      <div>
        <h3 className="text-xl font-bold tracking-tight text-zinc-800">
          <Trans i18nKey={titleKey} />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          <Trans i18nKey={descKey} />
        </p>
      </div>
    </div>
  </motion.div>
);

export default function ProjectShowcase() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-rose-400 font-bold">
              <Trans i18nKey="featuredCase" />
            </span>
            <h2 className="mt-4 text-5xl font-bold tracking-tighter sm:text-7xl">
              <Trans i18nKey="haulesTitle" />
            </h2>
            <p className="mt-6 text-xl text-zinc-500 leading-relaxed">
              <Trans i18nKey="haulesTagline" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <button onClick={() => window.open('https://haules.com.br', '_blank')} className="flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 text-sm font-bold text-zinc-600 transition-all hover:border-rose-200 hover:text-rose-500">
              <Trans i18nKey="liveDemo" /> <ArrowUpRight className="h-4 w-4" />
            </button>
            <button onClick={() => window.open('https://github.com/hugoshiroma/haules-landing-page', '_blank')} className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white transition-all hover:bg-zinc-800">
              <Github className="h-5 w-5" />
            </button>
          </motion.div>
        </div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass mb-12 rounded-[2.5rem] p-8 md:p-12"
        >
          <div className="max-w-4xl">
            <h3 className="text-2xl font-bold text-zinc-800 mb-6"><Trans i18nKey="challengeSolution" /></h3>
            <p className="text-lg text-zinc-500 leading-relaxed">
              <Trans i18nKey="haulesDesc" />
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hardware Hack - Large Span */}
          <FeatureCard 
            icon={<Terminal className="h-6 w-6" />}
            titleKey="techRaspberry"
            descKey="techRaspberryDesc"
            className="md:col-span-2 md:row-span-1"
            delay={0.3}
          />
          
          {/* Spotify */}
          <FeatureCard 
            icon={<Music className="h-6 w-6" />}
            titleKey="spotifyPlaylist"
            descKey="spotifyPlaylistDesc"
            className="md:col-span-1"
            delay={0.4}
          />

          {/* Medusa */}
          <FeatureCard 
            icon={<Ticket className="h-6 w-6" />}
            titleKey="techMedusa"
            descKey="techMedusaDesc"
            className="md:col-span-1"
            delay={0.5}
          />

          {/* Supabase */}
          <FeatureCard 
            icon={<Database className="h-6 w-6" />}
            titleKey="techSupabase"
            descKey="techSupabaseDesc"
            className="md:col-span-1"
            delay={0.6}
          />

          {/* PoS */}
          <FeatureCard 
            icon={<QrCode className="h-6 w-6" />}
            titleKey="techPos"
            descKey="techPosDesc"
            className="md:col-span-1"
            delay={0.7}
          />

          {/* CMS */}
          <FeatureCard 
            icon={<Layout className="h-6 w-6" />}
            titleKey="techContentful"
            descKey="techContentfulDesc"
            className="md:col-span-3"
            delay={0.8}
          />
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 rounded-full bg-blue-100/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-rose-100/10 blur-[120px] pointer-events-none" />
    </section>
  );
}
