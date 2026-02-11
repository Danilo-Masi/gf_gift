import { Bookmark, Forward, Heart, MessageCircleMore } from "lucide-react";
import profile_picture from "../../assets/tiktok/profile_picture.jpg";
import VideoPlayer from "./VideoPlayer";

export default function Homepage() {
    return (
        <div className="w-full h-svh flex relative overflow-hidden">
            {/* Title && caption */}
            <div className="w-4/5 h-min absolute bottom-0 left-0 flex flex-col p-3 z-10">
                <h1 className="font-bold text-lg">Bea ⭐️<span className="text-zinc-400"> • 6 ore fa</span></h1>
                <p className="text-zinc-600">Voi come reagite? #università #laurea #esami</p>
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
                        color="red"
                        fill="red"
                        className="h-9 w-9 transition-transform duration-200 hover:scale-125 cursor-pointer" />
                    <p className="font-semibold text-zinc-100/80">2222</p>
                </div>
                {/* Comments */}
                <div className="w-full h-[10svh] flex flex-col items-center justify-center p-2">
                    <MessageCircleMore
                        color="white"
                        fill="trasparent"
                        className="h-9 w-9 transition-transform duration-200 hover:scale-125 cursor-pointer" />
                    <p className="font-semibold text-zinc-100/80">451</p>
                </div>
                {/* Save */}
                <div className="w-full h-[10svh] flex flex-col items-center justify-center p-2">
                    <Bookmark
                        color="yellow"
                        fill="yellow"
                        className="h-9 w-9 transition-transform duration-200 hover:scale-125 cursor-pointer" />
                    <p className="font-semibold text-zinc-100/80">78</p>
                </div>
                {/* Share */}
                <div className="w-full h-[10svh] flex flex-col items-center justify-center p-2 ">
                    <Forward
                        color="gray"
                        fill="gray"
                        className="h-9 w-9 transition-transform duration-200 hover:scale-125 cursor-pointer" />
                </div>
                {/* Song */}
                <div className="w-full h-[10svh] flex items-center justify-center p-2">
                    <div className="w-12 h-12 rounded-full bg-yellow-500" />
                </div>
            </div>
            {/* Video */}
            <VideoPlayer />
            {/* Migliorie */}
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-t from-black/70 to-transparent pointer-events-none"></div>
        </div>
    )
}
