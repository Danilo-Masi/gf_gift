import { useState } from "react"
import { useNavigate } from "react-router-dom";

const noTexts = [
  "Wait, what?",
  "Ne sei proprio sicura sicura?",
  "Ma che stai a dì",
  "Forse hai cliccato male",
  "Dai ti perdono, hai sicuramente sbagliato"
]

export default function Question() {
  const navigate = useNavigate();

  const [noButton, setNoButton] = useState("no");
  const [yesSize, setYesSize] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleYes = () => {
    navigate("/tiktok");
  }

  const handleNo = () => {
    // Cambia testo
    const randomIndex = Math.floor(Math.random() * noTexts.length);
    const randomElement = noTexts[randomIndex];
    setNoButton(randomElement);
    // Aumenta grandezza YES
    setYesSize(prev => prev + 0.1);
    // Muove il bottone NO in una posizone casuale
    const randomX = Math.random() * 100 - 100;
    const randomY = Math.random() * 350 - 100;
    setPosition({ x: randomX, y: randomY });
  }

  return (
    <div className="w-full h-svh flex flex-col items-center justify-center gap-8 p-5 bg-pink-200">
      <h1 className="text-5xl font-extrabold text-center"> Will you be my valentine? 💖</h1>
      <div className="relative flex items-center justify-center gap-5">
        <button
          onClick={handleYes}
          style={{ transform: `scale(${yesSize})` }}
          className="transition-all duration-300 text-white font-extrabold text-5xl p-5 bg-pink-500 rounded-xl shadow-xl hover:scale-110">
          SII 💘
        </button>
        <button
          onClick={handleNo}
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          className="transition-all duration-300 text-white text-xs p-3 bg-zinc-900 rounded-md">
          {noButton}
        </button>
      </div>
    </div>
  )
}
