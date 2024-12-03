import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daftar Menu Naffil - Cafe & Resto",
  description: "Daftar Menu Naffil - Cafe & Resto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
