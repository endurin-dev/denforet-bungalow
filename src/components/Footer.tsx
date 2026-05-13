import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-serif text-white text-2xl block leading-none">Denforet</span>
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-light">
                Bungalow
              </span>
            </div>
            <div className="gold-divider-left mb-6" />
            <p className="font-sans text-sm leading-relaxed text-white/60">
              A peaceful luxury forest retreat in the heart of Sri Lanka&apos;s breathtaking hill
              country. Experience nature, serenity, and authentic hospitality.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.facebook.com/denforetbungalow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={16} />
              </a>
              <a
                href="https://wa.me/94715246617"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Quick Links</h4>
            <div className="gold-divider-left mb-6" />
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/rooms', label: 'Rooms & Accommodation' },
                { href: '/attractions', label: 'Nearby Attractions' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-white/20 group-hover:bg-gold group-hover:w-6 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Experiences</h4>
            <div className="gold-divider-left mb-6" />
            <ul className="space-y-3">
              {[
                'Forest Walks',
                'Tea Estate Tours',
                'Waterfalls',
                'Ella Hike',
                'Horton Plains',
                'Stargazing',
              ].map((item) => (
                <li key={item}>
                  <span className="font-sans text-sm text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/60" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Get In Touch</h4>
            <div className="gold-divider-left mb-6" />
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+94715246617"
                  className="flex items-start gap-3 group hover:text-gold transition-colors"
                >
                  <FiPhone className="mt-0.5 text-gold shrink-0" size={15} />
                  <span className="font-sans text-sm">+94 71 524 6617</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@denforetbungalow.com"
                  className="flex items-start gap-3 group hover:text-gold transition-colors"
                >
                  <FiMail className="mt-0.5 text-gold shrink-0" size={15} />
                  <span className="font-sans text-sm break-all">info@denforetbungalow.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 text-gold shrink-0" size={15} />
                <span className="font-sans text-sm text-white/60">
                  Hill Country, Sri Lanka
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/94715246617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-green-400 rounded px-4 py-2.5 text-sm font-sans transition-colors"
                >
                  <FaWhatsapp size={16} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Denforet Bungalow. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/30 text-center">
            Forest Bungalow · Eco Lodge · Nature Retreat · Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
