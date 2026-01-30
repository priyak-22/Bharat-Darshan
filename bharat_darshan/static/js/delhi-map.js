// ================== MAP INITIALIZATION ==================

// Initialize map (centered on North India)
const map = L.map('map').setView([28.8, 77.2], 5);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Delhi Sultanate (approximate) ------------------

const delhiSultanateCoords = [
  [36.0, 74.0],   // Kashmir region
  [34.5, 76.0],   // Ladakh border
  [33.0, 75.5],   // Jammu
  [31.5, 74.0],   // Punjab
  [30.5, 72.0],   // Multan
  [28.5, 70.5],   // Sindh
  [27.0, 70.0],   // Rajasthan west
  [25.0, 71.5],   // Thar region
  [23.5, 73.5],   // Gujarat influence
  [22.5, 75.0],   // Malwa
  [21.5, 77.0],   // Deccan north
  [21.0, 78.5],   // Vidarbha
  [22.0, 80.0],   // Central India
  [24.0, 82.0],   // Eastern UP
  [26.0, 84.0],   // Bihar
  [27.5, 86.0],   // Nepal border
  [29.5, 88.0],   // Bengal
  [31.0, 86.5],   // Assam border
  [32.5, 84.5],   // North-east edge
  [33.5, 81.0],   // Himalayan foothills
  [35.0, 78.0],   // Himachal
  [36.0, 74.0]    // Close polygon
];

L.polygon(delhiSultanateCoords, {
  color: 'darkred',
  fillColor: 'darkred',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Delhi Sultanate</b><br>" +
  "Capital: Delhi<br>" +
  "Dynasties: Slave, Khalji, Tughlaq, Sayyid, Lodi<br>" +
  "c. 1206–1526 CE"
)
.addTo(map);


// Capital marker (Delhi)
L.marker([28.6, 77.2])
  .bindPopup("Delhi – Capital of the Delhi Sultanate")
  .addTo(map);
