'use client'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { PiCaretCircleUpFill } from 'react-icons/pi';

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

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <FeatureSection />
      <FeaturedMenuSection />
      <ReservationSection />
      <LocationSection />
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 md:bottom-10 right-5 md:right-10 shadow-md rounded-full bg-white text-orange hover:text-eerie transition duration-300"
        >
          <PiCaretCircleUpFill className="text-4xl md:text-6xl" />
        </button>
      )}
    </main>
  )
}
