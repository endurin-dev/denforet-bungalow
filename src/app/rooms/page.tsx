import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import ImageWithFallback from '@/components/ImageWithFallback';
import ContactCTA from '@/components/ContactCTA';
import { FiWifi, FiDroplet, FiEye, FiUsers } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Rooms & Accommodation | Denforet Bungalow Sri Lanka',
  description:
    'Explore our luxury forest rooms and suites at Denforet Bungalow. Featuring forest views, hot showers, free WiFi, private balconies, and Sri Lankan hospitality.',
};

const rooms = [
  {
    id: 1,
    title: 'Forest View Suite',
    tag: 'Most Popular',
    description:
      'Our signature suite places you directly in the canopy experience. Floor-to-ceiling windows and an extended private balcony ensure the forest is always within reach. Wake to birdsong filtering through the mist and fall asleep to the gentle sounds of the night forest.',
    image: '/images/rooms/room1.jpg',
    images: ['/images/rooms/room1.jpg', '/images/rooms/room1b.jpg'],
    amenities: [
      { label: 'Forest View', icon: <FiEye /> },
      { label: 'Hot Water', icon: <FiDroplet /> },
      { label: 'Free WiFi', icon: <FiWifi /> },
      { label: 'Private Balcony', icon: '🌿' },
      { label: 'King Bed', icon: '🛏️' },
      { label: 'En-suite Bathroom', icon: '🚿' },
    ],
    occupancy: 'Up to 2 guests',
    size: '35 m²',
    highlights: ['Panoramic forest balcony', 'Premium linens', 'Daily housekeeping', 'Local breakfast available'],
  },
  {
    id: 2,
    title: 'Garden Bungalow',
    tag: 'Family Favourite',
    description:
      'Spacious and serene, the Garden Bungalow opens directly onto our private nature garden. Ideal for families and longer stays, it features generous living space, twin and double sleeping options, and a lush garden patio for morning coffee amidst chirping birds.',
    image: '/images/rooms/room2.jpg',
    images: ['/images/rooms/room2.jpg', '/images/rooms/room2b.jpg'],
    amenities: [
      { label: 'Garden Access', icon: <FiEye /> },
      { label: 'Hot Water', icon: <FiDroplet /> },
      { label: 'Free WiFi', icon: <FiWifi /> },
      { label: 'Garden Patio', icon: '🌺' },
      { label: 'Family Beds', icon: '🛏️' },
      { label: 'En-suite Bathroom', icon: '🚿' },
    ],
    occupancy: 'Up to 4 guests',
    size: '55 m²',
    highlights: ['Private garden patio', 'Nature trail access', 'Separate sleeping areas', 'Child-friendly'],
  },
  {
    id: 3,
    title: 'Mountain Panorama Room',
    tag: 'Premium',
    description:
      'Perched at the highest point of the property, this elevated room offers the most spectacular views of Sri Lanka\'s iconic hill country. Watch clouds drift between mountain peaks from your bed, and experience sunrises that will stay with you long after you leave.',
    image: '/images/rooms/room3.jpg',
    images: ['/images/rooms/room3.jpg', '/images/rooms/room3b.jpg'],
    amenities: [
      { label: 'Mountain Views', icon: <FiEye /> },
      { label: 'Hot Water', icon: <FiDroplet /> },
      { label: 'Free WiFi', icon: <FiWifi /> },
      { label: 'Viewing Deck', icon: '⛰️' },
      { label: 'King Bed', icon: '🛏️' },
      { label: 'Premium Bathroom', icon: '🛁' },
    ],
    occupancy: 'Up to 2 guests',
    size: '40 m²',
    highlights: ['360° mountain panorama', 'Private viewing deck', 'Premium amenities', 'Sunset views'],
  },
];

export default function RoomsPage() {
  return (
    <>
      <PageHero
        label="Accommodation"
        title="Rooms & Suites"
        subtitle="Each space is a thoughtful blend of nature-inspired design and refined comfort."
        image="/images/rooms/room1.jpg"
      />

      {/* Rooms list */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                      <ImageWithFallback
                        src={room.image}
                        alt={room.title}
                        fill
                        className="object-cover"
                        fallbackColor="#1F3B2D"
                        fallbackLabel={room.title}
                      />
                      <div className="absolute top-5 left-5 bg-forest/90 backdrop-blur-sm text-beige text-xs font-sans tracking-widest uppercase px-3 py-1.5 rounded">
                        {room.tag}
                      </div>
                    </div>
                    {/* Size badge */}
                    <div className="absolute -bottom-5 right-5 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                      <FiUsers className="text-forest" />
                      <div>
                        <div className="font-sans text-xs text-charcoal/50 uppercase tracking-wider">Sleeps</div>
                        <div className="font-serif text-charcoal text-sm">{room.occupancy}</div>
                      </div>
                      <div className="w-px h-8 bg-beige mx-1" />
                      <div>
                        <div className="font-sans text-xs text-charcoal/50 uppercase tracking-wider">Size</div>
                        <div className="font-serif text-charcoal text-sm">{room.size}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <span className="section-label">{room.tag}</span>
                  <div className="gold-divider-left" />
                  <h2 className="section-title text-3xl md:text-4xl text-charcoal mt-4 mb-5">
                    {room.title}
                  </h2>
                  <p className="font-sans text-charcoal/65 leading-relaxed mb-7">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {room.amenities.map((a) => (
                      <span
                        key={a.label}
                        className="flex items-center gap-1.5 text-xs font-sans text-forest bg-forest/8 border border-forest/15 rounded-full px-3 py-1.5"
                      >
                        <span className="text-forest text-xs">{a.icon}</span>
                        {a.label}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8">
                    {room.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 font-sans text-sm text-charcoal/70">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/94715246617?text=Hello! I'd like to enquire about the ${room.title} at Denforet Bungalow.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-sans font-medium text-sm tracking-wide uppercase px-7 py-3.5 rounded transition-all hover:-translate-y-1"
                  >
                    <FaWhatsapp size={18} />
                    Enquire About This Room
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Amenities strip */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { icon: '📶', label: 'Free WiFi' },
              { icon: '🚿', label: 'Hot Water' },
              { icon: '🌿', label: 'Forest Views' },
              { icon: '🏡', label: 'Private Bathroom' },
              { icon: '👨‍👩‍👧', label: 'Family Friendly' },
              { icon: '🍃', label: 'Eco Friendly' },
            ].map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-3">
                <div className="text-3xl">{a.icon}</div>
                <span className="font-sans text-xs text-white/60 tracking-widest uppercase">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
