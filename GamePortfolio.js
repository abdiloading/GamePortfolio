const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.project-section');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(nav => nav.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    item.classList.add('active');
    document.getElementById(item.dataset.target).classList.add('active');

    // Smooth scroll to top of selected project
    document.querySelector('.content').scrollTo({
      top: document.getElementById(item.dataset.target).offsetTop,
      behavior: 'smooth'
    });
  });
});
const categoryHeaders = document.querySelectorAll('.nav-category-header');

categoryHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    parent.classList.toggle('open');
  });
});
