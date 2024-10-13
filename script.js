// script.js
const sharkData = [
    {
        name: "Great White Shark",
        info: "The great white shark is a species of shark known for its size and fearsome reputation.",
        image: "images/great-white-shark.jpg"
    },
    {
        name: "Tiger Shark",
        info: "Tiger sharks are known for their distinct stripes and diverse diet.",
        image: "images/tiger-shark.jpg"
    },
    {
        name: "Hammerhead Shark",
        info: "Hammerhead sharks are known for their unique head shape and hunting abilities.",
        image: "images/hammerhead-shark.jpg"
    },
    {
        name: "Whale Shark",
        info: "The whale shark is the largest fish in the sea and is gentle despite its size.",
        image: "images/whale-shark.jpg"
    },
    {
        name: "Bull Shark",
        info: "Bull sharks are known for their aggressive nature and adaptability to various environments.",
        image: "images/bull-shark.jpg"
    }
];

let currentCardIndex = 0;

// Function to generate the shark cards
function generateCards() {
    const cardWrapper = document.getElementById('cardWrapper');

    sharkData.forEach(shark => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${shark.name}</h2>
            <p>${shark.info}</p>
            <img src="${shark.image}" alt="${shark.name}">
        `;
        cardWrapper.appendChild(card);
    });
}

// Function to update the active card based on scroll
function updateCards() {
    const cardWrapper = document.getElementById('cardWrapper');
    const cards = document.querySelectorAll('.card');

    // Calculate the offset for the current card
    const offset = -currentCardIndex * (300 + 40); // Width of card + margin

    // Update the transform property to shift cards
    cardWrapper.style.transform = `translateX(${offset}px)`;

    // Set opacity of cards
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentCardIndex) {
            card.classList.add('active'); // Add active class to current card
        }
    });
}

// Listen for scroll events
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll down
        currentCardIndex = (currentCardIndex + 1) % sharkData.length;
    } else {
        // Scroll up
        currentCardIndex = (currentCardIndex - 1 + sharkData.length) % sharkData.length;
    }
    updateCards(); // Update the active card display
});

// Initialize the cards on page load
generateCards();
updateCards(); // Update the initial card display
