function showDetails(key) {
  const data = {
    pratihara: {
      title: "Gurjara-Pratihara Dynasty",
      info: "8th–11th century CE | Kannauj. Resisted Arab invasions and ruled much of North India."
    },
    rashtrakuta: {
      title: "Rashtrakuta Dynasty",
      info: "8th–10th century CE | Deccan Region. Built the grand Kailasa Temple at Ellora."
    },
    chola: {
      title: "Chola Dynasty",
      info: "9th–13th century CE | Tamil Nadu. Rajaraja I built the Brihadeeswara Temple, known for trade and navy."
    },
    chandela_chauhan: {
      title: "Chandela & Chauhan Dynasties",
      info: "9th–12th century CE | Central & North India. Famous for Khajuraho temples and Prithviraj Chauhan's reign."
    },
    rajput: {
      title: "Rajput Kingdoms",
      info: "8th–15th century CE | Northern, Western & Central India. Known for their valor, architecture, and resistance to invasions; included dynasties like Chauhans, Solankis, and Paramaras."
    },
    mewar: {
      title: "Mewar (Sisodia Rajputs)",
      info: "13th–15th century CE | Rajasthan. Symbol of Rajput pride; rulers like Rana Kumbha strengthened its glory."
    },
    kakatiya_hoysala: {
      title: "Kakatiya & Hoysala Dynasties",
      info: "12th–14th century CE | Telangana & Karnataka. Promoted art, architecture, and trade."
    },
    delhi_sultanate: {
      title: "Delhi Sultanate",
      info: "1206–1526 CE | Delhi. Five dynasties—Slave, Khilji, Tughlaq, Sayyid, and Lodi—ruled North India."
    },
    vijayanagara: {
      title: "Vijayanagara Empire",
      info: "1336–1646 CE | South India. Founded by Harihara and Bukka; major cultural revival."
    },
    bahmani: {
      title: "Bahmani Kingdom",
      info: "1347–1527 CE | Deccan Region. First major Muslim kingdom in the Deccan; later split into Sultanates."
    },
    end_medieval: {
      title: "End of Medieval Period",
      info: "1498 CE | Calicut (Kerala). Vasco da Gama's arrival marked the beginning of European influence."
    }
  };

  document.getElementById("title").innerText = data[key].title;
  document.getElementById("info").innerText = data[key].info;

  document.getElementById("details-box").style.display = "block";
}
