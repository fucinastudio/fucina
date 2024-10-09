"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [cursorVariant] = useState("default");

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      top: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        bounce: 1.1,
        mass: 1.1,
      },
    },
    hover: {},
  };

  return (
    <motion.div
      className="pointer-events-none invisible fixed left-0 top-0 z-50 size-3 rounded-full bg-fuchsia-600/80 lg:visible"
      variants={variants}
      animate={cursorVariant}></motion.div>
  );
};

export default Cursor;
