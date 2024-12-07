"use client";
import { useState } from "react";
import { ReactTyped } from "react-typed";

interface ITypewriterProps {
  parts: string[]; // Array de strings que serão digitadas
  delay?: number; // Tempo de atraso inicial (opcional)
  onComplete?: () => void; // Função chamada quando o texto termina
}

function Typewriter({ parts, delay = 0, onComplete }: ITypewriterProps) {
  if (!parts || parts.length === 0) return null;

  return (
    <span className="flex text-primary-pink gap-3">
      <ReactTyped
        strings={[parts[0]]} // Primeira parte
        typeSpeed={20} // Velocidade da digitação
        startDelay={delay}
        showCursor={false} // Remove o cursor para esta parte
      />
      <em className="not-italic text-primary-purple">
        <ReactTyped
          strings={[parts[1]]} // Segunda parte
          typeSpeed={20} // Velocidade da digitação
          startDelay={delay + parts[0].length * 70 + 500} // Atraso proporcional à primeira parte
          showCursor={false}
          onComplete={onComplete} // Chama quando a digitação terminar
        />
      </em>
    </span>
  );
}

export default function SynchronizedTypewriter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sequences = [
    [
      "scalar@bitcoin :~$",
      "Inspiring the next generation of Bitcoin developers.",
    ],
    [
      "scalar@bitcoin :~$",
      "Continental dimensions require continental efforts.",
    ],
    ["scalar@bitcoin :~$", "We are here to change the world."],
    ["scalar@bitcoin :~$", "Start small, then scale."],
  ];

  return (
    <div>
      {sequences.slice(0, currentIndex + 1).map((sequence, index) => (
        <Typewriter
          key={index}
          parts={sequence}
          delay={index * 20} // Delay ajustado entre as partes
          onComplete={() => {
            if (currentIndex < sequences.length - 1) {
              setCurrentIndex(currentIndex + 1);
            }
          }}
        />
      ))}
    </div>
  );
}
