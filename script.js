// Animasi sederhana ketika halaman di-scroll

const cards = document.querySelectorAll(".menu-card, .review-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

cards.forEach((card) => {
    card.classList.add("hidden");
    observer.observe(card);
});