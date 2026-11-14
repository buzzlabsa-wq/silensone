/* =========================================================
   SILENS ONE — الكود الكامل (ملف واحد)
   الصقه كاملًا في خانة JS في سلة، وخلّ خانة CSS فاضية.
   آخر سطر في هذا الملف لازم يكون:  // ===== نهاية كود SILENS ONE =====
   ========================================================= */
(function () {
  if (document.getElementById('s1-css')) return;
  var l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap';
  document.head.appendChild(l);
  var st = document.createElement('style'); st.id = 's1-css';
  st.textContent = "@font-face{font-family:'Thmanyah';src:url('https://cdn.jsdelivr.net/gh/buzzlabsa-wq/silensone@971861894209d4d899e50bbc3b9e1e444ddd2d72/thmanyahserifdisplay-Regular.woff2') format('woff2');font-weight:400;font-display:swap}\n@font-face{font-family:'Thmanyah';src:url('https://cdn.jsdelivr.net/gh/buzzlabsa-wq/silensone@971861894209d4d899e50bbc3b9e1e444ddd2d72/thmanyahserifdisplay-Medium.woff2') format('woff2');font-weight:500;font-display:swap}\n@font-face{font-family:'Thmanyah';src:url('https://cdn.jsdelivr.net/gh/buzzlabsa-wq/silensone@971861894209d4d899e50bbc3b9e1e444ddd2d72/thmanyahserifdisplay-Bold.woff2') format('woff2');font-weight:700;font-display:swap}\n@font-face{font-family:'Thmanyah';src:url('https://cdn.jsdelivr.net/gh/buzzlabsa-wq/silensone@971861894209d4d899e50bbc3b9e1e444ddd2d72/thmanyahserifdisplay-Black.woff2') format('woff2');font-weight:900;font-display:swap}\n:root{\n  --s1-bg:#faf8f4; --s1-bg2:#f2eee6; --s1-card:#ffffff; --s1-tile:#f1efeb;\n  --s1-ink:#16130f; --s1-ink2:#4a433a; --s1-muted:#8a8072;\n  --s1-gold:#a8843f; --s1-gold2:#8a6a2c;\n  --s1-line:rgba(22,19,15,.10); --s1-line2:rgba(168,132,63,.35);\n  --s1-ease:cubic-bezier(.2,.7,.2,1);\n  --s1-shadow:0 30px 60px -30px rgba(40,30,15,.25);\n  --color-primary:#a8843f; --color-primary-dark:#8a6a2c; --color-primary-light:#c9a45c;\n}\nhtml.s1-dark{\n  --s1-bg:#0d0c0b; --s1-bg2:#141210; --s1-card:#161412; --s1-tile:#ecebe8;\n  --s1-ink:#f4efe6; --s1-ink2:#cfc6b8; --s1-muted:#958b7d;\n  --s1-gold:#c9a45c; --s1-gold2:#e6c88a;\n  --s1-line:rgba(244,239,230,.09); --s1-line2:rgba(201,164,92,.3);\n  --s1-shadow:0 30px 60px -30px rgba(0,0,0,.8);\n}\nbody,button,input,select,textarea,\n.s-block,.store-header,.store-footer{font-family:'Thmanyah',serif!important}\nbody{background:var(--s1-bg)!important;color:var(--s1-ink)!important;transition:background .5s,color .5s}\nh1,h2,h3,.s-block__title h2,.s-block__title{font-family:'Thmanyah',serif!important;font-weight:900!important;color:var(--s1-ink)!important}\n.s-block__title h2,.s-block__title{font-size:clamp(28px,3.4vw,44px)!important}\na:hover{color:var(--s1-gold)}\n.s-button-primary,.s-button-btn.s-button-primary,salla-add-product-button button,.btn--primary{\n  background:var(--s1-gold)!important;border-color:var(--s1-gold)!important;color:#fff!important;border-radius:0!important;\n  font-family:'Thmanyah',serif!important;font-weight:500!important;transition:all .35s var(--s1-ease)!important}\n.s-button-primary:hover,salla-add-product-button button:hover{background:var(--s1-ink)!important;border-color:var(--s1-ink)!important;color:var(--s1-bg)!important}\n.s-button-primary-outline{border-color:var(--s1-gold)!important;color:var(--s1-gold)!important;border-radius:0!important}\n.store-header,.store-header .main-nav-container,.store-header .top-navbar{background:var(--s1-bg)!important;color:var(--s1-ink)!important}\n.store-header{border-bottom:1px solid var(--s1-line)}\n.store-header .main-menu > li > a{font-weight:500;color:var(--s1-ink2)!important}\n.store-header .main-menu > li > a:hover{color:var(--s1-ink)!important}\n.s1-theme{display:inline-flex;align-items:center;border:1px solid var(--s1-line2);border-radius:40px;padding:3px;position:relative;height:38px;margin:0 8px;flex:none}\n.s1-theme button{width:34px;height:30px;border-radius:30px;display:grid;place-items:center;position:relative;z-index:1;color:var(--s1-ink);background:none;border:0;cursor:pointer}\n.s1-theme svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.6}\n.s1-theme .s1-knob{position:absolute;top:3px;bottom:3px;width:34px;border-radius:30px;background:var(--s1-gold);transition:right .4s var(--s1-ease);right:3px}\nhtml.s1-dark .s1-theme .s1-knob{right:37px}\n.s1-theme button.on{color:#fff}\n.s1-theme.s1-floating{position:fixed;top:14px;left:14px;z-index:999;background:var(--s1-bg)}\n.s1-hero{position:relative;width:100%;aspect-ratio:16/9;max-height:calc(100vh - 110px);overflow:hidden;background:#0b0907}\n.s1-hero video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.s1-wrap{max-width:1360px;margin:0 auto;padding:0 32px}\n.s1-sec{padding:90px 0}\n.s1-sh{text-align:center;margin-bottom:46px}\n.s1-sh h2{font-size:clamp(32px,3.8vw,50px)!important;line-height:1.25}\n.s1-orn{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:12px}\n.s1-orn:before,.s1-orn:after{content:\"\";height:1px;width:46px;background:var(--s1-gold)}\n.s1-orn i{width:7px;height:7px;border:1px solid var(--s1-gold);transform:rotate(45deg)}\n.s1-cats{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:960px;margin:0 auto}\n.s1-cat{display:block;text-align:center;color:var(--s1-ink)!important;text-decoration:none!important}\n.s1-cat .s1-ci{aspect-ratio:4/5;border-radius:22px;overflow:hidden;box-shadow:0 20px 40px -24px rgba(40,30,15,.45);-webkit-mask-image:-webkit-radial-gradient(white,black)}\n.s1-cat img{width:100%;height:100%;object-fit:cover;transition:transform 1.4s var(--s1-ease)}\n.s1-cat:hover img{transform:scale(1.07)}\n.s1-cat h3{font-weight:700!important;font-size:22px!important;margin-top:14px;transition:color .3s}\n.s1-cat:hover h3{color:var(--s1-gold)!important}\n.s1-cbanner{width:100%;overflow:hidden;background:#000}\n.s1-cbanner img{width:100%;height:auto;display:block;animation:s1cb 1.4s var(--s1-ease) both}\n@keyframes s1cb{from{transform:scale(1.06);opacity:.4}to{transform:none;opacity:1}}\n.s-product-card-entry,custom-salla-product-card{background:var(--s1-card)!important;border-radius:18px!important;overflow:hidden!important;border:0!important;\n  transition:box-shadow .5s,transform .5s var(--s1-ease)!important}\n.s-product-card-entry:hover,custom-salla-product-card:hover{box-shadow:var(--s1-shadow)!important;transform:translateY(-4px)}\n.s-product-card-image{position:relative;overflow:hidden;background:var(--s1-tile)!important}\n.s-product-card-image img{transition:transform 1.2s var(--s1-ease)!important}\n.s-product-card-entry:hover .s-product-card-image img{transform:scale(1.04)}\n.s-product-card-image:after{content:\"\";position:absolute;inset:0;z-index:2;pointer-events:none;\n  background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.75) 46%,rgba(255,240,205,.5) 52%,transparent 66%);transform:translateX(120%)}\n.s-product-card-entry:hover .s-product-card-image:after,.s-product-card-entry:active .s-product-card-image:after{animation:s1shine 1.1s var(--s1-ease)}\n@keyframes s1shine{from{transform:translateX(120%)}to{transform:translateX(-120%)}}\n.s-product-card-content{text-align:center}\n.s-product-card-content-title a{font-family:'Cormorant Garamond','Thmanyah',serif!important;font-size:22px!important;font-weight:500!important;letter-spacing:.06em;color:var(--s1-ink)!important}\n.s-product-card-price,.s-product-card-sale-price h4{color:var(--s1-gold)!important;font-weight:700!important}\n.s1-mini{display:block;font-size:13px;color:var(--s1-muted);margin-top:4px}\n.product-single .swiper-slide,.s-slider-container .swiper-slide{border-radius:20px;overflow:hidden}\n.s1-shine-host{position:relative;overflow:hidden}\n.s1-shine-host:after{content:\"\";position:absolute;inset:0;pointer-events:none;z-index:3;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.7) 46%,rgba(255,240,205,.45) 52%,transparent 66%);transform:translateX(120%)}\n.s1-shine-host:hover:after{animation:s1shine 1.2s var(--s1-ease)}\n.s1-bnpl{margin:16px 0 22px;display:flex;flex-direction:column;gap:10px}\n.s1-bp{border:1px solid var(--s1-line);border-radius:14px;background:var(--s1-card);overflow:hidden;transition:border-color .3s}\n.s1-bp.open{border-color:var(--s1-line2)}\n.s1-bp>button{width:100%;display:flex;align-items:center;gap:14px;padding:12px 16px;text-align:right;font-size:15px;background:none;border:0;cursor:pointer;color:var(--s1-ink2);font-family:'Thmanyah',serif}\n.s1-bp>button img{height:28px;width:auto;border-radius:7px}\n.s1-bp>button span{flex:1}\n.s1-bp>button span b{color:var(--s1-gold)}\n.s1-bp>button i{font-style:normal;color:var(--s1-gold);font-size:20px;transition:transform .35s}\n.s1-bp.open>button i{transform:rotate(45deg)}\n.s1-bx{max-height:0;overflow:hidden;transition:max-height .45s ease}\n.s1-bp.open .s1-bx{max-height:260px}\n.s1-pane{padding:12px 18px 18px;border-top:1px solid var(--s1-line)}\n.s1-head{font-size:15px;margin-bottom:14px;color:var(--s1-ink)}\n.s1-head b{color:var(--s1-gold)}\n.s1-steps{display:grid;grid-template-columns:repeat(4,1fr);position:relative;text-align:center}\n.s1-steps:before{content:\"\";position:absolute;top:13px;right:12.5%;left:12.5%;height:1px;background:var(--s1-line2)}\n.s1-steps div{position:relative}\n.s1-steps i{display:grid;place-items:center;width:27px;height:27px;border-radius:50%;margin:0 auto 6px;background:var(--s1-bg);border:1px solid var(--s1-gold);font-style:normal;font-size:14px;color:var(--s1-gold)}\n.s1-steps div:first-child i{background:var(--s1-gold);color:#fff}\n.s1-steps b{display:block;font-size:14px;color:var(--s1-ink)}\n.s1-steps small{font-size:12.5px;color:var(--s1-muted)}\n.s1-note{font-size:12.5px;color:var(--s1-muted);margin-top:12px;text-align:center}\n.s1-faq{max-width:860px;margin:0 auto}\n.s1-acc{border-bottom:1px solid var(--s1-line)}\n.s1-acc>button{width:100%;display:flex;justify-content:space-between;align-items:center;padding:22px 0;font-size:17.5px;font-weight:700;background:none;border:0;cursor:pointer;color:var(--s1-ink);font-family:'Thmanyah',serif;text-align:right}\n.s1-acc>button i{font-style:normal;color:var(--s1-gold);transition:transform .35s;font-size:22px;line-height:1}\n.s1-acc.open>button i{transform:rotate(45deg)}\n.s1-acc .s1-in{max-height:0;overflow:hidden;transition:max-height .5s ease;color:var(--s1-ink2)}\n.s1-acc.open .s1-in{max-height:400px}\n.s1-acc .s1-in>div{padding-bottom:22px;line-height:1.8}\n.s1-rv{position:relative;height:430px;perspective:1400px}\n.s1-rv .s1-stage{position:absolute;inset:0;transform-style:preserve-3d}\n.s1-rc{position:absolute;top:30px;left:50%;width:min(360px,78vw);margin-left:calc(min(360px,78vw)/-2);padding:30px 28px 26px;\n  background:linear-gradient(160deg,var(--s1-card),var(--s1-bg2));border:1px solid var(--s1-line2);border-radius:18px;\n  box-shadow:0 40px 70px -30px rgba(40,30,15,.35),0 12px 24px -12px rgba(40,30,15,.18);\n  transition:transform .8s var(--s1-ease),opacity .8s,filter .8s;cursor:pointer}\n.s1-rc .s1-stars{color:var(--s1-gold);letter-spacing:3px;font-size:18px;margin-bottom:12px}\n.s1-rc p{font-size:16.5px;color:var(--s1-ink2);min-height:110px}\n.s1-who{display:flex;align-items:center;gap:12px;margin-top:18px;padding-top:16px;border-top:1px solid var(--s1-line)}\n.s1-av{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#e6c88a,#a8843f);color:#fff;font-weight:700;font-size:18px}\n.s1-who b{display:block;font-size:16px;color:var(--s1-ink)}\n.s1-who small{color:var(--s1-muted);font-size:13px}\n.s1-ptag{margin-right:auto;font-family:'Cormorant Garamond',serif;font-size:13px;letter-spacing:.08em;border:1px solid var(--s1-line2);padding:2px 10px;border-radius:20px;color:var(--s1-gold)}\n.s1-rnav{display:flex;justify-content:center;gap:12px;align-items:center;margin-top:6px}\n.s1-rnav button{width:46px;height:46px;border-radius:50%;border:1px solid var(--s1-line2);display:grid;place-items:center;background:none;cursor:pointer;color:var(--s1-ink)}\n.s1-rnav button:hover{background:var(--s1-gold);border-color:var(--s1-gold);color:#fff}\n.s1-dots{display:flex;gap:7px}.s1-dots i{width:7px;height:7px;border-radius:7px;background:var(--s1-line2);transition:all .3s}.s1-dots i.on{width:24px;background:var(--s1-gold)}\n.store-footer,.store-footer__inner{background:var(--s1-bg2)!important;color:var(--s1-ink2)!important}\n.store-footer h3{color:var(--s1-ink)!important;font-size:17px!important}\n.store-footer a:hover{color:var(--s1-gold)!important}\nhtml.s1-dark .bg-white,html.s1-dark .bg-gray-50,html.s1-dark .bg-gray-100,\nhtml.s1-dark .s-product-card-entry,html.s1-dark .product-single,html.s1-dark .main-content{background-color:var(--s1-bg)!important}\nhtml.s1-dark .text-gray-900,html.s1-dark .text-gray-800,html.s1-dark .text-gray-700,html.s1-dark .text-dark{color:var(--s1-ink)!important}\nhtml.s1-dark .text-gray-600,html.s1-dark .text-gray-500,html.s1-dark .text-gray-400{color:var(--s1-muted)!important}\nhtml.s1-dark .border-gray-100,html.s1-dark .border-gray-200{border-color:var(--s1-line)!important}\nhtml.s1-dark .s-product-card-entry,html.s1-dark custom-salla-product-card{background:var(--s1-card)!important}\n@media (max-width:1024px){\n  .s1-sec{padding:70px 0}\n}\n@media (max-width:640px){\n  .s1-wrap{padding:0 16px}\n  .s1-sec{padding:56px 0}\n  .s1-cats{gap:10px}\n  .s1-cat .s1-ci{border-radius:14px}\n  .s1-cat h3{font-size:15px!important;margin-top:8px}\n  .s1-rv{height:400px}.s1-rc{padding:24px 20px}\n  .s1-theme{height:34px;margin:0 4px}.s1-theme button{width:28px;height:26px}.s1-theme .s1-knob{width:28px}\n  html.s1-dark .s1-theme .s1-knob{right:31px}\n}";
  document.head.appendChild(st);
})();

(function () {
  /* ================== الإعدادات ================== */
  var ASSETS = 'https://cdn.jsdelivr.net/gh/buzzlabsa-wq/silensone@971861894209d4d899e50bbc3b9e1e444ddd2d72'; // نفس الرابط اللي حطيته في ملف CSS (بدون / في الآخر)

  var CONFIG = {
    heroVideo: ASSETS + '/hero.mp4',
    heroPoster: ASSETS + '/hero-poster.jpg',
    hideFirstHomeBlock: false,     // خلها true إذا تبي يخفي أول بنر من بنرات سلة

    /* صور التصانيف في الرئيسية: link = رابط التصنيف في متجرك */
    categories: [
      { name: 'عطور رجالية',  img: ASSETS + '/c-men.jpg',    link: '/رجالي/c653882019' },
      { name: 'عطور نسائية',  img: ASSETS + '/c-women.jpg',  link: '/نسائي/c695909010' },
      { name: 'عطور للجنسين', img: ASSETS + '/c-unisex.jpg', link: '/للجنسيين/c550260747' }
    ],

    /* بنرات صفحات التصنيف: الرقم = رقم التصنيف (آخر الرابط بعد حرف c) */
    categoryBanners: {
      '653882019': ASSETS + '/b-men.jpg',
      '695909010': ASSETS + '/b-women.jpg',
      '550260747': ASSETS + '/b-unisex.jpg'
    },

    /* تابي وتمارا: خلّها true إذا تبي صندوقنا، false إذا تكتفي بودجت سلة الرسمي */
    showInstallments: false,
    tabbyLogo: ASSETS + '/tabby.png',
    tamaraLogo: ASSETS + '/tamara.png',

    showFAQ: true,
    showReviews: true,
    themeToggle: true
  };

  /* النوتات العطرية لكل عطر: key = كلمة من اسم المنتج */
  var NOTES = [
    { key: ['aurelius', 'أوريليوس'], top: 'الزعفران', heart: 'ورد غراس، الورد البلغاري، العود', base: 'الأمبريت، المسك الأبيض' },
    { key: ['secret de silence', 'سيكريت'], top: 'السوسن، أوراق البنفسج', heart: 'الورد، اللابدانوم', base: 'العود، الأخشاب، حبوب التونكا' },
    { key: ['zevian', 'زيفيان'], top: 'زهرة الزيزفون، زهرة البرتقال', heart: 'ياسمين سامباك، نبات الوزال', base: 'جورجي وود، الهيلوتروب' }
    // روزيل: أضف نوتاته هنا بنفس الشكل
  ];

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
    { n: 'خالد القحطاني', c: '', p: '', t: 'العطر وصلني بسرعة، والأمانة جودته ممتازة.', s: 5 },
    { n: 'سعود محمد', c: '', p: '', t: 'للأمانة العطر فوّاح وجودته ممتازة، وما سبب لي أي حساسية في الجيوب الأنفية.', s: 5 },
    { n: 'غادة العسيري', c: '', p: '', t: 'أهديت أخوي عطر من عطورهم، وللأمانة العطر جدًا ممتاز.', s: 5 }
    // أضف تقييم جديد بنفس الشكل: { n: 'الاسم', c: 'المدينة', p: 'اسم العطر', t: 'النص', s: 5 },
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
      var first = $('.s-block--hero-slider, .s-block--fixed-banner, salla-slider.home-slider');
      if (first) first.style.display = 'none';
    }
    // نحط الفيديو تحت الهيدر مباشرة (يشتغل مع أي ثيم)
    var hdr = $('.store-header') || $('header');
    if (hdr && hdr.parentNode) hdr.insertAdjacentElement('afterend', hero);
    else main.insertBefore(hero, main.firstChild);
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
    var ftr = $('.store-footer') || $('footer');
    var addEnd = function (el) { if (ftr && ftr.parentNode) ftr.insertAdjacentElement('beforebegin', el); else main.appendChild(el); };
    if (CONFIG.showReviews && REVIEWS.length) addEnd(reviews());
    if (CONFIG.showFAQ) addEnd(faq());
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
          '<div class="s1-who"><span class="s1-av">' + r.n.trim().charAt(0) + '</span><div><b>' + r.n + '</b><small>' + r.c + '</small></div>' + (r.p ? '<span class="s1-ptag">' + r.p + '</span>' : '') + '</div></div>';
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
    var hdr = $('.store-header') || $('header');
    if (hdr && hdr.parentNode) hdr.insertAdjacentElement('afterend', b);
    else { var main = mainEl(); main.insertBefore(b, main.firstChild); }
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

  /* ================== النوتات العطرية في صفحة المنتج ================== */
  function injectStyle() {
    if ($('#s1-extra')) return;
    var st = document.createElement('style'); st.id = 's1-extra';
    st.textContent =
      '.s1-pyr{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid rgba(168,132,63,.35);border-radius:16px;margin:22px 0;overflow:hidden;background:var(--s1-card,#fff)}' +
      '.s1-pyr>div{padding:22px 14px;text-align:center;opacity:0;transform:translateY(16px);animation:s1up .8s cubic-bezier(.2,.7,.2,1) forwards}' +
      '.s1-pyr>div:nth-child(2){animation-delay:.15s}.s1-pyr>div:nth-child(3){animation-delay:.3s}' +
      '.s1-pyr>div+div{border-right:1px solid rgba(168,132,63,.35)}' +
      '.s1-pyr svg{width:36px;height:36px;margin:0 auto 10px;display:block;stroke:#a8843f;fill:none;stroke-width:1.2}' +
      '.s1-pyr small{display:block;color:#a8843f;font-size:14px;font-weight:700}' +
      '.s1-pyr span{display:block;font-size:15.5px;line-height:1.6;margin-top:4px;color:var(--s1-ink,#16130f)}' +
      '.s1-pyr>div:hover svg{transform:scale(1.12);transition:transform .4s}' +
      '@keyframes s1up{to{opacity:1;transform:none}}' +
      '@media(max-width:640px){.s1-pyr{grid-template-columns:1fr}.s1-pyr>div+div{border-right:0;border-top:1px solid rgba(168,132,63,.35)}}';
    document.head.appendChild(st);
  }
  function productNotes() {
    if (!isProduct() || $('.s1-pyr')) return;
    var t = ($('.product-single h1') || $('h1') || {}).textContent || document.title;
    t = t.toLowerCase();
    var n = NOTES.filter(function (x) { return x.key.some(function (k) { return t.indexOf(k.toLowerCase()) > -1; }); })[0];
    if (!n) return;
    injectStyle();
    var ic = {
      top: '<svg viewBox="0 0 36 36"><path d="M18 6c4 4 4 8 0 12-4-4-4-8 0-12z"/><path d="M18 18v12"/></svg>',
      heart: '<svg viewBox="0 0 36 36"><circle cx="18" cy="16" r="4"/><path d="M18 12c0-5 6-7 6-2M18 12c0-5-6-7-6-2M22 16c5 0 7 6 2 6M14 16c-5 0-7 6-2 6M18 20v10"/></svg>',
      base: '<svg viewBox="0 0 36 36"><path d="M8 28h20M11 28c0-8 3-14 7-18 4 4 7 10 7 18"/></svg>'
    };
    var box = document.createElement('div'); box.className = 's1-pyr';
    box.innerHTML = '<div>' + ic.top + '<small>المقدمة</small><span>' + n.top + '</span></div>' +
      '<div>' + ic.heart + '<small>القلب</small><span>' + n.heart + '</span></div>' +
      '<div>' + ic.base + '<small>القاعدة</small><span>' + n.base + '</span></div>';
    var anchor = $('salla-add-product-button') || $('.product-form') || $('form[id*=product]');
    if (anchor && anchor.parentNode) anchor.insertAdjacentElement('afterend', box);
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
    if (!window.__s1log) { window.__s1log = 1; console.log('S1 ✓ كود Silens One اشتغل — الصفحة:', slug() || location.pathname); }
    try { themeToggle(); } catch (e) { console.warn('S1 theme', e); }
    try { home(); } catch (e) { console.warn('S1 home', e); }
    try { categoryBanner(); } catch (e) { console.warn('S1 banner', e); }
    try { installments(); } catch (e) { console.warn('S1 bnpl', e); }
    try { productNotes(); } catch (e) { console.warn('S1 notes', e); }
    try { cardMini(); } catch (e) {}
  }
  function start() {
    run();
    // بطاقات المنتجات في سلة تُرسم متأخر، نعيد المحاولة كم مرة
    var tries = 0, t = setInterval(function () { run(); if (++tries > 12) clearInterval(t); }, 700);
  }
  var started = false;
  function go() { if (started) return; started = true; start(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  try { if (window.salla && salla.onReady) salla.onReady(function () { run(); }); } catch (e) {}
  window.addEventListener('load', function () { run(); });
})();
// ===== نهاية كود SILENS ONE =====
