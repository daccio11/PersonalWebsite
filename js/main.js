/* ============================================================
   Benjamin Daccione — Portfolio JS
   Handles: nav, hero canvas, typing effect, scroll animations,
   project filter, skill bars, contact form, footer year.
   ============================================================ */

/* ── Utility ────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Nav: sticky + mobile toggle ────────────────────────────── */
const header   = $('.site-header');
const toggle   = $('.nav__toggle');
const navLinks = $('#nav-links');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

toggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu on nav link click
$$('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close on outside click
document.addEventListener('click', e => {
  if (navLinks?.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !toggle?.contains(e.target)) {
    navLinks.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

/* ── Hero Canvas: network node animation ─────────────────────── */
(function initCanvas() {
  const canvas = $('#hero-canvas');
  if (!canvas) return;

  // Skip heavy animation if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let W, H, nodes, raf;

  const NODE_COUNT   = 55;
  const CONNECT_DIST = 130;
  const NODE_SPEED   = 0.4;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeNode() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * NODE_SPEED,
      vy: (Math.random() - 0.5) * NODE_SPEED,
      r:  Math.random() * 2 + 1.5,
    };
  }

  function init() {
    resize();
    nodes = Array.from({ length: NODE_COUNT }, makeNode);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Move
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // Draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx   = nodes[i].x - nodes[j].x;
        const dy   = nodes[i].y - nodes[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.35;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 212, 255, 0.55)';
      ctx.fill();
    });

    raf = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    nodes.forEach(n => {
      n.x = Math.min(n.x, W);
      n.y = Math.min(n.y, H);
    });
  }, { passive: true });

  // Pause when tab is hidden (battery/perf)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }
  });

  init();
  draw();
}());

/* ── Typing effect ───────────────────────────────────────────── */
(function initTyping() {
  const el = $('#typed-tagline');
  if (!el) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = 'Threat hunter in training. 4.0 GPA. Real-world SOC experience.';
    return;
  }

  const phrases = [
    'Threat hunter in training. 4.0 GPA. Real-world SOC experience.',
    'Blue Team mindset. Always learning. Ready to contribute.',
    'Monitoring threats, building defenses, graduating December 2026.',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  let pauseTick = 0;

  function type() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);

      if (charIdx === current.length) {
        // Pause at end of phrase
        pauseTick = 80;
        deleting  = true;
      }
    } else {
      if (pauseTick > 0) {
        pauseTick--;
        setTimeout(type, 30);
        return;
      }
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }

    const speed = deleting ? 25 : 55;
    setTimeout(type, speed);
  }

  // Delay start so page has settled
  setTimeout(type, 800);
}());

/* ── Intersection Observer: fade-in + skill bars ─────────────── */
(function initObservers() {
  // Fade-in
  const fadeEls = $$('.fade-in');
  const fadeObs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          fadeObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  fadeEls.forEach(el => fadeObs.observe(el));

  // Skill bars — animate width when visible
  const barEls = $$('.skill-item__fill');
  const barObs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animated');
          barObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  barEls.forEach(el => barObs.observe(el));

  // Cert progress bars
  const certBars = $$('.cert-card__progress-fill');
  const certObs  = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          // Trigger CSS transition by setting inline width after paint
          const target = e.target;
          const parent = target.parentElement;
          const value  = parent?.getAttribute('aria-valuenow');
          if (value) target.style.width = value + '%';
          certObs.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );
  certBars.forEach(el => {
    el.style.width = '0%'; // reset so transition fires
    certObs.observe(el);
  });
}());

/* ── Project filter ──────────────────────────────────────────── */
(function initFilter() {
  const btns  = $$('.filter-btn');
  const cards = $$('.project-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      btns.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.hidden = !match;
      });
    });
  });
}());

/* ── Contact form: client-side validation + Formspree hook ───── */
(function initForm() {
  const form       = $('#contact-form');
  const submitBtn  = $('#submit-btn');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const name    = $('#contact-name').value.trim();
    const email   = $('#contact-email').value.trim();
    const message = $('#contact-message').value.trim();

    if (!name || !email || !message) return;

    submitBtn.disabled = true;
    $('.submit-text', submitBtn).hidden  = true;
    $('.submit-sending', submitBtn).hidden = false;

    // TODO: Ben - replace this URL with your Formspree endpoint
    // e.g. https://formspree.io/f/YOUR_FORM_ID
    // Sign up free at https://formspree.io
    const FORMSPREE_URL = '#';

    if (FORMSPREE_URL === '#') {
      // Dev mode: just log + show success visually
      await new Promise(r => setTimeout(r, 800));
      showFormSuccess(form, submitBtn);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        showFormSuccess(form, submitBtn);
      } else {
        showFormError(submitBtn);
      }
    } catch {
      showFormError(submitBtn);
    }
  });

  function showFormSuccess(form, btn) {
    form.innerHTML = `
      <div style="text-align:center;padding:2rem;font-family:var(--font-mono)">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="margin:0 auto 1rem" aria-hidden="true">
          <circle cx="24" cy="24" r="22" stroke="var(--color-success)" stroke-width="2"/>
          <path d="M14 24l8 8 12-14" stroke="var(--color-success)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p style="color:var(--color-success);font-size:1.1rem;margin-bottom:.5rem">Message sent!</p>
        <p style="color:var(--color-muted);font-size:.85rem">I'll get back to you soon.</p>
      </div>`;
  }

  function showFormError(btn) {
    btn.disabled = false;
    $('.submit-text', btn).hidden   = false;
    $('.submit-sending', btn).hidden = true;
    btn.textContent = 'Failed — try again';
    btn.style.background = 'var(--color-danger)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
    }, 3000);
  }
}());

/* ── Footer year ─────────────────────────────────────────────── */
const yearEl = $('#footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
