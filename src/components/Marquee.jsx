import React from "react";
import { motion } from "framer-motion";

const services = [
  "Shaving",
  "Haircutting",
  "Styling",
  "Trimming",
  "Beard Designing",
  "Face Cleaning",
];

const Marquee = () => {
  const repeated = [...services, ...services, ...services]; // Repeat more for long scroll

  return (
    <div className="w-full bg-black overflow-hidden py-3 border-t border-white/10">
      <motion.div
        className="flex text-white text-lg font-manrope font-semibold tracking-widest gap-32"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {repeated.map((service, idx) => (
          <span key={idx} className="flex-shrink-0 whitespace-nowrap">
            ✦ {service}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
