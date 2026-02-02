import React from "react";
import { motion } from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  className = "",
  containerClassName = "",
  borderClassName = "",
  as: Component = "button",
  ...otherProps
}) => {
  return (
    <Component
      className={`relative p-[1px] overflow-hidden ${containerClassName}`}
      {...otherProps}
    >
      <motion.div
        className={`absolute inset-0 ${borderClassName}`}
        style={{
          background: `linear-gradient(90deg, #0ff, #00f, #f0f, #0ff)`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className={`relative bg-slate-900 rounded-lg ${className}`}>
        {children}
      </div>
    </Component>
  );
};

export const Button = MovingBorder;
