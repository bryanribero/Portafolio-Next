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

  const frontEnd: SkillItem[] = [
        {
            id: 1,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"JavaScript",
        },
        {
            id: 2,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"HTML",
        },
        {
            id: 3,
            name:"Level",
            designation:"Advanced",
            image:"",
            texto:"CSS",
        },
        {
            id: 4,
            name:"Level",
            designation:"Advanced",
            image:"",
            texto:"Boostrap"
        }
    ]

export default function Skill() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full">
      <AnimatedTooltip
        items={frontEnd}
        renderItem={(item, handleMouseMove) => (
          <div className="inline-block" onMouseMove={handleMouseMove}>
            <SkillContent texto={item.texto} />
          </div>
        )}
      />
    </div>
  )
}