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
            designation:"Beginner",
            image:"",
            texto:".NET",
        },
        {
            id: 2,
            name:"Level",
            designation:"Beginner",
            image:"",
            texto:"C#",
        },
        {
            id: 3,
            name:"Level",
            designation:"Beginner",
            image:"",
            texto:"Node.js",
        },
        {
            id: 4,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"MariaDB",
        },
    ]

export default function SkillBack() {
  return (
    <div>
      <h2 className="text-gray-300 text-4xl font-bold">Back-end</h2>
      <div className="grid grid-cols-3 gap-16 mt-18 ml-8"> {/* Usando grid de 3 columnas */}
        {backEnd.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center" // Centrar el contenido (AnimatedTooltip)
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
  );
}