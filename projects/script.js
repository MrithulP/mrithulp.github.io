// ═══════════════════════════════════════════════════════
// PROJECT DATA — add/edit your projects here
// ═══════════════════════════════════════════════════════
const PROJECTS = [
  {
    title: "School Clubs Portal",
    desc: "Internal web portal for school clubs — handling sign-ups, announcements, attendance tracking, and resource sharing in one place.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "web",
    year: 2024,
    github: null, // add real link here once available
    live: null,
    image: null, // replace with: "./src/screenshot.png"
  },
  {
    title: "Careers Appointment Booking",
    desc: "A booking system for careers appointments integrated with Google Sheets for real-time tracking and management.",
    tags: ["HTML", "CSS", "JavaScript", "Google Sheets API"],
    type: "web",
    year: 2024,
    github: "https://github.com/oansh-careers/oansh-careers.github.io",
    live: "https://oansh-careers.github.io/",
    image: null,
  },
  {
    title: "Media Hub Website",
    desc: "The public-facing website for OANSH Media Hub — showcasing digital work, club updates, and creative projects produced by students.",
    tags: ["HTML", "CSS", "JavaScript", "UI Design"],
    type: "web",
    year: 2024,
    github: "https://github.com/oanmediahub/oanmediahub.github.io",
    live: "https://oanmediahub.github.io/",
    image: null,
  },
  {
    title: "Crawford Annual Game Jam",
    desc: "Two game prototypes developed for an inter-school game jam competition under time constraints.",
    tags: ["Game Development"],
    type: "game",
    year: 2024,
    github: null, // add real link here once available
    live: null,
    image: null,
  },
  {
    title: "Quiz Systems",
    desc: "Custom quiz tools built for internal school use — supporting multiple question types and instant feedback.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "web",
    year: 2023,
    github: null, // add real link here once available
    live: null,
    image: null,
  },
];

// ═══════════════════════════════════════════════════════
// THEME TOGGLE
// ═══════════════════════════════════════════════════════
const toggle = document.getElementById("themeToggle");

const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg>`;

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

// Sync theme with portfolio
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "light" ? "light" : "dark");

toggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("light") ? "dark" : "light");
});

// ═══════════════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════════════
const grid        = document.getElementById("projectsGrid");
const countEl     = document.getElementById("resultsCount");
const emptyState  = document.getElementById("emptyState");
const emptyQuery  = document.getElementById("emptyQuery");
const searchInput = document.getElementById("searchInput");
const sortSelect  = document.getElementById("sortSelect");

const GITHUB_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
const LIVE_SVG   = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

const TYPE_LABELS = { web: "Web", data: "Data", ai: "AI", game: "Game", other: "Other" };

function buildCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.style.animationDelay = `${index * 0.06}s`;

  const previewHTML = project.image
    ? `<img src="${project.image}" alt="${project.title}">`
    : `<div class="preview-placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>`;

  const linksHTML = [
    project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-icon-link" aria-label="GitHub">${GITHUB_SVG}</a>` : "",
    project.live   ? `<a href="${project.live}" target="_blank" rel="noopener" class="project-icon-link" aria-label="Live site">${LIVE_SVG}</a>` : "",
  ].join("");

  const tagsHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join("");

  card.innerHTML = `
    <div class="project-preview">
      ${previewHTML}
      <span class="project-year">${project.year}</span>
    </div>
    <div class="project-body">
      <div class="project-top">
        <h3 class="project-title">${project.title}</h3>
        <div class="project-links">${linksHTML}</div>
      </div>
      <div class="project-type">
        <span class="type-dot ${project.type}"></span>
        ${TYPE_LABELS[project.type] || "Other"}
      </div>
      <p class="project-desc">${project.desc}</p>
      <div class="project-tags">${tagsHTML}</div>
    </div>`;

  return card;
}

function getFiltered() {
  const q = searchInput.value.trim().toLowerCase();
  const sort = sortSelect.value;

  let list = PROJECTS.filter(p => {
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.type.toLowerCase().includes(q)
    );
  });

  list.sort((a, b) => {
    if (sort === "newest") return b.year - a.year;
    if (sort === "oldest") return a.year - b.year;
    if (sort === "az")     return a.title.localeCompare(b.title);
    if (sort === "za")     return b.title.localeCompare(a.title);
    return 0;
  });

  return list;
}

function render() {
  const list = getFiltered();
  const q = searchInput.value.trim();

  grid.innerHTML = "";

  if (list.length === 0) {
    emptyState.style.display = "block";
    emptyQuery.textContent = q;
    countEl.textContent = "";
  } else {
    emptyState.style.display = "none";
    countEl.textContent = `${list.length} project${list.length !== 1 ? "s" : ""}`;
    list.forEach((p, i) => grid.appendChild(buildCard(p, i)));
  }
}

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);

// Initial render
render();

// Footer year
document.getElementById("footer-year").textContent = new Date().getFullYear();
