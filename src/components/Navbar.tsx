"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#171717] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            James<span className="text-teal-500 pl-1">Peng</span>
          </Link>

          {/* Menu (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link href="#projects" className="hover:text-teal-500">
              Projects
            </Link>
            <Link href="#campaigns" className="hover:text-teal-500">
              Campaigns
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
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#171717]/95 z-50 flex flex-col items-center justify-center space-y-8 text-2xl text-white"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-3xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Menu Items with Stagger Animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="flex flex-col items-center space-y-8"
            >
              {["Projects", "Campaigns", "About", "Contact"].map((item) => (
                <motion.div
                  key={item}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-teal-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
