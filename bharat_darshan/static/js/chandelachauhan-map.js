// ================== MAP INITIALIZATION ==================

// Initialize map (focused on Central & North India)
const map = L.map('map').setView([25.5, 78.5], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Chandela Kingdom (Bundelkhand) ------------------

const chandelaEmpireCoords = [
  [26.8, 78.0],   // Northern Bundelkhand
  [26.2, 79.2],   // Etawah region
  [25.5, 80.0],   // Banda
  [24.8, 79.5],   // Panna
  [24.6, 79.0],   // Khajuraho
  [24.8, 78.2],   // Lalitpur
  [25.4, 77.8],   // Western Bundelkhand
  [26.2, 77.5],   // Gwalior border
  [26.8, 78.0]    // Close polygon
];

L.polygon(chandelaEmpireCoords, {
  color: 'purple',
  fillColor: 'purple',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Chandela Dynasty</b><br>" +
  "Region: Bundelkhand<br>" +
  "Capital: Khajuraho / Mahoba<br>" +
  "c. 9th–13th Century CE"
)
.addTo(map);


// Chandela capital marker (Khajuraho)
L.marker([24.83, 79.92])
  .bindPopup("Khajuraho – Chandela Capital & Temple City")
  .addTo(map);


// ------------------ Chauhan Kingdom (Ajmer–Delhi) ------------------

const chauhanEmpireCoords = [
  [28.5, 75.5],   // Northern Rajasthan
  [28.3, 76.8],   // Haryana border
  [28.6, 77.2],   // Delhi region
  [27.8, 76.5],   // Alwar
  [26.8, 75.8],   // Ajmer
  [26.2, 74.5],   // Southern Chauhan area
  [27.0, 74.8],   // Central Rajasthan
  [27.8, 75.2],   // North-central
  [28.5, 75.5]    // Close polygon
];

L.polygon(chauhanEmpireCoords, {
  color: 'brown',
  fillColor: 'brown',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Chauhan Dynasty</b><br>" +
  "Region: Ajmer–Delhi<br>" +
  "Capital: Ajmer<br>" +
  "Notable ruler: Prithviraj Chauhan<br>" +
  "c. 8th–12th Century CE"
)
.addTo(map);


// Chauhan capital marker (Ajmer)
L.marker([26.45, 74.64])
  .bindPopup("Ajmer – Capital of the Chauhan Dynasty")
  .addTo(map);
