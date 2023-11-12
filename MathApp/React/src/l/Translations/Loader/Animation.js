import React from "react";
import { motion } from "framer-motion";

export default function Animation({className = "", style = {}}) {
  let initial = {
    strokeDasharray: "50 425",
    strokeDashoffset: 0,
    strokeLinecap: "round"
  };
  let animate = {
    strokeDashoffset: 470
  };
  let transition = {
    duration: 4,
    ease: "linear",
    repeatType: "loop",
    loop: Infinity
  };
  return (
    <div className={className} style={{width: "45px", height: "45px", ...style}}>
      <motion.svg width={style.width ? style.width.substr(0, style.width.length-2):"45"} 
                  height={style.height ? style.height.substr(0, style.height.length-2):"45"} 
                  viewBox="0 0 189 163" 
                  fill="none">
        <motion.defs>
          <motion.linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#39D3E3" />
            <stop offset="100%" stopColor="#2741A6" />
          </motion.linearGradient>
        </motion.defs>
        <motion.path
          style={{ stroke: "#D5D8DC", strokeWidth: "15" }}
          d="M13.5266 155.25L94.5 15L175.473 155.25H13.5266Z"
        />
        <motion.path
          style={{ stroke: "url(#linear)", strokeWidth: "15" }}
          d="M13.5266 155.25L94.5 15L175.473 155.25H13.5266Z"
          initial={initial}
          animate={animate}
          transition={transition}
        />
      </motion.svg>
    </div>
  );
}
