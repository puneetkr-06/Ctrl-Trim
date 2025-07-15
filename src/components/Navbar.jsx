import React from "react";
import { Scissors, Home, Info, Contact } from "lucide-react";

const navLinks = [
  { name: "Home", icon: <Home size={18} />, link: "#" },
  { name: "Services", icon: <Scissors size={18} />, link: "#" },
  { name: "About", icon: <Info size={18} />, link: "#" },
  { name: "Contact", icon: <Contact size={18} />, link: "#" },
];

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 border-b border-white/10">
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{
          background: "linear-gradient(to right, #b4b4b4, #e0e0e0)",
        }}
      >
        {/* Brand */}
        <h1 className="font-manrope font-bold text-3xl text-[#1f1f1f] tracking-wide">
          CTRL+<span className="text-[#0e5e58]">TRIM</span>
        </h1>

        {/* Nav Links */}
        <ul className="flex gap-6 text-[#111111] font-manrope font-semibold text-sm uppercase">
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
      </div>
    </div>
  );
};

export default Navbar;
