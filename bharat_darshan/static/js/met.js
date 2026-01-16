const eras = document.querySelectorAll('.era');
const circle = document.getElementById('circle');

const dynasty = document.getElementById('dynasty');
const period = document.getElementById('period');
const desc = document.getElementById('desc');
const learnMoreBtn = document.getElementById('learn-more');

let currentUrl = "";

function positionEras() {
  const size = circle.offsetWidth;
  const center = size / 2;
  const radius = center - 40;
  const total = eras.length;

  eras.forEach((era, i) => {
    const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
    era.style.left = center + radius * Math.cos(angle) + "px";
    era.style.top  = center + radius * Math.sin(angle) + "px";

    era.onclick = () => {
      eras.forEach(e => e.classList.remove("active"));
      era.classList.add("active");

      dynasty.textContent = era.dataset.name;
      period.textContent = era.dataset.period;
      desc.textContent = era.dataset.desc;

      // store URL safely
      currentUrl = era.dataset.url;

      circle.style.transform = `rotate(${-i * (360 / total)}deg)`;
    };
  });
}

// Learn more navigation
learnMoreBtn.onclick = () => {
  if (currentUrl) {
    window.location.href = currentUrl;
  }
};

// Default selection
window.onload = () => {
  positionEras();
  if (eras.length > 0) eras[0].click();
};

window.onresize = positionEras;
