const events = [
    // Ancient
    { 
        id: "maurya_seleucid", 
        name: "Maurya–Seleucid Treaty (305 BCE)", 
        coords: [33.6, 72.9], 
        region: "Punjab", 
        year: "305 BCE", 
        summary: "In 305 BCE, Chandragupta Maurya and Seleucus Nicator concluded a treaty after conflicts in the northwestern frontier of India. This agreement secured territorial boundaries, ensured peace, and allowed Mauryan influence over parts of modern Afghanistan and Pakistan. It also paved the way for trade and cultural exchange between India and the Hellenistic world, highlighting the diplomatic skills of the Mauryan administration." 
    },
    { 
        id: "kalinga_war", 
        name: "Kalinga War (261 BCE)", 
        coords: [20.5, 85.9], 
        region: "Odisha", 
        year: "261 BCE", 
        summary: "The Kalinga War, fought by Emperor Ashoka against the kingdom of Kalinga, was one of the bloodiest conflicts in Indian history. Witnessing the immense suffering caused by the war, Ashoka experienced a profound change of heart. This led him to embrace Buddhism and propagate principles of non-violence, social welfare, and ethical governance throughout the Mauryan Empire, marking a key turning point in Indian history." 
    },

    // Classical & Early Medieval
    { 
        id: "samudragupta_campaigns", 
        name: "Samudragupta Campaigns", 
        coords: [25.4, 81.8], 
        region: "Prayagraj", 
        year: "350 CE", 
        summary: "Samudragupta, a prominent Gupta emperor, led extensive military campaigns across northern India. His conquests secured tributary states and expanded the empire’s influence, establishing political stability and fostering cultural growth. Known for his strategic prowess, Samudragupta’s campaigns strengthened the Gupta dynasty, laying the foundation for a period of prosperity known as India’s Golden Age." 
    },
    { 
        id: "huna_invasion", 
        name: "Huna Invasions", 
        coords: [34.1, 74.8], 
        region: "Kashmir", 
        year: "450 CE", 
        summary: "The Huna invasions in the 5th century CE involved Central Asian nomadic tribes entering northern India. Their attacks disrupted established kingdoms and contributed to the decline of the Gupta Empire. The Hunas were militarily formidable and caused widespread instability, prompting shifts in political alliances and regional power structures." 
    },

    // Sultanate
    { 
        id: "tarain_1", 
        name: "1st Battle of Tarain (1191)", 
        coords: [29.11, 76.98], 
        region: "Haryana", 
        year: "1191 CE", 
        summary: "The First Battle of Tarain was fought between Prithviraj Chauhan and Muhammad Ghori. Prithviraj successfully repelled Ghori’s forces, temporarily halting the Ghurid expansion into northern India. This battle showcased the military strategies of Rajput kingdoms and highlighted the resistance faced by invading powers during the late 12th century." 
    },
    { 
        id: "tarain_2", 
        name: "2nd Battle of Tarain (1192)", 
        coords: [29.11, 76.98], 
        region: "Haryana", 
        year: "1192 CE", 
        summary: "In the Second Battle of Tarain, Muhammad Ghori defeated Prithviraj Chauhan, establishing Ghurid control over northern India. This battle marked the beginning of Muslim rule in the region and paved the way for the establishment of the Delhi Sultanate, transforming the political landscape of India." 
    },

    // Mughal
    { 
        id: "panipat_1", 
        name: "1st Battle of Panipat (1526)", 
        coords: [29.39, 76.98], 
        region: "Haryana", 
        year: "1526 CE", 
        summary: "The First Battle of Panipat saw Babur defeat Ibrahim Lodi, founding the Mughal Empire in India. The use of advanced artillery and tactical planning allowed Babur to overcome a numerically superior army. This victory shifted the balance of power in northern India and introduced Mughal administration and culture that would influence the subcontinent for centuries." 
    },
    { 
        id: "khanwa", 
        name: "Battle of Khanwa (1527)", 
        coords: [27.0, 75.7], 
        region: "Rajasthan", 
        year: "1527 CE", 
        summary: "Babur fought Rana Sanga at the Battle of Khanwa to consolidate Mughal control over northern India. Despite the Rajput alliance’s strength, Babur’s superior strategy and use of field artillery secured his victory. This battle reinforced Mughal dominance and prevented the resurgence of Rajput power in the region." 
    },
    { 
        id: "panipat_2", 
        name: "2nd Battle of Panipat (1556)", 
        coords: [29.39, 76.98], 
        region: "Haryana", 
        year: "1556 CE", 
        summary: "Akbar, guided by regent Bairam Khan, faced Hemu at the Second Battle of Panipat. Akbar’s forces defeated Hemu, re-establishing Mughal rule after a brief interruption. This battle secured the Mughal Empire’s foundation and demonstrated the effectiveness of strategic leadership and disciplined military organization." 
    },
    { 
        id: "haldighati", 
        name: "Battle of Haldighati (1576)", 
        coords: [24.6, 73.7], 
        region: "Rajasthan", 
        year: "1576 CE", 
        summary: "The Battle of Haldighati was fought between Maharana Pratap of Mewar and Mughal Emperor Akbar. Although the Mughals technically won the battle, Maharana Pratap continued guerrilla resistance, symbolizing Rajput valor and persistence. The conflict represented the struggle for independence against Mughal expansion in Rajasthan." 
    },

    // Mughal–Maratha Conflicts
    { 
        id: "pratapgad", 
        name: "Battle of Pratapgad (1659)", 
        coords: [17.93, 73.57], 
        region: "Maharashtra", 
        year: "1659 CE", 
        summary: "Shivaji Bhonsle defeated Afzal Khan in the Battle of Pratapgad, marking a critical victory in the early rise of the Maratha Empire. The clever tactics and surprise attacks employed by Shivaji demonstrated his military acumen and established him as a formidable regional power." 
    },
    { 
        id: "kolhapur_1659", 
        name: "Battle of Kolhapur (1659)", 
        coords: [16.7, 74.24], 
        region: "Maharashtra", 
        year: "1659 CE", 
        summary: "In the Battle of Kolhapur, Shivaji’s forces defeated the Bijapur Sultanate army. This victory strengthened the Maratha position in western India and showcased the tactical brilliance and strategic leadership of Shivaji during the consolidation of his empire." 
    },
    { 
        id: "surat_sack", 
        name: "Sacking of Surat (1664)", 
        coords: [21.17, 72.83], 
        region: "Gujarat", 
        year: "1664 CE", 
        summary: "Shivaji raided the Mughal port city of Surat to weaken imperial finances and assert Maratha power. The raid demonstrated his naval capabilities, strategic vision, and ability to challenge Mughal authority, becoming a legendary episode in Maratha history." 
    },
    { 
        id: "purandar", 
        name: "Battle/Treaty of Purandar (1665)", 
        coords: [18.47, 73.68], 
        region: "Maharashtra", 
        year: "1665 CE", 
        summary: "The conflict at Purandar resulted in a treaty between Shivaji and Mughal general Jai Singh. Shivaji agreed to cede certain territories while retaining control over his core lands. This treaty allowed him to preserve his power and demonstrated his skillful negotiation alongside military strategy." 
    },
    { 
        id: "sinhagad", 
        name: "Battle of Sinhagad (1670)", 
        coords: [18.36, 73.75], 
        region: "Maharashtra", 
        year: "1670 CE", 
        summary: "Tanaji Malusare, a trusted general of Shivaji, captured the strategically important Sinhagad fort in 1670. The battle highlighted Maratha bravery, tactical planning, and the importance of forts in regional defense strategies." 
    },
    { 
        id: "salher", 
        name: "Battle of Salher (1672)", 
        coords: [20.78, 74.2], 
        region: "Maharashtra", 
        year: "1672 CE", 
        summary: "The Battle of Salher was fought between Marathas and Mughals, with the Marathas achieving a decisive victory. This battle was significant as it was the first major open-field battle won by the Marathas, solidifying their military reputation." 
    },
    { 
        id: "sangamner", 
        name: "Battle of Sangamner (1679)", 
        coords: [19.57, 74.22], 
        region: "Maharashtra", 
        year: "1679 CE", 
        summary: "The Battle of Sangamner marked the last battle fought by Shivaji’s forces during his lifetime. Although the Marathas faced losses, the engagement demonstrated their resilience and the sustained resistance against Mughal domination in the region." 
    },

    // Anglo–Mysore Wars
    { 
        id: "anglo_mysore_1", 
        name: "1st Anglo-Mysore War (1767–1769)", 
        coords: [12.97, 77.59], 
        region: "Karnataka", 
        year: "1767–1769 CE", 
        summary: "The First Anglo-Mysore War was fought between the Kingdom of Mysore under Hyder Ali and the British East India Company. Hyder Ali’s forces successfully resisted British advances, leading to the Treaty of Madras, which temporarily restored peace and recognized Mysore’s autonomy while highlighting the growing power struggles in southern India." 
    },
    { 
        id: "anglo_mysore_2", 
        name: "2nd Anglo-Mysore War (1780–1784)", 
        coords: [12.30, 76.64], 
        region: "Karnataka", 
        year: "1780–1784 CE", 
        summary: "The Second Anglo-Mysore War involved intense fighting between Hyder Ali, later Tipu Sultan, and the British. It ended with the Treaty of Mangalore, restoring territorial status quo but showcasing Mysore’s continued military capability and the strategic importance of alliances in resisting colonial expansion." 
    },
    { 
        id: "anglo_mysore_3", 
        name: "3rd Anglo-Mysore War (1790–1792)", 
        coords: [12.50, 76.90], 
        region: "Karnataka", 
        year: "1790–1792 CE", 
        summary: "The Third Anglo-Mysore War saw Tipu Sultan face defeat against British-led forces. The Treaty of Seringapatam required Tipu to surrender half his territories and his sons as hostages, significantly weakening Mysore and consolidating British influence in southern India." 
    },
    { 
        id: "anglo_mysore_4", 
        name: "4th Anglo-Mysore War (1799)", 
        coords: [12.30, 76.65], 
        region: "Karnataka", 
        year: "1799 CE", 
        summary: "In the Fourth Anglo-Mysore War, Tipu Sultan was killed defending Srirangapatna, leading to British annexation of most of Mysore. This marked the end of independent Mysore rule and demonstrated the growing supremacy of British colonial power in India." 
    },

    // Anglo–Maratha Wars
    { 
        id: "anglo_maratha_1", 
        name: "1st Anglo-Maratha War (1775–1782)", 
        coords: [19.07, 72.88], 
        region: "Maharashtra", 
        year: "1775–1782 CE", 
        summary: "The First Anglo-Maratha War involved conflicts between the Maratha Empire and the British East India Company. After years of battles, the Treaty of Salbai was signed, establishing peace and maintaining Maratha territorial integrity while confirming British presence in India." 
    },
    { 
        id: "anglo_maratha_2", 
        name: "2nd Anglo-Maratha War (1803–1805)", 
        coords: [21.15, 79.08], 
        region: "Maharashtra / Central India", 
        year: "1803–1805 CE", 
        summary: "During the Second Anglo-Maratha War, British forces defeated several Maratha factions, including Scindia, Bhonsle, and Holkar. The war resulted in the consolidation of British political dominance across central India and significant loss of Maratha independence." 
    },
    { 
        id: "anglo_maratha_3", 
        name: "3rd Anglo-Maratha War (1817–1818)", 
        coords: [18.52, 73.85], 
        region: "Maharashtra", 
        year: "1817–1818 CE", 
        summary: "The Third Anglo-Maratha War led to the defeat of Peshwa Bajirao II and the collapse of the Maratha Empire. The British East India Company gained complete control over most of India, marking the effective end of indigenous imperial power in the subcontinent." 
    },

    // Anglo–Sikh Wars
    { 
        id: "anglo_sikh_1", 
        name: "1st Anglo-Sikh War (1845–1846)", 
        coords: [30.35, 76.45], 
        region: "Punjab", 
        year: "1845–1846 CE", 
        summary: "The First Anglo-Sikh War occurred between the Sikh Empire and British forces. Despite strong resistance from the Sikhs, the British achieved victory, leading to the Treaty of Lahore. The war demonstrated British military superiority and set the stage for further annexation of Punjab." 
    },
    { 
        id: "anglo_sikh_2", 
        name: "2nd Anglo-Sikh War (1848–1849)", 
        coords: [31.33, 74.87], 
        region: "Punjab", 
        year: "1848–1849 CE", 
        summary: "In the Second Anglo-Sikh War, Sikh forces attempted to resist British annexation but were ultimately defeated. Punjab was fully integrated into British India, marking the end of Sikh sovereignty and expanding colonial control over the northwestern region." 
    },

    // Revolts & Movements
    { 
        id: "revolt_1857_main", 
        name: "Revolt of 1857", 
        coords: [28.61, 77.21], 
        region: "Delhi / North India", 
        year: "1857 CE", 
        summary: "The Revolt of 1857, also called the First War of Independence, was a widespread uprising against British East India Company rule. It involved key centers such as Delhi, Kanpur, Lucknow, Jhansi, and Meerut. Although suppressed, the revolt signaled the deep discontent against colonial policies and the growing nationalistic sentiment among Indians." 
    },
    { 
        id: "partition_bengal_1905", 
        name: "Partition of Bengal (1905)", 
        coords: [22.57, 88.36], 
        region: "Bengal", 
        year: "1905 CE", 
        summary: "The British partitioned Bengal under Lord Curzon, dividing it into East and West regions. The move was widely opposed as it aimed to weaken nationalist movements. It triggered the Swadeshi Movement, leading to boycotts of British goods and strengthening the struggle for independence." 
    },
    { 
        id: "non_cooperation_1920", 
        name: "Non-Cooperation Movement (1920)", 
        coords: [28.61, 77.21], 
        region: "All India", 
        year: "1920 CE", 
        summary: "Led by Mahatma Gandhi, the Non-Cooperation Movement encouraged Indians to boycott British goods, institutions, schools, and titles. The movement mobilized masses across India, marking a significant step in the freedom struggle and promoting civil disobedience as a method of resistance." 
    },

    // British Expansion
    { 
        id: "plassey", 
        name: "Battle of Plassey (1757)", 
        coords: [23.8, 88.2], 
        region: "Bengal", 
        year: "1757 CE", 
        summary: "The Battle of Plassey marked the beginning of British dominance in India. Robert Clive’s forces defeated Siraj ud-Daulah, securing control over Bengal’s revenues and laying the foundation for the British East India Company’s expansion across India." 
    },
    { 
        id: "panipat_3", 
        name: "3rd Battle of Panipat (1761)", 
        coords: [29.3, 76.9], 
        region: "Haryana", 
        year: "1761 CE", 
        summary: "The Third Battle of Panipat was fought between the Marathas and Ahmad Shah Abdali (Durrani Empire). The Marathas suffered a massive defeat, which weakened their empire temporarily and created a power vacuum that the British eventually exploited to expand their influence in India." 
    },
    { 
        id: "buxar", 
        name: "Battle of Buxar (1764)", 
        coords: [25.5, 83.0], 
        region: "Bihar", 
        year: "1764 CE", 
        summary: "The Battle of Buxar solidified British control in eastern India. British forces defeated the combined armies of the Nawab of Bengal, the Nawab of Awadh, and Mughal Emperor Shah Alam II. The victory allowed the British to establish revenue rights in Bengal and expand administrative control." 
    },

    // Revolts & Movements
    { 
        id: "santhal", 
        name: "Santhal Revolt (1855)", 
        coords: [24.3, 87.3], 
        region: "Jharkhand", 
        year: "1855 CE", 
        summary: "The Santhal Revolt was a tribal uprising against oppressive landlords and British colonial policies. Led by Sidhu and Kanhu Murmu, the movement highlighted resistance against exploitation and inspired subsequent tribal and peasant movements in India." 
    },
    { 
        id: "indigo", 
        name: "Indigo Revolt (1859)", 
        coords: [24.1, 88.5], 
        region: "Bengal", 
        year: "1859 CE", 
        summary: "Farmers in Bengal protested against exploitative indigo planters under British colonial rule. The revolt involved non-payment of rents and active resistance, signaling early organized peasant opposition to British economic policies." 
    },
    { 
        id: "jallianwala", 
        name: "Jallianwala Bagh Massacre (1919)", 
        coords: [31.6, 74.9], 
        region: "Punjab", 
        year: "1919 CE", 
        summary: "British troops under General Dyer opened fire on a peaceful gathering in Amritsar, killing hundreds. The massacre shocked the nation, galvanizing the Indian independence movement and intensifying anti-colonial sentiment." 
    },
    { 
        id: "dandi", 
        name: "Dandi March (1930)", 
        coords: [21.4, 72.6], 
        region: "Gujarat", 
        year: "1930 CE", 
        summary: "Mahatma Gandhi led the Salt March to protest the British salt tax. The march involved a 240-mile journey from Sabarmati Ashram to Dandi, inspiring nationwide civil disobedience and highlighting the effectiveness of nonviolent protest in India’s struggle for independence." 
    },
    { 
        id: "quit_india", 
        name: "Quit India Movement (1942)", 
        coords: [18.5, 73.8], 
        region: "Pune", 
        year: "1942 CE", 
        summary: "The Quit India Movement demanded the immediate withdrawal of British rule. Launched by the Indian National Congress and led by Gandhi, it involved mass protests, strikes, and demonstrations across the country, reinforcing India’s collective demand for independence." 
    },

    // Independence
    { 
        id: "independence", 
        name: "Indian Independence (1947)", 
        coords: [28.6, 77.2], 
        region: "Delhi", 
        year: "1947 CE", 
        summary: "India achieved independence from British colonial rule on August 15, 1947. The event marked the culmination of decades of struggle, sacrifices, and organized resistance by countless individuals and movements, leading to the establishment of a sovereign nation with its own democratic governance." 
    }
];
