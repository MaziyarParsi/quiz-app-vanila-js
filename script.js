import QUESTIONS from "./question.js"

const START_BUTTON = document.getElementById("startButton")
const QUSTION_CONTAINER = document.getElementsByClassName("questionContainer")[0]
const QUESTION_TEXT = document.getElementById("question")
const ANSWER_BUTTONS = document.getElementById("answerButtons")
const NEXT_BUTTON = document.getElementById("nextButton")
const SCORE_PARAGRAPH = document.getElementById("scoreParagraph")
let randomQuestion, currentQuestionIndex, score
START_BUTTON.addEventListener("click", startQuiz)
NEXT_BUTTON.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  score = 0
  START_BUTTON.classList.add("hide")
  QUSTION_CONTAINER.classList.remove("hide")
  randomQuestion = QUESTIONS.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  SCORE_PARAGRAPH.innerText = `Your score is : ${score}`
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
  setButtonDisabled()
  let correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  setScore(correct)
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

function setButtonDisabled() {
  Array.from(ANSWER_BUTTONS.children).forEach((button) => {
    button.disabled = true
  })
}
function setScore(correct) {
  if (correct) {
    SCORE_PARAGRAPH.innerText = `Your score is : ${++score}`
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
