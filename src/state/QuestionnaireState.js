import { makeAutoObservable } from "mobx";
import InitialQuestions from "./InitialQuestions";

const PERSISTED_QUESTIONS = "PERSISTED_QUESTIONS";

class QuestionnaireState {
  questions = undefined;

  constructor() {
    makeAutoObservable(this);

    let existingQuestions = localStorage.getItem(PERSISTED_QUESTIONS);

    if (existingQuestions === null) {
      this.questions = InitialQuestions;
    } else {
      try {
        this.questions = JSON.parse(existingQuestions);
      } catch (e) {
        console.log(e); // TODO: we should show an error in the ui saying we failed to fetch existing questions
        this.questions = InitialQuestions;
      }
    }
  }

  persistQuestions() {
    const questionsString = JSON.stringify(this.questions);
    localStorage.setItem(PERSISTED_QUESTIONS, questionsString);
  }

  calculateProgress() {
    let totalQuestions = 0;
    let totalAnswered = 0;

    this.questions.forEach((question) => {
      totalQuestions += 1;
      if (question.answer !== null) {
        totalAnswered += 1;
      }
    });

    return Math.ceil((totalAnswered / totalQuestions) * 100);
  }

  calculateResults() {}
}

let questionnaireState = new QuestionnaireState();

export default questionnaireState;
