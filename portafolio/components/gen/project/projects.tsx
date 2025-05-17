'use client';

import React from "react";
import Image from 'next/image'; 
import './projects.css';

interface projectInterface {
  id: number;
  image: string;
  title: string;
  description: string;
  technology: string[]; 
  link: string; 
}

const projectContent: projectInterface[] = [
  {
    id: 1,
    image: "/assets/prueba.jpg", 
    title: "E-commerce",
    description: "Online sales website, where you can publish, purchase, and arrange shipping.",
    technology: ["React", "Node.js", "JavaScript"],
    link: "#",
  },
  {
    id: 2,
    image: "/assets/prueba.jpg", 
    title: "E-commerce",
    description: "Online sales website, where you can publish, purchase, and arrange shipping.",
    technology: ["React", "Node.js", "JavaScript"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-90">
        <h2 className="text-gray-300 text-4xl font-bold mb-18 text-center">Projects</h2>
        <div className="space-y-14">
          {projectContent.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row transition-all duration-200 ease-in hover:border border-blue-500/60 cursor-pointer hover:bg-black/15 hover:-translate-y-2 edit-efects relative"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 focus:outline-none block" 
                >
                  <span className="sr-only">View {item.title}</span>
                </a>
              ) : null}
              <div className="w-full md:w-1/3 py-8 px-1 ml-5">
                <div className="relative w-full h-48 md:h-full rounded-md overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300 "
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    {item.title}
                    {item.link && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 005.25 21h10.5a2.25 2.25 0 002.25-2.25V8.25H15M12 6l-3 3m0 0l3 3m-3-3h12"
                        />
                      </svg>
                    )}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technology.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#29303C] text-xs text-gray-300 rounded-full px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}