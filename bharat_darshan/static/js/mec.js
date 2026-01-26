const dynasties = [
  {
    name: "Mewar Kingdom",
    period: "7th–18th CE",
    tangible: "Fortresses like Chittorgarh and Kumbhalgarh, royal palaces, temples.",
    intangible: "Legend of Rajput valor, resistance to invaders, codes of honor.",
    why: "Symbol of bravery and resilience in North Indian history."
  },
  {
    name: "Chola Dynasty",
    period: "9th–13th CE",
    tangible: "Grand temples like Brihadeshwara, naval fleets, bronze sculptures.",
    intangible: "Maritime trade culture, temple rituals, Tamil literature.",
    why: "Expanded South Indian culture across Southeast Asia."
  }
];

let i = 0;

function load() {
  dynastyName.innerText = dynasties[i].name;
  dynastyPeriod.innerText = dynasties[i].period;
  tangible.innerText = dynasties[i].tangible;
  intangible.innerText = dynasties[i].intangible;
  why.innerText = dynasties[i].why;
}

function show(id) {
  tangible.style.display = "none";
  intangible.style.display = "none";
  document.getElementById(id).style.display = "block";
}

function nextDynasty() {
  i = (i + 1) % dynasties.length;
  load();
}

function prevDynasty() {
  i = (i - 1 + dynasties.length) % dynasties.length;
  load();
}

load();
