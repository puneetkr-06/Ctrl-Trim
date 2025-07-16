
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import blog_1 from "../assets/blog_1.webp";
import blog_2 from "../assets/blog_2.webp";
import blog_3 from "../assets/blog_3.webp";
import blog_4 from "../assets/blog_4.png";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>

<div className="w-full flex justify-center items-center py-8">
  <h1 className="text-white text-4xl font-bold text-staat text-center">Our Blogs</h1>
</div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-[#0e5e58] text-white">
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul
        className="max-w-full mx-auto w-full grid grid-cols-1 md:grid-cols-4 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-2 flex flex-col bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-100 w-full  rounded-lg object-cover object-top" />
              </motion.div>
              <div className="flex justify-center items-center flex-col ">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "~ Sanjay Inventor",
    title: "Discover the Secret Behind the Best Hair Straightener Company !",
    src: blog_1,
    ctaText: "Visit",
    ctaLink: "https://mrbarber.in/blogs/news/discover-the-secret-behind-the-best-hair-straightener-company-transform-your-tresses-today",
    content: () => {
      return (
        <p>Keeping all this aside, the title means that it is a very busy time in terms of hair styling. The one name in this hairstyle that sounds best is the Best Hair Straightener Company. This is the pioneering manufacturer which has surpassed all in achieving salon-quality effects in one's own space, turning into one's choice for talent or sheer enthusiasts. With consideration for the various styling requirements, the company provides: Models with a wide plate, especially for thick hair Models that are sleek and slim ,for precision styling Heat settings that can be adjusteda according to all hair textures.
                  </p>
      );
    },
  },
  {
    description: "~ Babbu Maan",
    title: "How to Choose a Heat Setting on a Professional Hair Styler for Your Hair Type",
    src: blog_2,
    ctaText: "Visit",
    ctaLink: "https://mrbarber.in/blogs/news/how-to-choose-a-heat-setting-on-a-professional-hair-styler-for-your-hair-type",
    content: () => {
      return (
        <p>Ready to step up your hair game? And now you have to learn about the ultimate guide on getting salon-style locks from professional hairstylers, which is useful to seasoned stylists, hair aficionados who want to learn the right techniques and tools to turn their hair from drab to fab. You can achieve that salon quality at home by learning how to use a professional hair styler correctly. Always remember the protection of hair by using heat protectant and moderate temperatures as much as possible. Now go have fun styling!
                  </p>
      );
    },
  },

  {
    description: "~ Sanny Gorakhpur",
    title: "The Ultimate Guide to Choosing the Best Hair Curler for Your Hair Type",
    src: blog_3,
    ctaText: "Visit",
    ctaLink: "https://mrbarber.in/blogs/news/the-ultimate-guide-to-choosing-the-best-hair-curler-for-your-hair-type",
    content: () => {
      return (
        <p>Ready to unleash your inner hairstylist? Choosing the best hair curler for your hair type is crucial for achieving the looks you desire. This guide will walk you through the world of hair curlers, from classic curling irons to innovative wands and automatic curlers. Ctrl+Trim's collection of professional hair curl machines caters to diverse hair types and styling preferences. Whether you're a seasoned pro or a beginner, there's a Mr. Barber curler that's perfect for you. We've even got the best professional hair curler for those who want top-of-the-line features and performance.
                  </p>
      );
    },
  },
  {
    description: "~ Saransh Gupta",
    title: "Ordinary vs. Professional Tools: What's the Difference and Why Does It Matter?",
    src: blog_4,
    ctaText: "Visit",
    ctaLink: "https://mrbarber.in/blogs/news/ordinary-vs-professional-tools-whats-the-difference-and-why-does-it-matter",
    content: () => {
      return (
        <p>Okay, let's be real. We've all stood in the hair tools aisle, mesmerized by the shiny straighteners and curling wands, wondering, "Do I really need the expensive one?" If you're serious about your hair game, the answer is a resounding YES! Think of it like this: you wouldn't use a butter knife to carve a Thanksgiving turkey, would you? The right tools make all the difference, and your hair deserves the best. That's where professional hair tools come in. Hair styling is all about transforming your hair's texture and shape, and that often involves heat. Ordinary hair tools often fall short when it comes to precision and control. They might have hot spots that fry your hair, or they lack the features you need to create those Insta-worthy styles.


                  </p>
      );
    },
  },
];
