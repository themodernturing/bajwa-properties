// ===== Bajwa Properties - Main Script =====

// ---- Company info (yahan apni asli details dal dein) ----
const COMPANY = {
  name: "Bajwa Properties",
  phone: "0300-1234567",
  whatsapp: "923001234567",
  email: "info@bajwaproperties.com",
  address: "Office #12, Main Boulevard, DHA Phase 5, Lahore",
};

// ---- Properties data (nayi property add karne ke liye yahan ek object add karein) ----
const PROPERTIES = [
  {
    id: 1, title: "Modern 1 Kanal House", purpose: "sale", type: "House", city: "Lahore",
    location: "DHA Phase 6, Lahore", price: 85000000, size: "1 Kanal", beds: 5, baths: 6, featured: true,
    img: "img/photo-1600596542815-ffad4c1539a9.jpg",
    desc: "Brand new modern design house with basement, home theater, imported kitchen aur beautiful lawn. Main boulevard ke qareeb, park facing location.",
  },
  {
    id: 2, title: "Luxury 10 Marla Villa", purpose: "sale", type: "House", city: "Lahore",
    location: "Bahria Town, Lahore", price: 42000000, size: "10 Marla", beds: 4, baths: 5, featured: true,
    img: "img/photo-1600585154340-be6161a56a0c.jpg",
    desc: "Fully furnished villa, double-height lounge, solar system installed aur 24/7 security. Masjid, school aur market walking distance par.",
  },
  {
    id: 3, title: "2 Bed Luxury Apartment", purpose: "rent", type: "Apartment", city: "Islamabad",
    location: "Gulberg Greens, Islamabad", price: 120000, size: "1,450 sq ft", beds: 2, baths: 2, featured: true,
    img: "img/photo-1522708323590-d24dbb6b0267.jpg",
    desc: "Furnished apartment with lift, backup generator, gym aur covered parking. Families ke liye behtareen option.",
  },
  {
    id: 4, title: "Corner 5 Marla House", purpose: "sale", type: "House", city: "Lahore",
    location: "Johar Town, Lahore", price: 23500000, size: "5 Marla", beds: 3, baths: 4, featured: true,
    img: "img/photo-1568605114967-8130f3a36994.jpg",
    desc: "Corner house, double storey, near Expo Centre. Gas, bijli aur pani ki tamam sahulat mojood.",
  },
  {
    id: 5, title: "Commercial Shop - Main Road", purpose: "rent", type: "Commercial", city: "Lahore",
    location: "MM Alam Road, Gulberg, Lahore", price: 350000, size: "800 sq ft", beds: 0, baths: 1, featured: true,
    img: "img/photo-1441986300917-64674bd600d8.jpg",
    desc: "Prime location par ground floor shop, high footfall area. Brand outlets aur restaurants ke liye perfect.",
  },
  {
    id: 6, title: "1 Kanal Residential Plot", purpose: "sale", type: "Plot", city: "Lahore",
    location: "DHA Phase 9 Prism, Lahore", price: 32000000, size: "1 Kanal", beds: 0, baths: 0, featured: true,
    img: "img/photo-1500382017468-9049fed747ef.jpg",
    desc: "Possession plot, all dues clear. Ring Road ke qareeb, investment ke liye behtareen mauqa.",
  },
  {
    id: 7, title: "Penthouse with City View", purpose: "sale", type: "Apartment", city: "Karachi",
    location: "Clifton Block 2, Karachi", price: 68000000, size: "3,200 sq ft", beds: 4, baths: 4, featured: false,
    img: "img/photo-1502672260266-1c1ef2d93688.jpg",
    desc: "Top floor penthouse, sea aur city view ke saath. Private terrace, 2 parkings aur smart home system.",
  },
  {
    id: 8, title: "Family House for Rent", purpose: "rent", type: "House", city: "Islamabad",
    location: "F-11, Islamabad", price: 280000, size: "1 Kanal", beds: 5, baths: 5, featured: false,
    img: "img/photo-1564013799919-ab600027ffc6.jpg",
    desc: "Peaceful sector mein khoobsurat ghar, upper portion aur lower portion dono available. Servant quarter included.",
  },
  {
    id: 9, title: "Farm House with Pool", purpose: "sale", type: "House", city: "Lahore",
    location: "Bedian Road, Lahore", price: 150000000, size: "8 Kanal", beds: 6, baths: 7, featured: false,
    img: "img/photo-1580587771525-78b9dba3b914.jpg",
    desc: "Luxury farm house with swimming pool, lush green lawn, fruit trees aur event area. Weekend getaway ke liye perfect.",
  },
  {
    id: 10, title: "Office Floor - Blue Area", purpose: "rent", type: "Commercial", city: "Islamabad",
    location: "Blue Area, Islamabad", price: 550000, size: "4,000 sq ft", beds: 0, baths: 3, featured: false,
    img: "img/photo-1497366216548-37526070297c.jpg",
    desc: "Fully furnished corporate office floor, central AC, conference room aur dedicated parking.",
  },
  {
    id: 11, title: "Studio Apartment", purpose: "rent", type: "Apartment", city: "Lahore",
    location: "Bahria Town, Lahore", price: 55000, size: "650 sq ft", beds: 1, baths: 1, featured: false,
    img: "img/photo-1493809842364-78817add7ffb.jpg",
    desc: "Students aur working professionals ke liye furnished studio. Bills included option bhi available.",
  },
  {
    id: 12, title: "10 Marla Plot - Park Facing", purpose: "sale", type: "Plot", city: "Karachi",
    location: "Bahria Town, Karachi", price: 14500000, size: "10 Marla", beds: 0, baths: 0, featured: false,
    img: "img/photo-1628624747186-a941c476b7ef.jpg",
    desc: "Park facing plot, developed area. Installments ka option bhi mojood hai.",
  },
];

// ---- Helpers ----
function formatPrice(n) {
  if (n >= 10000000) return "PKR " + +(n / 10000000).toFixed(2) + " Crore";
  if (n >= 100000) return "PKR " + +(n / 100000).toFixed(2) + " Lakh";
  return "PKR " + n.toLocaleString("en-PK");
}

function featuresHTML(p) {
  const items = [`<span>📐 ${p.size}</span>`];
  if (p.beds) items.push(`<span>🛏️ ${p.beds} Beds</span>`);
  if (p.baths) items.push(`<span>🛁 ${p.baths} Baths</span>`);
  return items.join("");
}

function cardHTML(p) {
  return `
    <article class="property-card reveal">
      <div class="property-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'">
        <span class="badge ${p.purpose === "rent" ? "rent" : ""}">${p.purpose === "rent" ? "For Rent" : "For Sale"}</span>
        <span class="property-type">${p.type}</span>
      </div>
      <div class="property-body">
        <div class="price">${formatPrice(p.price)}${p.purpose === "rent" ? " <small>/ month</small>" : ""}</div>
        <h3>${p.title}</h3>
        <p class="location">📍 ${p.location}</p>
        <div class="features">${featuresHTML(p)}</div>
        <button class="btn btn-primary card-btn" data-id="${p.id}">Details Dekhein</button>
      </div>
    </article>`;
}

// ---- Shared header & footer ----
function renderLayout() {
  const page = document.body.dataset.page;
  const link = (href, label, key) =>
    `<li><a href="${href}" class="${page === key ? "active" : ""}">${label}</a></li>`;

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `<div class="demo-bar">Demo Preview — tamam phone numbers, reviews aur team details sample hain</div>
      <div class="topbar">
        <div class="container">
          <div><span>📞 ${COMPANY.phone}</span><span>✉️ ${COMPANY.email}</span></div>
          <div>🕘 Mon - Sat: 10:00 AM - 8:00 PM</div>
        </div>
      </div>
      <nav class="navbar">
        <div class="container">
          <a href="index.html" class="logo">
            <div class="logo-icon">B</div>
            <div>Bajwa<small>PROPERTIES</small></div>
          </a>
          <ul class="nav-links">
            ${link("index.html", "Home", "home")}
            ${link("properties.html", "Properties", "properties")}
            ${link("about.html", "About Us", "about")}
            ${link("contact.html", "Contact", "contact")}
          </ul>
          <a href="contact.html" class="btn btn-accent nav-cta">Free Consultation</a>
          <button class="menu-toggle" aria-label="Menu">☰</button>
        </div>
      </nav>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a href="index.html" class="logo"><div class="logo-icon">B</div><div>Bajwa<small>PROPERTIES</small></div></a>
              <p>Pakistan ki bharosemand real estate company. Hum aapke sapnon ka ghar dhoondne mein madad karte hain — imandari aur transparency ke saath.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="properties.html">Properties</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Property Types</h4>
              <ul>
                <li><a href="properties.html?type=House">Houses</a></li>
                <li><a href="properties.html?type=Apartment">Apartments</a></li>
                <li><a href="properties.html?type=Plot">Plots</a></li>
                <li><a href="properties.html?type=Commercial">Commercial</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>📍 ${COMPANY.address}</li>
                <li>📞 ${COMPANY.phone}</li>
                <li>✉️ ${COMPANY.email}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">© ${new Date().getFullYear()} ${COMPANY.name}. All rights reserved.</div>
      </footer>
      <a class="whatsapp" href="https://wa.me/${COMPANY.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>`;
  }

  // Mobile menu
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));

  // Navbar shadow on scroll
  const nav = document.querySelector(".navbar");
  window.addEventListener("scroll", () => nav && nav.classList.toggle("scrolled", window.scrollY > 20));
}

// ---- Property detail modal ----
function setupModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `<div class="modal-box"><button class="modal-close" aria-label="Close">×</button><div class="modal-inner"></div></div>`;
  document.body.appendChild(modal);

  const close = () => modal.classList.remove("open");
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("modal-close")) close();
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-btn");
    if (!btn) return;
    const p = PROPERTIES.find((x) => x.id === +btn.dataset.id);
    const msg = encodeURIComponent(`Assalam o Alaikum, mujhe "${p.title}" (${p.location}) ke baare mein maloomat chahiye.`);
    modal.querySelector(".modal-inner").innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="modal-content">
        <span class="badge ${p.purpose === "rent" ? "rent" : ""}" style="position:static">${p.purpose === "rent" ? "For Rent" : "For Sale"}</span>
        <h2>${p.title}</h2>
        <p class="location">📍 ${p.location}</p>
        <div class="price" style="margin-top:10px">${formatPrice(p.price)}${p.purpose === "rent" ? " <small>/ month</small>" : ""}</div>
        <p class="desc">${p.desc}</p>
        <div class="features">${featuresHTML(p)}<span>🏷️ ${p.type}</span></div>
        <div class="modal-actions">
          <a class="btn btn-accent" href="https://wa.me/${COMPANY.whatsapp}?text=${msg}" target="_blank" rel="noopener">💬 WhatsApp Karein</a>
          <a class="btn btn-primary" href="tel:${COMPANY.phone.replace(/-/g, "")}">📞 Call Karein</a>
        </div>
      </div>`;
    modal.classList.add("open");
  });
}

// ---- Home page: featured properties + search ----
function setupHome() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  grid.innerHTML = PROPERTIES.filter((p) => p.featured).map(cardHTML).join("");

  const form = document.getElementById("search-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    new FormData(form).forEach((v, k) => v && params.set(k, v));
    window.location.href = "properties.html?" + params.toString();
  });
}

// ---- Properties page: filters ----
function setupListing() {
  const grid = document.getElementById("listing-grid");
  if (!grid) return;
  const form = document.getElementById("filter-form");
  const count = document.getElementById("results-count");

  // URL se filters fill karein (home page search se aate hain)
  const params = new URLSearchParams(window.location.search);
  params.forEach((v, k) => { if (form.elements[k]) form.elements[k].value = v; });

  function apply() {
    const f = Object.fromEntries(new FormData(form));
    const q = (f.q || "").toLowerCase().trim();
    let list = PROPERTIES.filter((p) =>
      (!q || (p.title + " " + p.location).toLowerCase().includes(q)) &&
      (!f.purpose || p.purpose === f.purpose) &&
      (!f.type || p.type === f.type) &&
      (!f.city || p.city === f.city)
    );
    if (f.sort === "low") list.sort((a, b) => a.price - b.price);
    if (f.sort === "high") list.sort((a, b) => b.price - a.price);

    grid.innerHTML = list.length
      ? list.map(cardHTML).join("")
      : `<p class="no-results">Maazrat, is filter ke mutabiq koi property nahi mili. 😔</p>`;
    count.textContent = `${list.length} properties mili hain`;
    observeReveal();
  }

  form.addEventListener("input", apply);
  form.addEventListener("submit", (e) => e.preventDefault());
  apply();
}

// ---- Contact form ----
function setupContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const text = encodeURIComponent(
      `Naam: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || "-"}\nInterest: ${d.interest}\nMessage: ${d.message}`
    );
    const msg = document.getElementById("form-msg");
    msg.innerHTML = `✅ Shukriya ${d.name}! Apna message bhejne ke liye yeh button dabayein:<br>
      <a class="btn btn-accent" style="margin-top:10px" href="https://wa.me/${COMPANY.whatsapp}?text=${text}" target="_blank" rel="noopener">💬 WhatsApp Par Bhejein</a>`;
    msg.classList.add("show");
    form.reset();
  });
}

// ---- Scroll reveal & counters ----
let revealObserver;
function observeReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }
  revealObserver = revealObserver || new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); revealObserver.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

function setupCounters() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = +el.dataset.count;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      let n = 0;
      const step = Math.ceil(target / 60);
      const t = setInterval(() => {
        n = Math.min(n + step, target);
        el.textContent = n.toLocaleString();
        if (n === target) clearInterval(t);
      }, 25);
    });
    io.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLayout();
  setupModal();
  setupHome();
  setupListing();
  setupContact();
  observeReveal();
  setupCounters();
});
