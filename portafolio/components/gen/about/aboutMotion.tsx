'use client'

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionsAbout from "./sectionAbout";

export default function AboutMotion(){
    const aboutRef = useRef(null);

    const aboutInView = useInView(aboutRef);

    const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return(
    <div>
        <motion.div
                ref={aboutRef}
                variants={animationVariants}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
              >
                <SectionsAbout />
              </motion.div>
    </div>
  );
}