import { Bookmark, Forward, Heart, MessageCircleMore } from "lucide-react";
import profile_picture from "../../assets/tiktok/profile_picture.webp";
import me_picture from "../../assets/tiktok/me_picture.webp";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import Comments from "./Comments";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate();
    const [numLikes, setNumLikes] = useState(38);
    const [liked, setLiked] = useState(false);
    const [numSaves, setNumSaves] = useState(9);
    const [saved, setSaved] = useState(false);
    const [isCommentOpen, setCommentOpen] = useState(false);
    const [isEasterEggActive, setEasterEggActive] = useState(false);

    const handleLike = () => {
        if (liked) {
            setNumLikes(numLikes - 1);
        } else {
            setNumLikes(numLikes + 1);
        }
        setLiked(!liked);
    }

    const handleSave = () => {
        if (saved) {
            setNumSaves(numSaves - 1);
        } else {
            setNumSaves(numSaves + 1);
        }
        setSaved(!saved);
    }

    const handleShare = () => {
        navigate("/", { replace: true });
    }

    return (
        <div className="w-full h-svh flex relative overflow-hidden">
            {/* Title && caption */}
            <div className="w-4/5 h-min absolute bottom-0 left-0 flex flex-col p-3 z-10">
                <h1 className="font-bold text-md text-white">Bea ☆<span className="text-zinc-400"> • 6 ore fa</span></h1>
                <p className="text-white/80 text-md">Un pò di entrate sballate, e voi come sbattete lo sportello dei vostri fidanzati?  #tecno #valentinDay #cappellodacane</p>
            </div>
            <div className="w-1/5 h-min absolute bottom-0 right-0 z-10">
                {/* Foto profilo */}
                <div className="w-full h-[10svh] flex items-center justify-center p-2">
                    <div className="w-15 h-15 rounded-full bg-yellow-50">
                        <img src={profile_picture} className="w-full h-full rounded-full" />
                    </div>
                </div>
                {/* Like */}
                <div className="w-full h-[10svh] flex flex-col items-center justify-center p-2">
                    <Heart
                        onClick={() => handleLike()}
                        color={liked ? "red" : "white"}
                        fill={liked ? "red" : "white"}
                        className="h-9 w-9 transition-transform duration-200 hover:scale-125 cursor-pointer" />
                    <p className="font-semibold text-zinc-100">{numLikes}</p>
                </div>
                {/* Comments */}
                <div className="w-full h-[10svh] flex flex-col items-center justify-center p-2">
                    <MessageCircleMore
                        onClick={() => setCommentOpen(true)}
                        color="black"
                        fill="white"
                        className="h-9 w-9 transition-transform duration-200 hover:scale-125 cursor-pointer" />
                    <p className="font-semibold text-zinc-100">2022</p>
                </div>
                {/* Save */}
                <div className="w-full h-[10svh] flex flex-col items-center justify-center p-2">
                    <Bookmark
                        onClick={() => handleSave()}
                        color={saved ? "yellow" : "white"}
                        fill={saved ? "yellow" : "white"}
                        className="h-9 w-9 transition-transform duration-200 hover:scale-125 cursor-pointer" />
                    <p className="font-semibold text-zinc-100">{numSaves}</p>
                </div>
                {/* Share */}
                <div className="w-full h-[10svh] flex flex-col items-center justify-center p-2 ">
                    <Forward
                        onClick={() => handleShare()}
                        color="white"
                        fill="white"
                        className="h-9 w-9 transition-transform duration-200 hover:scale-125 cursor-pointer" />
                    <p className="font-semibold text-zinc-100">1</p>
                </div>
                {/* Easter Egg */}
                <div className="w-full h-[10svh] flex items-center justify-center p-2">
                    <img
                        onClick={() => setEasterEggActive(!isEasterEggActive)}
                        src={me_picture} className="w-12 h-12 rounded-full animate-spin" />
                </div>
            </div>
            {/* Video */}
            <VideoPlayer isEasterEggActive={isEasterEggActive} />
            {/* Sfumatura scura */}
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-t from-black/85 via-black/40 to-transparent pointer-events-none"></div>
            {/* Comments */}
            {isCommentOpen && <Comments setCommentOpen={setCommentOpen} />}
        </div>
    )
}
