import "./Question.css";
import { observer } from "mobx-react";

const Question = observer(({ question }) => {
  return (
    <div className="question">
      <div className="question-txt">{question.text}</div>
      <div>{MapTypes(question)}</div>
    </div>
  );
});

const MapTypes = (question) => {
  switch (question.type) {
    case "yesno":
      return <YesNo question={question}></YesNo>;

    case "frequency":
      return <Frequency question={question}></Frequency>;

    case "intensity":
      return <Intensity question={question}></Intensity>;

    default:
      break;
  }
};

const YesNo = observer(({ question }) => {
  const setAnswer = (answer) => {
    question.answer = answer;
  };

  return (
    <div>
      <button
        className="question-button"
        onClick={() => setAnswer(true)}
        disabled={question.answer === true}
      >
        Yes
      </button>
      <button
        className="question-button"
        onClick={() => {
          setAnswer(false);
        }}
        disabled={question.answer === false}
      >
        No
      </button>
    </div>
  );
});

const Frequency = observer(({ question }) => {
  const setAnswer = (answer) => {
    question.answer = answer;
  };

  return (
    <div>
      <button
        className="question-button"
        onClick={() => setAnswer(1)}
        disabled={question.answer === 1}
      >
        Yearly
      </button>
      <button
        className="question-button"
        onClick={() => setAnswer(3)}
        disabled={question.answer === 3}
      >
        Monthly
      </button>
      <button
        className="question-button"
        onClick={() => setAnswer(6)}
        disabled={question.answer === 6}
      >
        Biweekly
      </button>
      <button
        className="question-button"
        onClick={() => setAnswer(12)}
        disabled={question.answer === 12}
      >
        Weekly
      </button>
      <button
        className="question-button"
        onClick={() => setAnswer(16)}
        disabled={question.answer === 16}
      >
        Every other day
      </button>
      <button
        className="question-button"
        onClick={() => setAnswer(32)}
        disabled={question.answer === 32}
      >
        Daily
      </button>
    </div>
  );
});

const Intensity = observer(({ question }) => {
  const setAnswer = (answer) => {
    question.answer = answer;
  };

  return (
    <div>
      <button
        className="question-button"
        onClick={() => setAnswer(1)}
        disabled={question.answer === 1}
      >
        Light
      </button>
      <button
        className="question-button"
        onClick={() => setAnswer(3)}
        disabled={question.answer === 3}
      >
        Medium
      </button>
      <button
        className="question-button"
        onClick={() => setAnswer(9)}
        disabled={question.answer === 9}
      >
        Intense
      </button>
      <button
        className="question-button"
        onClick={() => setAnswer(24)}
        disabled={question.answer === 24}
      >
        Debilitating
      </button>
    </div>
  );
});

export default Question;
