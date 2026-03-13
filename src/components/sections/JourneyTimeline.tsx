'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Star, Zap } from 'lucide-react';

export default function JourneyTimeline() {
  const experiences = [
    {
      year: '2010 - 2012',
      title: 'Menor Aprendiz',
      company: 'AOC',
      description: 'Início da jornada aos 14 anos, aprendendo a base da disciplina e processos em uma grande corporação.',
      icon: <GraduationCap className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      year: '2012 - 2014',
      title: 'Estágio Frontend',
      company: 'Zellar (Incubada GTP)',
      description: 'Primeiro contato real com desenvolvimento. De estagiário a efetivado, construindo as bases técnicas.',
      icon: <Zap className="h-5 w-5" />,
      color: 'bg-rose-100 text-rose-600',
    },
    {
      year: '2015 - 2018',
      title: 'Desenvolvedor Junior',
      company: 'Acesso Soluções de Pagamentos',
      description: 'Foco total em sistemas de pagamento e escalabilidade, consolidando conhecimentos em ecossistemas React.',
      icon: <Briefcase className="h-5 w-5" />,
      color: 'bg-slate-100 text-slate-600',
    },
    {
      year: 'Hoje',
      title: 'Senior Frontend Developer',
      company: 'Méliuz',
      description: 'Liderando iniciativas de frontend em uma das maiores empresas de tecnologia do Brasil.',
      icon: <Star className="h-5 w-5" />,
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <section id="work" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">Carreira</span>
            <h2 className="text-5xl font-bold tracking-tighter sm:text-7xl">
              Minha <span className="text-rose-400">Jornada</span>
            </h2>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-zinc-200 hidden md:block" />

            <div className="flex flex-col gap-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
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
                          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">{exp.year}</p>
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
