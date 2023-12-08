"use client";

import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className={` w-full min-h-[90dvh] h-[90vh]  bg-cover overflow-hidden relative `}
    >
      {/* <LightOrbs position="top" /> */}
      <div className=" md:p-[2rem] sm:p-[1rem] p-4 pb-0  h-full uppercase w-full flex flex-col justify-between xl:items-center">
        <div className="flex flex-col justify-center items-center  h-full">
          {" "}
          <h1 className="  font-extrabold xl:text-9xl h-fit sm:text-7xl text-3xl tracking-wide monoton lg:text-center text-start  w-full ">
            Jeffery Entekume
          </h1>
          <p className="xl:text-6xl sm:text-5xl h-fit text-2xl lg:text-center text-start  text-white/70 font-extralight tracking-widest lg:pb-[8rem] pb-[3rem]">
            {" "}
            front end developer & AI Enthusiast
          </p>
        </div>
        {/* <LightOrbs position="top" /> */}
        <div className=" w-[2rem] sm:h-[5em] h-[4rem] mx-auto border-2 border-zinc-200 rounded-full flex justify-center items-start py-2 ">
          <motion.div
            initial={{ y: 0 }} // Initial scale and y position
            animate={{
              opacity: 1,
              scale: 1,
              y: 25, // Translate downward by 3 pixels
            }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <FaArrowDownLong
              className="sm:text-4xl text-xl text-purple-400 
            font-extrabold transition-all duration-1000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
  s;
};

export default Hero;
