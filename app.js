/* ============================================================
   Villa Serena Cortona — app.js
   Tab navigation + restaurant search
   ============================================================ */

'use strict';

// ── Tab Navigation ─────────────────────────────────────────

const panels     = document.querySelectorAll('.tab-panel');
const navBtns    = document.querySelectorAll('.nav-btn');
const pageTitle  = document.getElementById('page-title');
const headerLogo = document.getElementById('header-logo');

// Icon HTML for each tab (mirrors the nav buttons)
const TAB_ICONS = {
  home:        '<img src="IMMAGINI/VS-FAVICON.PNG" class="header-tab-icon-img">',
  contacts:    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  info:        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  extras:      '<img src="IMMAGINI/ADDEXTRA.png" class="header-tab-icon-img">',
  restaurants: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="2" x2="8" y2="22"/><path d="M5 2v6a3 3 0 0 0 6 0V2"/><path d="M15 2a5 5 0 0 1 5 5v13a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2z"/></svg>',
  more:        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="19" r="1" fill="currentColor"/></svg>',
};

function switchTab(tabId) {
  // Deactivate all
  panels.forEach(p => p.classList.remove('active'));
  navBtns.forEach(b => b.classList.remove('active'));

  // Activate target panel
  const target = document.getElementById('tab-' + tabId);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
    const title = target.dataset.title || 'Villa Serena';
    pageTitle.textContent = title;
  }

  // Activate nav button
  const btn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  if (btn) btn.classList.add('active');

  // Update header logo icon
  if (headerLogo && TAB_ICONS[tabId]) {
    headerLogo.innerHTML = TAB_ICONS[tabId];
  }
}

// ── Restaurant Search ──────────────────────────────────────

const searchInput = document.getElementById('restaurant-search');
const restaurantCards = document.querySelectorAll('#restaurant-list .restaurant-card');
const noResults = document.getElementById('no-results');
const countEl = document.getElementById('restaurant-count');
const TOTAL = restaurantCards.length;

function filterRestaurants(query) {
  const q = query.toLowerCase().trim();
  let visible = 0;

  restaurantCards.forEach(card => {
    const name = card.dataset.name || '';
    const match = q === '' || name.includes(q);
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });

  // Update count (i18n)
  if (q === '') {
    countEl.textContent = (window.t ? t('rest_count') : '{n} restaurants').replace('{n}', TOTAL);
  } else {
    countEl.textContent = (window.t ? t('rest_count_f') : '{v} of {n} restaurants').replace('{v}', visible).replace('{n}', TOTAL);
  }

  // No results message
  noResults.style.display = visible === 0 ? 'block' : 'none';
}

if (searchInput) {
  searchInput.addEventListener('input', e => filterRestaurants(e.target.value));

  // Clear search on X button (mobile)
  searchInput.addEventListener('search', e => filterRestaurants(e.target.value));
}

// ── Keyboard handling ──────────────────────────────────────

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && searchInput) {
    searchInput.value = '';
    filterRestaurants('');
    searchInput.blur();
  }
});

// ── Prevent rubber-band scroll on iOS ─────────────────────

document.addEventListener('touchmove', e => {
  if (e.target === document.body || e.target === document.documentElement) {
    e.preventDefault();
  }
}, { passive: false });

// ── Init ──────────────────────────────────────────────────

// Set initial count (updated again by i18n DOMContentLoaded, but set default here)
if (countEl) countEl.textContent = `${TOTAL} restaurants`;
