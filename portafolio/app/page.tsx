"use client"

import { useRef } from "react"
import Name from "@/components/gen/firstContent/name"
import Opciones from "@/components/gen/firstContent/opciones"
import Iconos from "@/components/gen/firstContent/iconos"
import AboutMotion from "@/components/gen/about/aboutMotion"
import SkillComponent from "@/components/gen/skill/skillComponent"
import ProjectsMotion from "@/components/gen/project/projectsMotion"
import "@/app/scroll-hidden.css"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null!)
  const skillsRef = useRef<HTMLDivElement>(null!)
  const projectsRef = useRef<HTMLDivElement>(null!)

  return (
    <div className="min-h-screen w-full">
      <div className="lg:grid lg:grid-cols-[minmax(auto,400px)_1fr] 2xl:grid-cols-[580px_1fr] gap-4 lg:min-h-screen">
        <div className="flex flex-col justify-between items-center text-center lg:items-start lg:text-left 2xl:ml-25 mx-auto px-4 lg:px-0 lg:h-screen">
          <div className="relative z-10 mt-10 mb-30 lg:mb-0">
            <Name />
          </div>
          <div className="relative z-10 mb-10 lg:mb-0">
            <Opciones aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} />
          </div>
          <div className="relative z-10 mb-10">
            <Iconos />
          </div>
        </div>
        <div className="relative col-span-1 z-10  lg:col-start-2 lg:row-start-1 max-w-150 mx-auto px-4 md:px-0 lg:h-screen lg:overflow-y-auto custom-scrollbar-hidden">
          <div className="flex flex-col mt-40 lg:mt-10 ">
            <div id="about" ref={aboutRef} className="mb-70 lg:min-h-[80vh]">
              <AboutMotion />
            </div>
            <div id="skills" ref={skillsRef} className="mb-40">
              <SkillComponent />
            </div>
            <div id="projects" className="" ref={projectsRef}>
              <ProjectsMotion />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}