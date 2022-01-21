const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
     console.log('Started')
     setNextQuestion()
}
function setNextQuestion() {

}

function selectAnswer() {

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
    }
]