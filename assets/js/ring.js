// semnal.me home page: the ring story (from mockup 04). No library.
// Scroll position -> --p (0..1) on the scene; CSS derives every transform and opacity from it.
// The page scrolls natively; nothing takes over the scroll, so visitors move between slides both ways.
(function () {
  var html = document.documentElement;
  var scene = document.getElementById('scene');
  var stage = document.getElementById('stage');
  var tap = document.getElementById('tapring');
  if (!scene || !stage || !tap) return;

  // Reduce Motion: the story shows as the plain list instead of the stage, and follows the setting live.
  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function applyMotion() {
    html.classList.toggle('no-story', !!(reduce && reduce.matches));
    request();
  }

  // Slides by scroll progress: 0 hero, 1 one tap, 2 the signal, 3 it leaves your phone, 4 everyone told.
  function slideOf(p) { return p < .05 ? 0 : p < .36 ? 1 : p < .58 ? 2 : p < .8 ? 3 : 4; }
  // Where tapping the ring takes the visitor, as scroll progress: each slide to the next one.
  // From the last slide (4) it goes on to the page below the story ("Who it is for").
  var NEXT = { 0: .2, 1: .47, 2: .69, 3: 1 };
  var LABEL = ['Next: it starts with one tap', 'Next: your iPhone becomes the signal',
    'Next: the signal leaves your phone', 'Next: everyone you chose is told', 'Next: who it is for'];

  var ticking = false;
  function update() {
    ticking = false;
    var r = scene.getBoundingClientRect();
    var total = r.height - window.innerHeight;
    var p = total > 0 ? Math.min(1, Math.max(0, -r.top / (total * 0.95))) : 0;
    scene.style.setProperty('--p', p.toFixed(4));
    stage.classList.toggle('past', p > 0.07);
    var s = slideOf(p);
    if (stage.dataset.slide !== String(s)) {
      stage.dataset.slide = String(s);
      tap.setAttribute('aria-label', LABEL[s]);
    }
  }
  function request() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  // A tap while the smooth scroll of the last tap is still running steps on from that tap's slide,
  // not from where the scroll happens to be.
  var aiming = null; // { slide, at }
  var AIM_MS = 1200;

  // Tapping the ring: a ripple, then a smooth scroll to the next slide. The scroll drives the glow and the
  // spreading rings, so the move between slides is the animation itself.
  tap.addEventListener('click', function () {
    update();
    var s = Number(stage.dataset.slide);
    if (aiming && Date.now() - aiming.at < AIM_MS && aiming.slide > s) s = aiming.slide;
    aiming = s < 4 ? { slide: s + 1, at: Date.now() } : null;
    tap.classList.remove('go');
    void tap.offsetWidth;
    tap.classList.add('go');
    var top = scene.getBoundingClientRect().top + window.pageYOffset;
    var total = scene.offsetHeight - window.innerHeight;
    var y = s in NEXT ? top + NEXT[s] * total * 0.95 : top + scene.offsetHeight;
    window.scrollTo({ top: Math.round(y), behavior: 'smooth' });
  });

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });
  if (reduce) {
    if (reduce.addEventListener) reduce.addEventListener('change', applyMotion);
    else if (reduce.addListener) reduce.addListener(applyMotion);
  }
  // The stage replaces the plain list only from here on: if this script never runs, the list stays.
  html.classList.add('story-ready');
  applyMotion();
  update();
})();
