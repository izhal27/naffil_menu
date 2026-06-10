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
      className={`border-y py-16 ${isLight ? "border-[#2f725e]/15 bg-[#fff7df]" : "border-[#dfff6f]/10 bg-[#06110f]"}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 text-center md:px-8">
        <h2 className={`${displayFontClass} text-3xl ${isLight ? "text-[#15372f]" : "text-[#fff8df]"} md:text-4xl`}>
          Dari Awal yang Sederhana, Kini Jadi Tempat{" "}
          <span className={accentTextClass}>Favorit</span>
        </h2>
        <p className={`mx-auto mt-4 max-w-3xl text-sm md:text-base ${isLight ? "text-[#15372f]/80" : "text-[#fff8df]/70"}`}>
          Berawal dari semangat menyajikan rasa rumahan yang autentik, Naffil Cafe & Resto tumbuh jadi tempat favorit
          untuk makan bersama, nongkrong santai, hingga kumpul komunitas.
        </p>
        <div
          className={`mx-auto mt-8 max-w-3xl rounded border p-5 ${isLight ? "border-[#2f725e]/20 bg-[#edf7cf]" : "border-[#dfff6f]/15 bg-[#102820]"}`}
        >
          <p className={`text-sm ${accentTextClass}`}>Misi Kami</p>
          <p className={`mt-2 text-sm ${isLight ? "text-[#15372f]/80" : "text-[#fff8df]/75"}`}>
            Menciptakan pengalaman makan yang berkesan, satu hidangan dalam satu waktu.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {serviceCards.map((item) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded border text-left shadow-sm transition duration-300 hover:-translate-y-1 ${isLight ? "border-[#2f725e]/15 bg-white shadow-[#2f725e]/10" : "border-[#dfff6f]/15 bg-[#10241d] shadow-black/20"}`}
            >
              <div className="relative aspect-square">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className={`${displayFontClass} text-lg ${isLight ? "text-[#15372f]" : "text-[#fff8df]"}`}>{item.title}</h3>
                <p className={`mt-2 text-sm ${isLight ? "text-[#15372f]/75" : "text-[#fff8df]/70"}`}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
