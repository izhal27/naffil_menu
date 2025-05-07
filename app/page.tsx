'use client'
import { useEffect } from 'react';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import FeaturedMenuSection from './components/FeatureMenuSection';
import ReservationSection from './components/ReservationSection';
import LocationSection from './components/Location';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, []);

  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <FeatureSection />
      <FeaturedMenuSection />
      <ReservationSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
