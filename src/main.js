const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
    document.getElementById('p1').style.display = "block";
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .25)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
}

function selectAnswer(){


}

const questions = [
    {
        question: 'What is this?',
        answers: [
            { text: 'a quiz', correct: true},
            { text: 'a car', correct: false},
            { text: 'a tree', correct: false},
            { text: 'a puzzle', correct: false}
        ]
    }
]