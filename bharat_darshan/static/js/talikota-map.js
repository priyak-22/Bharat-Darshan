// ================== MAP INITIALIZATION ==================

// Initialize map (Deccan region)
const map = L.map('map').setView([16.5, 76.9], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Battle of Talikota (1565 CE) ------------------

// Approximate battlefield region
const talikotaRegionCoords = [
  [16.8, 76.3],   // North
  [16.9, 77.3],   // North-East
  [16.3, 77.5],   // East
  [16.0, 77.0],   // South-East
  [16.1, 76.2],   // South-West
  [16.6, 76.0],   // West
  [16.8, 76.3]    // Close polygon
];

L.polygon(talikotaRegionCoords, {
  color: 'purple',
  fillColor: 'purple',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Battle of Talikota</b><br>" +
  "Year: 1565 CE<br>" +
  "Between: Vijayanagara Empire & Deccan Sultanates<br>" +
  "Result: Decisive defeat of Vijayanagara"
)
.addTo(map);


// Battle location marker
L.marker([16.6, 76.9])
  .bindPopup(
    "<b>Talikota</b><br>" +
    "Site of the decisive battle (1565 CE)"
  )
  .addTo(map);
