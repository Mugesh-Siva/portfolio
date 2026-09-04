/* main.js ÃƒÂ¢Ã¢â€šÂ¬â€Â Scroll animations, cursor, scramble, counters, nav */

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Custom Cursor ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const dot = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animateCursor() {
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, [data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Nav scroll behavior ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Mobile toggle
  const btn = document.querySelector('.nav-menu-btn');
  const links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      links.classList.toggle('open');
      const spans = btn.querySelectorAll('span');
      if (links.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(4.5px, 4.5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4.5px, -4.5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }));
  }
})();

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Name scramble (original) ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const el = document.querySelector('[data-scramble]');
  if (!el) return;
  const final = el.dataset.scramble;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%&';
  let frame = 0;
  const TOTAL = 30;

  function scramble() {
    el.innerHTML = final.split('').map((c, i) => {
      if (c === ' ') return ' ';
      return frame > i * (TOTAL / final.length)
        ? c
        : chars[Math.floor(Math.random() * chars.length)];
    }).join('') + '<span class="accent-dot">.</span>';
    if (frame < TOTAL) { frame++; requestAnimationFrame(scramble); }
    else el.innerHTML = final + '<span class="accent-dot">.</span>';
  }
  setTimeout(scramble, 700);
})();

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Skill strip cycle ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const textEl = document.getElementById('skill-cycle-text');
  if (!textEl) return;

  const skills = [
    'FULL STACK DEVELOPER',
    'REACT.JS',
    'SPRING BOOT',
    'PYTHON',
    'FASTAPI',
    'REACT NATIVE',
    'REST APIs',
    'AWS',
    'DOCKER',
    'MYSQL',
    'POSTGRESQL',
    'FIREBASE',
    'POWER BI',
    'AI/ML INTEGRATION',
    'GENAI'
  ]; let idx = 0;

  function nextSkill() {
    // Slide current text upward out
    textEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    textEl.style.opacity = '0';
    textEl.style.transform = 'translateY(-100%)';

    setTimeout(() => {
      // Swap text while invisible
      idx = (idx + 1) % skills.length;
      textEl.textContent = skills[idx];

      // Position below, no transition yet
      textEl.style.transition = 'none';
      textEl.style.transform = 'translateY(100%)';
      textEl.style.opacity = '0';

      // Force reflow so transition triggers
      textEl.getBoundingClientRect();

      // Slide in from below
      textEl.style.transition = 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)';
      textEl.style.opacity = '1';
      textEl.style.transform = 'translateY(0)';
    }, 320);
  }

  // Start cycling after 2 s (let name scramble finish first)
  setTimeout(() => setInterval(nextSkill, 2200), 2000);
})();

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Typewriter descriptor ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const el = document.getElementById('hero-descriptor');
  if (!el) return;
  const words = ['Builder.', 'Problem Solver.', 'Engineer.', 'Creator.'];
  let wi = 0, ci = 0, deleting = false;
  const cursor = el.querySelector('.cursor-blink');

  function type() {
    const word = words[wi];
    if (!deleting) {
      el.firstChild.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.firstChild.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; setTimeout(type, 300); return; }
    }
    setTimeout(type, deleting ? 55 : 90);
  }

  el.innerHTML = '<span></span>';
  el.appendChild(cursor);
  setTimeout(type, 1200);
})();

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Intersection Observer ÃƒÂ¢Ã¢â€šÂ¬â€Â scroll reveals ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    .forEach(el => io.observe(el));
})();

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Skill tags stagger reveal ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const tags = e.target.querySelectorAll('.skill-tag');
      tags.forEach((tag, i) => {
        setTimeout(() => tag.classList.add('visible'), i * 45);
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skills-category').forEach(cat => io.observe(cat));
})();

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Counter animation ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const counters = e.target.querySelectorAll('[data-count]');
      counters.forEach(el => {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const decimal = el.dataset.decimal === 'true';
        const dur = 1600;
        const start = performance.now();
        function update(now) {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const val = target * eased;
          el.textContent = (decimal ? val.toFixed(2) : Math.round(val)) + suffix;
          if (t < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.about-stats').forEach(el => io.observe(el));
})();

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Timeline line draw on scroll ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const fill = document.querySelector('.ti-track-fill');
  const wrap = document.querySelector('.timeline-wrap');
  if (!fill || !wrap) return;

  function update() {
    const rect = wrap.getBoundingClientRect();
    const viewH = window.innerHeight;

    // Start filling when top of timeline reaches 80% of the viewport height
    const triggerPoint = viewH * 0.8;
    let progress = (triggerPoint - rect.top) / rect.height;

    // Ensure the line completes if the user scrolls to the absolute bottom of the page
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScroll - 10) {
      progress = 1;
    }

    progress = Math.min(Math.max(progress, 0), 1);
    fill.style.height = (progress * 100) + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Bento card 3D tilt ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      card.style.transform = `perspective(1200px) rotateX(${-y * 0.005}deg) rotateY(${x * 0.005}deg) translateY(-4px) scale(1.01)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();
/* ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ Active nav link highlight ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ÃƒÂ¢â€ÂÃ¢â€šÂ¬ */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(s => io.observe(s));
})();

/* ── Smooth scroll for anchor links ────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── Certificate Raw Stack Interaction ─────────────────────── */
(function () {
  const items = document.querySelectorAll('.achievement-item');
  const cards = document.querySelectorAll('.raw-cert-img');

  if (!items.length || !cards.length) return;

  function updateStack(activeIndex) {
    const totalCards = cards.length;
    cards.forEach(card => {
      // Clear old stack-pos classes
      for (let i = 0; i < totalCards; i++) {
        card.classList.remove(`stack-pos-${i}`);
      }

      const cIndex = parseInt(card.getAttribute('data-cert'));
      // Calculate circular distance from the active card
      const distance = (cIndex - activeIndex + totalCards) % totalCards;
      card.classList.add(`stack-pos-${distance}`);
    });
  }

  // Initialize stack with the first item (0) at the front
  updateStack(0);

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      items.forEach(i => i.classList.remove('active'));
      cards.forEach(c => c.classList.remove('active'));

      item.classList.add('active');
      const certIndex = parseInt(item.getAttribute('data-cert'));

      const targetCard = document.querySelector(`.raw-cert-img[data-cert="${certIndex}"]`);
      if (targetCard) {
        targetCard.classList.add('active');
      }

      // Reorder the rest of the stack dynamically behind the active one
      updateStack(certIndex);
    });
  });
})();


/* -- SKILLS BENTO HOVER GLOW EFFECT -- */
(function () {
  const cards = document.querySelectorAll('.skills-category');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
})();


/* -- SCROLL PROGRESS INDICATOR -- */
(function() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;
  
  window.addEventListener('scroll', () => {
    const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;
    progressBar.style.width = scrolled + '%';
  }, { passive: true });
})();
