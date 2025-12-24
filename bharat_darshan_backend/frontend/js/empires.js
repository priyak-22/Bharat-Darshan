document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".history-nav a");
  const sections = document.querySelectorAll(".grid-container");

  // Hide all except Ancient by default
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById("ancient").style.display = "grid";

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();

      // Remove 'active' class from all
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Hide all sections
      sections.forEach(sec => (sec.style.display = "none"));

      // Show the selected section based on text or custom ID
      const text = tab.textContent.trim();
      if (text === "Ancient History") {
        document.getElementById("ancient").style.display = "grid";
      } else if (text === "Medieval History") {
        document.getElementById("medieval").style.display = "grid";
      } else if (text === "Modern History") {
        document.getElementById("modern").style.display = "grid";
      }
    });
  });
});
