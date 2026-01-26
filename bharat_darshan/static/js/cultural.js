
// IntersectionObserver for fade-in animation
const slides = document.querySelectorAll(".slide");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.5 }
);

slides.forEach(slide => observer.observe(slide));

// Handle Back Button
document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'atlas.html';
});

// Optional: Search functionality
const searchInput = document.querySelector('.search-box input');
const cards = document.querySelectorAll('.heritage-card');

if (searchInput) {
  searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
}


