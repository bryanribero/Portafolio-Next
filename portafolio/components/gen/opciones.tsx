'use client';

import React, { useState } from 'react';
import './opciones.css';

export default function Opciones() {
  const [activo, setActivo] = useState('About');

  const items = [
    { texto: 'About', href: '#about' },
    { texto: 'Skills', href: '#skills' },
    { texto: 'Projects', href: '#projects' },
  ];

  return (
    <nav>
      <ul className="list-none p-0 m-0">
        {items.map(({ texto, href }) => (
          <li
            key={texto}
            className={`nav-item ${activo === texto ? 'nav-item-active' : ''}`}
            onClick={() => setActivo(texto)}
          >
            <a className="nav-link" href={href}>
              <span className={`line ${activo === texto ? 'line-active' : ''}`}></span>
              {texto}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}