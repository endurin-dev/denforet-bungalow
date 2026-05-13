import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import ImageWithFallback from '@/components/ImageWithFallback';
import ContactCTA from '@/components/ContactCTA';
import { FiMapPin, FiClock } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Nearby Attractions | Denforet Bungalow Sri Lanka',
  description:
    'Discover Sri Lanka\'s most stunning natural attractions near Denforet Bungalow – from Ella and Horton Plains to tea estates and hidden waterfalls.',
};

const attractions = [
  {
    title: 'Ella',
    distance: '~30 km',
    duration: '45 min drive',
    description:
      'Ella is one of Sri Lanka\'s most beloved mountain towns, perched among misty peaks and verdant valleys. Hike Little Adam\'s Peak for panoramic views, visit the iconic Nine Arch Bridge at dawn, or simply wander through the charming village streets lined with cafes and boutiques.',
    highlights: ['Nine Arch Bridge', 'Little Adam\'s Peak', 'Ella Rock hike', 'Village dining'],
    image: '/images/other/ella.jpg',
    category: 'Town & Hiking',
  },
  {
    title: 'Horton Plains',
    distance: '~45 km',
    duration: '1 hr drive',
    description:
      'A UNESCO World Heritage Site unlike any other on the island. The Horton Plains is a high-altitude plateau of cloud forest and grassland, home to leopards, sambar deer, and rare endemic species. The World\'s End cliff offers a sheer 870-metre drop into the valley below.',
    highlights: ["World's End cliff", "Baker's Falls", 'Cloud forest walks', 'Endemic wildlife'],
    image: '/images/other/horton.jpg',
    category: 'National Park',
  },
  {
    title: 'Tea Plantations',
    distance: 'Nearby',
    duration: '10-20 min',
    description:
      'Sri Lanka\'s hill country is synonymous with tea, and the rolling estates surrounding Denforet offer an intimate window into this centuries-old tradition. Walk among the emerald rows, meet the tea pluckers, and sample freshly processed Ceylon tea straight from the source.',
    highlights: ['Tea factory tours', 'Tea tasting', 'Scenic estate walks', 'Photography'],
    image: '/images/other/tea.jpg',
    category: 'Cultural Experience',
  },
  {
    title: 'Scenic Waterfalls',
    distance: 'Short drive',
    duration: '15-30 min',
    description:
      'Hidden among the forest undergrowth, the region\'s waterfalls are among its most magical secrets. Some require a short jungle hike to reach, making the reward all the sweeter — a cascade of cold, crystal-clear mountain water in a private forest cathedral.',
    highlights: ['Forest hikes', 'Natural swimming pools', 'Jungle trails', 'Photography spots'],
    image: '/images/other/waterfall.jpg',
    category: 'Nature',
  },
  {
    title: 'Nature & Hiking Trails',
    distance: 'From property',
    duration: 'All day',
    description:
      'The forests and mountain trails surrounding Denforet offer endless opportunity for exploration. Our team can guide you to hidden viewpoints, secret valleys, and ancient forest groves that most tourists never discover. Bring your boots and curiosity.',
    highlights: ['Guided forest walks', 'Birdwatching', 'Sunrise hikes', 'Photography'],
    image: '/images/other/hiking.jpg',
    category: 'Adventure',
  },
  {
    title: 'Scenic Viewpoints',
    distance: 'Nearby',
    duration: 'Varies',
    description:
      'The mountains around us are dotted with incredible viewpoints — from roadside pull-offs that frame perfect vistas to secret hilltops known only to locals. At dawn and dusk, when mist fills the valleys and the light turns gold, these spots are truly transcendent.',
    highlights: ['Sunrise views', 'Sunset spots', 'Valley panoramas', 'Star-gazing'],
    image: '/images/other/viewpoint.jpg',
    category: 'Scenic',
  },
];

const categoryColors: Record<string, string> = {
  'Town & Hiking': 'bg-blue-100 text-blue-700',
  'National Park': 'bg-green-100 text-green-700',
  'Cultural Experience': 'bg-amber-100 text-amber-700',
  'Nature': 'bg-emerald-100 text-emerald-700',
  'Adventure': 'bg-orange-100 text-orange-700',
  'Scenic': 'bg-purple-100 text-purple-700',
};

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        label="Explore the Region"
        title="Nearby Attractions"
        subtitle="Some of Sri Lanka's most spectacular natural and cultural wonders are just moments from your doorstep."
        image="/images/other/horton.jpg"
      />

      {/* Intro */}
      <section className="py-16 bg-beige-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-serif text-charcoal/70 text-xl leading-relaxed italic">
              &ldquo;The forest is not just around Denforet — it connects you to everything:
              the mountains, the waterfalls, the plantations, and the ancient plains.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Attractions grid */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group h-full flex flex-col">
                  <div className="img-zoom relative h-56">
                    <ImageWithFallback
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover"
                      fallbackColor="#1F3B2D"
                      fallbackLabel={a.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className={`absolute top-4 left-4 text-xs font-sans px-3 py-1 rounded-full font-medium ${categoryColors[a.category] || 'bg-gray-100 text-gray-700'}`}>
                      {a.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-charcoal text-xl mb-2">{a.title}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center gap-1 text-xs font-sans text-charcoal/50">
                        <FiMapPin size={11} className="text-gold" />
                        {a.distance}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-sans text-charcoal/50">
                        <FiClock size={11} className="text-gold" />
                        {a.duration}
                      </span>
                    </div>
                    <p className="font-sans text-charcoal/60 text-sm leading-relaxed mb-5 flex-1">
                      {a.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {a.highlights.map((h) => (
                        <span key={h} className="text-xs font-sans text-forest bg-forest/8 border border-forest/15 rounded-full px-2.5 py-1">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-16 bg-beige-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="section-label">Location</span>
              <div className="gold-divider" />
              <h2 className="section-title text-3xl text-charcoal">Find Us on the Map</h2>
              <p className="font-sans text-charcoal/60 mt-3 text-sm">
                Nestled in Sri Lanka's breathtaking hill country
              </p>
            </div>
          </AnimatedSection>
          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.28862265244!2d80.82419879999999!3d6.875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3812b06e79a39%3A0x45c6d00f8c3c4e18!2sElla%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Denforet Bungalow Location"
            />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
