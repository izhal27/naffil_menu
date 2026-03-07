import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

type SiteFooterProps = {
  isLight: boolean;
};

export function SiteFooter({ isLight }: SiteFooterProps) {
  return (
    <footer
      className={`border-t py-6 text-center text-sm ${isLight ? "border-[#9f7d43]/30 bg-[#eadcc8] text-[#2a231c]/80" : "border-white/10 bg-[#0d0e10] text-white/70"}`}
    >
      <p className="mb-2">
        © 2025 Coded with ☕ &amp; <span className="text-red-500">❤️</span> by{" "}
        <span className="font-medium">Risal Walangadi</span>
      </p>
      <div className="flex justify-center gap-6 text-xl">
        <a
          href="https://wa.me/+6282197339862?text=Assalamualaikum+Warahmatullahi+Wabarakatuh."
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com/izhal.gooner"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/izhal.gooner"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com/@izhal_gooner"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange"
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}
