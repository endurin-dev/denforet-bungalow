import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import ImageWithFallback from './ImageWithFallback';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

export default function ContactCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/other/cta-bg.jpg"
          alt="Forest background"
          fill
          className="object-cover"
          fallbackColor="#1F3B2D"
        />
        <div className="absolute inset-0 bg-forest/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="section-label text-gold/80">Begin Your Journey</span>
          <div className="gold-divider" />
          <h2 className="section-title text-4xl md:text-6xl text-white mt-4 mb-6">
            Plan Your Nature
            <br />
            <em className="text-gold italic">Escape Today</em>
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Reach out to us directly and our team will craft your perfect forest retreat.
            No middlemen — just genuine hospitality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/94715246617?text=Hello! I'd like to book a stay at Denforet Bungalow."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-sans font-medium tracking-wide uppercase text-sm px-8 py-4 rounded transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30"
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </a>
            <a
              href="tel:+94715246617"
              className="flex items-center gap-3 btn-outline"
            >
              <FiPhone size={16} />
              +94 71 524 6617
            </a>
          </div>

          <p className="font-sans text-white/30 text-xs mt-8 tracking-widest uppercase">
            Or email us at info@denforetbungalow.com
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
