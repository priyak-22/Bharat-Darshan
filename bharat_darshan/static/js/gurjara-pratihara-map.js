// Initialize map
const map = L.map('map').setView([23.5, 83.5], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);
// ------------------ Gurjara–Pratihara Empire (approximate) ------------------
const gurjaraPratiharaCoords = [
    [29.0, 74.5], // Near modern-day Jaipur, Rajasthan (NW Rajasthan)
    [27.5, 76.0], // Near modern-day Tonk/Jaipur region (Eastern Rajasthan)
    [26.5, 78.0], // Western Uttar Pradesh plains
    [27.06, 79.92], // Kanyakubja / Kannauj (central core, capital)
    [26.5, 81.5], // Eastern Uttar Pradesh
    [25.38, 86.47], // Mudgagiri / near Munger, Bihar (Bihar/Bengal fringe)
    [24.18, 88.27], // Gauda / Murshidabad, West Bengal (eastern influence)
    [24.5, 78.0], // East Madhya Pradesh
    [26.0, 76.0], // UP/MP border
    [29.0, 74.5]  // Close polygon (NW Rajasthan)
];

L.polygon(gurjaraPratiharaCoords, {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.3,
    weight: 2
})
.bindPopup("<b>Gurjara–Pratihara Empire</b><br>Capital: Kannauj<br>c. 8th–11th century CE<br>Approximate Extent")
.addTo(map);

// Capital marker
L.marker([27.1, 79.9]).bindPopup("Capital: Kannauj").addTo(map);