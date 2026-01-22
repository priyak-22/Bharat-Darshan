// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// Approximate coordinates for the Gauda Kingdom
// ------------------ Gauda Kingdom (approximate extent) ------------------//
const gaudaCoords = [
    [25.5, 87.0], // NW Bengal
    [24.0, 87.0], // SW Bengal
    [24.0, 89.5], // SE Bengal (Bangladesh area)
    [25.5, 89.5], // NE Bengal
    [25.5, 87.0]  // Close polygon
];

L.polygon(gaudaCoords, {
    color: 'darkgreen',
    fillColor: 'green',
    fillOpacity: 0.3,
    weight: 2
}).bindPopup("<b>Gauda Kingdom</b><br>Capital: Gauda (Gaur)<br>c. 590–626 CE<br>Approximate Extent")
  .addTo(map);

L.marker([24.87, 88.13]).bindPopup("Capital: Gauda (Gaur)").addTo(map);