// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ------------------ Kanva Dynasty (regional Magadha power) ------------------

const kanvaEmpireCoords = [
  // Core Magadha region
  [25.6, 84.9],   // Pataliputra (Patna)
  [25.4, 85.1],   // Nalanda region
  [25.1, 85.3],   // Gaya
  [24.9, 84.8],   // Southern Magadha fringe

  // Eastern influence (limited Bengal)
  [25.2, 86.6],   // Bhagalpur region
  [25.0, 87.4],   // Western Bengal fringe

  // Central India influence (Vidisha – coin finds)
  [23.5, 77.8],   // Vidisha (influence zone, not core)

  // Northern Gangetic plain limit
  [26.3, 84.2],   // North Bihar
  [26.1, 83.8],   // Eastern UP border

  // Return to Magadha
  [25.6, 84.9]    // Close polygon
];

L.polygon(kanvaEmpireCoords, {
  color: 'darkorange',
  fillColor: 'darkorange',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Kanva Dynasty</b><br>" +
  "c. 73–28 BCE<br>" +
  "Core: Magadha<br>" +
  "A small regional power after the Shungas"
)
.addTo(map);

// Capital marker
L.marker([25.6, 84.9])
  .bindPopup("Pataliputra – Kanva Capital")
  .addTo(map);
