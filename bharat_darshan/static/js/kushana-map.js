// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ------------------ Kushan Empire (maximum expansion) ------------------

const kushanEmpireCoords = [
  // Western frontier (Bactria & Oxus region)
  [38.5, 66.0],   // Oxus (Amu Darya) region
  [36.8, 65.8],   // Northern Afghanistan
  [35.3, 69.2],   // Kapisa (major center)

  // Northern frontier (Central Asia / Silk Road)
  [39.0, 75.0],   // Western Tarim Basin
  [38.0, 73.5],   // Pamir corridor

  // Gandhara & Northwest India (southern expansion)
  [35.0, 71.5],   // Kabul–Gandhara corridor
  [34.6, 71.8],   // Peshawar
  [33.75, 72.83], // Taxila
  [32.8, 73.8],   // Punjab plains

  // Core Indian centers
  [32.5, 74.5],   // Punjab region
  [31.0, 75.8],   // Haryana–Punjab border
  [29.0, 77.7],   // Mathura (major Kushan capital)

  // Eastern frontier (Gangetic plain influence)
  [25.3, 82.9],   // Varanasi
  [25.6, 84.9],   // Pataliputra (influence, eastern limit)

  // Southern limit (no Deccan)
  [26.0, 78.5],   // Chambal–Bundelkhand region
  [28.2, 76.0],   // Rajasthan–Haryana fringe

  // Return northwest
  [31.8, 72.5],   // Indus plains
  [34.2, 70.8],   // Eastern Afghanistan
  [38.5, 66.0]    // Close polygon
];

L.polygon(kushanEmpireCoords, {
  color: 'brown',
  fillColor: 'brown',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Kushan Empire</b><br>" +
  "c. 1st–3rd century CE<br>" +
  "Peak under Kanishka I<br>" +
  "Linked Central Asia, India & Silk Road trade"
)
.addTo(map);

// Major centers
L.marker([35.3, 69.2]).bindPopup("Kapisa – Western Capital").addTo(map);
L.marker([33.75, 72.83]).bindPopup("Taxila – Gandhara Center").addTo(map);
L.marker([29.0, 77.7]).bindPopup("Mathura – Major Kushan Capital").addTo(map);
L.marker([25.3, 82.9]).bindPopup("Varanasi – Eastern Frontier").addTo(map);

