import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import sal_song from "../assets/question/sal_song.mp3";
import me_loading3 from "../assets/question/me_loading3.png";

const noTexts = [
  "Wait, what? 🧐",
  "Pensaci 🥸",
  "Impossibile, hai sbagliato di nuovo 😑",
  "Una strana coincidenza 🙃",
  "Riprova, dai! 😅",
];

export default function Question() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [noText, setNoText] = useState("No 😢");
  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.play();
    }
  }, []);

  const handleYes = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate("/tiktok", { replace: true });
    }, 2500);
  };

  const handleNo = () => {
    // Testo casuale senza ripetere lo stesso
    setNoText(prev => {
      const filtered = noTexts.filter(t => t !== prev);
      return filtered[Math.floor(Math.random() * filtered.length)];
    });

    // YES cresce di più
    setYesScale(prev => Math.min(prev + 0.15, 3));

    // Movimento più realistico
    const randomX = Math.random() * 150 - 100;
    const randomY = Math.random() * 350 - 100;

    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="w-full h-svh flex flex-col items-center justify-center gap-8 p-5 bg-linear-to-br from-pink-200 to-pink-300 overflow-hidden">
      <audio ref={audioRef} src={sal_song} loop />
      <h1 className="text-5xl font-extrabold text-center">
        Will you be my valentine? <span className="animate-pulse">🤎</span>
      </h1>

      <div className="relative flex items-center justify-center gap-5">
        <button
          onClick={handleYes}
          style={{ transform: `scale(${yesScale})` }}
          className="transition-all duration-300 text-white font-extrabold text-4xl p-6 bg-pink-500 rounded-2xl shadow-2xl hover:scale-110 active:scale-95">
          SÌ 💘
        </button>

        <button
          onClick={handleNo}
          style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
          className="transition-all duration-300 text-white text-sm px-4 py-2 bg-zinc-900 rounded-lg shadow-lg">
          {noText}
        </button>
      </div>

      <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={200}
      />

      {success && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-linear-to-b from-transparent via-black/80 to-transparent bg-opacity-50 z-30">
          <img src={me_loading3} className="w-80 h-80 object-contain animate-bounce" />
        </div>
      )}
    </div>
  );
}