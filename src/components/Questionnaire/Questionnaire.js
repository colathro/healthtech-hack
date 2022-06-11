import { Link } from "react-router-dom";
import "./Questionnaire.css";

function Questionnaire() {
  return (
    <div className="questionnaire-page">
      <div className="questionnaire-page-header">
        Questionnaire goes here!
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default Questionnaire;
