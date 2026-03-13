'use client';

import { motion } from 'framer-motion';
import { Cat, Dog, Leaf, Heart, MapPin, User } from 'lucide-react';

export default function PersonalInfo() {
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
    { label: 'Name', value: 'Hugo Gaio Shiroma', icon: <User className="h-4 w-4" /> },
    { label: 'Age', value: `${age} Years`, icon: <Heart className="h-4 w-4" /> },
    { label: 'Location', value: 'Jundiaí, SP', icon: <MapPin className="h-4 w-4" /> },
    { label: 'Status', value: 'Solteiro, vive com a namorada', icon: <Heart className="h-4 w-4 text-rose-300" /> },
  ];

  const hobbies = [
    { label: 'Cats', value: '2 Gatos', icon: <Cat className="h-5 w-5" /> },
    { label: 'Dogs', value: '2 Cachorros', icon: <Dog className="h-5 w-5" /> },
    { label: 'Plants', value: 'Cuidado com plantinhas', icon: <Leaf className="h-5 w-5 text-emerald-300" /> },
    { label: 'Dev', value: 'Projetos Pessoais', icon: <Heart className="h-5 w-5 text-rose-400" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-400 font-bold">O Desenvolvedor</span>
              <h2 className="text-5xl font-bold tracking-tighter sm:text-7xl">
                Além do <br />
                <span className="text-zinc-400 italic">Código</span>
              </h2>
            </div>
            
            <p className="text-xl text-zinc-500 max-w-lg leading-relaxed">
              Sou um desenvolvedor apaixonado por criar experiências únicas. 
              Moro com minha namorada em um ambiente cheio de vida, rodeado 
              por pets e cuidando das minhas plantas, enquanto transformo 
              ideias em realidade no meu tempo livre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Personal Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 space-y-6"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Bio</h3>
              <div className="space-y-4">
                {personalData.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-white/50 flex items-center justify-center text-zinc-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-400">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hobbies Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 space-y-6"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Life</h3>
              <div className="grid grid-cols-1 gap-4">
                {hobbies.map((item) => (
                  <div key={item.label} className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/40 transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-400">{item.label}</p>
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
