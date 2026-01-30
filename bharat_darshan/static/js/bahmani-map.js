// ================== MAP INITIALIZATION ==================

// Initialize map (centered on Deccan India)
const map = L.map('map').setView([17.0, 76.0], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Bahmani Sultanate (approximate) ------------------

const bahmaniEmpireCoords = [
  [20.5, 75.5],   // Northern Deccan
  [19.5, 77.5],   // Vidarbha
  [18.0, 78.5],   // Telangana
  [16.5, 79.0],   // Eastern Deccan
  [15.0, 78.0],   // Andhra interior
  [14.5, 76.0],   // Karnataka
  [15.5, 74.5],   // Western Deccan
  [17.0, 74.0],   // Konkan border
  [18.5, 74.5],   // Maharashtra
  [20.5, 75.5]    // Close polygon
];

L.polygon(bahmaniEmpireCoords, {
  color: 'brown',
  fillColor: 'brown',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Bahmani Sultanate</b><br>" +
  "Capital: Gulbarga (later Bidar)<br>" +
  "c. 1347–1527 CE<br>" +
  "Major Deccan Sultanate rival of Vijayanagar"
)
.addTo(map);


// Capital marker (Gulbarga)
L.marker([17.33, 76.83])
  .bindPopup("Gulbarga – Early capital of the Bahmani Sultanate")
  .addTo(map);
