const nav = document.querySelector(".nav");
const toggle = document.getElementById("themeToggle");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  toggle.textContent = "☾";
  toggle.classList.add("moon");
} else {
  toggle.textContent = "☀";
  toggle.classList.add("sun");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggle.classList.remove("sun", "moon");

  if (document.body.classList.contains("light")) {
    toggle.textContent = "☾";
    toggle.classList.add("moon");
    localStorage.setItem("theme", "light");
  } else {
    toggle.textContent = "☀";
    toggle.classList.add("sun");
    localStorage.setItem("theme", "dark");
  }
});

lucide.createIcons();

const images = document.querySelectorAll(".stack-img");
let index = 0;

images[index].classList.add("active");

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}, 3500);


const text = "hi mrithul here.";
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

