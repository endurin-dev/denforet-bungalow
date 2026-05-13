import AnimatedSection from './AnimatedSection';
import ImageWithFallback from './ImageWithFallback';

export default function WelcomeSection() {
  return (
    <section className="py-24 md:py-32 bg-soft-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <AnimatedSection delay={0}>
              <span className="section-label">Welcome to Denforet</span>
              <div className="gold-divider-left" />
              <h2 className="section-title text-4xl md:text-5xl text-charcoal mt-4 mb-6">
                A Sanctuary in the
                <br />
                <em className="text-forest italic">Heart of the Forest</em>
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-6 text-lg">
                Wake up to the sounds of nature and experience the serenity of Sri Lanka&apos;s
                untouched forest beauty at Denforet Bungalow. Nestled in the lush hill country,
                we offer a rare retreat where luxury meets the wild.
              </p>
              <p className="font-sans text-charcoal/60 leading-relaxed mb-10">
                Our bungalow blends eco-conscious living with premium comfort — think forest
                views from your private balcony, the scent of damp earth and tropical blooms,
                and the warm embrace of genuine Sri Lankan hospitality. Whether you seek
                adventure or stillness, Denforet is your gateway to it all.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-beige">
                {[
                  { val: '5+', desc: 'Acres of Forest' },
                  { val: '∞', desc: 'Peaceful Moments' },
                  { val: '100%', desc: 'Eco Friendly' },
                ].map((item) => (
                  <div key={item.desc} className="text-center">
                    <div className="font-serif text-forest text-3xl font-semibold">{item.val}</div>
                    <div className="font-sans text-charcoal/50 text-xs tracking-widest uppercase mt-1">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Images */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              {/* Main image */}
              <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <ImageWithFallback
                  src="/images/other/welcome.jpg"
                  alt="Denforet Bungalow Forest View"
                  fill
                  className="object-cover"
                  fallbackColor="#1F3B2D"
                  fallbackLabel="Forest Bungalow"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
                <div className="text-3xl mb-2">🌿</div>
                <p className="font-serif text-forest text-sm leading-snug">
                  &ldquo;Your nature escape awaits&rdquo;
                </p>
                <div className="flex mt-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-gold text-xs">★</span>
                  ))}
                </div>
              </div>
              {/* Small accent image */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-xl ring-4 ring-white img-zoom">
                <ImageWithFallback
                  src="/images/other/welcome2.jpg"
                  alt="Nature detail"
                  fill
                  className="object-cover"
                  fallbackColor="#5C4033"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
