/* ============================================================
   SELIXOR SYSTEMS — Main JavaScript
   Version: 2.0
   Modules: Navbar, ScrollReveal, Modal, Form, SmoothScroll
   No external dependencies.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Navbar: scroll effect ─── */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ─── Mobile menu ─── */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on any link/button click
  navLinks.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ─── Scroll Reveal (IntersectionObserver) ─── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ─── Staggered impact lines ─── */
  const impactoWrap = document.querySelector('.impacto-wrap');

  if (impactoWrap) {
    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lines = impactoWrap.querySelectorAll('.reveal-line');
            lines.forEach((line, i) => {
              setTimeout(() => line.classList.add('visible'), i * 280);
            });
            lineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    lineObserver.observe(impactoWrap);
  }

  /* ─── Modal: About ─── */
  const overlay = document.getElementById('modal-about');

  function openModal() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal="about"]').forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  /* ─── Contact Form (Formspree) ─── */
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('.form-submit');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form),
        });

        if (response.ok) {
          form.style.display = 'none';
          document.querySelector('.form-success').classList.add('active');
        } else {
          btn.textContent = 'Error — Intenta de nuevo';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Error — Intenta de nuevo';
        btn.disabled = false;
      }
    });
  }

  /* ─── Smooth scroll for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
