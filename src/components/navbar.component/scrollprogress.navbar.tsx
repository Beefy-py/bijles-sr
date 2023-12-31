import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { IconMath, IconPlusEqual } from "@tabler/icons-react";

type Props = { scrolled: boolean };

const ScrollProgressComponent = ({ scrolled }: Props) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate the icon's position based on the scroll progress
  const iconPosition = useTransform(scaleX, (value) => `${value * 100}%`);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        height: "5px",
        display: "flex",
        alignItems: "center",
        zIndex: 20,
        marginTop: "",
      }}
    >
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          left: 0,
          right: 0,
          backgroundColor: "orange",
          position: "fixed",
          height: "5px",
          transformOrigin: "0%",
          zIndex: 20,
        }}
      />
      <motion.div style={{ position: "absolute", left: iconPosition }}>
        <IconMath className="bg-orange-400 p-1 rounded-full w-6 h-6 text-white" />{" "}
        {/* replace with your actual Icon component */}
      </motion.div>
    </div>
  );
};

export default ScrollProgressComponent;
