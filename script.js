// Optional: Adding a smooth scroll to the top when user clicks on the header
document.querySelector('header').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
