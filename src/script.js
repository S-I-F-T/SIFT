const navLinks = document.querySelectorAll('nav a');
const pageContent = document.querySelector('.mainContent');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.dataset.page;
    const page = document.getElementById(pageId);

    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });

    // Show the selected   
 page
    page.style.display = 'block';
  });
});