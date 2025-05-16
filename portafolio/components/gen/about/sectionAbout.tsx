"use client"

import { useState, useEffect } from "react"
import About from "@/components/gen/about/about"
import { motion } from "motion/react"

export default function SectionsAbout() {
  const [showButton, setShowButton] = useState(false)

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 6000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-150">
      <About onComplete={() => setShowButton(true)} />

      <div className="text-gray-300 flex justify-center mt-30 h-12  "><a href="/assets/Brayan_Ribero_CV_IT_Eng.pdf" download>
        {showButton && (
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.3,
            }}
            className="border-2 border-gray-400 px-4 py-2 rounded-md cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500/50 hover:border-transparent tracking-[.15em]"
          ><div className="flex">
            
            <p className="ml-3">CV</p>
            <img className="w-5 h-5 ml-1 mr-2 mt-0.5" src="/icons/download.png" alt="Dowload" />
            </div>
          </motion.button>
        )}
        </a>
      </div>
    </div>
  )
}