import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-container">
        <div className="hero-left-container">
          <div className="hero-left-inner">
            <h2 className="header-txt">
              Tired of struggling alone, not sure where to go?
            </h2>
            <p className="hero-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. 
            </p>
            <button>
              <Link to="/questionnaire">Start Questionnaire</Link>
            </button>
          </div>
        </div>
        <div className="hero-right-container">
          <img className="imgContainer" src="humans/twohumans.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
