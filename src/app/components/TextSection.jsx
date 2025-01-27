import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";
function TextSection() {
  const text =
    " Your creative process deserves better. You're racing to create exceptional work, but traditional design tool slow you down with unnecessary complexity and steep learning curves.";
  const words = text.split(" ");
  const scrollTarget = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-12 md:py-28 lg:py-40">
      <div className="container ">
        <div className="sticky top-20 md:top-28">
          <div className="flex justify-center">
            <div className="mb-2  w-fit px-2 border-[1px] bg-black border-lime-400 rounded-3xl h-[2rem] flex justify-center items-center gap-2">
              <BsPlus size={28} className="text-lime-400" />
              <p className="font-semibold text-sm text-lime-400">
                INTRODUCTION LAYERS
              </p>
            </div>
          </div>
          <div className="text-2xl w-[20rem] md:text-6xl lg:text-5xl lg:w-[50rem] text-center font-semibold xl:w-[63rem]">
            <span>Your creative process deserves better.</span>
            <span className="text-white/15">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={index < currentWord && "text-white"}
                  transition={{ duration: 0.5 }}
                >
                  {word} {""}
                </span>
              ))}
            </span>
            <span className=" text-lime-400">
              That&apos;s why we build layers
            </span>
          </div>
        </div>
        <div className="h-[120vh]" ref={scrollTarget}></div>
      </div>
    </section>
    // <div className="w-[90%] md:w-[90%] lg:w-[55%]">
    //   <div className="md:text-5xl text-2xl lg:text-5xl xl:text-7xl text-white font-medium text-center mt-4">
    //     <div>
    //       <div className="md:text-5xl text-2xl lg:text-5xl xl:text-7xl text-white/50 ">
    //         {words.map((word, index) => (
    //           <motion.span
    //             key={index}
    //             animate={{ color: index < currentWord ? "white" : "" }}
    //             transition={{ duration: 0.5 }}
    //           >
    //             {word} {""}
    //           </motion.span>
    //         ))}
    //         <p className=" text-lime-400">That's why we build layers</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="h-[220rem] md:h-[180rem] lg:h-[160rem] mb-32 lg:mb-12"></div>
    // </div>
  );
}

export default TextSection;
