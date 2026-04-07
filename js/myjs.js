/* ACCORDION PANELS */
document.querySelectorAll('.accordion').forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});

/* NAVBAR: shrink on scroll */
var mainNav = document.getElementById('mainNav');
function updateNavbar() {
  mainNav.classList.toggle('navbar-shrink', window.scrollY > 100);
}
updateNavbar();
window.addEventListener('scroll', updateNavbar);

/* NAVBAR: hamburger toggle */
var navToggle  = document.getElementById('navToggle');
var navMenu    = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
}

/* SMOOTH SCROLL + close mobile menu */
document.querySelectorAll('a.js-scroll-trigger[href*="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var hash = this.getAttribute('href');
    if (hash === '#' || hash === '#page-top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      var target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 57, behavior: 'smooth' });
      }
    }
    if (navMenu) navMenu.classList.remove('show');
  });
});

/* GALLERY LIGHTBOX */
(function() {
  var overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.innerHTML =
    '<div id="lightbox-box">' +
      '<button id="lightbox-close" aria-label="Close">&times;</button>' +
      '<button id="lightbox-prev" aria-label="Previous">&#10094;</button>' +
      '<img id="lightbox-img" src="" alt="">' +
      '<div id="lightbox-caption"></div>' +
      '<button id="lightbox-next" aria-label="Next">&#10095;</button>' +
    '</div>';
  document.body.appendChild(overlay);

  var currentGroup = [], currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + currentGroup.length) % currentGroup.length;
    var item = currentGroup[currentIndex];
    document.getElementById('lightbox-img').src = item.href;
    document.getElementById('lightbox-img').alt = item.title;
    document.getElementById('lightbox-caption').textContent = item.title;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.style.display = 'none';
    document.getElementById('lightbox-img').src = '';
    document.body.style.overflow = '';
  }

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeLightbox(); });
  document.getElementById('lightbox-prev').addEventListener('click', function(e) { e.stopPropagation(); showImage(currentIndex - 1); });
  document.getElementById('lightbox-next').addEventListener('click', function(e) { e.stopPropagation(); showImage(currentIndex + 1); });
  document.addEventListener('keydown', function(e) {
    if (overlay.style.display !== 'flex') return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });

  document.querySelectorAll('.zoom-gallery').forEach(function(gallery) {
    var links = Array.from(gallery.querySelectorAll('a.hoverZoomLink'));
    links.forEach(function(link, idx) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        currentGroup = links.map(function(a) {
          return { href: a.getAttribute('href'), title: a.getAttribute('title') || '' };
        });
        showImage(idx);
      });
    });
  });
})();
