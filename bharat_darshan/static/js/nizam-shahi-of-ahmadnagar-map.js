// ================== MAP INITIALIZATION ==================

// Initialize map (Deccan region)
const map = L.map('map').setView([19.1, 75.4], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Nizam Shahi Dynasty of Ahmadnagar ------------------

const nizamShahiCoords = [
  [21.5, 75.0],   // North Maharashtra
  [21.0, 77.5],   // Berar border
  [20.0, 78.5],   // Eastern Deccan
  [18.5, 79.0],   // Telangana border
  [17.5, 77.5],   // Bijapur frontier
  [17.5, 75.5],   // South Maharashtra
  [18.5, 74.5],   // Pune region
  [19.1, 75.4],   // Ahmadnagar (capital)
  [20.5, 74.5],   // Nashik region
  [21.5, 75.0]    // Close polygon
];

L.polygon(nizamShahiCoords, {
  color: 'darkpurple',
  fillColor: 'purple',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Nizam Shahi Dynasty</b><br>" +
  "Capital: Ahmadnagar<br>" +
  "c. 1490–1636 CE<br>" +
  "One of the Deccan Sultanates, rival of Bijapur and the Mughals"
)
.addTo(map);


// Capital marker (Ahmadnagar)
L.marker([19.1, 75.4])
  .bindPopup("Ahmadnagar – Capital of the Nizam Shahi Dynasty")
  .addTo(map);
