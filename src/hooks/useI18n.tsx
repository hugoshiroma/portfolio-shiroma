'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type Language = 'en' | 'pt';

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

export const translations: Translations = {
  // Navbar
  navHome: { en: 'Home', pt: 'Início' },
  navAbout: { en: 'About', pt: 'Sobre' },
  navJourney: { en: 'Journey', pt: 'Jornada' },
  navContact: { en: 'Let\'s talk', pt: 'Vamos conversar' },
  
  // Hero
  heroTitle: { en: 'Hugo Gaio', pt: 'Hugo Gaio' },
  heroSubtitle: { en: 'Shiroma', pt: 'Shiroma' },
  heroDesc: {
    en: 'Specializing in building exceptional digital experiences. Currently crafting the future of the web with React and Next.js.',
    pt: 'Especializado em construir experiências digitais excepcionais. Atualmente moldando o futuro da web com React e Next.js.',
  },
  viewProjects: { en: 'View Projects', pt: 'Ver Projetos' },
  role: { en: 'Senior Frontend Engineer', pt: 'Engenheiro Frontend Sênior' },

  // Personal Info
  personalLabel: { en: 'The Developer', pt: 'O Desenvolvedor' },
  personalTitle1: { en: 'Beyond the', pt: 'Além do' },
  personalTitle2: { en: 'Code', pt: 'Código' },
  personalDesc: {
    en: 'I am a developer passionate about creating unique experiences. I live with my girlfriend in a lively environment, surrounded by pets and taking care of my plants, while transforming ideas into reality in my free time.',
    pt: 'Sou um desenvolvedor apaixonado por criar experiências únicas. Moro com minha namorada em um ambiente cheio de vida, rodeado por pets e cuidando das minhas plantas, enquanto transformo ideias em realidade no meu tempo livre.',
  },
  bioLabel: { en: 'Bio', pt: 'Bio' },
  lifeLabel: { en: 'Life', pt: 'Vida' },
  nameLabel: { en: 'Name', pt: 'Nome' },
  ageLabel: { en: 'Age', pt: 'Idade' },
  yearsLabel: { en: 'Years', pt: 'Anos' },
  locationLabel: { en: 'Location', pt: 'Localização' },
  statusLabel: { en: 'Status', pt: 'Status' },
  linkedinLabel: { en: 'LinkedIn', pt: 'LinkedIn' },
  emailLabel: { en: 'Email', pt: 'E-mail' },
  statusValue: { en: 'Single, lives with girlfriend', pt: 'Solteiro, vive com a namorada' },
  catsLabel: { en: 'Cats', pt: 'Gatos' },
  catsValue: { en: '2 Cats 🐯', pt: '2 Gatos 🐯' },
  dogsLabel: { en: 'Dogs', pt: 'Cachorros' },
  dogsValue: { en: '2 Dogs 🐺', pt: '2 Cachorros 🐺' },
  plantsLabel: { en: 'Plants', pt: 'Plantas' },
  plantsValue: { en: 'Caring for plants 🌱', pt: 'Cuidado com plantinhas 🌱' },
  relationshipLabel: { en: 'Relationship', pt: 'Relacionamento' },
  relationshipValue: { en: 'Healthy & Happy 🥰', pt: 'Relacionamento saudável 🥰' },
  devLabel: { en: 'Dev', pt: 'Projetos' },
  devValue: { en: 'Personal projects 📝', pt: 'Projetos pessoais 📝' },

  // Journey
  journeyLabel: { en: 'Career', pt: 'Carreira' },
  journeyTitle1: { en: 'My', pt: 'Minha' },
  journeyTitle2: { en: 'Journey', pt: 'Jornada' },
  todayLabel: { en: 'Today', pt: 'Hoje' },
  
  // Journey Items
  exp1Title: { en: 'Apprentice', pt: 'Menor Aprendiz' },
  exp1Desc: { 
    en: 'Starting the journey at 14, learning the basics of discipline and processes in a large corporation.', 
    pt: 'Início da jornada aos 14 anos, aprendendo a base da disciplina e processos em uma grande corporação.' 
  },
  exp2Title: { en: 'Frontend Internship', pt: 'Estágio Frontend' },
  exp2Desc: { 
    en: 'First real contact with development. From intern to hired, building the technical foundations.', 
    pt: 'Primeiro contato real com desenvolvimento. De estagiário a efetivado, construindo as bases técnicas.' 
  },
  exp3Title: { en: 'Junior Developer', pt: 'Desenvolvedor Junior' },
  exp3Desc: { 
    en: 'Total focus on payment systems and scalability, consolidating knowledge in React ecosystems.', 
    pt: 'Foco total em sistemas de pagamento e escalabilidade, consolidando conhecimentos em ecossistemas React.' 
  },
  exp4Title: { en: 'Senior Frontend Developer', pt: 'Senior Frontend Developer' },
  exp4Desc: { 
    en: 'Leading frontend initiatives in one of the largest technology companies in Brazil.', 
    pt: 'Liderando iniciativas de frontend em uma das maiores empresas de tecnologia do Brasil.' 
  },
  whatsappMsg: {
    en: 'Hello! I saw your online portfolio and would like to get in touch.',
    pt: 'Olá! Vi seu portfólio online e gostaria de entrar em contato.'
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback(
    (key: keyof typeof translations): string => {
      const translation = translations[key as string];
      if (!translation) return String(key);
      return translation[language];
    },
    [language]
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

/**
 * Component for smooth fade transitions between languages
 */
export function Trans({ i18nKey, className }: { i18nKey: keyof typeof translations; className?: string }) {
  const { t, language } = useI18n();

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={language}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={className}
      >
        {t(i18nKey)}
      </motion.span>
    </AnimatePresence>
  );
}
