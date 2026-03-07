import Image from "next/image";
import { ServiceCard } from "./data";

type AboutSectionProps = {
  isLight: boolean;
  accentTextClass: string;
  displayFontClass: string;
  serviceCards: ServiceCard[];
};

export function AboutSection({
  isLight,
  accentTextClass,
  displayFontClass,
  serviceCards,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className={`border-y py-16 ${isLight ? "border-[#c6ae84]/35 bg-[#efe4d2]" : "border-white/5 bg-[#202124]"}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 text-center md:px-8">
        <h2 className={`${displayFontClass} text-3xl ${isLight ? "text-[#1b1713]" : "text-white"} md:text-4xl`}>
          Dari Awal yang Sederhana, Kini Jadi Tempat{" "}
          <span className={accentTextClass}>Favorit</span>
        </h2>
        <p className={`mx-auto mt-4 max-w-3xl text-sm md:text-base ${isLight ? "text-[#241f19]/80" : "text-white/70"}`}>
          Berawal dari semangat menyajikan rasa rumahan yang autentik, Naffil Cafe & Resto tumbuh jadi tempat favorit
          untuk makan bersama, nongkrong santai, hingga kumpul komunitas.
        </p>
        <div
          className={`mx-auto mt-8 max-w-3xl rounded border p-5 ${isLight ? "border-[#b99762]/40 bg-[#f6ecdc]" : "border-white/10 bg-[#17181b]"}`}
        >
          <p className={`text-sm ${accentTextClass}`}>Misi Kami</p>
          <p className={`mt-2 text-sm ${isLight ? "text-[#261f18]/80" : "text-white/75"}`}>
            Menciptakan pengalaman makan yang berkesan, satu hidangan dalam satu waktu.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {serviceCards.map((item) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded border text-left ${isLight ? "border-[#b99762]/35 bg-[#f8efdf]" : "border-white/10 bg-[#17181b]"}`}
            >
              <div className="relative aspect-square">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className={`${displayFontClass} text-lg ${isLight ? "text-[#1d1915]" : "text-white"}`}>{item.title}</h3>
                <p className={`mt-2 text-sm ${isLight ? "text-[#2a231c]/80" : "text-white/70"}`}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
