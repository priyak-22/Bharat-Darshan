// ================== MAP INITIALIZATION ==================

// Initialize map (centered on North India)
const map = L.map('map').setView([28.5, 77.0], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Lodi Dynasty (approximate) ------------------

const lodiEmpireCoords = [
  [30.5, 76.0],   // Punjab
  [29.5, 77.5],   // Upper Doab
  [28.6, 77.2],   // Delhi (capital)
  [27.5, 78.8],   // Agra region
  [26.5, 79.5],   // Eastern UP
  [26.8, 75.8],   // Rajasthan border
  [28.5, 75.0],   // Haryana
  [30.5, 76.0]    // Close polygon
];

L.polygon(lodiEmpireCoords, {
  color: 'darkgreen',
  fillColor: 'darkgreen',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Lodi Dynasty</b><br>" +
  "Capital: Delhi<br>" +
  "c. 1451–1526 CE<br>" +
  "Last dynasty of the Delhi Sultanate before the Mughals"
)
.addTo(map);


// Capital marker (Delhi)
L.marker([28.6, 77.2])
  .bindPopup("Delhi – Capital of the Lodi Dynasty")
  .addTo(map);
