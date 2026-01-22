// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ================================
// Saka (Indo-Scythian) Territories
// ================================
// Period: c. 1st century BCE – 4th century CE
// Major rulers: Maues, Azes, Western Kshatrapas
// Core regions: Sindh, Gujarat, Malwa, NW India

// Ensure `map` is already initialized before loading this file

const sakaEmpireCoords = [
  // Northwest frontier (Indus & Gandhara fringe)
  [34.0, 72.5],   // Gandhara fringe
  [33.2, 73.5],   // Upper Indus region

  // Sindh core
  [27.8, 68.9],   // Lower Indus (Sindh)
  [26.5, 69.0],   // Central Sindh

  // Western India expansion
  [24.8, 70.6],   // Kutch region
  [23.5, 70.0],   // Saurashtra coast
  [22.8, 71.5],   // Central Gujarat

  // Malwa & Western Kshatrapa core
  [23.0, 75.8],   // Ujjain (major Saka center)
  [23.4, 76.5],   // Malwa plateau

  // Northern limit (Rajasthan)
  [26.5, 74.5],   // Rajasthan plains
  [28.0, 73.5],   // NW Rajasthan

  // Return via Indus
  [30.0, 71.0],   // Indus upper basin
  [34.0, 72.5]    // Close polygon
];

// Saka territory polygon
const sakaEmpireLayer = L.polygon(sakaEmpireCoords, {
  color: 'slateblue',
  fillColor: 'slateblue',
  fillOpacity: 0.3,
  weight: 2
}).bindPopup(
  "<b>Saka (Indo-Scythian) Territories</b><br>" +
  "c. 1st BCE – 4th CE<br>" +
  "Major centers: Ujjain, Sindh, Gujarat<br>" +
  "Western Kshatrapa dominance"
);

// Key centers
const sakaUjjainMarker = L.marker([23.18, 75.78])
  .bindPopup("Ujjain – Western Kshatrapa Capital");

const sakaSindhMarker = L.marker([27.7, 68.9])
  .bindPopup("Lower Indus – Early Saka Base");

// Add to map
sakaEmpireLayer.addTo(map);
sakaUjjainMarker.addTo(map);
sakaSindhMarker.addTo(map);
