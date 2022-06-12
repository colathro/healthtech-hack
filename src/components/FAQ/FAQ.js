import { Link } from "react-router-dom";
import "./FAQ.css";

function FAQ() {
  return (
    <div className="faq-page">
      <div className="faq-page-header">
        FAQ container here
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}

export default FAQ;
