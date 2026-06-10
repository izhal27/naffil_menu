import Image from "next/image";

type HeroSectionProps = {
  isLight: boolean;
  accentTextClass: string;
  accentSoftTextClass: string;
  displayFontClass: string;
};

export function HeroSection({
  isLight,
  accentTextClass,
  accentSoftTextClass,
  displayFontClass,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative isolate min-h-dvh">
      <Image
        src="/images/bg-hero-image.png"
        alt="Latar belakang hero"
        fill
        priority
        className="object-cover"
      />
      <div
        className={`absolute inset-0 ${
          isLight
            ? "bg-[linear-gradient(180deg,rgba(35,92,76,.72)_0%,rgba(46,110,91,.58)_42%,rgba(255,247,223,.94)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(4,21,17,.74)_0%,rgba(6,25,21,.86)_50%,rgba(6,17,15,.98)_100%)]"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-24 rounded-t-[60%] ${
          isLight ? "bg-[#fff7df]" : "bg-[#06110f]"
        }`}
      />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center justify-center px-5 pb-14 pt-24 text-center md:px-8 md:pt-20">
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${accentSoftTextClass}`}>
          Nikmati Pengalamannya
        </p>
        <h1
          className={`${displayFontClass} max-w-3xl text-4xl leading-tight drop-shadow-sm ${isLight ? "text-[#fff8df]" : "text-[#fff8df]"} md:text-6xl`}
        >
          Nikmati Setiap <span className={accentTextClass}>Rasanya</span>
        </h1>
        <p
          className={`mt-4 max-w-2xl text-sm md:text-base ${isLight ? "text-[#fff8df]/90" : "text-[#fff8df]/80"}`}
        >
          Nikmati pengalaman kuliner Nusantara dalam suasana hangat dengan sentuhan modern.
          Daftar menu lengkap tersedia dalam format PDF.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#menu-pdf-cta"
            className="rounded bg-[#dfff6f] px-6 py-3 text-sm font-bold text-[#15372f] shadow-lg shadow-[#071915]/20 hover:bg-[#ecff9d]"
          >
            Lihat Menu
          </a>
          <a
            href="#about"
            className={`rounded px-6 py-3 text-sm font-semibold transition ${
              isLight
                ? "border border-[#fff8df]/55 text-[#fff8df] hover:border-[#dfff6f] hover:text-[#dfff6f]"
                : "border border-[#fff8df]/35 text-[#fff8df] hover:border-[#dfff6f] hover:text-[#dfff6f]"
            }`}
          >
            Lihat Galeri Kami
          </a>
        </div>
      </div>
    </section>
  );
}
