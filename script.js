const START_BUTTON = document.getElementById("startButton")
const QUSTION_CONTAINER = document.getElementsByClassName("questionContainer")[0]
const QUESTION_TEXT = document.getElementById("question")
const ANSWER_BUTTONS = document.getElementById("answerButtons")
const NEXT_BUTTON = document.getElementById("nextButton")
let randomQuestion, currentQuestionIndex

START_BUTTON.addEventListener("click", startQuiz)
NEXT_BUTTON.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  START_BUTTON.classList.add("hide")
  QUSTION_CONTAINER.classList.remove("hide")
  randomQuestion = QUESTIONS.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(randomQuestion[currentQuestionIndex])
}

function showQuestion(question) {
  QUESTION_TEXT.innerText = question.question
  question.answers.forEach((answer) => {
    let button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("button")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    ANSWER_BUTTONS.appendChild(button)
  })
}
function resetState() {
  clearStatusClass(document.body)
  NEXT_BUTTON.classList.add("hide")
  while (ANSWER_BUTTONS.firstChild) {
    ANSWER_BUTTONS.removeChild(ANSWER_BUTTONS.firstChild)
  }
}

function selectAnswer(event) {
  let selectedButton = event.target
  let correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(ANSWER_BUTTONS.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomQuestion.length > currentQuestionIndex + 1) {
    NEXT_BUTTON.classList.remove("hide")
  } else {
    START_BUTTON.innerText = "restart"
    START_BUTTON.classList.remove("hide")
    NEXT_BUTTON.classList.add("hide")
  }
}

function setStatusClass(elements, correct) {
  clearStatusClass(elements)
  if (correct) {
    elements.classList.add("correct")
  } else {
    elements.classList.add("wrong")
  }
}

function clearStatusClass(elements) {
  elements.classList.remove("correct")
  elements.classList.remove("wrong")
}

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
      { text: "blue", correct: false },
      { text: "white", correct: true },
      { text: "black", correct: false },
    ],
  },
]
