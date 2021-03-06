/*adopted code from WEB Dev Simplified*/
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const exitButton = document.getElementById('exit-btn')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
/**
 * my code
 */
const instructionElement = document.getElementById('instruction');
const scoreElement = document.getElementById('score');
/**
 * adopted from WEB Dev Simplified
 */
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
/**
 * my code
 */
exitButton.addEventListener('click', exitGame); 
/**
 * adopted from WEB Dev Simplified
 */
function startGame() {
     startButton.classList.add('hide');
     shuffledQuestions = questions.sort(() => Math.random() - .5);
     currentQuestionIndex = 0;
     questionContainerElement.classList.remove('hide');
     setNextQuestion();
     instructionElement.classList.add('hide');
     resetScore ();
     
}
function setNextQuestion() {
     resetState();
     showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
     questionElement.innerText = question.question;
     question.answers.forEach(answer =>{
         const button = document.createElement('button');
         button.innerText = answer.text;
         button.classList.add('btn');
         if (answer.correct) {
             button.dataset.correct = answer.correct;
         }
         button.addEventListener('click',selectAnswer);
         answerButtonsElement.appendChild(button);
     });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    exitButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
/**
 * selectAnswer function with incrementScore and incrementWrongAnswer
 */

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if(correct){
        incrementScore();
    }else {
        incrementWrongAnswer() ;
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
       startButton.innerText = 'Restart';
       startButton.classList.remove('hide');       
       exitButton.innerText = 'Exit';
       exitButton.classList.remove('hide');
    }
    
}
/**
 * Gets current score from the DOM and increments by 1 adopted from Love Math project Code Institute
 */
function incrementScore() {
      let oldScore = parseInt(document.getElementById("score").innerText);
      document.getElementById("score").innerText = ++oldScore;
}
/**
 * Gets current tally of incorrect answers score from the DOM and increments by 1 adopted from Love Math project Code Institute
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
/**
 * my code exitGame function to exit game when you prees exit game 
 */
function exitGame() {
    startButton.addEventListener('click', startGame);
    startButton.innerText = 'Start';
    questionContainerElement.classList.add('hide');
    exitButton.classList.add('hide');
    instructionElement.classList.remove('hide');
}
/** 
 * my code resetScore function to reset to scores 
*/

function resetScore (){
    document.getElementById("score").innerText = "0";
    document.getElementById("incorrect").innerText ="0";
}
/**
 * my questions 
 */
const questions = [
    {
        question: 'What is the capital of Iceland?',
        answers: [
            { text: 'Reykjav??k', correct: true },
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
            { text: 'Reykjav??k', correct: false },
            { text: 'Stockholm', correct: false},
            { text: 'Oslo', correct: false},
            { text: 'Copenhagen', correct: true }
        ]
    },
    {
        question: 'Which is the 2nd smallest country in the World?',
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

];