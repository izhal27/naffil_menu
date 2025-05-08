'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div data-aos="zoom-in" className="max-w-md">
        <Image
          src="/not-found-image.png"
          alt="Not Found"
          width={300}
          height={300}
          className="mx-auto mb-6"
        />
        <p className="text-lg mb-6">Oops! Halaman yang kamu cari tidak ditemukan.</p>
        <Link
          href="/"
          className="inline-block text-white bg-[#263238] hover:text-[#ed3a5b] px-6 py-3 rounded-lg transition duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
