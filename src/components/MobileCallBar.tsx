'use client';

import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar md:hidden bg-forest border-t border-gold/20 flex">
      <a
        href="tel:+94715246617"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-beige hover:bg-forest-light transition-colors"
        aria-label="Call us"
      >
        <FiPhone size={18} />
        <span className="font-sans text-sm font-medium tracking-wide">Call Now</span>
      </a>
      <div className="w-px bg-gold/20" />
      <a
        href="https://wa.me/94715246617?text=Hello! I'm interested in booking at Denforet Bungalow."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-green-400 hover:bg-green-600/10 transition-colors"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp size={20} />
        <span className="font-sans text-sm font-medium tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
}
