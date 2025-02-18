const questions = [
    {
        question: "What is the most civilized country?",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 0  // Index for "Czechia" as the correct answer
    },
    {
        question: "You love people from this place!",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 5  // Index for "Israel" as the correct answer
    },
    {
        question: "Let's take the plane and see the towers!",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 7  // Index for "USA" as the correct answer
    },
    {
        question: "Now let's see what Harry Potter is doing.",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 8  // Index for "United Kingdom" as the correct answer
    },
    {
        question: "Please, stop invading this country.",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 9  // Index for "Germany" as the correct answer
    },
    {
        question: "A famous painter was born here.",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 10  // Index for "Austria" as the correct answer
    },
    {
        question: "You would love to live in this place!",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 1  // Index for "India" as the correct answer
    },
    {
        question: "Let's get rid of this country.",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 11  // Index for "France" as the correct answer
    },
    {
        question: "斯基比迪",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 3  // Index for "China" as the correct answer
    },
    {
        question: "Who has the least amount of rights (no, not women)?",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 4  // Index for "North Korea" as the correct answer
    },
    {
        question: "The N live here (southernmost country)",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 6  // Index for "South Africa" as the correct answer
    },
    {
        question: "Most sauce country?",
        answers: [
            "Czechia", "India", "Jordan", "China", "North Korea", "Israel", "South Africa", "USA", "United Kingdom", "Germany", "Austria", "France"
        ],
        correctAnswerIndex: 2  // Index for "Jordan" as the correct answer
    }
];

let currentQuestionIndex = 0;
let isQuizFinished = false; // Flag to track if the quiz is finished

// Load the current question
function loadQuestion() {
    if (isQuizFinished) {
        // Show a message when quiz is finished
        document.getElementById("question").textContent = "Congratulations! You've completed the quiz.";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("result").textContent = "";
        return;  // Stop further processing
    }

    const questionData = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const resultElement = document.getElementById("result");

    // Clear previous result
    resultElement.textContent = "";

    // Display the question
    questionElement.textContent = questionData.question;

    // Display the answers
    answersElement.innerHTML = ""; // Clear previous answers
    questionData.answers.forEach((answer, index) => {
        const answerOption = document.createElement("div");
        answerOption.classList.add("answer-option");

        const inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "answer";
        inputElement.value = answer;
        inputElement.id = `answer-${index}`;

        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `answer-${index}`);
        labelElement.textContent = answer;

        answerOption.appendChild(inputElement);
        answerOption.appendChild(labelElement);
        answersElement.appendChild(answerOption);
    });
}

// Check the selected answer
document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const resultElement = document.getElementById("result");
        const selectedAnswerText = selectedAnswer.value;
        const questionData = questions[currentQuestionIndex];

        // Check if the selected answer is correct
        if (selectedAnswerText === questionData.answers[questionData.correctAnswerIndex]) {
            resultElement.textContent = "Correct! 🎉";
            // Move to the next question
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                // Load the next question
                loadQuestion();
            } else {
                // All questions are done, mark the quiz as finished
                isQuizFinished = true;
                loadQuestion();  // Call loadQuestion to display the final message
            }
        } else {
            resultElement.textContent = "Incorrect. Try again! 😞";
        }
    } else {
        alert("Please select an answer.");
    }
});

// Load the first question when the page loads
loadQuestion();
