'use client'
import React from 'react'

export default function LocationSection() {
  return (
    <section id="location" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Lokasi Kami</h2>
          <p className="text-gray-600">
            Moutong, Kecamatan Tilongkabila, Kabupaten Bone Bolango, Provinsi Gorontalo, Indonesia
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="md:w-1/2 w-full">
          <iframe
            title="Lokasi Naffli Cafe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.705712200224!2d123.13358547496473!3d0.5526830994419155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327ed50049b70cd9%3A0x5121869cf3ac2372!2sNAFFIL%20CAFE%20%26%20RESTO!5e1!3m2!1sid!2sid!4v1746602570027!5m2!1sid!2sid"
            width="100%"
            height="300"
            className="rounded-xl"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
