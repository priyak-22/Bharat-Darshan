// ================== MAP INITIALIZATION ==================

// Initialize map (North & Central India)
const map = L.map('map').setView([24.0, 78.0], 5);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Mughal Empire (maximum extent, c. 1700 CE) ------------------

const mughalEmpireCoords = [
  [35.0, 75.0],   // Kashmir
  [32.0, 74.5],   // Punjab
  [29.5, 76.5],   // Haryana
  [28.6, 77.2],   // Delhi
  [27.2, 78.0],   // Agra
  [26.0, 80.0],   // Awadh
  [25.0, 82.5],   // Bihar
  [24.0, 86.0],   // Bengal
  [22.6, 88.4],   // Bengal coast
  [21.0, 86.0],   // Odisha
  [19.5, 78.5],   // Deccan
  [18.0, 75.0],   // Maharashtra
  [17.0, 73.0],   // Konkan
  [21.0, 72.0],   // Gujarat
  [24.0, 70.0],   // Sindh region
  [27.0, 71.0],   // Rajasthan
  [30.0, 73.0],   // Punjab west
  [35.0, 75.0]    // Close polygon
];

L.polygon(mughalEmpireCoords, {
  color: 'darkred',
  fillColor: 'darkred',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Mughal Empire</b><br>" +
  "Capital: Agra / Delhi<br>" +
  "c. 1526–1707 CE<br>" +
  "Peak under Akbar, Jahangir, Shah Jahan, and Aurangzeb"
)
.addTo(map);


// Capital markers
L.marker([27.2, 78.0])
  .bindPopup("Agra – Early Mughal Capital")
  .addTo(map);

L.marker([28.6, 77.2])
  .bindPopup("Delhi – Later Mughal Capital")
  .addTo(map);
