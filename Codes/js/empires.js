function openKingdom(page) {
  window.location.href = page;
}
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".history-nav a");
  const sections = {
    ancient: document.getElementById("ancient"),
    medieval: document.getElementById("medieval"),
    modern: document.getElementById("modern"),
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();
      // Remove active state from all tabs
      tabs.forEach(t => t.classList.remove("active"));

      // Add active state to clicked tab
      tab.classList.add("active");

      // Hide all sections
      Object.values(sections).forEach(sec => sec.classList.add("hidden"));

      // Show selected section
      const id = tab.textContent.toLowerCase().split(" ")[0]; // "ancient", "medieval", or "modern"
      if (sections[id]) sections[id].classList.remove("hidden");
    });
  });
});
