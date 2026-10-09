/* =========================================================
   EDIT THIS SECTION: your links, content and projects
   ========================================================= */
const CONFIG = {
  email: "abdull4hi.hassan@gmail.com",                    // placeholder: replace
  github: "https://github.com/Ayatu1a",         // placeholder: replace
  linkedin: "https://www.linkedin.com/in/abdullahi-hassan-5a9b35419/", // placeholder: replace
  whatsapp: "https://wa.me/254702539798",                                       // e.g. "https://wa.me/2547XXXXXXXX" (leave "" to hide)
  portrait: "portrait.JPG",                                       // e.g. "assets/images/portrait.jpg" (leave "" for placeholder)
  certificate: "cert.jpg",                                  // e.g. "assets/images/excel-certificate.jpg"
  formEndpoint: ""                                    // e.g. a Formspree URL. Empty = nothing is sent
};

const ROLES = ["Information Technology Student","Aspiring Software Developer","Networking Enthusiast","Future Tech Entrepreneur","Lifelong Learner"];

const SKILLS = [
  { title: "Programming and web development", note: "Practising through coursework and personal projects.", items: [["HTML5","Practicing"],["CSS3","Practicing"],["JavaScript","Developing"],["C++","Learning"],["Visual Studio Code","Practicing"]] },
  { title: "Databases", note: "Database design, SQL queries, and relational database concepts.", items: [["MySQL / MariaDB","Learning"],["SQLite","Learning"],["PostgreSQL","Learning"],["Microsoft Access","Practicing"],["SQL queries","Practicing"]] },
  { title: "Networking and IT", note: "Hands-on practice in Cisco Packet Tracer plus systems fundamentals.", items: [["Cisco Packet Tracer","Practicing"],["IPv4 / IPv6","Learning"],["Routers and switches","Practicing"],["VLANs","Learning"],["OSI model and protocols","Learning"],["Operating systems","Learning"]] },
  { title: "Productivity and business", note: "Business interests alongside the technical work.", items: [["Microsoft Excel","Practicing"],["Data organisation","Learning"],["Digital marketing","Learning"],["Sales and business development","Learning"],["Product ideation","Developing"]] }
];

// Categories used by the filter buttons come from the "category" field below.
const PROJECTS = [
  { title: "Personal Portfolio Website", category: "Web Development", status: "In Development",
    description: "A responsive personal website showcasing my technical journey, projects, skills, and professional ambitions.",
    tech: ["HTML","CSS","JavaScript"], github: "", demo: "" },
  { title: "Library Management Database", category: "Databases", status: "Academic Project / Learning",
    description: "A database project exploring how books, library members, and borrowing records can be organised and managed efficiently.",
    tech: ["SQL","Relational design","Database tools"], github: "", demo: "" },
  { title: "Networking Labs", category: "Networking", status: "Learning / Practice",
    description: "Hands-on practice in Cisco Packet Tracer covering routers, switches, IPv4, IPv6, device configuration, and troubleshooting.",
    tech: ["Cisco Packet Tracer","Networking protocols","CLI configuration"], github: "", demo: "" },
  { title: "Student and Fee Management Programs", category: "Programming", status: "Academic Practice",
    description: "Beginner C++ programs solving practical problems involving student information, fee calculations, grading, and other calculations.",
    tech: ["C++"], github: "", demo: "" },
  { title: "To-Do List Application", category: "Web Development", status: "Planned",
    description: "A planned productivity app for managing tasks, tracking completion, and organising daily activities.",
    tech: ["HTML","CSS","JavaScript"], github: "", demo: "" },
  { title: "LoggedIn: Freelance Opportunities Platform", category: "Business Ideas", status: "Concept Development",
    description: "A startup concept for connecting freelancers with employers while improving trust, access to opportunities, and the experience of hiring and working online in Kenya and across Africa. This is an idea, not a launched product.",
    tech: ["Future web application"], github: "", demo: "" },
  { title: "Digital Thrift Store Business", category: "Business Ideas", status: "Business Exploration",
    description: "An exploration of online retail, social media marketing, product promotion, and building an online sales channel for thrift clothing. Not yet launched.",
    tech: ["Digital marketing","Social media"], github: "", demo: "" }
];

const JOURNEY = [
  ["M-PESA Foundation Academy","Previous educational experience before university."],
  ["Africa International University","Pursuing a Bachelor of Science in Information Technology."],
  ["Programming and web development","Building foundational skills through coursework and personal projects."],
  ["Database development","Exploring relational databases, SQL, and database management."],
  ["Networking","Practising networking concepts and device configuration in Cisco Packet Tracer."],
  ["Professional development","Completed an Excel course and exploring technology, sales, and entrepreneurship."]
];

const LEARNING = [
  ["Web fundamentals","Improving my HTML, CSS, and JavaScript skills.","Practicing"],
  ["Practical software","Building practical software projects.","Developing"],
  ["Databases and SQL","Strengthening my database and SQL knowledge.","Learning"],
  ["Networking","Improving networking and troubleshooting skills.","Practicing"],
  ["Business","Learning more about sales, business development, and entrepreneurship.","Learning"],
  ["Communication","Developing my communication and professional networking skills.","Developing"]
];

const PRINCIPLES = ["Stay curious.","Build before you feel ready.","Learn by doing.","Solve real problems.","Keep improving."];

const TERMINAL_LINES = [
  "<b>$</b> whoami", "abdullahi — IT student, Kenya",
  "<b>$</b> cat focus.txt", "web dev · databases · networking",
  "<b>$</b> status", "learning, building, becoming"
];

const COLORS = [["#5b86ff","#9b6cff"],["#9b6cff","#d946a8"],["#1fb6a6","#5b86ff"],["#c6f432","#1fb6a6"],["#f59e0b","#ef4444"],["#5b86ff","#c6f432"],["#d946a8","#f59e0b"]];
const STATUS_DOT = { "In Development":"#c6f432","Planned":"#9b6cff","Concept Development":"#9b6cff","Business Exploration":"#9b6cff" };

/* =========================================================
   CODE (you normally don't need to edit below this line)
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

/* ---- Theme (saved in localStorage) ---- */
const root = document.documentElement, themeBtn = $("#themeBtn");
function setTheme(t) {
  root.dataset.theme = t;
  themeBtn.innerHTML = t === "dark" ? "&#9788;" : "&#9790;";
  themeBtn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  $('meta[name="theme-color"]').content = t === "dark" ? "#0a0b10" : "#f6f7fb";
}
let saved = "dark";
try { saved = localStorage.getItem("theme") || "dark"; } catch (e) {}
setTheme(saved);
themeBtn.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

/* ---- Social links ---- */
const ICONS = {
  GitHub: "M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.300.7-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 0 1 5.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.8 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.4.8 1.100.8 2.200v3.200c0 .3.2.7.8.6A11.500 11.500 0 0 0 12 .5z",
  LinkedIn: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.500h4V21H3zM9.500 9.500h3.800v1.600h.1c.5-1 1.800-2 3.800-2 4 0 4.800 2.600 4.800 6V21h-4v-5c0-1.200 0-2.800-1.700-2.800s-2 1.300-2 2.700V21h-4z",
  Email: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7L4 7v1.500l8 5 8-5V7z",
  WhatsApp: "M12 2a10 10 0 0 0-8.600 15L2 22l5.200-1.400A10 10 0 1 0 12 2zm5.200 14.200c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.300 0 .5l-.4.600c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.400.100.200.100.800-.100 1.200z"
};
function socials(el) {
  const list = [["GitHub", CONFIG.github], ["LinkedIn", CONFIG.linkedin], ["Email", "mailto:" + CONFIG.email]];
  if (el.hasAttribute("data-whatsapp") && CONFIG.whatsapp) list.push(["WhatsApp", CONFIG.whatsapp]);
  el.innerHTML = list.map(([n, u]) =>
    `<a href="${esc(u)}" ${u.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} aria-label="${n}">` +
    `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[n]}"/></svg>${n}</a>`).join("");
}
$$("[data-socials]").forEach(socials);
$("#emailShown").textContent = "Email: " + CONFIG.email + (CONFIG.email.includes("example.com") ? " (placeholder, edit in script.js)" : "");

/* ---- Portrait + certificate placeholders ---- */
if (CONFIG.portrait) { const p = $("#portrait"); p.style.backgroundImage = `url("${CONFIG.portrait}")`; p.classList.add("has-img"); p.setAttribute("role", "img"); p.setAttribute("aria-label", "Portrait of Abdullahi Hassan Abdinoor"); }
if (CONFIG.certificate) { const c = $("#certImg"); c.style.backgroundImage = `url("${CONFIG.certificate}")`; c.textContent = ""; c.setAttribute("role", "img"); c.setAttribute("aria-label", "Excel course completion certificate"); }

/* ---- Mobile menu ---- */
const burger = $("#burger"), menu = $("#menu");
function toggleMenu(open) {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
burger.addEventListener("click", () => toggleMenu(!menu.classList.contains("open")));
$$("a", menu).forEach(a => a.addEventListener("click", () => toggleMenu(false)));

/* ---- Typing effect ---- */
const typed = $("#typed");
(function typeLoop(i = 0, c = 0, del = false) {
  if (reduceMotion) { typed.textContent = ROLES[0]; return; }
  const word = ROLES[i];
  typed.textContent = word.slice(0, c);
  if (!del && c === word.length) return setTimeout(() => typeLoop(i, c, true), 1600);
  if (del && c === 0) return setTimeout(() => typeLoop((i + 1) % ROLES.length, 0, false), 350);
  setTimeout(() => typeLoop(i, c + (del ? -1 : 1), del), del ? 30 : 60);
})();

/* ---- Terminal ---- */
(function terminal() {
  const term = $("#term"), text = TERMINAL_LINES.join("\n");
  if (reduceMotion) { term.innerHTML = text; return; }
  let out = "", i = 0, tagBuf = "";
  (function step() {
    if (i >= text.length) return;
    const ch = text[i++];
    if (ch === "<") { const end = text.indexOf(">", i); out += text.slice(i - 1, end + 1); i = end + 1; }
    else out += ch;
    term.innerHTML = out + (out.split("<b>").length > out.split("</b>").length ? "</b>" : "");
    setTimeout(step, ch === "\n" ? 350 : 28);
  })();
})();

/* ---- Skills ---- */
$("#skillGrid").innerHTML = SKILLS.map((s, i) => `
  <button class="card skill-card reveal" aria-expanded="false" aria-controls="sk${i}">
    <h4>${esc(s.title)}<span class="plus" aria-hidden="true">+</span></h4>
    <div class="badges">${s.items.map(([n, l]) => `<span class="badge">${esc(n)}<small>${esc(l)}</small></span>`).join("")}</div>
    <div class="skill-more" id="sk${i}"><div><p>${esc(s.note)}</p></div></div>
  </button>`).join("");
$$(".skill-card").forEach(b => b.addEventListener("click", () => b.setAttribute("aria-expanded", b.getAttribute("aria-expanded") !== "true")));

/* ---- Projects: filters, cards, modal ---- */
const cats = ["All", ...new Set(PROJECTS.map(p => p.category))];
const filters = $("#filters"), grid = $("#projGrid");
filters.innerHTML = cats.map((c, i) => `<button type="button" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
grid.innerHTML = PROJECTS.map((p, i) => `
  <article class="card proj reveal" data-cat="${esc(p.category)}">
    <div class="preview" style="--h1:${COLORS[i % COLORS.length][0]};--h2:${COLORS[i % COLORS.length][1]}" aria-hidden="true"></div>
    <div class="proj-body">
      <span class="cat">${esc(p.category)}</span><h4>${esc(p.title)}</h4>
      <p>${esc(p.description)}</p>
      <div class="badges">${p.tech.map(t => `<span class="badge">${esc(t)}</span>`).join("")}</div>
      <span class="status" style="--dot:${STATUS_DOT[p.status] || "#aab0c0"}">${esc(p.status)}</span>
      <button class="btn btn-ghost btn-sm" type="button" data-i="${i}">View details</button>
    </div>
  </article>`).join("");
filters.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  $$("button", filters).forEach(x => x.setAttribute("aria-pressed", x === b));
  $$(".proj", grid).forEach(c => c.hidden = b.dataset.cat !== "All" && c.dataset.cat !== b.dataset.cat);
});

const modal = $("#modal"); let lastFocus = null;
function openModal(i) {
  const p = PROJECTS[i]; lastFocus = document.activeElement;
  const [a, b] = COLORS[i % COLORS.length];
  $("#mPreview").style.cssText = `--h1:${a};--h2:${b}`;
  $("#mTitle").textContent = p.title;
  $("#mMeta").textContent = p.category + " · " + p.status;
  $("#mDesc").textContent = p.description;
  $("#mTech").innerHTML = p.tech.map(t => `<span class="badge">${esc(t)}</span>`).join("");
  const links = [];
  if (p.github) links.push(`<a class="btn btn-sm" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`);
  if (p.demo) links.push(`<a class="btn btn-ghost btn-sm" href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">Live demo</a>`);
  $("#mLinks").innerHTML = links.join("");
  modal.hidden = false; document.body.style.overflow = "hidden"; $("#mClose").focus();
}
function closeModal() { modal.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
grid.addEventListener("click", e => { const b = e.target.closest("[data-i]"); if (b) openModal(+b.dataset.i); });
$("#mClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab") { // keep focus inside the modal
    const f = $$("button,a[href]", modal); const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---- Timeline, learning, principles, stats ---- */
$("#timeline").innerHTML = JOURNEY.map(([t, d]) => `<li><h4>${esc(t)}</h4><p>${esc(d)}</p></li>`).join("");
$("#learnGrid").innerHTML = LEARNING.map(([t, d, s]) => `<article class="card reveal"><h4>${esc(t)}</h4><p>${esc(d)}</p><span class="tag live">${esc(s)}</span></article>`).join("");
$("#principles").innerHTML = PRINCIPLES.map(p => `<li>${esc(p)}</li>`).join("");
// Counters only show real values taken from the arrays above
const STATS = [[PROJECTS.length, "projects and concepts"], [SKILLS.reduce((n, s) => n + s.items.length, 0), "skills and tools listed"], [LEARNING.length, "current learning focuses"]];
$("#stats").innerHTML = STATS.map(([n, l]) => `<div class="stat"><strong data-n="${n}">0</strong><span>${l}</span></div>`).join("");
function countUp(el) {
  const n = +el.dataset.n; if (reduceMotion) { el.textContent = n; return; }
  let v = 0; const t = setInterval(() => { el.textContent = ++v; if (v >= n) clearInterval(t); }, 70);
}

/* ---- Scroll reveal + counters ---- */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  $$("[data-n]", en.target).forEach(countUp);
  io.unobserve(en.target);
}), { threshold: .15 });
$$(".reveal, .timeline li, .principles li, .stats").forEach(el => io.observe(el));

/* ---- Active nav link ---- */
const links = $$(".menu a");
const spy = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main > section").forEach(s => spy.observe(s));

/* ---- Back to top, copy email, year ---- */
const toTop = $("#toTop");
addEventListener("scroll", () => toTop.classList.toggle("show", scrollY > 600), { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
$("#year").textContent = new Date().getFullYear();
$("#copyEmail").addEventListener("click", async e => {
  const b = e.currentTarget;
  try { await navigator.clipboard.writeText(CONFIG.email); b.textContent = "Copied!"; }
  catch (err) { b.textContent = "Copy failed. Select the email below."; }
  setTimeout(() => b.textContent = "Copy email", 2000);
});

/* ---- Contact form validation ---- */
const form = $("#form"), status = $("#status");
const rules = {
  name: v => v.trim().length >= 2 || "Enter your name (at least 2 characters).",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Enter a valid email address, like name@example.com.",
  subject: v => v.trim().length >= 3 || "Enter a subject (at least 3 characters).",
  message: v => v.trim().length >= 10 || "Write a message of at least 10 characters."
};
function check(f) {
  const r = rules[f.name](f.value), err = $("#" + f.name + "-err");
  err.textContent = r === true ? "" : r; f.setAttribute("aria-invalid", r !== true);
  return r === true;
}
$$("input,textarea", form).forEach(f => f.addEventListener("blur", () => check(f)));
form.addEventListener("submit", async e => {
  e.preventDefault(); status.className = "status"; status.textContent = "";
  const fields = $$("input,textarea", form), ok = fields.map(check).every(Boolean);
  if (!ok) { status.classList.add("bad"); status.textContent = "Fix the highlighted fields and try again."; fields.find(f => f.getAttribute("aria-invalid") === "true").focus(); return; }
  if (!CONFIG.formEndpoint) {
    status.classList.add("bad");
    status.textContent = "Your message looks good, but no form service is connected yet, so nothing was sent. Use the email or social links instead.";
    return;
  }
  try {
    const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
    if (!res.ok) throw new Error();
    status.classList.add("ok"); status.textContent = "Message sent. Thank you!"; form.reset();
  } catch (err) { status.classList.add("bad"); status.textContent = "Sending failed. Check your connection or email me directly."; }
});

/* ---- Cursor glow (desktop only) ---- */
const glow = $(".cursor-glow");
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !reduceMotion) {
  addEventListener("mousemove", e => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; glow.classList.add("on"); }, { passive: true });
}

/* ---- Loader ---- */
addEventListener("load", () => setTimeout(() => $("#loader").classList.add("done"), 400));