const cloudName = "dvkp1tcnj";  // Your Cloudinary Cloud Name
const uploadPreset = "unsigned";  // Use an unsigned upload preset

const sectionsContainer = document.getElementById("sections-container");
const galleryContainer = document.getElementById("gallery-container");
const galleryTitle = document.getElementById("gallery-title");
const imageGrid = document.getElementById("image-grid");
const imageUpload = document.getElementById("image-upload");
const backButton = document.getElementById("back-btn");
const addSectionButton = document.getElementById("add-section-btn");

let sections = JSON.parse(localStorage.getItem("sections")) || {};
let currentSection = "";

// Save sections to local storage
function saveSections() {
    localStorage.setItem("sections", JSON.stringify(sections));
}

// Render sections
function renderSections() {
    sectionsContainer.innerHTML = "";
    Object.keys(sections).forEach((name) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("section");
        sectionDiv.textContent = name;

        // Click to open gallery
        sectionDiv.onclick = function () {
            openGallery(name);
        };

        // Right-click to delete section
        sectionDiv.oncontextmenu = function (e) {
            e.preventDefault();
            if (confirm(`Delete section "${name}"?`)) {
                delete sections[name];
                saveSections();
                renderSections();
            }
        };

        sectionsContainer.appendChild(sectionDiv);
    });
}

// Add new section
addSectionButton.addEventListener("click", () => {
    const sectionName = prompt("Enter section name (e.g., 2025-02-10)");
    if (!sectionName) return;
    if (sections[sectionName]) {
        alert("This section already exists!");
        return;
    }
    sections[sectionName] = [];
    saveSections();
    renderSections();
});

// Open gallery
function openGallery(section) {
    currentSection = section;
    galleryTitle.textContent = `Gallery - ${section}`;
    sectionsContainer.style.display = "none";
    galleryContainer.style.display = "block";
    renderGallery();
}

// Render gallery (Preserves aspect ratio)
function renderGallery() {
    imageGrid.innerHTML = "";
    if (sections[currentSection].length === 0) {
        imageGrid.innerHTML = "<p>No images yet. Upload some!</p>";
        return;
    }
    sections[currentSection].forEach((src, index) => {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

        const img = document.createElement("img");
        img.src = src;
        img.classList.add("image-item");

        // Right-click to delete image
        img.oncontextmenu = function (e) {
            e.preventDefault();
            if (confirm("Delete this image?")) {
                sections[currentSection].splice(index, 1);
                saveSections();
                renderGallery();
            }
        };

        imgContainer.appendChild(img);
        imageGrid.appendChild(imgContainer);
    });
}

// Upload images to Cloudinary
imageUpload.addEventListener("change", async (event) => {
    const files = event.target.files;
    if (files.length > 0 && currentSection) {
        for (let file of files) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", uploadPreset);

            try {
                const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                    method: "POST",
                    body: formData
                });
                const data = await response.json();
                sections[currentSection].push(data.secure_url);
                saveSections();
                renderGallery();
            } catch (error) {
                console.error("Upload failed:", error);
            }
        }
    }
});

// Back button
backButton.addEventListener("click", () => {
    galleryContainer.style.display = "none";
    sectionsContainer.style.display = "block";
});

// Load sections on start
renderSections();
