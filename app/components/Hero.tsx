'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import Link from 'next/link'

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section
      id='home'
      className="bg-eerie text-white min-h-dvh flex flex-col-reverse md:flex-row md:items-center md:justify-between px-6 md:px-20 py-16 relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-hero-image.png"
          alt="Background"
          fill
          className="object-cover opacity-35" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-eerie to-transparent" />

      {/* Text Content */}
      <div
        className="md:w-1/2 space-y-6 text-center md:text-left z-10"
        data-aos="fade-up"
        data-aos-md="fade-right"
      >
        <Image
          src='/images/naffil-logo.png'
          alt="Logo"
          width={130}
          height={130}
          className="hidden md:block mx-auto md:mx-0"
        />
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Cita Rasa Nusantara, <br /> Hangatnya Seperti di Rumah
        </h1>
        <p className="text-gray-300 md:text-xl">
          Kami sajikan kelezatan kuliner lokal dalam sentuhan modern tanpa
          menghilangkan rasa autentik yang kamu cintai.
        </p>
        <Link
          href='#feature-menu'
          className="inline-block bg-orange hover:bg-peach hover:text-eerie text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Lihat Daftar Menu
        </Link>
      </div>

      {/* Hero Image */}
      <div
        className="md:w-1/2 md:mt-0 flex justify-center z-10"
        data-aos="fade-up"
        data-aos-md="fade-left"
      >
        <Image
          src='/images/hero-image.png'
          width={500}
          height={500}
          alt="Hero Food"
          className="w-[80%] md:w-[100%] max-w-[500px]"
          priority
        />
      </div>
    </section>
  )
}
