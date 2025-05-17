'use client'

import React from "react";
import SkillContent from "./skills-content";
import { AnimatedTooltip } from "../../ui/animated-tooltip";

interface SkillItem {
  id: number
  name: string
  designation: string
  image: string
  texto: string
}

  const tools: SkillItem[] = [
        {
            id: 1,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"Git",
        },
        {
            id: 2,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"npm",
        },
        {
            id: 3,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"Postman",
        },
    ]

export default function SkillTools() {
  return (
  <div>
          <div className="flex justify-center"><h2 className="text-gray-300 text-4xl font-bold text-center">Tools & Technologies</h2></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-14 mt-18 "> 
            {tools.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center" 
              >
                <AnimatedTooltip
                  items={[item]}
                  renderItem={(tooltipItem, handleMouseMove) => (
                    <div className="inline-block" onMouseMove={handleMouseMove}>
                      <SkillContent texto={tooltipItem.texto} />
                    </div>
                  )}
                />
              </div>
            ))}
          </div>
        </div>
  )
}