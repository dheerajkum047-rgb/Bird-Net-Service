/* ============================================================
   JAVASCRIPT — all interactive behaviour for the site.
   Organised by feature; each block is self-contained.
   ============================================================ */
(function(){
  "use strict";

  /* ---- 1. Sticky navbar background on scroll ---- */
  const navbar = document.getElementById('navbar');
  function onScroll(){
    if(window.scrollY > 40){ navbar.classList.add('scrolled'); }
    else{ navbar.classList.remove('scrolled'); }

    // Scroll-to-top button visibility
    const topBtn = document.getElementById('scrollTopBtn');
    if(window.scrollY > 500){ topBtn.classList.add('visible'); }
    else{ topBtn.classList.remove('visible'); }
  }
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  /* ---- 2. Mobile menu toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', function(){
    const isActive = navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  });
  document.querySelectorAll('.mlink').forEach(function(link){
    link.addEventListener('click', function(){
      navToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  /* ---- 3. Scroll-reveal animation using IntersectionObserver ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.15 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }

  /* ---- 4. Scroll-to-top button click ---- */
  document.getElementById('scrollTopBtn').addEventListener('click', function(){
    window.scrollTo({ top:0, behavior:'smooth' });
  });

  /* ---- 5. Gallery lightbox ---- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxLabel = document.getElementById('lightboxLabel');
  document.querySelectorAll('.gallery-item').forEach(function(item){
    item.addEventListener('click', function(){
      const fullSrc = item.getAttribute('data-full') || item.querySelector('img').src;
      lightboxImg.src = fullSrc;
      lightboxImg.alt = item.getAttribute('data-label') || '';
      lightboxLabel.textContent = item.getAttribute('data-label');
      lightbox.classList.add('active');
    });
  });
  document.getElementById('lightboxClose').addEventListener('click', function(){
    lightbox.classList.remove('active');
  });
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox){ lightbox.classList.remove('active'); }
  });

  /* ---- 6. Get Quote modal ---- */
  const quoteModal = document.getElementById('quoteModal');
  function openQuoteModal(e){ if(e) e.preventDefault(); quoteModal.classList.add('active'); }
  function closeQuoteModal(){ quoteModal.classList.remove('active'); }
  document.getElementById('navQuoteBtn').addEventListener('click', openQuoteModal);
  document.getElementById('heroQuoteBtn').addEventListener('click', openQuoteModal);
  document.getElementById('modalClose').addEventListener('click', closeQuoteModal);
  quoteModal.addEventListener('click', function(e){ if(e.target === quoteModal) closeQuoteModal(); });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ closeQuoteModal(); lightbox.classList.remove('active'); }
  });

  /* ---- 7. Form submissions — REAL, backend-free delivery via WhatsApp.
     Both forms build a pre-filled WhatsApp message to the business number
     (918299772215) and open it in a new tab/app. The visitor just has to
     hit "Send" in WhatsApp — no server, email account or API key needed.
     (If you later add a backend or a service like Formspree/Getform,
     simply replace the code inside these two submit handlers.) ---- */
  const BUSINESS_WHATSAPP = '918299772215';

  function sendToWhatsApp(message){
    const url = 'https://wa.me/' + BUSINESS_WHATSAPP + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank', 'noopener');
  }

  document.getElementById('quoteForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('qf-name').value.trim();
    const phone = document.getElementById('qf-phone').value.trim();
    const service = document.getElementById('qf-service').value.trim();

    const message = 'Hello Surya Net Services, I would like a free quote.\n' +
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Service needed: ' + (service || 'Not specified');

    sendToWhatsApp(message);

    document.getElementById('quoteMsg').classList.add('show');
    this.reset();
    setTimeout(function(){ closeQuoteModal(); document.getElementById('quoteMsg').classList.remove('show'); }, 2500);
  });

  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const phone = document.getElementById('cf-phone').value.trim();
    const msg = document.getElementById('cf-msg').value.trim();

    const message = 'Hello Surya Net Services, I have a query.\n' +
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Message: ' + msg;

    sendToWhatsApp(message);

    document.getElementById('formMsg').classList.add('show');
    this.reset();
    setTimeout(function(){ document.getElementById('formMsg').classList.remove('show'); }, 4000);
  });

  /* ---- 8. Footer year ---- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---- 9. Custom cursor glow (desktop, fine pointer only) ---- */
  const glow = document.getElementById('cursorGlow');
  if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
    window.addEventListener('mousemove', function(e){
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .service-card, .gallery-item, .why-card, .review-card').forEach(function(el){
      el.addEventListener('mouseenter', function(){ glow.classList.add('hovering'); });
      el.addEventListener('mouseleave', function(){ glow.classList.remove('hovering'); });
    });
  }

})();
