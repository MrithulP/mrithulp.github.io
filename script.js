// =========================
// NAVIGATION & THEME TOGGLE
// =========================
const nav = document.querySelector(".nav");
const toggle = document.getElementById("themeToggle");

// Sun icon SVG
const sunSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>
`;

// Moon icon SVG
const moonSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
</svg>
`;

// Change navbar style on scroll
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

// Retrieve saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

// Set theme function
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

// Initial theme load
setTheme(savedTheme === "light" ? "light" : "dark");

// Toggle theme on button click
toggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("light") ? "dark" : "light");
});

// Initialize Lucide icons
lucide.createIcons();



// =========================
// IMAGE STACK ROTATION
// =========================
const images = document.querySelectorAll(".stack-img");
let index = 0;

images[index].classList.add("active");

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}, 3500);



// =========================
// TYPING ANIMATION
// =========================
const text = "Hi Mrithul Here.";
const emoji = "👋";
const el = document.getElementById("typeText");

let i = 0;

function type() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      el.textContent += emoji;
    }, 10);
  }
}

type();
