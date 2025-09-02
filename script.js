
// ===== Dark Mode Toggle =====
const darkToggle = document.getElementById("darkModeToggle");
const modeLabel = document.getElementById("modeLabel");
if (darkToggle) {
  // Persist preference (optional)
  const saved = localStorage.getItem("prefers-dark");
  if (saved === "true") {
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
  }

  darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("prefers-dark", document.body.classList.contains("dark-mode"));
  });
}

// ===== Modals =====
const aboutBtn = document.getElementById("aboutBtn");
const workBtn = document.getElementById("workBtn");
const aboutModal = document.getElementById("aboutModal");
const workModal = document.getElementById("workModal");
const closeButtons = document.querySelectorAll(".close");

// open
if (aboutBtn && aboutModal) {
  aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    aboutModal.style.display = "flex";
  });
}
if (workBtn && workModal) {
  workBtn.addEventListener("click", (e) => {
    e.preventDefault();
    workModal.style.display = "flex";
  });
}

// close buttons
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.close;
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
});

// click outside to close
window.addEventListener("click", (e) => {
  if (e.target.classList && e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// ===== Language Switching =====
const languageSelect = document.getElementById("languageSelect");

// Elements to update
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");
const aboutTitle = document.getElementById("aboutTitle");
const aboutText = document.getElementById("aboutText");
const workTitle = document.getElementById("workTitle");
const workContent = document.getElementById("workContent");
const navAbout = document.getElementById("aboutBtn");
const navWork = document.getElementById("workBtn");
const skillsTitle = document.getElementById("skillsTitle");
const levelLabels = document.querySelectorAll(".skill-level-label");

const translations = {
  en: {
    heroTitle: "Hi, I’m Sarthak, a Software Engineering Student passionate about building impactful software.",
    heroDesc: "I build scalable applications and enjoy solving real-world problems through code.",
    aboutTitle: "About Me",
    aboutText:
      "My name is Sarthak Acharya, and I am a Software Engineering student at East Carolina University. I was born and raised in Kathmandu, Nepal, where my curiosity for technology began at a very young age. At around three years old, I was introduced to a computer, and what started as learning and gaming slowly grew into a deep passion for building and problem-solving through code.<br><br>Today, I enjoy creating scalable, user-friendly, and innovative solutions while constantly working to improve my skills as both a student and an engineer. My journey in software engineering is driven by curiosity and the excitement of turning ideas into reality.<br><br>Outside of academics, I love sports, travelling to new countries, and riding motorcycles. These passions keep me active, adventurous, and open to new experiences, which also shape the way I approach challenges in life and technology.",
    workTitle: "Work Experience",
    workContent:
      "<li>IT Support, ECU — Assisted new students with software & hardware (2025)</li><li>Internship at [Company] — Worked on [Project] (Summer 2025)</li>",
    navAbout: "About",
    navWork: "Work Experience",
    skillsTitle: "My Skills",
    
  },
  ne: {
    heroTitle: "नमस्ते, म सार्थक हुँ, प्रभावकारी सफ्टवेयर निर्माण गर्ने जोश भएको सफ्टवेयर इन्जिनियरिङको विद्यार्थी।",
    heroDesc: "म स्केलेबल एप्लिकेसनहरू बनाउँछु र कोड मार्फत वास्तविक-विश्व समस्याहरू समाधान गर्न रमाइलो गर्छु।",
    aboutTitle: "मेरो बारेमा",
    aboutText:
      "मेरो नाम सार्थक आचार्य हो, र म पूर्वी क्यारोलिना विश्वविद्यालयमा सफ्टवेयर इन्जिनियरिङको विद्यार्थी हुँ। म नेपालको काठमाडौँमा जन्मेको र हुर्केको हुँ, जहाँ प्रविधिप्रति मेरो जिज्ञासा सानै उमेरदेखि सुरु भएको थियो। लगभग तीन वर्षको उमेरमा, मलाई कम्प्युटरसँग परिचित गराइयो, र सिक्ने र गेमिङको रूपमा सुरु भएको कुरा बिस्तारै कोड मार्फत निर्माण र समस्या समाधान गर्ने गहिरो जोशमा परिणत भयो।<br><br>आज, म विद्यार्थी र इन्जिनियर दुवैको रूपमा मेरो सीपहरू सुधार गर्न निरन्तर काम गर्दै स्केलेबल, प्रयोगकर्ता-मैत्री र नवीन समाधानहरू सिर्जना गर्न रमाइलो गर्छु। सफ्टवेयर इन्जिनियरिङमा मेरो यात्रा जिज्ञासा र विचारहरूलाई वास्तविकतामा परिणत गर्ने उत्साहबाट संचालित छ।<br><br>शिक्षा बाहेक, मलाई खेलकुद, नयाँ देशहरूको यात्रा र मोटरसाइकल चलाउन मन पर्छ। यी जोशहरूले मलाई सक्रिय, साहसिक र नयाँ अनुभवहरूको लागि खुला राख्छन्, जसले जीवन र प्रविधिमा चुनौतीहरूलाई कसरी सामना गर्ने भन्ने कुरालाई पनि आकार दिन्छ।",
    workTitle: "कामको अनुभव",
    workContent:
      "<li>आईटी सपोर्ट, ECU — नयाँ विद्यार्थीलाई सफ्टवेयर र हार्डवेयरमा सहयोग (2025)</li><li>इंटर्नशिप [कम्पनी] — [प्रोजेक्ट] मा काम (ग्रीष्म 2025)</li>",
    navAbout: "बारेमा",
    navWork: "कामको अनुभव",
    skillsTitle: "मेरो सीपहरू",
    
  },
  zh: {
    heroTitle: "你好，我是一名软件工程师",
    heroDesc: "我构建可扩展的应用，并且热爱用代码解决问题。",
    aboutTitle: "关于我",
    aboutText:
      "我是一名专注于构建可扩展、用户友好且具有创新性的解决方案的软件工程学生。专注于网页开发和问题解决。",
    workTitle: "工作经验",
    workContent:
      "<li>IT支持（ECU）— 帮助新生的软件与硬件 (2025)</li><li>[公司] 实习 — 参与 [项目] (2025 夏)</li>",
    navAbout: "关于",
    navWork: "工作经验",
    skillsTitle: "我的技能",
    
  },
  fr: {
    heroTitle: "Bonjour, je suis ingénieur logiciel",
    heroDesc: "Je crée des applications évolutives et j’adore résoudre des problèmes avec du code.",
    aboutTitle: "À propos de moi",
    aboutText:
      "Étudiant passionné en génie logiciel, spécialisé dans la création de solutions évolutives, conviviales et innovantes. Focalisé sur le web et la résolution de problèmes.",
    workTitle: "Expérience professionnelle",
    workContent:
      "<li>Support IT, ECU — Aide aux nouveaux étudiants (logiciel & matériel) (2025)</li><li>Stage chez [Entreprise] — Travail sur [Projet] (Été 2025)</li>",
    navAbout: "À propos",
    navWork: "Expérience",
    skillsTitle: "Mes compétences",
    
  },
  de: {
    heroTitle: "Hallo, ich bin Softwareingenieur",
    heroDesc: "Ich entwickle skalierbare Anwendungen und löse gerne Probleme mit Code.",
    aboutTitle: "Über mich",
    aboutText:
      "Ich bin ein leidenschaftlicher Student der Softwaretechnik mit Schwerpunkt auf skalierbare, benutzerfreundliche und innovative Lösungen. Fokus auf Webentwicklung und Problemlösung.",
    workTitle: "Berufserfahrung",
    workContent:
      "<li>IT-Support, ECU — Unterstützung neuer Studierender bei Software & Hardware (2025)</li><li>Praktikum bei [Firma] — Arbeit an [Projekt] (Sommer 2025)</li>",
    navAbout: "Über mich",
    navWork: "Berufserfahrung",
    skillsTitle: "Meine Fähigkeiten",
    
  },
  es: {
    heroTitle: "Hola, soy ingeniero de software",
    heroDesc: "Construyo aplicaciones escalables y me encanta resolver problemas con código.",
    aboutTitle: "Sobre mí",
    aboutText:
      "Soy un estudiante apasionado de ingeniería de software, especializado en crear soluciones escalables, fáciles de usar e innovadoras. Enfocado en desarrollo web y resolución de problemas.",
    workTitle: "Experiencia laboral",
    workContent:
      "<li>Soporte IT, ECU — Ayudé a nuevos estudiantes con software y hardware (2025)</li><li>Pasantía en [Compañía] — Trabajo en [Proyecto] (Verano 2025)</li>",
    navAbout: "Sobre mí",
    navWork: "Experiencia",
    skillsTitle: "Mis habilidades",
    
  }
};

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    const t = translations[lang];
    if (!t) return;

    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroDesc) heroDesc.textContent = t.heroDesc;

    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    if (aboutText) aboutText.innerHTML = t.aboutText;

    if (workTitle) workTitle.textContent = t.workTitle;
    if (workContent) workContent.innerHTML = t.workContent;

    if (navAbout) navAbout.textContent = t.navAbout;
    if (navWork) navWork.textContent = t.navWork;

    if (skillsTitle) skillsTitle.textContent = t.skillsTitle;

    // Update level labels beside bars
    levelLabels.forEach(label => {
      const lvl = label.dataset.level; // beginner/intermediate/expert/pro
      if (t.levels && t.levels[lvl]) label.textContent = t.levels[lvl];
    });
  });
}
