import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Test from "./pages/Test";
import Question from "./pages/Question";
import TikTok from "./pages/TikTok";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/test" element={<Test />} />
      <Route path="/question" element={<Question />} />
      <Route path="/tiktok" element={<TikTok />} />
    </Routes>
  );
}
