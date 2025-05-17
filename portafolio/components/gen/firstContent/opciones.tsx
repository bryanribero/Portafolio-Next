"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import "@/components/gen/firstContent/opciones.css"

interface OptionItem {
  texto: string
  href: string
}

interface Props {
  aboutRef: React.RefObject<HTMLDivElement>
  skillsRef: React.RefObject<HTMLDivElement> | null
  projectsRef: React.RefObject<HTMLDivElement> | null
}

export default function Opciones({ aboutRef, skillsRef, projectsRef }: Props) {
  const [activo, setActivo] = useState<string>("About")

  const items = useMemo<OptionItem[]>(
    () => [
      { texto: "About", href: "#about" },
      { texto: "Skills", href: "#skills" },
      { texto: "Projects", href: "#projects" },
    ],
    [],
  )

  const refs = useMemo<{ [key: string]: React.RefObject<HTMLDivElement> | null }>(
    () => ({
      "#about": aboutRef,
      "#skills": skillsRef,
      "#projects": projectsRef,
    }),
    [aboutRef, skillsRef, projectsRef],
  )

  const handleItemClick = (texto: string, href: string) => {
    setActivo(texto)
    if (refs[href]?.current) {
      refs[href].current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Creamos una función estable para el callback del observer
  const createIntersectionCallback = useMemo(() => {
    return (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id: string = entry.target.id
          const activeItem = items.find((item) => item.href === `#${id}`)
          if (activeItem && activeItem.texto !== activo) {
            setActivo(activeItem.texto)
          }
        }
      })
    }
  }, [items, activo]) // Solo dependencias estables

  useEffect(() => {
    const observer = new IntersectionObserver(createIntersectionCallback, {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: [0, 0.5, 1],
    })

    // Observamos los elementos
    Object.entries(refs).forEach(([, ref]) => {
      if (ref?.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [refs, createIntersectionCallback]) // Dependencias estables

  return (
    <nav>
      <ul className="list-none p-0 m-0 max-w-40">
        {items.map(({ texto, href }) => (
          <li key={href} className={`mb-18 lg:mb-15 nav-item ${activo === texto ? "nav-item-active" : ""}`}>
            <a
              className="nav-link"
              href={href}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(texto, href)
              }}
            >
              <span className={`line ${activo === texto ? "line-active" : ""}`}></span>
              {texto}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
