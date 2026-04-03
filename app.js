/* ============================================================
   Villa Serena Cortona — app.js
   Tab navigation + restaurant search
   ============================================================ */

'use strict';

// ── Tab Navigation ─────────────────────────────────────────

const panels    = document.querySelectorAll('.tab-panel');
const navBtns   = document.querySelectorAll('.nav-btn');
const pageTitle = document.getElementById('page-title');

function switchTab(tabId) {
  // Deactivate all
  panels.forEach(p => p.classList.remove('active'));
  navBtns.forEach(b => b.classList.remove('active'));

  // Activate target panel
  const target = document.getElementById('tab-' + tabId);
  if (target) {
    target.classList.add('active');
    // Scroll back to top on tab switch
    target.scrollTop = 0;

    // Update page title
    const title = target.dataset.title || 'Villa Serena';
    pageTitle.textContent = title;
  }

  // Activate nav button
  const btn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  if (btn) btn.classList.add('active');
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
