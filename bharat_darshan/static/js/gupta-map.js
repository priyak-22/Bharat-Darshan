// Initialize map
const map = L.map('map').setView([23.0, 80.0], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ------------------ Gupta Empire (approximate extent) ------------------
const guptaCoords = [
    [28.0, 77.0], // NW Uttar Pradesh
    [25.5, 78.0], // Central UP
    [24.5, 80.0], // East UP / West Bihar
    [24.0, 85.0], // Bihar / Patna
    [24.0, 88.0], // Bengal region
    [22.0, 85.0], // Odisha
    [21.0, 83.0], // Chhattisgarh
    [20.0, 80.0], // Maharashtra/Northern Deccan
    [22.0, 77.0], // Central Madhya Pradesh
    [25.0, 77.0], // Back north to UP
    [28.0, 77.0]  // Close polygon
];

L.polygon(guptaCoords, {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.3,
    weight: 2
}).bindPopup("<b>Gupta Empire</b><br>Capital: Pataliputra (Patna)<br>c. 320–550 CE<br>Approximate Extent")
  .addTo(map);

// Capital marker
L.marker([24.8, 85.0]).bindPopup("Capital: Pataliputra (Patna)").addTo(map);
