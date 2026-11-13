(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // SP menu
  var menu = document.getElementById('sp-menu');
  var openBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.sp-menu__close');
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    if (openBtn) openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open && closeBtn) closeBtn.focus();
    if (!open && openBtn) openBtn.focus();
  }
  if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) setMenu(false);
  });

  // Accordions (SP menu / footer)
  document.querySelectorAll('[data-acc]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('li, dl');
      var open = !item.classList.contains('is-open');
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
      var icon = btn.querySelector('.acc-list__icon');
      if (icon) icon.textContent = open ? '－' : '＋';
    });
  });

  // Tabs (TOP news / contact)
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = list.querySelectorAll('[role="tab"]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute('aria-selected', String(on));
          var panel = document.getElementById(t.getAttribute('aria-controls'));
          if (panel) panel.hidden = !on;
        });
        var filter = tab.getAttribute('data-filter');
        if (filter !== null) {
          var target = document.getElementById(list.getAttribute('data-target'));
          if (target) target.querySelectorAll('[data-cat]').forEach(function (li) {
            li.hidden = filter !== 'all' && li.getAttribute('data-cat').indexOf(filter) === -1;
          });
        }
      });
    });
  });

  // Local nav: keep current item visible (SP horizontal scroll)
  var ln = document.querySelector('.local-nav');
  var cur = ln && ln.querySelector('[aria-current="page"]');
  if (ln && cur && ln.scrollWidth > ln.clientWidth) {
    ln.scrollLeft = cur.offsetLeft - 20;
  }

  // Page top
  var pt = document.querySelector('.page-top');
  if (pt) {
    window.addEventListener('scroll', function () {
      pt.classList.toggle('is-show', window.scrollY > 600);
    }, { passive: true });
  }

  // Fade in
  var fades = document.querySelectorAll('.fade');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    fades.forEach(function (el) { io.observe(el); });
  } else {
    fades.forEach(function (el) { el.classList.add('is-in'); });
  }
})();
