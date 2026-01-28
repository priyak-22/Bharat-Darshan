const dynasties = [
  {
    name: "Mewar Kingdom",
    period: "7th–18th CE",
    tangible: [
      { img: "images/chittorgarh.jpg", text: "Chittorgarh and Kumbhalgarh forts showcasing Rajput military architecture." },
      { img: "images/mewar_palace.jpg", text: "Royal palaces and temples of Mewar." }
    ],
    intangible: [
      { img: "images/rajput_valor.jpg", text: "Rajput valor, honor, and resistance to invasions." },
      { img: "images/rajput_tradition.jpg", text: "Strong codes of honor and loyalty." }
    ]
  },

  {
    name: "Pala Dynasty",
    period: "8th–12th CE",
    tangible: [
      { img: "images/nalanda.jpg", text: "Nalanda and Vikramshila universities." },
      { img: "images/pala_sculpture.jpg", text: "Buddhist sculptures and monasteries." }
    ],
    intangible: [
      { img: "images/mahayana.jpg", text: "Promotion of Mahayana Buddhism." },
      { img: "images/scholarship.jpg", text: "Growth of scholarship and learning." }
    ]
  },

  {
    name: "Rashtrakuta Dynasty",
    period: "8th–10th CE",
    tangible: [
      { img: "images/kailasa.jpg", text: "Kailasa temple at Ellora carved from a single rock." },
      { img: "images/rashtrakuta_coins.jpg", text: "Coins and inscriptions of Rashtrakutas." }
    ],
    intangible: [
      { img: "images/admin_system.jpg", text: "Advanced administrative systems." },
      { img: "images/military_power.jpg", text: "Strong military and governance." }
    ]
  },

  {
    name: "Chola Dynasty",
    period: "9th–13th CE",
    tangible: [
      { img: "images/brihadeshwara.jpg", text: "Brihadeshwara Temple at Thanjavur." },
      { img: "images/chola_bronze.jpg", text: "World-famous Chola bronze sculptures." }
    ],
    intangible: [
      { img: "images/maritime_trade.jpg", text: "Maritime trade and naval strength." },
      { img: "images/tamil_literature.jpg", text: "Development of Tamil literature and rituals." }
    ]
  },

  {
    name: "Delhi Sultanate",
    period: "1206–1526 CE",
    tangible: [
      { img: "images/qutub_minar.jpg", text: "Qutb Minar and early Indo-Islamic architecture." },
      { img: "images/delhi_fort.jpg", text: "Forts, mosques, and tombs." }
    ],
    intangible: [
      { img: "images/islamic_admin.jpg", text: "Islamic administrative systems." },
      { img: "images/cultural_fusion.jpg", text: "Cultural fusion of Indian and Persian traditions." }
    ]
  },

  {
    name: "Vijayanagar Empire",
    period: "14th–17th CE",
    tangible: [
      { img: "images/hampi.jpg", text: "Magnificent ruins of Hampi." },
      { img: "images/vijayanagar_temple.jpg", text: "Grand temple complexes and irrigation systems." }
    ],
    intangible: [
      { img: "images/hindu_culture.jpg", text: "Promotion of Hindu culture and traditions." },
      { img: "images/trade.jpg", text: "Flourishing trade and economic prosperity." }
    ]
  },

  {
    name: "Mughal Empire",
    period: "1526–1857 CE",
    tangible: [
      { img: "images/taj_mahal.jpg", text: "Taj Mahal and Mughal architectural marvels." },
      { img: "images/red_fort.jpg", text: "Red Fort and grand palaces." }
    ],
    intangible: [
      { img: "images/mughal_art.jpg", text: "Persian-influenced art and culture." },
      { img: "images/admin_reforms.jpg", text: "Centralized administration and governance." }
    ]
  },

  {
    name: "Marathas",
    period: "17th–19th CE",
    tangible: [
      { img: "images/raigad.jpg", text: "Hill forts like Raigad and Pratapgad." },
      { img: "images/maratha_palace.jpg", text: "Maratha palaces and temples." }
    ],
    intangible: [
      { img: "images/maratha_army.jpg", text: "Strong military organization." },
      { img: "images/self_rule.jpg", text: "Idea of Swarajya and regional administration." }
    ]
  }
];

let i = 0;
let tIndex = 0;
let itIndex = 0;

function load() {
  const d = dynasties[i];

  document.getElementById("dynastyName").innerText = d.name;
  document.getElementById("dynastyPeriod").innerText = d.period;
 

  tIndex = 0;
  itIndex = 0;

  loadTangible();
  loadIntangible();
}

function loadTangible() {
  const item = dynasties[i].tangible[tIndex];
  document.getElementById("tangibleImg").src = item.img;
  document.getElementById("tangibleText").innerText = item.text;
}

function loadIntangible() {
  const item = dynasties[i].intangible[itIndex];
  document.getElementById("intangibleImg").src = item.img;
  document.getElementById("intangibleText").innerText = item.text;
}

function nextTangible() {
  tIndex = (tIndex + 1) % dynasties[i].tangible.length;
  loadTangible();
}

function nextIntangible() {
  itIndex = (itIndex + 1) % dynasties[i].intangible.length;
  loadIntangible();
}
function show(id) {
  document.getElementById("tangible").style.display = "none";
  document.getElementById("intangible").style.display = "none";
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

load();


