  'use client';

  import Image from 'next/image';
  import Link from 'next/link';
  import React, { useState, useRef, useEffect } from 'react';
  import { Menu, X } from 'lucide-react';

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [translationActive, setTranslationActive] = useState(false);

    useEffect(() => {
  const checkTranslation = () => {
    const el = document.querySelector('[data-original-text]');
    if (el) {
      const original = el.getAttribute('data-original-text')?.trim();
      const current = el.textContent?.trim();
      setTranslationActive(original !== current);
    }
  };

  const interval = setInterval(checkTranslation, 500);
  return () => clearInterval(interval);
}, []);

    const menuRef = useRef<HTMLDivElement>(null);

    // Handle outside click
    useEffect(() => {
      const handler = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Scroll effect
    useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [ 'Product', 'About', 'Blogs', 'Contact'];

    return (
      <nav
        className={`sticky  z-50 transition-all duration-300 ${    translationActive ? 'top-10' : 'top-0'
}  ${
          scrolled
            ? 'bg-gradient-to-br from-[#3896e7] to-[#a5E5FB] backdrop-blur-md shadow-lg border-b border-white/20'
            : 'bg-white/10 backdrop-blur-md border-b border-white/30'
        }`}
      >
        
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <Link href="/" className="flex items-center">
            <Image width={140} height={40} src="/logo.png" alt="Logo" />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(' ', '')}`}
                className="text-white/80 hover:text-white relative transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </Link>
            ))}
            <Link
              href="/signup"
                data-original-text="Sign Up"

              className="cursor-pointer rounded-full bg-gradient-to-r from-[#00D38A] to-[#3F8EFC] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 shadow-md"
            >
              Sign Up
            </Link>

          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden animate-fadeIn absolute top-[70px] left-4 right-4 bg-gradient-to-br from-[#81C9F9] to-[#B5E5FB] backdrop-blur-md border border-white/30 rounded-xl shadow-xl flex flex-col space-y-4 p-6 text-white font-medium"
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(' ', '')}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-teal-300 transition"
              >
                {link}
              </Link>
            ))}
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="text-center cursor-pointer rounded-full bg-gradient-to-r from-[#00D38A] to-[#3F8EFC] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 shadow-md"
            >
              Sign Up
            </Link>

          </div>
        )}
      </nav>
    );
  };

  export default Navbar;
