const menuToggle = document.querySelector('#menuToggle');
const primaryNav = document.querySelector('#primaryNav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contactForm');
const formNotice = document.querySelector('#formNotice');
if (contactForm && formNotice) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formNotice.textContent = 'This is a demo form: no message was sent or saved. Connect a form service to receive enquiries.';
  });
}
