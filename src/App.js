import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
