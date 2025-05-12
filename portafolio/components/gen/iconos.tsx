'use client'

import React from 'react'
import BtnDinamicos from './idiomas'
import './boton.css'

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

    return(
        <div>
            <BtnDinamicos botones={listadoDeBtn} defaultActiveId='En' />
        </div>
    );
}


