const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const exitButton = document.getElementById('exit-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const instructionElement = document.getElementById('instruction')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
exitButton.addEventListener('click', exitGame)

function startGame() {
     startButton.classList.add('hide')
     shuffledQuestions = questions.sort(() => Math.random() - .5)
     currentQuestionIndex = 0
     questionContainerElement.classList.remove('hide')
     setNextQuestion()
     instructionElement.classList.add('hide')
     
}
function setNextQuestion() {
     resetState()
     showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
     questionElement.innerText = question.question
     question.answers.forEach(answer =>{
         const button = document.createElement('button')
         button.innerText = answer.text
         button.classList.add('btn')
         if (answer.correct) {
             button.dataset.correct = answer.correct
         }
         button.addEventListener('click',selectAnswer)
         answerButtonsElement.appendChild(button)
     })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    exitButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
       startButton.innerText = 'Restart'
       startButton.classList.remove('hide')
       exitButton.innerText = 'Exit'
       exitButton.classList.remove('hide')
    }
    
}
/**
 * Gets current score from the DOM and increments by 1 
 */
function incrementScore() {
      let oldScore = parceInt(document.getElementById("score").innerText);
      document.getElementById("score").innerText = ++oldScore;
}
/**
 * Gets current tally of incorrect answers score from the DOM and increments by 1 
 */
function incrementWrongAnswer() {
    let oldScore = parceInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function exitGame() {
    startButton.addEventListener('click', startGame)
    questionContainerElement.classList.add('hide')
    exitButton.classList.add('hide')
}

const questions = [
    {
        question: 'What is the capital of Iceland?',
        answers: [
            { text: 'Reykjavík', correct: true },
            { text: 'Stockholm', correct: false},
            { text: 'Oslo', correct: false},
            { text: 'Copenhagen', correct: false}
        ]
    },
    {
        question: 'Which is the longest river in the World?',
        answers: [
            { text: 'Amazon', correct: false },
            { text: 'Nile', correct: true},
            { text: 'Yangtze', correct: false},
            { text: 'Mississippi-Missouri', correct: false}
        ]
    },
    {
        question: 'Which is the highest mountain in the World?',
        answers: [
            { text: 'Kangchenjunga', correct: false},
            { text: 'K2', correct: false},
            { text: 'Everest', correct: true},
            { text: 'Lhotse', correct: false}
        ]
    },
    {
        question: 'What is the largest ocean basin on Earth?',
        answers: [
            { text: 'Southern Ocean', correct: false },
            { text: 'Atlantic Ocean', correct: false},
            { text: 'Indian Ocean', correct: false},
            { text: 'Pacific Ocean', correct: true}
        ]
    },
    {
        question: 'Which is the capital of Austria?',
        answers: [
            { text: 'Vienna', correct: true },
            { text: 'Berlin', correct: false},
            { text: 'Oslo', correct: false},
            { text: 'London', correct: false}
        ]
    },
    {
        question: 'Which is the worlds largest forest?',
        answers: [
            { text: 'Congo Basin', correct: false },
            { text: 'Amazon rainforest', correct: true },
            { text: 'New Guinea rainforest', correct: false},
            { text: 'Sundaland rainforest', correct: false}
        ]
    },
    {
        question: 'Which is the longest river in Europe?',
        answers: [
            { text: 'Ural', correct: false },
            { text: 'Danube', correct: false},
            { text: 'Volga', correct: true },
            { text: 'Dnieper', correct: false}
        ]
    },
    {
        question: 'What is the capital of Denmark?',
        answers: [
            { text: 'Reykjavík', correct: false },
            { text: 'Stockholm', correct: false},
            { text: 'Oslo', correct: false},
            { text: 'Copenhagen', correct: true }
        ]
    },
    {
        question: 'Which is the 2 smallest country in the World?',
        answers: [
            { text: 'Monaco', correct: true },
            { text: 'Vatican City', correct: false},
            { text: 'Nauru', correct: false},
            { text: 'Tuvalu', correct: false}
        ]
    },
    {
        question: 'Which is the biggest country in the World?',
        answers: [
            { text: 'Canada', correct: false },
            { text: 'Russia', correct: true},
            { text: 'China', correct: false},
            { text: 'United States', correct: false}
        ]
    },
    {
        question: 'What is the deepest lake in the World?',
        answers: [
            { text: 'Lake Bunyonyi', correct: false },
            { text: 'Tanganyika', correct: false},
            { text: 'Baikal', correct: true },
            { text: 'Caspian Sea', correct: false}
        ]
    },
    {
        question: 'What is the biggest state in the United States by size?',
        answers: [
            { text: 'Montana', correct: false },
            { text: 'Texas ', correct: false},
            { text: 'California', correct: false},
            { text: 'Alaska', correct: true}
        ]
    },

]