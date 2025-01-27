"use client";
import React, { useEffect, useState, useRef, Fragment } from "react";
import { FaBarsStaggered, FaCirclePlus } from "react-icons/fa6";
import { BsPlus, BsStars } from "react-icons/bs";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImCross } from "react-icons/im";
import TextSection from "./components/TextSection";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import Accordin from "./components/accordin";

function Page() {
  const animation = useRef(null);
  const [scope, animate] = useAnimate();
  const [box, setBox] = useState({
    reverse: true,
    isHover: false,
    isOpen: false,
  });

  const { reverse, isHover, isOpen } = box;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const offers = [
    "Try it for free",
    "Try it for free",
    "Try it for free",
    "Try it for free",
    "Try it for free",
  ];

  var arr = [
    "Asset library",
    " Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guide",
  ];

  const arr2 = [
    {
      img: "/images/figma-logo.svg",
      text: "Figma",
      para: "Figma is a collaborative interface design tool.",
    },
    {
      img: "/images/notion-logo.svg",
      text: "Notion",
      para: "Notion is an akk-in-one workspace for your notes",
    },
    {
      img: "/images/slack-logo.svg",
      text: "Slack",
      para: "Figma is a collaborative interface design tool.",
    },
    {
      img: "/images/slack-logo.svg",
      text: "Slack",
      para: "Figma is a collaborative interface design tool.",
    },
    {
      img: "/images/slack-logo.svg",
      text: "Slack",
      para: "Figma is a collaborative interface design tool.",
    },
  ];

  const arr3 = [
    {
      img: "/images/github-logo.svg",
      text: "Github",
      para: "Github is a leading platform for code collaboration.",
    },
    {
      img: "/images/framer-logo.svg",
      text: "Framer",
      para: "Framer is a professional prototyping tool.",
    },
    {
      img: "/images/relume-logo.svg",
      text: "Slack",
      para: "Figma is a collaborative interface design tool.",
    },
    {
      img: "/images/relume-logo.svg",
      text: "Slack",
      para: "Figma is a collaborative interface design tool.",
    },
  ];

  const logoImages = [
    "/images/acme-corp.svg",
    "/images/quantum.svg",
    "/images/echo-valley.svg",
    "/images/acme-corp.svg",
    "/images/pulse.svg",
    "/images/acme-corp.svg",
    "/images/pulse.svg",
    "/images/echo-valley.svg",
    "/images/acme-corp.svg",
    "/images/quantum.svg",
    "/images/acme-corp.svg",
  ];

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHover) {
        animation.current.speed = 0.4;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHover]);

  return (
    <div>
      <div className="border border-white/15 mx-4 md:rounded-full bg-neutral-950/70 backdrop-blur sticky top-4 rounded-3xl z-20">
        <div className="w-full p-4 flex justify-center ">
          <div className="w-[80%] xl:w-[60%] flex justify-between items-center h-[7vh] rounded-3xl">
            <Image src="/images/logo.svg" height={130} width={130} alt="logo" />
            <div className="lg:flex gap-4 text-gray-300 hidden lg:ml-24  xl:ml-10">
              <p>Home</p>
              <p>Features</p>
              <p>Integration</p>
              <p>Faqs</p>
            </div>
            <div className="lg:flex gap-2 hidden md:flex">
              <button className="p-4 py-2 px-5 rounded-3xl border-2 border-gray-200 text-gray-300 font-semibold">
                Log in
              </button>
              <button className="py-2 px-4 rounded-3xl text-black bg-lime-400 font-semibold">
                Sign up
              </button>
            </div>
            <div className="lg:hidden">
              {isOpen ? (
                <ImCross
                  size={26}
                  color="white"
                  onClick={() => setBox({ ...box, isOpen: !isOpen })}
                />
              ) : (
                <FaBarsStaggered
                  size={26}
                  color="white"
                  onClick={() => setBox({ ...box, isOpen: !isOpen })}
                />
              )}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="  overflow-hidden lg:hidden"
            >
              <div className="flex flex-col items-center justify-center  gap-4 py-4">
                <div className="flex flex-col text-center gap-4 text-gray-300 lg:hidden">
                  <p>Home</p>
                  <p>Features</p>
                  <p>Integration</p>
                  <p>Faqs</p>
                </div>
                <div className="gap-2 flex flex-col">
                  <button className="p-4 py-2 px-5 rounded-3xl border-2 border-gray-200 text-gray-300 font-semibold">
                    Log in
                  </button>
                  <button className="py-2 px-4 rounded-3xl text-black bg-lime-400 font-semibold">
                    Sign up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full flex justify-center mt-28 overflow-hidden">
        <div className="w-[90%] lg:w-[50rem] xl:w-[50rem] 2xl:w-[50rem] flex flex-col lg:h-[50vh] items-center gap-6 lg:gap-8 relative ">
          <Image
            src="/images/left.png"
            className="h-[400px] w-[300px] absolute lg:left-[-14rem] xl:left-[-19rem] 2xl:left-[-18rem] hidden lg:flex"
            width={200}
            height={200}
            alt="img"
            data-aos="fade-up-right"
          />
          <Image
            src="/images/right.png"
            className="h-[430px] w-[310px] absolute lg:right-[-14rem] xl:right-[-20rem] 2xl:right-[-19rem] top-4 hidden lg:flex"
            width={200}
            height={200}
            alt="img"
            data-aos="fade-up-left"
          />
          <div className="w-[15rem] sm:w-[18rem] bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl h-[2rem] flex justify-center items-center gap-2">
            <BsStars size={19} color="yellow" />
            <p className="font-semibold sm:text-lg text-black">
              $7.5M seeds round raised
            </p>
          </div>
          <div>
            <div className="text-6xl  md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-7xl text-white font-medium text-center">
              <h1>Impactful design</h1>
            </div>
            <div className="text-6xl  md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-7xl text-white font-medium text-center">
              <h1>created effortlessly</h1>
            </div>
          </div>
          <div className=" md:w-full text-md text-white/50 font-semibold text-center flex justify-center">
            <h1 className="w-[98%] md:w-[80%]">
              Design tool shouldn&apos;t slow you down, Layer combines powerful
              features with an intuitive interface that keeps you in your
              creative flow.
            </h1>
          </div>
          <div className="w-full md:w-[30rem] border-2 border-white/15 rounded-full h-[8vh] p-1 flex justify-between gap-1">
            <input
              placeholder="Enter your email"
              className="placeholder:text-gray-400 p-4 w-[60%] sm:w-[75%] border-none outline-none rounded-full h-full bg-black"
            />
            <button className=" rounded-3xl m-1 px-4 text-black bg-lime-400 font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%] md:w-[60%] flex flex-col justify-center items-center mt-20 h-[25vh]  gap-8 mb-10 overflow-x-clip">
          <p className="text-white/50 text-sm">
            Already chosen by these market leaders
          </p>
          <div className="flex overflow-hidden w-full">
            <motion.div
              className="flex flex-row gap-10 items-center justify-center"
              animate={{
                x: "-50%",
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {logoImages.map((item, index) => (
                <div key={index}>
                  <div className="h-[7rem] w-[7rem]  md:h-[3rem] md:w-[13rem] lg:w-[20rem] ">
                    <Image src={item} height={220} width={220} alt="logo" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <TextSection />
      </div>
      <div className="sticky top-28 lg:top-40 flex justify-center flex-col items-center"></div>
      <div className="w-full flex flex-col justify-center items-center  ">
        <div className="w-full flex flex-col justify-center items-center gap-6"></div>
        <div className="w-full flex flex-col justify-center items-center gap-6 mt-[12rem] pb-20">
          <div className="w-fit px-1 bg-black border-[1px] border-lime-400 rounded-3xl h-[2rem] flex justify-center items-center gap-2">
            <BsPlus size={28} className="text-lime-400" />
            <p className="font-semibold text-sm text-lime-400 uppercase">
              Features
            </p>
          </div>
          <p className="font-medium text-5xl sm:text-4xl md:text-4xl px-2 text-center text-lime-400 ">
            <span className="text-white font-medium">Where powers meets</span>
            <br /> <span className="font-medium">simplicity</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center px-4 ">
            <div className="pt-10 pb-7  p-4 lg:h-[34vh] sm:w-[300px] bg-neutral-900  rounded-2xl flex flex-col justify-around gap-8 mb-4 sm:ml-4">
              <div className="flex gap-1 w-full justify-center ">
                <Image
                  src="/images/img1.jpg"
                  height={50}
                  width={50}
                  className=" rounded-full w-[60px] h-[60px] border-4 border-blue-600"
                  alt="logo"
                />
                <Image
                  src="/images/img2.jpg"
                  height={50}
                  width={50}
                  className="ml-[-20px] rounded-full w-[60px] h-[60px] border-4 border-blue-600"
                  alt="logo"
                />
                <Image
                  src="/images/img3.jpg"
                  height={50}
                  width={50}
                  className="ml-[-20px] rounded-full w-[60px] h-[60px] border-4 border-orange-400"
                  alt="logo"
                />
                <Image
                  src="/images/img4.jpg"
                  height={50}
                  width={50}
                  className="ml-[-20px] rounded-full w-[60px] h-[60px]"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col gap-2 mt-5 px-3">
                <p className="text-white text-4xl text-start font-semibold">
                  Real-time
                  <br /> collabration
                </p>
                <p className="text-gray-300 text-sm">
                  Work together seamlessly conflict-free team editing
                </p>
              </div>
            </div>
            <div className=" p-4 lg:h-[34vh] sm:w-[300px] bg-neutral-900  rounded-2xl flex flex-col justify-center gap-3 mb-4 sm:ml-4 relative">
              <p className="text-3xl font-semibold text-white/20 group-hover:text-white/10 transition text-center group">
                We&apos;ve achieved
                {/* <br /> */}
                <video
                  src="/images/gif.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 transition pointer-events-none group-hover:opacity-100"
                />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  incredible
                </span>
                <br />
                growth this year
              </p>
              <div className="flex flex-col gap-2 mt-4 px-3">
                <p className="text-white text-4xl text-start font-semibold">
                  Interactive
                  <br />
                  Prototyping
                </p>
                <p className="text-gray-300 text-sm ">
                  Engage your client with prototypes that react to user actions
                </p>
              </div>
            </div>
            <div className="py-10 p-4 lg:h-[34vh] sm:w-[300px] bg-neutral-900 md:col-span-2  lg:col-span-1 rounded-2xl flex flex-col justify-center gap-4 mb-4 sm:ml-4  ">
              <div className="flex gap-2 items-center w-full justify-center pb-8 mt-7 ">
                <div className="h-[4rem] w-[8rem] bg-white flex justify-center items-center rounded-xl">
                  <p className="text-black text-lg font-bold">Shift</p>
                </div>
                <div className="h-[4rem] w-[4rem] bg-white flex justify-center items-center rounded-xl">
                  <p className="text-black text-lg font-bold">Alt</p>
                </div>
                <div className="h-[4rem] w-[4rem] bg-white flex justify-center items-center rounded-xl">
                  <p className="text-black text-lg font-bold">C</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-3">
                <p className="text-white text-3xl  text-start font-semibold">
                  Keyboard Quick
                  <br />
                  Actions
                </p>
                <p className="text-gray-300 text-sm">
                  Powerful commands to help you create design more Quickly.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[20rem] md:w-[35rem] lg:w-[50rem] flex gap-3 justify-center items-center flex-wrap">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className="h-[2.5rem] bg-neutral-900 w-[9rem]  shadow-xl flex justify-center gap-2 items-center rounded-xl "
                >
                  <div className="h-[1.3rem] w-[1.3rem] bg-lime-400 flex justify-center items-center rounded-full">
                    <Image
                      src="/images/plus.svg"
                      height={20}
                      width={20}
                      alt="img"
                    />
                  </div>
                  <p className="text-white text-xs font-semibold">{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-col w-[90%] lg:w-[60rem] lg:justify-center flex lg:flex-row gap-8 lg:gap-2 mt-20 pb-20">
          <div className="w-full lg:w-[55%] h-[30vh] lg:h-[50vh] flex flex-col  justify-center gap-4 lg:px-10">
            <div className="w-fit p-3 border-[1px] border-lime-400 bg-black rounded-3xl h-[2rem] flex justify-center items-center gap-2">
              <BsPlus size={28} className="text-lime-400" />
              <p className="font-semibold text-lg text-lime-400">Integration</p>
            </div>
            <p className="font-medium text-4xl md:text-4xl  text-lime-400 ">
              <span className="text-white text-5xl font-medium xl:text-5xl">
                Plays well with <span className="text-lime-400">others</span>
              </span>
            </p>
            <p className="text-white/50  text-lg">
              Layers seamlessly connects with your favorite tools, making it
              easy to plug into any workflow and collaborte across platforms.
            </p>
          </div>
          {/* second div */}
          <div className="w-full lg:w-[45rem] lg:px-4 h-[40vh] lg:h-[50vh]   flex flex-col items-center justify-center">
            <div className="overflow-hidden w-full  ">
              <div className=" flex justify-center lg:w-full">
                <motion.div
                  className="flex flex-col gap-6 items-center justify-center  w-full  "
                  animate={{
                    y: reverse ? "-50%" : 0,
                  }}
                  initial={{
                    y: reverse ? "-0%" : 0,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {Array.from({ length: 2 }).map((_, index) => (
                    <Fragment key={index}>
                      {arr3
                        .slice()
                        .reverse()
                        .map((item, index) => {
                          return (
                            <div
                              className="flex flex-col  justify-center  gap-3 h-[15rem]  lg:h-[14rem] w-full lg:w-[13rem]  md:w-[20rem] md:h-[13rem]  p-4 items-center rounded-3xl bg-neutral-900 "
                              key={index}
                            >
                              <Image
                                src={item.img}
                                height={100}
                                width={100}
                                alt="logo"
                              />
                              <p className="text-white text-xl lg:text-lg font-semibold">
                                {item.text}
                              </p>
                              <p className="text-white/50  text-xs text-center">
                                {item.para}
                              </p>
                            </div>
                          );
                        })}
                    </Fragment>
                  ))}
                </motion.div>
                <motion.div
                  className="md:flex flex-col gap-6 items-center justify-center w-full hidden "
                  animate={{
                    y: reverse ? "3%" : 0,
                  }}
                  initial={{
                    y: reverse ? "-60%" : 0,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {Array.from({ length: 2 }).map((_, index) => (
                    <Fragment key={index}>
                      {arr3.map((item, index) => {
                        return (
                          <div
                            className="flex flex-col  justify-center  gap-3 h-[15rem]  lg:h-[14rem] w-full lg:w-[13rem]  md:w-[20rem] md:h-[13rem]  p-4 items-center rounded-3xl bg-neutral-900 "
                            key={index}
                          >
                            <Image
                              src={item.img}
                              height={100}
                              width={100}
                              alt="logo"
                            />
                            <p className="text-white text-xl lg:text-lg font-semibold">
                              {item.text}
                            </p>
                            <p className="text-white/50  text-xs text-center">
                              {item.para}
                            </p>
                          </div>
                        );
                      })}
                    </Fragment>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-20 pb-20">
          <div className="w-[92%] lg:w-[35rem]  flex flex-col gap-4 items-center ">
            <div className="w-fit p-3 border-[1px] border-lime-400 bg-black rounded-3xl h-[2rem] flex justify-center items-center gap-2">
              <BsPlus size={28} className="text-lime-400" />
              <p className="font-semibold text-sm text-lime-400">FAQS</p>
            </div>
            <div className="w-[70%] lg:w-[80%]">
              <p className="font-medium text-4xl md:text-4xl text-center ">
                <span className="text-white text-4xl font-medium xl:text-5xl">
                  Questions? We&apos;ve got{" "}
                  <span className=" text-lime-400">answers</span>
                </span>
              </p>
            </div>

            <div className="w-full  lg:w-[90%] flex flex-col items-center gap-4 mt-5">
              <Accordin state="box1" />
              <Accordin state="box2" />
              <Accordin state="box3" />
              <Accordin state="box4" />
              <Accordin state="box5" />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-14 pb-20 px-4">
          <div className="overflow-hidden w-full">
            <div className="inline-block animate-marquee whitespace-nowrap ">
              <motion.div
                className="flex flex-row gap-10 items-center justify-center group"
                ref={scope}
                onMouseEnter={() => setBox({ ...box, isHover: true })}
                onMouseLeave={() => setBox({ ...box, isHover: false })}
              >
                {Array.from({ length: 2 }).map((_, index) => (
                  <Fragment key={index}>
                    {offers.map((item, index) => (
                      <div
                        className=" bg-black flex gap-10 justify-center items-center"
                        key={index}
                      >
                        <p className="text-lime-400 text-7xl">&#10038;</p>
                        <p className="text-white group-hover:text-lime-400 text-5xl lg:text-6xl font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full mt-14 p-6 h-[6rem] flex flex-col md:flex-row md:gap-4 justify-between items-center mb-5">
          <div>
            <Image
              src="/images/logo.svg"
              height={100}
              width={100}
              className="h-[6rem] w-[10rem] lg:h-[5rem] lg:w-[6rem]"
              alt="logo"
            />
          </div>
          <div className="flex gap-4 items-center pb-8 md:pb-0">
            <p className="text-white/50  text-xs  md:text-md font-light">
              Contacts
            </p>
            <p className="text-white/50 text-xs  md:text-md font-light">
              Privacy Policy
            </p>
            <p className="text-white/50 text-xs  md:text-md font-light">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
