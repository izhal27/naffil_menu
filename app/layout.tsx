import type { Metadata } from "next";
import Script from 'next/script';

import 'aos/dist/aos.css';
import "./globals.css";
import { Analytics } from "./components/Analytics";

export const metadata: Metadata = {
  title: "Daftar Menu Naffil - Cafe & Resto",
  description: "Daftar Menu Naffil - Cafe & Resto | Depan Kampus 4 UNG | Moutong, Kec. Tilongkabila, Kabupaten Bone Bolango, Gorontalo",
  openGraph: {
    title: "Daftar Menu Naffil - Cafe & Resto",
    description: "Daftar Menu Naffil - Cafe & Resto | Depan Kampus 4 UNG | Moutong, Kec. Tilongkabila, Kabupaten Bone Bolango, Gorontalo",
    images: ["/opengraph-image.png", '/opengraph-image-square.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* GA Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-BR3VZSVBN9`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BR3VZSVBN9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="max-w-screen-2xl mx-auto">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
