'use client'

import React from "react";
import SkillContent from "./skills-content";
import { AnimatedTooltip } from "../ui/animated-tooltip";

interface SkillItem {
  id: number
  name: string
  designation: string
  image: string
  texto: string
}

  const backEnd: SkillItem[] = [
        {
            id: 1,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"JavaScript",
        },
    ]

export default function SkillFront() {
  return (
  <div>
    <h2 className="text-gray-300 text-4xl font-bold">Back-end</h2>
    <div className="flex flex-wrap justify-normal  mt-18 gap-20 w-full ml-10">
      <AnimatedTooltip 
        items={backEnd}
        renderItem={(item, handleMouseMove) => (
          <div className="inline-block" onMouseMove={handleMouseMove}>
            <SkillContent texto={item.texto} />
          </div>
        )}
      />
    </div>
  </div>
  )
}