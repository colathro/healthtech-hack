import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Questionnaire.css";
import { observer } from "mobx-react";
import questionnaireState from "../../state/QuestionnaireState";
import Question from "../Question/Question";

const Questionnaire = observer(() => {
  return (
    <div className="questionnaire-page">
      <ProgressBar
        bgcolor="green"
        completed={questionnaireState.calculateProgress()}
      />
      <div className="questionnaire-page-header">
        Questionnaire goes here!
        {questionnaireState.questions.map((question) => {
          let questionsToRender = [];

          questionsToRender.push(
            <Question key={question.text} question={question}></Question>
          );

          if (question.followUpSignal === question.answer) {
            question.followUpQuestions.forEach((subQuestion) => {
              questionsToRender.push(
                <Question
                  key={subQuestion.text}
                  question={subQuestion}
                ></Question>
              );
              if (subQuestion.followUpSignal === subQuestion.answer) {
                subQuestion.followUpQuestions.forEach((subSubQuestion) => {
                  questionsToRender.push(
                    <Question
                      key={subSubQuestion.text}
                      question={subSubQuestion}
                    ></Question>
                  );
                });
              }
            });
          }

          return questionsToRender;
        })}
        <Link to="/">Go back</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  );
});

export default Questionnaire;
