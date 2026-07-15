(function() {
  if (typeof GAMES === 'undefined') return;

  const GRID     = document.getElementById('gameGrid');
  const SEARCH   = document.getElementById('searchInput');
  const LOAD_BTN = document.getElementById('loadMoreBtn');
  const PAGE_SIZE = 12;
  let currentCat  = 'all';
  let currentPage = 1;
  let filtered    = [];

  const CAT_COLORS = {
    arcade:   ['#001a3a','#002855'],
    puzzle:   ['#1a0040','#2a0060'],
    casual:   ['#002010','#003020'],
    action:   ['#2a0010','#400020'],
    strategy: ['#1a1000','#2a2000'],
  };

  function renderCard(g) {
    const badge = g.badge
      ? `<span class="game-badge badge-${g.badge}">${g.badge}</span>` : '';
    const filled  = Math.round(g.rating);
    const stars   = '★'.repeat(filled) + '☆'.repeat(5 - filled);
    const colors  = CAT_COLORS[g.category] || ['#0a0a1f','#111130'];

    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.cat = g.category;
    card.innerHTML = `
      <div class="game-thumb-placeholder"
           style="background:linear-gradient(135deg,#0a0a1f 0%,${colors[0]} 50%,${colors[1]} 100%)">
        ${g.emoji}
      </div>
      ${badge}
      <div class="game-info">
        <div class="game-name">${g.name}</div>
        <div class="game-meta">
          <span class="game-cat">${g.category}</span>
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
})();
