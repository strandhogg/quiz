const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

//startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    document.getElementById('p1').style.display = "block"; //unnecessary when line 7 works
    document.getElementById('start-btn').style.display = "none"; // -"-
    document.getElementsByClassName('startScreen')[0].style.display = "none"
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .25)
    currentQuestionIndex = 0
    //document.getElementById('panel').style.display = null
    //questionContainerElement.classList.remove('hide')
    //console.log(questions)
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

//TO-DO: Comment
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1)
    nextButton.classList.remove('hide')

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

questions = [
    {
        question: 'What is this?',
        answers: [
            { text: 'a quiz', correct: true},
            { text: 'a car', correct: false},
            { text: 'a tree', correct: false},
            { text: 'a puzzle', correct: false}
        ]
    },
    {
        question: 'Next',
        answers: [
            { text: 'a quiz', correct: true},
            { text: 'a car', correct: false},
            { text: 'a tree', correct: false},
            { text: 'a puzzle', correct: false}
        ]
    }
]