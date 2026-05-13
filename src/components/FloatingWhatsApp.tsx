'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/94715246617?text=Hello! I'm interested in booking at Denforet Bungalow."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="floating-btn hidden md:flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-2xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={28} color="white" />
    </motion.a>
  );
}
