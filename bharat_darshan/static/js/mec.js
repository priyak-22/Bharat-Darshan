const dynasties = [

  // Medieval Dynasties
[
  {
    name: "Rajput Kingdoms",
    period: "7th–16th CE",
    tangible: [{ img: "images/rajasthan_forts.jpg", short: "Forts and palaces.", more: "Majestic forts demonstrating military architecture." }],
    intangible: [{ img: "images/rajput_valor.jpg", short: "Rajput valor and culture.", more: "Emphasized honor, bravery, and loyalty." }],
    why: "Maintained regional autonomy and cultural traditions."
  },

  {
    name: "Mewar Kingdom",
    period: "7th–18th CE",
    tangible: [{ img: "images/chittorgarh.jpg", short: "Chittorgarh Fort.", more: "Symbol of resistance and Rajput architecture." }],
    intangible: [{ img: "images/mewar_culture.jpg", short: "Rajput traditions.", more: "Cultural identity emphasizing honor and defense." }],
    why: "Preserved Rajput culture and identity."
  },

  {
    name: "Pala Dynasty",
    period: "8th–12th CE",
    tangible: [{ img: "images/nalanda.jpg", short: "Nalanda University ruins.", more: "Nalanda was a center of Buddhist learning attracting students from across Asia." }],
    intangible: [{ img: "images/tantric_buddhism.jpg", short: "Growth of Tantric Buddhism.", more: "The Pala rulers patronized Buddhist traditions including Tantric practices." }],
    why: "Education and Buddhism flourished under Pala rule."
  },

  {
    name: "Rashtrakuta Dynasty",
    period: "8th–10th CE",
    tangible: [{ img: "images/ellora.jpg", short: "Ellora caves architecture.", more: "Rashtrakutas built magnificent rock-cut temples at Ellora." }],
    intangible: [{ img: "images/poetry.jpg", short: "Kannada literature.", more: "Promoted literature in local languages including Kannada and Sanskrit." }],
    why: "Flourished in art, architecture, and literature."
  },

  {
    name: "Gurjara-Pratihara",
    period: "8th–11th CE",
    tangible: [{ img: "images/pratihara_temple.jpg", short: "Temple architecture.", more: "Built fortified temples and palaces." }],
    intangible: [{ img: "images/feudalism.jpg", short: "Feudal political structure.", more: "Maintained a strong feudal system defending northern India." }],
    why: "Defended North India from invasions."
  },

  {
    name: "Chola Dynasty",
    period: "9th–13th CE",
    tangible: [{ img: "images/brihadeeswarar.jpg", short: "Brihadeeswarar Temple.", more: "Famous for grand Dravidian architecture." }],
    intangible: [{ img: "images/maritime_trade_chola.jpg", short: "Maritime trade culture.", more: "Active trade with Southeast Asia and expansion of culture overseas." }],
    why: "Extended influence across South India and abroad."
  },

  {
    name: "Chandel/Chauhan",
    period: "9th–12th CE",
    tangible: [{ img: "images/khajuraho.jpg", short: "Khajuraho temples.", more: "Built iconic temples known for sculptures." }],
    intangible: [{ img: "images/warrior_culture.jpg", short: "Valiant warrior culture.", more: "Known for defense against invasions and Rajput valor." }],
    why: "Patronized art and defended northern kingdoms."
  },

  {
    name: "Mahmud of Ghazni",
    period: "971–1030 CE",
    tangible: [{ img: "images/ghazni_ruins.jpg", short: "Ruins of Ghazni.", more: "Military expeditions influenced northern India." }],
    intangible: [{ img: "images/ghazni_raids.jpg", short: "Islamic expansion.", more: "Cultural and religious impacts through raids." }],
    why: "Paved the way for later Islamic dynasties."
  },

  {
    name: "Kakatiya-Hoysala",
    period: "11th–14th CE",
    tangible: [{ img: "images/kakatiya_temple.jpg", short: "Ramappa Temple.", more: "Known for ornate temple architecture." }],
    intangible: [{ img: "images/kakatiya_culture.jpg", short: "Local governance and culture.", more: "Encouraged literature and local traditions." }],
    why: "Strengthened Deccan regional culture."
  },

  {
    name: "Ghurid Dynasty",
    period: "12th–13th CE",
    tangible: [{ img: "images/ghurid_forts.jpg", short: "Forts and monuments.", more: "Introduced Islamic architecture to India." }],
    intangible: [{ img: "images/ghurid_admin.jpg", short: "Administration system.", more: "Brought Persian-influenced governance." }],
    why: "Foundation for Delhi Sultanate."
  },

  {
    name: "Delhi Sultanate",
    period: "1206–1526 CE",
    tangible: [{ img: "images/aqsma_mosque.jpg", short: "Qutb Minar and mosques.", more: "Architectural developments blending Islamic and local styles." }],
    intangible: [{ img: "images/islamic_culture.jpg", short: "Islamic culture and administration.", more: "Introduced new administrative practices and culture." }],
    why: "Established Muslim rule in North India."
  },

  {
    name: "Khilji Dynasty",
    period: "1290–1320 CE",
    tangible: [{ img: "images/khilji_fort.jpg", short: "Forts and market structures.", more: "Known for Alauddin Khilji's architectural projects." }],
    intangible: [{ img: "images/khilji_reforms.jpg", short: "Market and revenue reforms.", more: "Implemented strong revenue and market regulations." }],
    why: "Strengthened central authority in Delhi Sultanate."
  },

  {
    name: "Tughlaq Dynasty",
    period: "1320–1413 CE",
    tangible: [{ img: "images/tughlaq_fort.jpg", short: "Tughlaqabad Fort.", more: "Demonstrated military architecture." }],
    intangible: [{ img: "images/tughlaq_policy.jpg", short: "Administrative experiments.", more: "Tried to expand empire through innovative policies." }],
    why: "Marked ambitious but short-lived reforms."
  },

  {
    name: "Bahmani Sultanate",
    period: "1347–1527 CE",
    tangible: [{ img: "images/golconda.jpg", short: "Fortresses and mosques.", more: "Built strong forts and Islamic architecture." }],
    intangible: [{ img: "images/bahmani_culture.jpg", short: "Islamic administration and art.", more: "Introduced Persian-influenced culture." }],
    why: "Contributed to Deccan culture and architecture."
  },

  {
    name: "Vijayanagar Empire",
    period: "14th–17th CE",
    tangible: [{ img: "images/hampi.jpg", short: "Hampi ruins.", more: "Capital city with temples, markets, and infrastructure." }],
    intangible: [{ img: "images/vijayanagar_trade.jpg", short: "Trade and art culture.", more: "Promoted arts, music, and trade." }],
    why: "Unified South India culturally and politically."
  },

  {
    name: "Sayyid Dynasty",
    period: "1414–1451 CE",
    tangible: [{ img: "images/sayyid_fort.jpg", short: "Fortifications.", more: "Controlled Delhi region." }],
    intangible: [{ img: "images/sayyid_culture.jpg", short: "Weak central authority.", more: "Limited cultural contributions." }],
    why: "Maintained continuity after Tughlaqs."
  },

  {
    name: "Lodi Dynasty",
    period: "1451–1526 CE",
    tangible: [{ img: "images/lodi_fort.jpg", short: "Fortresses.", more: "Enhanced Delhi architecture and defense." }],
    intangible: [{ img: "images/lodi_culture.jpg", short: "Afghan administration.", more: "Introduced Afghan military practices." }],
    why: "Last dynasty of Delhi Sultanate."
  },

  {
    name: "Bhakti Movement",
    period: "15th–17th CE",
    tangible: [{ img: "images/bhakti_temple.jpg", short: "Bhakti temples.", more: "Temples promoting devotional worship." }],
    intangible: [{ img: "images/bhakti_poets.jpg", short: "Poets and saints.", more: "Spread devotion and social reform through literature." }],
    why: "Transformed spiritual and cultural life of India."
  },

  {
    name: "Sikh Movement",
    period: "15th–18th CE",
    tangible: [{ img: "images/golden_temple.jpg", short: "Golden Temple.", more: "Sacred site of Sikhism." }],
    intangible: [{ img: "images/sikh_culture.jpg", short: "Sikh teachings.", more: "Emphasized equality, devotion, and community service." }],
    why: "Established a distinct religious and cultural identity."
  },

  {
    name: "Bijapur Sultanate",
    period: "1489–1686 CE",
    tangible: [{ img: "images/bijapur_gol_gumbaz.jpg", short: "Gol Gumbaz.", more: "Architectural marvel with large dome." }],
    intangible: [{ img: "images/bijapur_culture.jpg", short: "Persian influenced art and culture.", more: "Flourished in arts, literature, and architecture." }],
    why: "Prominent Deccan Sultanate."
  },

  {
    name: "Barid Shahid of Bidar",
    period: "1489–1619 CE",
    tangible: [{ img: "images/barid_fort.jpg", short: "Fortifications.", more: "Defensive architecture in Bidar region." }],
    intangible: [{ img: "images/barid_culture.jpg", short: "Administration and local governance.", more: "Maintained regional control." }],
    why: "Minor Deccan Sultanate contributing to regional culture."
  },

  {
    name: "Nizam Shahi of Ahmadnagar",
    period: "1490–1636 CE",
    tangible: [{ img: "images/ahmadnagar_fort.jpg", short: "Ahmadnagar Fort.", more: "Strong fortifications and palaces." }],
    intangible: [{ img: "images/nizam_culture.jpg", short: "Persian administration.", more: "Introduced Persian culture and governance." }],
    why: "Important Deccan Sultanate."
  },

  {
    name: "Qutb Shahi of Golconda",
    period: "1512–1687 CE",
    tangible: [{ img: "images/golconda_fort.jpg", short: "Golconda Fort.", more: "Famous diamond trading center and fort." }],
    intangible: [{ img: "images/qutb_culture.jpg", short: "Persian-influenced court culture.", more: "Known for arts and poetry." }],
    why: "Significant Deccan Sultanate."
  },

  {
    name: "Mughal Dynasty",
    period: "1526–1857 CE",
    tangible: [{ img: "images/taj_mahal.jpg", short: "Taj Mahal and forts.", more: "Showcased grand Mughal architecture." }],
    intangible: [{ img: "images/mughal_culture.jpg", short: "Persianized court culture.", more: "Promoted arts, literature, and administration." }],
    why: "Established a centralized pan-Indian empire."
  },

  {
    name: "Sher Shah Suri",
    period: "1540–1545 CE",
    tangible: [{ img: "images/sher_fort.jpg", short: "Rohtas Fort.", more: "Military and administrative architecture." }],
    intangible: [{ img: "images/sher_reforms.jpg", short: "Revenue reforms.", more: "Introduced efficient land revenue system." }],
    why: "Short but impactful rule between Mughal periods."
  },

  {
    name: "Talikota",
    period: "1565 CE",
    tangible: [{ img: "images/talikota_battle.jpg", short: "Battle site.", more: "Site of decisive battle between Vijayanagar and Deccan Sultanates." }],
    intangible: [{ img: "images/talikota_history.jpg", short: "Cultural loss.", more: "Marked decline of Vijayanagar Empire." }],
    why: "Major turning point in South Indian history."
  },

  {
    name: "Marathas",
    period: "1674–1818 CE",
    tangible: [{ img: "images/shivaji_forts.jpg", short: "Forts and cities.", more: "Built and controlled forts across western India." }],
    intangible: [{ img: "images/maratha_culture.jpg", short: "Guerrilla warfare and administration.", more: "Developed a unique military and administrative system." }],
    why: "Resisted Mughal authority and expanded regional power."
  }
]
];


let i = 0;

function load() {
  const d = dynasties[i];
  dynastyName.innerText = d.name;
  dynastyPeriod.innerText = d.period;
  why.innerText = d.why;

  renderSection("tangible", d.tangible);
  renderSection("intangible", d.intangible);
}

function renderSection(id, items) {
  const box = document.getElementById(id);
  box.innerHTML = "";

  items.forEach(item => {
    box.innerHTML += `
      <div class="heritage-item">
        <img src="${item.img}" class="heritage-img" onclick="openModal('${item.more}')">
        <p>${item.short}</p>
      </div>
    `;
  });
}

function show(id) {
  tangible.style.display = "none";
  intangible.style.display = "none";
  document.getElementById(id).style.display = "block";
}

function nextDynasty() {
  i = (i + 1) % dynasties.length;
  load();
}

function prevDynasty() {
  i = (i - 1 + dynasties.length) % dynasties.length;
  load();
}

function openModal(text) {
  modal.style.display = "flex";
  modalText.innerText = text;
}

function closeModal() {
  modal.style.display = "none";
}

load();