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
  <div className="min-h-screen w-full bg-black grid lg:grid-cols-[minmax(auto,400px)_1fr] xl:grid-cols-[600px_1fr] gap-4">
    <div className='flex flex-col justify-between md:ml-10 xl:ml-45 mx-auto md:mx-0 px-4 md:px-0'>
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
    <div className='relative col-span-1 z-10 mt-10 md:mt-15 md:col-start-2 md:row-start-1 max-w-screen-md lg:max-w-500 xl:max-w-150 md:ml-10 lg:ml-0 xl:ml-90 mx-auto md:mx-0 overflow-y-auto custom-scrollbar-hidden px-4 md:px-0'>
      <div id='about' ref={aboutRef}>
        <AboutMotion />
      </div>
      <div className='absolute top-220 w-full'>
        <div id='skills' ref={skillsRef}>
          <SkillComponent />
        </div>
      </div>
      <div id='projects' className='mt-50 absolute top-520 w-full' ref={projectsRef}>
        <ProjectsMotion />
      </div>
    </div>
  </div>
);
}