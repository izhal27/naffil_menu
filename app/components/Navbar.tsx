'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setHidden(true);
        // @typescript-eslint / no - unused - expressions
        if (open) {
          setOpen(false);
        }
      } else if (lastScrollY < 100) {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, open])

  return (
    <nav className={`bg-transparent fixed top-0 left-0 text-white w-full z-50 transition-transform duration-700 ${hidden ? '-translate-y-full' : 'translate-y-0'
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="hidden md:block font-medium text-white">
          Naffli Cafe & Resto
        </Link>

        <Link href="/" className="md:hidden text-2xl font-bold text-white">
          <Image src={'/images/naffil-logo.png'} width={30} height={30} alt='logo' />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><Link href="#home" className="hover:border-b border-white hover:text-orange transition">Home</Link></li>
          <li><Link href="#about" className="hover:border-b border-white hover:text-orange transition">Tentang</Link></li>
          <li><Link href="#feature-menu" className="hover:border-b border-white hover:text-orange transition">Daftar Menu</Link></li>
          <li><Link href="#reservation" className="hover:border-b border-white hover:text-orange transition">Reservation</Link></li>
          <li><Link href="#location" className="hover:border-b border-white hover:text-orange transition">Lokasi</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="bg-eerie md:hidden pr-8 p-4 space-y-3 font-medium text-white text-right">
          <li><Link href="#home" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="#about" onClick={() => setOpen(false)}>Tentang</Link></li>
          <li><Link href="#feature-menu" onClick={() => setOpen(false)}>Daftar Menu</Link></li>
          <li><Link href="#reservation" onClick={() => setOpen(false)}>Reservasi</Link></li>
          <li><Link href="#location" onClick={() => setOpen(false)}>Lokasi</Link></li>
        </ul>
      )}
    </nav>
  );
}

