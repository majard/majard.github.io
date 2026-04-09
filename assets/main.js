// ─── LANGUAGE TOGGLE ─────────────────────────────────────────────────────────

function applyLang(lang) {
  const s = I18N[lang];
  if (!s) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (s[k] !== undefined) el.innerHTML = s[k];
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
}

document.querySelectorAll('.lang-btn').forEach(b =>
  b.addEventListener('click', () => applyLang(b.dataset.lang))
);

// ─── CHEST SCROLL ANIMATION ──────────────────────────────────────────────────
// Throttled with rAF so we don't do layout reads on every pixel of scroll.

const chests = document.querySelectorAll('[data-chest]');
let chestRafPending = false;

function updateChests() {
  const vh = window.innerHeight;
  chests.forEach(wrap => {
    const lid   = wrap.querySelector('.chest-lid');
    const glint = wrap.querySelector('.chest-glint');
    const r     = wrap.getBoundingClientRect();
    const start = vh - 210;
    const end   = vh * 0.42;
    const ratio = Math.min(1, Math.max(0, (start - r.top) / (start - end)));
    lid.style.transform = `translateY(${-ratio * 102}%)`;
    glint.style.opacity = ratio > 0.85 ? String((ratio - 0.85) / 0.15) : '0';
  });
  chestRafPending = false;
}

window.addEventListener('scroll', () => {
  if (!chestRafPending) {
    chestRafPending = true;
    requestAnimationFrame(updateChests);
  }
}, { passive: true });

// Run once on load to handle pre-scrolled state (e.g. hash links)
updateChests();

// ─── SKILL BARS (animate once on first enter, then leave it) ─────────────────

const barObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    // Force a clean starting state before animating
    el.style.transition = 'none';
    el.style.transform  = 'scaleX(0)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'transform 1.1s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.transform  = `scaleX(${parseFloat(el.dataset.w) || 0.8})`;
      });
    });
    barObs.unobserve(el); // animate once — no style recalc on scroll-out
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-bar-fill').forEach(f => barObs.observe(f));

// ─── PALM TREE — pause when tab is hidden ────────────────────────────────────
// The CSS animation keeps running off-screen by default, burning compositor
// resources. Toggling animation-play-state costs nothing and is instant.

const palmLeaves = document.querySelector('.palm-svg-leaves');

if (palmLeaves) {
  document.addEventListener('visibilitychange', () => {
    palmLeaves.style.animationPlayState =
      document.hidden ? 'paused' : 'running';
  });
}

// ─── EMAIL OBFUSCATION ───────────────────────────────────────────────────────

(function () {
  const u = 'marlonj.cristo', d = 'gmail.com';
  const m = 'mailto:' + u + '@' + d;
  const el  = document.getElementById('email-link');
  const cta = document.getElementById('email-cta');
  if (el)  { el.href = m; el.textContent = u + '@' + d; }
  if (cta) { cta.href = m; }
})();
