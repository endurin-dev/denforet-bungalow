'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/attractions', label: 'Attractions' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <div>
      {/* NAVBAR */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-7xl rounded-2xl border
        transition-all duration-500
        ${
          scrolled || !isHome
            ? 'bg-white/10 border-white/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]'
            : 'bg-white/5 border-white/10 backdrop-blur-xl'
        }`}
      >
        {/* Glass Shine */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-yellow-300/50 transition-all duration-300">
                <Image
                  src="/images/logo.jpg"
                  alt="Denforet Bungalow Logo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* BRAND */}
              <div>
                <span
                  className="font-cinzel text-2xl font-semibold tracking-[0.18em] leading-none block"
                  style={{
                    color: '#FFD700',
                    textShadow: `
                      0px 1px 0px #b8960c,
                      0px 2px 0px #a07c08,
                      0px 3px 0px #886606,
                      0px 4px 6px rgba(0,0,0,0.5),
                      0px 0px 20px rgba(255, 215, 0, 0.3)
                    `,
                    transform: 'perspective(300px) rotateX(4deg)',
                    display: 'inline-block',
                  }}
                >
                  Denforet
                </span>

                <span className="font-montserrat text-black text-[11px] uppercase tracking-[0.5em] font-medium block">
                  Bungalow
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative font-cormorant text-[20px] tracking-[0.08em] font-semibold
                    transition-all duration-300 group
                    ${pathname === link.href ? 'text-yellow-300' : 'text-white/90 hover:text-white'}
                  `}
                >
                  {link.label}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-px
                      bg-gradient-to-r from-yellow-300 to-white
                      transition-all duration-300
                      ${pathname === link.href ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
                    `}
                  />
                </Link>
              ))}

              {/* CALL BUTTON */}
              <a
                href="tel:+94715246617"
                className="flex items-center gap-2 font-montserrat text-sm text-white/90 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-yellow-300/40 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg transition-all duration-300"
              >
                <FiPhone size={14} />
                <span>+94 71 524 6617</span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* BACKDROP */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />

            {/* MOBILE GLASS CARD */}
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 mx-6 mt-24 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            >
              {/* SHINE */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

              <div className="relative flex flex-col items-center justify-center gap-8 px-8 py-12">

                {/* MOBILE BRAND */}
                <div className="text-center">
                  <span
                    className="font-cinzel text-4xl font-semibold tracking-[0.2em] block"
                    style={{
                      color: '#FFD700',
                      textShadow: `
                        0px 1px 0px #b8960c,
                        0px 2px 0px #a07c08,
                        0px 3px 0px #886606,
                        0px 4px 0px #6e5205,
                        0px 5px 10px rgba(0,0,0,0.6),
                        0px 0px 30px rgba(255, 215, 0, 0.35)
                      `,
                      transform: 'perspective(400px) rotateX(5deg)',
                      display: 'inline-block',
                    }}
                  >
                    Denforet
                  </span>

                  <span className="font-montserrat text-black text-xs uppercase tracking-[0.5em] block mt-1">
                    Bungalow
                  </span>
                </div>

                {/* DIVIDER */}
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />

                {/* MOBILE LINKS */}
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        font-cormorant text-4xl tracking-wide transition-all duration-300
                        ${pathname === link.href ? 'text-yellow-300' : 'text-white/85 hover:text-white'}
                      `}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* DIVIDER */}
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />

                {/* PHONE */}
                <a
                  href="tel:+94715246617"
                  className="flex items-center gap-3 text-white/80 hover:text-yellow-300 transition-colors mt-2 font-montserrat"
                >
                  <FiPhone />
                  <span>+94 71 524 6617</span>
                </a>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}