'use client';

import React, { useRef } from 'react';
import Name from '@/components/gen/name';
import Opciones from '@/components/gen/opciones';
import Iconos from '@/components/gen/iconos';
import AboutMotion from '@/components/gen/aboutMotion';
import SkillComponent from '@/components/gen/skillComponent';
import ProjectsMotion from '@/components/gen/projectsMotion';
import '@/app/scroll-hidden.css';

export default function Home() {
  
  const aboutRef = useRef<HTMLDivElement>(null!);
  const skillsRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!); 

  return (
    <div className="min-h-screen w-full bg-black grid grid-cols-[600px_1fr] gap-4">
      <div className='row-span-full flex flex-col justify-between ml-45'>
        <div className='relative z-10 mt-15'>
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
      <div className='relative col-span-1 z-10 mt-15 max-w-150 ml-90 overflow-y-auto custom-scrollbar-hidden'>
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