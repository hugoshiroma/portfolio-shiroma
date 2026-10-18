'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Trans, translations } from '@/hooks/useI18n';

type I18nKey = keyof typeof translations;

interface Project {
  slug: string;
  url: string;
  titleKey: I18nKey;
  typeKey: I18nKey;
  descKey: I18nKey;
  stack: string[];
}

// Screenshots em public/projects/<slug>.webp (1280x800)
const projects: Project[] = [
  {
    slug: 'viela-studio',
    url: 'https://viela-studio.hugo-shiroma.workers.dev',
    titleKey: 'vielaTitle',
    typeKey: 'vielaType',
    descKey: 'vielaDesc',
    stack: ['Next.js', 'Supabase', 'Pix', 'Cloudflare Workers'],
  },
  {
    slug: 'boteco-do-nono',
    url: 'https://boteco-do-nono.hugo-shiroma.workers.dev',
    titleKey: 'nonoTitle',
    typeKey: 'nonoType',
    descKey: 'nonoDesc',
    stack: ['HTML/CSS/JS', 'Schema.org', 'Cloudflare Workers'],
  },
  {
    slug: 'ramagem-garden',
    url: 'https://ramagem-garden.hugo-shiroma.workers.dev',
    titleKey: 'ramagemTitle',
    typeKey: 'ramagemType',
    descKey: 'ramagemDesc',
    stack: ['GSAP ScrollTrigger', 'Lenis', 'Three.js', 'Cloudflare Workers'],
  },
  {
    slug: 'mel-boa-florada',
    url: 'https://mel-boa-florada.hugo-shiroma.workers.dev',
    titleKey: 'florTitle',
    typeKey: 'florType',
    descKey: 'florDesc',
    stack: ['Next.js', 'Framer Motion', 'Cloudflare Workers'],
  },
  {
    slug: 'pe-de-moleque',
    url: 'https://pe-de-moleque.hugo-shiroma.workers.dev',
    titleKey: 'pdmTitle',
    typeKey: 'pdmType',
    descKey: 'pdmDesc',
    stack: ['Next.js', 'Framer Motion', 'Schema.org', 'Cloudflare Workers'],
  },
];

export default function MoreProjects() {
  return (
    <section className="relative px-6 py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-400">
            <Trans i18nKey="moreProjectsLabel" />
          </span>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter sm:text-6xl">
            <Trans i18nKey="moreProjectsTitle" />
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-zinc-500">
            <Trans i18nKey="moreProjectsDesc" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.15 }}
              viewport={{ once: true }}
              className="glass group relative flex flex-col overflow-hidden rounded-[2rem] transition-all hover:shadow-2xl hover:shadow-rose-500/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <Image
                  src={`/projects/${p.slug}.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                      <Trans i18nKey={p.typeKey} />
                    </span>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-800">
                      <Trans i18nKey={p.titleKey} />
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all group-hover:border-rose-200 group-hover:text-rose-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">
                  <Trans i18nKey={p.descKey} />
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-full bg-white/60 px-3 py-1 text-[11px] font-semibold text-zinc-500">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
