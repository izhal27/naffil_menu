"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuCard } from "./data";

type MenuSectionProps = {
  isLight: boolean;
  displayFontClass: string;
  menuCards: MenuCard[];
};

export function MenuSection({ isLight, displayFontClass, menuCards }: MenuSectionProps) {
  const trackMenuPdfClick = () => {
    window.gtag?.("event", "contact_click", {
      event_category: "engagement",
      event_label: "lihat_menu_pdf_lengkap",
    });
  };

  return (
    <section id="menu" className={`py-16 ${isLight ? "bg-[#f7f2ea]" : "bg-[#0f1012]"}`}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className={`${displayFontClass} text-center text-3xl ${isLight ? "text-[#1d1915]" : "text-white"} md:text-4xl`}>
          Menu Unggulan
        </h2>
        <p className={`mx-auto mt-3 max-w-2xl text-center text-sm ${isLight ? "text-[#2a231c]/80" : "text-white/70"}`}>
          Pilihan menu unggulan dengan perpaduan rasa klasik dan presentasi modern.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menuCards.map((item) => (
            <article
              key={item.name}
              className={`overflow-hidden rounded border ${isLight ? "border-[#b99762]/35 bg-[#f8efdf]" : "border-white/10 bg-[#1a1b1e]"}`}
            >
              <div className="relative aspect-square">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className={`${displayFontClass} text-lg ${isLight ? "text-[#1d1915]" : "text-white"}`}>{item.name}</h3>
                <p className={`mt-1 text-xs ${isLight ? "text-[#2a231c]/80" : "text-white/70"}`}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div id="menu-pdf-cta" className="mt-8 text-center">
          <Link
            href="/menu"
            onClick={trackMenuPdfClick}
            className="rounded bg-[#d6ab62] px-6 py-3 text-sm font-semibold text-[#171719] hover:bg-[#efc77e]"
          >
            Lihat Menu PDF Lengkap
          </Link>
        </div>
      </div>
    </section>
  );
}
