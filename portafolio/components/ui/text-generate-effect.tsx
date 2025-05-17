"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

// Función auxiliar para procesar el texto y encontrar marcadores de formato
const processText = (text: string) => {
  // Patrón para encontrar texto entre {{formato:texto}}
  // Formatos: bold, light (para text-gray-300)
  const formatPattern = /\{\{(bold|light):([^{}]+)\}\}/g;

  const parts: Array<{ text: string; format?: string }> = [];
  let lastIndex = 0;
  let match;

  // Buscar todas las coincidencias en el texto
  while ((match = formatPattern.exec(text)) !== null) {
    // Añadir el texto antes del marcador
    if (match.index > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, match.index),
      });
    }

    // Añadir el texto con formato
    parts.push({
      text: match[2],
      format: match[1],
    });

    lastIndex = match.index + match[0].length;
  }

  // Añadir el resto del texto después del último marcador
  if (lastIndex < text.length) {
    parts.push({
      text: text.substring(lastIndex),
    });
  }

  return parts;
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.4,
  staggerDelay = 0.02,
  onComplete,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
  onComplete?: () => void;
}) => {
  const [scope, animate] = useAnimate();

  // Procesar el texto para encontrar marcadores de formato
  const textParts = processText(words);

  // Crear un array plano de palabras con sus formatos
  const processedWords: Array<{ word: string; format?: string }> = [];

  textParts.forEach((part) => {
    const wordsInPart = part.text.split(" ");
    wordsInPart.forEach((word) => {
      if (word) {
        processedWords.push({
          word,
          format: part.format,
        });
      }
    });
  });

  useEffect(() => {
    const controls = animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(staggerDelay),
      }
    );

    // Llamar a onComplete cuando la animación termina
    if (onComplete) {
      controls.then(() => {
        setTimeout(onComplete, 200);
      });
    }

    return () => controls.stop();
  }, [animate, duration, staggerDelay, filter, onComplete]); // Removed scope.current

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {processedWords.map((item, idx) => {
          return (
            <motion.span
              key={item.word + idx}
              className={cn(
                "opacity-0",
                "text-gray-400",
                item.format === "bold" && "font-bold text-gray-200",
                item.format === "light" && "text-gray-200"
              )}
              style={{
                filter: filter ? "blur(8px)" : "none",
              }}
            >
              {item.word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-medium", className)}>
      <div>
        <div className="text-lg leading-snug tracking-wide max-w-150">{renderWords()}</div>
      </div>
    </div>
  );
};