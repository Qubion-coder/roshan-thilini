'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Heart } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function StoryContent() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const searchParams = useSearchParams();
  
  const prefix = searchParams.get('prefix') || 'Mr. & Mrs.';
  const name = searchParams.get('name') || 'Sanjaya';

  return (
    <section
      ref={ref}
      className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-[#fcf9f0] flex items-center justify-center"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #f49a9a 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9f0] via-transparent to-[#fcf9f0] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-8 inline-flex items-center gap-2"
        >
          <Sparkles className="h-5 w-5 text-[#ed5f5f]" />
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#ed5f5f]">
            Wedding Invitation
          </span>
          <Sparkles className="h-5 w-5 text-[#ed5f5f]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-md border border-[#ed5f5f]/20 p-8 md:p-14 rounded-3xl shadow-sm"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 leading-snug">
            We Cordially Invite You
          </h2>
          
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-medium">
            {prefix} {name},
            <br /><br />
            With joyful hearts, we request the honor of your presence to celebrate our wedding and the beginning of our new life together.
          </p>
          
          <div className="flex justify-center items-center gap-4 text-[#ed5f5f]">
            <div className="h-px w-16 bg-[#ed5f5f]/30" />
            <Heart className="h-6 w-6 fill-current" />
            <div className="h-px w-16 bg-[#ed5f5f]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function StorySection() {
  return (
    <Suspense fallback={
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-[#fcf9f0] flex items-center justify-center min-h-[500px]">
        {/* Placeholder while loading */}
      </section>
    }>
      <StoryContent />
    </Suspense>
  );
}
