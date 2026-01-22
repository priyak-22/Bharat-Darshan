// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ================================
// Maitraka Empire (Valabhi Kingdom)
// ================================



const maitrakaEmpireCoords = [
  // Core Saurashtra (Kathiawar Peninsula)
  [22.6, 72.9],   // Valabhi (capital)
  [22.9, 71.8],   // Central Saurashtra
  [22.5, 70.8],   // Western Saurashtra coast
  [21.9, 70.4],   // Southern Kathiawar coast

  // Northern Gujarat
  [23.4, 72.6],   // North Gujarat
  [23.7, 72.0],   // Gujarat–Rajasthan fringe

  // Eastern boundary (Malwa border)
  [23.2, 73.8],   // Eastern Gujarat

  // Southern coastal limit
  [21.7, 72.4],   // Arabian Sea coast

  // Close polygon
  [22.6, 72.9]
];

// Maitraka Empire polygon
const maitrakaEmpireLayer = L.polygon(maitrakaEmpireCoords, {
  color: 'teal',
  fillColor: 'teal',
  fillOpacity: 0.3,
  weight: 2
}).bindPopup(
  "<b>Maitraka Empire (Valabhi Kingdom)</b><br>" +
  "c. 475–776 CE<br>" +
  "Capital: Valabhi<br>" +
  "Regional power in Saurashtra & Gujarat"
);

// Capital marker
const maitrakaCapitalMarker = L.marker([22.6, 72.9])
  .bindPopup("Valabhi – Maitraka Capital");

// Add layers to map
maitrakaEmpireLayer.addTo(map);
maitrakaCapitalMarker.addTo(map);
