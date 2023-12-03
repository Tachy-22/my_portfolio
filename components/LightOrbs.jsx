"use client";
import React from "react";

import LightOrb from "./LightOrb"; // Import your LightOrb component

// Define an array of x and y values for 10 LightOrb components
const orbPositions = [
  { x: 1500, y: 400, x_init: 100 },
  { x: 400, y: 800, x_init: 300 },
  { x: 900, y: 800, x_init: 900 },
  { x: 800, y: 700, x_init: 1000 },
  // { x: 1000, y: 900, x_init: 600 },
  // { x: 1000, y: 1000, x_init: 800 },
];

const LightOrbs = ({ position }) => {
  return (
    <>
      {orbPositions.map((orb, index) => (
        <LightOrb x_init={orb.x_init} position={position} />
      ))}
    </>
  );
};

export default LightOrbs;
