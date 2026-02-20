// Initialize map
const map = L.map('map').setView([23.0, 80.0], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ================== DANISH EAST INDIA COMPANY MAP LAYER ==================

// Approximate Danish coastal influence zone (Tranquebar + Serampore region)
const danishCoords = [
    [11.1778, 79.7647],   // Tranquebar (Tharangambadi), Tamil Nadu
    [13.0827, 80.2707],   // Chennai region (to close the loop roughly)
    [22.7500, 88.3400],   // Serampore, West Bengal
    [11.1778, 79.7647]    // back to Tranquebar
];

// Polygon for Danish influence zone
const danishLayer = L.polygon(danishCoords, {
    color: '#1a365d',
    fillColor: '#4299e1',
    fillOpacity: 0.3,
    weight: 2,
    dashArray: '4,4'
}).bindPopup(
    "<b>Danish East India Company</b><br>" +
    "Main settlements: Tranquebar & Serampore<br>" +
    "c. 1620–1845 CE"
);

// Tranquebar (Tharangambadi) marker
const tranquebarMarker = L.marker([11.1778, 79.7647])
    .bindPopup("Tranquebar (Tharangambadi)<br>First Danish settlement in India, 1620 CE");

// Serampore (Frederiksnagore) marker
const seramporeMarker = L.marker([22.7500, 88.3400])
    .bindPopup("Serampore (Frederiksnagore)<br>Danish trading post on the Hooghly River");

// 👉 ADD TO MAP
danishLayer.addTo(map);
tranquebarMarker.addTo(map);
seramporeMarker.addTo(map);
