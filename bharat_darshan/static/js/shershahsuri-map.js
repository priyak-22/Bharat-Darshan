// ================== MAP INITIALIZATION ==================

// Initialize map (centered on North India)
const map = L.map('map').setView([25.5, 84.0], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Sher Shah Suri (Sur Empire – approximate) ------------------

const surEmpireCoords = [
  [34.0, 74.5],   // Kashmir region
  [32.0, 75.5],   // Punjab
  [30.5, 76.5],   // Haryana
  [28.6, 77.2],   // Delhi
  [27.2, 78.0],   // Agra
  [26.0, 80.5],   // Awadh
  [25.0, 82.5],   // Varanasi
  [24.5, 85.0],   // Bihar
  [25.6, 84.7],   // Sasaram (capital region)
  [23.5, 88.0],   // Bengal
  [26.5, 88.5],   // North Bengal
  [29.0, 73.5],   // Rajasthan frontier
  [34.0, 74.5]    // Close polygon
];

L.polygon(surEmpireCoords, {
  color: 'darkgreen',
  fillColor: 'darkgreen',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Sur Empire (Sher Shah Suri)</b><br>" +
  "Capital: Sasaram<br>" +
  "c. 1540–1555 CE<br>" +
  "Known for administrative reforms, road network, and revenue system"
)
.addTo(map);


// Capital marker (Sasaram)
L.marker([25.6, 84.7])
  .bindPopup("Sasaram – Capital of Sher Shah Suri")
  .addTo(map);
