import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import me_loading from "../../assets/test/me_loading.png";

const risposte = [
    {
        domanda: "Come è il giubotto del tuo fidanzato?",
        placeholder: "c....o",
        risposta: "ciao",
        errore: "Puzza puzza puzza",
    },
    {
        domanda: "Cosa dice un romano quando ha la nausea?",
        placeholder: "me ... a s....ì m...e",
        risposta: "ciao",
        errore: "Il pensatore sul cesso",
    },
    {
        domanda: "Il voto di laurea che piu ti identifica?",
        placeholder: "1..",
        risposta: "ciao",
        errore: "Accompagnamento",
    },
    {
        domanda: "Famosa frase anglosassone pronunciata da un famoso fidanzato poco anglosassone",
        placeholder: "Where .. t.. ..x",
        risposta: "ciao",
        errore: "Cazzo vi ridete tu e quella cambia soldi?!",
    }
];

export default function Questionnaire({ setCheckpoint }: { setCheckpoint: (value: number) => void }) {
    const [values, setValues] = useState<string[]>(Array(risposte.length).fill(""));
    const [errors, setErrors] = useState<boolean[]>(Array(risposte.length).fill(false));
    const [success, setSuccess] = useState(false);


    const handleChange = (value: string, index: number) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
    };

    const handleValid = () => {
        const newErrors = values.map((val, i) =>
            val.trim().toLowerCase() !== risposte[i].risposta.toLowerCase()
        );

        setErrors(newErrors);

        const hasError = newErrors.some(err => err);

        if (!hasError) {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setCheckpoint(2);
            }, 2000);
        }
    };

    return (
        <>
            {risposte.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <p className="font-bold text-lg text-pink-black/80">
                        {item.domanda}
                    </p>
                    <Input
                        value={values[index]}
                        onChange={(e) => handleChange(e.target.value, index)}
                        placeholder={item.placeholder}
                        className={`py-6 text-lg ${errors[index] ? "border-red-500 focus-visible:ring-red-500" : "border-pink-300 focus-visible:ring-pink-300"}`} />
                    {errors[index] && (
                        <p className="text-red-500 text-sm">
                            {item.errore}
                        </p>
                    )}
                </div>
            ))}

            <Button
                onClick={handleValid}
                className="w-full py-8 text-xl font-extrabold bg-pink-400">
                Controlla le risposte 🧐
            </Button>

            {success && (
                <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col items-center justify-center text-center z-20">
                    <img src={me_loading} alt="Success" className="w-1/2 h-1/2 object-contain animate-spin" />
                    <p className="text-white text-2xl font-bold text-balance max-w-60">1° SCHECKPOINT 🥇🏁 SUPERATO</p>
                </div>
            )}
        </>
    )
}
