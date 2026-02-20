const dynastiesData = {
 "nanda": {
    name: "Nanda Dynasty",
    period: "4th Century BCE",
    tangible: [
      { img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Punch_marked_coin.jpg", short: "Urban Development", more: "Indicated strong monetary system." },
      { img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Pataliputra_ruins.jpg", short: "Irrigation System", more: "Political and administrative capital." },
      { img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Punch_marked_coin.jpg", short: "Fortifications", more: "Indicated strong monetary system." },
      { img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Pataliputra_ruins.jpg", short: "Military Infrastructure", more: "Political and administrative capital." },
      { img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Pataliputra_ruins.jpg", short: "Economic System", more: "Political and administrative capital." }
    ],
    intangible: [
      { img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Ancient_Indian_Administration.jpg", short: "Centralized Administration", more: "Controlled provinces efficiently." },
      { img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Ancient_Indian_Taxation.jpg", short: "Revenue Administration", more: "Revenue collected systematically." },
      { img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Ancient_Indian_Administration.jpg", short: "Political Expansion", more: "Controlled provinces efficiently." },
      { img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Ancient_Indian_Taxation.jpg", short: "Military Organization", more: "Revenue collected systematically." },
      { img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Ancient_Indian_Taxation.jpg", short: "Foundation for Mauryan Empire", more: "Revenue collected systematically." }
    
    ],
    why: "Laid foundation for Mauryan Empire."
  },

  "maurya": {
    name: "Maurya Dynasty",
    period: "321–185 BCE",
    tangible: [
      { img: "images/ashoka_edict.jpg", short: "Edicts of Ashoka", more: "Promoted governance and Buddhist principles." },
      { img: "images/maurya_palace.jpg", short: "Palaces", more: "Built administrative centers and forts." }
    ],
    intangible: [
      { img: "images/maurya_admin.jpg", short: "Centralized administration", more: "Efficient bureaucracy and military." }
    ],
    why: "Unified India under centralized rule."
  },

  "shunga": {
    name: "Shunga Dynasty",
    period: "2nd–1st BCE",
    tangible: [
      { img: "images/shunga_stupa.jpg", short: "Stupas & temples", more: "Promoted Buddhist architecture." }
    ],
    intangible: [
      { img: "images/shunga_culture.jpg", short: "Art & religion", more: "Supported Brahmanical and Buddhist traditions." }
    ],
    why: "Preserved Indian art and culture post-Maurya."
  },

  "kanva": {
    name: "Kanva Dynasty",
    period: "1st–2nd BCE",
    tangible: [
      { img: "images/kanva_art.jpg", short: "Art & sculptures", more: "Continued Mauryan-style art and coins." }
    ],
    intangible: [
      { img: "images/kanva_culture.jpg", short: "Political administration", more: "Maintained small but stable rule in Magadha." }
    ],
    why: "Bridge between Mauryas and later regional kingdoms."
  },

  "indo-greek": {
    name: "Indo-Greek Kingdom",
    period: "2nd BCE – 1st CE",
    tangible: [
      { img: "images/indo_greek_coin.jpg", short: "Coins", more: "Greek-style coins used for trade." }
    ],
    intangible: [
      { img: "images/indo_greek_culture.jpg", short: "Hellenistic culture", more: "Blend of Greek and Indian culture." }
    ],
    why: "Introduced Greek influence in northern India."
  },

  "saka": {
    name: "Saka Dynasty",
    period: "1st Century BCE – 4th CE",
    tangible: [
      { img: "images/saka_coin.jpg", short: "Coins", more: "Gold and silver coins with inscriptions." }
    ],
    intangible: [
      { img: "images/saka_culture.jpg", short: "Influence", more: "Spread Indo-Scythian culture in India." }
    ],
    why: "Introduced new cultural and trade practices."
  },

  "satvahana": {
    name: "Satavahana Dynasty",
    period: "1st Century BCE – 2nd CE",
    tangible: [
      { img: "images/satavahana_stupa.jpg", short: "Buddhist stupas", more: "Built stupas and trade centers." }
    ],
    intangible: [
      { img: "images/satavahana_culture.jpg", short: "Trade & administration", more: "Encouraged maritime trade." }
    ],
    why: "Connected Deccan with other regions through trade."
  },

  "indo-parthians": {
    name: "Indo-Parthian Kingdom",
    period: "19–226 CE",
    tangible: [
      { img: "images/indo_parthian_coin.jpg", short: "Coins", more: "Parthian-style coins with local inscriptions." }
    ],
    intangible: [
      { img: "images/indo_parthian_culture.jpg", short: "Culture & trade", more: "Promoted trade and cross-cultural exchange." }
    ],
    why: "Linked India with Central Asia culturally and economically."
  },

  "kushana": {
    name: "Kushana Dynasty",
    period: "1st–3rd CE",
    tangible: [
      { img: "images/kushana_coin.jpg", short: "Coins", more: "Gold coins showed trade and wealth." },
      { img: "images/kushana_stupa.jpg", short: "Buddhist stupas", more: "Built stupas promoting Buddhism." }
    ],
    intangible: [
      { img: "images/kushana_culture.jpg", short: "Art & trade", more: "Spread Gandhara art and trade networks." }
    ],
    why: "Expanded trade and spread Buddhism to Central Asia."
  },

  "western-kshatrapas": {
    name: "Western Kshatrapas",
    period: "1st–4th CE",
    tangible: [
      { img: "images/kshatrapa_coin.jpg", short: "Coins", more: "Showed economic strength." }
    ],
    intangible: [
      { img: "images/kshatrapa_culture.jpg", short: "Trade & governance", more: "Maintained trade routes and regional administration." }
    ],
    why: "Important for western India trade and governance."
  },

  "vakataka": {
    name: "Vakataka Dynasty",
    period: "3rd–5th CE",
    tangible: [
      { img: "images/vakataka_caves.jpg", short: "Ajanta caves", more: "Built rock-cut caves with murals." }
    ],
    intangible: [
      { img: "images/vakataka_culture.jpg", short: "Art & administration", more: "Promoted regional culture." }
    ],
    why: "Preserved art and strengthened regional power."
  },

  "gupta": {
    name: "Gupta Dynasty",
    period: "4th–6th CE",
    tangible: [
      { img: "images/gupta_coin.jpg", short: "Gold coins", more: "Coins showed prosperity." },
      { img: "images/gupta_temple.jpg", short: "Hindu temples", more: "Temples flourished under Gupta rule." }
    ],
    intangible: [
      { img: "images/gupta_math.jpg", short: "Science & Math", more: "Advances in mathematics and astronomy." }
    ],
    why: "Golden Age of India in arts, science, and politics."
  },

  
  "huna": {
    name: "Huna Dynasty",
    period: "5th–6th CE",
    tangible: [
      { img: "images/huna_fort.jpg", short: "Fortifications", more: "Built defensive fortifications." }
    ],
    intangible: [
      { img: "images/huna_culture.jpg", short: "Warrior culture", more: "Fierce warrior traditions and invasions." }
    ],
    why: "Influenced Indian politics and weakened Gupta empire."
  },

  "maitraka": {
    name: "Maitraka Dynasty",
    period: "475–767 CE",
    tangible: [
      { img: "images/maitraka_temples.jpg", short: "Temples", more: "Built Buddhist and Hindu temples." }
    ],
    intangible: [
      { img: "images/maitraka_culture.jpg", short: "Trade & administration", more: "Strong trade links and local governance." }
    ],
    why: "Important for Gujarat region history."
  },

  "harsha": {
    name: "Harsha Dynasty",
    period: "606–647 CE",
    tangible: [
      { img: "images/harsha_palace.jpg", short: "Palaces & monuments", more: "Built monuments and promoted Buddhism." }
    ],
    intangible: [
      { img: "images/harsha_culture.jpg", short: "Cultural patronage", more: "Supported art, literature, and religion." }
    ],
    why: "Unified North India temporarily under one rule."
  },


 "gauda": {
    name: "Gauda Dynasty",
    period: "7th–8th CE",
    tangible: [
      { img: "images/gauda_fort.jpg", short: "Fort ruins", more: "Gauda had fortified cities." }
    ],
    intangible: [
      { img: "images/gauda_culture.jpg", short: "Administration", more: "Structured administration system." }
    ],
    why: "Important for eastern Indian politics and culture."
  },

  "gurjara_pratihara": {
    name: "Gurjara-Pratihara",
    period: "8th–11th CE",
    tangible: [
      { img: "images/pratihara_temple.jpg", short: "Temple architecture", more: "Built fortified temples and palaces." }
    ],
    intangible: [
      { img: "images/feudalism.jpg", short: "Feudal system", more: "Maintained strong feudal defense in northern India." }
    ],
    why: "Defended North India from invasions."
  },

  "pala": {
    name: "Pala Dynasty",
    period: "8th–12th CE",
    tangible: [
      { img: "images/nalanda.jpg", short: "Nalanda University ruins", more: "Center of Buddhist learning attracting students from Asia." }
    ],
    intangible: [
      { img: "images/tantric_buddhism.jpg", short: "Growth of Tantric Buddhism", more: "Rulers patronized Buddhist traditions." }
    ],
    why: "Education and Buddhism flourished."
  },

  "mukharis": {
    name: "Mukharis",
    period: "Post-Gupta period",
    tangible: [
      { img: "images/mukhari_art.jpg", short: "Art & temples", more: "Continued local temple traditions." }
    ],
    intangible: [
      { img: "images/mukhari_culture.jpg", short: "Regional governance", more: "Local rulers with limited influence." }
    ],
    why: "Maintained regional culture after Gupta decline."
  },

  "southern-kingdoms": {
    name: "Southern Kingdoms",
    period: "3rd–13th CE",
    tangible: [
      { img: "images/southern_temple.jpg", short: "Dravidian temples", more: "Famous temple architecture." }
    ],
    intangible: [
      { img: "images/southern_culture.jpg", short: "Trade & culture", more: "Maritime trade and cultural expansion." }
    ],
    why: "Flourished in art, trade, and administration."
  },

};

const dynastyKeys = Object.keys(dynastiesData);
let i = 0;

// load dynasty info
function load() {
  const key = dynastyKeys[i];
  const d = dynastiesData[key];

  document.getElementById("dynastyName").innerText = d.name;
  document.getElementById("dynastyPeriod").innerText = d.period;
  document.getElementById("why").innerText = d.why;

  renderSection("tangible", d.tangible);
  renderSection("intangible", d.intangible);

  show("tangible"); // show tangible by default
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
  document.getElementById("tangible").style.display = "none";
  document.getElementById("intangible").style.display = "none";
  document.getElementById(id).style.display = "block";
}

function nextDynasty() {
  i = (i + 1) % dynastyKeys.length;
  load();
}

function prevDynasty() {
  i = (i - 1 + dynastyKeys.length) % dynastyKeys.length;
  load();
}

function openModal(text) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalText").innerText = text;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// initial load
window.onload = load;
