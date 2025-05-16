'use client'

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Projects from "./projects";

export default function ProjectsMotion(){
    const projectRef = useRef(null);

    const projectInView = useInView(projectRef);

    const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return(
    <div>
        <motion.div
                ref={projectRef}
                variants={animationVariants}
                initial="hidden"
                animate={projectInView ? "visible" : "hidden"}
              >
                <Projects />
              </motion.div>
    </div>
  );
}