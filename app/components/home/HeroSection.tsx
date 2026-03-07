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
            ? "bg-[linear-gradient(180deg,rgba(245,235,220,.70)_0%,rgba(243,231,212,.66)_50%,rgba(241,227,205,.82)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(5,5,6,.62)_0%,rgba(8,8,10,.76)_50%,rgba(10,10,12,.94)_100%)]"
        }`}
      />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center justify-center px-5 pt-24 text-center md:px-8 md:pt-20">
        <p className={`mb-4 text-xs uppercase tracking-[0.18em] ${accentSoftTextClass}`}>
          Nikmati Pengalamannya
        </p>
        <h1
          className={`${displayFontClass} max-w-3xl text-4xl leading-tight ${isLight ? "text-[#1c1612]" : "text-white"} md:text-6xl`}
        >
          Nikmati Setiap <span className={accentTextClass}>Rasanya</span>
        </h1>
        <p
          className={`mt-4 max-w-2xl text-sm md:text-base ${isLight ? "text-[#2a241f]/85" : "text-white/75"}`}
        >
          Nikmati pengalaman kuliner Nusantara dalam suasana hangat dengan sentuhan modern.
          Daftar menu lengkap tersedia dalam format PDF.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#menu-pdf-cta"
            className="rounded bg-[#d6ab62] px-6 py-3 text-sm font-semibold text-[#171719] hover:bg-[#efc77e]"
          >
            Lihat Menu
          </a>
          <a
            href="#about"
            className={`rounded px-6 py-3 text-sm font-semibold transition ${
              isLight
                ? "border border-[#7d6440]/45 text-[#1d1915] hover:border-[#b48a4b] hover:text-[#7d5b27]"
                : "border border-white/35 text-white hover:border-[#f2c879] hover:text-[#f2c879]"
            }`}
          >
            Lihat Galeri Kami
          </a>
        </div>
      </div>
    </section>
  );
}
