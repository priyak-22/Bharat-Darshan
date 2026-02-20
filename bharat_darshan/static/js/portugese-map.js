// Initialize map
const map = L.map('map').setView([20.0, 75.0], 5);

// Base map
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri',
  maxZoom: 19
}).addTo(map);

// ================== PORTUGUESE ADVENT MAP LAYER ==================

const portugueseCoords = [
  [11.26, 75.78],
  [9.93, 76.26],
  [15.30, 74.12],
  [20.71, 70.99],
  [20.39, 72.83],
  [11.26, 75.78]
];

const portugueseLayer = L.polygon(portugueseCoords, {
  color: '#7b1e1e',
  fillColor: '#ff7f50',
  fillOpacity: 0.35,
  weight: 2,
  dashArray: '4,4'
}).bindPopup(
  "<b>Portuguese Advent in India</b><br>" +
  "Leader: Vasco da Gama<br>" +
  "Arrival Year: 1498<br>" +
  "Main Centers: Goa, Calicut, Cochin, Diu, Daman"
);

const portugueseRoute = L.polyline([
  [38.72, -9.13],
  [11.26, 75.78]
], {
  color: 'blue',
  weight: 3,
  dashArray: '6,6'
}).bindPopup("Sea Route of Vasco da Gama (1497–1498)");

const portugueseCapital = L.marker([15.30, 74.12])
  .bindPopup("Goa<br>Capital of Portuguese India");

const portugueseArrival = L.marker([11.26, 75.78])
  .bindPopup("Calicut<br>Vasco da Gama landed here");

const portugueseCochin = L.marker([9.93, 76.26])
  .bindPopup("Cochin (Kochi)");

// Add to map
portugueseLayer.addTo(map);
portugueseRoute.addTo(map);
portugueseCapital.addTo(map);
portugueseArrival.addTo(map);
portugueseCochin.addTo(map);
