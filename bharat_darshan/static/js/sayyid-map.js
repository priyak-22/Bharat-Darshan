// ================== MAP INITIALIZATION ==================

// Initialize map (centered on North India / Delhi region)
const map = L.map('map').setView([28.6, 77.2], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Sayyid Dynasty (approximate) ------------------

const sayyidEmpireCoords = [
  [30.5, 76.0],   // Punjab region
  [29.5, 77.5],   // Upper Doab
  [28.6, 77.2],   // Delhi (capital)
  [27.5, 78.5],   // Agra region
  [26.5, 79.5],   // Eastern influence
  [27.8, 75.5],   // Rajasthan border
  [29.0, 75.0],   // Haryana
  [30.5, 76.0]    // Close polygon
];

L.polygon(sayyidEmpireCoords, {
  color: 'darkred',
  fillColor: 'darkred',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Sayyid Dynasty</b><br>" +
  "Capital: Delhi<br>" +
  "c. 1414–1451 CE<br>" +
  "A weak but transitional Delhi Sultanate dynasty"
)
.addTo(map);


// Capital marker (Delhi)
L.marker([28.6, 77.2])
  .bindPopup("Delhi – Capital of the Sayyid Dynasty")
  .addTo(map);
