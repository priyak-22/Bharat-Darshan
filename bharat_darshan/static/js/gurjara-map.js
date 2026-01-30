// ================== MAP INITIALIZATION ==================

// Initialize map (centered on India)
const map = L.map('map').setView([23.5, 78.5], 5);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Gurjara–Pratihara Dynasty (approximate) ------------------

const pratiharaEmpireCoords = [
  [29.0, 74.0],   // Northern Rajasthan
  [28.2, 77.0],   // Delhi region
  [27.1, 79.9],   // Kannauj (capital)
  [26.0, 81.0],   // Eastern Uttar Pradesh
  [24.0, 79.0],   // Northern Madhya Pradesh
  [22.5, 76.0],   // Malwa
  [22.8, 73.5],   // Gujarat influence
  [24.5, 72.5],   // Southern Rajasthan
  [26.5, 73.8],   // Central Rajasthan
  [29.0, 74.0]    // Close polygon
];

L.polygon(pratiharaEmpireCoords, {
  color: 'darkgreen',
  fillColor: 'darkgreen',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Gurjara–Pratihara Dynasty</b><br>" +
  "Capital: Kannauj<br>" +
  "c. 8th–11th CE<br>" +
  "Approximate extent across North-Western India"
)
.addTo(map);

// Capital marker
L.marker([27.1, 79.9])
  .bindPopup("Capital: Kannauj (Gurjara–Pratihara Dynasty)")
  .addTo(map);
