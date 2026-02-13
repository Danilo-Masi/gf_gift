import { Headphones, Info } from "lucide-react";
import survey_1 from "../../assets/test/survey_1.webp";
import survey_2 from "../../assets/test/survey_2.jpeg";
import survey_3 from "../../assets/test/survey_3.jpeg";
import survey_4 from "../../assets/test/survey_4.webp";
import survey_5 from "../../assets/test/survey_5.webp";
import survey_6 from "../../assets/test/survey_6.jpg";
import survey_7 from "../../assets/test/survey_7.jpg";
import survey_8 from "../../assets/test/survey_8.jpg";
import survey_9 from "../../assets/test/survey_9.jpeg";
import { Button } from "../ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import me_loading from "../../assets/test/me_loading2.png";
import chiara_error from "../../assets/test/chiara_error.png";

const images = [
    { src: survey_1, correct: false },
    { src: survey_2, correct: false },
    { src: survey_3, correct: false },
    { src: survey_4, correct: false },
    { src: survey_5, correct: false },
    { src: survey_6, correct: true },
    { src: survey_7, correct: true },
    { src: survey_8, correct: false },
    { src: survey_9, correct: false },
];

export default function ReCaptcha() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<boolean[]>(
        Array(images.length).fill(false)
    );
    const [result, setResult] = useState<"success" | "error" | null>(null);

    const toggleSelect = (index: number) => {
        const newSelected = [...selected];
        newSelected[index] = !newSelected[index];
        setSelected(newSelected);
    };

    const handleVerify = () => {
        const isCorrect = images.every((img, i) => {
            return img.correct === selected[i];
        });

        if (isCorrect) {
            setResult("success");
            setTimeout(() => {
                navigate("/question", { replace: true });
            }, 3000);
        } else {
            setResult("error");
            setTimeout(() => {
                setResult(null);
            }, 3000);
        }
    };


    return (
        <div className="w-full h-min p-3 gap-3 flex flex-col bg-white">
            {/* titolo */}
            <div className="w-full h-min p-5 bg-blue-300">
                <p className="text-lg font-medium text-white">
                    Select all images with
                </p>
                <h1 className="text-3xl font-extrabold text-white">
                    Your sexy bf 😏
                </h1>
            </div>

            {/* griglia */}
            <div className="w-full flex flex-wrap gap-3 justify-center">
                {images.map((img, i) => (
                    <div
                        key={i}
                        onClick={() => toggleSelect(i)}
                        className={`relative w-[calc(100%/3-8px)] h-[15svh] cursor-pointer transition-all duration-200 
          ${selected[i] ? "ring-4 ring-blue-500 scale-95" : ""}`}
                    >
                        <img
                            src={img.src}
                            alt={`Image ${i}`}
                            className="w-full h-full object-cover"
                        />

                        {selected[i] && (
                            <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center text-white font-bold text-xl">
                                ✓
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* bottoni */}
            <div className="w-full h-min flex justify-between items-center">
                <div className="flex gap-5">
                    <Info className="text-black/60" />
                    <Headphones className="text-black/60" />
                </div>

                <Button
                    onClick={handleVerify}
                    className="bg-blue-300 rounded-xs text-xl text-white p-8 font-extrabold"
                >
                    Verifica
                </Button>
            </div>

            {result === "success" && (
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-white/60 to-transparent flex flex-col items-center justify-center text-center z-20">
                    <img src={me_loading} alt="Success" className="w-1/2 h-1/2 object-contain animate-spin" />
                </div>
            )}

            {result === "error" && (
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-white/60 to-transparent flex flex-col items-center justify-center text-center z-20">
                    <img src={chiara_error} alt="Error" className="w-1/2 h-1/2 object-contain animate-ping" />
                </div>
            )}
        </div>
    )
}
