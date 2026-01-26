const dynasties = [
  {
    name: "Nanda Dynasty",
    period: "4th Century BCE",
    tangible: "Fortified cities, coinage, administrative centers.",
    intangible: "Strong central administration, taxation system.",
    why: "Prepared the base for Mauryan unification."
  },
  {
    name: "Maurya Dynasty",
    period: "322–185 BCE",
    tangible: "Pillars of Ashoka, stupas, roads.",
    intangible: "Dhamma, governance ethics, spread of Buddhism.",
    why: "First pan-Indian empire."
  },
  {
    name: "Shunga Dynasty",
    period: "185–73 BCE",
    tangible: "Bharhut stupa, railings.",
    intangible: "Revival of Brahmanical traditions.",
    why: "Preserved indigenous culture."
  },
  {
    name: "Kanva Dynasty",
    period: "73–28 BCE",
    tangible: "Coins, inscriptions.",
    intangible: "Court traditions.",
    why: "Bridge period in north India."
  },
  {
    name: "Indo-Greek Kingdom",
    period: "2nd Century BCE",
    tangible: "Coins with Greek script.",
    intangible: "Cultural syncretism.",
    why: "Connected India with Hellenistic world."
  },
  {
    name: "Indo-Parthians",
    period: "1st Century CE",
    tangible: "Coins, trade routes.",
    intangible: "Trade diplomacy.",
    why: "Promoted Silk Route trade."
  },
  {
    name: "Saka (Scythians)",
    period: "1st Century BCE–4th CE",
    tangible: "Rock-cut caves.",
    intangible: "Administrative reforms.",
    why: "Linked Central Asia to India."
  },
  {
    name: "Kushana Dynasty",
    period: "1st–3rd Century CE",
    tangible: "Mathura & Gandhara art.",
    intangible: "Buddhist patronage.",
    why: "Golden age of trade."
  },
  {
    name: "Satavahana Dynasty",
    period: "1st BCE–3rd CE",
    tangible: "Amaravati stupa.",
    intangible: "Prakrit literature.",
    why: "Unified Deccan culture."
  },
  {
    name: "Western Kshatrapas",
    period: "1st–4th CE",
    tangible: "Coins, inscriptions.",
    intangible: "Maritime trade culture.",
    why: "Controlled western trade."
  },
  {
    name: "Vakataka Dynasty",
    period: "3rd–5th CE",
    tangible: "Ajanta caves.",
    intangible: "Artistic patronage.",
    why: "Flourishing classical art."
  },
  {
    name: "Gupta Dynasty",
    period: "4th–6th CE",
    tangible: "Temples, sculptures.",
    intangible: "Science, literature.",
    why: "Golden Age of India."
  },
  {
    name: "Huna",
    period: "5th–6th CE",
    tangible: "Fortifications.",
    intangible: "Military culture.",
    why: "Triggered political shifts."
  },
  {
    name: "Mukharis",
    period: "6th CE",
    tangible: "Inscriptions.",
    intangible: "Administrative continuity.",
    why: "Transition power."
  },
  {
    name: "Maitraka Dynasty",
    period: "6th–8th CE",
    tangible: "Valabhi university.",
    intangible: "Education tradition.",
    why: "Learning center of west India."
  },
  {
    name: "Gauda Kingdom",
    period: "7th CE",
    tangible: "Urban settlements.",
    intangible: "Bengal traditions.",
    why: "Regional identity."
  },
  {
    name: "Harsha Empire",
    period: "606–647 CE",
    tangible: "Monasteries.",
    intangible: "Cultural unity.",
    why: "North Indian consolidation."
  },
  {
    name: "Pala Dynasty",
    period: "8th–12th CE",
    tangible: "Nalanda, Vikramshila.",
    intangible: "Tantric Buddhism.",
    why: "Education & Buddhism."
  },
  {
    name: "Gurjara-Pratihara",
    period: "8th–11th CE",
    tangible: "Temple architecture.",
    intangible: "Feudal polity.",
    why: "Defended north India."
  },
  {
    name: "Southern Kingdoms",
    period: "Early historic period",
    tangible: "Temples, ports.",
    intangible: "Dravidian traditions.",
    why: "Maritime culture growth."
  }
];

let i = 0;

function load() {
  document.getElementById("dynastyName").innerText = dynasties[i].name;
  document.getElementById("dynastyPeriod").innerText = dynasties[i].period;
  document.getElementById("tangible").innerText = dynasties[i].tangible;
  document.getElementById("intangible").innerText = dynasties[i].intangible;
  document.getElementById("why").innerText = dynasties[i].why;
}

function nextDynasty() {
  i = (i + 1) % dynasties.length;
  hide();
  load();
}

function prevDynasty() {
  i = (i - 1 + dynasties.length) % dynasties.length;
  hide();
  load();
}

function show(id) {
  hide();
  document.getElementById(id).style.display = "block";
}

function hide() {
  document.getElementById("tangible").style.display = "none";
  document.getElementById("intangible").style.display = "none";
}

load();
