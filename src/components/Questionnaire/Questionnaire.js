import { Link } from "react-router-dom";
import "./Questionnaire.css";

function Questionnaire() {
  return (
    <div className="questionnaire-page">
      <div className="questionnaire-page-header">
      <h1>Questionnaire goes here!</h1>
        <Link to="/">Go back</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  );
}

export default Questionnaire;
