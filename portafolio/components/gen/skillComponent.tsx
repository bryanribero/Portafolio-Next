'use client';

import React, { useRef } from "react";
import SkillFront from "./skillFront";
import SkillBack from "./skillBack";
import SkillTools from "./skillTools";
import { motion, useInView } from "framer-motion";

export default function SkillComponent() {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const toolsRef = useRef(null);

  const frontIsInView = useInView(frontRef); 
  const backIsInView = useInView(backRef);   
  const toolsIsInView = useInView(toolsRef);  

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="mb-40">
      <motion.div
        ref={frontRef}
        variants={animationVariants}
        initial="hidden"
        animate={frontIsInView ? "visible" : "hidden"}
      >
        <SkillFront />
      </motion.div>
      <motion.div
        className="mt-30"
        ref={backRef}
        variants={animationVariants}
        initial="hidden"
        animate={backIsInView ? "visible" : "hidden"}
      >
        <SkillBack />
      </motion.div>
      <motion.div
        className="mt-30"
        ref={toolsRef}
        variants={animationVariants}
        initial="hidden"
        animate={toolsIsInView ? "visible" : "hidden"}
      >
        <SkillTools />
      </motion.div>
    </div>
  );
}