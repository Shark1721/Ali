const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("startButton");
const winMessage = document.getElementById("winMessage");

canvas.width = 500;
canvas.height = 400;

let plane = { x: 50, y: 200, width: 50, height: 30, velocity: 0 };
let gravity = 0.4;
let isPlaying = false;
let obstacles = [];
let frame = 0;
let gameOver = false;
let gameTimer = 0; // Timer for winning

// Load plane image
const planeImg = new Image();
planeImg.src = "plane.png"; // Add your own plane image

// Generate random skyscrapers
function createObstacle() {
    let width = 50;
    let height = Math.random() * (canvas.height - 150);
    let gap = 130;
    obstacles.push({ x: canvas.width, y: 0, width, height });
    obstacles.push({ x: canvas.width, y: height + gap, width, height: canvas.height - height - gap });
}

// Draw the game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw plane
    ctx.drawImage(planeImg, plane.x, plane.y, plane.width, plane.height);

    // Draw skyscrapers
    ctx.fillStyle = "gray";
    obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });
}

// Update game logic
function update() {
    if (!isPlaying) return;

    plane.velocity += gravity;
    plane.y += plane.velocity;

    if (frame % 90 === 0) createObstacle(); // Adjust speed of skyscraper creation

    obstacles.forEach(obs => {
        obs.x -= 3; // Move skyscrapers left

        // Check for collision
        if (
            plane.x < obs.x + obs.width &&
            plane.x + plane.width > obs.x &&
            plane.y < obs.y + obs.height &&
            plane.y + plane.height > obs.y
        ) {
            endGame();
        }
    });

    // Timer for winning condition
    gameTimer += 1 / 60; // Increase time in seconds (since update runs at ~60fps)
    if (gameTimer >= 40) {
        winGame();
        return;
    }

    draw();
    frame++;
    if (!gameOver) requestAnimationFrame(update);
}

// Plane movement
window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        plane.velocity = -5;
    }
});

// Start the game
startButton.addEventListener("click", () => {
    isPlaying = true;
    startButton.style.display = "none";
    plane.y = 200;
    obstacles = [];
    frame = 0;
    gameOver = false;
    gameTimer = 0; // Reset timer
    update();
});

// End game
function endGame() {
    isPlaying = false;
    gameOver = true;
    startButton.textContent = "You hit the tower. Try again";
    startButton.style.display = "block";
}

// Win game after 40 seconds
function winGame() {
    isPlaying = false;
    gameOver = true;
    winMessage.classList.remove("hidden");
}
