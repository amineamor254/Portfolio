// ...existing code...

const translations = {
  en: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
    heroTitle: "Hi, I'm <span class=\"highlighted-name\">Amine</span>",
    heroSubtitle: "Full-Stack Developer",
    heroBtn1: "Let's Connect",
    heroBtn2: "Projects",
    aboutTitle: "About <span>Me</span>",
    aboutDescTitle: "Passionate Full-Stack Developer",
    aboutDesc: "Hello! I am Mohamed Amine, a web developer specializing in creating dynamic websites using HTML, CSS, and JavaScript, with strong skills in application development using PHP and MySQL. I excel in designing efficient databases and developing interactive websites that meet clients' needs. I always strive to deliver innovative and high-quality software solutions.",
    aboutCV: "Download CV",
    skillsTitle: "My <span>Skills</span>",
    frontEnd: "Front-End",
    frontEndDesc: "Creating modern, responsive, and user-friendly interfaces using cutting-edge web technologies.",
    backEnd: "Back-End",
    backEndDesc: "Building scalable, maintainable, and secure server-side applications and APIs.",
    databases: "Databases",
    databasesDesc: "Designing and managing efficient databases for optimal data storage and retrieval.",
    tools: "Tools & Version Control",
    toolsDesc: "Using essential development tools for version control, collaboration, and workflow optimization.",
    marketing: "Digital Marketing",
    marketingDesc: "Promoting brands and products using digital channels, analytics, and creative strategies.",
    projectsTitle: "Recent <span>Projects</span>",
    contactTitle: "Contact <span>Me</span>",
    contactBtn: "Send Message",
    footer: "&copy; 2025 DevAmin | All Rights Reserved"
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    portfolio: "Portfolio",
    contact: "Contact",
    heroTitle: "Salut, je suis <span class=\"highlighted-name\">Amine</span>",
    heroSubtitle: "Développeur Full-Stack",
    heroBtn1: "Contactez-moi",
    heroBtn2: "Projets",
    aboutTitle: "À propos de <span>moi</span>",
    aboutDescTitle: "Développeur Full-Stack Passionné",
    aboutDesc: "Bonjour ! Je suis Mohamed Amine, développeur web spécialisé dans la création de sites dynamiques avec HTML, CSS et JavaScript, et compétent en développement d'applications avec PHP et MySQL. J'excelle dans la conception de bases de données efficaces et le développement de sites interactifs répondant aux besoins des clients. Je m'efforce toujours de fournir des solutions logicielles innovantes et de haute qualité.",
    aboutCV: "Télécharger le CV",
    skillsTitle: "Mes <span>Compétences</span>",
    frontEnd: "Front-End",
    frontEndDesc: "Création d'interfaces modernes, réactives et conviviales avec les technologies web les plus récentes.",
    backEnd: "Back-End",
    backEndDesc: "Développement d'applications serveur évolutives, maintenables et sécurisées.",
    databases: "Bases de données",
    databasesDesc: "Conception et gestion de bases de données efficaces pour un stockage et une récupération optimaux.",
    tools: "Outils & Contrôle de version",
    toolsDesc: "Utilisation d'outils essentiels pour le contrôle de version, la collaboration et l'optimisation du flux de travail.",
    marketing: "Marketing Digital",
    marketingDesc: "Promotion de marques et produits via des canaux numériques, l'analyse et des stratégies créatives.",
    projectsTitle: "Projets <span>Récents</span>",
    contactTitle: "Contactez <span>Moi</span>",
    contactBtn: "Envoyer",
    footer: "&copy; 2025 DevAmin | Tous droits réservés"
  },
  ar: {
    home: "الرئيسية",
    about: "من أنا",
    portfolio: "الأعمال",
    contact: "تواصل",
    heroTitle: "مرحباً، أنا <span class=\"highlighted-name\">أمين</span>",
    heroSubtitle: "مطور برمجيات متكامل",
    heroBtn1: "تواصل معي",
    heroBtn2: "المشاريع",
    aboutTitle: "من <span>أنا</span>",
    aboutDescTitle: "مطور برمجيات متكامل شغوف",
    aboutDesc: "مرحباً! أنا محمد أمين، مطور ويب متخصص في إنشاء مواقع ديناميكية باستخدام HTML وCSS وJavaScript، وماهر في تطوير التطبيقات باستخدام PHP وMySQL. أتميز بتصميم قواعد بيانات فعالة وتطوير مواقع تفاعلية تلبي احتياجات العملاء. أحرص دائماً على تقديم حلول برمجية مبتكرة وعالية الجودة.",
    aboutCV: "تحميل السيرة الذاتية",
    skillsTitle: "<span>مهاراتي</span>",
    frontEnd: "الواجهة الأمامية",
    frontEndDesc: "إنشاء واجهات حديثة ومتجاوبة وسهلة الاستخدام باستخدام أحدث تقنيات الويب.",
    backEnd: "الواجهة الخلفية",
    backEndDesc: "بناء تطبيقات خوادم قابلة للتطوير وسهلة الصيانة وآمنة.",
    databases: "قواعد البيانات",
    databasesDesc: "تصميم وإدارة قواعد بيانات فعالة لتخزين البيانات واسترجاعها بشكل أمثل.",
    tools: "الأدوات وإدارة الإصدارات",
    toolsDesc: "استخدام أدوات التطوير الأساسية لإدارة الإصدارات والتعاون وتحسين سير العمل.",
    marketing: "التسويق الرقمي",
    marketingDesc: "ترويج العلامات التجارية والمنتجات عبر القنوات الرقمية والتحليلات والاستراتيجيات الإبداعية.",
    projectsTitle: "<span>أحدث</span> المشاريع",
    contactTitle: "تواصل <span>معي</span>",
    contactBtn: "إرسال",
    footer: "&copy; 2025 ديف أمين | جميع الحقوق محفوظة"
  }
};

function setLanguage(lang) {
  // Set direction for Arabic
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Navigation
  document.querySelector('.main-navigation a[href="#home-section"]').textContent = translations[lang].home;
  document.querySelector('.main-navigation a[href="#about-section"]').textContent = translations[lang].about;
  document.querySelector('.main-navigation a[href="#portfolio-section"]').textContent = translations[lang].portfolio;
  document.querySelector('.main-navigation a[href="#contact-section"]').textContent = translations[lang].contact;
  // Hero
  document.querySelector('.hero-content h1').innerHTML = translations[lang].heroTitle;
  document.querySelector('.animated-text h3').textContent = translations[lang].heroSubtitle;
  document.querySelector('.hero-buttons .btn-primary').textContent = translations[lang].heroBtn1;
  document.querySelector('.hero-buttons .btn-secondary').textContent = translations[lang].heroBtn2;
  // About
  document.querySelector('.about-section .section-title').innerHTML = translations[lang].aboutTitle;
  document.querySelector('.about-description h3').textContent = translations[lang].aboutDescTitle;
  document.querySelector('.about-description p').textContent = translations[lang].aboutDesc;
  document.querySelector('.about-description .btn-primary').textContent = translations[lang].aboutCV;
  // Skills
  document.querySelector('.skills-section .section-title').innerHTML = translations[lang].skillsTitle;
  document.querySelectorAll('.skill-category h3')[0].textContent = translations[lang].frontEnd;
  document.querySelectorAll('.skill-category p')[0].textContent = translations[lang].frontEndDesc;
  document.querySelectorAll('.skill-category h3')[1].textContent = translations[lang].backEnd;
  document.querySelectorAll('.skill-category p')[1].textContent = translations[lang].backEndDesc;
  document.querySelectorAll('.skill-category h3')[2].textContent = translations[lang].databases;
  document.querySelectorAll('.skill-category p')[2].textContent = translations[lang].databasesDesc;
  document.querySelectorAll('.skill-category h3')[3].textContent = translations[lang].tools;
  document.querySelectorAll('.skill-category p')[3].textContent = translations[lang].toolsDesc;
  document.querySelectorAll('.skill-category h3')[4].textContent = translations[lang].marketing;
  document.querySelectorAll('.skill-category p')[4].textContent = translations[lang].marketingDesc;
  // Projects
  document.querySelector('.portfolio-section .section-title').innerHTML = translations[lang].projectsTitle;
  // Contact
  document.querySelector('.contact-section .section-title').innerHTML = translations[lang].contactTitle;
  document.querySelector('.contact-form button').textContent = translations[lang].contactBtn;
  // Footer
  document.querySelector('.site-footer p').innerHTML = translations[lang].footer;
}

document.getElementById('lang-en').addEventListener('click', function(e) {
  e.preventDefault();
  setLanguage('en');
});
document.getElementById('lang-fr').addEventListener('click', function(e) {
  e.preventDefault();
  setLanguage('fr');
});

// Add this for Arabic
document.getElementById('lang-ar').addEventListener('click', function(e) {
  e.preventDefault();
  setLanguage('ar');
});

// Optionally, set default language on load
// setLanguage('en');

// ...existing code...


const toggleButton = document.getElementById('toggle-menu');
const nav = document.getElementById('nav');
toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
  // ===== Navigation Toggle =====
  const toggleButton = document.getElementById("toggle-menu");
  const navMenu = document.getElementById("nav");

  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // ===== Sticky Header on Scroll =====
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // ===== Scroll to Top Button =====
  const scrollTopBtn = document.querySelector(".scroll-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== Typing Effect =====
  const textElement = document.getElementById("dynamic-typing");
  const phrases = ["Web Developer", "Backend Engineer", "Creative Coder"];
  let i = 0, j = 0, currentPhrase = [], isDeleting = false;

  function typeLoop() {
    textElement.textContent = currentPhrase.join("");

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }

    setTimeout(typeLoop, isDeleting ? 60 : 100);
  }

  typeLoop();

  // ===== AOS Animation Initialization (if using AOS) =====
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
    });
  }
});
