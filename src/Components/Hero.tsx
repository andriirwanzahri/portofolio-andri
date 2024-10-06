import profile from "../assets/andri3.png";
// import { useState, useEffect } from 'react';
import ReactTyped from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section>
      <div className=" h-screen sm:min-h-[550px] bg-gray-100 dark:bg-gray-950 flex justify-center items-center duration-200">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 gap-8"
            >
              {/* Text Page Hero  */}
              <a className=" text-black dark:text-white text-3xl ">
                Hy, My Name Is ...🙌{" "}
                <span className=" text-7xl block font-bold my-5">
                  Andri Irwan Zahri
                </span>{" "}
                I'm{" "}
                <span className="text-secondary text-2xl">
                  <ReactTyped
                    strings={["Web Developer", "Mobile Developper", "Designer"]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                  />
                </span>
              </a>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                enim sed voluptates, repellat velit repellendus labore quasi at
                corrupti molestias.
              </p>

              {/* buttom   */}

              <div>
                <motion.button
                  initial={{ "--x": "100%", scale: 1 }}
                  animate={{ "--x": "-100%" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                    type: "spring",
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                      type: "spring",
                      stiffness: 10,
                      damping: 5,
                      mass: 0.1,
                    },
                  }}
                  className="px-6 py-2 rounded-md relative radial-gradient"
                >
                  <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
                    Start now
                  </span>
                  <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
              </div>
            </div>
            {/* image Sections */}
            <div className="sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <motion.div
                animate={{
                  scaleX: [1, 2.5, 0.8, 1.2, 1],
                  scaleY: [2.1, 0.8, 2.5, 0.9, 1],
                  rotate: [0, 45, 90, -45, 0],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="bg-primary h-96 w-96 flex justify-center  items-center rounded-full absolute transition ease-in-out duration-300"
              ></motion.div>
              <div className="relative h-full w-full flex justify-center items-center">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 8,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  src={profile}
                  alt="Image Inside Circle"
                  className="h-[550px] object-cover absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
{
  /* <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={profile}
                  alt="Logo"
                  className=" w-[300px] lg:w-[350px] sm:w-[450px] sm:scale-100   mx-auto"
                /> */
}

export default Hero;
