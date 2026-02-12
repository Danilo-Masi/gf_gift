import { X } from "lucide-react";
import picture_1 from "../../assets/tiktok/picture_1.jpeg";
import picture_2 from "../../assets/tiktok/picture_2.jpeg";
import picture_3 from "../../assets/tiktok/picture_3.jpeg";
import picture_4 from "../../assets/tiktok/picture_4.jpeg";
import picture_5 from "../../assets/tiktok/picture_5.jpg";

const comments = [
    { picture: picture_1, username: "veryladygaga1", comment: "IOO, IOO...CHECCO, t mett incint,t lasc e t facc e corn...", time: "1o" },
    { picture: picture_2, username: "mariomario581", comment: "Jun..Jun..(Pereta)...nun si nisciun!!", time: "1o" },
    { picture: picture_3, username: "dmasii1", comment: "Buon San Valentino amore mì!! 🤎 ", time: "2o" },
    { picture: picture_4, username: "nablacosmetics", comment: "Ti abbiamo selezionata! Apri i DM 🌟", time: "4o" },
    { picture: picture_5, username: "idadifilippo", comment: "Io e te, divano e coperta a vedere una puntata di Case a prima vista? 😘", time: "5o" },
];

interface CommentBoxProps {
    picture: string;
    username: string;
    comment: string;
    time: string;
}

function ComementBox({ picture, username, comment, time }: CommentBoxProps) {
    return (
        <div className="w-full h-min flex items-start justify-start gap-3">
            <img src={picture} className="w-12 h-12 rounded-full" />
            <div className="w-full h-min flex flex-col">
                <h1 className="font-bold text-md">{username}</h1>
                <p className="text-md text-black/80">{comment}</p>
                <p className="text-sx text-black/50">{time}</p>
            </div>
        </div>
    )
}

export default function Comments({ setCommentOpen }: { setCommentOpen: (open: boolean) => void }) {
    return (
        <div className="w-full h-[70svh] overflow-y-scroll shadow-2xl flex flex-col items-center gap-5 absolute bottom-0 left-0 p-5 z-20 rounded-t-3xl bg-zinc-100">
            {/* Top */}
            <div className="w-full h-min flex justify-center items-center mb-2">
                <div className="w-2/3 flex justify-end">
                    <h1 className="font-bold text-lg">2022 Commenti</h1>
                </div>
                <div className="w-1/3 flex justify-end">
                    <X className="h-6 w-6 cursor-pointer" onClick={() => { setCommentOpen(false) }} />
                </div>
            </div>
            {/* Commenti */}
            {comments.map((comment, index) => (
                <ComementBox
                    key={index}
                    picture={comment.picture}
                    username={comment.username}
                    comment={comment.comment}
                    time={comment.time} />
            ))}
        </div>
    )
}
