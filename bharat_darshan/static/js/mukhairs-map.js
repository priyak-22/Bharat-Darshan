// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);
// ================================
// Maukhari (Mukharis) Dynasty


const maukhariEmpireCoords = [
  // Core region around Kannauj
  [27.1, 79.9],   // Kannauj (capital)
  [26.9, 80.3],   // Central UP
  [26.5, 80.8],   // Eastern UP
  [26.3, 81.2],   // Prayagraj region

  // Eastern influence (towards Magadha border)
  [25.9, 82.0],   // Eastern Gangetic plain
  [26.2, 82.6],   // Bihar–UP fringe

  // Western limit
  [26.8, 79.2],   // Western UP
  [27.3, 78.6],   // Upper Ganga plain

  // Northern limit
  [27.8, 79.4],   // Rohilkhand region

  // Close polygon
  [27.1, 79.9]
];

// Maukhari territory polygon
const maukhariEmpireLayer = L.polygon(maukhariEmpireCoords, {
  color: 'olive',
  fillColor: 'olive',
  fillOpacity: 0.3,
  weight: 2
}).bindPopup(
  "<b>Maukhari Dynasty</b><br>" +
  "c. 6th century CE<br>" +
  "Capital: Kannauj<br>" +
  "Middle Gangetic regional power"
);

// Capital marker
const maukhariCapitalMarker = L.marker([27.1, 79.9])
  .bindPopup("Kannauj – Maukhari Capital");

// Add to map
maukhariEmpireLayer.addTo(map);
maukhariCapitalMarker.addTo(map);
