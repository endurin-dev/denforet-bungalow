import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import ImageWithFallback from '@/components/ImageWithFallback';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'About Us | Denforet Bungalow – Luxury Forest Retreat Sri Lanka',
  description:
    'Discover the story of Denforet Bungalow – a sanctuary of eco-luxury and Sri Lankan hospitality nestled in the island\'s breathtaking hill country.',
};

const values = [
  { icon: '🌿', title: 'Sustainability', desc: 'We tread lightly on the earth, using eco-friendly practices and supporting local conservation efforts.' },
  { icon: '🤍', title: 'Authenticity', desc: 'Every element of your stay — the food, the décor, the stories — reflects genuine Sri Lankan culture.' },
  { icon: '🌄', title: 'Natural Beauty', desc: 'We have preserved the surrounding forest so it remains wild, alive, and magnificent for generations.' },
  { icon: '🫂', title: 'Warm Hospitality', desc: 'Our team treats every guest like a cherished friend, going beyond service to create real connection.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="About Denforet Bungalow"
        subtitle="A sanctuary born from a love of nature and a passion for genuine Sri Lankan hospitality."
        image="/images/other/about-hero.jpg"
      />

      {/* Story Section */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
              <div className="relative img-zoom rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <ImageWithFallback
                    src="/images/other/about1.jpg"
                    alt="Denforet Bungalow grounds"
                    fill
                    className="object-cover"
                    fallbackColor="#1F3B2D"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-forest rounded-xl p-6 shadow-xl text-white max-w-[180px]">
                  <div className="font-serif text-gold text-3xl font-light">10+</div>
                  <div className="font-sans text-white/70 text-xs mt-1 tracking-wide uppercase">
                    Years of Forest Hospitality
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="section-label">The Denforet Story</span>
              <div className="gold-divider-left" />
              <h2 className="section-title text-3xl md:text-4xl text-charcoal mt-4 mb-6">
                Where Nature and
                <em className="text-forest italic"> Luxury </em>
                Meet
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-5">
                Denforet Bungalow was born from a dream — to create a place where travellers
                could escape the noise of the world and find themselves again in the embrace
                of ancient forest. Founded by a family with deep roots in Sri Lanka&apos;s hill
                country, the bungalow has been welcoming guests for over a decade.
              </p>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-5">
                The name &ldquo;Denforet&rdquo; draws from the French word for forest, reflecting our
                founders&apos; belief that the trees, the birdsong, and the mountain mist are
                not merely a backdrop — they are the experience itself.
              </p>
              <p className="font-sans text-charcoal/70 leading-relaxed">
                Every decision we make — from the locally sourced materials in our rooms to
                the eco-friendly practices in our kitchen — honours the land that hosts us.
                We believe luxury and sustainability are not opposites; at Denforet, they
                are one and the same.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-beige-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-label">What We Stand For</span>
              <div className="gold-divider" />
              <h2 className="section-title text-4xl text-charcoal">Our Values</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-serif text-charcoal text-xl mb-3">{v.title}</h3>
                  <p className="font-sans text-charcoal/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Eco pledge */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1F3B2D 0%, #152A1E 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-label text-gold/70">Eco Tourism</span>
            <div className="gold-divider" />
            <h2 className="section-title text-4xl text-white mt-4 mb-6">
              Our Commitment to the Forest
            </h2>
            <p className="font-sans text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              At Denforet, we operate with deep respect for the environment that makes us
              possible. Solar energy, rainwater harvesting, organic waste composting, and a
              ban on single-use plastics are among the practices we maintain every day.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { val: 'Zero', label: 'Single-Use Plastics' },
                { val: '100%', label: 'Locally Sourced Meals' },
                { val: 'Solar', label: 'Powered Lighting' },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-6">
                  <div className="font-serif text-gold text-2xl font-light mb-2">{s.val}</div>
                  <div className="font-sans text-white/50 text-xs uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
