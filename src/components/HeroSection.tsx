'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';
import ImageWithFallback from './ImageWithFallback';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/other/hero.jpg"
          alt="Denforet Bungalow Forest View"
          fill
          className="object-cover object-center"
          priority
          fallbackLabel="Luxury Forest Retreat"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/8 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="section-label text-gold/80 text-xs tracking-[0.4em]">
            Sri Lanka's Finest Forest Retreat
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6"
        >
          Escape Into
          <br />
          <em className="text-gold italic">Nature</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Experience Luxury Forest Living in Sri Lanka
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/rooms" className="btn-gold font-sans">
            Explore Rooms
          </Link>
          <Link href="/contact" className="btn-outline font-sans">
            Contact Us
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center gap-10 mt-16 pt-12 border-t border-white/10"
        >
          {[
            { num: '100%', label: 'Nature Immersed' },
            { num: '5★', label: 'Guest Experience' },
            { num: 'Eco', label: 'Friendly Stay' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-gold text-2xl">{stat.num}</div>
              <div className="font-sans text-white/50 text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-float"
      >
        <span className="font-sans text-xs tracking-[0.3em] uppercase">Scroll</span>
        <FiArrowDown size={16} />
      </motion.div>
    </section>
  );
}
