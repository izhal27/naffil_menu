import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

type HeaderProps = {
  isLight: boolean;
  hideNavbar: boolean;
  mobileMenuOpen: boolean;
  accentHoverClass: string;
  displayFontClass: string;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
  onToggleTheme: () => void;
};

export function Header({
  isLight,
  hideNavbar,
  mobileMenuOpen,
  accentHoverClass,
  displayFontClass,
  onToggleMobileMenu,
  onCloseMobileMenu,
  onToggleTheme,
}: HeaderProps) {
  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur transition-all duration-700 ease-in-out ${
        hideNavbar ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${
        isLight
          ? "border-[#9f7d43]/25 bg-[#f7f2ea]/90"
          : "border-[#d6ab62]/15 bg-[#0f0f10]/75"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#home"
          className={`flex items-center gap-2 ${isLight ? "text-[#171719]" : "text-white"}`}
        >
          <Image src="/images/naffil-logo.png" alt="Naffil" width={34} height={34} />
          <span className={`${displayFontClass} text-sm md:text-base`}>
            Naffil Cafe & Resto
          </span>
        </a>
        <nav
          className={`hidden items-center gap-6 text-xs md:flex ${isLight ? "text-[#171719]/80" : "text-white/80"}`}
        >
          <a href="#about" className={accentHoverClass}>Tentang</a>
          <a href="#menu" className={accentHoverClass}>Daftar Menu</a>
          <a href="#gallery" className={accentHoverClass}>Galeri</a>
          <a href="#contact" className={accentHoverClass}>Kontak</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Buka menu navigasi"
            onClick={onToggleMobileMenu}
            className={`rounded p-2 md:hidden ${
              isLight
                ? "border border-[#9f7d43]/30 bg-white text-[#171719]"
                : "border border-white/25 bg-white/10 text-white"
            }`}
          >
            {mobileMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
          <button
            type="button"
            aria-label="Ganti tema"
            onClick={onToggleTheme}
            className={`rounded p-2 transition ${
              isLight
                ? "border border-[#9f7d43]/30 bg-white text-[#171719] hover:bg-[#f4e9d7]"
                : "border border-white/25 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {isLight ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className={`mx-5 mb-3 rounded-lg border p-3 text-sm md:hidden ${
            isLight
              ? "border-[#9f7d43]/30 bg-[#f7f2ea] text-[#171719]"
              : "border-white/10 bg-[#0f0f10] text-white"
          }`}
        >
          <div className="flex flex-col gap-2">
            <a href="#about" onClick={onCloseMobileMenu} className={accentHoverClass}>Tentang</a>
            <a href="#menu" onClick={onCloseMobileMenu} className={accentHoverClass}>Daftar Menu</a>
            <a href="#gallery" onClick={onCloseMobileMenu} className={accentHoverClass}>Galeri</a>
            <a href="#contact" onClick={onCloseMobileMenu} className={accentHoverClass}>Kontak</a>
          </div>
        </nav>
      )}
    </header>
  );
}
