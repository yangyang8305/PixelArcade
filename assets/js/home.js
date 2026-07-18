(function() {
  if (typeof GAMES === 'undefined') return;

  const GRID     = document.getElementById('gameGrid');
  const SEARCH   = document.getElementById('searchInput');
  const LOAD_BTN = document.getElementById('loadMoreBtn');
  const PAGE_SIZE = 12;
  let currentCat  = 'all';
  let currentPage = 1;
  let filtered    = [];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function renderCard(g) {
    const badge = g.badge
      ? `<span class="game-badge badge-${esc(g.badge)}">${esc(g.badge)}</span>` : '';
    const filled  = Math.round(g.rating);
    const stars   = '★'.repeat(filled) + '☆'.repeat(5 - filled);
    const thumb = g.thumb
      ? `<img class="game-thumb-img" src="${esc(g.thumb)}" alt="${esc(g.name)}" loading="lazy"
             onerror="this.remove()">`
      : '';

    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.cat = g.category;
    card.innerHTML = `
      <div class="game-thumb-placeholder">
        <span class="game-thumb-emoji">${g.emoji}</span>
        ${thumb}
      </div>
      ${badge}
      <div class="game-info">
        <div class="game-name">${esc(g.name)}</div>
        <div class="game-meta">
          <span class="game-cat">${esc(g.category)}</span>
          <span class="game-rating">${stars}</span>
        </div>
      </div>`;
    card.addEventListener('click', () => {
      location.href = 'pages/game.html?id=' + encodeURIComponent(g.id);
    });
    return card;
  }

  function filterGames() {
    const q = SEARCH ? SEARCH.value.toLowerCase().trim() : '';
    filtered = GAMES.filter(g => {
      const catOk = currentCat === 'all' || g.category === currentCat;
      const qOk   = !q || g.name.toLowerCase().includes(q)
                       || g.tags.some(t => t.includes(q));
      return catOk && qOk;
    });
    currentPage = 1;
    renderGrid(true);
  }

  function renderGrid(animate) {
    const slice = filtered.slice(0, currentPage * PAGE_SIZE);
    GRID.innerHTML = '';
    if (!slice.length) {
      GRID.innerHTML = `<div class="empty-state"><div class="empty-icon">🕹️</div><p>No games found.</p></div>`;
    } else {
      slice.forEach(g => GRID.appendChild(renderCard(g)));
      if (animate) {
        GRID.classList.remove('entering');
        void GRID.offsetWidth;
        GRID.classList.add('entering');
      }
    }
    if (LOAD_BTN) {
      LOAD_BTN.style.display = filtered.length > currentPage * PAGE_SIZE ? '' : 'none';
    }
  }

  // ── Recently played (written by game page, read here) ──
  function renderRecent() {
    const section = document.getElementById('recentSection');
    const row     = document.getElementById('recentRow');
    if (!section || !row) return;
    let ids = [];
    try { ids = JSON.parse(localStorage.getItem('pa_recent') || '[]'); } catch (e) {}
    const games = ids.map(id => GAMES.find(g => g.id === id)).filter(Boolean).slice(0, 6);
    if (!games.length) return;
    games.forEach(g => row.appendChild(renderCard(g)));
    section.style.display = '';
  }

  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCat = tab.dataset.cat;
      filterGames();
    });
  });

  if (SEARCH) SEARCH.addEventListener('input', filterGames);

  if (LOAD_BTN) {
    LOAD_BTN.addEventListener('click', () => {
      currentPage++;
      renderGrid(false);
    });
  }

  filtered = GAMES.slice();
  renderGrid(true);
  renderRecent();
})();
