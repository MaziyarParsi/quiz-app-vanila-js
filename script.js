const START_BUTTON = document.getElementById("startButton")
const QUSTION_CONTAINER = document.getElementsByClassName("questionContainer")[0]
const QUESTION_TEXT = document.getElementById("question")
const ANSWER_BUTTONS = document.getElementById("answerButtons")
let randomQuestion, currentQuestionIndex

START_BUTTON.addEventListener("click", startQuiz)

function startQuiz() {
  console.log("hello")
  START_BUTTON.classList.add("hide")
  QUSTION_CONTAINER.classList.remove("hide")
  randomQuestion = QUESTIONS.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(randomQuestion[currentQuestionIndex])
}

function showQuestion(question) {
  QUESTION_TEXT.innerText = question.question
}

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
