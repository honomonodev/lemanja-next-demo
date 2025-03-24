"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo or Name */}
        <Link href="/" className="text-xl font-bold text-sky-700">
        🌊
        </Link>

        {/* Mobile menu button */}
        <button
  onClick={() => setIsOpen(!isOpen)}
  className="sm:hidden text-gray-800 focus:outline-none text-2xl"
  aria-label="Toggle menu"
>
  {isOpen ? "✕" : "☰"}
</button>


        {/* Menu links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex space-x-4 items-center`}
        >
          <Link href="#about" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
            Sobre mi
          </Link>
          <Link href="#projects" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
            Projectes
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
            Contacte
          </Link>
        </nav>
      </div>
    </header>
  );
}
