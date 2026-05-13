'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Compose WhatsApp message from form
    const msg = encodeURIComponent(
      `Hello Denforet Bungalow! 🌿\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDates: ${form.dates}\nGuests: ${form.guests}\n\n${form.message}`
    );
    window.open(`https://wa.me/94715246617?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactMethods = [
    {
      icon: <FiPhone size={22} />,
      label: 'Phone',
      value: '+94 71 524 6617',
      href: 'tel:+94715246617',
      color: 'bg-forest',
    },
    {
      icon: <FaWhatsapp size={22} />,
      label: 'WhatsApp',
      value: 'Chat with us instantly',
      href: 'https://wa.me/94715246617',
      color: 'bg-green-600',
    },
    {
      icon: <FiMail size={22} />,
      label: 'Email',
      value: 'info@denforetbungalow.com',
      href: 'mailto:info@denforetbungalow.com',
      color: 'bg-earth',
    },
    {
      icon: <FaFacebook size={22} />,
      label: 'Facebook',
      value: 'Denforet Bungalow',
      href: 'https://www.facebook.com/denforetbungalow',
      color: 'bg-blue-600',
    },
    {
      icon: <FiMapPin size={22} />,
      label: 'Location',
      value: 'Hill Country, Sri Lanka',
      href: '#map',
      color: 'bg-gold',
    },
  ];

  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out directly — no booking agents, no waiting."
        image="/images/other/contact-hero.jpg"
      />

      <section className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact methods */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <span className="section-label">Reach Us</span>
                <div className="gold-divider-left" />
                <h2 className="section-title text-3xl text-charcoal mt-4 mb-4">
                  We&apos;re Always Happy to Help
                </h2>
                <p className="font-sans text-charcoal/60 text-sm leading-relaxed mb-8">
                  Whether you&apos;re planning a visit, have questions about our rooms, or simply
                  want to know more about the area — get in touch directly. We personally
                  reply to every message.
                </p>

                <div className="space-y-4">
                  {contactMethods.map((m) => (
                    <a
                      key={m.label}
                      href={m.href}
                      target={m.href.startsWith('http') ? '_blank' : undefined}
                      rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group border border-beige hover:border-gold/30"
                    >
                      <div className={`${m.color} w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0`}>
                        {m.icon}
                      </div>
                      <div>
                        <div className="font-sans text-xs text-charcoal/40 uppercase tracking-widest">{m.label}</div>
                        <div className="font-sans text-charcoal text-sm font-medium group-hover:text-forest transition-colors">
                          {m.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick WhatsApp CTA */}
                <div className="mt-8 p-5 bg-forest rounded-xl text-white">
                  <p className="font-serif text-lg mb-3">Prefer to chat instantly?</p>
                  <a
                    href="https://wa.me/94715246617?text=Hello Denforet Bungalow! I'd like to enquire about a stay."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-sans text-sm px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <FaWhatsapp size={18} />
                    Open WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                  <h3 className="font-serif text-charcoal text-2xl mb-6">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-widest block mb-2">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-widest block mb-2">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-widest block mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+1 234 567 8900"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-widest block mb-2">
                        Preferred Dates
                      </label>
                      <input
                        name="dates"
                        type="text"
                        className="form-input"
                        placeholder="e.g. Dec 20 – Dec 25"
                        value={form.dates}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-widest block mb-2">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        className="form-input"
                        value={form.guests}
                        onChange={handleChange}
                      >
                        <option value="">Select guests</option>
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                        <option>5+ Guests</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="font-sans text-xs text-charcoal/50 uppercase tracking-widest block mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        className="form-input resize-none"
                        rows={4}
                        placeholder="Tell us about your visit, questions, or special requirements..."
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 bg-forest hover:bg-forest-light text-beige font-sans font-medium tracking-wide uppercase text-sm py-4 rounded-lg transition-colors"
                  >
                    {sent ? (
                      '✓ Message sent via WhatsApp!'
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message via WhatsApp
                      </>
                    )}
                  </motion.button>

                  <p className="font-sans text-xs text-charcoal/40 text-center mt-4">
                    Your message will be sent directly to our WhatsApp. We typically respond within a few hours.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.28862265244!2d80.82419879999999!3d6.875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3812b06e79a39%3A0x45c6d00f8c3c4e18!2sElla%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1699999999999"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Denforet Bungalow Location Map"
        />
      </section>
    </>
  );
}
