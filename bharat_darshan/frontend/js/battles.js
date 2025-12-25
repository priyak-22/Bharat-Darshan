/* =========================
   MAP INITIALIZATION
========================= */

const map = L.map('map', {
  center: [22.9734, 78.6569], // India center
  zoom: 5,
  minZoom: 4,
  maxZoom: 8
});

// Lock map bounds to India
map.setMaxBounds([
  [6, 68],   // South-West
  [37, 98]   // North-East
]);

/* =========================
   BASE TILE LAYER
========================= */
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    maxZoom: 19
}).addTo(map);






/* =========================
   MAP PANES (LAYER CONTROL)
========================= */

map.createPane('countryPane');
map.getPane('countryPane').style.zIndex = 400;

map.createPane('statePane');
map.getPane('statePane').style.zIndex = 410;

map.createPane('markerPane');
map.getPane('markerPane').style.zIndex = 450;

/* =========================
   INDIA INTERNATIONAL BORDER
========================= */

fetch('../data/india_border.json')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      pane: 'countryPane',
      style: {
        color: '#4b1e04',    // deep heritage brown
        weight: 3.2,
        dashArray: '8,6',
        fillOpacity: 0
      }
    }).addTo(map);
  })
  .catch(err => console.error('India border load error:', err));

/* =========================
   INDIA STATE BOUNDARIES
========================= */

fetch('../data/india_states.json')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      pane: 'statePane',
      style: {
        color: '#7b3f00',
        weight: 1.2,
        fillColor: '#f5deb3',
        fillOpacity: 0.25
      },
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(feature.properties.NAME_1, {
          sticky: true
        });
      }
    }).addTo(map);
  })
  .catch(err => console.error('State border load error:', err));

/* =========================
   CUSTOM MARKER ICON
========================= */

const battleIcon = L.icon({
  iconUrl: "../../Data/map_11788777.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -30]
});

/* =========================
   EVENTS DATA
========================= */

const events = [
    // Ancient
    { id: "maurya_seleucid", name: "Maurya–Seleucid Treaty (305 BCE)", coords: [33.6, 72.9], region: "Punjab", year: "305 BCE", summary: "Chandragupta Maurya and Seleucus Nicator treaty." },
    { id: "kalinga_war", name: "Kalinga War (261 BCE)", coords: [20.5, 85.9], region: "Odisha", year: "261 BCE", summary: "Ashoka's transformation after war." },

    // Classical & Early Medieval
    { id: "samudragupta_campaigns", name: "Samudragupta Campaigns", coords: [25.4, 81.8], region: "Prayagraj", year: "350 CE", summary: "Extensive conquests of Samudragupta." },
    { id: "huna_invasion", name: "Huna Invasions", coords: [34.1, 74.8], region: "Kashmir", year: "450 CE", summary: "Hunas invade north India." },

    // Sultanate
    { id: "tarain_1", name: "1st Battle of Tarain (1191)", coords: [29.11, 76.98], region: "Haryana", year: "1191 CE", summary: "Prithviraj vs Ghori." },
    { id: "tarain_2", name: "2nd Battle of Tarain (1192)", coords: [29.11, 76.98], region: "Haryana", year: "1192 CE", summary: "Ghori defeats Prithviraj." },

    // Mughal
    { id: "panipat_1", name: "1st Battle of Panipat (1526)", coords: [29.39, 76.98], region: "Haryana", year: "1526 CE", summary: "Babur defeats Lodi." },
    { id: "khanwa", name: "Battle of Khanwa (1527)", coords: [27.0, 75.7], region: "Rajasthan", year: "1527 CE", summary: "Babur defeats Rana Sanga." },
    { id: "panipat_2", name: "2nd Battle of Panipat (1556)", coords: [29.39, 76.98], region: "Haryana", year: "1556 CE", summary: "Akbar defeats Hemu." },
    { id: "haldighati", name: "Battle of Haldighati (1576)", coords: [24.6, 73.7], region: "Rajasthan", year: "1576 CE", summary: "Maharana Pratap vs Akbar." },

    // Mughal–Maratha Conflicts (17th Century)
{ id: "pratapgad", name: "Battle of Pratapgad (1659)", coords: [17.93, 73.57], region: "Maharashtra", year: "1659 CE", summary: "Shivaji defeats Afzal Khan." },

{ id: "kolhapur_1659", name: "Battle of Kolhapur (1659)", coords: [16.7, 74.24], region: "Maharashtra", year: "1659 CE", summary: "Shivaji wins against Bijapur forces." },

{ id: "surat_sack", name: "Sacking of Surat (1664)", coords: [21.17, 72.83], region: "Gujarat", year: "1664 CE", summary: "Shivaji raids Mughal port city." },

{ id: "purandar", name: "Battle/Treaty of Purandar (1665)", coords: [18.47, 73.68], region: "Maharashtra", year: "1665 CE", summary: "Shivaji signs treaty with Jai Singh." },

{ id: "sinhagad", name: "Battle of Sinhagad (1670)", coords: [18.36, 73.75], region: "Maharashtra", year: "1670 CE", summary: "Tanaji captures Sinhagad fort." },

{ id: "salher", name: "Battle of Salher (1672)", coords: [20.78, 74.2], region: "Maharashtra", year: "1672 CE", summary: "Marathas defeat Mughal forces." },

{ id: "sangamner", name: "Battle of Sangamner (1679)", coords: [19.57, 74.22], region: "Maharashtra", year: "1679 CE", summary: "Last battle fought by Shivaji's forces." },


// Anglo–Mysore Wars (1767–1799)
{
    id: "anglo_mysore_1",
    name: "1st Anglo-Mysore War (1767–1769)",
    coords: [12.97, 77.59],  // Bengaluru region
    region: "Karnataka",
    year: "1767–1769 CE",
    summary: "Hyder Ali defeats the British; Treaty of Madras signed."
},

{
    id: "anglo_mysore_2",
    name: "2nd Anglo-Mysore War (1780–1784)",
    coords: [12.30, 76.64],  // Mysuru region
    region: "Karnataka",
    year: "1780–1784 CE",
    summary: "Hyder Ali and Tipu Sultan fight British; ends with Treaty of Mangalore."
},

{
    id: "anglo_mysore_3",
    name: "3rd Anglo-Mysore War (1790–1792)",
    coords: [12.50, 76.90], 
    region: "Karnataka",
    year: "1790–1792 CE",
    summary: "Tipu Sultan defeated; surrender of two sons under Treaty of Seringapatam."
},

{
    id: "anglo_mysore_4",
    name: "4th Anglo-Mysore War (1799)",
    coords: [12.30, 76.65],  // Srirangapatna
    region: "Karnataka",
    year: "1799 CE",
    summary: "Tipu Sultan killed; British annex most of Mysore."
}
,
// Anglo–Maratha Wars (1775–1818)
{
    id: "anglo_maratha_1",
    name: "1st Anglo-Maratha War (1775–1782)",
    coords: [19.07, 72.88],  // Mumbai region
    region: "Maharashtra",
    year: "1775–1782 CE",
    summary: "Marathas defeat the British; Treaty of Salbai ends the war."
},

{
    id: "anglo_maratha_2",
    name: "2nd Anglo-Maratha War (1803–1805)",
    coords: [21.15, 79.08],  // Central India theatre (Nagpur region)
    region: "Maharashtra / Central India",
    year: "1803–1805 CE",
    summary: "British defeat Scindia, Bhonsle, and Holkar factions across India."
},

{
    id: "anglo_maratha_3",
    name: "3rd Anglo-Maratha War (1817–1818)",
    coords: [18.52, 73.85],  // Pune region
    region: "Maharashtra",
    year: "1817–1818 CE",
    summary: "Peshwa Bajirao II defeated; Maratha Empire ends; British gain control."
}
,
// Anglo–Sikh Wars (1845–1849)
{
    id: "anglo_sikh_1",
    name: "1st Anglo-Sikh War (1845–1846)",
    coords: [30.35, 76.45],  // Ferozeshah area (Punjab battlefield region)
    region: "Punjab",
    year: "1845–1846 CE",
    summary: "British defeat the Sikh Empire; Treaty of Lahore is signed."
},

{
    id: "anglo_sikh_2",
    name: "2nd Anglo-Sikh War (1848–1849)",
    coords: [31.33, 74.87],  // Lahore region
    region: "Punjab",
    year: "1848–1849 CE",
    summary: "Sikh resistance crushed; Punjab annexed into British India."
}
,
{
    id: "revolt_1857_main",
    name: "Revolt of 1857",
    coords: [28.61, 77.21],   // Delhi
    region: "Delhi / North India",
    year: "1857 CE",
    summary: "Major uprising against British rule; centers included Delhi, Kanpur, Lucknow, Jhansi, and Meerut."
}
,
{
    id: "partition_bengal_1905",
    name: "Partition of Bengal (1905)",
    coords: [22.57, 88.36],   // Kolkata region
    region: "Bengal",
    year: "1905 CE",
    summary: "Lord Curzon divides Bengal into East and West; triggers widespread Swadeshi Movement."
}
,
{
    id: "non_cooperation_1920",
    name: "Non-Cooperation Movement (1920)",
    coords: [28.61, 77.21],   // Delhi as national headquarters
    region: "All India",
    year: "1920 CE",
    summary: "Nationwide movement led by Mahatma Gandhi; boycott of British goods, schools, councils, and titles."
}
,
    // British Expansion
    { id: "plassey", name: "Battle of Plassey (1757)", coords: [23.8, 88.2], region: "Bengal", year: "1757 CE", summary: "British defeat Siraj ud-Daulah." },
    { id: "panipat_3", name: "3rd Battle of Panipat (1761)", coords: [29.3, 76.9], region: "Haryana", year: "1761 CE", summary: "Marathas vs Abdali." },
    { id: "buxar", name: "Battle of Buxar (1764)", coords: [25.5, 83.0], region: "Bihar", year: "1764 CE", summary: "British victory over Bengal-Nawab-Mughal alliance." },

    // Revolts & Movements
    { id: "santhal", name: "Santhal Revolt (1855)", coords: [24.3, 87.3], region: "Jharkhand", year: "1855 CE", summary: "Santhal uprising." },
    { id: "indigo", name: "Indigo Revolt (1859)", coords: [24.1, 88.5], region: "Bengal", year: "1859 CE", summary: "Farmers protest indigo planters." },
    { id: "revolt_1857", name: "Revolt of 1857", coords: [28.6, 77.2], region: "Delhi", year: "1857 CE", summary: "First War of Independence." },
    { id: "jallianwala", name: "Jallianwala Bagh Massacre (1919)", coords: [31.6, 74.9], region: "Punjab", year: "1919 CE", summary: "British massacre peaceful crowd." },
    { id: "dandi", name: "Dandi March (1930)", coords: [21.4, 72.6], region: "Gujarat", year: "1930 CE", summary: "Gandhi’s Salt March." },
    { id: "quit_india", name: "Quit India Movement (1942)", coords: [18.5, 73.8], region: "Pune", year: "1942 CE", summary: "Nationwide agitation demanding British exit." },

    // Independence
    { id: "independence", name: "Indian Independence (1947)", coords: [28.6, 77.2], region: "Delhi", year: "1947 CE", summary: "India becomes independent." },
];
/* =========================
   ADD MARKERS
========================= */

events.forEach(event => {
  L.marker(event.coords, {
    icon: battleIcon,
    pane: 'markerPane'
  })
    .addTo(map)
    .on('click', () => openPanel(event));
});

/* =========================
   INFO PANEL LOGIC
========================= */

const panel = document.getElementById("infoPanel");
const closeBtn = document.getElementById("closePanel");

closeBtn.onclick = () => {
  panel.setAttribute("aria-hidden", "true");
};

function openPanel(event) {
  panel.setAttribute("aria-hidden", "false");

  document.getElementById("battleTitle").textContent = event.name;
  document.getElementById("battleYear").textContent = "Year: " + event.year;
  document.getElementById("battleRegion").textContent = "Region: " + event.region;
  document.getElementById("battleSummary").textContent = event.summary;

  document.getElementById("learnMoreBtn").href =
    `battles-details.html?id=${event.id}`;
}
