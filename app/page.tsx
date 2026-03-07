"use client";

import { Manrope, Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import {
  gallery,
  menuCards,
  serviceCards,
  whyChoose,
} from "./components/data";
import { GallerySection } from "./components/GallerySection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { SiteFooter } from "./components/SiteFooter";
import { WhyChooseSection } from "./components/WhyChooseSection";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});
const bodyFont = Manrope({ subsets: ["latin"], weight: ["400", "500", "700"] });
const gallerySlides = gallery.map((src) => ({ src }));

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const isLight = theme === "light";
  const accentTextClass = isLight ? "text-[#8a5a18]" : "text-[#f1c46f]";
  const accentSoftTextClass = isLight ? "text-[#9c6a20]" : "text-[#ddb370]";
  const accentHoverClass = isLight
    ? "hover:text-[#8a5a18]"
    : "hover:text-[#f2c879]";

  useEffect(() => {
    const saved = window.localStorage.getItem("naffil-theme");
    if (saved === "light") setTheme("light");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("naffil-theme", theme);
  }, [theme]);

  useEffect(() => {
    let previousY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > previousY;

      if (currentY < 40) {
        setHideNavbar(false);
      } else if (scrollingDown) {
        setHideNavbar(true);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }

      previousY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen]);

  return (
    <main
      className={`theme-smooth ${bodyFont.className} ${isLight ? "bg-[#f7f2ea] text-[#171719]" : "naffil-dark text-white"}`}
    >
      <Header
        isLight={isLight}
        hideNavbar={hideNavbar}
        mobileMenuOpen={mobileMenuOpen}
        accentHoverClass={accentHoverClass}
        displayFontClass={displayFont.className}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
        onToggleTheme={() => setTheme(isLight ? "dark" : "light")}
      />

      <HeroSection
        isLight={isLight}
        accentTextClass={accentTextClass}
        accentSoftTextClass={accentSoftTextClass}
        displayFontClass={displayFont.className}
      />

      <AboutSection
        isLight={isLight}
        accentTextClass={accentTextClass}
        displayFontClass={displayFont.className}
        serviceCards={serviceCards}
      />

      <MenuSection
        isLight={isLight}
        displayFontClass={displayFont.className}
        menuCards={menuCards}
      />

      <WhyChooseSection
        isLight={isLight}
        displayFontClass={displayFont.className}
        whyChoose={whyChoose}
      />

      <GallerySection
        isLight={isLight}
        displayFontClass={displayFont.className}
        gallery={gallery}
        onOpenImage={(index) => setLightboxIndex(index)}
      />

      <ContactSection
        isLight={isLight}
        accentHoverClass={accentHoverClass}
        displayFontClass={displayFont.className}
      />

      <SiteFooter isLight={isLight} />

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={gallerySlides}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.78)" } }}
      />
    </main>
  );
}
