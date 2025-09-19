"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#171717] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl">
            James<span className="text-teal-500 pl-1">Peng</span>
          </Link>

          {/* Menu (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link href="#projects" className="hover:text-teal-500">
              Projects
            </Link>
            <Link href="#about" className="hover:text-teal-500">
              About
            </Link>
            <Link href="#contact" className="hover:text-teal-500">
              Contact
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <Link href="#projects" className="block px-4 py-2 hover:bg-gray-100">
            Projects
          </Link>
          <Link href="#about" className="block px-4 py-2 hover:bg-gray-100">
            About
          </Link>
          <Link href="#contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
