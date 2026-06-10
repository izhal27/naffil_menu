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
          ? "border-[#2f725e]/20 bg-[#fff7df]/90 shadow-sm shadow-[#2f725e]/10"
          : "border-[#dfff6f]/15 bg-[#071915]/80 shadow-sm shadow-black/25"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#home"
          className={`flex items-center gap-2 ${isLight ? "text-[#15372f]" : "text-[#fff8df]"}`}
        >
          <Image src="/images/naffil-logo.png" alt="Naffil" width={34} height={34} />
          <span className={`${displayFontClass} text-sm md:text-base`}>
            Naffil Cafe & Resto
          </span>
        </a>
        <nav
          className={`hidden items-center gap-6 text-xs font-semibold md:flex ${isLight ? "text-[#15372f]/80" : "text-[#fff8df]/80"}`}
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
                ? "border border-[#2f725e]/25 bg-white text-[#15372f]"
                : "border border-[#dfff6f]/20 bg-[#fff8df]/10 text-[#fff8df]"
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
                ? "border border-[#2f725e]/25 bg-white text-[#15372f] hover:bg-[#edf7cf]"
                : "border border-[#dfff6f]/20 bg-[#fff8df]/10 text-[#fff8df] hover:bg-[#dfff6f]/15"
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
              ? "border-[#2f725e]/25 bg-[#fff7df] text-[#15372f]"
              : "border-[#dfff6f]/15 bg-[#071915] text-[#fff8df]"
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
