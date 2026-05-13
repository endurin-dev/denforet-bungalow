import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import FeaturedRooms from '@/components/FeaturedRooms';
import WhyChooseUs from '@/components/WhyChooseUs';
import AttractionsPreview from '@/components/AttractionsPreview';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedRooms />
      <WhyChooseUs />
      <AttractionsPreview />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
