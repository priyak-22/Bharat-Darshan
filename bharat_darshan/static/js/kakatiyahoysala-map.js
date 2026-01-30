// ================== MAP INITIALIZATION ==================

// Initialize map (focused on Deccan & South India)
const map = L.map('map').setView([15.5, 77.5], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Kakatiya Kingdom ------------------

const kakatiyaEmpireCoords = [
  [18.5, 78.0],   // Northern Telangana
  [18.0, 79.5],   // Eastern Telangana
  [17.5, 80.5],   // Godavari region
  [16.5, 81.0],   // Coastal Andhra
  [15.5, 80.0],   // Southern Andhra
  [15.0, 79.0],   // Rayalaseema
  [16.0, 78.0],   // South Telangana
  [17.0, 77.5],   // Western Telangana
  [18.0, 77.2],   // North-west
  [18.5, 78.0]    // Close polygon
];

L.polygon(kakatiyaEmpireCoords, {
  color: 'darkviolet',
  fillColor: 'darkviolet',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Kakatiya Dynasty</b><br>" +
  "Capital: Warangal<br>" +
  "Region: Telangana & Andhra<br>" +
  "c. 1163–1323 CE"
)
.addTo(map);

// Kakatiya capital marker
L.marker([18.0, 79.6])
  .bindPopup("Warangal – Capital of Kakatiya Dynasty")
  .addTo(map);


// ------------------ Hoysala Kingdom ------------------

const hoysalaEmpireCoords = [
  [14.5, 75.5],   // Northern Karnataka
  [14.0, 76.8],   // Chitradurga
  [13.5, 77.5],   // Tumkur
  [12.9, 77.6],   // Bangalore region
  [12.2, 76.7],   // Mysuru
  [11.8, 76.0],   // Nilgiris border
  [12.5, 75.0],   // Western Ghats
  [13.5, 75.2],   // Coastal Karnataka
  [14.2, 75.8],   // North-west
  [14.5, 75.5]    // Close polygon
];

L.polygon(hoysalaEmpireCoords, {
  color: 'darkgreen',
  fillColor: 'darkgreen',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Hoysala Dynasty</b><br>" +
  "Capital: Dwarasamudra (Halebidu)<br>" +
  "Region: Karnataka<br>" +
  "c. 1026–1343 CE"
)
.addTo(map);

// Hoysala capital marker
L.marker([13.21, 76.99])
  .bindPopup("Halebidu – Capital of Hoysala Dynasty")
  .addTo(map);
