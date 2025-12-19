function showDetails(key) {
  const data = {
    nanda: {
      title: "Nanda Dynasty",
      info: "Founded by Mahapadma Nanda. Known for strong taxation and expansion of Magadha. Ended when Chandragupta Maurya overthrew Dhanananda."
    },
    maurya: {
      title: "Maurya Empire",
      info: "Founded by Chandragupta Maurya with Chanakya's guidance. Greatest ruler was Ashoka who spread Buddhism. Declined after weak rulers."
    },
    shunga: {
      title: "Shunga Dynasty",
      info: "Started by Pushyamitra Shunga after killing the last Mauryan king. Known for reviving Vedic traditions."
    },
    kanva: {
      title: "Kanva Dynasty",
      info: "Founded by Vasudeva Kanva. Continued Shunga traditions. Ended when Satavahanas took over."
    },
    indoGreek: {
      title: "Indo-Greek Kingdom",
      info: "Famous for King Menander. Blended Greek and Indian cultures. Known for excellent coinage."
    },
    indoParthian: {
      title: "Indo-Parthian Kingdom",
      info: "Founded by Gondophares. Known for cross-cultural trade. Declined after Kushanas rose."
    },
    saka: {
      title: "Saka (Scythians)",
      info: "Nomadic tribes who settled in western India. Known for the Saka Era (78 CE)."
    },
    westernKshatrapas: {
      title: "Western Kshatrapas",
      info: "Rival of Satavahanas. Ruled Gujarat and Malwa. Ended after Gupta expansion."
    },
    satavahana: {
      title: "Satavahana Dynasty",
      info: "Founded by Simuka. Famous ruler Gautamiputra Satakarni. Known for trade routes and Buddhist caves."
    },
    kushana: {
      title: "Kushana Empire",
      info: "Best known ruler was Kanishka. Major supporter of Buddhism. Important for Silk Route trade."
    },
    gupta: {
      title: "Gupta Empire",
      info: "Golden Age of India. Chandragupta I, Samudragupta, Chandragupta II. Advances in science, maths and arts."
    },
    vakataka: {
      title: "Vakataka Dynasty",
      info: "Allies of Gupta Empire. Known for Ajanta patronage."
    },
    huna: {
      title: "Huna Invasions",
      info: "Central Asian invaders who weakened the Gupta Empire."
    },
    maitraka: {
      title: "Maitraka Dynasty",
      info: "Ruled Saurashtra region. Capital at Vallabhi."
    },
    gauda: {
      title: "Gauda Kingdom",
      info: "Early Bengal kingdom. Important rulers include Shashanka."
    },
    maukharis: {
      title: "Maukharis",
      info: "Centered in Kannauj before Harsha united north India."
    },
    harsha: {
      title: "Harsha Empire",
      info: "Ruled by Harshavardhana. United north India after fall of Guptas."
    },
    pratihara: {
      title: "Gurjara-Pratihara",
      info: "Strong Rajput empire. Famous for resisting Arab invasions."
    },
    pala: {
      title: "Pala Empire",
      info: "Strong Buddhist empire in Bengal. Famous rulers: Gopala, Dharmapala."
    },
    southern: {
      title: "Southern Kingdoms",
      info: "Chola (Rajaraja, Rajendra), Chera, Pandya. Known for temples, navy and culture."
    }
  };

  document.getElementById("title").innerText = data[key].title;
  document.getElementById("info").innerText = data[key].info;

  document.getElementById("details-box").style.display = "block";
}