// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);
// ================================
// Pala Empire
// ================================
// Period: c. 750–1174 CE
// Core: Bengal & Bihar
// Major rulers: Gopala, Dharmapala, Devapala
// Known for Buddhism & eastern Indian dominance

// Ensure `map` is already initialized before loading this file

const palaEmpireCoords = [
  // Core Bengal region
  [23.8, 90.4],   // Bengal delta (Dhaka region)
  [24.2, 89.6],   // Central Bengal
  [24.8, 88.3],   // Gauda / North Bengal
  [25.0, 87.7],   // Malda region

  // Bihar (Magadha influence)
  [25.4, 86.1],   // Bhagalpur
  [25.6, 85.1],   // Pataliputra
  [25.1, 84.9],   // Gaya

  // Eastern UP fringe (limited reach)
  [26.0, 83.2],   // Eastern Gangetic plain

  // Assam / northeast influence
  [26.2, 91.7],   // Kamarupa (influence)

  // Return south through Bengal
  [24.0, 90.0],
  [23.8, 90.4]    // Close polygon
];

// Pala Empire polygon
const palaEmpireLayer = L.polygon(palaEmpireCoords, {
  color: 'darkred',
  fillColor: 'darkred',
  fillOpacity: 0.3,
  weight: 2
}).bindPopup(
  "<b>Pala Empire</b><br>" +
  "c. 750–1174 CE<br>" +
  "Core: Bengal & Bihar<br>" +
  "Major Buddhist power of eastern India"
);

// Capital / major centers
const palaCapitalMarker = L.marker([25.0, 88.3])
  .bindPopup("Gauda – Major Pala Capital");

const palaNalandaMarker = L.marker([25.135, 85.445])
  .bindPopup("Nalanda – Pala-supported Buddhist University");

// Add layers to map
palaEmpireLayer.addTo(map);
palaCapitalMarker.addTo(map);
palaNalandaMarker.addTo(map);
