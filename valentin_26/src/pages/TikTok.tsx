import { useEffect, useState } from "react";
import Loading from "../components/tiktok/Loading";
import Homepage from "../components/tiktok/Homepage";

export default function TikTok() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loading /> : <Homepage />}
    </>
  )
}
