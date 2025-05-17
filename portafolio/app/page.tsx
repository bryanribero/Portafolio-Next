'use client';

import React, { useRef } from 'react';
import Name from '@/components/gen/firstContent/name';
import Opciones from '@/components/gen/firstContent/opciones';
import Iconos from '@/components/gen/firstContent/iconos';
import AboutMotion from '@/components/gen/about/aboutMotion';
import SkillComponent from '@/components/gen/skill/skillComponent';
import ProjectsMotion from '@/components/gen/project/projectsMotion';
import '@/app/scroll-hidden.css';

export default function Home() {
  
  const aboutRef = useRef<HTMLDivElement>(null!);
  const skillsRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!); 

 return (
  <div className="min-h-screen w-full bg-black grid lg:grid-cols-[minmax(auto,400px)_1fr] 2xl:grid-cols-[580px_1fr] gap-4">
    <div className='flex flex-col justify-between 2xl:ml-25 lg:ml-10 mx-auto  px-4 lg:px-0'>
      <div className='relative z-10 mt-10 md:mt-15'>
        <Name />
      </div>
      <div className='relative z-10 '>
        <Opciones
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
        />
      </div>
      <div className='relative z-10 mb-10'>
        <Iconos />
      </div>
    </div>
    <div className='relative col-span-1 z-10 mt-10 lg:mt-15 lg:col-start-2 lg:row-start-1  max-w-150  mx-auto  overflow-y-auto custom-scrollbar-hidden px-4 md:px-0'>
      <div id='about' ref={aboutRef}>
        <AboutMotion />
      </div>
      <div className='absolute top-220 w-full'>
        <div id='skills' ref={skillsRef}>
          <SkillComponent />
        </div>
      </div>
      <div id='projects' className='mt-50 absolute top-480 w-full' ref={projectsRef}>
        <ProjectsMotion />
      </div>
    </div>
  </div>
);
}