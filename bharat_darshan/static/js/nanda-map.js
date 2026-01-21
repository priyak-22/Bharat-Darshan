// Initialize map
const map = L.map('map').setView([23.0, 80.0], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);
// ================== NANDA DYNASTY MAP LAYER ==================

// Nanda Dynasty (c. 345–321 BCE)
const nandaCoords = [
    [28.35, 79.45],   // Ahichhatra (North)
    [27.5, 83.0],     // Eastern UP
    [25.5, 86.5],     // Bihar
    [24.85, 89.37],   // Pundravardhana (East)
    [22.5, 87.0],     // Bengal interior
    [20.0, 84.0],     // Odisha
    [17.5, 80.0],     // Telangana
    [15.5, 76.5],     // Suvarnagiri (South)
    [18.5, 73.5],     // Maharashtra
    [21.52, 70.46],   // Girinagara (West)
    [24.0, 73.0],     // Rajasthan
    [26.5, 76.5],     // Central India
    [28.35, 79.45]    // Back to Ahichhatra
];

// Polygon
const nandaLayer = L.polygon(nandaCoords, {
    color: '#2e1a47',
    fillColor: '#6a5acd',
    fillOpacity: 0.35,
    weight: 2,
    dashArray: '4,4'
}).bindPopup(
    "<b>Nanda Dynasty</b><br>" +
    "Capital: Pataliputra (Patna)<br>" +
    "c. 345–321 BCE"
);

// Capital marker
const nandaCapital = L.marker([25.6, 85.1])
    .bindPopup("Pataliputra<br>Capital of the Nanda Dynasty");

    // 👉 ADD TO MAP
nandaLayer.addTo(map);
nandaCapital.addTo(map);