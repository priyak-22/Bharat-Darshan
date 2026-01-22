// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);
// Satavahana (Andhra) Empire Extent
// c. 1st century BCE – 3rd century CE

const satavahanaCoords = [
  [22.8, 72.6],   // Bharuch (western trade port)
  [22.3, 73.2],   // Gujarat interior
  [21.5, 74.5],   // Northern Maharashtra
  [20.6, 75.9],   // Ajanta region
  [19.8, 76.8],   // Paithan (Pratishthana – capital)
  [19.2, 77.3],   // Telangana
  [18.4, 78.5],   // Andhra interior
  [17.8, 80.6],   // Krishna-Godavari basin
  [16.5, 81.7],   // Eastern coast (Amaravati)
  [15.9, 80.0],   // Southern Andhra
  [16.2, 78.0],   // Rayalaseema
  [17.3, 76.5],   // Northern Karnataka
  [18.2, 74.8],   // Deccan plateau
  [19.5, 73.5],   // Western Maharashtra
  [21.0, 72.8]    // Closing loop near Gujarat coast
];


L.polygon(satavahanaCoords, {
  color: "#b87333",
  fillOpacity: 0.4
}).addTo(map);
