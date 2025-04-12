const situations = [
    { text: "You find a lost cat on the street.", choices: [
        { text: "Take it home and care for it.", awesome: 10, evil: 0 },
        { text: "Ignore it and walk away.", awesome: 2, evil: 2 },
        { text: "Find its owner.", awesome: 8, evil: 0 },
        { text: "Take it to the shelter.", awesome: 9, evil: 0 },
        { text: "Give it food and leave it.", awesome: 6, evil: 0 }
    ] },
    { text: "Your friend is feeling sad.", choices: [
        { text: "Comfort them and listen.", awesome: 10, evil: 0 },
        { text: "Tell them to stop being sad.", awesome: 1, evil: 5 },
        { text: "Buy them a gift.", awesome: 8, evil: 0 },
        { text: "Make a joke to cheer them up.", awesome: 7, evil: 1 },
        { text: "Ignore them.", awesome: 0, evil: 10 }
    ] },
    { text: "You see a person looking for money on the ground.", choices: [
        { text: "Give them some.", awesome: 3, evil: 7 },
        { text: "Laugh at them.", awesome: 2, evil: 8 },
        { text: "Ignore them.", awesome: 1, evil: 1 },
        { text: "Offer to help them search.", awesome: 8, evil: 0 },
        { text: "Tell them they are a jew.", awesome: 6, evil: 2 }
    ] },
    { text: "You have to study for an exam.", choices: [
        { text: "Study 2 weeks before.", awesome: 6, evil: 2 },
        { text: "Study a few days before.", awesome: 10, evil: 0 },
        { text: "Study 2 days before.", awesome: 8, evil: 1 },
        { text: "Study 1 day before.", awesome: 3, evil: 7 },
        { text: "Don't study.", awesome: 0, evil: 10 }
    ] },
    { text: "Your friend needs help with their homework.", choices: [
        { text: "Tell them to do it alone.", awesome: 0, evil: 10 },
        { text: "Help as much as you can.", awesome: 10, evil: 0 },
        { text: "Ignore them.", awesome: 1, evil: 9 },
        { text: "Try to help but not much.", awesome: 7, evil: 4 },
        { text: "Admit you don’t understand either.", awesome: 6, evil: 2 }
    ] },
    { text: "What would you do during an apocalypse?", choices: [
        { text: "Try to survive in your house.", awesome: 7, evil: 2 },
        { text: "Kys.", awesome: 4, evil: 5 },
        { text: "Hide in the shopping center.", awesome: 8, evil: 1 },
        { text: "Rescue as many animals as possible.", awesome: 10, evil: 0 },
        { text: "Stay behind and accept fate.", awesome: 0, evil: 10 }
    ] },
    { text: "Your friend asks to play Stardew Valley but you are busy.", choices: [
        { text: "Set a time when you won't be busy.", awesome: 7, evil: 3 },
        { text: "Tell them you're too tired.", awesome: 2, evil: 8 },
        { text: "Leave everything and play.", awesome: 10, evil: 0 },
        { text: "Tell them you can’t right now.", awesome: 4, evil: 5 },
        { text: "Ignore them.", awesome: 0, evil: 10 }
    ] },
    { text: "You are hungry and there's no food at home.", choices: [
        { text: "Stay hungry.", awesome: 1, evil: 10 },
        { text: "Go and buy some food.", awesome: 10, evil: 0 },
        { text: "Try to find some food at home.", awesome: 4, evil: 6 },
        { text: "Complain to a friend for no reason.", awesome: 2, evil: 5 },
        { text: "Eat kitty food.", awesome: 8, evil: 2 }
    ] },
    { text: "You feel eepy but had plans with your friends.", choices: [
        { text: "Tell them you are busy.", awesome: 1, evil: 9 },
        { text: "Fight the eepiness.", awesome: 10, evil: 0 },
        { text: "Apologize and reschedule.", awesome: 9, evil: 0 },
        { text: "Go to eep without telling them anything.", awesome: 0, evil: 10 },
        { text: "Tell them you’re eepy and then eep.", awesome: 4, evil: 5 }
    ] },
    { text: "Your friend has something exciting to tell you later.", choices: [
        { text: "Say 'Who asked?'.", awesome: 0, evil: 10 },
        { text: "Get excited too and listen happily.", awesome: 10, evil: 0 },
        { text: "Forget about it.", awesome: 0, evil: 7 },
        { text: "Listen but not care.", awesome: 2, evil: 8 },
        { text: "Tell them to shut up.", awesome: 0, evil: 10 }
    ] },
    { text: "You can visit one country/city.", choices: [
        { text: "Czech Republic.", awesome: 7, evil: 1 },
        { text: "Mecca.", awesome: 10, evil: 0 },
        { text: "India.", awesome: 1, evil: 10 },
        { text: "Switzerland.", awesome: 10, evil: 0 },
        { text: "France.", awesome: 1, evil: 9 }
    ] },
    { text: "You are given an envelope that says Do not open until 2050.", choices: [
        { text: "Throw it away", awesome: 0, evil: 7 },
        { text: "Open immediately ", awesome: 3, evil: 9 },
        { text: "Give it to someone else", awesome: 4, evil: 6 },
        { text: "Wait till 2050", awesome: 10, evil: 0 },
        { text: "Try to look though the paper of the envelope without opening it", awesome: 5, evil: 5 }
    ] },
    { text: "You want a hidden room in your house. What would be inside?", choices: [
        { text: "Lego collection", awesome: 9, evil: 0 },
        { text: "Slaves", awesome: 0, evil: 10 },
        { text: "Your Batman suit", awesome: 9, evil: 0 },
        { text: "A gaming setup", awesome: 0, evil: 0 },
        { text: "Full of kittiez", awesome: 10, evil: 0 }
    ] },
    { text: "You are invited to a dinner with a famous person. Who would you choose?", choices: [
        { text: "The Rock", awesome: 10, evil: 0 },
        { text: "D. Trump", awesome: 1, evil: 8 },
        { text: "A. Hitler", awesome: 0, evil: 10 },
        { text: "That guy who streams tanks and ppl games", awesome: 10, evil: 0 },
        { text: "No one", awesome: 5, evil: 5 }
    ] },
    { text: "You got your phone stolen. Police found 5 suspects. Who would you blame?", choices: [
        { text: "The white person", awesome: 3, evil: 8 },
        { text: "No one, since you didn't see who did it.", awesome: 10, evil: 0 },
        { text: "The black person", awesome: 3, evil: 8 },
        { text: "The Chinese person", awesome: 3, evil: 8 },
        { text: "The black person but with your phone in his hands", awesome: 10, evil: 0 }
    ] },
    { text: "You are stuck in an elevator with a stranger for hours. What would you talk with them about?", choices: [
        { text: "Kittiez", awesome: 10, evil: 0 },
        { text: "Planes", awesome: 7, evil: 0 },
        { text: "Courage the Cowardly Dog", awesome: 8, evil: 0 },
        { text: "Insult them", awesome: 0, evil: 10 },
        { text: "Nothing", awesome: 5, evil: 5 }
    ] },
    { text: "You overhear someone doing a crime", choices: [
        { text: "Tell them it's bad", awesome: 7, evil: 1 },
        { text: "Call the police", awesome: 10, evil: 0 },
        { text: "Stop them (You are Batman)", awesome: 10, evil: 0 },
        { text: "Help them", awesome: 0, evil: 10 },
        { text: "Watch and do nothing ", awesome: 5, evil: 8 }
    ] },
    { text: "You can eat only 1 kind of food for the rest of your life. What would you choose?", choices: [
        { text: "Chicken biryani", awesome: 7, evil: 1 },
        { text: "Mansaf", awesome: 10, evil: 0 },
        { text: "Chocolate", awesome: 6, evil: 2 },
        { text: "Watermelon", awesome: 2, evil: 8 },
        { text: "Ice cream", awesome: 5, evil: 5 }
    ] },
    { text: "You receive an anonymous threatening message", choices: [
        { text: "Ignore it", awesome: 1, evil: 1 },
        { text: "Send some back", awesome: 10, evil: 0 },
        { text: "Report it", awesome: 10, evil: 2 },
        { text: "Block the person", awesome: 10, evil: 0 },
        { text: "Get very scared", awesome: 0, evil: 5 }
    ] },
    { text: "You find out your neighbor is keeping a tyger illegally", choices: [
        { text: "Report it to the police", awesome: 10, evil: 0 },
        { text: "Pet the kitty", awesome: 10, evil: 0 },
        { text: "Donate money for kitty food", awesome: 6, evil: 2 },
        { text: "Help him make it legal", awesome: 10, evil: 0 },
        { text: "Steal the kitty and keep it", awesome: 4, evil: 5 }
    ] },
    { text: "You are seated in front of a loud classmate during an exam", choices: [
        { text: "Ask to change seats", awesome: 10, evil: 1 },
        { text: "Be loud too so he asks to change seats", awesome: 7, evil: 0 },
        { text: "Ignore it", awesome: 2, evil: 2 },
        { text: "Ask him to shut up", awesome: 8, evil: 2 },
        { text: "Leave the exam", awesome: 2, evil: 8 }
    ] },
    { text: "You see someone struggling to carry groceries", choices: [
        { text: "Help them carry it", awesome: 10, evil: 0 },
        { text: "Do nothing", awesome: 4, evil: 5 },
        { text: "Laugh at them", awesome: 0, evil: 8 },
        { text: "Tell them to stop buying too much", awesome: 0, evil: 7 },
        { text: "Give them your bags so they carry more", awesome: 0, evil: 10 }
    ] },
    { text: "You hear a strange noise downstairs in the nigth", choices: [
        { text: "Go check what it was", awesome: 9, evil: 0 },
        { text: "Do nothing", awesome: 1, evil: 3 },
        { text: "Send someone to check it", awesome: 3, evil: 8 },
        { text: "Send a kitty to check it", awesome: 0, evil: 10 },
        { text: "Go check it with a kitty", awesome: 10, evil: 0 }
    ] },
    { text: "You see a child being bullied at school", choices: [
        { text: "Ignore it", awesome: 2, evil: 5 },
        { text: "Bully the bullies", awesome: 10, evil: 0 },
        { text: "Bully the child too", awesome: 0, evil: 10 },
        { text: "Report it to a trusted adult", awesome: 10, evil: 0 },
        { text: "Watch and laugh", awesome: 1, evil: 6 }
    ] },
    { text: "You witness someone shoplifting in a store", choices: [
        { text: "Steal too", awesome: 0, evil: 10 },
        { text: "Call him the N word", awesome: 7, evil: 1 },
        { text: "Report him immediatelly", awesome: 10, evil: 0 },
        { text: "Tell him to stop", awesome: 8, evil: 1 },
        { text: "Ignore it", awesome: 5, evil: 5 }
    ] },
    { text: "You can live in different time period", choices: [
        { text: "1938-1945 (Germany)", awesome: 2, evil: 8 },
        { text: "With Dinosaurs and mamooths", awesome: 7, evil: 1 },
        { text: "When the Prophet Muhammad (peace be upon him) lived", awesome: 1, evil: 0 },
        { text: "This time period", awesome: 3, evil: 1 },
        { text: "When slavery was legal", awesome: 3, evil: 6 }
    ] },
    { text: "You find a wallet full of cash with no ID inside.", choices: [
        { text: "Go to the police", awesome: 10, evil: 0 },
        { text: "Keep the money", awesome: 0, evil: 10 },
        { text: "Try to find the owner by yourself", awesome: 5, evil: 2 },
        { text: "Leave it on the ground", awesome: 2, evil: 7 },
        { text: "Donate the money", awesome: 5, evil: 8 }
    ] },
    { text: "In a bus, would you sit next to:", choices: [
        { text: "A black person with a kitty.", awesome: 10, evil: 0 },
        { text: "The autistic kid (you are autistic too).", awesome: 8, evil: 1 },
        { text: "A white gay person.", awesome: 2, evil: 6 },
        { text: "A black gay person.", awesome: 2, evil: 7 },
        { text: "An indian.", awesome: 0, evil: 10 }
    ] }
];

let numQuestions = 10;
let selectedSituations = [];
let currentQuestionIndex = 0;
let awesomeScore = 0;
let evilScore = 0;
let selectedChoiceIndex = -1;

// UI elements
const setupContainer = document.getElementById("setup");
const gameContainer = document.getElementById("game-container");
const situationText = document.getElementById("situation-text");
const choicesContainer = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const startBtn = document.getElementById("start-btn");
const questionCountInput = document.getElementById("questionCount");

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

startBtn.onclick = () => {
    numQuestions = Math.min(Math.max(parseInt(questionCountInput.value), 1), situations.length);
    selectedSituations = shuffle([...situations]).slice(0, numQuestions);
    setupContainer.style.display = "none";
    gameContainer.style.display = "block";
    currentQuestionIndex = 0;
    awesomeScore = 0;
    evilScore = 0;
    displayQuestion();
};

function displayQuestion() {
    if (currentQuestionIndex >= selectedSituations.length) {
        showResult();
        return;
    }
    selectedChoiceIndex = -1;
    nextBtn.disabled = true;

    const situation = selectedSituations[currentQuestionIndex];
    situationText.textContent = situation.text;
    choicesContainer.innerHTML = "";

    situation.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.textContent = choice.text;
        btn.classList.add("choice-btn");
        btn.onclick = () => selectChoice(btn, index, choice.awesome, choice.evil);
        choicesContainer.appendChild(btn);
    });
}

function selectChoice(button, index, awesome, evil) {
    // Reset previous selection
    document.querySelectorAll(".choice-btn").forEach(btn => btn.classList.remove("selected"));

    // Highlight selected button
    button.classList.add("selected");

    // Update scores
    selectedChoiceIndex = index;
    awesomeScore += awesome;
    evilScore += evil;

    // Enable next button
    nextBtn.disabled = false;
}

nextBtn.onclick = () => {
    if (selectedChoiceIndex === -1) return; // Prevent moving forward without a selection

    currentQuestionIndex++;
    displayQuestion();
};

function getCombinedMessage(awesomePercentage, evilPercentage) {
    // Calculate the total percentage of both awesome and evil
    const totalPercentage = awesomePercentage + evilPercentage;

    // Ensure the total adds up to 100%
    const finalAwesomePercentage = Math.min(awesomePercentage, 100);
    const finalEvilPercentage = Math.min(evilPercentage, 100);

    // If the combined percentage exceeds 100 due to rounding, adjust it
    const combinedPercentage = Math.min(finalAwesomePercentage + finalEvilPercentage, 100);

    let message = "";

    // Extreme cases for awesomePercentage
    if (finalAwesomePercentage >= 100) {
        message = "You are the awesomest little minanu! Truly, an awesomesauce blossom wiwiwi. A sigma.";
    } else if (finalAwesomePercentage >= 99) {
        message = "Almost, still a little minanu!";
    } else if (finalAwesomePercentage >= 95) {
        message = "Aaaamazingggg, you are so blossom";
    } else if (finalAwesomePercentage >= 90) {
        message = "You are a Minanu";
    } else if (finalAwesomePercentage >= 80) {
        message = "You're so skibidi";
    } else if (finalAwesomePercentage >= 70) {
        message = "Skibidi, but could be more awesome";
    } else if (finalAwesomePercentage >= 60) {
        message = "A sigma would score more awesomeness.";
    } else if (finalAwesomePercentage >= 50) {
        message = "You cannot be considered a Minanu.";
    } else if (finalAwesomePercentage >= 40) {
        message = "Minanus decide better!";
    } else if (finalAwesomePercentage >= 30) {
        message = "Quite naughty, aren't you?";
    } else if (finalAwesomePercentage >= 20) {
        message = "You must be an Evil Weewi!";
    } else if (finalAwesomePercentage >= 10) {
        message = "Not nice, Minanu would be disappointed.";
    } else if (finalAwesomePercentage >= 1) {
        message = "You are not a sigma.";
    } else {
        message = "You are an Evil Weevil.";
    }

    // Return the message
    return message;
}

function showResult() {
    // Calculate percentages for awesome and evil
    const awesomePercentage = (awesomeScore / (awesomeScore + evilScore)) * 100;
    const evilPercentage = (evilScore / (awesomeScore + evilScore)) * 100;

    // Ensure percentages add up to 100
    const finalAwesomePercentage = Math.min(awesomePercentage, 100);
    const finalEvilPercentage = Math.min(evilPercentage, 100);

    // Generate the message based on the percentages
    const message = getCombinedMessage(finalAwesomePercentage, finalEvilPercentage);

    // Display the result
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `
        <h2>Results</h2>
        <p>Awesome Score: ${Math.round(finalAwesomePercentage)}%</p>
        <p>Evil Score: ${Math.round(finalEvilPercentage)}%</p>
        <p>${message}</p>
    `;
}

