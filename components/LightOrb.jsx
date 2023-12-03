"use client";
import { motion } from "framer-motion";
import React, { useMemo, useState, useEffect } from "react";

const LightOrb = ({ x_init, position }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    // Update innerWidth when the component mounts or when the window is resized
    const handleResize = () => {
      setInnerWidth(window.innerWidth || 0);
      setInnerHeight(window.innerHeight || 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const randomX = useMemo(
    () => -innerWidth + Math.random() * (innerWidth - -innerWidth),
    [innerWidth]
  );

  const randomY = useMemo(() => 100 + Math.random() * (innerHeight - 100), []);

  return (
    <motion.div
      initial={{ x: x_init, y: -50 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: position === "top" ? randomY : -randomY,
        x: randomX,
        loop: Infinity,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: Math.random() * (10 - 5) + 5,
        restDelta: 1,
        velocity: 100,
      }}
      className="border border-red-400 h-fit absolute z-10"
    >
      <span className="md:w-[2rem] md:h-[2rem] w-[1rem] h-[1rem]   rounded-full  flex justify-center items-center  blur-[1px]">
        <span className="md:w-[3rem] md:h-[3rem] w-[2rem] h-[2rem] bg-gradient-to-tr from-white via-orange-400 to-orange-500   shadow-lg shadow-zinc-200  rounded-full blur-[0.5px] flex justify-center items-center">
          <span className="md:w-[10rem] md:h-[10rem] w-[5rem] h-[5rem] bg-white/80 rounded-full blur-3xl "></span>
        </span>
      </span>
    </motion.div>
  );
};
export default LightOrb;
