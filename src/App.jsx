import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import ResultsGallery from './components/ResultsGallery';
import Pricing from './components/Pricing';
import Team from './components/Team';
import InstagramWall from './components/InstagramWall';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import FAQ from './components/FAQ';
import BookingSection from './components/BookingSection';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';

export default function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "BeautySalon", "LocalBusiness"],
    "name": "A & Z Scissors Salon And Academy",
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop",
    "@id": "https://aandzscissors.com",
    "url": "https://aandzscissors.com",
    "telephone": "+917415989069",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "36 Second Floor, Aali Manzil Road, Opposite Masjid Yaqoob Khan, Badabagh, Shahjahanabad",
      "addressLocality": "Bhopal",
      "postalCode": "462001",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 23.2655, "longitude": 77.3986 },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": ["https://instagram.com/a_and_z_scissors"],
    "areaServed": "Bhopal",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "95" }
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <Hero />
      <TrustBar />
      <Services />
      <ResultsGallery />
      <Pricing />
      <Team />
      <InstagramWall />
      <Reviews />
      <MapSection />
      <FAQ />
      <BookingSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
