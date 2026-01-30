// ================== MAP INITIALIZATION ==================

// Initialize map (centered on South India)
const map = L.map('map').setView([15.3, 76.5], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Vijayanagar Empire (approximate) ------------------

const vijayanagarEmpireCoords = [
  [18.0, 77.5],   // Northern Deccan
  [17.0, 78.5],   // Telangana
  [15.8, 80.0],   // Andhra coast
  [13.5, 80.2],   // Tamil region
  [11.5, 78.0],   // Southern Tamil Nadu
  [12.5, 76.5],   // Mysore
  [13.5, 75.0],   // Western Ghats
  [15.0, 74.5],   // Konkan border
  [17.0, 75.5],   // Northern Karnataka
  [18.0, 77.5]    // Close polygon
];

L.polygon(vijayanagarEmpireCoords, {
  color: 'purple',
  fillColor: 'purple',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Vijayanagar Empire</b><br>" +
  "Capital: Vijayanagara (Hampi)<br>" +
  "c. 1336–1646 CE<br>" +
  "Major South Indian empire resisting Sultanates"
)
.addTo(map);


// Capital marker (Vijayanagara / Hampi)
L.marker([15.3350, 76.4600])
  .bindPopup("Vijayanagara (Hampi) – Capital of the Vijayanagar Empire")
  .addTo(map);
