/* =========================================================
   SILENS ONE — تخصيص متجر سلة (ثيم رائد)
   الصق هذا الملف كاملًا في: تصميم المتجر ← تخصيص JS
   عدّل قسم الإعدادات (CONFIG) فقط
   ========================================================= */
(function () {
  /* ================== الإعدادات ================== */
  var ASSETS = 'ASSETS_URL'; // نفس الرابط اللي حطيته في ملف CSS (بدون / في الآخر)

  var CONFIG = {
    heroVideo: ASSETS + '/hero.mp4',
    heroPoster: ASSETS + '/hero-poster.jpg',
    hideFirstHomeBlock: true,      // يخفي سلايدر سلة الأول ويحط الفيديو مكانه

    /* صور التصانيف في الرئيسية: link = رابط التصنيف في متجرك */
    categories: [
      { name: 'عطور رجالية',  img: ASSETS + '/c-men.jpg',    link: '/رجالي/c000000001' },
      { name: 'عطور نسائية',  img: ASSETS + '/c-women.jpg',  link: '/نسائي/c000000002' },
      { name: 'عطور للجنسين', img: ASSETS + '/c-unisex.jpg', link: '/للجنسين/c000000003' }
    ],

    /* بنرات صفحات التصنيف: الرقم = رقم التصنيف (آخر الرابط بعد حرف c) */
    categoryBanners: {
      '000000001': ASSETS + '/b-men.jpg',
      '000000002': ASSETS + '/b-women.jpg',
      '000000003': ASSETS + '/b-unisex.jpg'
    },

    /* تابي وتمارا: خلّها true إذا تبي صندوقنا، false إذا تكتفي بودجت سلة الرسمي */
    showInstallments: true,
    tabbyLogo: ASSETS + '/pay/tabby.png',
    tamaraLogo: ASSETS + '/pay/tamara.png',

    showFAQ: true,
    showReviews: false, // خلّها true بعد ما تحط تقييمات حقيقية في REVIEWS تحت
    themeToggle: true
  };

  var FAQ = [
    ['كم يوم يوصل الطلب؟', 'يوصلك الطلب خلال 1 إلى 4 أيام عمل داخل المملكة حسب مدينتك، ويوصلك رقم التتبع أول ما يُشحن الطلب.'],
    ['كم رسوم الشحن؟', 'الشحن مجاني لكل الطلبات فوق 299 ر.س، والطلبات الأقل تُحسب رسومها عند إتمام الطلب.'],
    ['كيف جودة العطور وثباتها؟', 'جميع عطورنا بتركيز أو دو بارفيوم (Eau de Parfum) بحجم 100 مل، ومصممة لثبات وفوحان يدومان لساعات طويلة.'],
    ['هل العطور أصلية؟ وهل فيه ضمان؟', 'نعم، كل عطورنا أصلية من Silens One مباشرة، ونضمن لك وصول المنتج سليمًا. إذا وصلك المنتج تالف أو فيه خطأ نستبدله لك فورًا.'],
    ['هل أقدر أرجّع أو أستبدل؟', 'تقدر ترجّع أو تستبدل خلال 7 أيام من الاستلام بشرط إن المنتج ما انفتح وبتغليفه الأصلي.'],
    ['وش طرق الدفع المتاحة؟', 'مدى، فيزا، أبل باي، وتقدر تقسّط مبلغك على 4 دفعات بدون فوائد مع تابي أو تمارا.'],
    ['كيف تتعاملون مع بياناتي؟', 'بياناتك محمية ولا نشاركها مع أي طرف ثالث، ونستخدمها فقط لتجهيز طلبك وتوصيله والتواصل معك بخصوصه.'],
    ['كيف أتواصل معكم؟', 'تقدر تتواصل معنا عبر واتساب أو إنستغرام وتيك توك على حساب silensone@، ونرد عليك بأسرع وقت.']
  ];

  /* حط هنا تقييمات عملائك الحقيقية (الاسم، المدينة، العطر، النص، عدد النجوم) */
  var REVIEWS = [
    // { n: 'اسم العميل', c: 'المدينة', p: 'AURELIUS', t: 'نص التقييم كما كتبه العميل', s: 5 },
  ];

  /* ================== أدوات ================== */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var slug = function () {
    try { return (window.salla && salla.config.get('page.slug')) || ''; } catch (e) { return ''; }
  };
  var isHome = function () { var s = slug(); return s === 'index' || s === 'home' || /^\/?(ar|en)?\/?$/.test(location.pathname); };
  var isProduct = function () { return slug() === 'product.single' || !!$('.product-single,#product-form,form.product-form'); };
  var isCategory = function () { return slug() === 'product.index' || /\/c\d+/.test(decodeURIComponent(location.pathname)); };
  var toEn = function (str) { return String(str).replace(/[٠-٩]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); }).replace(/[٫,]/g, function (c) { return c === '٫' ? '.' : ''; }); };
  var money = function (n) {
    try { if (window.salla && salla.money) return salla.money(n); } catch (e) {}
    return n.toLocaleString('ar-SA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ر.س';
  };
  var head = function (t) { return '<div class="s1-sh"><h2>' + t + '</h2><div class="s1-orn"><i></i></div></div>'; };
  var mainEl = function () { return $('#app main') || $('main') || $('.main-content') || document.body; };

  /* ================== الوضع الليلي / الصباحي ================== */
  function setTheme(t) {
    document.documentElement.classList.toggle('s1-dark', t === 'dark');
    $$('.s1-theme button').forEach(function (b) { b.classList.toggle('on', b.dataset.t === t); });
    try { sessionStorage.setItem('s1theme', t); } catch (e) {}
  }
  function themeToggle() {
    if (!CONFIG.themeToggle || $('.s1-theme')) return;
    var box = document.createElement('div');
    box.className = 's1-theme';
    box.innerHTML = '<span class="s1-knob"></span>' +
      '<button type="button" data-t="light" aria-label="الوضع الصباحي"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button>' +
      '<button type="button" data-t="dark" aria-label="الوضع الليلي"><svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg></button>';
    var anchor = $('.store-header salla-cart-summary') || $('.store-header .header-btn') || $('header salla-cart-summary');
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(box, anchor);
    else { box.classList.add('s1-floating'); document.body.appendChild(box); }
    $$('button', box).forEach(function (b) { b.onclick = function () { setTheme(b.dataset.t); }; });
    // الوضع الصباحي هو الأساسي، والاختيار يبقى خلال الزيارة فقط
    var saved = 'light'; try { saved = sessionStorage.getItem('s1theme') || 'light'; } catch (e) {}
    setTheme(saved);
  }

  /* ================== الرئيسية ================== */
  function home() {
    if (!isHome() || $('.s1-hero')) return;
    var main = mainEl();

    // الفيديو
    var hero = document.createElement('section');
    hero.className = 's1-hero';
    hero.innerHTML = '<video src="' + CONFIG.heroVideo + '" poster="' + CONFIG.heroPoster + '" autoplay muted loop playsinline preload="auto"></video>';
    if (CONFIG.hideFirstHomeBlock) {
      var first = $('.s-block--hero-slider, .s-block--fixed-banner, salla-slider.home-slider', main) || main.querySelector('section');
      if (first) first.style.display = 'none';
    }
    main.insertBefore(hero, main.firstChild);
    var v = $('video', hero); v.muted = true; var p = v.play && v.play(); if (p && p.catch) p.catch(function () {});

    // التصنيفات
    var cats = document.createElement('section');
    cats.className = 's1-sec';
    cats.innerHTML = '<div class="s1-wrap">' + head('التصنيفات') + '<div class="s1-cats">' +
      CONFIG.categories.map(function (c) {
        return '<a class="s1-cat" href="' + c.link + '"><div class="s1-ci"><img loading="lazy" src="' + c.img + '" alt="' + c.name + '"></div><h3>' + c.name + '</h3></a>';
      }).join('') + '</div></div>';
    hero.parentNode.insertBefore(cats, hero.nextSibling);

    // التقييمات
    if (CONFIG.showReviews && REVIEWS.length) main.appendChild(reviews());
    // الأسئلة
    if (CONFIG.showFAQ) main.appendChild(faq());
  }

  /* ================== الأسئلة الشائعة ================== */
  function faq() {
    var s = document.createElement('section');
    s.className = 's1-sec'; s.id = 's1-faq';
    s.innerHTML = '<div class="s1-wrap">' + head('الأسئلة الشائعة') + '<div class="s1-faq">' +
      FAQ.map(function (f) { return '<div class="s1-acc"><button type="button">' + f[0] + '<i>+</i></button><div class="s1-in"><div>' + f[1] + '</div></div></div>'; }).join('') +
      '</div></div>';
    $$('.s1-acc>button', s).forEach(function (b) { b.onclick = function () { b.parentNode.classList.toggle('open'); }; });
    return s;
  }

  /* ================== آراء العملاء 3D ================== */
  function reviews() {
    var s = document.createElement('section');
    s.className = 's1-sec'; s.style.overflow = 'hidden';
    s.innerHTML = '<div class="s1-wrap">' + head('آراء عملائنا') +
      '<div class="s1-rv"><div class="s1-stage">' + REVIEWS.map(function (r, i) {
        return '<div class="s1-rc" data-i="' + i + '"><div class="s1-stars">' + new Array((r.s || 5) + 1).join('★') + '</div><p>' + r.t + '</p>' +
          '<div class="s1-who"><span class="s1-av">' + r.n.trim().charAt(0) + '</span><div><b>' + r.n + '</b><small>' + r.c + '</small></div><span class="s1-ptag">' + (r.p || '') + '</span></div></div>';
      }).join('') + '</div></div>' +
      '<div class="s1-rnav"><button type="button" data-d="-1">›</button><div class="s1-dots">' + REVIEWS.map(function () { return '<i></i>'; }).join('') + '</div><button type="button" data-d="1">‹</button></div></div>';
    var cards = $$('.s1-rc', s), dots = $$('.s1-dots i', s), N = cards.length, cur = 0, timer;
    function layout() {
      var w = innerWidth < 640 ? 150 : 300;
      cards.forEach(function (c, i) {
        var d = ((i - cur) % N + N) % N; if (d > N / 2) d -= N; var a = Math.abs(d);
        c.style.transform = 'translateX(' + (d * -w) + 'px) translateZ(' + (-a * 180) + 'px) rotateY(' + (d * 28) + 'deg)';
        c.style.opacity = a > 2 ? 0 : 1 - a * .28; c.style.zIndex = 10 - a; c.style.filter = a ? 'blur(' + (a * .6) + 'px)' : 'none';
      });
      dots.forEach(function (d, i) { d.classList.toggle('on', i === cur); });
    }
    function go(k) { cur = (k + N) % N; layout(); clearInterval(timer); timer = setInterval(function () { go(cur + 1); }, 4500); }
    cards.forEach(function (c, i) { c.onclick = function () { go(i); }; });
    $$('.s1-rnav button', s).forEach(function (b) { b.onclick = function () { go(cur + (+b.dataset.d)); }; });
    var sx = null; s.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    s.addEventListener('touchend', function (e) { if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? -1 : 1)); sx = null; });
    addEventListener('resize', layout); setTimeout(function () { go(0); }, 50);
    return s;
  }

  /* ================== بنر صفحة التصنيف ================== */
  function categoryBanner() {
    if (!isCategory() || $('.s1-cbanner')) return;
    var m = decodeURIComponent(location.pathname).match(/c(\d+)/);
    var src = m && CONFIG.categoryBanners[m[1]];
    if (!src) return;
    var b = document.createElement('div');
    b.className = 's1-cbanner';
    b.innerHTML = '<img src="' + src + '" alt="">';
    var main = mainEl(); main.insertBefore(b, main.firstChild);
  }

  /* ================== تابي وتمارا في صفحة المنتج ================== */
  function readPrice() {
    var el = $('.total-price') || $('[data-price]') || $('.product-single .price') || $('.s-product-price');
    if (!el) return 0;
    var raw = el.getAttribute && el.getAttribute('data-price') || el.textContent;
    var n = parseFloat(toEn(raw).replace(/[^\d.]/g, ''));
    return isNaN(n) ? 0 : n;
  }
  function renderBnpl(box, total) {
    var q = money(Math.round(total / 4 * 100) / 100);
    var when = ['اليوم', 'بعد شهر', 'بعد شهرين', 'بعد 3 أشهر'];
    var prov = [['tabby', 'تابي', CONFIG.tabbyLogo], ['tamara', 'تمارا', CONFIG.tamaraLogo]];
    var open = box.getAttribute('data-open') || '';
    box.innerHTML = prov.map(function (p) {
      return '<div class="s1-bp' + (open === p[0] ? ' open' : '') + '" data-p="' + p[0] + '"><button type="button"><img src="' + p[2] + '" alt="' + p[0] + '"><span>قسّطها على 4 دفعات بـ <b>' + q + '</b></span><i>+</i></button>' +
        '<div class="s1-bx"><div class="s1-pane"><div class="s1-head">إذا قسّطت مع ' + p[1] + '، تدفع <b>' + q + '</b> كل شهر بدون فوائد</div>' +
        '<div class="s1-steps">' + when.map(function (w, i) { return '<div><i>' + (i + 1) + '</i><b>' + q + '</b><small>' + w + '</small></div>'; }).join('') + '</div>' +
        '<div class="s1-note">اختر ' + p[1] + ' عند إتمام الطلب · بدون رسوم إضافية</div></div></div></div>';
    }).join('');
    $$('.s1-bp>button', box).forEach(function (b) {
      b.onclick = function () {
        var p = b.parentNode, was = p.classList.contains('open');
        $$('.s1-bp', box).forEach(function (x) { x.classList.remove('open'); });
        if (!was) p.classList.add('open');
        box.setAttribute('data-open', was ? '' : p.getAttribute('data-p'));
      };
    });
  }
  function installments() {
    if (!CONFIG.showInstallments || !isProduct() || $('.s1-bnpl')) return;
    var price = readPrice(); if (!price) return;
    var anchor = $('.total-price') ? ($('.total-price').closest('.flex, div') || $('.total-price')) : $('salla-add-product-button');
    if (!anchor) return;
    var box = document.createElement('div'); box.className = 's1-bnpl';
    if (anchor.tagName && anchor.tagName.toLowerCase() === 'salla-add-product-button') anchor.parentNode.insertBefore(box, anchor);
    else anchor.parentNode.insertBefore(box, anchor.nextSibling);
    renderBnpl(box, price);
    // تحديث المبلغ لما يتغير السعر (الكمية أو الخيارات)
    var refresh = function () { var n = readPrice(); if (n) renderBnpl(box, n); };
    try { salla.event.on('product::price.updated', function () { setTimeout(refresh, 50); }); } catch (e) {}
    var tp = $('.total-price'); if (tp && window.MutationObserver) new MutationObserver(refresh).observe(tp, { childList: true, characterData: true, subtree: true });
    // لمعة على صورة المنتج
    var g = $('.product-single salla-slider, .details-slider, .s-slider-container'); if (g) g.classList.add('s1-shine-host');
  }

  /* سطر التقسيط الصغير تحت سعر كل بطاقة */
  function cardMini() {
    if (!CONFIG.showInstallments) return;
    $$('.s-product-card-price, .s-product-card-sale-price').forEach(function (el) {
      if (el.parentNode.querySelector('.s1-mini')) return;
      var n = parseFloat(toEn(el.textContent).replace(/[^\d.]/g, '')); if (!n) return;
      var s = document.createElement('span'); s.className = 's1-mini';
      s.textContent = 'أو 4 دفعات بـ ' + money(Math.round(n / 4 * 100) / 100);
      el.parentNode.insertBefore(s, el.nextSibling);
    });
  }

  /* ================== تشغيل ================== */
  function run() {
    try { themeToggle(); } catch (e) { console.warn('S1 theme', e); }
    try { home(); } catch (e) { console.warn('S1 home', e); }
    try { categoryBanner(); } catch (e) { console.warn('S1 banner', e); }
    try { installments(); } catch (e) { console.warn('S1 bnpl', e); }
    try { cardMini(); } catch (e) {}
  }
  function start() {
    run();
    // بطاقات المنتجات في سلة تُرسم متأخر، نعيد المحاولة كم مرة
    var tries = 0, t = setInterval(function () { run(); if (++tries > 12) clearInterval(t); }, 700);
  }
  if (window.salla && salla.onReady) { try { salla.onReady(start); } catch (e) { start(); } }
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
