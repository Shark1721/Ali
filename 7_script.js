const pages = document.querySelectorAll(".page");
let currentPage = 0;

function updatePage() {
    pages.forEach((page, index) => {
        page.style.display = index === currentPage ? "flex" : "none";
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
}

// Show the first page on load
updatePage();