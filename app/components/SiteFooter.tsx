import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

type SiteFooterProps = {
  isLight: boolean;
};

export function SiteFooter({ isLight }: SiteFooterProps) {
  return (
    <footer
      className={`border-t py-6 text-center text-sm ${
        isLight
          ? "border-[#2f725e]/20 bg-[#2f725e] text-[#fff8df]/80"
          : "border-[#dfff6f]/10 bg-[#06110f] text-[#fff8df]/70"
      }`}
    >
      <p className="mb-2">
        Copyright 2025 Coded with coffee &amp;{" "}
        <span className="text-[#dfff6f]">love</span> by{" "}
        <span className="font-medium">Risal Walangadi</span>
      </p>
      <div className="flex justify-center gap-6 text-xl">
        <a
          href="https://wa.me/+6282197339862?text=Assalamualaikum+Warahmatullahi+Wabarakatuh."
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#dfff6f]"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com/izhal.gooner"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#dfff6f]"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/izhal.gooner"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#dfff6f]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com/@izhal_gooner"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#dfff6f]"
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}
