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
        },
        {
            id: 5,
            name:"Level",
            designation:"Beginner",
            image:"",
            texto:"jQuery"
        },
        {
            id: 6,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"React"
        },
        {
            id: 7,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"Next.js"
        },
        {
            id: 8,
            name:"Level",
            designation:"Beginner",
            image:"",
            texto:"Angular"
        },
        {
            id: 9,
            name:"Level",
            designation:"Beginner",
            image:"",
            texto:"TypeScript"
        },
        {
            id: 10,
            name:"Level",
            designation:"Intermediate",
            image:"",
            texto:"Tailwind"
        },
        
    ]

export default function SkillFront() {
  return (
  <div>
    <h2 className="text-gray-300 text-4xl font-bold">Front-end</h2>
    <div className="flex flex-wrap justify-normal  mt-18 gap-20 w-full ml-10">
      <AnimatedTooltip 
        items={frontEnd}
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