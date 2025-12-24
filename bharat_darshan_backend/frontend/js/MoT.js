function showDetails(key) {
  const data = {
    reform: {
      title: "Social & Religious Reform Movements",
      info: "19th century. Key figures like Raja Ram Mohan Roy, Ishwar Chandra Vidyasagar, and Dayanand Saraswati worked to reform Indian society and religion."
    },
    revolt: {
      title: "Revolt of 1857",
      info: "1857 CE. First major armed resistance against British rule. It was suppressed but marked a turning point in the struggle for independence."
    },
    inc: {
      title: "Formation of Indian National Congress",
      info: "1885 CE. Founded by A.O. Hume to provide a platform for political dialogue among educated Indians."
    },
    partition: {
      title: "Partition of Bengal & Swadeshi Movement",
      info: "1905–1911 CE. Anti-partition protests led to a rise of nationalist fervor and the promotion of Indian goods (Swadeshi)."
    },
    homeRule: {
      title: "Home Rule Movement",
      info: "1916–1918 CE. Led by Bal Gangadhar Tilak and Annie Besant, demanding self-governance (Home Rule) for India within the British Empire."
    },
    jallianwala: {
      title: "Jallianwala Bagh Massacre",
      info: "1919 CE. British troops opened fire on peaceful protesters gathered at Jallianwala Bagh in Amritsar, sparking outrage across the nation."
    },
    nonCooperation: {
      title: "Non-Cooperation Movement",
      info: "1920–1922 CE. Led by Mahatma Gandhi, calling for a non-violent boycott of British goods, institutions, and services."
    },
    civilDisobedience: {
      title: "Civil Disobedience Movement",
      info: "1930–1934 CE. Involved acts of peaceful refusal to obey unjust British laws, famously beginning with the Salt March (Dandi March)."
    },
    quitIndia: {
      title: "Quit India Movement",
      info: "1942 CE. A mass protest demanding an immediate end to British rule during World War II."
    },
    independence: {
      title: "Independence of India",
      info: "15 August 1947 CE. British rule officially ended, and India and Pakistan were established as independent nations."
    }
  };

  document.getElementById("title").innerText = data[key].title;
  document.getElementById("info").innerText = data[key].info;

  document.getElementById("details-box").style.display = "block";
}
