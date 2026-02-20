// Initialize map
const map = L.map('map').setView([23.0, 80.0], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ================== DUTCH EAST INDIA COMPANY MAP LAYER ==================

// Approximate Dutch‑controlled coastal zone (rough polygon along Coromandel + key ports)
const dutchCoords = [
    [21.1702, 72.8311],   // Surat (west)
    [16.1750, 81.1250],   // Masulipatnam (east)
    [13.8000, 80.1833],   // Pulicat (main HQ)
    [11.1333, 79.8167],   // Nagapattinam
    [9.9312, 76.2673],    // Cochin (Kochi)
    [21.1702, 72.8311]    // back to Surat
];

// Polygon for Dutch influence zone
const dutchLayer = L.polygon(dutchCoords, {
    color: '#8b4513',      // brown for Dutch presence
    fillColor: '#cd853f',
    fillOpacity: 0.3,
    weight: 2,
    dashArray: '4,4'
}).bindPopup(
    "<b>Dutch East India Company</b><br>" +
    "Main headquarters: Pulicat<br>" +
    "c. 1605–1825 CE"
);

// Capital / main HQ marker (Pulicat)
const dutchCapital = L.marker([13.8000, 80.1833])
    .bindPopup("Pulicat<br>Main Dutch headquarters on the Coromandel Coast");

// 👉 ADD TO MAP
dutchLayer.addTo(map);
dutchCapital.addTo(map);
