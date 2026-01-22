// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ------------------ Indo-Greek Kingdom (approximate extent) ------------------

// ------------------ Indo-Greek Kingdom (historically aligned extent) ------------------

// ------------------ Indo-Greek Kingdom (Leaflet-optimized extent) ------------------

const indoGreekCoords = [
  // Northwest origin & Gandhara
  [35.0, 71.5],   // Kabul–Gandhara corridor
  [34.6, 72.8],   // Swat valley
  [34.0, 73.4],   // Peshawar
  [33.75, 72.83], // Taxila (major capital)

  // Punjab core
  [32.8, 73.9],   // Northern Punjab
  [32.5, 74.5],   // Sagala (Sialkot) – Menander I
  [31.8, 75.4],   // Central Punjab

  // Eastern expansion (temporary)
  [30.9, 76.6],   // Haryana
  [29.9, 77.6],   // Mathura region (influence)

  // Southern limit (Indus basin only)
  [29.8, 75.0],   // Upper Indus basin
  [30.7, 73.2],   // Indus plains

  // Return west
  [32.8, 72.5],   // Western Punjab
  [34.2, 71.8],   // Gandhara west
  [35.0, 71.5]    // Close polygon
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
  "Major rulers: Menander I (Milinda)<br>" +
  "Hellenistic rule in NW India"
)
.addTo(map);

// Major capital / center marker (Taxila)
L.marker([33.75, 72.83])
  .bindPopup("Major Center: Taxila")
  .addTo(map);
