// ================== MAP INITIALIZATION ==================

// Initialize map (focused on Bidar region)
const map = L.map('map').setView([17.9, 77.5], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Barid Shahi of Bidar (approximate) ------------------

const baridShahiEmpireCoords = [
  [18.5, 77.0],   // Northern Bidar
  [18.2, 78.0],   // Telangana border
  [17.5, 78.2],   // Eastern border
  [17.0, 77.5],   // Southern border
  [17.3, 76.8],   // Western border
  [18.0, 76.8],   // North-west
  [18.5, 77.0]    // Close polygon
];

L.polygon(baridShahiEmpireCoords, {
  color: 'maroon',
  fillColor: 'maroon',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Barid Shahi of Bidar</b><br>" +
  "Capital: Bidar<br>" +
  "c. 1492–1619 CE<br>" +
  "Small but culturally important Deccan Sultanate"
)
.addTo(map);


// Capital marker (Bidar)
L.marker([17.91, 77.53])
  .bindPopup("Bidar – Capital of the Barid Shahi Sultanate")
  .addTo(map);
