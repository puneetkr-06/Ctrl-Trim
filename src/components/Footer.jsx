import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#B4B4B4] text-black mt-4 text-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


        <div>
          <h2 className="text-2xl font-bold font-staat tracking-wide">Ctrl + <span className="text-[#0e5e58]">Trim</span></h2>
          <p className="text-sm mt-2">
            Crafting styles with precision & passion. Visit us to experience
            the best grooming in town.
          </p>
        </div>

 
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#booking" className="hover:underline">Book Appointment</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm">📍 123 Barber Street, Kanpur</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ contact@barberx.com</p>
        </div>


        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>


      <div className="text-center text-sm bg-[#B4B4B4] py-4 mt-4 px-2">
        <p>© 2025 BarberX. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
