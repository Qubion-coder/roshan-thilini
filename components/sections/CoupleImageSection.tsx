'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CoupleImageSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-[#fcf9f0]">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image
          src="/1.png"
          alt="The Couple"
          fill
          className="object-cover object-[50%_30%]"
          sizes="100vw"
          priority
        />
        {/* Soft elegant vignette to blend with sections above and below */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9f0] via-black/10 to-[#1f0610] pointer-events-none opacity-80" />
      </motion.div>
    </section>
  );
}
