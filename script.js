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
  toggle.textContent = "☼";
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
    toggle.textContent = "☼";
    toggle.classList.add("sun");
    localStorage.setItem("theme", "dark");
  }
});
lucide.createIcons();
    