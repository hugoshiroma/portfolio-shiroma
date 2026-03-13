'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useI18n, Trans } from '@/hooks/useI18n';
import { useState, useEffect } from 'react';

export default function FloatingContact() {
  const { t } = useI18n();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 3000);
    const hideTimer = setTimeout(() => setShowText(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleContactClick = () => {
    const phoneNumber = '5511996731201';
    const message = t('whatsappMsg');
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex items-center gap-3">
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="glass hidden rounded-2xl px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-800 shadow-xl md:block"
          >
            <Trans i18nKey="navContact" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleContactClick}
        onHoverStart={() => setShowText(true)}
        onHoverEnd={() => setShowText(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-2xl transition-colors hover:bg-zinc-800"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Mobile Badge */}
        <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[8px] font-bold text-white md:hidden">
          1
        </div>
      </motion.button>
    </div>
  );
}
