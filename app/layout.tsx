import type { Metadata } from "next";
import "./globals.css";

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
      <body className="max-w-screen-2xl mx-auto">
        {children}
      </body>
    </html>
  );
}
