// ================== MAP INITIALIZATION ==================

// Initialize map (focused on North-West India & Afghanistan)
const map = L.map('map').setView([30.0, 72.0], 5);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Ghaznavid Empire (Mahmud of Ghazni) ------------------

const ghazniEmpireCoords = [
  [35.0, 69.0],   // Afghanistan north
  [34.5, 67.5],   // Kabul region
  [33.5, 65.5],   // Central Afghanistan
  [31.5, 64.5],   // Kandahar
  [30.0, 66.5],   // Baluchistan
  [29.5, 68.5],   // Sindh
  [30.5, 70.5],   // Multan
  [31.5, 72.5],   // Punjab
  [31.0, 74.0],   // Lahore
  [30.0, 76.0],   // Haryana border
  [28.5, 77.5],   // Western UP influence
  [27.0, 78.0],   // Mathura raids
  [26.0, 75.0],   // Rajasthan raids
  [28.0, 73.0],   // Return path
  [31.0, 71.0],   // Back to Punjab
  [33.0, 70.0],   // Hindu Kush
  [35.0, 69.0]    // Close polygon
];

L.polygon(ghazniEmpireCoords, {
  color: 'black',
  fillColor: 'black',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Ghaznavid Empire</b><br>" +
  "Ruler: Mahmud of Ghazni<br>" +
  "Capital: Ghazni<br>" +
  "c. 998–1030 CE<br>" +
  "Repeated invasions into North India"
)
.addTo(map);


// Capital marker (Ghazni)
L.marker([33.55, 68.42])
  .bindPopup("Ghazni – Capital of Mahmud of Ghazni")
  .addTo(map);
