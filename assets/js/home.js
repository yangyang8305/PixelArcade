// ══════════════════════════════════════════
// PixelArcade — Home Page Logic
// ══════════════════════════════════════════

(function() {
  const GRID = document.getElementById('gameGrid');
  const SEARCH = document.getElementById('searchInput');
  const LOAD_BTN = document.getElementById('loadMoreBtn');
  const PAGE_SIZE = 12;
  let currentCat = 'all';
  let currentPage = 1;
  let filtered = [];

  function renderCard(g) {
    const badge = g.badge
      ? `<span class="game-badge badge-${g.badge}">${g.badge}</span>` : '';
    const stars = '★'.repeat(Math.round(g.rating)) + '☆'.repeat(5 - Math.round(g.rating));
    return `
    <div class="game-card" onclick="location.href='pages/game.html?id=${g.id}'">
      <div class="game-thumb-placeholder">${g.emoji}</div>
      ${badge}
      <div class="game-info">
        <div class="game-name">${g.name}</div>
        <div class="game-meta">
          <span class="game-cat">${g.category}</span>
          <span class="game-rating">${stars} ${g.rating}</span>
        </div>
      </div>
    </div>`;
  }

  function filterGames() {
    const q = (SEARCH ? SEARCH.value : '').toLowerCase().trim();
    filtered = GAMES.filter(g => {
      const catOk = currentCat === 'all' || g.category === currentCat;
      const qOk = !q || g.name.toLowerCase().includes(q) || g.tags.some(t => t.includes(q));
      return catOk && qOk;
    });
    currentPage = 1;
    renderGrid();
  }

  function renderGrid() {
    const slice = filtered.slice(0, currentPage * PAGE_SIZE);
    if (!slice.length) {
      GRID.innerHTML = `<div class="empty-state"><div class="empty-icon">🕹️</div><p>No games found.</p></div>`;
    } else {
      GRID.innerHTML = slice.map(renderCard).join('');
    }
    if (LOAD_BTN) {
      LOAD_BTN.style.display = filtered.length > currentPage * PAGE_SIZE ? '' : 'none';
    }
  }

  // Category tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCat = tab.dataset.cat;
      filterGames();
    });
  });

  // Search
  if (SEARCH) {
    SEARCH.addEventListener('input', filterGames);
  }

  // Load more
  if (LOAD_BTN) {
    LOAD_BTN.addEventListener('click', () => {
      currentPage++;
      renderGrid();
    });
  }

  // Init
  filtered = GAMES.slice();
  renderGrid();
})();
