

// Function used by other buttons (like opening a dynasty page)
function openKingdom(page) {
  window.location.href = page;
}

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll to top on page load
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Subtle hover effect for info cards
  const cards = document.querySelectorAll(".info-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});
