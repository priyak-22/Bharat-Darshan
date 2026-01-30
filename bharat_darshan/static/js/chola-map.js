// ================== MAP INITIALIZATION ==================

// Initialize map (focused on South India & maritime reach)
const map = L.map('map').setView([10.5, 78.5], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Chola Empire (approximate) ------------------

const cholaEmpireCoords = [
  [13.5, 79.5],   // Northern Tamil Nadu
  [13.0, 80.3],   // Kanchipuram
  [12.0, 80.0],   // Tamil coast
  [10.8, 79.8],   // Chidambaram
  [10.0, 79.8],   // Thanjavur
  [9.5, 79.5],    // Ramanathapuram
  [8.8, 78.2],    // Tuticorin
  [8.5, 77.5],    // Southern TN
  [9.0, 76.5],    // Kerala border
  [10.5, 76.0],   // Western Ghats
  [12.0, 76.5],   // Karnataka border
  [13.2, 77.5],   // Eastern Deccan
  [13.5, 79.5]    // Close polygon
];

L.polygon(cholaEmpireCoords, {
  color: 'darkorange',
  fillColor: 'darkorange',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Chola Dynasty</b><br>" +
  "Capital: Thanjavur / Gangaikonda Cholapuram<br>" +
  "c. 850–1279 CE<br>" +
  "Powerful South Indian & maritime empire"
)
.addTo(map);


// Capital marker (Thanjavur)
L.marker([10.8, 79.1])
  .bindPopup("Thanjavur – Capital of the Chola Dynasty")
  .addTo(map);
