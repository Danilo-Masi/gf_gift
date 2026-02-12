import { useState } from "react";
import ReCaptcha from "./ReCaptcha";
import Questionnaire from "./Questionnaire";

export default function Testing() {
    const [checkpoint, setCheckpoint] = useState(1);

    return (
        <div className="w-full h-full overflow-scroll flex flex-col justify-center p-5 gap-8 relative">
            {checkpoint === 1
                ? <Questionnaire setCheckpoint={setCheckpoint} />
                : <ReCaptcha />
            }
        </div>
    );
}