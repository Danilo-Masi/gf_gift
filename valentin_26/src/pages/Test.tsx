import Testing from "@/components/test/Testing";
import { useEffect, useRef } from "react";
import ghiliottina_song from "../assets/test/ghiliottina_song.mp3";

export default function Test() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.play();
    }
  }, [audioRef.current]);

  return (
    <div className="w-full h-auto min-h-svh overflow-scroll flex flex-col items-center justify-center bg-linear-to-b from-pink-100 to-pink-200">
      <audio ref={audioRef} src={ghiliottina_song} loop />
      <Testing />
    </div>
  )
}
