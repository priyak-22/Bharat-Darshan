// ================== MAP INITIALIZATION ==================

// Initialize map (centered on Western Deccan)
const map = L.map('map').setView([16.5, 75.5], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Bijapur Sultanate (Adil Shahi) ------------------

const bijapurEmpireCoords = [
  [18.8, 75.5],   // Northern border
  [18.0, 77.0],   // Bidar region
  [16.8, 77.5],   // Raichur Doab
  [15.5, 76.5],   // Bellary
  [14.8, 75.5],   // Karnataka south
  [14.5, 73.8],   // Western Ghats
  [16.0, 73.5],   // Konkan coast
  [17.5, 74.5],   // Maharashtra
  [18.8, 75.5]    // Close polygon
];

L.polygon(bijapurEmpireCoords, {
  color: 'darkorange',
  fillColor: 'darkorange',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Bijapur Sultanate (Adil Shahi)</b><br>" +
  "Capital: Bijapur (Vijayapura)<br>" +
  "c. 1490–1686 CE<br>" +
  "One of the five Deccan Sultanates"
)
.addTo(map);


// Capital marker (Bijapur / Vijayapura)
L.marker([16.83, 75.72])
  .bindPopup("Bijapur (Vijayapura) – Capital of the Bijapur Sultanate")
  .addTo(map);
