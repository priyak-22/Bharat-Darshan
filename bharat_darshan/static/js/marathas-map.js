// ================== MAP INITIALIZATION ==================

// Initialize map (Central & Western India)
const map = L.map('map').setView([19.0, 75.5], 5);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Maratha Empire (approximate) ------------------

const marathaEmpireCoords = [
  [21.0, 73.0],   // Gujarat
  [23.0, 72.0],   // Western frontier
  [26.5, 75.0],   // Rajasthan
  [28.6, 77.2],   // Delhi
  [27.0, 80.0],   // Awadh
  [25.0, 82.5],   // Eastern influence
  [23.5, 85.0],   // Odisha border
  [21.5, 83.0],   // Chhattisgarh
  [19.5, 81.0],   // Deccan east
  [17.0, 78.0],   // Telangana
  [16.0, 74.0],   // Karnataka
  [18.0, 73.0],   // Maharashtra coast
  [21.0, 73.0]    // Close polygon
];

L.polygon(marathaEmpireCoords, {
  color: 'orange',
  fillColor: 'orange',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Maratha Empire</b><br>" +
  "Capital: Raigad / Pune<br>" +
  "c. 1674–1818 CE<br>" +
  "A dominant power in 18th-century India under Shivaji and the Peshwas"
)
.addTo(map);


// Capital marker (Raigad – symbolic)
L.marker([18.23, 73.45])
  .bindPopup("Raigad Fort – Capital of the Maratha Empire")
  .addTo(map);
