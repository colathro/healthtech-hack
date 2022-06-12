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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris added-features
              nisi ut aliquip ex ea commodo consequat.

              nisi ut aliquip ex ea commodo consequat. main
              Millions of people stuggle daily with mental health disorders, and
              lack the resources to easily find where to start. <br /> <br />
              Take our short questionnaire to get some initial direction and
              resources to start your treatment journey.
            </p>
            <button className="hero-button" onClick={questionnaire}>
              Start Questionnaire >
            </button>
          </div>
        </div>
        <div className="hero-right-container"> added-features
        <div className="hero-right-container">
          <img
            className="imgContainer"
            src="./humans/twonewhumans.svg"
            alt=""
          />
          <img className="imgContainer" src="humans/twohumans.svg" alt="" /> main
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
