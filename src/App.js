import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Questionnaire from "./components/Questionnaire/Questionnaire";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </div>
  );
}

export default App;
