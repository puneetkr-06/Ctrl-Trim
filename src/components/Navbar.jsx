import React, { useState } from "react";
import { Scissors, Home, Info, Contact, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", icon: <Home size={18} />, link: "#" },
  { name: "Services", icon: <Scissors size={18} />, link: "#" },
  { name: "About", icon: <Info size={18} />, link: "#" },
  { name: "Contact", icon: <Contact size={18} />, link: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 shadow-lg"
    >

      <div
        className="flex items-center justify-between px-4 py-4 md:px-6"
        style={{
          background: "linear-gradient(to right, #b4b4b4, #e0e0e0)",
        }}
      >
        {/* Brand */}
        <h1 className="font-manrope text-2xl font-bold tracking-wide text-[#1f1f1f] sm:text-3xl">
          CTRL+<span className="text-[#0e5e58]">TRIM</span>
        </h1>

        {/* Nav Links */}
        <ul className="hidden gap-6 text-sm font-manrope font-semibold uppercase text-[#111111] md:flex">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="group relative transition duration-300 ease-in-out cursor-pointer"
            >
              <a href={link.link} className="flex items-center gap-1">
                {link.icon}
                <span className="group-hover:text-[#0f766e]">
                  {link.name}
                </span>
              </a>
              {/* Underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0f766e] group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-md p-2 text-[#111111] transition-colors hover:bg-black/10 md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-black/10 bg-[#d4d4d4] px-4 py-3 md:hidden"
          >
            <ul className="flex flex-col gap-2 text-sm font-manrope font-semibold uppercase text-[#111111]">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-black/10"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
