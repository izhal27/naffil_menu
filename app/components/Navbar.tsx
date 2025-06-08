'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setHidden(true);
        if (open) setOpen(false);
      }
      else if (currentScrollY < 100) {
        setHidden(false);
      }

      prevScrollY = currentScrollY; // update nilai sebelumnya
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
    <nav className={`bg-transparent fixed top-0 left-0 text-white w-full z-50 transition-transform duration-700 ${hidden ? '-translate-y-full' : 'translate-y-0'
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="hidden md:block font-medium text-white">
          Naffli Cafe & Resto
        </Link>

        <Link href="/" className="md:hidden text-2xl font-bold text-white">
          <Image src={'/images/naffil-logo.png'} width={60} height={60} alt='logo' />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <Link
              href="#home"
              className="relative after:block after:h-[2px] after:bg-orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="relative after:block after:h-[2px] after:bg-orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href="#feature-menu"
              className="relative after:block after:h-[2px] after:bg-orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
            >
              Daftar Menu
            </Link>
          </li>
          <li>
            <Link
              href="#reservation"
              className="relative after:block after:h-[2px] after:bg-orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
            >
              Reservasi
            </Link>
          </li>
          <li>
            <Link
              href="#location"
              className="relative after:block after:h-[2px] after:bg-orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
            >
              Lokasi
            </Link>
          </li>
        </ul>


        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white" aria-label="Toggle Menu" aria-expanded="false">
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

