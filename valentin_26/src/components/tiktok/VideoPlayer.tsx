import { useRef } from "react";
import test_video from "../../assets/tiktok/test_video.mp4";
import { FastForward, Play, Rewind } from "lucide-react";

export default function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlayPause = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    const handleRewind = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 5, 0);
    };

    const handleForward = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 5, videoRef.current.duration);
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <video
                ref={videoRef}
                src={test_video}
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls={false}
                muted={false} />
            <div className="z-20 flex gap-2">
                <button
                    onClick={handleRewind}
                    className="text-white px-3 py-1 rounded hover:bg-white/20 transition">
                    <Rewind fill="gray" color="gray" className="w-8 h-8 opacity-95"/>
                </button>
                <button
                    onClick={handlePlayPause}
                    className="text-white px-3 py-1 rounded hover:bg-white/20 transition">
                    <Play fill="gray" color="gray" className="w-15 h-15 opacity-95"/>
                </button>
                <button
                    onClick={handleForward}
                    className="text-white px-3 py-1 rounded hover:bg-white/20 transition">
                    <FastForward fill="gray" color="gray" className="w-8 h-8 opacity-95"/>
                </button>
            </div>
        </div>
    );
}