
const dynasties = [

[
  {
    name: "Portuguese in India",
    period: "1498 CE onwards",
    tangible: [
      { img: "images/goa_church.jpg", short: "Churches and forts in Goa.", more: "The Portuguese established early European settlements, especially in Goa." }
    ],
    intangible: [
      { img: "images/portuguese_trade.jpg", short: "Maritime trade practices.", more: "Introduced European naval power and trade routes." }
    ],
    why: "Marked the beginning of European colonial presence in India."
  },

  {
    name: "Dutch in India",
    period: "1605–1795 CE",
    tangible: [
      { img: "images/dutch_factories.jpg", short: "Trading factories.", more: "The Dutch set up trading centers along coastal India." }
    ],
    intangible: [
      { img: "images/dutch_trade.jpg", short: "Commercial networks.", more: "Focused mainly on spice trade." }
    ],
    why: "Played a role in early European trade competition."
  },

  {
    name: "Danes in India",
    period: "1620–1845 CE",
    tangible: [
      { img: "images/serampore.jpg", short: "Serampore settlement.", more: "Serampore was the main Danish settlement in India." }
    ],
    intangible: [
      { img: "images/missionary_work.jpg", short: "Missionary activities.", more: "Contributed to education and printing." }
    ],
    why: "A smaller but culturally significant European presence."
  },

  {
    name: "French in India",
    period: "1667–1954 CE",
    tangible: [
      { img: "images/pondicherry.jpg", short: "Pondicherry town.", more: "French urban planning and architecture are visible in Pondicherry." }
    ],
    intangible: [
      { img: "images/french_admin.jpg", short: "French administration.", more: "Introduced European legal and administrative ideas." }
    ],
    why: "Major European rival of the British in India."
  },

  {
    name: "Anglo-French Rivalry",
    period: "1740–1763 CE",
    tangible: [
      { img: "images/carnatic_wars.jpg", short: "Carnatic Wars sites.", more: "Battles fought mainly in South India." }
    ],
    intangible: [
      { img: "images/political_intrigue.jpg", short: "Indian alliances.", more: "European powers interfered in Indian politics." }
    ],
    why: "Cleared the path for British dominance."
  },

  {
    name: "Battle of Plassey",
    period: "1757 CE",
    tangible: [
      { img: "images/plassey.jpg", short: "Battlefield of Plassey.", more: "Robert Clive defeated Siraj-ud-Daulah." }
    ],
    intangible: [
      { img: "images/company_rule.jpg", short: "Company rule begins.", more: "Marked the start of British political control." }
    ],
    why: "Foundation of British rule in India."
  },

  {
    name: "Battle of Buxar",
    period: "1764 CE",
    tangible: [
      { img: "images/buxar.jpg", short: "Battlefield of Buxar.", more: "British victory over combined Indian forces." }
    ],
    intangible: [
      { img: "images/diwani_rights.jpg", short: "Diwani rights.", more: "British gained revenue control of Bengal." }
    ],
    why: "Confirmed British supremacy in North India."
  },

  {
    name: "British Expansion",
    period: "1765–1857 CE",
    tangible: [
      { img: "images/british_forts.jpg", short: "British forts and cities.", more: "Infrastructure built to support colonial rule." }
    ],
    intangible: [
      { img: "images/admin_reforms.jpg", short: "Administrative systems.", more: "Introduced Western education and laws." }
    ],
    why: "Transformed India politically and economically."
  },

  {
    name: "Revolt of 1857",
    period: "1857 CE",
    tangible: [
      { img: "images/1857_sites.jpg", short: "Revolt centers.", more: "Major uprising across North India." }
    ],
    intangible: [
      { img: "images/sepoy_revolt.jpg", short: "Popular resistance.", more: "First large-scale resistance against British rule." }
    ],
    why: "Marked the end of Company rule."
  },

  {
    name: "Indian National Congress",
    period: "1885 CE onwards",
    tangible: [
      { img: "images/inc_session.jpg", short: "Congress sessions.", more: "Platform for Indian political expression." }
    ],
    intangible: [
      { img: "images/nationalism.jpg", short: "Indian nationalism.", more: "Unified Indians politically." }
    ],
    why: "Became the backbone of freedom struggle."
  },

  {
    name: "Bengal Swadeshi Movement",
    period: "1905–1911 CE",
    tangible: [
      { img: "images/swadeshi_goods.jpg", short: "Swadeshi products.", more: "Promotion of Indian-made goods." }
    ],
    intangible: [
      { img: "images/boycott.jpg", short: "Boycott movement.", more: "Economic resistance to British goods." }
    ],
    why: "Mass-based nationalist movement."
  },

  {
    name: "Home Rule Movement",
    period: "1916–1918 CE",
    tangible: [
      { img: "images/home_rule_league.jpg", short: "Home Rule League.", more: "Political organization demanding self-rule." }
    ],
    intangible: [
      { img: "images/self_governance.jpg", short: "Demand for autonomy.", more: "Prepared ground for mass movements." }
    ],
    why: "Strengthened political awareness."
  },

  {
    name: "Jallianwala Bagh",
    period: "1919 CE",
    tangible: [
      { img: "images/jallianwala.jpg", short: "Jallianwala Bagh memorial.", more: "Site of brutal massacre." }
    ],
    intangible: [
      { img: "images/national_outrage.jpg", short: "National outrage.", more: "Turned public opinion against British rule." }
    ],
    why: "A turning point in freedom struggle."
  },

  {
    name: "Non-Cooperation Movement",
    period: "1920–1922 CE",
    tangible: [
      { img: "images/non_cooperation.jpg", short: "Mass protests.", more: "Boycott of British institutions." }
    ],
    intangible: [
      { img: "images/gandhian_methods.jpg", short: "Gandhian methods.", more: "Non-violence and civil resistance." }
    ],
    why: "First nationwide mass movement."
  },

  {
    name: "Civil Disobedience Movement",
    period: "1930–1934 CE",
    tangible: [
      { img: "images/dandi_march.jpg", short: "Dandi March.", more: "Salt Satyagraha led by Gandhi." }
    ],
    intangible: [
      { img: "images/civil_resistance.jpg", short: "Breaking unjust laws.", more: "Direct challenge to colonial authority." }
    ],
    why: "Deepened mass participation."
  },

  {
    name: "Quit India Movement",
    period: "1942 CE",
    tangible: [
      { img: "images/quit_india.jpg", short: "Protest movements.", more: "Mass uprisings across India." }
    ],
    intangible: [
      { img: "images/do_or_die.jpg", short: "Do or Die call.", more: "Final push for independence." }
    ],
    why: "Accelerated British exit."
  },

  {
    name: "Indian Independence",
    period: "1947 CE",
    tangible: [
      { img: "images/independence.jpg", short: "Independence celebrations.", more: "End of British rule." }
    ],
    intangible: [
      { img: "images/freedom.jpg", short: "Sovereignty and democracy.", more: "Birth of modern India." }
    ],
    why: "Culmination of long freedom struggle."
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

