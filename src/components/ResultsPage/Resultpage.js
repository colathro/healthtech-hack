import "./Resultpage.css";

function Resultpage() {
  return (
    <div className="results">
      <div className="results-page-container">
        <h2 className="result-txt">
          We believe based off your results, a{" "}
          <strong>
            <em>Therapist</em>
          </strong>{" "}
          <br></br>
          would be a beneficial first step.
        </h2>
        <p>
          Seeking support from Therapist, gives you an opportunity to explore
          your thoughts, feelings, and patterns of behavior. It can also help
          you learn new coping skills and techniques to better manage daily
          stressors and symptoms associated with your diagnosis.<br></br>
          <br></br>
          Psychotherapy helps people take back control, and give them the tools
          they need to improve their situation. That leads to changes that
          enhance healthy behavior, whether it's improving relationships,
          expressing emotions better, doing better at work or school, or
          thinking more positively.
        </p>
        <h3>
          {" "}
          Find your closest Therapist <br></br>
          <a href="https://www.psychologytoday.com/us/therapists">
            <strong>
              <em>here.</em>
            </strong>
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Resultpage;
