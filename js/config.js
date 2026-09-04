/* ============================================================
   CONFIG.JS — Portfolio Global Data Store
   ============================================================
   All personal info, links, and URLs live here.
   Change once → updates everywhere across all pages.
   ============================================================ */

const PORTFOLIO_CONFIG = {

  /* ── Personal Info ──────────────────────────────────────── */
  name:       'Mugesh Siva',
  nameShort:  'MS',
  title:      'AI & Data Science Engineer | Full Stack Builder',
  description:'Full-stack engineer and AI builder. 6 projects, ranging from ML-powered hospital systems to live mobile apps.',
  location:   'Chennai, Tamil Nadu',
  cgpa:       '8.06',

  /* ── Contact ────────────────────────────────────────────── */
  email:      'mugeshsiva123456@gmail.com',
  phone:      '+919677799848',
  phoneDisplay: '+91 96777 99848',

  /* ── Social / Profile Links ─────────────────────────────── */
  linkedin:   'https://www.linkedin.com/in/mugesh-siva-22b974268',
  github:     'https://github.com/Mugesh-Siva',

  /* ── Live Products ──────────────────────────────────────── */
  collegeEventsUrl: 'https://thecollegeevents.com',
  playStoreUrl:     'https://play.google.com/store/apps/details?id=com.gigs.network',

  /* ── GitHub Repos ───────────────────────────────────────── */
  githubHotbyte:       'https://github.com/Mugesh-Siva/Mugesh_S_caseStudy_Project',
  githubCollegeEvents: 'https://github.com/thecollegeeventsproduction-png/thecollegeevents',

};

/* ── Auto-inject links across the page ─────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Replace all [data-config] text content */
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (PORTFOLIO_CONFIG[key] !== undefined) {
      el.textContent = PORTFOLIO_CONFIG[key];
    }
  });

  /* Replace all [data-config-href] href attributes */
  document.querySelectorAll('[data-config-href]').forEach(el => {
    const key = el.dataset.configHref;
    if (PORTFOLIO_CONFIG[key] !== undefined) {
      el.href = PORTFOLIO_CONFIG[key];
    }
  });

  /* Fix mailto links */
  document.querySelectorAll('[data-config-mailto]').forEach(el => {
    el.href = 'mailto:' + PORTFOLIO_CONFIG.email;
  });

  /* Fix tel links */
  document.querySelectorAll('[data-config-tel]').forEach(el => {
    el.href = 'tel:' + PORTFOLIO_CONFIG.phone;
    if (!el.querySelector('svg')) {
      el.textContent = PORTFOLIO_CONFIG.phoneDisplay;
    } else {
      /* preserve icon, only update text node */
      el.childNodes.forEach(n => {
        if (n.nodeType === 3) n.textContent = ' ' + PORTFOLIO_CONFIG.phoneDisplay;
      });
    }
  });

});
