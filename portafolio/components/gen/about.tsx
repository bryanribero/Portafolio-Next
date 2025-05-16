"use client"
import { useState, useEffect } from "react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"


const textA = `I am a {{bold:5th-year student}} at the School of {{bold:Computer Science}}, with knowledge in programming ({{light:Java}}, {{light:JavaScript}}, {{light:C#}}), databases ({{light:SQL}}, {{light:MSQL}}), web design, computer maintenance and structure, operating systems, networks, and electronics. Throughout my education, I have specialized in {{bold:web development}}, particularly in frontend technologies such as ({{light:HTML}}, {{light:CSS}}, {{light:JavaScript}}, and frameworks like {{light:Bootstrap}}.
`

const textB = `I completed the '{{bold:Jóvenes a Programar}}' course at Ceibal and obtained {{light:several certifications in .NET}}, which have strengthened my programming skills. Additionally, I have taken courses on platforms such as {{light:Coursera}}, where I trained in modern technologies like {{light:React}} and {{light:Angular}}. These experiences have allowed me to gain a broader perspective of web development and apply my knowledge in practical projects.
`

const textC = `Although I currently specialize in {{light:frontend development}}, my goal is to continue training and expand my knowledge to become a {{bold:full-stack developer}}, acquiring skills both on the {{light:client-side}} and in the {{light:backend}}.
`

export default function About({ onComplete }: { onComplete?: () => void }) {
  const [showTextA, setShowTextA] = useState(true)
  const [showTextB, setShowTextB] = useState(false)
  const [showTextC, setShowTextC] = useState(false)

 
  useEffect(() => {
    setShowTextA(true)
  }, [])

  
  const handleFinalComplete = () => {
    if (onComplete) {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      {showTextA && (
        <TextGenerateEffect words={textA} onComplete={() => setShowTextB(true)} duration={0.2} staggerDelay={0.01} />
      )}

      {showTextB && (
        <TextGenerateEffect words={textB} onComplete={() => setShowTextC(true)} duration={0.2} staggerDelay={0.01} />
      )}

      {showTextC && (
        <TextGenerateEffect words={textC} duration={0.2} staggerDelay={0.01} onComplete={handleFinalComplete} />
      )}
    </div>
  )
}