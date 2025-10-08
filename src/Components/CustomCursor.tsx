import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 150, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Custom crosshair cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Center square */}
        <motion.div
          className="relative w-6 h-6"
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 90 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {/* Top line */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-cyan-400"
            animate={{
              height: isHovering ? 16 : 12,
              y: isHovering ? -8 : -4,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />

          {/* Bottom line */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3 bg-cyan-400"
            animate={{
              height: isHovering ? 16 : 12,
              y: isHovering ? 8 : 4,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />

          {/* Left line */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-3 bg-cyan-400"
            animate={{
              width: isHovering ? 16 : 12,
              x: isHovering ? -8 : -4,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />

          {/* Right line */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-3 bg-cyan-400"
            animate={{
              width: isHovering ? 16 : 12,
              x: isHovering ? 8 : 4,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />

          {/* Corner accents - appear on hover */}
          <motion.div
            className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-purple-400"
            animate={{
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-purple-400"
            animate={{
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-purple-400"
            animate={{
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
          <motion.div
            className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-purple-400"
            animate={{
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
