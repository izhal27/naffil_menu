import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function ReservationSection() {
  return (
    <section id="reservation" className="bg-eerie text-white py-12 text-center">
      <h2 className="text-xl md:text-4xl font-medium">
        Reservasi Sekarang Melalui Whatsapp <span className="flex flex-col md:flex-none font-bold text-white text-4xl md:text-7xl ml-2">
          <Link
            href='https://wa.me/+6285240061230?text=Halo,+saya+ingin+bertanya.'
            target="_blank">
            0852-4006-1230
          </Link>
        </span>
      </h2>

      <p className="mt-4 md:text-2xl text-gray-300">Hubungi kami melalui media sosial</p>

      <div className="flex justify-center gap-6 mt-4 text-2xl">
        <a href="https://www.facebook.com/profile.php?id=61566458211542"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange"
        >
          <FaFacebook />
        </a>
        <a href="https://instagram.com/naffilcaferesto"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange"
        >
          <FaInstagram />
        </a>
        <a href="https://tiktok.com/@naffil.cafe.resto"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange"
        >
          <FaTiktok />
        </a>
      </div>
    </section>
  )
}
