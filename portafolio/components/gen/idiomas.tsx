'use client'

import React, { useState, useEffect } from 'react';
import './boton.css'; 

interface BtnItem {
  id: string;
  texto: string;
  claseBase?: string;
  claseActiva?: string;
}

interface BtnDinamicosProps {
  botones: BtnItem[];
  defaultActiveId?: string;
}

export default function BtnDinamicos({ botones, defaultActiveId }: BtnDinamicosProps) {
  const [botonActivoId, setBotonActivoId] = useState<string | null>(null);

  useEffect(() => {
    if (defaultActiveId) {
      setBotonActivoId(defaultActiveId);
    }
  }, [defaultActiveId]);

  const handleClick = (id: string) => {
    if (botonActivoId !== id) {
      setBotonActivoId(id);
    }
  };

  return (
    <div>
      {botones.map((boton) => {
        const isActive = boton.id === botonActivoId;
        const clasesBase = boton.claseBase || '';
        const clasesActiva = boton.claseActiva || '';
        const isActiveCustom = isActive ? 'btn-active-center-border active' : 'btn-active-center-border';

        const clases = `${clasesBase} ${isActive ? clasesActiva : ''} ${isActiveCustom} cursor-pointer`;

        return (
          <button
            key={boton.id}
            id={boton.id}
            className={clases}
            onClick={() => handleClick(boton.id)}
          >
            {boton.texto}
          </button>
        );
      })}
    </div>
  );
}