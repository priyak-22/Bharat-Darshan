const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const index = Math.floor(window.scrollY / window.innerHeight);
  cards.forEach((card,i)=>{
    card.classList.remove("active","previous");
    if(i === index) card.classList.add("active");
    else if(i < index) card.classList.add("previous");
  });
});