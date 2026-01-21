// Initialize map
const map = L.map('map').setView([23.0, 80.0], 5);

// Realistic base map with English labels and borders
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
    maxZoom: 19
}).addTo(map);

// Approximate polygon for Shunga Empire territory
const shungaEmpire = {
    "type": "Feature",
    "properties": {
        "name": "Shunga Empire",
        "period": "c. 180 BCE"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [77.0, 27.0], // NW
                [75.0, 24.0], // SW
                [78.0, 20.0], // South
                [85.0, 20.0], // East-central
                [88.0, 24.0], // Eastern edge
                [86.0, 28.0], // NE
                [82.0, 30.0], // North
                [77.0, 27.0]  // Back to NW
            ]
        ]
    }
};

// Add polygon to map with styling
L.geoJSON(shungaEmpire, {
    style: {
        color: '#b30000',       // border color
        fillColor: '#ff9166',   // fill color
        fillOpacity: 0.4,
        weight: 2
    }
}).addTo(map);

// Add info box
const info = L.control({ position: 'bottomleft' });

info.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'info');
    
};

info.addTo(map);
