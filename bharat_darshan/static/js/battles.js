/* =========================
   MAP INITIALIZATION
========================= */

const map = L.map('map', {
  center: [22.9734, 78.6569], // India center
  zoom: 5,
  minZoom: 4,
  maxZoom: 12
});

// Lock map bounds to India
map.setMaxBounds([
  [6, 68],   // South-West
  [37, 98]   // North-East
]);

/* =========================
   BASE TILE LAYER
========================= */
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  subdomains: 'abcd',
  attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
  maxZoom: 19
}).addTo(map);






/* =========================
   MAP PANES (LAYER CONTROL)
========================= */

map.createPane('countryPane');
map.getPane('countryPane').style.zIndex = 400;

map.createPane('statePane');
map.getPane('statePane').style.zIndex = 410;

map.createPane('markerPane');
map.getPane('markerPane').style.zIndex = 450;

/* =========================
   INDIA INTERNATIONAL BORDER
========================= */

fetch('../data/india_border.json')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      pane: 'countryPane',
      style: {
        color: '#4b1e04',    // deep heritage brown
        weight: 3.2,
        dashArray: '8,6',
        fillOpacity: 0
      }
    }).addTo(map);
  })
  .catch(err => console.error('India border load error:', err));

/* =========================
   INDIA STATE BOUNDARIES
========================= */

fetch('../data/india_states.json')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      pane: 'statePane',
      style: {
        color: '#7b3f00',
        weight: 1.2,
        fillColor: '#f5deb3',
        fillOpacity: 0.25
      },
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(feature.properties.NAME_1, {
          sticky: true
        });
      }
    }).addTo(map);
  })
  .catch(err => console.error('State border load error:', err));

/* =========================
   CUSTOM MARKER ICON
========================= */


const battleIcon = L.icon({
  iconUrl: BATTLE_ICON_URL,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -30]
});

/* =========================
   EVENTS DATA
========================= */

const events = [
  // Ancient
  { id: "maurya_seleucid", name: "Maurya–Seleucid Treaty (305 BCE)", coords: [33.6, 72.9], region: "Punjab", year: "305 BCE", summary: "The Maurya-Seleucid Treaty of 305 BCE was an important agreement between Chandragupta Maurya, the founder of the Mauryan Empire, and Seleucus I Nicator, a powerful ruler who emerged after the death of Alexander the Great. When Alexander died, his empire broke apart, and Seleucus tried to take control of the north western regions of India. This brought him into direct conflict with Chandragupta, whose empire was rapidly growingChandragupta successfully stopped Seleucus’ advance and secured control over areas beyond the Indus River, including parts of present day Afghanistan and Baluchistan. Realizing that continued fighting would be costly and ineffective, Seleucus chose to make peace instead. Under the terms of the treaty, he handed over these territories to Chandragupta and, in return, received 500 war elephants. These elephants later became a key strength in Seleucus’ military campaigns in West Asia Beyond ending the conflict, the treaty helped build friendly relations between the two empires. There were diplomatic exchanges, and historians believe a marriage alliance may also have been part of the agreement. This treaty stands out as one of the earliest examples of formal diplomacy between India and the Greek world. It also secured the north western borders of the Mauryan Empire, giving Chandragupta and his successors the stability they needed to focus on governing and strengthening their empire from within." },

  { id: "kalinga_war", name: "Kalinga War (261 BCE)", coords: [20.5, 85.9], region: "Odisha", year: "261 BCE", summary: "The Kalinga War of 261 BCE was one of the most important events in Indian history and a turning point in the reign of Emperor Ashoka of the Mauryan Empire. Kalinga, located in present day Odisha, was a prosperous and strategically important kingdom that resisted Mauryan control. Determined to expand his empire, Ashoka launched a massive military campaign against it. The war was extremely violent and caused widespread destruction. Ancient records, including Ashoka’s own inscriptions, describe the immense suffering it brought, with thousands killed, wounded, or taken captive. When Ashoka saw the human cost of his victory, he was deeply shaken. The suffering of civilians, soldiers, and families affected him more than the success of the conquest.This experience led to a profound change in Ashoka’s outlook on power and governance. He renounced aggressive warfare and embraced the principles of Dhamma, which emphasized non violence, compassion, tolerance, and moral conduct. After the Kalinga War, Ashoka focused on ruling through peace rather than force, promoting social welfare, religious harmony, and ethical administration across his empire. The war thus transformed Ashoka from a conqueror into one of history’s most compassionate and respected rulers." },

  // Classical & Early Medieval
  { id: "samudragupta_campaigns", name: "Samudragupta Campaigns", coords: [25.4, 81.8], region: "Prayagraj", year: "350 CE", summary: "The campaigns of Samudragupta, carried out around 350 CE, marked the rise of the Gupta Empire as one of the most powerful empires in ancient India. From his capital at Prayagraj, Samudragupta launched a series of well planned military expeditions to expand and secure his authority across large parts of the subcontinent. His achievements are mainly known from the Allahabad Pillar Inscription, which records his victories in detail. Samudragupta followed a strategic approach to conquest. In northern India, he directly defeated and annexed several kingdoms, bringing them under Gupta control. In the southern regions, instead of permanent occupation, he subdued rulers, restored them to their thrones, and accepted tribute and loyalty. This policy helped him expand influence without overextending his empire.Through these campaigns, Samudragupta established political unity, ensured steady revenue, and strengthened royal authority. His military success earned him the title “Napoleon of India” from historians. Beyond warfare, Samudragupta was also a patron of art, culture, and learning, showing that his conquests were aimed not only at expansion but at creating a stable and flourishing empire." },

  { id: "huna_invasion", name: "Huna Invasions", coords: [34.1, 74.8], region: "Kashmir", year: "450 CE", summary: "The Huna Invasions around 450 CE were a series of attacks carried out by the Hunas, a Central Asian nomadic group, who entered north India through the north western mountain passes. Regions like Kashmir and the surrounding areas became key entry points for these invasions. At the time, the Gupta Empire was already facing internal challenges, which made it more vulnerable to external threats. The Hunas, especially under leaders such as Toramana and Mihirakula, caused widespread destruction across north India. Cities, trade routes, and agricultural areas suffered heavily, and many local rulers were defeated or forced to accept Huna authority. Their invasions weakened the political stability that the Guptas had maintained for generations. Although Indian rulers eventually resisted and defeated the Hunas, the damage had already been done. The invasions greatly accelerated the decline of the Gupta Empire and marked the beginning of political fragmentation in north India. This period saw the rise of smaller regional kingdoms, ending the long phase of centralized imperial rule that had defined the Gupta age." },

  // Sultanate
  { id: "tarain_1", name: "1st Battle of Tarain (1191)", coords: [29.11, 76.97], region: "Haryana", year: "1191 CE", summary: "Prithviraj vs Ghori. The First Battle of Tarain, fought in 1191 CE near present day Haryana, was a major conflict between the Rajput ruler Prithviraj Chauhan and Muhammad Ghori, the ruler of the Ghurid Empire. At this time, Muhammad Ghori was trying to expand his control into northern India, while Prithviraj Chauhan stood as one of the strongest defenders of the region. In this battle, Prithviraj Chauhan’s forces fought with determination and successfully defeated Muhammad Ghori’s army. Ghori himself was seriously wounded and had to retreat, marking a significant victory for the Rajputs. This win temporarily stopped Ghurid expansion into India and strengthened Prithviraj’s reputation as a powerful and skilled warrior. However, the victory was not fully capitalized upon. Prithviraj did not pursue the retreating Ghori or destroy his military base, which allowed Ghori to regroup and prepare for another attack. As a result, this battle became an important prelude to the Second Battle of Tarain, which would take place the following year and have far reaching consequences for Indian history." },

  { id: "tarain_2", name: "2nd Battle of Tarain (1192)", coords: [29.11, 76.98], region: "Haryana", year: "1192 CE", summary: "Ghori defeats Prithviraj. The Second Battle of Tarain, fought in 1192 CE near present day Haryana, proved to be a decisive moment in Indian history. After his defeat the previous year, Muhammad Ghori returned with a reorganized and disciplined army, determined to overcome Prithviraj Chauhan and establish his control over northern India. Unlike the first battle, Ghori avoided direct frontal combat and used new tactics, including swift cavalry movements and strategic retreats to tire the Rajput forces. Prithviraj Chauhan’s army, though brave and numerically strong, was unable to adapt effectively to these methods. The battle ended in a decisive victory for Muhammad Ghori, and Prithviraj Chauhan was defeated and captured. This victory opened the gates of northern India to Ghurid expansion. It led to the establishment of Muslim rule in Delhi under Ghori’s generals, especially Qutbuddin Aibak, and marked the beginning of the Delhi Sultanate. The Second Battle of Tarain is therefore remembered as a turning point that reshaped the political and military landscape of medieval India." },

  // Mughal
  { id: "panipat_1", name: "1st Battle of Panipat (1526)", coords: [29.39, 76.92], region: "Haryana", year: "1526 CE", summary: "Babur defeats Lodi. The First Battle of Panipat, fought in 1526 CE near present day Haryana, was a landmark event that changed the course of Indian history. It was fought between Babur, the founder of the Mughal Empire, and Ibrahim Lodi, the Sultan of Delhi. Babur entered India with a smaller but well trained army, while Ibrahim Lodi commanded a much larger force. Babur’s victory was largely due to his effective use of artillery and modern military tactics, which were new to Indian warfare at the time. He employed field cannons and a defensive formation that allowed his troops to withstand repeated attacks by Lodi’s forces. The Afghan army, unfamiliar with these weapons and tactics, suffered heavy losses, and Ibrahim Lodi was killed on the battlefield.The defeat of Ibrahim Lodi brought an end to the Delhi Sultanate and laid the foundation for Mughal rule in India. This battle marked the beginning of a new era in Indian history, with the Mughals introducing centralized administration, military reforms, and a lasting cultural impact on the subcontinent." },

  { id: "khanwa", name: "Battle of Khanwa (1527)", coords: [27.0, 75.7], region: "Rajasthan", year: "1527 CE", summary: "Babur defeats Rana Sanga. The Battle of Khanwa, fought in 1527 CE near present day Rajasthan, was one of the most crucial battles in Babur’s early reign in India. After defeating Ibrahim Lodi at Panipat, Babur faced a powerful challenge from Rana Sanga of Mewar, who led a confederation of Rajput rulers determined to drive the Mughals out of India. Rana Sanga’s forces were large and highly motivated, relying on traditional Rajput bravery and close combat tactics. Babur, however, once again used his strength in military planning. He employed artillery, matchlock guns, and defensive formations such as carts tied together, along with field trenches, to protect his troops and break the Rajput charges.  Despite fierce resistance, Babur’s disciplined army and superior use of firearms turned the tide of the battle. Rana Sanga was seriously wounded and had to withdraw, leading to a decisive Mughal victory. The Battle of Khanwa firmly established Mughal authority in northern India and ended the major Rajput challenge to Babur’s rule. It confirmed that the Mughals were not just temporary invaders but a lasting power in the subcontinent." },

  { id: "panipat_2", name: "2nd Battle of Panipat (1556)", coords: [29.39, 76.98], region: "Haryana", year: "1556 CE", summary: "Akbar defeats Hemu. The Second Battle of Panipat, fought in 1556 CE near present-day Haryana, was a decisive battle that secured Mughal rule in India for the next century. It was fought between the young Mughal emperor Akbar, guided by his regent Bairam Khan, and Hemu, a Hindu general and ruler who had captured Delhi and declared himself king after briefly defeating the Mughals. Hemu commanded a large and disciplined army and initially had the advantage, but during the battle, he was struck in the eye by an arrow and incapacitated. His forces, losing their leader, panicked and were decisively defeated by the Mughal army. Hemu was captured and later executed, marking the end of his short-lived rule. This victory was crucial for Akbar, who was only 13 years old at the time. It restored Mughal control over northern India and allowed Akbar to consolidate his empire. The battle is remembered as one of the largest and bloodiest fought in 16th century India, and it laid the foundation for Akbar’s long and influential reign." },

  { id: "haldighati", name: "Battle of Haldighati (1576)", coords: [24.6, 73.7], region: "Rajasthan", year: "1576 CE", summary: "The Battle of Haldighati (1576) was fought between Maharana Pratap of Mewar and the Mughal forces of Emperor Akbar, led by Raja Man Singh of Amber. The battle took place on 18 June 1576 in the narrow mountain pass of Haldighati near present day Udaipur, Rajasthan. Akbar wanted Mewar to accept Mughal supremacy, but Maharana Pratap refused to surrender his independence. Despite being outnumbered and poorly equipped, Maharana Pratap’s army fought fiercely. The battle was intense and lasted only a few hours. Although the Mughals gained control of the battlefield, they failed to capture Maharana Pratap. He escaped and continued his resistance through guerrilla warfare in the Aravalli hills. Because Mewar never fully submitted to Akbar, the battle is remembered as a symbol of Rajput bravery, sacrifice, and the struggle for independence, rather than a clear Mughal victory." },

  // Mughal–Maratha Conflicts (17th Century)
  { id: "pratapgad", name: "Battle of Pratapgad (1659)", coords: [17.93, 73.57], region: "Maharashtra", year: "1659 CE", summary: "The Battle of Pratapgad (1659) was fought between Chhatrapati Shivaji Maharaj and Afzal Khan, a general of the Bijapur Sultanate. Afzal Khan was sent to suppress Shivaji and destroy the Maratha power in the Deccan. The battle took place near Pratapgad Fort in present day Maharashtra. Shivaji used strategic planning and deception, meeting Afzal Khan in a controlled setting. During the meeting, Afzal Khan attempted to kill Shivaji, but Shivaji defended himself using the wagh nakh and bichwa, killing Afzal Khan. This led to a planned Maratha attack on the Bijapur army, resulting in a decisive Maratha victory. The battle established Shivaji’s military brilliance and strengthened the foundation of the Maratha Empire." },

  { id: "kolhapur_1659", name: "Battle of Kolhapur (1659)", coords: [16.7, 74.24], region: "Maharashtra", year: "1659 CE", summary: "The Battle of Kolhapur (1659) was fought between Chhatrapati Shivaji Maharaj and the forces of the Bijapur Sultanate. After the defeat and death of Afzal Khan, Bijapur sent its army to regain control over Kolhapur and nearby regions. Shivaji launched a swift and well-planned attack near Kolhapur, using speed, terrain knowledge, and surprise tactics. The Bijapur forces were defeated, and Kolhapur came under Maratha control. This victory further weakened Bijapur’s power in western Maharashtra and strengthened Shivaji’s position as a rising regional ruler." },

  { id: "surat_sack", name: "Sacking of Surat (1664)", coords: [21.17, 72.83], region: "Gujarat", year: "1664 CE", summary: "The Sacking of Surat (1664) was carried out by Chhatrapati Shivaji Maharaj against the Mughal port city of Surat, one of the richest trading centers of the Mughal Empire. Shivaji aimed to weaken Mughal economic power and secure resources for the Maratha state. The Maratha forces entered Surat and looted wealthy merchants and Mughal establishments while largely sparing common people and religious places. The raid exposed the vulnerability of Mughal coastal defenses and brought immense wealth to the Marathas, helping Shivaji strengthen his army and administration." },

  { id: "purandar", name: "Battle/Treaty of Purandar (1665)", coords: [18.47, 73.68], region: "Maharashtra", year: "1665 CE", summary: "The Treaty of Purandar (1665) was an agreement between Chhatrapati Shivaji Maharaj and the Mughal Empire, represented by Raja Jai Singh of Amber. After sustained Mughal military pressure and the siege of Purandar Fort, Shivaji agreed to the treaty to avoid further destruction. Under its terms, Shivaji surrendered several forts to the Mughals, retained a limited number of forts, and accepted Mughal suzerainty while continuing to govern his remaining territories. The treaty allowed Shivaji to regroup, preserve his core power, and later reassert Maratha independence." },

  { id: "sinhagad", name: "Battle of Sinhagad (1670)", coords: [18.36, 73.75], region: "Maharashtra", year: "1670 CE", summary: "The Battle of Sinhagad (1670) was fought between the Marathas led by Tanaji Malusare and the Mughal forces controlling Sinhagad Fort under Udaybhan Rathod. Shivaji Maharaj aimed to recapture the strategically important fort from Mughal control. Tanaji led a daring night assault, using a monitor lizard to scale the steep cliffs of the fort. Fierce fighting followed, during which Tanaji was martyred, but the Marathas succeeded in capturing Sinhagad. The victory restored Maratha control over the fort and became a symbol of sacrifice, courage, and loyalty in Maratha history" },

  { id: "salher", name: "Battle of Salher (1672)", coords: [20.78, 74.2], region: "Maharashtra", year: "1672 CE", summary: "The Battle of Salher (1672) was fought between the Maratha forces under Chhatrapati Shivaji Maharaj and the Mughal army sent to regain control of the fort of Salher. It took place near Salher Fort in present day Maharashtra and is notable as a rare open field battle. The Marathas used superior mobility, terrain awareness, and coordinated attacks to defeat the larger Mughal force. The victory marked the first major open battlefield defeat of the Mughals by the Marathas and significantly boosted Maratha prestige and confidence." },

  { id: "sangamner", name: "Battle of Sangamner (1679)", coords: [19.57, 74.22], region: "Maharashtra", year: "1679 CE", summary: "The Battle of Sangamner (1679) was fought between the Maratha forces led by Chhatrapati Shivaji Maharaj and a large Mughal army. The battle took place near Sangamner in present day Maharashtra while Shivaji was returning from an expedition in the south. The Marathas faced heavy pressure from the Mughal forces but fought a strong defensive action that allowed Shivaji to withdraw safely. Although the Marathas suffered losses, the battle demonstrated Shivaji’s leadership and tactical skill and is remembered as the last battle fought during his lifetime." },


  // Anglo–Mysore Wars (1767–1799)
  {
    id: "anglo_mysore_1",
    name: "1st Anglo-Mysore War (1767–1769)",
    coords: [12.97, 77.59],  // Bengaluru region
    region: "Karnataka",
    year: "1767–1769 CE",
    summary: "The First Anglo-Mysore War (1767–1769) was fought between the Kingdom of Mysore under Hyder Ali and the British East India Company along with its allies. The British aimed to curb Mysore’s growing power in South India, while Hyder Ali sought to protect his territory and influence. Through rapid movement, surprise attacks, and effective use of cavalry, Hyder Ali outmaneuvered the British forces and advanced close to Madras. Unable to secure a decisive victory, the British were forced to negotiate, leading to the Treaty of Madras in 1769, which restored conquered territories and recognized Mysore as a major regional power"
  },

  {
    id: "anglo_mysore_2",
    name: "2nd Anglo-Mysore War (1780–1784)",
    coords: [12.30, 76.64],  // Mysuru region
    region: "Karnataka",
    year: "1780–1784 CE",
    summary: "The Second Anglo-Mysore War (1780–1784) was fought between the Kingdom of Mysore under Hyder Ali and later Tipu Sultan against the British East India Company and its allies. The conflict began after British aggression and their alliance with Mysore’s rivals, prompting Hyder Ali to launch a major offensive in the Carnatic region. Mysore forces achieved several early successes, including the defeat of British troops at Pollilur. After Hyder Ali’s death in 1782, Tipu Sultan continued the war with determination. The war ended with the Treaty of Mangalore in 1784, which restored territories to both sides and marked one of the few instances where the British negotiated as equals with an Indian power."
  },

  {
    id: "anglo_mysore_3",
    name: "3rd Anglo-Mysore War (1790–1792)",
    coords: [12.50, 76.90],
    region: "Karnataka",
    year: "1790–1792 CE",
    summary: "The Third Anglo-Mysore War (1790–1792) was fought between Tipu Sultan of Mysore and a powerful alliance led by the British East India Company, supported by the Marathas and the Nizam of Hyderabad. The war began after Tipu’s conflict with British allies and growing British hostility toward Mysore. Despite strong resistance and effective defense, Tipu was gradually pushed back as allied forces advanced on his capital, Seringapatam. The war ended with the Treaty of Seringapatam in 1792, under which Tipu Sultan ceded nearly half of his territory, paid a heavy indemnity, and was forced to hand over two of his sons as hostages, marking a major setback to Mysore’s power."
  },

  {
    id: "anglo_mysore_4",
    name: "4th Anglo-Mysore War (1799)",
    coords: [12.30, 76.65],  // Srirangapatna
    region: "Karnataka",
    year: "1799 CE",
    summary: "The Fourth Anglo-Mysore War (1799) was fought between Tipu Sultan of Mysore and the British East India Company along with its allies, the Nizam of Hyderabad and the Marathas. The British aimed to eliminate Mysore as a major power in South India due to Tipu’s resistance and his attempts to seek foreign alliances. The decisive battle took place at Srirangapatna, where British forces stormed the fort after a siege. Tipu Sultan was killed while defending his capital, and Mysore was defeated. Following the war, most of Mysore was annexed by the British, ending Mysore’s independence and establishing British dominance in southern India."
  }
  ,
  // Anglo–Maratha Wars (1775–1818)
  {
    id: "anglo_maratha_1",
    name: "1st Anglo-Maratha War (1775–1782)",
    coords: [19.07, 72.88],  // Mumbai region
    region: "Maharashtra",
    year: "1775–1782 CE",
    summary: "The First Anglo-Maratha War (1775–1782) was fought between the British East India Company and the Maratha Confederacy after British interference in Maratha succession disputes. The British supported Raghunath Rao’s claim to the Peshwa throne, which was opposed by the Maratha chiefs. The Marathas used their military strength and unity to resist British advances and inflicted several defeats on Company forces. The war ended with the Treaty of Salbai in 1782, which restored the status quo, recognized Madhavrao II as Peshwa, and brought a period of peace between the British and the Marathas."
  },

  {
    id: "anglo_maratha_2",
    name: "2nd Anglo-Maratha War (1803–1805)",
    coords: [21.15, 79.08],  // Central India theatre (Nagpur region)
    region: "Maharashtra / Central India",
    year: "1803–1805 CE",
    summary: "The Second Anglo-Maratha War (1803–1805) was fought between the British East India Company and the Maratha Confederacy, primarily targeting the Scindia, Bhonsle, and Holkar factions. Triggered by internal disputes within the Marathas and British ambitions to expand influence, the war involved several battles across northern and central India. The British achieved decisive victories in key battles such as Assaye and Laswari, weakening Maratha power. The war ended with treaties that confirmed British supremacy, ceded territory, and significantly reduced Maratha influence in India."
  },

  {
    id: "anglo_maratha_3",
    name: "3rd Anglo-Maratha War (1817–1818)",
    coords: [18.52, 73.85],  // Pune region
    region: "Maharashtra",
    year: "1817–1818 CE",
    summary: "The war was fought between the British East India Company and the Maratha Confederacy, particularly targeting Peshwa Bajirao II and his allies. The British conducted coordinated campaigns across Maharashtra, defeating the Maratha forces in key battles. The Peshwa surrendered, marking the end of the Maratha Empire and bringing most of their territories under British control, establishing the Company’s dominance in western India."
  }
  ,
  // Anglo–Sikh Wars (1845–1849)
  {
    id: "anglo_sikh_1",
    name: "1st Anglo-Sikh War (1845–1846)",
    coords: [30.35, 76.45],  // Ferozeshah area (Punjab battlefield region)
    region: "Punjab",
    year: "1845–1846 CE",
    summary: "This war occurred between the British East India Company and the Sikh Empire in Punjab after growing tensions and border disputes. Key battles, including Ferozeshah, saw fierce fighting between the British and Sikh forces. The conflict ended with the Treaty of Lahore, through which the Sikhs ceded territory and agreed to British influence, although the Sikh army remained largely intact."
  },

  {
    id: "anglo_sikh_2",
    name: "2nd Anglo-Sikh War (1848–1849)",
    coords: [31.33, 74.87],  // Lahore region
    region: "Punjab",
    year: "1848–1849 CE",
    summary: "Following unrest in Punjab, the British launched a second campaign against the Sikh Empire. The Sikhs resisted strongly in battles like Multan and Gujrat but were eventually defeated. The war ended with the full annexation of Punjab into British India, bringing the region directly under British control and eliminating Sikh sovereignty."
  }
  ,
  {
    id: "revolt_1857_main",
    name: "Revolt of 1857",
    coords: [28.61, 77.21],   // Delhi
    region: "Delhi / North India",
    year: "1857 CE",
    summary: "Also called the First War of Indian Independence, this major uprising involved Indian soldiers, peasants, and princes rebelling against the British East India Company. Key centers included Delhi, Kanpur, Lucknow, Jhansi, and Meerut. Although initially widespread and intense, the rebellion was eventually suppressed, but it marked a turning point in India’s struggle against colonial rule."
  }
  ,
  {
    id: "partition_bengal_1905",
    name: "Partition of Bengal (1905)",
    coords: [22.57, 88.36],   // Kolkata region
    region: "Bengal",
    year: "1905 CE",
    summary: "Lord Curzon divided Bengal into East Bengal and West Bengal, claiming administrative efficiency, but it was widely seen as an attempt to divide and weaken Indian nationalism. The partition triggered protests across Bengal, including boycotts of British goods and institutions, and sparked the Swadeshi Movement, which became a key form of organized resistance."
  }
  ,
  {
    id: "non_cooperation_1920",
    name: "Non-Cooperation Movement (1920)",
    coords: [28.61, 77.21],   // Delhi as national headquarters
    region: "All India",
    year: "1920 CE",
    summary: "Launched by Mahatma Gandhi, this nationwide campaign aimed to resist British rule through non-violent means. Indians were urged to boycott British goods, schools, administrative offices, courts, and official titles. The movement mobilized millions across India and strengthened national unity, laying the groundwork for future mass movements for independence."
  }
  ,
  // British Expansion
  { id: "plassey", name: "Battle of Plassey (1757)", coords: [23.8, 88.2], region: "Bengal", year: "1757 CE", summary: "British defeat Siraj ud-Daulah. The Battle of Plassey, fought on 23rd June 1757 near present-day West Bengal, was a turning point in Indian history that marked the beginning of British political control in India. The battle was fought between the British East India Company, led by Robert Clive, and the forces of Siraj ud-Daulah, the Nawab of Bengal. The British were vastly outnumbered but gained a decisive advantage through political strategy and betrayal. Key Bengali commanders, most notably Mir Jafar, secretly allied with the British, weakening Siraj ud-Daulah’s position during the battle. As a result, the Nawab’s army collapsed, and Siraj ud-Daulah was defeated and later killed. The victory at Plassey allowed the British to install Mir Jafar as a puppet ruler and gain control over Bengal’s wealth and administration. This battle marked the start of British dominance in India, providing the Company with the resources to expand its influence across the subcontinent. The Battle of Plassey is remembered not just for the military victory but also for its political and strategic significance in shaping colonial India." },

  { id: "panipat_3", name: "3rd Battle of Panipat (1761)", coords: [29.3, 76.9], region: "Haryana", year: "1761 CE", summary: "Marathas vs Abdali. The Third Battle of Panipat, fought on 14th January 1761 near present-day Haryana, was one of the largest and bloodiest battles of 18th-century India. It was fought between the Maratha Empire, led by Sadashivrao Bhau, and the invading forces of Ahmad Shah Abdali (also called Ahmad Shah Durrani), the ruler of Afghanistan, who was allied with local Rohilla and Shuja-ud-Daula’s forces. The Marathas aimed to expand their influence in northern India and resist Abdali’s repeated invasions. Despite having a large army, the Marathas faced several challenges, including logistical issues, unfamiliar terrain, and lack of timely support from some northern allies. Abdali’s forces, experienced in warfare and skilled in cavalry tactics, used strategic positioning and superior artillery to their advantage. The battle ended in a catastrophic defeat for the Marathas, with tens of thousands of soldiers killed and immense losses on both sides. This defeat temporarily halted Maratha expansion in the north and created a power vacuum that weakened centralized control in India, allowing regional powers and eventually the British to gain influence. The Third Battle of Panipat is remembered as a tragic but pivotal event in Indian history, illustrating the consequences of overextension and the shifting balance of power in the 18th century." },

  { id: "buxar", name: "Battle of Buxar (1764)", coords: [25.5, 83.0], region: "Bihar", year: "1764 CE", summary: "British victory over Bengal-Nawab-Mughal alliance. The Battle of Buxar, fought in 1764 CE near present-day Bihar, was a decisive conflict that cemented British power in India. The battle was fought between the forces of the British East India Company, led by Major Hector Munro, and an alliance of Indian rulers comprising Shah Alam II (the Mughal emperor), Mir Qasim (the Nawab of Bengal), and Shuja-ud-Daula (the Nawab of Awadh). The Indian alliance sought to resist the growing influence of the British in Bengal and neighboring regions, but internal divisions and poor coordination weakened their position. The British forces, well-trained and equipped with superior artillery, decisively defeated the combined armies. The victory allowed the East India Company to consolidate its control over Bengal, Bihar, and parts of Odisha, and it marked a major step in the establishment of British colonial rule in India. Following the battle, the Treaty of Allahabad (1765) was signed, granting the British the right to collect revenue (Diwani rights) from Bengal, Bihar, and Odisha. The Battle of Buxar was therefore a turning point in Indian history, establishing the East India Company as the dominant political and military power in India for the next century." },

  // Revolts & Movements
  { id: "santhal", name: "Santhal Revolt (1855)", coords: [24.3, 87.3], region: "Jharkhand", year: "1855 CE", summary: "Santhal uprising. The Santhal Revolt of 1855 was a major uprising by the Santhal tribal community against the exploitative practices of British colonial authorities and local landlords in present-day Jharkhand, Bihar, and West Bengal. The Santhals were primarily farmers, but they faced severe oppression from moneylenders, zamindars, and British officials who imposed heavy taxes, forced labor, and unfair land practices. Under the leadership of brothers Sidhu and Kanhu Murmu, the Santhals organized a large-scale rebellion, attacking oppressive landlords and officials, and establishing temporary autonomous control in several areas. The revolt spread quickly, attracting thousands of Santhal fighters who sought to protect their land, rights, and way of life. Despite initial successes, the British responded with overwhelming military force, and the revolt was eventually suppressed. Thousands of Santhals were killed or displaced. However, the uprising forced the British to rethink administrative policies in tribal regions and led to the creation of the Santhal Parganas, a separate administrative division to reduce exploitation. The Santhal Revolt is remembered as a courageous struggle by indigenous communities against injustice and colonial exploitation." },

  { id: "indigo", name: "Indigo Revolt (1859)", coords: [24.1, 88.5], region: "Bengal", year: "1859 CE", summary: "Farmers protest indigo planters. The Indigo Revolt of 1859, also known as the Nil Vidroh, was a significant peasant uprising in Bengal against oppressive British indigo planters. During the 19th century, European planters forced farmers to grow indigo on a portion of their land at very low prices, often using coercion and exploitative contracts. The farmers were left with insufficient land to grow food for themselves and were subjected to harsh punishments if they refused to comply. The revolt began in rural districts such as Champaran and Dinajpur, where peasants collectively refused to grow indigo. Leaders of the movement organized protests, petitions, and nonviolent resistance against the planters’ tyranny. The revolt gained attention and sympathy across India and even in Britain, leading to inquiries into the exploitative practices of the planters. The Indigo Revolt forced the British government to pass reforms that improved conditions for farmers, though complete justice was not immediately achieved. It became a symbol of peasant resistance against economic exploitation and inspired future movements for social and agrarian reforms in India." },

  { id: "revolt_1857", name: "Revolt of 1857", coords: [28.6, 77.2], region: "Delhi", year: "1857 CE", summary: "First War of Independence. The Revolt of 1857, also called India’s First War of Independence, was a major uprising against British East India Company rule. It began in May 1857 in Meerut and quickly spread to Delhi, Kanpur, Lucknow, Jhansi, and many other parts of northern and central India. The revolt involved soldiers (sepoys) of the Company’s army, as well as peasants, rulers, and ordinary citizens frustrated with oppressive policies, heavy taxation, and disrespect for local customs. In Delhi, the rebels declared Bahadur Shah Zafar, the last Mughal emperor, as their symbolic leader. The rebellion saw fierce battles, sieges, and acts of resistance, but the British used superior resources and reinforcements to suppress it over the following months. The revolt was brutally crushed, and thousands were killed on both sides, including civilians. Although it did not succeed in ending British rule, the 1857 uprising marked a turning point. It highlighted widespread discontent and laid the foundation for organized nationalist movements that eventually led to India’s independence in 1947. The revolt is remembered as a symbol of courage, sacrifice, and the Indian people’s determination to resist foreign domination. " },

  { id: "jallianwala", name: "Jallianwala Bagh Massacre (1919)", coords: [31.6, 74.9], region: "Punjab", year: "1919 CE", summary: "British massacre peaceful crowd. The Jallianwala Bagh Massacre occurred on 13th April 1919 in Amritsar, Punjab, and is remembered as one of the darkest moments of British colonial rule in India. A large, peaceful gathering had assembled at Jallianwala Bagh to protest against the repressive Rowlatt Act, which allowed the British government to imprison people without trial. Many people had come to mark the festival of Baisakhi as well, so the crowd included men, women, and children. Brigadier-General Reginald Dyer ordered his troops to open fire on the unarmed crowd without warning. The firing continued for about ten minutes, with soldiers shooting into the dense gathering, blocking the only exits. Hundreds were killed instantly, and thousands were injured. The massacre caused widespread shock and outrage across India and abroad, and it marked a turning point in the Indian freedom struggle, shifting many leaders and ordinary citizens from moderate protest to the demand for complete independence. The Jallianwala Bagh Massacre became a symbol of colonial brutality, galvanizing national movements and strengthening the resolve of Indians to achieve freedom through both nonviolent and later more radical means." },

  { id: "dandi", name: "Dandi March (1930)", coords: [21.4, 72.6], region: "Gujarat", year: "1930 CE", summary: "Gandhi’s Salt March. The Dandi March of 1930, also known as the Salt March, was a landmark act of civil disobedience led by Mahatma Gandhi against British colonial rule in India. The march began on 12th March 1930 from Sabarmati Ashram in Ahmedabad and ended at the coastal village of Dandi in Gujarat, covering a distance of about 390 kilometers. The protest was aimed at challenging the British monopoly on salt production and the heavy salt tax, which affected millions of ordinary Indians. Gandhi and his followers deliberately made salt from seawater at Dandi, openly defying British laws. This act inspired millions across India to participate in similar acts of nonviolent resistance, breaking salt laws in their local areas. The Dandi March gained global attention, highlighting the power of nonviolent protest and civil disobedience. It strengthened the Indian independence movement, mobilized people across social and economic classes, and demonstrated that ordinary citizens could challenge colonial authority peacefully but effectively. The march is remembered as a pivotal moment in India’s struggle for freedom." },

  { id: "quit_india", name: "Quit India Movement (1942)", coords: [18.5, 73.8], region: "Pune", year: "1942 CE", summary: "Nationwide agitation demanding British exit.The Quit India Movement of 1942 was a major nationwide campaign led by Mahatma Gandhi and the Indian National Congress demanding an immediate end to British rule in India. Launched on 8th August 1942 at the All India Congress Committee session in Bombay (now Mumbai), the movement called for “Do or Die,” urging Indians to act decisively for independence. The British government responded harshly, arresting Gandhi, Congress leaders, and thousands of activists almost immediately. Despite the crackdown, widespread protests, strikes, and demonstrations erupted across the country, involving students, workers, peasants, and ordinary citizens. The movement saw violent clashes in many regions, with people challenging British authority in both urban centers and rural areas. Although the British were able to suppress the movement by imprisoning leaders and using force, the Quit India Movement significantly weakened colonial control and demonstrated the determination of Indians to achieve freedom. It also laid the groundwork for India’s final struggle for independence, which came five years later in 1947." },

  // Independence
  { id: "independence", name: "Indian Independence (1947)", coords: [28.6, 77.2], region: "Delhi", year: "1947 CE", summary: "India becomes independent. India gained independence from British colonial rule on 15th August 1947, marking the end of nearly 200 years of foreign domination. The struggle for freedom involved countless movements, protests, and sacrifices by leaders and ordinary citizens alike, including the Revolt of 1857, the Non-Cooperation Movement, the Civil Disobedience Movement, and the Quit India Movement. After years of negotiations and mounting pressure, the British Parliament passed the Indian Independence Act, which created two separate nations: India and Pakistan. Delhi, the capital, became the center of this historic moment, where the first Prime Minister of India, Jawaharlal Nehru, delivered his iconic “Tryst with Destiny” speech to a nation full of hope and anticipation.Independence brought both joy and challenges. Millions of people were displaced during the partition, leading to communal violence and migration, but it also marked the beginning of India’s journey as a sovereign, democratic republic. The event is celebrated every year on 15th August as Independence Day, honoring the sacrifices and resilience of generations who fought for freedom." },
];
/* =========================
   ADD MARKERS
========================= */

events.forEach(event => {
  L.marker(event.coords, {
    icon: battleIcon,
    pane: 'markerPane'
  })
    .addTo(map)
    .on('click', () => openPanel(event));
});

/* =========================
   INFO PANEL LOGIC
========================= */

const panel = document.getElementById("infoPanel");
const closeBtn = document.getElementById("closePanel");

closeBtn.onclick = () => {
  panel.setAttribute("aria-hidden", "true");
};

function openPanel(event) {
  panel.setAttribute("aria-hidden", "false");

  document.getElementById("battleTitle").textContent = event.name;
  document.getElementById("battleYear").textContent = "Year: " + event.year;
  document.getElementById("battleRegion").textContent = "Region: " + event.region;
  document.getElementById("battleSummary").textContent = event.summary;

  document.getElementById("learnMoreBtn").href =
    `battles-details.html?id=${event.id}`;
}
