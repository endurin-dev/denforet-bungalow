import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import ImageWithFallback from './ImageWithFallback';
import { FiWifi, FiDroplet, FiEye, FiArrowRight } from 'react-icons/fi';

const rooms = [
  {
    id: 1,
    title: 'Forest View Suite',
    description:
      'Immerse yourself in the lush forest canopy from your private balcony. Wake to birdsong and drift to sleep to the sounds of the forest night.',
    image: '/images/rooms/room1.jpg',
    amenities: ['Forest View', 'Hot Shower', 'Free WiFi', 'Balcony'],
    occupancy: '2 Guests',
    tag: 'Most Popular',
  },
  {
    id: 2,
    title: 'Garden Bungalow',
    description:
      'A serene garden-level retreat with direct access to our private nature trail. Perfect for families seeking space and connection with the earth.',
    image: '/images/rooms/room2.jpg',
    amenities: ['Garden Access', 'Hot Shower', 'Free WiFi', 'Spacious'],
    occupancy: '4 Guests',
    tag: 'Family Favourite',
  },
  {
    id: 3,
    title: 'Mountain Panorama Room',
    description:
      'Elevated for the best views, this room offers sweeping vistas of Sri Lanka\'s iconic hill country and misty mountain ranges.',
    image: '/images/rooms/room3.jpg',
    amenities: ['Mountain Views', 'Hot Shower', 'Free WiFi', 'King Bed'],
    occupancy: '2 Guests',
    tag: 'Premium',
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  'Forest View': <FiEye size={12} />,
  'Mountain Views': <FiEye size={12} />,
  'Garden Access': <FiEye size={12} />,
  'Hot Shower': <FiDroplet size={12} />,
  'Free WiFi': <FiWifi size={12} />,
};

export default function FeaturedRooms() {
  return (
    <section className="py-24 md:py-32 bg-beige-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="section-label">Accommodation</span>
            <div className="gold-divider" />
            <h2 className="section-title text-4xl md:text-5xl text-charcoal">
              Rooms & Suites
            </h2>
            <p className="font-sans text-charcoal/60 mt-4 max-w-xl mx-auto leading-relaxed">
              Each space at Denforet has been thoughtfully designed to bring you closer to
              the natural world while surrounding you with refined comfort.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.id} delay={i * 0.15}>
              <div className="room-card bg-white rounded-2xl overflow-hidden shadow-lg group">
                {/* Image */}
                <div className="img-zoom relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    fallbackColor="#1F3B2D"
                    fallbackLabel={room.title}
                  />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 bg-forest/90 backdrop-blur-sm text-beige text-xs font-sans tracking-widest uppercase px-3 py-1.5 rounded">
                    {room.tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white text-xs font-sans px-3 py-1.5 rounded-full">
                    {room.occupancy}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-charcoal text-xl mb-3">{room.title}</h3>
                  <p className="font-sans text-charcoal/60 text-sm leading-relaxed mb-5">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((a) => (
                      <span
                        key={a}
                        className="flex items-center gap-1.5 text-xs font-sans text-forest bg-forest/8 border border-forest/15 rounded-full px-3 py-1"
                      >
                        {amenityIcons[a] || null}
                        {a}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/rooms`}
                    className="flex items-center gap-2 text-forest font-sans text-sm font-medium hover:gap-3 transition-all group"
                  >
                    View Room Details
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-14">
            <Link href="/rooms" className="btn-primary">
              View All Rooms
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
