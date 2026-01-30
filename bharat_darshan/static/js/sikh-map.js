// ================== MAP INITIALIZATION ==================

// Initialize map (North-West India)
const map = L.map('map').setView([31.0, 75.0], 6);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Sikh Empire (c. 1799–1849 CE) ------------------

const sikhEmpireCoords = [
  [35.0, 74.5],   // Kashmir
  [34.0, 75.8],   // Jammu
  [32.0, 75.5],   // Punjab north
  [31.6, 74.8],   // Amritsar
  [30.0, 73.5],   // Multan
  [28.5, 72.5],   // Sindh border
  [28.0, 74.0],   // Rajasthan frontier
  [29.5, 76.0],   // Haryana border
  [31.0, 77.0],   // Himachal
  [34.0, 77.0],   // Ladakh
  [35.0, 74.5]    // Close polygon
];

L.polygon(sikhEmpireCoords, {
  color: 'darkblue',
  fillColor: 'darkblue',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Sikh Empire</b><br>" +
  "Capital: Lahore<br>" +
  "c. 1799–1849 CE<br>" +
  "Founded by Maharaja Ranjit Singh"
)
.addTo(map);


// Capital marker (Lahore)
L.marker([31.6, 74.3])
  .bindPopup("Lahore – Capital of the Sikh Empire")
  .addTo(map);


// Religious centre marker (Amritsar)
L.marker([31.6, 74.8])
  .bindPopup("Amritsar – Golden Temple")
  .addTo(map);
