const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questConEl = document.getElementById('container-quest')
const questEl = document.getElementById('question')
const answersEl = document.getElementById('answer-btns')
const gameScore = 0;
var secondsLeft = 20;
var timeEl = document.getElementById("countdown");



///when start button is clicked, initialize quiz
startBtn.addEventListener('click', initQuiz)
startBtn.addEventListener('click', setTime)

//when next button is clicked, go to next question
nextBtn.addEventListener('click', () => {
    currentQuesIndex++
    setNextQues()
})


///function to initialize quiz
function initQuiz() {
    //// Will HIDE start button and SHOW hidden elements in container
    startBtn.classList.add('hidden');
    currentQuesIndex = 0;
    questConEl.classList.remove('hidden');
    setNextQues();
}


function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      //Calls function to end quiz
      endQuiz();
      return;
    }

  }, 1000);
}

function endQuiz() {
  timeEl.textContent = " ";
  startBtn.classList.remove('hidden')
  startBtn.innerText = 'Restart'
}

setTime();


function setNextQues() {
    resetBoard();
    showQuest(quizQuestion[currentQuesIndex]);
}

function showQuest(question) {
        questEl.innerText = question.question;
        question.answers.forEach( answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', userSelect)
            answersEl.appendChild(button);

        })
}

function resetBoard () {
    nextBtn.classList.add('hidden')

    /// "If there's a child inside the element, remove it"
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild);
    }
}

function userSelect (e) {
    const btnSelected = e.target 
    const correct = btnSelected.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(quizQuestion.length > currentQuesIndex + 1){
        nextBtn.classList.remove('hidden')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hidden')
    }
}

function setStatusClass(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    } 
}

function clearStatus (element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

const quizQuestion = [
    {
    question: "Which is NOT a fruit?",
    answers: [
        {text: 'Apple', correct: false },
        {text: 'Orange', correct: false },
        {text: 'Potato', correct: true },
        {text: 'Pineapple', correct: false }
        ]
    },

    {
    question: "Which country is in South America?",
    answers: [
        {text: "USA", correct: false},
        {text: "Chile", correct: true},
        {text: "Mexico", correct: false},
        {text: "China", correct: false}
        ]
    },

    {
    question: "What color is the sky?",
    answers: [
        {text: "Magenta", correct: false},
        {text: "Purple", correct: false},
        {text: "Red", correct: false},
        {text: "Blue", correct: true}
        ]
    },

    {
    question: "How many months have 28 days?",
    answers: [
        {text: " 1(Duhh)", correct: false},
        {text: "3", correct: false},
        {text: "6", correct: false},
        {text: "12", correct: true}
        ]
    }

]
