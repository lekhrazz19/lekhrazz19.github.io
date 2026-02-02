import React, { useRef } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const beams = [
    { initialX: 10, translateX: 10, duration: 7, delay: 0 },
    { initialX: 600, translateX: 600, duration: 3, delay: 0 },
    { initialX: 100, translateX: 100, duration: 7, delay: 2 },
    { initialX: 400, translateX: 400, duration: 5, delay: 4 },
    { initialX: 800, translateX: 800, duration: 11, delay: 0 },
    { initialX: 1000, translateX: 1000, duration: 4, delay: 2 },
    { initialX: 500, translateX: 500, duration: 6, delay: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {beams.map((beam, index) => (
        <motion.div
          key={index}
          initial={{ translateY: "-200%", translateX: beam.initialX }}
          animate={{
            translateY: "1800%",
            translateX: beam.translateX,
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            ease: "linear",
            delay: beam.delay,
          }}
          className="absolute top-0 w-px h-48 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
        />
      ))}
    </div>
  );
};
