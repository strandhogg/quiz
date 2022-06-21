const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionCounterElement = document.getElementById('questionCounter')


let shuffledQuestions, currentQuestionIndex

//startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    console.log("test")
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    document.getElementById("startScreen").style.display = 'none';
    document.getElementById("quizScreen").style.display = 'block';

    console.log('Started')
    //foreach questions as question --> question.answer.sort....
    //shuffledQuestions = questions.sort(() => Math.random() - .25)
    currentQuestionIndex = 0
    //console.log(shuffledQuestions)
    

    setNextQuestion()

}

function setNextQuestion(){
    //resetState()
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question){
    if(currentQuestionIndex <= 22){
    questionCounterElement.innerText = currentQuestionIndex+1+'.Question'
}else{
    endGame()
}
    questionElement.innerText = question.question
    counter = 1;
    question.answers.forEach(answer => {
        const button = document.getElementById('op'+counter)
        button.innerText = answer.text
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        //const button = document.createElement('button')
        //button.innerText = answer.text
        //if (answer.correct){
        //    button.dataset.correct = answer.correct
        //}
       
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        counter++
      
    })
}

//TO-DO: Comment
function resetState(){
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
   // if(shuffledQuestions.length > currentQuestionIndex + 1)

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

function endGame(){
    document.getElementById("quizScreen").style.display = 'none';
    document.getElementById("endScreen").style.display = 'block';
    
}
