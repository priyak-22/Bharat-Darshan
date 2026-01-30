// ================== MAP INITIALIZATION ==================

// Initialize map (North India & Deccan focus)
const map = L.map('map').setView([24.5, 78.0], 5);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Tughlaq Dynasty (approximate) ------------------

const tughlaqEmpireCoords = [
  [36.0, 75.0],   // Kashmir
  [34.5, 77.0],   // Ladakh border
  [32.5, 76.0],   // Jammu
  [31.5, 74.0],   // Punjab
  [30.0, 72.0],   // Multan
  [28.5, 70.5],   // Sindh
  [27.0, 71.5],   // Rajasthan west
  [25.0, 73.0],   // Mewar border
  [23.5, 74.5],   // Gujarat
  [22.0, 76.5],   // Malwa
  [20.5, 78.5],   // Deccan north
  [19.0, 79.0],   // Warangal
  [18.0, 80.0],   // Andhra coast
  [19.5, 82.5],   // Odisha
  [22.0, 84.5],   // Bengal
  [25.0, 86.5],   // Bihar
  [28.0, 88.5],   // Assam influence
  [31.0, 86.5],   // North-east
  [33.5, 82.5],   // Himalayan foothills
  [36.0, 75.0]    // Close polygon
];

L.polygon(tughlaqEmpireCoords, {
  color: 'darkslateblue',
  fillColor: 'darkslateblue',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Tughlaq Dynasty</b><br>" +
  "Capital: Delhi / Daulatabad<br>" +
  "Notable rulers: Ghiyasuddin, Muhammad bin Tughlaq, Firoz Shah<br>" +
  "c. 1320–1414 CE"
)
.addTo(map);


// Capital marker (Delhi)
L.marker([28.6, 77.2])
  .bindPopup("Delhi – Capital of the Tughlaq Dynasty")
  .addTo(map);


// Secondary capital (Daulatabad)
L.marker([19.9, 75.4])
  .bindPopup("Daulatabad – Temporary capital under Muhammad bin Tughlaq")
  .addTo(map);
