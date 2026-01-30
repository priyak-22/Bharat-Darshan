// ================== MAP INITIALIZATION ==================

// Initialize map (centered on North & Deccan India)
const map = L.map('map').setView([25.5, 78.0], 5);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Khalji Dynasty (approximate) ------------------

const khaljiEmpireCoords = [
  [36.0, 75.0],   // Kashmir
  [34.0, 77.0],   // Ladakh border
  [32.5, 75.5],   // Jammu
  [31.5, 74.0],   // Punjab
  [30.0, 72.0],   // Multan
  [28.5, 70.5],   // Sindh
  [27.0, 71.5],   // Rajasthan west
  [25.5, 73.0],   // Mewar border
  [24.0, 74.5],   // Gujarat
  [22.5, 76.0],   // Malwa
  [21.0, 77.5],   // Deccan entry
  [19.5, 78.5],   // Devagiri (Daulatabad)
  [18.0, 79.0],   // Warangal campaign
  [20.0, 80.5],   // Central India
  [22.5, 82.5],   // Eastern reach
  [25.0, 84.5],   // Bihar
  [27.5, 86.5],   // Bengal border
  [30.0, 88.0],   // Assam influence
  [32.0, 86.0],   // North-east edge
  [34.0, 82.0],   // Himalayan foothills
  [36.0, 75.0]    // Close polygon
];

L.polygon(khaljiEmpireCoords, {
  color: 'darkolivegreen',
  fillColor: 'darkolivegreen',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Khalji Dynasty</b><br>" +
  "Capital: Delhi<br>" +
  "Notable ruler: Alauddin Khalji<br>" +
  "c. 1290–1320 CE<br>" +
  "First Sultanate expansion into South India"
)
.addTo(map);


// Capital marker (Delhi)
L.marker([28.6, 77.2])
  .bindPopup("Delhi – Capital of the Khalji Dynasty")
  .addTo(map);


// Important southern center (Devagiri / Daulatabad)
L.marker([19.9, 75.4])
  .bindPopup("Devagiri (Daulatabad) – Khalji southern base")
  .addTo(map);
