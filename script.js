const START_BUTTON = document.getElementById("startButton")
const QUSTION_CONTAINER = document.getElementsByClassName("questionContainer")[0]

START_BUTTON.addEventListener("click", startQuiz)

function startQuiz() {
  console.log("hello")
  START_BUTTON.classList.add("hide")
  QUSTION_CONTAINER.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {}

function selectAnswer() {}

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
]
