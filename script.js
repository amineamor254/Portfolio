'use strict';

document.documentElement.classList.add('js');

const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const scrollTopButton = document.getElementById('scrollTopBtn');
const contactForm = document.getElementById('contactForm');

function setNavigationOpen(isOpen) {
  if (!nav || !navToggle) return;
  nav.classList.toggle('show', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') !== 'true';
    setNavigationOpen(isOpen);

    if (isOpen) {
      nav.querySelector('a')?.focus();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setNavigationOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setNavigationOpen(false);
      navToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) setNavigationOpen(false);
  });
}

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);

        if (isActive) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
  });

  sections.forEach((section) => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -36px 0px',
  });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('active'));
}

function updateScrollTopButton() {
  if (!scrollTopButton) return;
  scrollTopButton.classList.toggle('visible', window.scrollY > 320);
}

if (scrollTopButton) {
  window.addEventListener('scroll', updateScrollTopButton, { passive: true });
  updateScrollTopButton();
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  });
}

function showToast(message, isError = false) {
  let container = document.querySelector('.toast-container');

  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${isError ? 'error' : 'success'}`;
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));
  window.setTimeout(() => {
    toast.classList.remove('show');
    window.setTimeout(() => toast.remove(), 200);
  }, 4000);
}

window.pageShowToast = showToast;

if (contactForm) {
  const formStatus = document.getElementById('formStatus');
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const defaultButtonText = submitButton?.innerHTML ?? '';

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    if (formStatus) {
      formStatus.textContent = 'Sending your message…';
      formStatus.className = 'form-status';
    }
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
    }

    try {
      const response = await fetch('https://formspree.io/f/manjeneq', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        const error = new Error(`Contact form submission failed with status ${response.status}.`);
        console.error(error);
        if (formStatus) {
          formStatus.textContent = 'Your message could not be sent. Please email me directly instead.';
          formStatus.classList.add('error');
        }
        showToast('Message could not be sent. Please try emailing me.', true);
        return;
      }

      contactForm.reset();
      if (formStatus) {
        formStatus.textContent = 'Thanks for reaching out. Your message has been sent.';
        formStatus.classList.add('success');
      }
      showToast('Your message has been sent.');
    } catch (error) {
      console.error('Contact form request failed:', error);
      if (formStatus) {
        formStatus.textContent = 'A network error prevented sending. Please email me directly instead.';
        formStatus.classList.add('error');
      }
      showToast('Network error. Please try emailing me.', true);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = defaultButtonText;
      }
    }
  });
}
