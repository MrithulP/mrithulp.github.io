// =========================
// THEME TOGGLE
// =========================
const nav = document.querySelector(".nav");
const toggle = document.getElementById("themeToggle");

const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>`;

const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
</svg>`;

function setTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    toggle.innerHTML = moonSVG;
  } else {
    document.body.classList.remove("light");
    toggle.innerHTML = sunSVG;
  }
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "light" ? "light" : "dark");

toggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("light") ? "dark" : "light");
});

lucide.createIcons();



// =========================
// HAMBURGER MENU
// =========================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

function closeMobileMenu() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("open");
  if (isOpen) {
    closeMobileMenu();
  } else {
    hamburger.classList.add("open");
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  }
});

mobileLinks.forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Don't close mobile menu if success popup is open
    if (formSuccessPopup && formSuccessPopup.classList.contains("visible")) return;
    closeMobileMenu();
  }
});



// =========================
// NAV SCROLL + SCROLL SPY
// =========================
const navLinks = document.querySelectorAll(".nav-link");

// Scrolled class for blur effect
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
  updateActiveNav();
});

// Map section IDs to their elements
const sections = [
  { id: "home",       el: document.getElementById("home") },
  { id: "experience", el: document.getElementById("experience") },
  { id: "projects",   el: document.getElementById("projects") },
  { id: "about",      el: document.getElementById("about") },
  { id: "contact",    el: document.getElementById("contact") },
];

function updateActiveNav() {
  const scrollY = window.scrollY;
  const navHeight = nav.offsetHeight;

  // Find which section we're currently in
  let current = "home";

  for (const { id, el } of sections) {
    if (!el) continue;
    const top = el.offsetTop - navHeight - 40;
    if (scrollY >= top) {
      current = id;
    }
  }

  navLinks.forEach(link => {
    const isActive = link.dataset.section === current;
    link.classList.toggle("active", isActive);
  });

  mobileLinks.forEach(link => {
    const isActive = link.dataset.section === current;
    link.classList.toggle("active", isActive);
  });
}

// Run once on load
updateActiveNav();



// =========================
// IMAGE STACK ROTATION
// =========================
const images = document.querySelectorAll(".stack-img");
let currentIndex = 0;

images[currentIndex].classList.add("active");

setInterval(() => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}, 3500);



// =========================
// TYPING ANIMATION
// =========================
const text = "Hi, Mrithul here.";
const emoji = " 👋";
const typeEl = document.getElementById("typeText");
let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    typeEl.textContent += text.charAt(charIndex);
    charIndex++;
    const delay = text.charAt(charIndex - 1) === "," ? 280 : 80 + Math.random() * 40;
    setTimeout(type, delay);
  } else {
    // Append emoji then remove cursor
    setTimeout(() => {
      typeEl.textContent += emoji;
      typeEl.classList.add("done"); // #5 — hides the blinking cursor
    }, 200);
  }
}

setTimeout(type, 400);



// =========================
// EXPERIENCE TABS
// =========================
const tabs = document.querySelectorAll(".exp-tab");
const panels = document.querySelectorAll(".exp-panel");
const indicator = document.querySelector(".exp-indicator");

function updateIndicator(index) {
  indicator.style.transform = `translateX(${index * 100}%)`;
}

const activeTabIndex = [...tabs].findIndex(t => t.classList.contains("active"));
updateIndicator(activeTabIndex);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
    updateIndicator(index);
  });
});



// =========================
// SCROLL REVEAL (timeline + project cards)
// =========================
const revealItems = document.querySelectorAll(".timeline-item, .project-card");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

revealItems.forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transitionDelay = `${i * 0.07}s`;
  revealObserver.observe(el);
});



// =========================
// CONTACT FORM
// =========================
const contactForm = document.getElementById("contactForm");
const formNotice  = document.getElementById("formNotice");
const formSuccessPopup  = document.getElementById("formSuccessPopup");
const formSuccessClose  = document.getElementById("formSuccessClose");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Input IDs in the HTML are Name, Email, Subject, Message
    const name    = document.getElementById("Name").value.trim();
    const email   = document.getElementById("Email").value.trim();
    const subject = document.getElementById("Subject").value.trim();
    const message = document.getElementById("Message").value.trim();

    if (!name || !email || !message) {
      formNotice.textContent = "Please fill in name, email and message.";
      formNotice.className = "form-notice error";
      return;
    }

    formNotice.textContent = "";
    formNotice.className = "form-notice";

    // Submit via fetch to Google Forms (no-cors — data goes through, response unreadable)
    const formData = new FormData();
    formData.append("entry.1353368278",  name);
    formData.append("entry.1060021900", email);
    formData.append("entry.132507211", subject);
    formData.append("entry.44879822", message);

    fetch(contactForm.action, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
    .finally(() => {
      // .finally() runs whether it succeeds or fails
      // with no-cors we can never read the response so this is the right approach
      contactForm.reset();
      showSuccessPopup();
    });
  });
}

function showSuccessPopup() {
  if (!formSuccessPopup) return;
  formSuccessPopup.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function hideSuccessPopup() {
  if (!formSuccessPopup) return;
  formSuccessPopup.classList.remove("visible");
  document.body.style.overflow = "";
}

if (formSuccessClose) {
  formSuccessClose.addEventListener("click", hideSuccessPopup);
}

if (formSuccessPopup) {
  formSuccessPopup.addEventListener("click", (e) => {
    if (e.target === formSuccessPopup) hideSuccessPopup();
  });
}


// =========================
// CERT SHOW MORE TOGGLE
// =========================
const certToggle = document.getElementById("certToggle");
const certToggleText = document.getElementById("certToggleText");
const certToggleIcon = document.getElementById("certToggleIcon");
const hiddenCerts = document.querySelectorAll(".cert-hidden");

if (certToggle) {
  let expanded = false;

  certToggle.addEventListener("click", () => {
    expanded = !expanded;

    hiddenCerts.forEach(cert => {
      cert.classList.toggle("cert-visible", expanded);
    });

    certToggleText.textContent = expanded
      ? "Show less"
      : `Show ${hiddenCerts.length} more`;

    certToggle.classList.toggle("open", expanded);
  });
}

// =========================
// FOOTER YEAR
// =========================
document.getElementById("footer-year").textContent = new Date().getFullYear();
