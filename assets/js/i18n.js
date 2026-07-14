// ══════════════════════════════════════════
// PixelArcade — i18n Engine
// Auto-detects browser language.
// Supports LTR + RTL.
// ══════════════════════════════════════════

const SUPPORTED_LANGS = [
  { code:'en', label:'English',    dir:'ltr' },
  { code:'zh', label:'中文',        dir:'ltr' },
  { code:'ja', label:'日本語',      dir:'ltr' },
  { code:'ko', label:'한국어',      dir:'ltr' },
  { code:'es', label:'Español',    dir:'ltr' },
  { code:'fr', label:'Français',   dir:'ltr' },
  { code:'de', label:'Deutsch',    dir:'ltr' },
  { code:'pt', label:'Português',  dir:'ltr' },
  { code:'ru', label:'Русский',    dir:'ltr' },
  { code:'ar', label:'العربية',    dir:'rtl' },
  { code:'hi', label:'हिन्दी',      dir:'ltr' },
  { code:'tr', label:'Türkçe',     dir:'ltr' },
];

const TRANSLATIONS = {
  en: {
    'nav.home':'Home','nav.categories':'Categories',
    'hero.title':'Free Pixel Games<br><span>Play Instantly</span>',
    'hero.sub':'No download. No login. Just play.',
    'hero.cta':'▶ Start Playing',
    'cat.all':'All','cat.action':'Action','cat.puzzle':'Puzzle',
    'cat.casual':'Casual','cat.arcade':'Arcade','cat.strategy':'Strategy',
    'section.featured':'⭐ Featured Games',
    'btn.loadmore':'Load More',
    'footer.desc':'Free browser games for everyone.',
    'footer.about':'About','footer.privacy':'Privacy',
    'footer.contact':'Contact','footer.admin':'Admin',
  },
  zh: {
    'nav.home':'首页','nav.categories':'分类',
    'hero.title':'免费像素游戏<br><span>即点即玩</span>',
    'hero.sub':'无需下载，无需登录，直接开玩。',
    'hero.cta':'▶ 开始游戏',
    'cat.all':'全部','cat.action':'动作','cat.puzzle':'益智',
    'cat.casual':'休闲','cat.arcade':'街机','cat.strategy':'策略',
    'section.featured':'⭐ 精选游戏',
    'btn.loadmore':'加载更多',
    'footer.desc':'为所有人提供的免费浏览器游戏。',
    'footer.about':'关于','footer.privacy':'隐私',
    'footer.contact':'联系我们','footer.admin':'管理',
  },
  ja: {
    'nav.home':'ホーム','nav.categories':'カテゴリ',
    'hero.title':'無料ピクセルゲーム<br><span>すぐにプレイ</span>',
    'hero.sub':'ダウンロード不要。ログイン不要。今すぐ遊ぼう。',
    'hero.cta':'▶ プレイ開始',
    'cat.all':'すべて','cat.action':'アクション','cat.puzzle':'パズル',
    'cat.casual':'カジュアル','cat.arcade':'アーケード','cat.strategy':'ストラテジー',
    'section.featured':'⭐ おすすめゲーム',
    'btn.loadmore':'もっと見る',
    'footer.desc':'誰でも無料で遊べるブラウザゲーム。',
    'footer.about':'について','footer.privacy':'プライバシー',
    'footer.contact':'お問い合わせ','footer.admin':'管理',
  },
  ar: {
    'nav.home':'الرئيسية','nav.categories':'الفئات',
    'hero.title':'ألعاب بكسل مجانية<br><span>العب فوراً</span>',
    'hero.sub':'بدون تحميل. بدون تسجيل. فقط العب.',
    'hero.cta':'▶ ابدأ اللعب',
    'cat.all':'الكل','cat.action':'أكشن','cat.puzzle':'ألغاز',
    'cat.casual':'كاجوال','cat.arcade':'أركيد','cat.strategy':'استراتيجية',
    'section.featured':'⭐ ألعاب مميزة',
    'btn.loadmore':'تحميل المزيد',
    'footer.desc':'ألعاب مجانية في المتصفح للجميع.',
    'footer.about':'حول','footer.privacy':'الخصوصية',
    'footer.contact':'اتصل بنا','footer.admin':'الإدارة',
  },
  es: {
    'nav.home':'Inicio','nav.categories':'Categorías',
    'hero.title':'Juegos Pixel Gratis<br><span>Juega al Instante</span>',
    'hero.sub':'Sin descargas. Sin registro. Solo juega.',
    'hero.cta':'▶ Empezar a jugar',
    'cat.all':'Todo','cat.action':'Acción','cat.puzzle':'Puzzle',
    'cat.casual':'Casual','cat.arcade':'Arcade','cat.strategy':'Estrategia',
    'section.featured':'⭐ Juegos Destacados',
    'btn.loadmore':'Cargar más',
    'footer.desc':'Juegos de navegador gratuitos para todos.',
    'footer.about':'Acerca de','footer.privacy':'Privacidad',
    'footer.contact':'Contacto','footer.admin':'Admin',
  },
  fr: {
    'nav.home':'Accueil','nav.categories':'Catégories',
    'hero.title':'Jeux Pixel Gratuits<br><span>Jouez Instantanément</span>',
    'hero.sub':'Sans téléchargement. Sans connexion. Jouez !',
    'hero.cta':'▶ Commencer',
    'cat.all':'Tout','cat.action':'Action','cat.puzzle':'Puzzle',
    'cat.casual':'Casual','cat.arcade':'Arcade','cat.strategy':'Stratégie',
    'section.featured':'⭐ Jeux en vedette',
    'btn.loadmore':'Charger plus',
    'footer.desc':'Jeux gratuits en navigateur pour tous.',
    'footer.about':'À propos','footer.privacy':'Confidentialité',
    'footer.contact':'Contact','footer.admin':'Admin',
  },
  de: {
    'nav.home':'Startseite','nav.categories':'Kategorien',
    'hero.title':'Kostenlose Pixel-Spiele<br><span>Sofort spielen</span>',
    'hero.sub':'Kein Download. Keine Anmeldung. Einfach spielen.',
    'hero.cta':'▶ Spielen',
    'cat.all':'Alle','cat.action':'Action','cat.puzzle':'Puzzle',
    'cat.casual':'Casual','cat.arcade':'Arcade','cat.strategy':'Strategie',
    'section.featured':'⭐ Empfohlene Spiele',
    'btn.loadmore':'Mehr laden',
    'footer.desc':'Kostenlose Browser-Spiele für alle.',
    'footer.about':'Über uns','footer.privacy':'Datenschutz',
    'footer.contact':'Kontakt','footer.admin':'Admin',
  },
  ko: {
    'nav.home':'홈','nav.categories':'카테고리',
    'hero.title':'무료 픽셀 게임<br><span>바로 플레이</span>',
    'hero.sub':'다운로드 불필요. 로그인 불필요. 그냥 플레이.',
    'hero.cta':'▶ 게임 시작',
    'cat.all':'전체','cat.action':'액션','cat.puzzle':'퍼즐',
    'cat.casual':'캐주얼','cat.arcade':'아케이드','cat.strategy':'전략',
    'section.featured':'⭐ 추천 게임',
    'btn.loadmore':'더 보기',
    'footer.desc':'모두를 위한 무료 브라우저 게임.',
    'footer.about':'소개','footer.privacy':'개인정보',
    'footer.contact':'연락처','footer.admin':'관리자',
  },
  ru: {
    'nav.home':'Главная','nav.categories':'Категории',
    'hero.title':'Бесплатные пиксельные игры<br><span>Играй сразу</span>',
    'hero.sub':'Без загрузки. Без входа. Просто играй.',
    'hero.cta':'▶ Начать играть',
    'cat.all':'Все','cat.action':'Экшн','cat.puzzle':'Головоломка',
    'cat.casual':'Казуальные','cat.arcade':'Аркада','cat.strategy':'Стратегия',
    'section.featured':'⭐ Популярные игры',
    'btn.loadmore':'Загрузить ещё',
    'footer.desc':'Бесплатные браузерные игры для всех.',
    'footer.about':'О нас','footer.privacy':'Конфиденциальность',
    'footer.contact':'Контакты','footer.admin':'Админ',
  },
  pt: {
    'nav.home':'Início','nav.categories':'Categorias',
    'hero.title':'Jogos Pixel Grátis<br><span>Jogue Agora</span>',
    'hero.sub':'Sem download. Sem login. Só jogar.',
    'hero.cta':'▶ Começar a jogar',
    'cat.all':'Todos','cat.action':'Ação','cat.puzzle':'Puzzle',
    'cat.casual':'Casual','cat.arcade':'Arcade','cat.strategy':'Estratégia',
    'section.featured':'⭐ Jogos em Destaque',
    'btn.loadmore':'Carregar mais',
    'footer.desc':'Jogos de navegador grátis para todos.',
    'footer.about':'Sobre','footer.privacy':'Privacidade',
    'footer.contact':'Contato','footer.admin':'Admin',
  },
  hi: {
    'nav.home':'होम','nav.categories':'श्रेणियाँ',
    'hero.title':'मुफ़्त पिक्सेल गेम्स<br><span>तुरंत खेलें</span>',
    'hero.sub':'डाउनलोड नहीं। लॉगिन नहीं। बस खेलें।',
    'hero.cta':'▶ खेलना शुरू करें',
    'cat.all':'सभी','cat.action':'एक्शन','cat.puzzle':'पहेली',
    'cat.casual':'कैजुअल','cat.arcade':'आर्केड','cat.strategy':'रणनीति',
    'section.featured':'⭐ फ़ीचर्ड गेम्स',
    'btn.loadmore':'और लोड करें',
    'footer.desc':'सभी के लिए मुफ़्त ब्राउज़र गेम्स।',
    'footer.about':'हमारे बारे में','footer.privacy':'गोपनीयता',
    'footer.contact':'संपर्क करें','footer.admin':'एडमिन',
  },
  tr: {
    'nav.home':'Ana Sayfa','nav.categories':'Kategoriler',
    'hero.title':'Ücretsiz Piksel Oyunlar<br><span>Hemen Oyna</span>',
    'hero.sub':'İndirme yok. Giriş yok. Sadece oyna.',
    'hero.cta':'▶ Oynamaya Başla',
    'cat.all':'Tümü','cat.action':'Aksiyon','cat.puzzle':'Bulmaca',
    'cat.casual':'Gündelik','cat.arcade':'Arkat','cat.strategy':'Strateji',
    'section.featured':'⭐ Öne Çıkan Oyunlar',
    'btn.loadmore':'Daha Fazla',
    'footer.desc':'Herkes için ücretsiz tarayıcı oyunları.',
    'footer.about':'Hakkında','footer.privacy':'Gizlilik',
    'footer.contact':'İletişim','footer.admin':'Yönetim',
  },
};

// ── Core i18n Engine ──
class I18n {
  constructor() {
    this.lang = this.detectLang();
    this.apply();
    this.buildLangDropdown();
  }

  detectLang() {
    const saved = localStorage.getItem('pa_lang');
    if (saved && TRANSLATIONS[saved]) return saved;
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return TRANSLATIONS[browser] ? browser : 'en';
  }

  t(key) {
    return (TRANSLATIONS[this.lang] || TRANSLATIONS.en)[key] || key;
  }

  apply() {
    const lang = SUPPORTED_LANGS.find(l => l.code === this.lang);
    document.documentElement.lang = this.lang;
    document.documentElement.dir = lang?.dir || 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = this.t(key);
      if (el.tagName === 'INPUT') el.placeholder = val;
      else el.innerHTML = val;
    });

    const btn = document.getElementById('langBtn');
    if (btn) btn.textContent = `🌐 ${this.lang.toUpperCase()} ▾`;
  }

  setLang(code) {
    this.lang = code;
    localStorage.setItem('pa_lang', code);
    this.apply();
    const dd = document.getElementById('langDropdown');
    if (dd) dd.classList.remove('open');
  }

  buildLangDropdown() {
    const dd = document.getElementById('langDropdown');
    const btn = document.getElementById('langBtn');
    if (!dd || !btn) return;

    dd.innerHTML = SUPPORTED_LANGS.map(l =>
      `<button class="lang-option" data-code="${l.code}">${l.label}</button>`
    ).join('');

    dd.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => this.setLang(opt.dataset.code));
    });

    btn.addEventListener('click', e => {
      e.stopPropagation();
      dd.classList.toggle('open');
    });
    document.addEventListener('click', () => dd.classList.remove('open'));
  }
}

window.i18n = new I18n();
