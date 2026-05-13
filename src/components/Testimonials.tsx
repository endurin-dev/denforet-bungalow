'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Sarah & James Thompson',
    location: 'United Kingdom',
    rating: 5,
    text: 'Denforet is unlike any place we have ever stayed. Waking up to the sounds of birds and the soft mist rolling through the forest was a genuinely magical experience. The room was spotless, the hosts incredibly warm, and the surrounding nature breathtaking. We will absolutely return.',
    initials: 'ST',
  },
  {
    name: 'Priya Nair',
    location: 'India',
    rating: 5,
    text: 'This was the perfect anniversary retreat. The view from our balcony was like a painting — layers of green mountains disappearing into the clouds. The quiet, the clean air, the warmth of the hosts... Denforet truly nourishes the soul.',
    initials: 'PN',
  },
  {
    name: 'Markus & Lena Bauer',
    location: 'Germany',
    rating: 5,
    text: 'We have travelled across South Asia, and this bungalow stands out as one of the most authentic and beautiful places we have experienced. Eco-friendly, peaceful, and the most spectacular forest setting. Highly recommended for anyone looking to disconnect from the world.',
    initials: 'MB',
  },
  {
    name: 'Alex Chen',
    location: 'Singapore',
    rating: 5,
    text: 'From the moment we arrived, we felt completely at ease. The forest walk in the morning, the cool breeze, the freshly prepared local food — everything was absolutely perfect. Denforet is the kind of place that stays with you long after you leave.',
    initials: 'AC',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F5EFE6 0%, #E8DCCB 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="section-label">Guest Stories</span>
            <div className="gold-divider" />
            <h2 className="section-title text-4xl md:text-5xl text-charcoal">
              Words From Our Guests
            </h2>
          </div>
        </AnimatedSection>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card p-8 md:p-12 text-center"
            >
              {/* Quote mark */}
              <div className="font-serif text-gold text-7xl leading-none mb-6 opacity-40">&ldquo;</div>
              <p className="font-serif text-charcoal/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                {testimonials[current].text}
              </p>
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-beige font-serif text-sm font-semibold">
                  {testimonials[current].initials}
                </div>
                <div className="text-left">
                  <div className="font-sans font-medium text-charcoal text-sm">
                    {testimonials[current].name}
                  </div>
                  <div className="font-sans text-charcoal/50 text-xs">
                    {testimonials[current].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-forest w-6' : 'bg-forest/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
