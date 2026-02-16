// Initialize map
const map = L.map('map').setView([23.0, 80.0], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ================== BRITISH EAST INDIA COMPANY MAP LAYER ==================

// Approximate British coastal influence zone (Surat + Madras + Bombay + Calcutta region)
const britishCoords = [
    [21.1702, 72.8311],   // Surat, western coast
    [19.0760, 72.8777],   // Bombay (Mumbai)
    [13.0827, 80.2707],   // Madras (Chennai)
    [22.5726, 88.3639],   // Calcutta (Kolkata)
    [21.1702, 72.8311]    // back to Surat
];

// Polygon for British influence zone
const britishLayer = L.polygon(britishCoords, {
    color: '#1f2937',
    fillColor: '#6b7280',
    fillOpacity: 0.3,
    weight: 2,
    dashArray: '4,4'
}).bindPopup(
    "<b>British East India Company</b><br>" +
    "Main presidency towns: Surat, Bombay, Madras, Calcutta<br>" +
    "c. 1615–1858 CE"
);

// Surat marker
const suratMarker = L.marker([21.1702, 72.8311])
    .bindPopup("Surat<br>First major British factory in India, established 1615 CE.");

// Bombay (Mumbai) marker
const bombayMarker = L.marker([19.0760, 72.8777])
    .bindPopup("Bombay (Mumbai)<br>Key western port acquired from the Portuguese and developed by the British.");

// Madras (Chennai) marker
const madrasMarker = L.marker([13.0827, 80.2707])
    .bindPopup("Madras (Chennai)<br>South Indian headquarters; Fort St. George established in 1639 CE.");

// Calcutta (Kolkata) marker
const calcuttaMarker = L.marker([22.5726, 88.3639])
    .bindPopup("Calcutta (Kolkata)<br>Founded in 1690 CE; later capital of British India.");

// 👉 ADD TO MAP
britishLayer.addTo(map);
suratMarker.addTo(map);
bombayMarker.addTo(map);
madrasMarker.addTo(map);
calcuttaMarker.addTo(map);
