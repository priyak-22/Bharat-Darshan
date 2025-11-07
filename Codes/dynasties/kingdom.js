// dynasty.js

document.addEventListener("DOMContentLoaded", () => {
  // Handle Back Button
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      // Adjust path depending on your structure
      window.location.href = "../atlas.html";
    });
  }

  // Optional: Smooth scroll to top on page load
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Optional: Small visual interaction for cards
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
