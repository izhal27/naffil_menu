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
    <section id="menu" className={`py-16 ${isLight ? "bg-[#fbf1cf]" : "bg-[#0c221c]"}`}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className={`${displayFontClass} text-center text-3xl ${isLight ? "text-[#15372f]" : "text-[#fff8df]"} md:text-4xl`}>
          Menu Unggulan
        </h2>
        <p className={`mx-auto mt-3 max-w-2xl text-center text-sm ${isLight ? "text-[#15372f]/75" : "text-[#fff8df]/70"}`}>
          Pilihan menu unggulan dengan perpaduan rasa klasik dan presentasi modern.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menuCards.map((item) => (
            <article
              key={item.name}
              className={`overflow-hidden rounded border shadow-sm transition duration-300 hover:-translate-y-1 ${isLight ? "border-[#2f725e]/15 bg-[#fff8df] shadow-[#2f725e]/10" : "border-[#dfff6f]/15 bg-[#10241d] shadow-black/20"}`}
            >
              <div className="relative aspect-square">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className={`${displayFontClass} text-lg ${isLight ? "text-[#15372f]" : "text-[#fff8df]"}`}>{item.name}</h3>
                <p className={`mt-1 text-xs ${isLight ? "text-[#15372f]/70" : "text-[#fff8df]/70"}`}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div id="menu-pdf-cta" className="mt-8 text-center">
          <Link
            href="/menu"
            onClick={trackMenuPdfClick}
            className="rounded bg-[#e5532c] px-6 py-3 text-sm font-bold text-[#fff8df] shadow-lg shadow-[#e5532c]/20 hover:bg-[#f2653f]"
          >
            Lihat Menu PDF Lengkap
          </Link>
        </div>
      </div>
    </section>
  );
}
