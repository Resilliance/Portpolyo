// Typing effect script
const typingText = document.getElementById('typing-text');
const messages = [
	"Welcome to My Portfolio", // EN (English)
	"Maligayang Pagdating sa aking Portfolio", // (Tagalog)
	"ようこそ、私のポートフォリオへ", // JA (Japanese)
	"Bienvenue à Mon Portfolio", // FR (French)
	"Bem-vindo ao Meu Portfólio", // PT (Portuguese)
	"मेरे पोर्टफोलियो में आपका स्वागत है", // HI (Hindi)
	"Bienvenido a Mi Portafolio", // ES (Spanish)
	"Välkommen till Min Portfölj", // SV (Swedish)
	"Willkommen in meinem Portfolio", // DE (German)
	"欢迎来到我的作品集", // ZH (Chinese simplified)
	"Добро пожаловать в моё портфолио", // RU (Russian)
	"환영합니다 내 포트폴리오에 오신 것을 환영합니다", // KO (Korean)
];
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
	const currentMessage = messages[messageIndex];
	const displayedText = currentMessage.substring(0, charIndex);

	typingText.textContent = displayedText;

	if (!isDeleting) {
		// Typing forward
		if (charIndex < currentMessage.length) {
			charIndex++;
			setTimeout(typeEffect, 100); // Typing speed
		} else {
			// Pause before deleting
			isDeleting = true;
			setTimeout(typeEffect, 1500); // Pause before deletion
		}
	} else {
		// Deleting backward
		if (charIndex > 0) {
			charIndex--;
			setTimeout(typeEffect, 50); // Deleting speed
		} else {
			// Move to the next message
			isDeleting = false;
			messageIndex = (messageIndex + 1) % messages.length; // Loop through messages
			setTimeout(typeEffect, 500); // Pause before typing next message
		}
	}
}

// Start the typing effect
typeEffect();



// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.classList.toggle('active', i === index);
	});
}

prevBtn.addEventListener('click', () => {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
});

// Initialize the first slide
showSlide(currentSlide);

function copyToClipboard(text) {
	navigator.clipboard.writeText(text).then(function() {
		alert('Copied to clipboard!');
	}, function(err) {
		alert('Could not copy text: ', err);
	});
}
