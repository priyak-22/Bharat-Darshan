
const eras = document.querySelectorAll('.era');
const circle = document.getElementById('circle');
const dynasty = document.getElementById('dynasty');

function positionEras(){
  const size = circle.offsetWidth;
  const center = size / 2;
  const radius = center - 40;
  const total = eras.length;

  eras.forEach((era,i)=>{
    const angle = (i/total) * 2 * Math.PI - Math.PI/2;
    era.style.left = center + radius * Math.cos(angle) + "px";
    era.style.top  = center + radius * Math.sin(angle) + "px";

    era.onclick = ()=>{
      eras.forEach(e=>e.classList.remove("active"));
      era.classList.add("active");
      dynasty.textContent = era.dataset.name;
      circle.style.transform = `rotate(${-i*(360/total)}deg)`;
    };
  });
}

window.onload = positionEras;
window.onresize = positionEras;