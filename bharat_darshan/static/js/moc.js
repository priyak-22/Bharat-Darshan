const events = [
  { name:"Portuguese in India", period:"1498–17th century", tangible:"Fortresses, ports", intangible:"Maritime trade influence", why:"First European colonial power in India" },
  { name:"Dutch in India", period:"1602–18th century", tangible:"Trading posts", intangible:"Trade networks", why:"Influenced commerce and culture" },
  { name:"Danes in India", period:"1620–19th century", tangible:"Colonial settlements", intangible:"Trade practices", why:"Small colonial presence" },
  { name:"French in India", period:"1668–18th century", tangible:"Fortified cities", intangible:"Cultural influence", why:"Rival of British" },
  { name:"Anglo-French Conflicts", period:"1750–1763", tangible:"Battlefields", intangible:"Political treaties", why:"Determined colonial dominance" },
  { name:"Battle of Plassey", period:"1757", tangible:"Fortifications", intangible:"Political shift", why:"Start of British political control" },
  { name:"Battle of Buxar", period:"1764", tangible:"Battlefields", intangible:"British consolidation", why:"Secured Bengal under British" },
  { name:"British Expansion", period:"1765–1857", tangible:"Administrative buildings", intangible:"Colonial governance", why:"Company rule expansion" },
  { name:"Mughal Decline", period:"1707–1857", tangible:"Palaces & forts", intangible:"Political vacuum", why:"Enabled British dominance" },
  { name:"Bengal Swadeshi Movement", period:"1905–1911", tangible:"Pamphlets", intangible:"Nationalism", why:"Economic resistance" },
  { name:"Indian National Congress", period:"1885 onwards", tangible:"Meeting halls", intangible:"Political unity", why:"Organized freedom struggle" },
  { name:"Non-Cooperation Movement", period:"1920–1922", tangible:"Protests", intangible:"Civil resistance", why:"Mass participation" },
  { name:"Civil Disobedience Movement", period:"1930–1934", tangible:"Salt March", intangible:"Defiance of laws", why:"Challenged colonial authority" },
  { name:"Home Rule Movement", period:"1916–1918", tangible:"Meetings", intangible:"Political awareness", why:"Demand for self-rule" },
  { name:"Jallianwala Bagh", period:"1919", tangible:"Memorial site", intangible:"National outrage", why:"Turning point in struggle" },
  { name:"Quit India Movement", period:"1942", tangible:"Protests", intangible:"Mass uprising", why:"Final independence push" },
  { name:"Indian Independence", period:"1947", tangible:"Institutions", intangible:"Sovereignty", why:"End of British rule" }
];

let i = 0;

function load() {
  document.getElementById("eventName").innerText = events[i].name;
  document.getElementById("eventPeriod").innerText = events[i].period;
  document.getElementById("tangible").innerText = events[i].tangible;
  document.getElementById("intangible").innerText = events[i].intangible;
  document.getElementById("why").innerText = events[i].why;
}

function nextEvent() {
  i = (i + 1) % events.length;
  hideSections();
  load();
}

function prevEvent() {
  i = (i - 1 + events.length) % events.length;
  hideSections();
  load();
}

function showSection(id) {
  hideSections();
  document.getElementById(id).style.display = "block";
}

function hideSections() {
  document.getElementById("tangible").style.display = "none";
  document.getElementById("intangible").style.display = "none";
}

load();
