import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

type ContactSectionProps = {
  isLight: boolean;
  accentHoverClass: string;
  displayFontClass: string;
};

export function ContactSection({
  isLight,
  accentHoverClass,
  displayFontClass,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`py-16 ${isLight ? "bg-[#efe4d2]" : "bg-[#17181b]"}`}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 md:grid-cols-2 md:px-8">
        <div
          className={`rounded border p-6 ${isLight ? "border-[#b99762]/35 bg-[#f8efdf]" : "border-white/10 bg-[#0f1012]"}`}
        >
          <h3
            className={`${displayFontClass} text-2xl ${isLight ? "text-[#1d1915]" : "text-white"}`}
          >
            Kontak Kami
          </h3>
          <p
            className={`mt-3 text-sm ${isLight ? "text-[#2a231c]/80" : "text-white/75"}`}
          >
            Depan Kampus 4 UNG, Moutong, Kec. Tilongkabila, Kabupaten Bone
            Bolango, Gorontalo.
          </p>
          <p
            className={`mt-2 text-sm ${isLight ? "text-[#2a231c]/80" : "text-white/75"}`}
          >
            Jam Buka: 10:00 - 22:00 WITA
          </p>
          <p
            className={`mt-2 text-sm ${isLight ? "text-[#2a231c]/80" : "text-white/75"}`}
          >
            WhatsApp: +62 821-9733-9862
          </p>
        </div>

        <div
          className={`rounded border p-6 ${isLight ? "border-[#b99762]/35 bg-[#f8efdf]" : "border-white/10 bg-[#0f1012]"}`}
        >
          <p
            className={`text-sm ${isLight ? "text-[#2a231c]/80" : "text-white/75"}`}
          >
            Untuk daftar menu lengkap, buka PDF yang sudah tersedia.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded bg-[#d6ab62] px-6 py-3 text-sm font-semibold text-[#171719] hover:bg-[#efc77e]"
            >
              Buka PDF Menu
            </Link>
            <a
              href="https://wa.me/+6285240061230?text=Halo,+saya+ingin+bertanya."
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded px-6 py-3 text-sm font-semibold ${
                isLight
                  ? "border border-[#7d6440]/45 text-[#1d1915] hover:border-[#b48a4b] hover:text-[#7d5b27]"
                  : "border border-white/30 text-white hover:border-[#f2c879] hover:text-[#f2c879]"
              }`}
            >
              Reservasi Via WhatsApp
            </a>
          </div>
          <div className="mt-4">
            <p
              className={`text-sm ${isLight ? "text-[#2a231c]/85" : "text-white/80"}`}
            >
              Ikuti kami di media sosial
            </p>
            <div className="mt-3 flex gap-6 text-2xl">
              <a
                href="https://www.facebook.com/profile.php?id=61566458211542"
                target="_blank"
                rel="noopener noreferrer"
                className={accentHoverClass}
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/naffilcaferesto"
                target="_blank"
                rel="noopener noreferrer"
                className={accentHoverClass}
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com/@naffil.cafe.resto"
                target="_blank"
                rel="noopener noreferrer"
                className={accentHoverClass}
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
