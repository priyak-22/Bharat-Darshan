// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ------------------ Huna Empire (Alchon Huns – approximate extent) ------------------

const hunaEmpireCoords = [
  [35.0, 71.0],   // Kabul–Gandhara region (origin area)
  [34.5, 73.5],   // Kashmir
  [33.8, 74.8],   // Jammu region
  [32.5, 75.5],   // Punjab plains
  [31.5, 76.8],   // Eastern Punjab
  [30.5, 77.5],   // Haryana
  [29.2, 78.0],   // Western Uttar Pradesh
  [28.5, 79.0],   // Central UP (raiding influence)
  [27.8, 77.8],   // Mathura region
  [27.2, 76.5],   // Eastern Rajasthan
  [26.5, 75.0],   // Rajasthan fringe
  [27.8, 73.8],   // Thar fringe (limit)
  [30.5, 72.5],   // Punjab west
  [33.0, 71.5],   // Gandhara return
  [35.0, 71.0]    // Close polygon
];

L.polygon(hunaEmpireCoords, {
  color: 'darkgreen',
  fillColor: 'darkgreen',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Huna Empire (Alchon Huns)</b><br>" +
  "c. 5th–6th century CE<br>" +
  "Known rulers: Toramana, Mihirakula<br>" +
  "Primarily a raiding and military dominance zone"
)
.addTo(map);

// Major center marker (Sakala / Sialkot region)
L.marker([32.5, 74.5])
  .bindPopup("Huna Power Center: Sakala (modern Sialkot)")
  .addTo(map);
