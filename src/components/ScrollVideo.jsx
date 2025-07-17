import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import faceVideo from "../assets/face_shoot.mp4";
import Marquee from "./Marquee";
import RotatingText from './RotatingText'

gsap.registerPlugin(ScrollTrigger);

const scrollTexts = [
  "CTRL+TRIM offers modern grooming with expert barbers, stylish cuts, and premium care. Book now to experience sharp looks and confident vibes tailored just for you.",
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
    <div ref={containerRef} className=" bg-[#b4b4b4] min-h-[700px] overflow-x-hidden">
    <div
      className="w-full flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 relative"
    >

{/* Left Text */}
<div className="w-1/2 md:flex flex-col justify-between h-full py-4 px-4 gap-8">
  {/* Centered Text */}
  <div className="flex-1 flex items-center">
<RotatingText  texts={['Get', 'Stylish', 'Cool Haircuts', 'From Experts!']}
 mainClassName="px-2 sm:px-2 md:px-3 text-8xl font-bold text-neutrl-900 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
 staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
 staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={3000}
/>
  </div>

<div ref={containerRef} className="mt-8">
  <h2 className="text-2xl font-bold text-gray-700 font-manrope">
    {typedText}
  </h2>
</div>


  {/* Bottom Button */}
  <div className="mt-16">
    <button className="bg-[#0e5e58] text-white px-6 py-2 rounded-full font-manrope font-semibold hover:bg-[#11806a] text-2xl transition-all duration-300">
      Book Appointment
    </button>
  </div>
</div>


      {/* Right Video Section */}
      <div className="flex-1 flex-wrap justify-center items-center pt-32">
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
