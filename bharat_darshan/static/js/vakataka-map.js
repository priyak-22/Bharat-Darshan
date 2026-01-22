// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);
// ================================
// Vakataka Empire
// ================================
// Period: c. 250–500 CE
// Core: Central & eastern Deccan
// Capitals: Pravarapura (near modern Paithan), Nandivardhana
// Known for: Deccan power, Ajanta Caves patronage

// Ensure `map` is already initialized before loading this file

const vakatakaEmpireCoords = [
  // Northern Maharashtra (Pravarapura / Paithan region)
  [20.5, 75.5],   // Northern boundary
  [20.0, 76.5],   // Central Deccan
  [19.2, 77.3],   // Telangana
  [18.5, 78.2],   // Vidarbha (Nandivardhana)
  [18.0, 79.0],   // Eastern Deccan fringe
  [17.2, 79.5],   // Northern Telangana coast
  [16.8, 78.0],   // Western Deccan plateau
  [17.5, 77.0],   // Vidarbha western edge
  [18.2, 76.0],   // Northern boundary back
  [20.5, 75.5]    // Close polygon
];

// Vakataka territory polygon
const vakatakaEmpireLayer = L.polygon(vakatakaEmpireCoords, {
  color: 'darkgreen',
  fillColor: 'darkgreen',
  fillOpacity: 0.3,
  weight: 2
}).bindPopup(
  "<b>Vakataka Empire</b><br>" +
  "c. 250–500 CE<br>" +
  "Core: Central & Eastern Deccan<br>" +
  "Capital: Pravarapura / Nandivardhana"
);

// Major centers
const vakatakaPaithanMarker = L.marker([20.0, 76.5])
  .bindPopup("Pravarapura (Paithan) – Capital");

const vakatakaNandivardhanaMarker = L.marker([18.5, 78.2])
  .bindPopup("Nandivardhana – Capital & Vidarbha Center");

// Add to map
vakatakaEmpireLayer.addTo(map);
vakatakaPaithanMarker.addTo(map);
vakatakaNandivardhanaMarker.addTo(map);
