'use client';

import React, { useState, useEffect } from 'react';
import '@/components/gen/firstContent/opciones.css';

interface OptionItem {
  texto: string;
  href: string;
}

interface Props {
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement> | null;
  projectsRef: React.RefObject<HTMLDivElement> | null;
}

export default function Opciones({ aboutRef, skillsRef, projectsRef }: Props) {
  const [activo, setActivo] = useState<string>('About');

  const items: OptionItem[] = [
    { texto: 'About', href: '#about' },
    { texto: 'Skills', href: '#skills' },
    { texto: 'Projects', href: '#projects' },
  ];

  const refs: { [key: string]: React.RefObject<HTMLDivElement> | null } = {
    '#about': aboutRef,
    '#skills': skillsRef,
    '#projects': projectsRef,
  };

  const handleItemClick = (texto: string, href: string) => {
    setActivo(texto);
    if (refs[href] && refs[href].current) {
      refs[href].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id: string = entry.target.id;
            const activeItem: OptionItem | undefined = items.find((item) => item.href === `#${id}`);
            if (activeItem && activeItem.texto !== activo) {
              setActivo(activeItem.texto);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
      }
    );

    for (const href in refs) {
      if (refs[href] && refs[href].current) {
        observer.observe(refs[href].current);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [activo, items, refs]);

  return (
    <nav>
      <ul className="list-none p-0 m-0 max-w-40">
        {items.map(({ texto, href }) => (
          <li
            key={texto}
            className={`mb-18 lg:mb-0 nav-item ${activo === texto ? 'nav-item-active' : ''}`}
            onClick={(e) => handleItemClick(texto, href)}
          >
            <a
              className="nav-link"
              href={href}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
            >
              <span className={`line ${activo === texto ? 'line-active' : ''}`}></span>
              {texto}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}