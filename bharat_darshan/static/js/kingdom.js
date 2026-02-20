document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("zoomImage");
  const captionText = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".close");

  let scale = 1;

  // Open modal for any link with class open-modal
  document.querySelectorAll(".open-modal").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const imageSrc = this.getAttribute("data-image");
      const caption = this.getAttribute("data-caption");

      modal.style.display = "block";
      modalImg.src = imageSrc;
      captionText.innerText = caption;

      scale = 1;
      modalImg.style.transform = "scale(1)";
    });
  });

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close when clicking outside image
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Scroll zoom
  if (modalImg) {
    modalImg.addEventListener("wheel", function (event) {
      event.preventDefault();

      if (event.deltaY < 0) {
        scale += 0.15;
      } else {
        scale -= 0.15;
      }

      if (scale < 1) scale = 1;
      if (scale > 4) scale = 4;

      modalImg.style.transform = "scale(" + scale + ")";
    });
  }

});
