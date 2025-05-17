"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";


const processText = (text: string) => {
  const formatPattern = /\{\{(bold|light):([^{}]+)\}\}/g;

  const parts: Array<{ text: string; format?: string }> = [];
  let lastIndex = 0;
  let match;


  while ((match = formatPattern.exec(text)) !== null) {

    if (match.index > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, match.index),
      });
    }

  
    parts.push({
      text: match[2],
      format: match[1],
    });

    lastIndex = match.index + match[0].length;
  }

 
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

 
  const textParts = processText(words);


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

  
    if (onComplete) {
      controls.then(() => {
        setTimeout(onComplete, 200);
      });
    }

    return () => controls.stop();
  }, [animate, duration, staggerDelay, filter, onComplete]);

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