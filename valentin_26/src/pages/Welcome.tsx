import { Button } from "@/components/ui/button";
import MatrixBackground from "@/components/welcome/MatrixBackground";
import { useNavigate } from "react-router-dom";
import matrix_song from "../assets/welcome/matrix_song.mp3";
import { useEffect, useRef } from "react";

export default function Welcome() {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.play();
    }
  }, []);

  const handleClick = () => {
    navigate("/test", { replace: true });
  }

  return (
    <div className="w-full h-svh flex flex-col gap-5 text-center items-center justify-center p-5 bg-black">
      <audio ref={audioRef} src={matrix_song} loop />
      <MatrixBackground />
      <div className="w-full h-full absolute top-0 left-0 bg-linear-to-b from-transparent via-black to-transparent" />
      <h1 className="text-3xl font-bold text-white z-20">Benvenuta Agente <span className="text-extrabold text-5xl">Beavtris</span></h1>
      <p className="text-white/90 text-balance z-20">
        Se sei arrivata fin qui, significa che il sistema ti ha selezionata.
        L’agenzia C.I.A. (Ciarlatani In Attività) monitora da tempo le tue straordinarie capacità.
        <br />
        Prima di rivelarti il tuo incarico ufficiale, dobbiamo verificare la tua identità.
      </p>
      <Button
        onClick={handleClick}
        className="bg-green-600 p-8 text-lg font-semibold text-white animate-pulse">
        🫆 AVVIA VERIFICA 📈
      </Button>
      <p className="text-xs text-balance text-white/70 max-w-xs z-20">
        *Proseguendo accetti possibili effetti collaterali quali: baci improvvisi, vocali non richiesti, toccate sospette, playlist discutibili e altre pratiche altamente romantiche
      </p>
    </div>
  )
}
