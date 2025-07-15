import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import faceVideo from "../assets/face_shoot.mp4";
import Marquee from "./Marquee";

gsap.registerPlugin(ScrollTrigger);

const scrollTexts = [
  "Gentleman's First Choice",
  "Crafted Cuts, Confident You",
  "Book your session with us now!",
];

const ScrollVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    video.pause();

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom+=100% top",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        const duration = video.duration;
        if (!isNaN(duration)) {
          video.currentTime = duration * scrollProgress;

          // Change text based on progress %
          const idx = Math.floor(scrollProgress * scrollTexts.length);
          setCurrentTextIndex(Math.min(idx, scrollTexts.length - 1));
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(scrollTexts[currentTextIndex].slice(0, i + 1));
      i++;
      if (i >= scrollTexts[currentTextIndex].length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [currentTextIndex]);

  return (
    <div ref={containerRef} className=" bg-[#b4b4b4] ">
    <div
      className="w-full flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 relative"
    >

{/* Left Text */}
<div className="w-1/2 hidden md:flex flex-col justify-between h-full py-10 pr-4">
  {/* Centered Text */}
  <div className="flex-1 flex items-center">
    <div>
      <h1 className="text-4xl font-staat font-bold text-[#1f1f1f] mb-4 leading-tight">
        {typedText}
      </h1>
    </div>
  </div>

  {/* Bottom Button */}
  <div className="mt-auto">
    <button className="bg-[#0e5e58] text-white px-6 py-2 rounded-full font-manrope font-semibold hover:bg-[#11806a] transition-all duration-300">
      Book Appointment
    </button>
  </div>
</div>


      {/* Right Video Section */}
      <div className="flex-1 flex justify-center items-center pt-32">
        <video
          ref={videoRef}
          src={faceVideo}
          muted
          playsInline
          className="w-[70vw] sm:w-[300px] md:w-[350px] lg:w-[600px] xl:w-[900px] h-auto object-cover"
        />
      </div>
    </div>
    <Marquee/>
    </div>
  );
};

export default ScrollVideo;
