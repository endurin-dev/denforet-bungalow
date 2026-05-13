import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileCallBar from '@/components/MobileCallBar';

export const metadata: Metadata = {
  title: 'Denforet Bungalow | Luxury Forest Retreat in Sri Lanka',
  description:
    'Escape to Denforet Bungalow – a premium eco-lodge and nature retreat nestled in the lush forests of Sri Lanka. Experience luxury forest living, scenic mountain views, and authentic Sri Lankan hospitality.',
  keywords:
    'forest bungalow Sri Lanka, nature retreat Sri Lanka, eco lodge Sri Lanka, luxury bungalow Sri Lanka, forest stay Sri Lanka, hill country accommodation, eco tourism Sri Lanka, Ella nature stay, Sri Lanka boutique villa',
  openGraph: {
    title: 'Denforet Bungalow | Luxury Forest Retreat in Sri Lanka',
    description:
      'Escape into nature at Denforet Bungalow. Experience luxury forest living in the breathtaking hill country of Sri Lanka.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Denforet Bungalow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denforet Bungalow | Luxury Forest Retreat in Sri Lanka',
    description:
      'Experience luxury forest living in the breathtaking hill country of Sri Lanka.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileCallBar />
      </body>
    </html>
  );
}