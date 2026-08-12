'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

export default function ParentsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9ef_0%,#fff2df_42%,#fde8d4_100%)] px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-[10%] top-[10%] h-[45vw] w-[45vw] rounded-full bg-gradient-to-br from-[#fad5d5] to-[#f7edd1] opacity-60 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -left-[5%] bottom-[5%] h-[40vw] w-[40vw] rounded-full bg-gradient-to-tl from-[#eadcff] to-[#fce2e2] opacity-50 blur-[90px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, type: 'spring', stiffness: 100 }}
          className="mb-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e6c86f]/45 bg-white/70 px-5 py-2.5 shadow-[0_10px_28px_rgba(195,137,94,0.22)] backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[#dbb133]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#dbb133] sm:text-sm">
              Blessings
            </span>
          </motion.div>

          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#6d0c0c] sm:text-4xl md:text-5xl">
            Together with <span className="relative inline-block text-[#e83030]">Our Parents</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bride's Parents */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-[#f4e8c3] bg-white/65 p-10 text-center shadow-[0_16px_50px_rgba(184,126,89,0.15)] backdrop-blur-xl"
          >
            <div className="mb-6 flex justify-center">
              <div className="h-px w-16 bg-[#e6c86f] opacity-60" />
            </div>
            
            <h3 className="mb-8 font-serif text-2xl text-[#720d0d]">Bride's Parents</h3>
            
            <div className="space-y-6">
              <div>
                <p className="font-serif text-xl text-[#9c7515]">J.A. Chithra Rohini</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dbb133]">Mother</p>
              </div>
              <div className="mx-auto h-8 w-px bg-gradient-to-b from-transparent via-[#e6c86f] to-transparent" />
              <div>
                <p className="font-serif text-xl text-[#9c7515]">R.A. Thilak Pushpakumara</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dbb133]">Father</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="h-px w-16 bg-[#e6c86f] opacity-60" />
            </div>
          </motion.div>

          {/* Groom's Parents */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-[#f4e8c3] bg-white/65 p-10 text-center shadow-[0_16px_50px_rgba(184,126,89,0.15)] backdrop-blur-xl"
          >
            <div className="mb-6 flex justify-center">
              <div className="h-px w-16 bg-[#e6c86f] opacity-60" />
            </div>
            
            <h3 className="mb-8 font-serif text-2xl text-[#720d0d]">Groom's Parents</h3>
            
            <div className="space-y-6">
              <div>
                <p className="font-serif text-xl text-[#9c7515]">J.K. Samanmali Perera</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dbb133]">Mother</p>
              </div>
              <div className="mx-auto h-8 w-px bg-gradient-to-b from-transparent via-[#e6c86f] to-transparent" />
              <div>
                <p className="font-serif text-xl text-[#9c7515]">W. Frensis Fernando</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dbb133]">Father</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="h-px w-16 bg-[#e6c86f] opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
