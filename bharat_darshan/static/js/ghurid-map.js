// ================== MAP INITIALIZATION ==================

// Initialize map (North-West India & Afghanistan)
const map = L.map('map').setView([29.0, 72.0], 5);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Ghurid Empire (Muhammad Ghori) ------------------

const ghuridEmpireCoords = [
  [34.0, 65.0],   // Ghor region (Afghanistan)
  [33.5, 67.0],   // Kabul
  [32.5, 69.0],   // Hindu Kush
  [31.5, 70.5],   // Punjab west
  [31.0, 72.5],   // Lahore
  [30.0, 74.5],   // Punjab east
  [29.0, 76.0],   // Haryana
  [28.5, 77.2],   // Delhi
  [27.0, 78.5],   // Western UP
  [26.5, 76.5],   // Rajasthan border
  [27.5, 74.5],   // Ajmer influence
  [29.0, 73.0],   // Multan region
  [31.5, 71.0],   // Return path
  [33.0, 69.0],   // Kabul return
  [34.0, 65.0]    // Close polygon
];

L.polygon(ghuridEmpireCoords, {
  color: 'darkslategray',
  fillColor: 'darkslategray',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Ghurid Dynasty</b><br>" +
  "Ruler: Muhammad of Ghor<br>" +
  "Capital: Firuzkoh<br>" +
  "c. 1148–1215 CE<br>" +
  "Foundation of Muslim rule in North India"
)
.addTo(map);


// Capital marker (Firuzkoh – approximate)
L.marker([34.1, 65.2])
  .bindPopup("Firuzkoh – Capital of the Ghurid Dynasty")
  .addTo(map);


// Important Indian center (Delhi)
L.marker([28.6, 77.2])
  .bindPopup("Delhi – Ghurid-controlled city (later Sultanate capital)")
  .addTo(map);
