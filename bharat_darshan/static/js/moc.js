const events = [
  { name:"Portuguese in India", period:"1498–17th century", 
    tangible:[{img:"images/portuguese_fort.jpg", text:"Fortresses and ports"}], 
    intangible:[{img:"images/portuguese_trade.jpg", text:"Maritime trade influence"}] },

  { name:"Dutch in India", period:"1602–18th century", 
    tangible:[{img:"images/dutch_post.jpg", text:"Trading posts"}], 
    intangible:[{img:"images/dutch_trade.jpg", text:"Trade networks"}] },

  { name:"Danes in India", period:"1620–19th century", 
    tangible:[{img:"images/danish_settlement.jpg", text:"Colonial settlements"}], 
    intangible:[{img:"images/danish_trade.jpg", text:"Trade practices"}] },

  { name:"French in India", period:"1668–18th century", 
    tangible:[{img:"images/french_fort.jpg", text:"Fortified cities"}], 
    intangible:[{img:"images/french_culture.jpg", text:"Cultural influence"}] },

  { name:"Anglo-French Conflicts", period:"1750–1763", 
    tangible:[{img:"images/battlefield.jpg", text:"Battlefields"}], 
    intangible:[{img:"images/political_treaties.jpg", text:"Political treaties"}] },

  { name:"Battle of Plassey", period:"1757", 
    tangible:[{img:"images/plassey_fort.jpg", text:"Fortifications"}], 
    intangible:[{img:"images/political_shift.jpg", text:"Political shift"}] },

  { name:"Battle of Buxar", period:"1764", 
    tangible:[{img:"images/buxar.jpg", text:"Battlefields"}], 
    intangible:[{img:"images/british_consolidation.jpg", text:"British consolidation"}] },

  { name:"British Expansion", period:"1765–1857", 
    tangible:[{img:"images/admin_building.jpg", text:"Administrative buildings"}], 
    intangible:[{img:"images/colonial_governance.jpg", text:"Colonial governance"}] },

  { name:"Mughal Decline", period:"1707–1857", 
    tangible:[{img:"images/mughal_palace.jpg", text:"Palaces & forts"}], 
    intangible:[{img:"images/political_vacuum.jpg", text:"Political vacuum"}] },

  { name:"Indian Independence", period:"1947", 
    tangible:[{img:"images/independence_buildings.jpg", text:"Institutions"}], 
    intangible:[{img:"images/sovereignty.jpg", text:"Sovereignty"}] }
];

let i = 0;
let tIndex = 0;
let itIndex = 0;

function load() {
  const e = events[i];
  document.getElementById("eventName").innerText = e.name;
  document.getElementById("eventPeriod").innerText = e.period;

  tIndex = 0;
  itIndex = 0;

  loadTangible();
  loadIntangible();
  hideSections(); // hide both at start
}

function loadTangible() {
  const item = events[i].tangible[tIndex];
  document.getElementById("tangibleImg").src = item.img;
  document.getElementById("tangibleText").innerText = item.text;
}

function loadIntangible() {
  const item = events[i].intangible[itIndex];
  document.getElementById("intangibleImg").src = item.img;
  document.getElementById("intangibleText").innerText = item.text;
}

function nextTangible() {
  tIndex = (tIndex + 1) % events[i].tangible.length;
  loadTangible();
}

function nextIntangible() {
  itIndex = (itIndex + 1) % events[i].intangible.length;
  loadIntangible();
}

function showSection(id) {
  hideSections();
  document.getElementById(id).style.display = "block";
}

function hideSections() {
  document.getElementById("tangible").style.display = "none";
  document.getElementById("intangible").style.display = "none";
}

function nextEvent() {
  i = (i + 1) % events.length;
  load();
}

function prevEvent() {
  i = (i - 1 + events.length) % events.length;
  load();
}

// Initialize page
load();
