import { useRef, useState, useEffect } from "react";
import test_video from "../../assets/tiktok/test_video.mp4";
import crueza_video from "../../assets/tiktok/crueza.mp4";
import { FastForward, Play, Pause, Rewind } from "lucide-react";

export default function VideoPlayer({ isEasterEggActive, }: { isEasterEggActive: boolean }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [showControls, setShowControls] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    // Mostra controlli e resetta timer
    const showAndHideLater = () => {
        setShowControls(true);

        if (hideTimeout.current) clearTimeout(hideTimeout.current);

        hideTimeout.current = setTimeout(() => {
            setShowControls(false);
        }, 2000);
    };

    const handlePlayPause = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }

        showAndHideLater();
    };

    const handleRewind = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = Math.max(
            videoRef.current.currentTime - 5,
            0
        );
        showAndHideLater();
    };

    const handleForward = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = Math.min(
            videoRef.current.currentTime + 5,
            videoRef.current.duration
        );
        showAndHideLater();
    };

    // Cleanup
    useEffect(() => {
        return () => {
            if (hideTimeout.current) clearTimeout(hideTimeout.current);
        };
    }, []);

    return (
        <div
            onClick={showAndHideLater}
            className="relative w-full h-full flex items-center justify-center">
            <video
                ref={videoRef}
                src={isEasterEggActive ? crueza_video : test_video}
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls={false} />
            {/* Overlay controlli */}
            <div className={`absolute z-20 flex gap-6 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <button onClick={handleRewind}>
                    <Rewind className="w-8 h-8 text-white opacity-90" />
                </button>
                <button onClick={handlePlayPause}>
                    {isPlaying ? (
                        <Pause className="w-14 h-14 text-white opacity-95" />
                    ) : (
                        <Play className="w-14 h-14 text-white opacity-95" />
                    )}
                </button>
                <button onClick={handleForward}>
                    <FastForward className="w-8 h-8 text-white opacity-90" />
                </button>
            </div>
        </div>
    );
}