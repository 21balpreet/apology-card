const card = document.querySelector('.card');
const flipSound = document.getElementById('flip-sound');
const backgroundMusic = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');
let currentPage = 1; // Start with the first page

// Function to show a specific page
function showPage(pageNumber) {
   const pages = document.querySelectorAll('.page');
   pages.forEach(page => page.style.display = 'none'); // Hide all pages
   const pageToShow = document.getElementById(`page${pageNumber}`);
   if (pageToShow) {
       pageToShow.style.display = 'flex'; // Show the requested page
       flipSound.currentTime = 0; // Reset sound to start
       flipSound.play(); // Play flip sound
       card.style.transform = `rotateY(${180 * (currentPage - 1)}deg)`; // Rotate card
   }
}

// Function to advance to the next page
function nextPage(pageNumber) {
   currentPage = pageNumber; // Update current page
   showPage(currentPage);
}

// Function to go back to the previous page
function prevPage(pageNumber) {
   currentPage = pageNumber; // Update current page
   showPage(currentPage);
}

// Initialize the card and background music
window.onload = () => {
   showPage(currentPage); // Show the first page
   backgroundMusic.play(); // Play background music on load
};

// Music toggle functionality
musicToggle.addEventListener('click', function () {
   if (backgroundMusic.paused) {
       backgroundMusic.play();
       musicToggle.textContent = "Pause Music";
   } else {
       backgroundMusic.pause();
       musicToggle.textContent = "Play Music";
   }
});

// Flip card functionality on click of front side
card.querySelector('.front').addEventListener('click', function () {
   flipSound.currentTime = 0; // Reset sound to start
   flipSound.play(); // Play flip sound
   card.style.transform = 'rotateY(180deg)'; // Flip to inner card
});
