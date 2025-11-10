// Initialize map
const map = L.map('map').setView([12.0, 78.0], 6);

// Realistic map with borders and labels
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ------------------ Chera Kingdom (approximate area) ------------------
const cheraCoords = [
    [10.5, 75.5],
    [11.0, 76.5],
    [10.8, 77.2],
    [10.0, 77.0],
    [9.5, 76.5],
    [9.7, 76.0]
];
L.polygon(cheraCoords, {color: 'red', fillColor: 'red', fillOpacity: 0.3, weight: 2})
  .bindPopup("<b>Chera Kingdom</b><br>Capital: Vanji<br>Up to 12th Century")
  .addTo(map);
L.marker([10.3, 76.0]).bindPopup("Chera Capital: Vanji").addTo(map);

// ------------------ Pandya Kingdom (approximate area) ------------------
const pandyaCoords = [
    [9.0, 77.5],
    [9.8, 78.0],
    [10.2, 78.8],
    [10.0, 79.0],
    [9.3, 78.5]
];
L.polygon(pandyaCoords, {color: 'blue', fillColor: 'blue', fillOpacity: 0.3, weight: 2})
  .bindPopup("<b>Pandya Kingdom</b><br>Capital: Madurai<br>Up to 14th Century")
  .addTo(map);
L.marker([9.9, 78.1]).bindPopup("Pandya Capital: Madurai").addTo(map);

// ------------------ Pallava Kingdom (approximate area) ------------------
const pallavaCoords = [
    [12.0, 79.0],
    [12.5, 79.3],
    [12.8, 80.0],
    [12.2, 80.5],
    [11.8, 80.3]
];
L.polygon(pallavaCoords, {color: 'green', fillColor: 'green', fillOpacity: 0.3, weight: 2})
  .bindPopup("<b>Pallava Kingdom</b><br>Capital: Kanchipuram<br>275–897 CE")
  .addTo(map);
L.marker([12.8, 79.7]).bindPopup("Pallava Capital: Kanchipuram").addTo(map);

// ------------------ Chalukya Kingdom (approximate area) ------------------
const chalukyaCoords = [
    [14.5, 74.5],
    [15.5, 75.0],
    [16.0, 76.0],
    [15.5, 76.5],
    [14.5, 76.0]
];
L.polygon(chalukyaCoords, {color: 'purple', fillColor: 'purple', fillOpacity: 0.3, weight: 2})
  .bindPopup("<b>Chalukya Kingdom</b><br>Capital: Badami<br>6th–12th Century")
  .addTo(map);
L.marker([15.0, 75.5]).bindPopup("Chalukya Capital: Badami").addTo(map);

// ------------------ Chola Kingdom (approximate area) ------------------
const cholaCoords = [
    [10.5, 78.5],
    [11.0, 79.0],
    [11.5, 79.5],
    [11.2, 80.0],
    [10.8, 79.8],
    [10.5, 79.2]
];
L.polygon(cholaCoords, {color: 'orange', fillColor: 'orange', fillOpacity: 0.3, weight: 2})
  .bindPopup("<b>Chola Kingdom</b><br>Capital: Thanjavur<br>9th–13th Century")
  .addTo(map);
L.marker([10.8, 79.5]).bindPopup("Chola Capital: Thanjavur").addTo(map);
