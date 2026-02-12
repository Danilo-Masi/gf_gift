import { Button } from "@/components/ui/button";
import MatrixBackground from "@/components/welcome/MatrixBackground";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/test", { replace: true });
  }

  return (
    <div className="w-full h-svh flex flex-col gap-5 text-center items-center justify-center p-5 bg-black">
      <MatrixBackground />
      <h1 className="text-4xl font-bold text-white z-20">Benvenuta Beavtris</h1>
      <p className="text-white/90 text-balance z-20">Se sei approdata qui, significa che sei finalmente stata selezionata per entrare a far parte della blasonata agenzia C.I.A. (Ciarlatani In Attività). Pero prima di scoprire quale sarà il tuo ruolo, dobbiamo confermare la tua identità.</p>
      <Button
        onClick={handleClick}
        className="bg-green-600 p-8 text-lg font-semibold text-white animate-pulse">
        Conferma la tua identità 📈
      </Button>
      <p className="text-xs text-balance text-white/70 max-w-xs z-20">*Proseguendo accetti automaticamente di ricevere una raffica di baci all'improvviso, audio post palestra, fiatella, canzoni che non ti piacciono, toccatine varie, e tante altre bellissime cose che odi</p>
    </div>
  )
}
