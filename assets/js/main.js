// Set the profile picture according to the GitHub username
const githubUsername = "KaPAcomnome"; // Replace with your GitHub username

// Select the profile image by ID
const profilePicture = document.getElementById("profile-picture");

// Update the image with the GitHub avatar
if (profilePicture) {
    profilePicture.src = `https://github.com/${githubUsername}.png`;
}

//----------------------------------------------

// Typing effect for the description
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("description");
    const text = "MAPPER, ARTIST, MODDER & SOURCE ENJOYER.";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Typing speed (100ms per letter)
        }
    }

    textElement.textContent = ""; // Clear text before starting
    typeEffect(); // Start effect on page load
});

//----------------------------------------------

let currentIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}