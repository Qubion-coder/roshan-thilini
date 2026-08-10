'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cross, Heart, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,28,0.42)_0%,rgba(20,17,28,0.58)_55%,rgba(20,17,28,0.82)_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(240,218,170,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(240,218,170,0.25) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/55 bg-white/40 px-5 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-black" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black sm:text-xs">
            Wedding Celebration
          </span>
          <Sparkles className="h-4 w-4 text-black" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="font-serif text-4xl font-semibold leading-tight tracking-[0.08em] text-black sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-sm"
        >
          ASHINI <span className="text-black">&amp;</span> KUSHAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-5 max-w-3xl text-sm font-medium leading-relaxed text-black sm:text-base md:text-lg drop-shadow-sm"
        >
          With joyful hearts, we invite you to witness our wedding ceremony and celebrate this beautiful new beginning with our families.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 rounded-3xl border border-black/45 bg-white/40 px-6 py-5 backdrop-blur-sm sm:px-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black">Wedding Date</p>
          <p className="mt-2 font-serif text-2xl font-semibold text-black sm:text-3xl">September 16, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-8 flex items-center gap-3 text-black"
        >
          <Sparkles className="h-4 w-4" />
          <Heart className="h-4 w-4 fill-current" />
          <Sparkles className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
