import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: '🌲',
    title: 'Peaceful Forest Atmosphere',
    description:
      'Surrounded by pristine tropical forest, every moment at Denforet is a meditation in natural tranquility.',
  },
  {
    icon: '✨',
    title: 'Luxury Accommodation',
    description:
      'Premium furnishings, hot showers, high-speed WiFi, and every comfort thoughtfully curated for your stay.',
  },
  {
    icon: '⛰️',
    title: 'Scenic Mountain Views',
    description:
      'Wake up to sweeping panoramas of Sri Lanka\'s iconic misty mountains and tea-covered hillsides.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family-Friendly',
    description:
      'Spacious rooms, safe grounds, and nature activities make Denforet a perfect family retreat.',
  },
  {
    icon: '🤝',
    title: 'Authentic Sri Lankan Hospitality',
    description:
      'Our warm team greets you like family, offering genuine care and local knowledge throughout your stay.',
  },
  {
    icon: '🌿',
    title: 'Relaxation & Wellness',
    description:
      'From forest walks to star-gazing evenings, every experience here nourishes the body and calms the mind.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1F3B2D 0%, #152A1E 60%, #0D1F16 100%)',
      }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 20%, #C9A96E 0%, transparent 50%), radial-gradient(circle at 70% 80%, #C9A96E 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="section-label">Why Denforet</span>
            <div className="gold-divider" />
            <h2 className="section-title text-4xl md:text-5xl text-white mt-4">
              The Denforet Difference
            </h2>
            <p className="font-sans text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
              More than accommodation — an immersive experience that reconnects you with
              the natural world.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-7 hover:border-gold/30 transition-all duration-300 group">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="font-serif text-white text-xl mb-3">{f.title}</h3>
                <p className="font-sans text-white/50 text-sm leading-relaxed">{f.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
