// Dark Mode Toggle
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Modals
const aboutBtn = document.getElementById("aboutBtn");
const workBtn = document.getElementById("workBtn");
const aboutModal = document.getElementById("aboutModal");
const workModal = document.getElementById("workModal");
const closeButtons = document.querySelectorAll(".close");

// Open modals
aboutBtn.addEventListener("click", () => aboutModal.style.display = "flex");
workBtn.addEventListener("click", () => workModal.style.display = "flex");

// Close modals
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.close).style.display = "none";
  });
});

// Close when clicking outside modal content
window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// Language Selector
const languageSelect = document.getElementById("languageSelect");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");
const aboutTitle = document.getElementById("aboutTitle");
const aboutContent = document.getElementById("aboutContent");
const workTitle = document.getElementById("workTitle");
const workContent = document.getElementById("workContent");

// Navbar links
const navAbout = document.getElementById("aboutBtn");
const navWork = document.getElementById("workBtn");

const translations = {
  en: {
    heroTitle: "Hi, I’m a Software Engineer",
    heroDesc: "I build scalable applications and love solving problems through code.",
    aboutTitle: "About Me",
    aboutContent: "I am a passionate Software Engineering student specializing in building scalable, user-friendly, and innovative solutions. Focused on web development and problem-solving.",
    workTitle: "Work Experience",
    workContent: "<ul><li>IT Support, ECU — Assisted new students with software & hardware (2025)</li><li>Internship at [Company] — Worked on [Project] (Summer 2025)</li></ul>",
    navAbout: "About",
    navWork: "Work Experience"
  },
  ne: {
    heroTitle: "नमस्ते, म सफ्टवेयर इन्जिनियर हुँ",
    heroDesc: "म स्केलेबल एप्लिकेशन निर्माण गर्छु र कोडको माध्यमबाट समस्या समाधान गर्न मन पराउँछु।",
    aboutTitle: "मेरो बारेमा",
    aboutContent: "म स्केलेबल, प्रयोगकर्ता-मित्र र नवीन समाधानहरू निर्माण गर्नेमा विशेषज्ञता राख्ने सफ्टवेयर इन्जिनियरिङ्ग विद्यार्थी हुँ। वेब विकास र समस्या समाधानमा ध्यान केन्द्रित।",
    workTitle: "कामको अनुभव",
    workContent: "<ul><li>आईटी सपोर्ट, ECU — नयाँ विद्यार्थीहरूलाई सफ्टवेयर र हार्डवेयर सहयोग (2025)</li><li>इंटर्नशिप [कम्पनी] — [प्रोजेक्ट] मा काम (ग्रीष्म 2025)</li></ul>",
    navAbout: "बारेमा",
    navWork: "कामको अनुभव"
  },
  zh: {
    heroTitle: "你好，我是一名软件工程师",
    heroDesc: "我构建可扩展的应用程序，并喜欢通过代码解决问题。",
    aboutTitle: "关于我",
    aboutContent: "我是一名专注于构建可扩展、用户友好和创新解决方案的软件工程学生。专注于网页开发和问题解决。",
    workTitle: "工作经验",
    workContent: "<ul><li>IT支持, ECU — 协助新生软件和硬件 (2025)</li><li>[公司]实习 — 参与[项目] (2025夏)</li></ul>",
    navAbout: "关于",
    navWork: "工作经验"
  },
  fr: {
    heroTitle: "Bonjour, je suis ingénieur logiciel",
    heroDesc: "Je construis des applications évolutives et j'aime résoudre des problèmes avec du code.",
    aboutTitle: "À propos de moi",
    aboutContent: "Je suis un étudiant en génie logiciel passionné spécialisé dans la création de solutions évolutives, conviviales et innovantes. Axé sur le développement web et la résolution de problèmes.",
    workTitle: "Expérience professionnelle",
    workContent: "<ul><li>Support IT, ECU — Aider les nouveaux étudiants avec le logiciel et le matériel (2025)</li><li>Stage chez [Entreprise] — Travail sur [Projet] (été 2025)</li></ul>",
    navAbout: "À propos",
    navWork: "Expérience"
  },
  de: {
    heroTitle: "Hallo, ich bin Softwareingenieur",
    heroDesc: "Ich entwickle skalierbare Anwendungen und liebe es, Probleme durch Code zu lösen.",
    aboutTitle: "Über mich",
    aboutContent: "Ich bin ein leidenschaftlicher Student der Softwaretechnik, der sich auf die Erstellung skalierbarer, benutzerfreundlicher und innovativer Lösungen spezialisiert hat. Fokus auf Webentwicklung und Problemlösung.",
    workTitle: "Berufserfahrung",
    workContent: "<ul><li>IT-Support, ECU — Unterstützung neuer Studenten bei Software & Hardware (2025)</li><li>Praktikum bei [Firma] — Arbeit an [Projekt] (Sommer 2025)</li></ul>",
    navAbout: "Über mich",
    navWork: "Berufserfahrung"
  },
  es: {
    heroTitle: "Hola, soy un ingeniero de software",
    heroDesc: "Construyo aplicaciones escalables y me encanta resolver problemas a través del código.",
    aboutTitle: "Sobre mí",
    aboutContent: "Soy un estudiante de ingeniería de software apasionado especializado en construir soluciones escalables, fáciles de usar e innovadoras. Centrado en desarrollo web y resolución de problemas.",
    workTitle: "Experiencia laboral",
    workContent: "<ul><li>Soporte IT, ECU — Asistí a nuevos estudiantes con software y hardware (2025)</li><li>Pasantía en [Compañía] — Trabajó en [Proyecto] (Verano 2025)</li></ul>",
    navAbout: "Sobre mí",
    navWork: "Experiencia"
  }
};

languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  heroTitle.textContent = translations[lang].heroTitle;
  heroDesc.textContent = translations[lang].heroDesc;
  aboutTitle.textContent = translations[lang].aboutTitle;
  aboutContent.innerHTML = translations[lang].aboutContent;
  workTitle.textContent = translations[lang].workTitle;
  workContent.innerHTML = translations[lang].workContent;
  // Update navbar links
  navAbout.textContent = translations[lang].navAbout;
  navWork.textContent = translations[lang].navWork;
});
