/* small UI helpers: navigation toggle and smooth link scrolling */

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle && navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('show');
});

/* highlight active nav on scroll */
const links = Array.from(document.querySelectorAll('.nav-link'));
const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

function onScroll() {
  const y = window.scrollY + 120;
  let idx = sections.length - 1;
  for (let i = 0; i < sections.length; i++) {
    if (y < sections[i].offsetTop) { idx = i - 1; break; }
  }
  links.forEach(l => l.classList.remove('active'));
  if (idx >= 0) links[idx].classList.add('active');
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* smooth anchor scrolling */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav
      if (nav.classList.contains('show')) { nav.classList.remove('show'); navToggle.setAttribute('aria-expanded','false'); }
    }
  });
});

// Reveal elements on scroll
const revealEls = Array.from(document.querySelectorAll('.reveal'));
function revealOnScroll(){
  const offset = window.innerHeight * 0.85;
  revealEls.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < offset){ el.classList.add('active'); }
  });
}
window.addEventListener('scroll', revealOnScroll, {passive:true});
revealOnScroll();

// Simple toast helper (used by form already)
function showToast(message, isError=false){
  let t = document.querySelector('.toast');
  if(!t){ t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent = message; t.style.background = isError? '#FF4C4C' : '#4BB543'; t.style.display='block';
  setTimeout(()=>{ t.style.display='none' },4000);
}

// Override existing showToast in index.html form script to use this helper if available
window.pageShowToast = showToast;

// Get the button
let mybutton = document.getElementById("scrollTopBtn");

// Show button when user scrolls down 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to top when clicked
mybutton.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
