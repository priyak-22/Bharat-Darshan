// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ------------------ Indo-Greek Kingdom (core regions & boundaries) ------------------

const indoGreekCoords = [
  // Afghanistan – western frontier
  [35.3, 69.2],   // Kapisa (near Kabul)
  [34.9, 68.9],   // Kabul valley

  // Gandhara core
  [34.6, 71.8],   // Peshawar
  [34.2, 72.6],   // Swat Valley
  [33.75, 72.83], // Taxila (cultural & political hub)

  // Punjab – eastern expansion
  [32.8, 73.8],   // Northern Punjab
  [32.5, 74.5],   // Sagala (Sialkot)
  [31.9, 75.3],   // Central Punjab

  // Southern boundary (Indus basin limit)
  [30.6, 74.8],   // Upper Indus basin
  [30.9, 73.2],   // Indus plains

  // Return west (overlap zone with Indo-Scythians)
  [32.6, 72.4],   // Western Punjab
  [33.9, 71.4],   // Gandhara west

  // Close polygon
  [35.3, 69.2]
];

L.polygon(indoGreekCoords, {
  color: 'royalblue',
  fillColor: 'royalblue',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Indo-Greek Kingdom</b><br>" +
  "c. 180 BCE – 10 CE<br>" +
  "Core: Gandhara & Afghanistan<br>" +
  "Eastern reach: Punjab<br>" +
  "Southern limit: Indus basin"
)
.addTo(map);

// Key centers
L.marker([33.75, 72.83]).bindPopup("Taxila – Gandhara Hub").addTo(map);
L.marker([34.6, 71.8]).bindPopup("Peshawar – Gandhara Region").addTo(map);
L.marker([32.5, 74.5]).bindPopup("Sagala (Sialkot)").addTo(map);
