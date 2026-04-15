import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import faceVideo from "../assets/face_shoot.mp4";
import Marquee from "./Marquee";
import RotatingText from "./RotatingText";

gsap.registerPlugin(ScrollTrigger);

const scrollTexts = [
  "CTRL+TRIM offers modern grooming with expert barbers, stylish cuts, and premium care. Book now to experience sharp looks and confident vibes tailored just for you.",
];

const rotatingPhrases = ["Get Stylish", "Cool Haircuts", "From Experts!"];

const ScrollVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const updateScreenState = (event) => setIsSmallScreen(event.matches);

    setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateScreenState);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenState);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    video.pause();

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: isDesktop ? "top top" : "top 80%",
      end: isDesktop ? "bottom+=100% top" : "bottom bottom",
      scrub: true,
      pin: isDesktop,
      anticipatePin: 1,
      invalidateOnRefresh: true,
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

  const rotatingTextItems = isSmallScreen
    ? rotatingPhrases.map((phrase) => phrase.replace(" ", "\n"))
    : rotatingPhrases;

  return (
    <section ref={containerRef} className="overflow-x-hidden bg-[#b4b4b4] pt-20 sm:pt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 pt-6 sm:px-8 sm:pt-8 lg:min-h-[680px] lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="flex w-full flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left lg:gap-8">
          <div className="flex w-full justify-center lg:justify-start min-h-[200px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[220px]">
            <RotatingText
              texts={rotatingTextItems}
              mainClassName="px-1 text-6xl font-bold leading-none text-neutral-900 overflow-hidden py-0.5 sm:text-8xl sm:py-1 md:text-7xl md:py-2 lg:text-8xl justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitBy={isSmallScreen ? "lines" : "characters"}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>

          <div className="max-w-xl">
            <h2 className="text-base font-bold text-gray-700 font-manrope sm:text-lg md:text-xl lg:text-2xl">
              {typedText}
            </h2>
          </div>

          <div className="pt-2 sm:pt-4 lg:pt-8">
            <button className="rounded-full bg-[#0e5e58] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#11806a] sm:px-6 sm:py-3 sm:text-base md:text-lg lg:text-2xl">
              Book Appointment
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <video
            ref={videoRef}
            src={faceVideo}
            muted
            playsInline
            className=" w-full max-w-[360px] rounded-2xl object-cover sm:max-w-[420px] md:max-w-[520px] lg:max-w-[700px] xl:max-w-[1000px]"
          />
        </div>
      </div>
      <Marquee />
    </section>
  );
};

export default ScrollVideo;
