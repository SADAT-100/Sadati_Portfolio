/* ==========================================================================
   Sadati Fred Mwasongwe · Portfolio · main.js
   Renders every page from window.PORTFOLIO (data.js). One page is shown
   at a time, chosen by the address hash (#about, #websites, ...), like the
   In-House Careers site. No dependencies.
   ========================================================================== */
(function () {
  "use strict";

  const D = window.PORTFOLIO;
  if (!D) { console.error("data.js did not load"); return; }

  /* ------------------------------------------------------------ helpers */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const root = document.documentElement;
  const esc = (v) => String(v == null ? "" : v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (name) => `<svg class="i" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const isExternal = (url) => /^https?:\/\//i.test(url);
  const linkAttrs = (url) => (isExternal(url) ? ' target="_blank" rel="noopener noreferrer"' : "");
  // PREVIEW mode (set by the hosted preview build): the preview frame blocks
  // plain downloads, printing and mailto. Download links there go through the
  // viewer's save prompt (saveFile) and fall back to opening a new tab.
  const PREVIEW = !!window.PORTFOLIO_PREVIEW;
  const dl = (name) => (PREVIEW ? ` data-dl="${esc(name || "")}" target="_blank" rel="noopener"` : ` download${name ? `="${esc(name)}"` : ""}`);
  const safe = (name, fn) => { try { return fn(); } catch (err) { console.error(`[portfolio] ${name} failed:`, err); } };
  const missingFiles = new Set();
  const fileAvailable = (path) => !!path && !missingFiles.has(path);
  const P = D.profile, R = D.resume, C = D.contact;
  const current = D.experience.find((x) => x.current);

  const PAGES = [
    { id: "home", label: "Home", icon: "home" },
    { id: "about", label: "About me", icon: "user" },
    { id: "experience", label: "Experience", icon: "briefcase" },
    { id: "skills", label: "Skills", icon: "spark" },
    { id: "projects", label: "Projects", icon: "flask", count: () => D.projects.length },
    { id: "websites", label: "My websites", icon: "globe", count: () => D.websites.filter((w) => w.access !== "soon").length },
    { id: "documents", label: "CV & documents", icon: "file" },
    { id: "certificates", label: "Certificates", icon: "award" },
    { id: "activities", label: "Activities", icon: "calendar" },
    { id: "contact", label: "Contact me", icon: "send", cta: true },
  ];

  /* ---------------------------------------------------------- shell */
  function renderShell() {
    $("#nav-main").innerHTML = PAGES.map((p) =>
      `<a href="#${p.id}" data-page="${p.id}"${p.cta ? ' class="cta"' : ""}>${icon(p.icon)}<span>${esc(p.label)}</span>${p.count ? `<span class="count">${p.count()}</span>` : ""}</a>`).join("");
    const links = D.social.filter((s) => s.icon !== "mail").map((s) =>
      `<a href="${esc(s.url)}"${linkAttrs(s.url)}>${icon(s.icon)}<span>${esc(s.label)}</span>${icon("external")}</a>`);
    if (fileAvailable(R.file)) links.push(`<a href="${esc(R.file)}"${dl(R.fileName)}>${icon("download")}<span>Download CV</span><span class="count">PDF</span></a>`);
    $("#nav-links").innerHTML = links.join("");
    $$("#nav-links a .i:last-child").forEach((i) => { if (i.previousElementSibling && i.previousElementSibling.tagName === "SPAN") i.style.marginInlineStart = "auto"; });
    const sp = D.hero.spotlight;
    $("#rail-status").innerHTML = `<small><span class="dot"></span>${esc(sp.k)}</small>
      <strong>${esc(sp.label)}</strong>
      <span>${esc(sp.line)}</span>
      ${(sp.roles || []).length ? `<ul class="roles">${sp.roles.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}`;
    $("#year").textContent = new Date().getFullYear();
    $("#footer-links").innerHTML = [`<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>`]
      .concat(D.social.filter((s) => s.icon !== "mail").map((s) => `<a href="${esc(s.url)}"${linkAttrs(s.url)}>${esc(s.label)}</a>`)).join(" · ");
  }

  /* ---------------------------------------------------------- pages */
  const head = (eyebrow, title, lead) => `
    <header class="section-h">
      <p class="eyebrow">${esc(eyebrow)}</p>
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ""}
    </header>`;

  function pageHome() {
    const h = D.hero, sp = h.spotlight, edu = D.education[0];
    const facts = [
      ["BSc Biomedical Engineering", `${edu.school} · CGPA 4.28/5.0`],
      ["Registered Graduate Engineer", "ERB Tanzania · Biomedical"],
      [current ? current.title : "", current ? current.org : ""],
      ["Open to work", "Biomedical & e-commerce roles · remote or on-site"],
    ].filter((f) => f[0]);
    return `
      <section class="hero">
        <div class="hero__copy">
          <p class="eyebrow">${esc(h.eyebrow)}</p>
          <h1>${esc(h.title)}</h1>
          <p class="lead">${esc(h.intro)}</p>
          <div class="row">
            <a class="btn btn-primary" href="#documents">${icon("file")}View my CV</a>
            <a class="btn btn-ghost" href="#websites">See my websites ${icon("arrow")}</a>
          </div>
        </div>
        <div class="portrait">
          <img src="${esc(P.portrait)}" alt="${esc(P.portraitAlt)}" width="560" height="700" fetchpriority="high" />
          <div class="badge"><span class="dot"></span><span><b>${esc(sp.label)}</b><small>${esc(sp.line)}</small></span></div>
        </div>
      </section>
      <div class="facts">${facts.map((f) => `<div class="fact"><b>${esc(f[0])}</b><span>${esc(f[1])}</span></div>`).join("")}</div>
      <div class="stack">
        <p class="eyebrow">What I work on</p>
        <div class="chips">${h.focus.map((f) => `<span class="chip">${esc(f)}</span>`).join("")}</div>
      </div>
      <div class="card">
        <h3>What I bring to a team</h3>
        <ul class="checklist">${h.strengths.map((s) => `<li>${icon("check")}<span>${esc(s)}</span></li>`).join("")}</ul>
      </div>
      <div class="quick">
        <a class="card" href="#experience">${icon("briefcase")}<b>Experience</b><span>${D.experience.length} roles in hospital engineering and e-commerce</span></a>
        <a class="card" href="#projects">${icon("flask")}<b>Projects</b><span>${D.projects.length} engineering and operations projects</span></a>
        <a class="card" href="#websites">${icon("globe")}<b>My websites</b><span>${D.websites.filter((w) => w.access !== "soon").length} websites and tools I built</span></a>
      </div>`;
  }

  function pageAbout() {
    const e = D.education[0];
    return `
      ${head("About me", "Engineer by training, operator by practice.", esc(D.about.lead))}
      <div class="card edu">
        <span class="ico">${icon("cap")}</span>
        <div>
          <p class="eyebrow">Education · ${esc(e.dates)}</p>
          <h3 style="margin:4px 0 4px">${esc(e.degree)}</h3>
          <p>${esc(e.school)} · ${esc(e.location)}</p>
          <p>${esc(e.detail)}</p>
          <div class="kv"><span class="tag blue">CGPA 4.28 / 5.0</span><span class="tag">3 Certificates of Excellence</span><span class="tag">Recognised by TCU</span><span class="tag">ERB registered engineer</span></div>
        </div>
      </div>
      <div class="grid-2">${D.about.facets.map((f) => `
        <article class="card facet"><span class="ico">${icon(f.icon)}</span><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></article>`).join("")}
        <article class="card facet"><span class="ico">${icon("lang")}</span><h3>Languages</h3>
          <ul class="skill-list">${D.languages.map((l) => `<li><span>${esc(l.name)}</span><span class="lvl ${l.level === "Native" ? "pro" : ""}">${esc(l.level)}</span></li>`).join("")}</ul>
        </article>
      </div>
      <div class="stack">
        <h2>My journey</h2>
        <ol class="timeline">${D.journey.map((m, i) => `
          <li><span class="n">${String(i + 1).padStart(2, "0")}</span><div><p class="when">${esc(m.date)}</p><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p></div></li>`).join("")}
        </ol>
      </div>`;
  }

  function pageExperience() {
    return `
      ${head("Experience", "Where the work happened.", "Hospital engineering training and commercial operations, most recent first.")}
      ${D.experience.map((x) => `
        <article class="card role">
          <div class="role__head">
            <span class="ico">${icon(x.icon || "briefcase")}</span>
            <div>
              <h3>${esc(x.title)}</h3>
              <p class="role__org">${esc(x.org)}${x.unit ? ` · ${esc(x.unit)}` : ""}</p>
              <p class="role__meta">
                <span>${icon("clock")}${esc(x.dates)}</span>
                ${x.location ? `<span>${icon("pin")}${esc(x.location)}</span>` : ""}
                ${x.current ? `<span class="now">${icon("check")}Current role</span>` : ""}
              </p>
            </div>
            ${x.type ? `<span class="tag">${esc(x.type)}</span>` : ""}
          </div>
          <p class="muted">${esc(x.summary)}</p>
          <ul class="tick-list">${x.responsibilities.concat(x.achievements || []).map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
          <div class="chips">${(x.tools || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        </article>`).join("")}`;
  }

  const lvlClass = (l) => /Professional/.test(l) ? "pro" : /Hands-on/.test(l) ? "hands" : "";
  function pageSkills() {
    return `
      ${head("Skills", "A cross-disciplinary toolkit.", "Each skill is labelled by how I have used it: in professional work, in hands-on hospital training, in study, or as working knowledge.")}
      <div class="grid-2">${D.skills.map((g) => `
        <article class="card skill-card">
          <header><span class="ico">${icon(g.icon)}</span><div><h3>${esc(g.group)}</h3><p>${esc(g.blurb)}</p></div></header>
          <ul class="skill-list">${g.items.map((s) => `<li><span>${esc(s.name)}</span><span class="lvl ${lvlClass(s.level)}">${esc(s.level)}</span></li>`).join("")}</ul>
        </article>`).join("")}
      </div>
      <div class="stack">
        <p class="eyebrow">Tools I use</p>
        <div class="chips">${D.toolbox.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      </div>`;
  }

  /* Filter bar shared by projects, documents, certificates and activities. */
  function filterBar(id, cats, items, catOf, search) {
    const used = cats.filter((c) => c === "All" || items.some((x) => catOf(x) === c));
    return `<div class="toolbar">
      <div class="filters" role="toolbar" aria-label="Filter" id="${id}-filters">${used.map((c, i) =>
        `<button class="filter" type="button" data-cat="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}<span class="n">${c === "All" ? items.length : items.filter((x) => catOf(x) === c).length}</span></button>`).join("")}</div>
      ${search ? `<label class="search">${icon("search")}<span class="sr-only">Search</span><input type="search" id="${id}-search" placeholder="Search" autocomplete="off" /></label>` : ""}
    </div>`;
  }
  function wireFilter(id, draw) {
    let cat = "All", q = "";
    const bar = $(`#${id}-filters`);
    if (bar) bar.addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      cat = b.dataset.cat;
      $$(".filter", bar).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      draw(cat, q);
    });
    const s = $(`#${id}-search`);
    if (s) s.addEventListener("input", () => { q = s.value.trim().toLowerCase(); draw(cat, q); });
    draw(cat, q);
  }

  const cover = (img, ico, title, kind) => img
    ? `<img src="${esc(img)}" alt="" loading="lazy" decoding="async" />`
    : `<span class="ph">${icon(ico || "layers")}<b>${esc(title)}</b><small>${esc(kind || "")}</small></span>`;

  function pageProjects() {
    return `
      ${head("Projects", "Built, studied and shipped.", "Biomedical engineering builds from my degree and operations work from my current role. Open a project for the details.")}
      ${filterBar("proj", D.projectCategories, D.projects, (p) => p.category, true)}
      <div class="grid-2" id="proj-grid"></div>
      <div class="notice">${icon("globe")}<span>Looking for the websites I built? They have their own page: <a href="#websites">My websites</a>.</span></div>`;
  }
  function drawProjects(cat, q) {
    const items = D.projects.filter((p) => (cat === "All" || p.category === cat) &&
      (!q || [p.title, p.overview, p.category, (p.tools || []).join(" ")].join(" ").toLowerCase().includes(q)));
    $("#proj-grid").innerHTML = items.length ? items.map((p) => `
      <article class="card tile">
        <button class="tile__img" type="button" data-project="${esc(p.id)}" aria-label="Open ${esc(p.title)}">${cover(p.cover, "flask", p.title, p.category)}</button>
        <div class="tile__body">
          <div class="tile__top"><span class="tag blue">${esc(p.category)}</span>${p.statusLabel ? `<span class="tag">${esc(p.statusLabel)}</span>` : ""}</div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.overview)}</p>
          <div class="tile__actions"><button class="btn btn-ghost btn-sm" type="button" data-project="${esc(p.id)}">${icon("eye")}Details</button></div>
        </div>
      </article>`).join("") : `<div class="empty">No projects match that search.</div>`;
  }
  function openProject(id, opener) {
    const p = D.projects.find((x) => x.id === id);
    if (!p) return;
    openModal(p.title, `
      ${p.cover ? `<img class="full" src="${esc(p.cover)}" alt="" />` : ""}
      <p class="lead">${esc(p.overview)}</p>
      <dl class="kv-table">
        <div><dt>Category</dt><dd>${esc(p.category)}</dd></div>
        <div><dt>Status</dt><dd>${esc(p.statusLabel || "Completed")}</dd></div>
      </dl>
      ${p.problem ? `<div class="stack"><h4>The problem</h4><p class="muted">${esc(p.problem)}</p></div>` : ""}
      ${p.contribution ? `<div class="stack"><h4>My contribution</h4><p class="muted">${esc(p.contribution)}</p></div>` : ""}
      ${(p.tools || []).length ? `<div class="chips">${p.tools.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
      ${(p.gallery || []).map((g) => `<figure class="stack"><button class="doc__thumb cert__thumb" type="button" data-preview="${esc(g.src)}" data-title="${esc(p.title)}" data-kind="image" aria-label="View ${esc(g.caption || p.title)}"><img src="${esc(g.src)}" alt="" loading="lazy" /></button>${g.caption ? `<figcaption class="hint">${esc(g.caption)}</figcaption>` : ""}</figure>`).join("")}
      ${(p.documents || []).filter((d) => d.file).length ? `<div class="row">${p.documents.filter((d) => d.file).map((d) => `<a class="btn btn-ghost btn-sm" href="${esc(d.file)}"${dl(d.fileName)}>${icon("download")}${esc(d.title)}</a>`).join("")}</div>` : ""}
      ${p.links && (p.links.demo || p.links.repo) ? `<div class="row">
        ${p.links.demo ? `<a class="btn btn-primary btn-sm" href="${esc(p.links.demo)}"${linkAttrs(p.links.demo)}>${icon("external")}Open it</a>` : ""}
        ${p.links.repo ? `<a class="btn btn-ghost btn-sm" href="${esc(p.links.repo)}"${linkAttrs(p.links.repo)}>${icon("github")}View code</a>` : ""}</div>` : ""}`, opener);
  }

  function pageWebsites() {
    const pub = D.websites.filter((w) => w.access === "public"), internal = D.websites.filter((w) => w.access === "internal"), soon = D.websites.filter((w) => w.access === "soon");
    const card = (w) => `
      <article class="card tile">
        <div class="tile__img" aria-hidden="true">${cover(w.thumb, w.icon, w.title, w.kind)}</div>
        <div class="tile__body">
          <div class="tile__top"><span class="tag blue">${esc(w.kind)}</span>${w.access === "internal" ? `<span class="tag">${icon("lock")} On request</span>` : w.access === "soon" ? `<span class="tag">${icon("clock")} Coming soon</span>` : `<span class="tag ok">Live</span>`}</div>
          <h3>${esc(w.title)}</h3>
          <p>${esc(w.summary)}</p>
          <ul class="feat">${w.features.map((f) => `<li>${icon("check")}<span>${esc(f)}</span></li>`).join("")}</ul>
          <div class="chips">${w.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          <div class="tile__actions">
            ${w.links.site ? `<a class="btn btn-primary btn-sm" href="${esc(w.links.site)}"${linkAttrs(w.links.site)}>${icon("external")}Open website</a>` : ""}
            ${w.links.code ? `<a class="btn btn-ghost btn-sm" href="${esc(w.links.code)}"${linkAttrs(w.links.code)}>${icon("github")}View code</a>` : ""}
            ${w.access === "internal" ? `<a class="btn btn-ghost btn-sm" href="#contact">${icon("mail")}Ask for a walkthrough</a>` : ""}
          </div>
        </div>
      </article>`;
    return `
      ${head("My websites", "Websites and tools I designed and built.", "From a bilingual careers portal to IELTS study material and the reporting portals our marketplace team uses every day.")}
      <div class="grid-2">${pub.concat(soon).map(card).join("")}</div>
      ${internal.length ? `
      <div class="section-h"><h2>Available on request</h2><p class="muted">These are not linked publicly, and several run on real company data. Ask for a walkthrough and I'll show you how they work.</p></div>
      <div class="grid-2">${internal.map(card).join("")}</div>` : ""}`;
  }

  /* ---------------------------------------------------- documents */
  let uploads = [], canManage = false;
  const uploadToDoc = (u) => ({
    title: u.title, description: u.description || "", category: u.category, upload: u, issuer: u.issuer, date: u.date,
    type: /pdf/.test(u.contentType) ? "PDF" : ((u.contentType || "").split("/")[1] || "file").toUpperCase().replace("JPEG", "JPG"),
    file: "/_blob/" + u.assetId, size: u.size, version: u.date || "", private: !!u.private,
  });
  const allDocuments = () => uploads.map(uploadToDoc).concat(D.documents.filter((d) => d.file));

  function pageDocuments() {
    const ok = fileAvailable(R.file);
    return `
      ${head("CV & documents", "My CV and supporting documents.", "")}
      <article class="card cv">
        <div class="stack">
          <p class="eyebrow">Curriculum vitae</p>
          <h2>${esc(P.name)}</h2>
          <p class="muted">${esc(P.role)}</p>
          <p class="muted">${ok ? `PDF · ${esc(R.size)} · Updated ${esc(R.version)}. A web version formatted for printing is also available.` : "The web version is available below."}</p>
          <div class="row">
            ${ok ? `<a class="btn btn-primary" href="${esc(R.file)}"${dl(R.fileName)}>${icon("download")}Download CV (PDF)</a>
            <button class="btn btn-ghost" type="button" data-preview="${esc(R.file)}" data-title="Curriculum Vitae">${icon("eye")}Preview</button>` : ""}
            <a class="btn btn-ghost" href="${esc(R.webVersion)}"${PREVIEW ? ' target="_blank" rel="noopener"' : ""}>${icon("printer")}Web version</a>
          </div>
        </div>
        ${ok && R.preview ? `<button class="cv__preview" type="button" data-preview="${esc(R.file)}" data-title="Curriculum Vitae" aria-label="Preview the CV"><img src="${esc(R.preview)}" alt="First page of the CV" loading="lazy" /></button>` : ""}
      </article>
      <div id="uploader-slot"></div>
      <div class="stack">
        <h2>Library</h2>
        <div id="doc-bar"></div>
        <div class="grid-2" id="doc-grid"></div>
      </div>`;
  }
  function drawDocuments() {
    const docs = allDocuments();
    const bar = $("#doc-bar");
    if (!bar) return;
    bar.innerHTML = filterBar("doc", D.documentCategories, docs, (d) => d.category, docs.length > 4);
    wireFilter("doc", (cat, q) => {
      const items = docs.filter((d) => (cat === "All" || d.category === cat) &&
        (!q || [d.title, d.description, d.category, d.type].join(" ").toLowerCase().includes(q)));
      $("#doc-grid").innerHTML = items.length ? items.map(docCard).join("") : `<div class="empty">No documents in this view.</div>`;
    });
  }
  function docCard(d) {
    const type = (d.type || "FILE").toUpperCase();
    const isImg = d.upload ? /^image\//.test(d.upload.contentType) : /^(JPG|PNG|WEBP)$/.test(type);
    const ok = d.upload ? true : fileAvailable(d.file);
    const canPreview = ok && (type === "PDF" || isImg);
    const meta = [d.category, type, d.size, d.version && d.version !== "Live" ? d.version : "", d.private ? "Only you can see this" : ""].filter(Boolean);
    const open = type === "HTML"
      ? `<a class="btn btn-primary btn-sm" href="${esc(d.file)}"${PREVIEW ? ' target="_blank" rel="noopener"' : ""}>${icon("external")}Open</a>`
      : d.upload || isImg
      ? `<a class="btn btn-primary btn-sm" href="${esc(d.file)}" target="_blank" rel="noopener">${icon("external")}Open</a>`
      : `<a class="btn btn-primary btn-sm" href="${esc(d.file)}"${dl()}>${icon("download")}Download</a>`;
    return `
      <article class="card doc">
        ${isImg ? `<div class="doc__thumb"><img src="${esc(d.file)}" alt="" loading="lazy" /></div>` : ""}
        <div class="doc__top"><span class="ext ${type === "HTML" ? "html" : isImg ? "img" : ""}">${esc(type)}</span><h3>${esc(d.title)}</h3></div>
        ${d.description ? `<p>${esc(d.description)}</p>` : ""}
        <div class="meta">${meta.map((m) => `<span>${esc(m)}</span>`).join("")}</div>
        <div class="row">
          ${canPreview ? `<button class="btn btn-ghost btn-sm" type="button" data-preview="${esc(d.file)}" data-title="${esc(d.title)}"${isImg ? ' data-kind="image"' : ""}>${icon("eye")}Preview</button>` : ""}
          ${ok ? open : ""}
          ${d.upload && canManage ? `<button class="chip-btn icon-btn del" type="button" data-delete-upload="${esc(d.upload.id)}" aria-label="Delete ${esc(d.title)}">${icon("x")}</button>` : ""}
        </div>
      </article>`;
  }
  function previewDoc(file, title, opener, kind) {
    openModal(title, `
      ${kind === "image"
        ? `<img class="full" src="${esc(file)}" alt="${esc(title)}" />`
        : PREVIEW && file === R.file && R.preview
        ? `<img class="full" src="${esc(R.preview)}" alt="${esc(title)}, page 1" />`
        : `<iframe class="pdf-frame" src="${esc(file)}#view=FitH" title="${esc(title)}"></iframe>
           <p class="hint">If the preview does not appear on your device, open the file directly.</p>`}
      <div class="row">
        <a class="btn btn-primary btn-sm" href="${esc(file)}"${dl(file === R.file ? R.fileName : "")}>${icon("download")}Download</a>
        <a class="btn btn-ghost btn-sm" href="${esc(file)}" target="_blank" rel="noopener">${icon("external")}Open in new tab</a>
      </div>`, opener, true);
  }

  /* ---------------------------------------------------- certificates */
  const CERT_CATS = ["Certificates", "Licences & Qualifications", "Academic Documents"];
  const allCerts = () => D.certificates.concat(uploads.filter((u) => CERT_CATS.includes(u.category) && /^image\/|pdf/.test(u.contentType || "")).map((u) => ({
    title: u.title, issuer: u.issuer || "", date: u.date || "", icon: "award", description: u.description || "",
    category: u.category === "Certificates" ? "Training" : u.category === "Academic Documents" ? "Academic" : "Licences & Qualifications",
    file: "/_blob/" + u.assetId, kind: /^image\//.test(u.contentType) ? "image" : "pdf", private: !!u.private,
  })));
  function pageCertificates() {
    return `
      ${head("Certificates", "Recognition and training.", "")}
      <div id="cert-bar"></div>
      <div class="grid-2" id="cert-grid"></div>`;
  }
  function drawCertificates() {
    const certs = allCerts();
    const bar = $("#cert-bar");
    if (!bar) return;
    bar.innerHTML = certs.length > 2 ? filterBar("cert", D.certificateCategories, certs, (c) => c.category, false) : "";
    wireFilter("cert", (cat) => {
      const items = certs.filter((c) => cat === "All" || c.category === cat);
      $("#cert-grid").innerHTML = items.map((c) => `
        <article class="card facet">
          ${c.image ? `<button class="doc__thumb cert__thumb" type="button" data-preview="${esc(c.image)}" data-title="${esc(c.title)}" data-kind="image" aria-label="View ${esc(c.title)}"><img src="${esc(c.image)}" alt="" loading="lazy" /></button>` : `<span class="ico">${icon(c.icon || "award")}</span>`}
          <h3>${esc(c.title)}</h3>
          ${c.issuer ? `<p class="role__org">${esc(c.issuer)}</p>` : ""}
          ${c.description ? `<p>${esc(c.description)}</p>` : ""}
          <div class="row"><span class="tag blue">${esc(c.category)}</span>${c.date ? `<span class="tag">${esc(c.date)}</span>` : ""}${c.private ? `<span class="tag">${icon("lock")} Only you</span>` : ""}</div>
          ${c.image || c.file ? `<div class="row">
            ${c.image ? `<button class="btn btn-ghost btn-sm" type="button" data-preview="${esc(c.image)}" data-title="${esc(c.title)}" data-kind="image">${icon("eye")}View</button>`
              : `<button class="btn btn-ghost btn-sm" type="button" data-preview="${esc(c.file)}" data-title="${esc(c.title)}"${c.kind === "image" ? ' data-kind="image"' : ""}>${icon("eye")}View</button>`}
            ${c.image && c.file ? `<a class="btn btn-primary btn-sm" href="${esc(c.file)}"${dl()}>${icon("download")}PDF</a>` : ""}
            ${c.verifyUrl ? `<a class="btn btn-ghost btn-sm" href="${esc(c.verifyUrl)}"${linkAttrs(c.verifyUrl)}>${icon("check")}Verify</a>` : ""}
          </div>` : ""}
        </article>`).join("");
    });
  }

  function pageActivities() {
    return `
      ${head("Activities", "Beyond the job title.", "Reporting, business development and learning that shaped how I work.")}
      <ol class="timeline">${D.activities.map((a) => `
        <li><span class="n">${icon({ Learning: "book", Programs: "users", Research: "compass", Reporting: "chart", "B2B & CRM": "cart", Exhibitions: "globe" }[a.type] || "code")}</span>
          <div><p class="when">${esc(a.type)}${a.date ? ` · ${esc(a.date)}` : ""}</p><h3>${esc(a.title)}</h3>
          <p>${esc(a.org)}${a.statusLabel ? ` · ${esc(a.statusLabel)}` : ""}</p><p>${esc(a.text)}</p></div></li>`).join("")}
      </ol>`;
  }

  function pageContact() {
    const rows = [
      ["mail", "Email", `<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>`, C.email],
      ...D.social.filter((s) => s.icon !== "mail").map((s) => [s.icon, s.label, `<a href="${esc(s.url)}"${linkAttrs(s.url)}>${esc(s.url.replace(/^https?:\/\/(www\.)?/, ""))}</a>`, s.url]),
      C.phone && C.phone.show ? ["chat", "Phone", `<a href="tel:${esc(C.phone.value.replace(/\s/g, ""))}">${esc(C.phone.value)}</a>`, C.phone.value] : null,
      ["pin", "Location", `<b>${esc(C.location)}</b>`, ""],
    ].filter(Boolean);
    const f = (name, label, type, full) => `
      <div class="field${full ? " full" : ""}">
        <label for="cf-${name}">${label}</label>
        ${type === "textarea" ? `<textarea class="input" id="cf-${name}" name="${name}" maxlength="4000" required></textarea>`
          : `<input class="input" id="cf-${name}" name="${name}" type="${type}" maxlength="160" required${type === "email" ? ' autocomplete="email"' : name === "name" ? ' autocomplete="name"' : ""} />`}
        <span class="err" id="cf-${name}-err"></span>
      </div>`;
    return `
      ${head("Contact me", "Let's talk.", "I'm ready to be hired for biomedical engineering roles and for e-commerce roles in channel and account management, reporting and data entry, remote or on-site. The quickest way to reach me is email.")}
      <div class="contact">
        <aside class="card">
          <ul class="contact-list">${rows.map((r) => `<li><span class="ico">${icon(r[0])}</span><div><small>${esc(r[1])}</small>${r[2]}</div>${r[3] ? `<button class="copy" type="button" data-copy="${esc(r[3])}" aria-label="Copy ${esc(r[1])}">${icon("copy")}</button>` : "<span></span>"}</li>`).join("")}</ul>
        </aside>
        <form class="card form-card" id="contact-form" novalidate>
          <div class="fgrid">
            ${f("name", "Your name", "text")}
            ${f("email", "Your email", "email")}
            ${f("subject", "Subject", "text", true)}
            ${f("message", "Message", "textarea", true)}
          </div>
          <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">
          <div id="cf-status"></div>
          <div class="form-foot">
            <span class="hint">${C.formEndpoint ? "Your message is sent straight to my inbox." : "Opens your email app with the message ready to send."}</span>
            <button class="btn btn-primary" type="submit">${icon("send")}Send message</button>
          </div>
        </form>
      </div>`;
  }
  function wireContact() {
    const form = $("#contact-form");
    if (!form) return;
    const rules = {
      name: (v) => (v.length < 2 ? "Please enter your name." : ""),
      email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "Please enter a valid email address." : ""),
      subject: (v) => (v.length < 3 ? "Please add a short subject." : ""),
      message: (v) => (v.length < 10 ? "Your message should be at least 10 characters." : ""),
    };
    const check = (n) => {
      const el = form.elements[n], msg = rules[n](el.value.trim());
      el.closest(".field").classList.toggle("invalid", !!msg);
      el.setAttribute("aria-invalid", String(!!msg));
      el.setAttribute("aria-describedby", `cf-${n}-err`);
      $(`#cf-${n}-err`).textContent = msg;
      return !msg;
    };
    Object.keys(rules).forEach((n) => form.elements[n].addEventListener("input", () => { if (form.elements[n].closest(".invalid")) check(n); }));
    const status = (html) => { $("#cf-status").innerHTML = `<div class="banner ok">${icon("check")}<div>${html}</div></div>`; };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!Object.keys(rules).map(check).every(Boolean)) { const bad = $(".invalid .input", form); if (bad) bad.focus(); return; }
      const d = Object.fromEntries(Object.keys(rules).map((n) => [n, form.elements[n].value.trim()]));
      const copyBtn = `<button type="button" class="copy" style="padding:0;text-decoration:underline;color:inherit" data-copy="${esc(C.email)}">copy the address</button>`;
      if (C.formEndpoint) {
        // Apps Script web app: a plain-text body keeps this a "simple" request (no CORS preflight).
        const btn = $("button[type=submit]", form);
        btn.disabled = true;
        try {
          const res = await fetch(C.formEndpoint, { method: "POST", body: JSON.stringify({ ...d, company: form.elements.company.value }) });
          const out = await res.json();
          if (!out.ok) throw new Error(out.error || "failed");
          status("Thank you, your message was sent. I'll reply by email."); form.reset();
        } catch (err) {
          status(`Sorry, the message could not be sent from this page. Please email <b>${esc(C.email)}</b> directly, or ${copyBtn}.`);
        } finally { btn.disabled = false; }
        return;
      }
      if (PREVIEW) { status(`This is a preview copy of the site, so nothing was sent. Please email <b>${esc(C.email)}</b> directly, or ${copyBtn}.`); return; }
      window.location.href = `mailto:${C.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`)}`;
      status(`Your email app should now open with the message ready to send. If nothing opened, write to <a href="mailto:${esc(C.email)}">${esc(C.email)}</a> or ${copyBtn}.`);
    });
  }

  const RENDER = {
    home: [pageHome], about: [pageAbout], experience: [pageExperience], skills: [pageSkills],
    projects: [pageProjects, () => wireFilter("proj", drawProjects)],
    websites: [pageWebsites],
    documents: [pageDocuments, () => { drawDocuments(); drawUploader(); }],
    certificates: [pageCertificates, drawCertificates],
    activities: [pageActivities],
    contact: [pageContact, wireContact],
  };

  /* ---------------------------------------------------------- router */
  let currentPage = null;
  function show(id, focus) {
    if (!RENDER[id]) id = "home";
    currentPage = id;
    const i = PAGES.findIndex((p) => p.id === id);
    const prev = PAGES[i - 1], next = PAGES[i + 1];
    const pager = `<nav class="pager" aria-label="Page navigation">
      ${prev ? `<a href="#${prev.id}"><small>Previous</small><span>${esc(prev.label)}</span></a>` : ""}
      ${next ? `<a class="next" href="#${next.id}"><small>Next</small><span>${esc(next.label)}</span></a>` : ""}
    </nav>`;
    const [render, after] = RENDER[id];
    $("#pages").innerHTML = `<section class="page" id="page-${id}" aria-labelledby="page-${id}-title">${safe(id, render) || ""}${pager}</section>`;
    const h1 = $("#pages h1");
    if (h1) h1.id = `page-${id}-title`;
    if (after) safe(id + " wiring", after);
    $$("#nav-main a").forEach((a) => (a.dataset.page === id ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current")));
    document.title = id === "home" ? "Sadati Fred Mwasongwe · Biomedical & E-commerce" : `${PAGES[i].label} · Sadati Fred Mwasongwe`;
    closeNav();
    window.scrollTo(0, 0);
    if (focus) $("#main").focus({ preventScroll: true });
  }
  const route = (focus) => show((location.hash || "#home").slice(1).split("?")[0], focus);

  /* ---------------------------------------------------------- chrome */
  function openNav() { document.body.classList.add("nav-open"); $("#menu-btn").setAttribute("aria-expanded", "true"); }
  function closeNav() { document.body.classList.remove("nav-open"); $("#menu-btn").setAttribute("aria-expanded", "false"); }
  let downloadsNs = null;
  async function saveFile(a) {
    const url = a.getAttribute("href"), name = a.dataset.dl || decodeURIComponent(url.split("/").pop().split("?")[0]);
    try {
      const ns = await downloadsNs;
      if (!ns) throw { code: "unavailable" };
      const res = await fetch(url);
      if (!res.ok) throw { code: "unavailable" };
      await ns.save({ filename: name, data: await res.blob() });
    } catch (err) {
      if (err && err.code === "declined") return;
      if (err && err.code === "rate_limited") { toast("A save prompt is already open"); return; }
      if (!window.open(url, "_blank", "noopener")) toast("Your browser blocked the download. Try Open in new tab.");
    }
  }

  function wireChrome() {
    if (PREVIEW) {
      downloadsNs = window.claude && window.claude.use ? window.claude.use("downloads").catch(() => null) : Promise.resolve(null);
      document.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-dl]");
        if (a) { e.preventDefault(); saveFile(a); }
      });
    }
    $("#menu-btn").addEventListener("click", () => (document.body.classList.contains("nav-open") ? closeNav() : openNav()));
    $("#scrim").addEventListener("click", closeNav);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
    $("#theme-btn").addEventListener("click", () => {
      const t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", t);
      try { localStorage.setItem("sfm-theme", t); } catch (e) { /* storage blocked */ }
    });
    window.addEventListener("hashchange", () => route(true));
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a && a.getAttribute("href") === location.hash) { e.preventDefault(); route(true); return; }
      const pv = e.target.closest("[data-preview]");
      if (pv) { e.preventDefault(); previewDoc(pv.dataset.preview, pv.dataset.title || "Document", pv, pv.dataset.kind); return; }
      const pj = e.target.closest("[data-project]");
      if (pj) { openProject(pj.dataset.project, pj); return; }
      const cp = e.target.closest("[data-copy]");
      if (cp) copy(cp.dataset.copy);
    });
  }

  /* ---------------------------------------------------------- modal */
  const modal = $("#modal");
  let opener = null;
  function openModal(title, html, from, wide) {
    opener = from || document.activeElement;
    $("#modal-title").textContent = title;
    $("#modal-body").innerHTML = html;
    modal.style.width = wide ? "min(1000px, calc(100vw - 24px))" : "";
    if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
    modal.scrollTop = 0;
    $("[data-close]", modal).focus();
  }
  modal.addEventListener("close", () => { $("#modal-body").innerHTML = ""; if (opener && document.contains(opener)) opener.focus({ preventScroll: true }); });
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest("[data-close]")) modal.close ? modal.close() : modal.removeAttribute("open"); });

  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (_) { /* ignore */ }
      ta.remove();
    }
    toast("Copied to clipboard");
  }

  /* ------------------------------------------------ file existence check */
  async function verifyFiles() {
    if (!/^https?:$/.test(location.protocol)) return;
    const paths = new Set([R.file, R.preview, P.portrait]);
    D.documents.forEach((d) => d.file && paths.add(d.file));
    await Promise.all([...paths].filter(Boolean).map(async (p) => {
      try { const res = await fetch(p, { method: "HEAD", cache: "no-store" }); if (!res.ok) missingFiles.add(p); } catch (e) { missingFiles.add(p); }
    }));
    if (missingFiles.size) {
      console.warn("[portfolio] Files listed in data.js but not found:", [...missingFiles]);
      renderShell(); route(false);
    }
  }

  /* ------------------------------------------------- document uploads */
  // Works only in the hosted preview, where the page can store files.
  // The owner sees an "Add documents" panel; public uploads show to everyone
  // who can open the page, private ones to the owner only.
  let db = null, assets = null;
  const UPLOAD_CATS = D.documentCategories.filter((c) => c !== "All");
  const fmtSize = (b) => (b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB");
  const redrawLibrary = () => {
    if (currentPage === "documents") safe("documents", drawDocuments);
    if (currentPage === "certificates") safe("certificates", drawCertificates);
  };
  function drawUploader() {
    const slot = $("#uploader-slot");
    if (!slot || !canManage) return;
    slot.innerHTML = `
      <details class="uploader">
        <summary><span class="ico">${icon("plus")}</span><span><b>Add documents</b><small>Transcripts, certificates, licences and qualifications. Only you see this panel.</small></span></summary>
        <form class="fgrid" id="up-form" novalidate>
          <div class="field full"><label for="up-file">File (PDF, JPG or PNG, up to 20 MB)</label><input class="input" id="up-file" name="file" type="file" accept="application/pdf,image/jpeg,image/png,image/webp" required /></div>
          <div class="field"><label for="up-title">Title</label><input class="input" id="up-title" name="title" type="text" maxlength="120" placeholder="e.g. BSc Academic Transcript" /></div>
          <div class="field"><label for="up-cat">Category</label><select class="input" id="up-cat" name="category">${UPLOAD_CATS.map((c) => `<option${c === "Certificates" ? " selected" : ""}>${esc(c)}</option>`).join("")}</select></div>
          <div class="field"><label for="up-issuer">Issued by (optional)</label><input class="input" id="up-issuer" name="issuer" type="text" maxlength="120" placeholder="e.g. King Abdulaziz University" /></div>
          <div class="field"><label for="up-date">Date (optional)</label><input class="input" id="up-date" name="date" type="text" maxlength="40" placeholder="e.g. April 2025" /></div>
          <div class="field full"><label for="up-desc">Short description (optional)</label><input class="input" id="up-desc" name="description" type="text" maxlength="240" /></div>
          <fieldset class="field full"><legend>Who can see it</legend>
            <label><input type="radio" name="vis" value="public" checked /> Everyone who opens the portfolio</label>
            <label><input type="radio" name="vis" value="private" id="up-private" /> Only me (good for transcripts and IDs)</label>
          </fieldset>
          <div class="field full row"><button class="btn btn-primary" type="submit" id="up-submit"><span class="spinner"></span>${icon("plus")}Upload document</button><span class="hint" id="up-note" role="status" aria-live="polite"></span></div>
        </form>
      </details>`;
    const form = $("#up-form"), note = $("#up-note"), btn = $("#up-submit");
    form.elements.category.addEventListener("change", (e) => { if (e.target.value === "Academic Documents") $("#up-private").checked = true; });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const file = form.elements.file.files[0];
      if (!file) { note.textContent = "Choose a file first."; return; }
      if (file.size > 20 * 1048576) { note.textContent = "That file is over 20 MB. Please compress it and try again."; return; }
      const title = form.elements.title.value.trim() || file.name.replace(/\.[^.]+$/, "");
      btn.classList.add("is-loading"); btn.disabled = true; note.textContent = "Uploading…";
      try {
        const type = file.type || (/\.pdf$/i.test(file.name) ? "application/pdf" : "");
        const res = await assets.upload(file, type ? { type } : undefined);
        const priv = form.elements.vis.value === "private";
        await db.collection(priv ? "private" : "library").add({
          title, category: form.elements.category.value, issuer: form.elements.issuer.value.trim(),
          date: form.elements.date.value.trim(), description: form.elements.description.value.trim(),
          assetId: res.id, contentType: res.contentType, size: fmtSize(res.sizeBytes), createdAt: Date.now(),
        });
        form.reset();
        note.textContent = `Uploaded “${title}”${priv ? " (visible only to you)" : ""}.`;
        toast("Document uploaded");
      } catch (err) {
        const code = err && err.code;
        note.textContent = code === "unsupported_type" ? "That file type isn't supported. Use PDF, JPG or PNG."
          : code === "too_large" ? "That file is too large (20 MB maximum)." : "The upload didn't go through. Please try again.";
      } finally { btn.classList.remove("is-loading"); btn.disabled = false; }
    });
  }
  async function documentManager() {
    if (!window.claude || typeof window.claude.use !== "function") return;
    db = await window.claude.use("db");
    if (!db) return;
    const lists = { library: [], private: [] };
    const merge = () => {
      uploads = [...lists.private.map((u) => ({ ...u, private: true })), ...lists.library].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      redrawLibrary();
    };
    ["library", "private"].forEach((name) => db.collection(name).onSnapshot(
      (snap) => { lists[name] = snap.docs.map((d) => ({ id: d.id, coll: name, ...d.data() })).filter((u) => u.assetId && u.title); merge(); },
      () => {}));
    assets = await window.claude.use("assets");
    if (!assets) return;
    canManage = true;
    if (currentPage === "documents") { drawUploader(); drawDocuments(); }
    // Two-step delete: first click arms, a second click within 4 s removes.
    document.addEventListener("click", async (e) => {
      const b = e.target.closest("[data-delete-upload]");
      if (!b) return;
      if (!b.classList.contains("armed")) {
        b.classList.add("armed"); b.setAttribute("aria-label", "Click again to delete");
        toast("Click the × again to delete this document");
        setTimeout(() => b.classList.remove("armed"), 4000);
        return;
      }
      const u = uploads.find((x) => x.id === b.dataset.deleteUpload);
      if (!u) return;
      try { await db.doc(`${u.coll}/${u.id}`).delete(); await assets.delete(u.assetId).catch(() => {}); toast("Document deleted"); }
      catch (err) { toast("Couldn't delete that document"); }
    });
  }

  /* --------------------------------------------------------------- boot */
  safe("shell", renderShell);
  safe("chrome", wireChrome);
  route(false);
  verifyFiles();
  documentManager().catch((e) => console.error("[portfolio] uploads:", e));
})();
