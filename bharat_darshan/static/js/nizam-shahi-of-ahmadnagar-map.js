// ================== MAP INITIALIZATION ==================

// Initialize map (focused on Western Deccan & Maharashtra)
const map = L.map('map').setView([19.1, 74.7], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Nizam Shahi of Ahmadnagar (approximate) ------------------

const nizamShahiEmpireCoords = [
  [21.0, 75.5],   // Northern Maharashtra
  [20.5, 77.5],   // Berar border
  [19.5, 78.0],   // Telangana influence
  [18.0, 77.0],   // Bidar border
  [17.8, 75.5],   // Raichur fringe
  [18.5, 74.0],   // Pune region
  [19.0, 73.5],   // Konkan coast
  [20.0, 74.0],   // Nashik region
  [21.0, 75.5]    // Close polygon
];

L.polygon(nizamShahiEmpireCoords, {
  color: 'teal',
  fillColor: 'teal',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Nizam Shahi of Ahmadnagar</b><br>" +
  "Capital: Ahmadnagar<br>" +
  "c. 1490–1636 CE<br>" +
  "Major Deccan Sultanate resisting Mughal expansion"
)
.addTo(map);


// Capital marker (Ahmadnagar)
L.marker([19.0952, 74.7496])
  .bindPopup("Ahmadnagar – Capital of the Nizam Shahi Sultanate")
  .addTo(map);
