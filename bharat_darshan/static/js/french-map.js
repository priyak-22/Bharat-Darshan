// Initialize map
const map = L.map('map').setView([23.0, 80.0], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ================== FRENCH EAST INDIA COMPANY MAP LAYER ==================

// Approximate French coastal influence zone (Pondicherry + Chandernagore region)
const frenchCoords = [
    [11.9333, 79.8333],   // Pondicherry (Puducherry), Coromandel Coast
    [10.8000, 79.8333],   // Karaikal (linked to Pondicherry)
    [11.3500, 75.8500],   // Mahe (Mahé), Malabar Coast
    [22.8833, 88.3833],   // Chandernagore (Chandannagar), Bengal
    [11.9333, 79.8333]    // back to Pondicherry
];

// Polygon for French influence zone
const frenchLayer = L.polygon(frenchCoords, {
    color: '#155e75',
    fillColor: '#38bdf8',
    fillOpacity: 0.3,
    weight: 2,
    dashArray: '4,4'
}).bindPopup(
    "<b>French East India Company</b><br>" +
    "Main settlements: Pondicherry, Chandernagore, Mahe, Karaikal<br>" +
    "c. 1664–1954 CE"
);

// Pondicherry (Puducherry) marker
const pondicherryMarker = L.marker([11.9333, 79.8333])
    .bindPopup("Pondicherry (Puducherry)<br>Capital of French India; main French stronghold on the Coromandel Coast.");

// Chandernagore (Chandannagar) marker
const chandernagoreMarker = L.marker([22.8833, 88.3833])
    .bindPopup("Chandernagore (Chandannagar)<br>French enclave near Calcutta in Bengal, important for textiles and indigo.");

// Mahe (Mahé) marker
const maheMarker = L.marker([11.3500, 75.8500])
    .bindPopup("Mahe (Mahé)<br>Small French port on the Malabar Coast, used for spice trade.");

// Karaikal marker
const karaikalMarker = L.marker([10.8000, 79.8333])
    .bindPopup("Karaikal<br>French enclave on the Coromandel Coast, linked to Pondicherry’s trade.");

// 👉 ADD TO MAP
frenchLayer.addTo(map);
pondicherryMarker.addTo(map);
chandernagoreMarker.addTo(map);
maheMarker.addTo(map);
karaikalMarker.addTo(map);
