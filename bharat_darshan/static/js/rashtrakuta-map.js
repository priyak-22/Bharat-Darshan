// ================== MAP INITIALIZATION ==================

// Initialize map (centered on Deccan India)
const map = L.map('map').setView([17.5, 76.5], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Rashtrakuta Empire (approximate) ------------------

const rashtrakutaEmpireCoords = [
  [21.0, 74.5],   // Northern border (Malwa)
  [20.5, 76.5],   // Vidarbha
  [19.5, 78.5],   // Telangana
  [18.0, 80.0],   // Eastern Deccan
  [16.0, 80.0],   // Andhra influence
  [14.5, 77.5],   // Rayalaseema
  [13.5, 75.5],   // Karnataka south
  [14.5, 73.8],   // Western coast
  [16.5, 73.5],   // Konkan
  [18.5, 74.0],   // Maharashtra
  [20.0, 75.0],   // Northern Deccan
  [21.0, 74.5]    // Close polygon
];

L.polygon(rashtrakutaEmpireCoords, {
  color: 'darkblue',
  fillColor: 'darkblue',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Rashtrakuta Empire</b><br>" +
  "Capital: Manyakheta (Malkhed)<br>" +
  "c. 753–973 CE<br>" +
  "Major Deccan power controlling North & South India"
)
.addTo(map);


// Capital marker (Manyakheta / Malkhed)
L.marker([17.4, 76.9])
  .bindPopup("Manyakheta (Malkhed) – Capital of Rashtrakutas")
  .addTo(map);
