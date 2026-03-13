'use client';

import { motion } from 'framer-motion';
import { Cat, Dog, Leaf, Heart, MapPin, User, Terminal, Linkedin, Mail } from 'lucide-react';
import { useI18n, Trans } from '@/hooks/useI18n';
import Image from 'next/image';

export default function PersonalInfo() {
  const { t } = useI18n();

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge('1996-08-28');

  const personalData = [
    { label: t('nameLabel'), value: 'Hugo Gaio Shiroma', icon: <User className="h-4 w-4" /> },
    { label: t('ageLabel'), value: `${age} ${t('yearsLabel')}`, icon: <Heart className="h-4 w-4" /> },
    { label: t('locationLabel'), value: 'Jundiaí, SP', icon: <MapPin className="h-4 w-4" /> },
    { label: t('statusLabel'), value: t('statusValue'), icon: <Heart className="h-4 w-4 text-rose-300" /> },
    { 
      label: t('linkedinLabel'), 
      value: 'hugo-gaio-shiroma', 
      icon: <Linkedin className="h-4 w-4 text-blue-400" />,
      href: 'https://www.linkedin.com/in/hugo-gaio-shiroma-ab342215b/'
    },
    { 
      label: t('emailLabel'), 
      value: 'hugo.shiroma@gmail.com', 
      icon: <Mail className="h-4 w-4 text-rose-400" />,
      href: 'mailto:hugo.shiroma@gmail.com'
    },
  ];

  const hobbies = [
    { label: t('catsLabel'), value: t('catsValue'), icon: <Cat className="h-4 w-4" /> },
    { label: t('dogsLabel'), value: t('dogsValue'), icon: <Dog className="h-4 w-4" /> },
    { label: t('plantsLabel'), value: t('plantsValue'), icon: <Leaf className="h-4 w-4 text-emerald-400" /> },
    { label: t('relationshipLabel'), value: t('relationshipValue'), icon: <Heart className="h-4 w-4 text-rose-400" /> },
    { label: t('devLabel'), value: t('devValue'), icon: <Terminal className="h-4 w-4 text-blue-400" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Profile Photo - Circular & Glassmorphism */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
              className="relative h-32 w-32 md:h-40 md:w-40"
            >
              <div className="absolute inset-0 rounded-full bg-rose-200/20 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/50 bg-white/40 p-1 backdrop-blur-sm shadow-xl ring-1 ring-black/5">
                <Image 
                  src="/profile-photo.jpeg" 
                  alt="Hugo Shiroma" 
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-400 font-bold">
                <Trans i18nKey="personalLabel" />
              </span>
              <h2 className="text-5xl font-bold tracking-tighter sm:text-7xl leading-tight">
                <Trans i18nKey="personalTitle1" /> <br />
                <span className="text-zinc-400 italic"><Trans i18nKey="personalTitle2" /></span>
              </h2>
            </div>
            
            <p className="text-xl text-zinc-500 max-w-lg leading-relaxed">
              <Trans i18nKey="personalDesc" />
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full items-stretch">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass flex flex-col rounded-3xl p-8 shadow-sm ring-1 ring-black/5"
            >
              <h3 className="mb-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <Trans i18nKey="bioLabel" />
              </h3>
              <div className="flex flex-col gap-6">
                {personalData.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/50 text-zinc-600 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-400">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-zinc-800 transition-colors hover:text-rose-500"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-zinc-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Life Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass flex flex-col rounded-3xl p-8 shadow-sm ring-1 ring-black/5"
            >
              <h3 className="mb-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <Trans i18nKey="lifeLabel" />
              </h3>
              <div className="flex flex-col gap-5">
                {hobbies.map((item) => (
                  <div key={item.label} className="group flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/50 text-zinc-600 shadow-sm transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-400">{item.label}</p>
                      <p className="text-sm font-semibold text-zinc-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
