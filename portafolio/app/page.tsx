'use client';

import React, { useState, useRef } from 'react';
import Name from '@/components/gen/name';
import Opciones from '@/components/gen/opciones';
import Iconos from '@/components/gen/iconos';
import SectionsAbout from '@/components/gen/sectionAbout';
import SkillComponent from '@/components/gen/skillComponent';
import Projects from '@/components/gen/projects';
import '@/app/scroll-hidden.css';

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const skillsRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!); // Crea la referencia para Projects

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
            projectsRef={projectsRef} // Pasa la referencia a Opciones
          />
        </div>
        <div className='relative z-10 mb-10'>
          <Iconos />
        </div>
      </div>
      <div className='relative col-span-1 z-10 mt-15 max-w-150 ml-90 overflow-y-auto custom-scrollbar-hidden'>
        <div id='about' ref={aboutRef}>
          <SectionsAbout />
        </div>
        <div className='absolute top-220 w-full'>
          <div id='skills' ref={skillsRef}>
            <SkillComponent />
          </div>
        </div>
        <div id='projects' className='mt-50 absolute top-520 w-full' ref={projectsRef}> 
          <Projects />
        </div>
      </div>
    </div>
  );
}