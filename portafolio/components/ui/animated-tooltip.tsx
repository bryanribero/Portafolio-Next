"use client"

import type React from "react"

import { useState } from "react"
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "motion/react"

export const AnimatedTooltip = <T extends { id: number; name?: string; designation?: string; image?: string }>({
  items,
  renderItem,
  renderTooltip,
}: {
  items: T[]
  renderItem?: (item: T, handleMouseMove: (event: any) => void) => React.ReactNode
  renderTooltip?: (item: T) => React.ReactNode
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative inline-block"
          // Usamos el id como clave única en lugar de name
          key={`item-${item.id}`}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-19 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute  -bottom-px z-30 h-px w-[50%] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <div className="absolute -bottom-px  z-30 h-px w-[50%] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

                {renderTooltip ? (
                  renderTooltip(item)
                ) : (
                  <>
                    {item.name && <div className="relative z-30 text-base font-bold text-white">{item.name}</div>}
                    {item.designation && <div className="text-xs text-white">{item.designation}</div>}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          {renderItem
            ? renderItem(item, handleMouseMove)
            : item.image && (
                <img
                  onMouseMove={handleMouseMove}
                  height={100}
                  width={100}
                  src={item.image || "/placeholder.svg"}
                  alt={item.name || ""}
                  className="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
                />
              )}
        </div>
      ))}
    </>
  )
}
