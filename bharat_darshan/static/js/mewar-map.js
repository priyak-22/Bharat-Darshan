// ================== MAP INITIALIZATION ==================

// Initialize map (focused on Rajasthan)
const map = L.map('map').setView([24.6, 73.7], 7);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Mewar Kingdom (approximate) ------------------

const mewarEmpireCoords = [
  [25.5, 73.0],   // Northern Mewar
  [25.2, 74.0],   // Bhilwara
  [24.9, 74.6],   // Chittorgarh
  [24.4, 74.2],   // Southern border
  [23.9, 73.9],   // Southern Mewar
  [23.8, 73.3],   // Dungarpur side
  [24.2, 72.8],   // South-west border
  [24.8, 73.0],   // Western Mewar
  [25.2, 73.2],   // North-west
  [25.5, 73.0]    // Close polygon
];

L.polygon(mewarEmpireCoords, {
  color: 'darkred',
  fillColor: 'darkred',
  fillOpacity: 0.35,
  weight: 2
})
.bindPopup(
  "<b>Mewar Kingdom</b><br>" +
  "Capital: Chittorgarh / Udaipur<br>" +
  "Rajput Sisodia Dynasty<br>" +
  "c. 8th–19th Century CE"
)
.addTo(map);


// Capital marker (Chittorgarh)
L.marker([24.9, 74.6])
  .bindPopup("Chittorgarh – Capital of Mewar")
  .addTo(map);
