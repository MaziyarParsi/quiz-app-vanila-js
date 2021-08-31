const QUESTIONS = [
  {
    question: " what is 2*2 ",
    answers: [
      { text: "4", correct: true },
      { text: "5", wrong: false },
      { text: "6", wrong: false },
      { text: "19", wrong: false },
    ],
  },
  {
    question: "who is the best JS teacher in the world?",
    answers: [
      { text: "josh", correct: false },
      { text: "Ehsan Gazar", correct: true },
      { text: "Dev ed", correct: false },
      { text: "Kevin powell", correct: false },
    ],
  },
  {
    question: "what is the best football team in london",
    answers: [
      { text: "arsenal", correct: false },
      { text: "fulham", correct: false },
      { text: "Cheslea,DUH!", correct: true },
      { text: "crystal pallace", correct: false },
    ],
  },
  {
    question: "what color is the sky?",
    answers: [
      { text: "red", correct: false },
      { text: "blue", correct: true },
      { text: "white", correct: false },
      { text: "black", correct: false },
    ],
  },
]

export { QUESTIONS }
