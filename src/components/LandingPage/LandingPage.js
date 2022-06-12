import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  let navigate = useNavigate();

  const questionnaire = () => {
    navigate("/questionnaire");
  };

  return (
    <div className="landing-page">
      <div className="hero-container">
        <div className="hero-left-container">
          <div className="hero-left-inner">
            <h2 className="header-txt">
              Tired of struggling alone, not sure where to go?
            </h2>
            <p className="hero-txt">
              Millions of people stuggle daily with mental health disorders, and
              lack the resources to easily find where to start. <br /> <br />
              Take our short questionnaire to get some initial direction and
              resources to start your treatment journey.
            </p>
            <a className="hero-button" onClick={questionnaire}>
              Start Questionnaire >
            </a>
          </div>
        </div>
        <div className="hero-right-container">
          <img
            className="imgContainer"
            src="./humans/twonewhumans.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
