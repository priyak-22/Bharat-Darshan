const dynasties = [
  {
    name: "Nanda Dynasty",
    period: "4th Century BCE",
    tangible: [
      { img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Punch_marked_coin.jpg", text: "Fortified cities showing strong defense systems." },
      { img: "images/nanda_coins.jpg", text: "Punch-marked coins used for administration." }
    ],
    intangible: [
      { img: "images/nanda_admin.jpg", text: "Highly centralized administrative system." },
      { img: "images/nanda_tax.jpg", text: "Efficient taxation system across regions." }
    ],
    why: "Prepared the base for Mauryan unification."
  },

  {
    name: "Maurya Dynasty",
    period: "322–185 BCE",
    tangible: [
      { img: "images/ashoka_pillar.jpg", text: "Ashokan pillars with inscriptions of Dhamma." },
      { img: "images/maurya_stupa.jpg", text: "Stupas promoting Buddhist architecture." }
    ],
    intangible: [
      { img: "images/dhamma.jpg", text: "Dhamma as ethical governance." },
      { img: "images/buddhism.jpg", text: "Spread of Buddhism across Asia." }
    ],
    why: "First pan-Indian empire."
  },

  {
    name: "Shunga Dynasty",
    period: "185–73 BCE",
    tangible: [
      { img: "images/bharhut.jpg", text: "Bharhut stupa with stone railings." }
    ],
    intangible: [
      { img: "images/brahmanism.jpg", text: "Revival of Brahmanical traditions." }
    ],
    why: "Preserved indigenous culture."
  },

  {
    name: "Kanva Dynasty",
    period: "73–28 BCE",
    tangible: [
      { img: "images/kanva_coins.jpg", text: "Coins and inscriptions from Kanva rulers." }
    ],
    intangible: [
      { img: "images/court_tradition.jpg", text: "Continuation of court traditions." }
    ],
    why: "Bridge period in North India."
  },

  {
    name: "Indo-Greek Kingdom",
    period: "2nd Century BCE",
    tangible: [
      { img: "images/indo_greek_coins.jpg", text: "Coins with Greek and Indian scripts." }
    ],
    intangible: [
      { img: "images/syncretism.jpg", text: "Cultural and artistic syncretism." }
    ],
    why: "Connected India with the Hellenistic world."
  },

  {
    name: "Indo-Parthians",
    period: "1st Century CE",
    tangible: [
      { img: "images/parthian_coins.jpg", text: "Coins reflecting trade dominance." }
    ],
    intangible: [
      { img: "images/trade_diplomacy.jpg", text: "Trade diplomacy across regions." }
    ],
    why: "Promoted Silk Route trade."
  },

  {
    name: "Saka (Scythians)",
    period: "1st Century BCE–4th CE",
    tangible: [
      { img: "images/rock_caves.jpg", text: "Rock-cut cave architecture." }
    ],
    intangible: [
      { img: "images/admin_reforms.jpg", text: "Administrative reforms influenced by Central Asia." }
    ],
    why: "Linked Central Asia to India."
  },

  {
    name: "Kushana Dynasty",
    period: "1st–3rd Century CE",
    tangible: [
      { img: "images/gandhara.jpg", text: "Gandhara and Mathura schools of art." }
    ],
    intangible: [
      { img: "images/buddhist_patronage.jpg", text: "Royal patronage to Buddhism." }
    ],
    why: "Golden age of international trade."
  },

  {
    name: "Satavahana Dynasty",
    period: "1st BCE–3rd CE",
    tangible: [
      { img: "images/amaravati.jpg", text: "Amaravati stupa architecture." }
    ],
    intangible: [
      { img: "images/prakrit.jpg", text: "Promotion of Prakrit language." }
    ],
    why: "Unified Deccan culture."
  },

  {
    name: "Western Kshatrapas",
    period: "1st–4th CE",
    tangible: [
      { img: "images/kshatrapa_coins.jpg", text: "Coins showing maritime influence." }
    ],
    intangible: [
      { img: "images/maritime_trade.jpg", text: "Strong maritime trade culture." }
    ],
    why: "Controlled western trade routes."
  },

  {
    name: "Vakataka Dynasty",
    period: "3rd–5th CE",
    tangible: [
      { img: "images/ajanta.jpg", text: "Ajanta cave paintings." }
    ],
    intangible: [
      { img: "images/art_patronage.jpg", text: "Royal patronage of art." }
    ],
    why: "Flourishing classical art."
  },

  {
    name: "Gupta Dynasty",
    period: "4th–6th CE",
    tangible: [
      { img: "images/gupta_temple.jpg", text: "Development of temple architecture." }
    ],
    intangible: [
      { img: "images/science.jpg", text: "Advancements in science and literature." }
    ],
    why: "Golden Age of India."
  },

  {
    name: "Huna",
    period: "5th–6th CE",
    tangible: [
      { img: "images/huna_fort.jpg", text: "Military fortifications." }
    ],
    intangible: [
      { img: "images/military_culture.jpg", text: "Strong warrior culture." }
    ],
    why: "Triggered major political changes."
  },

  {
    name: "Mukharis",
    period: "6th CE",
    tangible: [
      { img: "images/mukhari_inscription.jpg", text: "Important inscriptions." }
    ],
    intangible: [
      { img: "images/admin_continuity.jpg", text: "Administrative continuity after Guptas." }
    ],
    why: "Transitional ruling power."
  },

  {
    name: "Maitraka Dynasty",
    period: "6th–8th CE",
    tangible: [
      { img: "images/valabhi.jpg", text: "Valabhi University ruins." }
    ],
    intangible: [
      { img: "images/education.jpg", text: "Strong educational traditions." }
    ],
    why: "Major learning center of western India."
  },

  {
    name: "Gauda Kingdom",
    period: "7th CE",
    tangible: [
      { img: "images/gauda_city.jpg", text: "Urban settlements in Bengal." }
    ],
    intangible: [
      { img: "images/bengal_culture.jpg", text: "Regional Bengali traditions." }
    ],
    why: "Strengthened regional identity."
  },

  {
    name: "Harsha Empire",
    period: "606–647 CE",
    tangible: [
      { img: "images/harsha_monastery.jpg", text: "Monasteries and institutions." }
    ],
    intangible: [
      { img: "images/cultural_unity.jpg", text: "Cultural and religious unity." }
    ],
    why: "North Indian consolidation."
  },

  {
    name: "Pala Dynasty",
    period: "8th–12th CE",
    tangible: [
      { img: "images/nalanda.jpg", text: "Nalanda and Vikramshila universities." }
    ],
    intangible: [
      { img: "images/tantric_buddhism.jpg", text: "Growth of Tantric Buddhism." }
    ],
    why: "Education and Buddhism flourished."
  },

  {
    name: "Gurjara-Pratihara",
    period: "8th–11th CE",
    tangible: [
      { img: "images/pratihara_temple.jpg", text: "Temple architecture." }
    ],
    intangible: [
      { img: "images/feudalism.jpg", text: "Feudal political structure." }
    ],
    why: "Defended North India."
  },

  {
    name: "Southern Kingdoms",
    period: "Early Historic Period",
    tangible: [
      { img: "images/south_temples.jpg", text: "Temples and port cities." }
    ],
    intangible: [
      { img: "images/dravidian.jpg", text: "Dravidian cultural traditions." }
    ],
    why: "Growth of maritime culture."
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

