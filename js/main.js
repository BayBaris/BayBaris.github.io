// Ana menü: fareyle ya da ↑ ↓ / Enter ile seçim, bölümlere kaydırma, giriş animasyonu.
(function () {
  const items = Array.from(document.querySelectorAll(".menu-item"));
  let index = 0;

  function select(i) {
    index = (i + items.length) % items.length;
    items.forEach((el, n) => el.classList.toggle("is-active", n === index));
  }

  items.forEach((el, n) => {
    el.addEventListener("mouseenter", () => select(n));
    el.addEventListener("focus", () => select(n));
  });

  // Klavye yalnızca açılış ekranı görünürken menüyü yönetir; aşağıda sayfa normal kayar.
  const hero = document.getElementById("baslangic");
  let heroVisible = true;
  new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting && entry.intersectionRatio > 0.5; },
    { threshold: [0, 0.5, 1] }).observe(hero);

  document.addEventListener("keydown", (e) => {
    if (!heroVisible || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === "ArrowDown") { e.preventDefault(); select(index + 1); items[index].focus({ preventScroll: true }); }
    else if (e.key === "ArrowUp") { e.preventDefault(); select(index - 1); items[index].focus({ preventScroll: true }); }
    else if (e.key === "Escape") { hero.scrollIntoView(); }
  });

  // 6 kademeli seviye çubukları: data-level kadar dolu kutu.
  const SEG_COUNT = 6;
  document.querySelectorAll(".seg").forEach((seg) => {
    const level = Number(seg.dataset.level) || 0;
    for (let i = 1; i <= SEG_COUNT; i++) {
      const box = document.createElement("i");
      if (i <= level) box.className = "on";
      seg.appendChild(box);
    }
  });

  // Bölümler ekrana girince yumuşakça belirir.
  const targets = document.querySelectorAll(".quest, .profile-card, .skill-group, .timeline li, .contact-list");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.15 });
    targets.forEach((t) => { t.classList.add("reveal"); io.observe(t); });
  }

  // Sol yol haritası: çubuk, bulunduğun bölümler arasındaki konuma göre dolar.
  // Kontrol noktaları çubukta eşit aralıklı durduğu için doluluk sayfa yüzdesi değil,
  // "kaçıncı bölümün ne kadarındasın" hesabıyla bulunur; böylece dolgu tam noktalara oturur.
  const roadmap = document.querySelector(".roadmap");
  const links = Array.from(document.querySelectorAll(".rm-points a"));
  const sections = links.map((a) => document.getElementById(a.dataset.section));

  function updateRoadmap() {
    const y = window.scrollY + window.innerHeight * 0.35;
    const tops = sections.map((s) => s.offsetTop);
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    let k = 0;
    while (k < tops.length - 1 && y >= tops[k + 1]) k++;
    let progress;
    if (atBottom) { k = tops.length - 1; progress = 1; }
    else if (k === tops.length - 1) progress = 1;
    else progress = (k + Math.min(1, (y - tops[k]) / (tops[k + 1] - tops[k]))) / (tops.length - 1);
    roadmap.style.setProperty("--p", progress.toFixed(4));
    links.forEach((a, n) => a.classList.toggle("is-active", n === k));
    roadmap.classList.toggle("is-visible", !heroVisible || window.scrollY > window.innerHeight * 0.5);
  }
  window.addEventListener("scroll", updateRoadmap, { passive: true });
  window.addEventListener("resize", updateRoadmap);
  updateRoadmap();

  document.getElementById("year").textContent = new Date().getFullYear();
})();
