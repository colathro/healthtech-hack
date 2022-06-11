const InitialQuestions = [
  {
    type: "yesno", // controls how we parse and display the question
    text: "Have you been feeling nervous, restless, or annoyed to the point of it being problematic?", // this is the question text displayed
    followUp: true, // whether or not this question triggers follow up
    followUpQuestions: [
      {
        type: "frequency",
        text: "How often do you feel nervous, restless, or annoyed?",
        answer: null,
      },
      {
        type: "intensity",
        text: "How intense are the feelings of being nervous, restless, or annoyed?",
        answer: null,
      },
    ], // these questions are additionally added below this when questions are rendered
    followUpSignal: true, // when this value matches the answer, follow up questions are displayed
    answer: null, // initial answer to the question, type property defines what goes here
  },
];

export default InitialQuestions;
