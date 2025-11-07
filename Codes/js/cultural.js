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
