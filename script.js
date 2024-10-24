// Вопросы и ответы
const questions = [
    {
        question: "Как на македонском будет 'Здравствуйте'?",
        answers: ["Добар ден", "Здраво", "Пока", "Извините"],
        correct: 0
    },
    {
        question: "Какое слово означает 'Спасибо'?",
        answers: ["Благодарам", "Молам", "Да", "Здраво"],
        correct: 0
    },
    {
        question: "Как переводится слово 'Книга'?",
        answers: ["Книга", "Куче", "Човек", "Дом"],
        correct: 0
    },
    {
        question: "Как сказать 'Как дела?' на македонском?",
        answers: ["Како си?", "Што правиш?", "Добар ден", "Молам?"],
        correct: 0
    }
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");

// Показываем вопрос
function showQuestion() {
    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;
    
    answerButtons.forEach((button, index) => {
        button.textContent = questionData.answers[index];
        button.onclick = () => checkAnswer(index);
    });
}

// Проверка ответа
function checkAnswer(answerIndex) {
    const correctAnswer = questions[currentQuestion].correct;
    if (answerIndex === correctAnswer) {
        alert("Правильно!");
    } else {
        alert("Неправильно!");
    }
    
    // Следующий вопрос
    currentQuestion = (currentQuestion + 1) % questions.length;
    showQuestion();
}

// Инициализация первого вопроса
showQuestion();
