document.addEventListener("DOMContentLoaded", function () {
    const puzzleBoard = document.getElementById("puzzle-board");
    const puzzlePieces = document.getElementById("puzzle-pieces");
    const resetButton = document.getElementById("reset");
    const showImageButton = document.getElementById("showImageButton");
    const changeImageButton = document.getElementById("changeImageButton");
    const imageModal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const closeModal = document.querySelector(".close");
    const imageGalleryContainer = document.getElementById("imageGalleryContainer");
    const imageGallery = document.getElementById("imageGallery");
    const congratsMessage = document.getElementById("congratsMessage");

    let imageLinks = [
        "images/Amman.avif",
        "images/Madaba.jpg",
        "images/Blossom.jpeg",
        "images/thumb-1920-684763.jpg",
        "images/Untitled240_20240814235224.png",
        "images/stardew-valley-map-of-valley.jpg",
        "images/Screenshot_20241221-110229_Minecraft.jpg",
        "images/Messenger_creation_B57FDA2A-CB4C-41E2-98BB-7841233C13FE.jpeg",
        "images/Screenshot_20240901-070511_Instagram.jpg",
        "images/Screenshot_20240726-172141_Instagram.jpg",
        "images/jordan-flag-free-png.png",
        "images/Screenshot_20240621-075921_Instagram.jpg",
        "images/IMG_20240927_184110_240.jpg",
        "images/20240819_195955.jpg",
        "images/81qkuWjKj6L.jpg",
        "images/B - 2 Spirit.jpg"
    ];

    let currentImageIndex = 0;
    let imageSrc = imageLinks[currentImageIndex];

    loadImage(imageSrc);

    showImageButton.addEventListener("click", () => {
        fullImage.src = imageSrc;
        imageModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        imageModal.style.display = "none";
    });

    changeImageButton.addEventListener("click", () => {
        imageGalleryContainer.style.display = "block";
        imageGallery.innerHTML = "";
        imageLinks.forEach((imgSrc) => {
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.alt = "Puzzle Image";
            imgElement.classList.add("gallery-thumbnail");
            imgElement.addEventListener("click", () => {
                imageSrc = imgSrc;
                loadImage(imageSrc);
                fullImage.src = imgSrc;
                imageModal.style.display = "block";
                imageGalleryContainer.style.display = "none";
            });
            imageGallery.appendChild(imgElement);
        });
    });

    resetButton.addEventListener("click", () => {
        loadImage(imageSrc);
    });

    function loadImage(image) {
        puzzleBoard.innerHTML = "";
        puzzlePieces.innerHTML = "";

        const img = new Image();
        img.src = image;
        img.onload = function () {
            let maxSize = 500;
            let imgWidth = img.width;
            let imgHeight = img.height;

            let aspectRatio = imgWidth / imgHeight;
            if (aspectRatio > 1) {
                imgWidth = maxSize;
                imgHeight = maxSize / aspectRatio;
            } else {
                imgHeight = maxSize;
                imgWidth = maxSize * aspectRatio;
            }

            const cols = 5;
            const rows = 4;
            const pieceWidth = imgWidth / cols;
            const pieceHeight = imgHeight / rows;

            puzzleBoard.style.width = imgWidth + "px";
            puzzleBoard.style.height = imgHeight + "px";
            puzzleBoard.style.gridTemplateColumns = `repeat(${cols}, ${pieceWidth}px)`;
            puzzleBoard.style.gridTemplateRows = `repeat(${rows}, ${pieceHeight}px)`;

            puzzlePieces.style.width = imgWidth + "px";
            puzzlePieces.style.gridTemplateColumns = `repeat(${cols}, ${pieceWidth}px)`;

            let pieces = [];

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const correctIndex = row * cols + col;
                    const slot = document.createElement("div");
                    slot.classList.add("piece-slot");
                    slot.dataset.index = correctIndex;
                    puzzleBoard.appendChild(slot);

                    const piece = document.createElement("div");
                    piece.classList.add("piece");
                    piece.style.width = pieceWidth + "px";
                    piece.style.height = pieceHeight + "px";
                    piece.style.backgroundImage = `url(${image})`;
                    piece.style.backgroundSize = `${imgWidth}px ${imgHeight}px`;
                    piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;

                    piece.draggable = true;
                    piece.dataset.index = correctIndex;
                    pieces.push(piece);
                }
            }

            pieces.sort(() => Math.random() - 0.5);
            pieces.forEach(piece => {
                puzzlePieces.appendChild(piece);
                piece.addEventListener("dragstart", dragStart);
            });

            document.querySelectorAll(".piece-slot").forEach(slot => {
                slot.addEventListener("dragover", dragOver);
                slot.addEventListener("drop", drop);
            });
        };
    }

    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.dataset.index);
        event.target.classList.add("dragging");
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const draggedIndex = event.dataTransfer.getData("text/plain");
        const draggedPiece = document.querySelector(`.piece[data-index="${draggedIndex}"]`);
        const targetSlot = event.target;

        if (!targetSlot.firstChild && targetSlot.dataset.index === draggedPiece.dataset.index) {
            targetSlot.appendChild(draggedPiece);
            draggedPiece.draggable = false;
            draggedPiece.classList.remove("dragging");
            draggedPiece.classList.add("placed");
            targetSlot.classList.add("placed");

            // Check if puzzle is completed
            checkCompletion();
        }
    }

    function checkCompletion() {
        const allSlots = document.querySelectorAll(".piece-slot");
        const allPieces = document.querySelectorAll(".piece.placed");

        if (allSlots.length === allPieces.length) {
            // Trigger confetti
            confetti();

            // Show congrats message
            congratsMessage.style.display = "block";
        }
    }
});
