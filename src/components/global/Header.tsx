'use client';
import React, { useState, useEffect } from 'react';
import { navItems } from 'utils/data';
import CrossIcon from 'utils/CrossIcon';
import MenuIcon from 'utils/MenuIcon';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <header className="
        hidden lg:flex items-center justify-between
        
        px-10 py-3
        shadow-[0_1px_0_rgba(255,255,255,0.06)]
      ">
        {/* Logo */}
        <Link href="/">
          <div className="text-xl lg:text-2xl font-bold tracking-tight text-white">
            SnapCoat CRM
            <div className="text-xs text-cyan-400 font-medium">
              Powered by AI
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex space-x-10">
            {navItems.map((item) => (
              <Link href={item.link} key={item.name}>
                <li className="
                  relative cursor-pointer
                  text-gray-200 hover:text-cyan-400
                  text-sm font-medium
                  after:absolute after:-bottom-1 after:left-0
                  after:h-[2px] after:w-0 after:bg-cyan-400
                  hover:after:w-full after:transition-all
                ">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/signin">
            <button className="
              text-gray-200 hover:text-cyan-400
              text-sm font-medium transition z-10
            ">
              Existing User? Sign In
            </button>
          </Link>

          <Link href="/signup">
            <button className="
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-black px-5 py-2 rounded-full
              text-sm font-semibold
              hover:opacity-90 transition
            ">
              Join Waitlist
            </button>
          </Link>
        </div>
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all ${
          isScrolled
            ? 'bg-[#020617]/80 backdrop-blur-md'
            : 'bg-[rgba(59,130,246,0.03)]'
        }`}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-bold text-white">
            SnapCoat CRM
            <div className="text-[10px] text-cyan-400">Powered by AI</div>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <CrossIcon color="#fff" size={28} />
            ) : (
              <MenuIcon color="#fff" size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 top-[64px] transition-all duration-300 ${
            isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <div className="
            absolute right-0 h-full w-full sm:w-96
            bg-[#020617]/95 backdrop-blur-xl
            p-6
          ">
            <ul className="space-y-4 mt-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="
                        w-full text-left
                        text-gray-200 hover:text-cyan-400
                        py-3 px-4 rounded-lg
                        hover:bg-white/5 transition
                      "
                    >
                      {item.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4 border-t border-white/10 pt-6">
              <Link href="/signin">
                <button className="w-full text-gray-200 hover:text-cyan-400">
                  Sign In
                </button>
              </Link>

              <Link href="/signup">
                <button className="
                  w-full bg-gradient-to-r from-cyan-400 to-blue-500
                  text-black py-3 rounded-full font-semibold
                ">
                  Join Waitlist
                </button>
              </Link>
            </div>
          </div>

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </header>

      <div className="lg:hidden h-16" />
    </>
  );
};

export default Header;
