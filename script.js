const START_BUTTON = document.getElementById("startButton")
const QUSTION_CONTAINER = document.getElementsByClassName("questionContainer")[0]
const RANDOM_QUESTION,CURRENT_QUESTION_INDEX

START_BUTTON.addEventListener("click", startQuiz)

function startQuiz() {
  console.log("hello")
  START_BUTTON.classList.add("hide")
  QUSTION_CONTAINER.classList.remove("hide")
  RANDOM_QUESTION= QUESTIONS.sort(()=>Math.random()- 0.5)
  CURRENT_QUESTION_INDEX=0
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
