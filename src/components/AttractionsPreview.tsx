import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import ImageWithFallback from './ImageWithFallback';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';

const attractions = [
  {
    title: 'Ella',
    description: 'A charming village famous for stunning views, the Nine Arch Bridge, and adventurous hikes up Little Adam\'s Peak.',
    image: '/images/other/ella.jpg',
    distance: '~30 km',
  },
  {
    title: 'Horton Plains',
    description: 'A UNESCO World Heritage Site with otherworldly cloud forest, World\'s End cliff, and Baker\'s Falls.',
    image: '/images/other/horton.jpg',
    distance: '~45 km',
  },
  {
    title: 'Tea Estates',
    description: 'Wander through endless emerald carpets of Ceylon tea plantations that have defined Sri Lanka\'s identity for centuries.',
    image: '/images/other/tea.jpg',
    distance: 'Nearby',
  },
  {
    title: 'Scenic Waterfalls',
    description: 'Hidden cascades and rushing falls tucked within the forest — a refreshing and magical escape for all ages.',
    image: '/images/other/waterfall.jpg',
    distance: 'Short Drive',
  },
];

export default function AttractionsPreview() {
  return (
    <section className="py-24 md:py-32 bg-soft-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="section-label">Explore the Region</span>
            <div className="gold-divider" />
            <h2 className="section-title text-4xl md:text-5xl text-charcoal">
              Nearby Attractions
            </h2>
            <p className="font-sans text-charcoal/60 mt-4 max-w-xl mx-auto leading-relaxed">
              From ancient plains to misty peaks, the region around Denforet offers some of
              Sri Lanka's most spectacular natural wonders.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.1}>
              <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white">
                <div className="img-zoom relative h-52">
                  <ImageWithFallback
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                    fallbackColor="#1F3B2D"
                    fallbackLabel={a.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white/80 text-xs font-sans">
                    <FiMapPin size={11} />
                    {a.distance}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-charcoal text-lg mb-2">{a.title}</h3>
                  <p className="font-sans text-charcoal/55 text-sm leading-relaxed">{a.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 font-sans text-forest font-medium text-sm hover:gap-4 transition-all group"
            >
              Explore All Attractions
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
