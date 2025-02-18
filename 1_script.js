let currentPage = 1;
const totalPages = 25;
const pages = document.querySelectorAll(".page");

function updatePages() {
    pages.forEach((page, index) => {
        if (index + 1 === currentPage) {
            page.style.display = "block";
            page.classList.remove("flipped");
        } else if (index + 1 < currentPage) {
            page.style.display = "block";
            page.classList.add("flipped");
        } else {
            page.style.display = "none";
        }
    });
}

// Initialize book display
updatePages();

// Next page function
document.getElementById("nextPage").addEventListener("click", function () {
    if (currentPage < totalPages) {
        currentPage++;
        updatePages();
    }
});

// Previous page function
document.getElementById("prevPage").addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage--;
        updatePages();
    }
});
