'use client'
import Image from 'next/image'
import Link from 'next/link'

const menus = [
  { name: 'Special Combo', price: '65K', image: '/images/spesial_combo_naffil.png' },
  { name: 'Ayam Bakar Bumbu Iloni', price: '35K', image: '/images/ayam_bakar_bumbu_iloni.png' },
  { name: 'Sop Buah', price: '25K', image: '/images/sop_buah.png' },
  { name: 'Dabu-dabu Goreng Mujair', price: '35K', image: '/images/dabu_dabu_goreng_mujair.png' },
]

export default function FeaturedMenuSection() {
  return (
    <section id='feature-menu' className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-2xl font-bold mb-8">Daftar Menu Unggulan Kami</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {menus.map((item, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden drop-shadow-2xl">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-auto"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm font-semibold">
              {item.name} - {item.price}
            </div> */}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href={'/menu'} className="bg-orange hover:bg-peach hover:text-eerie text-white px-6 py-3 rounded-full font-semibold transition">Lihat semuanya &rarr;</Link>
      </div>
    </section>
  )
}
