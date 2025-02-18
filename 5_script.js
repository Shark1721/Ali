document.getElementById("gift-box").addEventListener("click", function() {
    const cover = document.getElementById("gift-cover");
    const image = document.getElementById("gift-image");

    // Start the cover "falling off" animation
    cover.style.transform = "translateY(150px) rotate(10deg)";
    cover.style.opacity = "0"; // Make the cover disappear

    // After 1 second, show the image
    setTimeout(() => {
        image.style.display = "block";
    }, 1000);
});
