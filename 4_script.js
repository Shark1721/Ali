// List of 50 questions (Example)
const allQuestions = [
    { question: "Fill in the missing word: Sigma ____ on the wall", answer: "sigma" },
    { question: "Fill in the missing word: Who's the ____ of them all", answer: "skibidiest" },
    { question: "Is ANgel wiwiwi or minanu", answer: "wiwiwi" },
    { question: "Is Minonka wiwiwi oe minanu", answer: "minanu" },
    { question: "How many seasons of the year are there?", answer: "4" },
    { question: "What is the 1st season of the year called?", answer: "spring" },
    { question: "What is the 2nd season of the year called?", answer: "summer" },
    { question: "What is the last season of the year called?", answer: "winter" },
    { question: "Is Angela cute? (yes or no)", answer: "yes" },
    { question: "How old are you?", answer: "22" },
    { question: "What is Shark's favrite color?", answer: "purple" },
    { question: "What is the color of Angela's tail?", answer: "gray" },
    { question: "WHat is the color of Angela's eyes?", answer: "blue" },
    { question: "What is the color of Shark's eyes?", answer: "blue" },
    { question: "Are you awesomesauce? (yse or no)", answer: "yes" },
    { question: "Is Ali black? (yes or no)", answer: "yes" },
    { question: "Who was the first Prophet of Islam (Peace be upon him)?", answer: "Adam" },
    { question: "Which Prophet built the Ka'bah (Peace be upon him)?", answer: "Ibrahim" },
    { question: "Which Prophet (Peace be upon him) was known for his patience?", answer: "Ayyub" },
    { question: "Which Surah of the Quran was revealed in Mecca?", answer: "Al-Fatiha" },
    { question: "Which Prophet (Peace be upon him) parted the Red Sea?", answer: "Musa" },
    { question: "Which angel delivered the revelations to the Prophets (Peace be upon them)?", answer: "Jibril" },
    { question: "Who was the first Caliph of Islam?", answer: "Abu Bakr" },
    { question: "Who was the second Caliph of Islam?", answer: "Umar" },
    { question: "Which companion of Prophet Muhammad (Peace be upon him) is known as the Sword of Allah?", answer: "Khalid" },
    { question: "Who was the mother of Prophet Muhammad (Peace be upon him)?", answer: "Amina" },
    { question: "What is the holy book of Islam?", answer: "Quran" },
    { question: "What is the name of the night journey Prophet Muhammad (Peace be upon him) took?", answer: "Isra" },
    { question: "What is the name of the first mosque built in Medina?", answer: "Quba" },
    { question: "Which Surah of the Quran contains the verse of the Throne?", answer: "Al-Baqarah" },
    { question: "Who was the companion of Prophet Muhammad (Peace be upon him) who was known for his wisdom?", answer: "Ali" },
    { question: "Which battle did Prophet Muhammad (Peace be upon him) win in the year 2 AH?", answer: "Badr" },
    { question: "What does the word 'Islam' mean?", answer: "Submission" },
    { question: "What is the name of the city where Prophet Muhammad (Peace be upon him) migrated to?", answer: "Medina" },
    { question: "What is the name of the Prophet Muhammad's (Peace be upon him) daughter?", answer: "Fatimah" },
    { question: "Which Prophet (Peace be upon him) was swallowed by a whale?", answer: "Yunus" },
    { question: "Who was the Prophet Muhammad's (Peace be upon him) first wife?", answer: "Khadijah" },
    { question: "Who was the companion of Prophet Muhammad (Peace be upon him) who recorded the most Hadiths?", answer: "Aisha" },
    { question: "Which month is considered the holiest in Islam?", answer: "Ramadan" },
    { question: "Which Surah of the Quran is known as the heart of the Quran?", answer: "Ya-Sin" },
    { question: "Which companion of Prophet Muhammad (Peace be upon him) was the first to accept Islam?", answer: "Abu Bakr" },
    { question: "Which angel is known for taking the souls of the deceased?", answer: "Azrael" },
    { question: "What is the name of the place where Prophet Muhammad (Peace be upon him) received his first revelation?", answer: "Hira" },
    { question: "Who was the last Prophet (Peace be upon him) of Islam?", answer: "Muhammad" }
];

// List of 10 images
const allImages = [
    "Amman.avif",  // Add your image links here
    "Madaba.jpg",    // Example image 2
    "Blossom.jpeg",
    "B - 2 Spirit.jpg",
    "India.webp",
    "Mansaf.jpg",
    "Baklawa.jpg",
    "Courage.webp",
    "Snow.jpg",
    "Home.avif",
];

// Select 10 random questions
let questions = [];
let availableQuestions = [...allQuestions];
for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    questions.push(availableQuestions[randomIndex]);
    availableQuestions.splice(randomIndex, 1);
}

// Select 1 random image
const selectedImage = allImages[Math.floor(Math.random() * allImages.length)];
document.getElementById("quizImage").src = selectedImage;

// Set up initial game state
let currentQuestionIndex = 0;
let revealedBlocks = 0;
let finalQuestionActive = false;  // Track if final question is active

// Generate 10 blocks covering the image
const imageBlocks = document.getElementById("imageBlocks");
imageBlocks.innerHTML = ""; // Clear any previous blocks

for (let i = 0; i < 10; i++) {
    const block = document.createElement("div");
    block.classList.add("image-block");
    block.id = `block${i}`;
    imageBlocks.appendChild(block);
}

// Display the first question
displayQuestion();

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("questionText").textContent = questions[currentQuestionIndex].question;
    } else {
        showFinalQuestion();
    }
}

// Check the player's answer
function checkAnswer() {
    if (finalQuestionActive) return; // Prevent answering normal questions after final stage starts

    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("resultMessage").textContent = "✅ Correct!";
        revealBlock();
    } else {
        document.getElementById("resultMessage").textContent = "❌ Incorrect! Try the next question.";
    }

    currentQuestionIndex++;
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showFinalQuestion();
        }
    }, 1000);
    document.getElementById("answerInput").value = "";
}

// Reveal a random block
function revealBlock() {
    const remainingBlocks = Array.from(document.querySelectorAll(".image-block"))
        .filter(block => block.style.opacity !== "0");

    if (remainingBlocks.length > 0) {
        const randomBlock = remainingBlocks[Math.floor(Math.random() * remainingBlocks.length)];
        randomBlock.style.opacity = "0";
        revealedBlocks++;
    }
}

// Show the final question
function showFinalQuestion() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("finalQuestionContainer").classList.remove("hidden");
    finalQuestionActive = true;
}

// Check the final answer
function checkFinalAnswer() {
    const finalAnswer = document.getElementById("finalAnswerInput").value.trim().toLowerCase();
    const correctAnswer = selectedImage.split("/").pop().split(".")[0].toLowerCase(); // Extracts filename

    if (finalAnswer === correctAnswer) {
        document.getElementById("finalResultMessage").textContent = "🎉 Congratulations! You guessed the image correctly!";
    } else {
        document.getElementById("finalResultMessage").textContent = "❌ Incorrect! Try again.";
    }
}
