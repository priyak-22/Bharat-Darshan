// ================== MAP INITIALIZATION ==================

// Initialize map (Deccan–Telangana region)
const map = L.map('map').setView([17.4, 78.5], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Qutb Shahi Dynasty of Golconda ------------------

const qutbShahiCoords = [
  [19.5, 77.0],   // North Telangana
  [19.0, 79.0],   // Eastern Deccan
  [18.0, 80.0],   // Godavari basin
  [16.5, 80.5],   // Coastal Andhra
  [15.5, 78.5],   // South frontier
  [15.5, 76.5],   // Bijapur border
  [16.8, 76.0],   // Raichur Doab
  [17.8, 76.8],   // Western Deccan
  [18.8, 77.5],   // Central Deccan
  [19.5, 77.0]    // Close polygon
];

L.polygon(qutbShahiCoords, {
  color: 'teal',
  fillColor: 'teal',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Qutb Shahi Dynasty</b><br>" +
  "Capital: Golconda / Hyderabad<br>" +
  "c. 1518–1687 CE<br>" +
  "Known for diamond trade, Persian culture, and Deccan politics"
)
.addTo(map);


// Capital marker (Golconda)
L.marker([17.4, 78.4])
  .bindPopup("Golconda Fort – Early Capital of the Qutb Shahis")
  .addTo(map);


// Later capital marker (Hyderabad)
L.marker([17.38, 78.48])
  .bindPopup("Hyderabad – Later Capital (founded in 1591)")
  .addTo(map);
