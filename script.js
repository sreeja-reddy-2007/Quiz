const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: "Which operator is used to assign a value?",
        options: ["=", "==", "===", "!="],
        answer: "="
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    optionsEl.innerHTML = '';
    currentQuiz.options.forEach(option => {
        const li = document.createElement('li');
        li.innerText = option;
        li.addEventListener('click', selectAnswer);
        optionsEl.appendChild(li);
    });
}

function selectAnswer(e) {
    const selected = e.target.innerText;
    if(selected === quizData[currentQuestion].answer) {
        score++;
    }
    Array.from(optionsEl.children).forEach(li => li.removeEventListener('click', selectAnswer));
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizEnd();
    }
});

function quizEnd() {
    questionEl.innerText = "Quiz Completed!";
    optionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
    resultEl.innerText = `Your Score: ${score} / ${quizData.length}`;
}

// Initial load
loadQuestion();
