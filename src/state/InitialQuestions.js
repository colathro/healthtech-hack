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
  {
    type: "yesno",
    text: "Have you been feeling down, hopeless, tired, or the lack of pleasure?",
    followUp: true,
    followUpQuestions: [
      {
        type: "frequency",
        text: "How often do you feel down, hopeless, or tired?",
        answer: null,
      },
      {
        type: "intensity",
        text: "How intense are the feelings of being down, hopeless, or tired?",
        answer: null,
      },
    ],
    followUpSignal: true,
    answer: null,
  },
  {
    type: "yesno",
    text: "How often have you been triggered by an event that reminded you of a previous experience, causing emotional or physical distress (for example, increased heart rate, shortness of breath, hostility, anxiety)?",
    followUp: true,
    followUpQuestions: [
      {
        type: "frequency",
        text: "How often do you feel these strong physical reactions?",
        answer: null,
      },
      {
        type: "intensity",
        text: "How intense are the physical reactions when something reminded you of the stressful experience?",
        answer: null,
      },
    ],
    followUpSignal: true,
    answer: null,
  },
  {
    type: "yesno",
    text: "Are you having feelings of self harm or suicide?",
    additionalHelp:
      "You are not alone and help is available. Please call the National Suicide Prevention Lifeline: 800-273-8255",
    followUp: false,
    answer: null,
  },
  {
    type: "yesno",
    text: "Are you currently suffering from addiction related to harmful substances or activies?",
    followUp: true,
    followUpQuestions: [
      {
        type: "yesno",
        text: "Is the addiction related to chemical substances?",
        followUp: true,
        followUpQuestions: [
          {
            type: "frequency",
            text: "How often do you use the substance(s)?",
            answer: null,
          },
          {
            type: "yesno",
            text: "Is the abuse affecting your ability to maintain healthy relationships?",
            answer: null,
          },
          {
            type: "yesno",
            text: "Is the abuse affecting your health in a negative way?",
            answer: null,
          },
        ],
        followUpSignal: true,
        answer: null,
      },
      {
        type: "yesno",
        text: "Is the addiction related to gambling or videogames?",
        followUp: true,
        followUpQuestions: [
          {
            type: "frequency",
            text: "How often are you doing the activity?",
            answer: null,
          },
          {
            type: "yesno",
            text: "Is the abuse affecting your ability to maintain healthy relationships?",
            answer: null,
          },
          {
            type: "yesno",
            text: "Is the abuse affecting your health in a negative way?",
            answer: null,
          },
        ],
        followUpSignal: true,
        answer: null,
      },
    ],
    followUpSignal: true,
    answer: null,
  },
  {
    type: "yesno",
    text: "Do you frequently experience sudden irritability, fits of crying, or laughter?",
    followUp: true,
    followUpQuestions: [
      {
        type: "frequency",
        text: "How often do you have these urges?",
        answer: null,
      },
    ],
    followUpSignal: true,
    answer: null,
  },
  {
    type: "yesno",
    text: "Are there any unhealthy stressing factors in your household?",
    followUp: true,
    followUpQuestions: [
      {
        type: "yesno",
        text: "Are you currently, or have you recently experienced both mental or emotional abuse?",
        additionalHelp:
          "If you are in immediate danger, call 9-1-1. For anonymous, confidential help, 24/7, please call the National Domestic Violence Hotline at 1-800-799-7233. If you are a minor experiencing abuse, please call 1-800-422-4453",
        followUp: false,
        answer: null,
      },
    ],
    followUpSignal: true,
    answer: null,
  },
];

export default InitialQuestions;
