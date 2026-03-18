\// Smooth scroll
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 2px 15px rgba(0,0,0,0.5)";
  } else {
    nav.style.boxShadow = "none";
  }
});