// ================== MAP INITIALIZATION ==================

const map = L.map('map').setView([22.5, 79.0], 5);

// Base map
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ================== BHAKTI MOVEMENT ==================

const bhaktiCoords = [
  [27.5, 78.5],   // Braj
  [25.3, 83.0],   // Varanasi
  [26.8, 80.9],   // Awadh
  [21.1, 79.0],   // Maharashtra
  [19.0, 73.0],   // Pandharpur
  [12.3, 76.6],   // Karnataka
  [11.0, 78.5],   // Tamil Nadu
  [22.6, 88.4],   // Bengal
  [25.0, 78.0]    // Close
];

const bhaktiLayer = L.polygon(bhaktiCoords, {
  color: 'darkorange',
  fillColor: 'darkorange',
  fillOpacity: 0.25,
  weight: 2
})
.bindPopup(
  "<b>Bhakti Movement</b><br>" +
  "c. 7th–17th Century CE<br>" +
  "Devotional movement emphasizing personal faith and vernacular traditions"
)
.addTo(map);


// Bhakti markers
L.marker([25.3, 83.0]).bindPopup("Varanasi – Kabir, Ramananda").addTo(map);
L.marker([19.0, 73.0]).bindPopup("Pandharpur – Varkari Saints").addTo(map);
L.marker([11.0, 78.5]).bindPopup("Tamil Nadu – Alvars & Nayanars").addTo(map);


// ================== SUFI MOVEMENT ==================

const sufiCoords = [
  [34.0, 74.8],   // Kashmir
  [31.6, 74.8],   // Punjab
  [28.6, 77.2],   // Delhi
  [27.0, 80.0],   // Awadh
  [26.3, 82.1],   // Jaunpur
  [22.6, 88.4],   // Bengal
  [24.0, 77.0]    // Close
];

const sufiLayer = L.polygon(sufiCoords, {
  color: 'darkgreen',
  fillColor: 'darkgreen',
  fillOpacity: 0.25,
  weight: 2
})
.bindPopup(
  "<b>Sufi Movement</b><br>" +
  "c. 12th–18th Century CE<br>" +
  "Mystical Islamic tradition centered on love, devotion, and spiritual guidance"
)
.addTo(map);


// Sufi markers
L.marker([28.6, 77.2]).bindPopup("Delhi – Chishti Order").addTo(map);
L.marker([31.6, 74.8]).bindPopup("Punjab – Major Sufi Shrines").addTo(map);
L.marker([22.6, 88.4]).bindPopup("Bengal – Spread of Sufism").addTo(map);


// ================== LEGEND ==================

const legend = L.control({ position: "bottomright" });

legend.onAdd = function () {
  const div = L.DomUtil.create("div", "info legend");
  div.style.background = "white";
  div.style.padding = "10px";
  div.style.fontSize = "14px";

  div.innerHTML =
    "<b>Legend</b><br>" +
    "<span style='color:darkorange;'>■</span> Bhakti Movement<br>" +
    "<span style='color:darkgreen;'>■</span> Sufi Movement";

  return div;
};

legend.addTo(map);
