"use client";

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
  const trackContactClick = (label: string) => {
    window.gtag?.("event", "contact_click", {
      event_category: "engagement",
      event_label: label,
    });
  };

  return (
    <section
      id="contact"
      className={`py-16 ${isLight ? "bg-[#fbf1cf]" : "bg-[#0c221c]"}`}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 md:grid-cols-2 md:px-8">
        <div
          className={`rounded border p-6 ${isLight ? "border-[#2f725e]/15 bg-[#fff8df]" : "border-[#dfff6f]/15 bg-[#10241d]"}`}
        >
          <h3
            className={`${displayFontClass} text-2xl ${isLight ? "text-[#15372f]" : "text-[#fff8df]"}`}
          >
            Kontak Kami
          </h3>
          <p
            className={`mt-3 text-sm ${isLight ? "text-[#15372f]/75" : "text-[#fff8df]/75"}`}
          >
            Depan Kampus 4 UNG, Moutong, Kec. Tilongkabila, Kabupaten Bone
            Bolango, Gorontalo.
          </p>
          <p
            className={`mt-2 text-sm ${isLight ? "text-[#15372f]/75" : "text-[#fff8df]/75"}`}
          >
            Jam Buka: 10:00 - 22:00 WITA
          </p>
          <p
            className={`mt-2 text-sm ${isLight ? "text-[#15372f]/75" : "text-[#fff8df]/75"}`}
          >
            WhatsApp:
          </p>
          <p
            className={`mt-2 text-sm ${isLight ? "text-[#15372f]/75" : "text-[#fff8df]/75"}`}
          >
            +62 852-4006-1230
          </p>
          <p
            className={`mt-2 text-sm ${isLight ? "text-[#15372f]/75" : "text-[#fff8df]/75"}`}
          >
            +62 821-9501-9091
          </p>
        </div>

        <div
          className={`rounded border p-6 ${isLight ? "border-[#2f725e]/15 bg-[#fff8df]" : "border-[#dfff6f]/15 bg-[#10241d]"}`}
        >
          <p
            className={`text-sm ${isLight ? "text-[#15372f]/75" : "text-[#fff8df]/75"}`}
          >
            Untuk daftar menu lengkap, buka PDF yang sudah tersedia.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/menu"
              onClick={() => trackContactClick("buka_pdf_menu")}
              className="rounded bg-[#dfff6f] px-6 py-3 text-sm font-bold text-[#15372f] hover:bg-[#ecff9d]"
            >
              Buka PDF Menu
            </Link>
            <a
              href="https://wa.me/+6285240061230?text=Halo,+saya+ingin+bertanya."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("reservasi_whatsapp")}
              className={`rounded px-6 py-3 text-sm font-semibold ${
                isLight
                  ? "border border-[#2f725e]/30 text-[#15372f] hover:border-[#e5532c] hover:text-[#e5532c]"
                  : "border border-[#fff8df]/25 text-[#fff8df] hover:border-[#dfff6f] hover:text-[#dfff6f]"
              }`}
            >
              Reservasi Via WhatsApp
            </a>
          </div>
          <div className="mt-4">
            <p
              className={`text-sm ${isLight ? "text-[#15372f]/80" : "text-[#fff8df]/80"}`}
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
