import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-eerie text-white py-6 text-center">
      <p className="text-sm mb-3">
        © 2025 Coded with ☕ & <span className="text-red-500">❤️</span> by <span className="font-medium">Risal Walangadi</span>
      </p>

      <div className="flex justify-center gap-6 text-xl">
        <a href="https://facebook.com/izhal.gooner" target="_blank" rel="noopener noreferrer" className="hover:text-orange">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/izhal.gooner" target="_blank" rel="noopener noreferrer" className="hover:text-orange">
          <FaInstagram />
        </a>
        <a href="https://tiktok.com/@izhal_gooner" target="_blank" rel="noopener noreferrer" className="hover:text-orange">
          <FaTiktok />
        </a>
      </div>
    </footer>
  )
}