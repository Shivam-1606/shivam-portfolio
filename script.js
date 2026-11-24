const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

// Keep project enquiries simple until live repository links are added.
document.querySelectorAll('.project-link').forEach((link) => {
  link.addEventListener('click', () => {
    const project = link.dataset.project;
    const emailLink = document.querySelector('.contact-panel .button');
    emailLink.href = `mailto:shivamshrivastav16062003@gmail.com?subject=${encodeURIComponent('Enquiry about ' + project)}`;
  });
});
