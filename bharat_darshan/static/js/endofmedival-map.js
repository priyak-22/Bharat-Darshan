// ================== MAP INITIALIZATION ==================

// Initialize map (Pan-India view)
const map = L.map('map').setView([22.0, 79.0], 5);

// Base map
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri — Source: Esri, USGS, NOAA',
    maxZoom: 19
  }
).addTo(map);


// ================== END OF MEDIEVAL ERA (c. 1707–1818) ==================

// Mughal Decline Region
const mughalDeclineCoords = [
  [34.0, 74.8],   // Kashmir
  [31.0, 75.0],   // Punjab
  [28.6, 77.2],   // Delhi
  [26.0, 80.0],   // Awadh
  [25.0, 83.0],   // Bihar
  [23.0, 85.0],   // Jharkhand
  [24.0, 77.0]    // Close
];

L.polygon(mughalDeclineCoords, {
  color: 'brown',
  fillColor: 'brown',
  fillOpacity: 0.25,
  weight: 2
})
.bindPopup(
  "<b>Mughal Decline</b><br>" +
  "Post-Aurangzeb period (after 1707 CE)<br>" +
  "Weak central authority and rise of regional powers"
)
.addTo(map);


// Maratha Expansion Region
const marathaExpansionCoords = [
  [21.0, 73.0],   // Gujarat
  [23.0, 72.0],   // Western India
  [26.5, 75.0],   // Rajasthan
  [28.6, 77.2],   // Delhi
  [25.0, 82.5],   // Eastern influence
  [23.5, 85.0],   // Odisha
  [19.0, 75.0],   // Maharashtra
  [21.0, 73.0]    // Close
];

L.polygon(marathaExpansionCoords, {
  color: 'orange',
  fillColor: 'orange',
  fillOpacity: 0.25,
  weight: 2
})
.bindPopup(
  "<b>Maratha Expansion</b><br>" +
  "18th Century CE<br>" +
  "Emergence of Marathas as a dominant political force"
)
.addTo(map);


// British East India Company Expansion
const companyExpansionCoords = [
  [22.6, 88.4],   // Bengal (Plassey)
  [21.1, 79.0],   // Central India
  [19.1, 72.9],   // Bombay
  [13.1, 80.3],   // Madras
  [17.4, 78.5],   // Deccan
  [22.6, 88.4]    // Close
];

L.polygon(companyExpansionCoords, {
  color: 'darkblue',
  fillColor: 'darkblue',
  fillOpacity: 0.25,
  weight: 2
})
.bindPopup(
  "<b>British Expansion</b><br>" +
  "1757–1818 CE<br>" +
  "Battle of Plassey to fall of the Marathas"
)
.addTo(map);


// Key event markers
L.marker([28.6, 77.2]).bindPopup("Delhi – Decline of Mughal authority").addTo(map);
L.marker([22.6, 88.4]).bindPopup("Plassey (1757) – Start of British dominance").addTo(map);
L.marker([18.5, 73.8]).bindPopup("Pune – Fall of the Peshwas (1818)").addTo(map);


// ================== LEGEND ==================

const legend = L.control({ position: "bottomright" });

legend.onAdd = function () {
  const div = L.DomUtil.create("div", "info legend");
  div.style.background = "white";
  div.style.padding = "10px";
  div.style.fontSize = "14px";

  div.innerHTML =
    "<b>End of Medieval Era</b><br>" +
    "<span style='color:brown;'>■</span> Mughal Decline<br>" +
    "<span style='color:orange;'>■</span> Maratha Power<br>" +
    "<span style='color:darkblue;'>■</span> British Expansion";

  return div;
};

legend.addTo(map);
