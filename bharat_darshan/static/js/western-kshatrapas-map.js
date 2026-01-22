// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ================================
// Western Kshatrapas (Saka rulers)
// ================================
// Period: c. 35–405 CE
// Core regions: Gujarat, Malwa, Western Maharashtra
// Capitals: Ujjain, Bharuch, Chaul
// Known for: Trade, coins, western Indian power

// Ensure `map` is already initialized before loading this file

const westernKshatrapasCoords = [
  // Gujarat core
  [23.5, 70.0],   // Saurashtra coast
  [22.8, 71.2],   // Central Gujarat
  [23.5, 72.5],   // Northern Gujarat

  // Malwa region
  [23.0, 74.5],   // Ujjain (capital)
  [23.4, 75.5],   // Malwa plateau

  // Western Maharashtra
  [19.8, 73.5],   // Konkan
  [20.5, 74.5],   // Northern Maharashtra
  [21.0, 72.8],   // Western Maharashtra coast

  // Return to Gujarat coast
  [23.5, 70.0]
];

// Polygon layer
const westernKshatrapasLayer = L.polygon(westernKshatrapasCoords, {
  color: 'indigo',
  fillColor: 'indigo',
  fillOpacity: 0.3,
  weight: 2
}).bindPopup(
  "<b>Western Kshatrapas (Saka rulers)</b><br>" +
  "c. 35–405 CE<br>" +
  "Capitals: Ujjain, Bharuch, Chaul<br>" +
  "Western Indian regional power"
);

// Key centers
const kshatrapaUjjainMarker = L.marker([23.18, 75.78])
  .bindPopup("Ujjain – Capital");

const kshatrapaBharuchMarker = L.marker([21.7, 72.95])
  .bindPopup("Bharuch – Trade Center");

const kshatrapaChaulMarker = L.marker([18.6, 73.3])
  .bindPopup("Chaul – Coastal Trade Port");

// Add layers to map
westernKshatrapasLayer.addTo(map);
kshatrapaUjjainMarker.addTo(map);
kshatrapaBharuchMarker.addTo(map);
kshatrapaChaulMarker.addTo(map);
