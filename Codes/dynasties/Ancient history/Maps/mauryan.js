// Initialize map
const map = L.map('map').setView([23.0, 80.0], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// ------------------ Mauryan Empire (maximum extent) ------------------
const mauryaCoords = [
    [35.0, 68.0],  // Eastern Afghanistan / NW Pakistan
    [32.0, 70.0],  // Punjab
    [30.0, 75.0],  // NW India
    [28.0, 77.0],  // Delhi / Haryana
    [26.0, 80.0],  // UP
    [25.6, 85.1],  // Patna / Bihar
    [24.5, 88.0],  // Bengal / Bangladesh
    [26.0, 92.0],  // NE India / Assam
    [22.0, 87.0],  // Odisha
    [20.0, 85.0],  // Chhattisgarh
    [19.0, 83.0],  // Odisha / Telangana border
    [18.0, 78.0],  // Telangana / Maharashtra
    [15.0, 80.0],  // South tip (Tamil Nadu/Karnataka)
    [15.0, 75.0],  // Western Maharashtra
    [25.0, 68.0]   // Rajasthan
];

L.polygon(mauryaCoords, {
    color: 'darkred',
    fillColor: 'darkred',
    fillOpacity: 0.3,
    weight: 2
}).bindPopup("<b>Mauryan Empire</b><br>Capital: Pataliputra (Patna)<br>c. 321–185 BCE<br>Maximum Expansion")
  .addTo(map);

// Capital marker
L.marker([25.6, 85.1]).bindPopup("Capital: Pataliputra (Patna)").addTo(map);
