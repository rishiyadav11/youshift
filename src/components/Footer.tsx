'use client';

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-center md:text-start text-white">YouShift</h3>
          <p className="text-sm mt-4 text-center md:text-start">
            Backed by <span className="text-[#00D38A] font-medium">Y Combinator</span>
          </p>
          <p className="text-sm text-center md:text-start">
            Created with ❤️ by{' '}
            <a href="https://rishiyadav.me/" className="text-[#3F8EFC] hover:underline font-semibold">
              Rishi Yadav
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-white text-lg text-center font-semibold mb-4">Navigation</h4>
          <ul className="text-sm flex gap-5 justify-center flex-col md:flex-row items-center">
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/cookie" className="hover:text-white transition">Cookie Policy</Link></li>
            <li><Link href="/legal" className="hover:text-white transition">Legal Notice</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white text-lg text-center font-semibold mb-4">Connect with us</h4>
          <div className="flex space-x-4 justify-center">
            <Link href="https://x.com/youshift_" target="_blank"><FaTwitter className="hover:text-[#1DA1F2] text-xl transition-all duration-300" /></Link>
            <Link href="https://www.linkedin.com/company/you-shift/" target="_blank"><FaLinkedin className="hover:text-[#0077b5] text-xl transition-all duration-300" /></Link>
            <Link href="https://www.youtube.com/@TechYouShift" target="_blank"><FaYoutube className="hover:text-[#FF0000] text-xl transition-all duration-300" /></Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center">
        © {new Date().getFullYear()} YouShift. All rights reserved.

        {/* Google Translate Section */}
        <div className="mt-4 flex flex-col items-center justify-center">
          <p className="text-white mb-1">🌐 Change Language</p>
          <div
            id="google_translate_element"
            className="text-sm text-black bg-white px-3 py-2 rounded-md shadow-md cursor-pointer transition hover:bg-gray-100"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
