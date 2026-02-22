document.addEventListener("DOMContentLoaded", function() {

    const eras = document.querySelectorAll('.era');
    const circle = document.getElementById('circle');
    const dynasty = document.getElementById('dynasty');
    const period = document.getElementById('period');
    const desc = document.getElementById('desc');
    const learnMore = document.getElementById('learn-more');

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
                period.textContent = era.dataset.period;
                desc.textContent = era.dataset.desc;

                // Update Learn More button dynamically
                learnMore.href = era.dataset.url;

                circle.style.transform = `rotate(${-i*(360/total)}deg)`;
            };
        });

        // Set the first era as active on page load
        const firstEra = eras[0];
        firstEra.classList.add("active");
        dynasty.textContent = firstEra.dataset.name;
        period.textContent = firstEra.dataset.period;
        desc.textContent = firstEra.dataset.desc;
        learnMore.href = firstEra.dataset.url; // <-- initial button URL
    }

    positionEras();
    window.onresize = positionEras;

});

const tooltip = document.getElementById("floating-tooltip");

document.querySelectorAll(".era").forEach(era => {

  era.addEventListener("mouseenter", (e) => {
    tooltip.innerHTML = `<strong>${era.dataset.name}</strong><br>${era.dataset.period}`;
    tooltip.style.opacity = "1";
  });

  era.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.clientX + 15 + "px";
    tooltip.style.top = e.clientY - 10 + "px";
  });

  era.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });

});
