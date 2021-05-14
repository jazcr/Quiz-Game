const startBtn = document.getElementById('start-btn')
const questConEl = document.getElementById('container-quest')
const questEl = document.getElementById('question')
const answersEl = document.getElementById('answer-btns')

startBtn.addEventListener('click', initQuiz)

function initQuiz() {
    console.log('started');
    //// Will HIDE start button and SHOW hidden elements in container
    startBtn.classList.add('hidden');
    currentQuesIndex = 0;
    questConEl.classList.remove('hidden');
    setNextQues()
}

function setNextQues () {
    showQuest(currentQuesIndex++);
}

function showQuest(question) {
        questEl.innerText = question.question
}

function userSelect () {

}

let question = [
    {
    question: "Which is NOT a fruit?",
    answers: [
        {text: 'Apple', correct: false },
        {text: 'Orange', correct: false },
        {text: 'Potato', correct: true },
        {text: 'Pineapple', correct: false }
        ]
    }
]
