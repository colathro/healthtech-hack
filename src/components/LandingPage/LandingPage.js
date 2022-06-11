import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-header">
        Hello Hackers!
        <Link to="/questionnaire">Start Questionnaire</Link>
      </div>
    </div>
  );
}

export default LandingPage;
