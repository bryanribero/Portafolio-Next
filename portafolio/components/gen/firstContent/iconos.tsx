'use client';

import React from 'react';
import Image from 'next/image';  // Importa Image de next/image
import BtnDinamicos from './idiomas';
import './boton.css';

interface BtnItem {
  id: string;
  texto: string;
  claseBase?: string;
  claseActiva?: string;
}

export default function MiComponenteConMultiplesBtn() {
  const listadoDeBtn: BtnItem[] = [
    { id: "Es", texto: "Español", claseBase: "text-gray-500 p-2 m-2 ", claseActiva: " text-white " },
    { id: "En", texto: "English", claseBase: "text-gray-500 p-2 m-2 ", claseActiva: " text-white" },
  ];

  return (
    <div>
      <div><BtnDinamicos botones={listadoDeBtn} defaultActiveId='En' /></div>
      <div className='flex pt-7 mt-10 mb-15 lg:mt-0 lg:mb-0'>
        <a href="https://github.com/bryanribero" target='_blank' rel="noopener noreferrer">
          <Image
            src="/icons/icons8-github.svg"
            alt="GitHub"
            width={40} 
            height={40} 
            className='opacity-40 transition-all duration-300 hover:opacity-80 cursor-pointer hover:scale-125 mr-20 lg:mr-0'
          />
        </a>
        <a href="https://www.linkedin.com/in/bryan-ribero-49b895330/" target='_blank' rel="noopener noreferrer">
          <Image
            src="/icons/icons8-linkedin.svg"
            alt="LinkedIn"
            width={40}
            height={40}
            className='opacity-40 transition-all duration-300 hover:opacity-80 cursor-pointer hover:scale-125 mx-6'
          />
        </a>
        <a href="mailto:bryanribero@hotmail.com">
          <Image
            src="/icons/icons8-ms-outlook.svg"
            alt="OutLook"
            width={40}
            height={40}
            className='opacity-40 transition-all duration-300 hover:opacity-80 cursor-pointer hover:scale-125 ml-20 lg:ml-0'
          />
        </a>
      </div>
    </div>
  );
}


