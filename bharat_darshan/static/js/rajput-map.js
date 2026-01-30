// ================== MAP INITIALIZATION ==================

// Initialize map (centered on India)
const map = L.map('map').setView([24.0, 76.5], 5);

// Base map with English labels and borders
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ------------------ Rajput Kingdoms (approximate) ------------------

const rajputEmpireCoords = [
  [29.5, 73.0],   // Northern Rajasthan
  [28.5, 74.5],   // Bikaner region
  [27.5, 75.5],   // Shekhawati
  [26.8, 75.8],   // Amber / Jaipur
  [26.5, 74.6],   // Ajmer
  [25.2, 73.8],   // Mewar
  [24.5, 74.0],   // Chittorgarh
  [23.8, 75.0],   // Malwa border
  [23.5, 76.5],   // Hadoti
  [24.5, 77.5],   // Bundelkhand influence
  [26.0, 78.5],   // Gwalior region
  [27.5, 77.0],   // Eastern Rajputana
  [29.5, 73.0]    // Close polygon
];

L.polygon(rajputEmpireCoords, {
  color: 'maroon',
  fillColor: 'maroon',
  fillOpacity: 0.3,
  weight: 2
})
.bindPopup(
  "<b>Rajput Kingdoms</b><br>" +
  "Region: Rajputana<br>" +
  "c. 7th–19th Century CE<br>" +
  "Major clans: Sisodia, Rathore, Chauhan, Kachwaha"
)
.addTo(map);


// Capital / Important center marker (Chittorgarh)
L.marker([24.9, 74.6])
  .bindPopup("Chittorgarh – Major Rajput Stronghold")
  .addTo(map);
