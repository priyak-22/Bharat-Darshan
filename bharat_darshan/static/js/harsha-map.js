// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);


// ------------------ Harsha Empire (approximate) ------------------

const harshaEmpireCoords = [
  [30.0, 75.0],   // Punjab plains (north-west extent)
  [29.5, 77.0],   // Haryana region
  [28.7, 77.2],   // Delhi region
  [27.3, 78.0],   // Western Uttar Pradesh
  [27.1, 79.9],   // Kannauj (capital)
  [26.2, 81.5],   // Central Uttar Pradesh
  [25.6, 84.8],   // Bihar (Magadha region)
  [24.8, 87.5],   // Bengal influence
  [23.5, 85.0],   // Jharkhand region
  [23.0, 78.5],   // Northern Madhya Pradesh
  [24.5, 76.0],   // Malwa region
  [26.5, 75.5],   // Eastern Rajasthan
  [30.0, 75.0]    // Close polygon
];

L.polygon(harshaEmpireCoords, {
  color: 'darkred',
  fillColor: 'darkred',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Harsha Empire</b><br>" +
  "Capital: Kannauj<br>" +
  "c. 606–647 CE<br>" +
  "Extent across North India"
)
.addTo(map);

// Capital marker
L.marker([27.06, 79.92])
  .bindPopup("Capital: Kannauj (Harsha Vardhana)")
  .addTo(map);
