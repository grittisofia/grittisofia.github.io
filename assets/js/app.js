/* ==========================================================
   APP — language, theme, rendering, interactions
   ========================================================== */
(function () {
  const LANGS = ["en", "sv", "it"];
  const HTML_LANG = { en: "en-GB", sv: "sv", it: "it" };
  const ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>'
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Language ---------- */
  function initialLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(q)) return q;
    const saved = store.get("lang");
    if (LANGS.includes(saved)) return saved;
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : "en";
  }
  let lang = initialLang();
  const t = (k) => (I18N[lang] && I18N[lang][k]) ?? I18N.en[k] ?? k;

  function setLang(l) {
    lang = l; store.set("lang", l);
    const url = new URL(location.href); url.searchParams.set("lang", l);
    history.replaceState(null, "", url);
    render();
  }

  /* ---------- Theme ---------- */
  function initTheme() {
    const saved = store.get("theme");
    if (saved === "light" || saved === "dark") document.documentElement.dataset.theme = saved;
  }
  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    store.set("theme", root.dataset.theme);
  }

  /* ---------- Shared chrome ---------- */
  function applyStatic() {
    document.documentElement.lang = HTML_LANG[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":"); el.setAttribute(attr, t(key));
      });
    });
    document.querySelectorAll(".lang-switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.querySelectorAll("[data-href]").forEach((a) => {
      const v = SITE[a.dataset.href]; a.href = a.dataset.href === "email" ? "mailto:" + v : v;
    });
    document.querySelectorAll("[data-internal]").forEach((a) => {
      const u = new URL(a.getAttribute("data-internal"), location.href); u.searchParams.set("lang", lang); a.href = u.pathname.split("/").pop() + u.search + u.hash;
    });
    const desc = document.querySelector('meta[name="description"]'); if (desc) desc.content = t("meta.desc");
    const year = document.getElementById("year"); if (year) year.textContent = new Date().getFullYear();
  }

  function projectHref(id) { return `project.html?p=${encodeURIComponent(id)}&lang=${lang}`; }

  /* ---------- Home ---------- */
  function renderHome() {
    document.title = t("meta.title");
    const portrait = document.getElementById("portrait-img");
    if (portrait && !portrait.src) portrait.src = SITE.portrait;

    // Work
    const list = document.getElementById("work-list");
    list.innerHTML = PROJECTS.map((p) => {
      const c = p.i18n[lang] || p.i18n.en;
      const meta = [c.client, p.year].filter(Boolean).map(esc).join('<span class="sep"></span>');
      const tags = (p.tags || []).map((x) => `<li>${esc(x)}</li>`).join("");
      if (p.placeholder) {
        return `<article class="work-card placeholder reveal" aria-label="${esc(c.title)}">
          <div class="work-media"><span class="ph-glyph" aria-hidden="true">4C</span></div>
          <div class="work-body">
            <div class="work-meta"><span class="badge warm">${t("work.soon")}</span>${meta ? '<span class="sep"></span>' + meta : ""}</div>
            <h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p><ul class="tags">${tags}</ul>
          </div></article>`;
      }
      return `<a class="work-card reveal" href="${projectHref(p.id)}">
        <div class="work-media"><img src="${esc(p.cover)}" alt="" loading="lazy" onerror="this.classList.add('broken')"></div>
        <div class="work-body">
          <div class="work-meta">${meta}</div>
          <h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p><ul class="tags">${tags}</ul>
          <span class="work-link">${t("work.read")} ${ICON.arrow}</span>
        </div></a>`;
    }).join("");

    // Experience
    document.getElementById("timeline").innerHTML = EXPERIENCE.map((e) => {
      const [role, desc] = e.i18n[lang] || e.i18n.en;
      return `<li class="reveal"><span class="when">${esc(e.when)}${e.now ? ` <span class="badge now">${t("exp.now")}</span>` : ""}</span>
        <div class="role"><strong>${esc(e.org)}</strong><span>${esc(role)}</span></div><p>${esc(desc)}</p></li>`;
    }).join("");

    // Skills
    document.getElementById("skills").innerHTML = [1, 2, 3].map((n) =>
      `<div class="skill-group reveal"><h4>${t("skills." + n)}</h4><ul>${t("skills." + n + ".list").split("|").map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`
    ).join("");

    // Craft
    document.getElementById("craft").innerHTML = CRAFT.map((c) => {
      const [title, sub] = c.i18n[lang] || c.i18n.en;
      return `<figure class="craft reveal"><div class="img"><img src="${esc(c.img)}" alt="${esc(title)}" loading="lazy" onerror="this.classList.add('broken')"></div>
        <figcaption><strong>${esc(title)}</strong><span>${esc(sub)}</span></figcaption></figure>`;
    }).join("");
  }

  /* ---------- Case study ---------- */
  function renderProject() {
    const id = new URLSearchParams(location.search).get("p");
    const real = PROJECTS.filter((p) => !p.placeholder);
    const idx = real.findIndex((p) => p.id === id);
    const root = document.getElementById("case");
    if (idx < 0) {
      root.innerHTML = `<div class="wrap cs-hero"><a class="back" href="index.html?lang=${lang}#work">${ICON.back} ${t("cs.back")}</a><p class="lead">${t("cs.notfound")}</p></div>`;
      return;
    }
    const p = real[idx], c = p.i18n[lang] || p.i18n.en, next = real[(idx + 1) % real.length];
    const nc = next.i18n[lang] || next.i18n.en;
    document.title = `${c.title} — Sofia Gritti`;

    const sections = [
      ["challenge", t("cs.challenge"), `<p>${esc(c.challenge)}</p>`],
      ["approach", t("cs.approach"), `<ol class="steps">${c.approach.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>`],
      ["solution", t("cs.solution"), `<p>${esc(c.solution)}</p>`],
      ["outcome", t("cs.outcome"), `<div class="callout"><p>${esc(c.outcome)}</p></div>`]
    ];
    if (p.screens && p.screens.length) {
      sections.push(["screens", t("cs.screens"), p.screens.map((s) =>
        `<div class="screen-frame"><div class="screen-bar"><i></i><i></i><i></i></div><div class="screen-scroll" tabindex="0"><img src="${esc(s)}" alt="${esc(c.title)}" loading="lazy" onerror="this.classList.add('broken')"></div></div><p class="screen-hint">${t("cs.scroll")}</p>`
      ).join("")]);
    }

    root.innerHTML = `
      <header class="wrap cs-hero">
        <a class="back" href="index.html?lang=${lang}#work">${ICON.back} ${t("cs.back")}</a>
        <span class="eyebrow">${esc(c.client)}</span>
        <h1 class="display">${esc(c.title)}</h1>
        <p class="lead">${esc(c.summary)}</p>
        ${p.prototype ? `<p style="margin-top:28px"><a class="btn btn-primary" href="${esc(p.prototype)}" target="_blank" rel="noopener">${t("cs.prototype")} ${ICON.ext}</a></p>` : ""}
        <dl class="cs-facts">
          <div><dt>${t("cs.role")}</dt><dd>${esc(c.role)}</dd></div>
          <div><dt>${t("cs.audience")}</dt><dd>${esc(c.audience)}</dd></div>
          <div><dt>${t("cs.scope")}</dt><dd>${esc(c.scope)}</dd></div>
          <div><dt>${t("cs.client")}</dt><dd>${esc(c.client)}</dd></div>
        </dl>
      </header>
      <div class="wrap"><div class="cs-cover"><img src="${esc(p.cover)}" alt="${esc(c.title)}" onerror="this.classList.add('broken')"></div></div>
      <div class="wrap cs-body">
        <ul class="cs-toc">${sections.map(([k, h]) => `<li><a href="#${k}">${h}</a></li>`).join("")}</ul>
        <div>${sections.map(([k, h, body]) => `<section class="cs-section reveal" id="${k}"><h2>${h}</h2>${body}</section>`).join("")}
          <a class="next-project" href="${projectHref(next.id)}"><span>${t("cs.next")}</span><strong>${esc(nc.title)} ${ICON.arrow}</strong></a>
        </div>
      </div>`;

    // Active TOC
    const links = [...root.querySelectorAll(".cs-toc a")];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    root.querySelectorAll(".cs-section").forEach((s) => io.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  let revealObserver;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in")); return; }
    revealObserver ||= new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealObserver.observe(el));
  }

  function render() {
    applyStatic();
    if (document.body.dataset.page === "home") renderHome();
    if (document.body.dataset.page === "project") renderProject();
    observeReveals();
  }

  /* ---------- Boot ---------- */
  initTheme();
  document.addEventListener("DOMContentLoaded", () => {
    render();
    document.querySelectorAll(".lang-switch button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    document.querySelector(".theme-btn")?.addEventListener("click", toggleTheme);

    const menuBtn = document.querySelector(".menu-btn"), links = document.querySelector(".nav-links");
    menuBtn?.addEventListener("click", () => {
      const open = links.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", String(open));
    });
    links?.addEventListener("click", (e) => { if (e.target.closest("a")) { links.classList.remove("open"); menuBtn?.setAttribute("aria-expanded", "false"); } });

    const header = document.querySelector(".site-header");
    const onScroll = () => header.classList.toggle("scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
  });
})();
