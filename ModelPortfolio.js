// Tabs and category content
const tabs = document.querySelectorAll('.category-tabs button');
const categories = document.querySelectorAll('.category-content');

// Initialize: make first tab active and show its content
if (tabs.length > 0) {
  tabs[0].classList.add('active');
  categories.forEach((cat, index) => {
    cat.style.display = index === 0 ? 'flex' : 'none';
  });
}

// Tab click handler
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-category');

    // Remove active from all tabs and hide all categories
    tabs.forEach(t => t.classList.remove('active'));
    categories.forEach(cat => (cat.style.display = 'none'));

    // Activate clicked tab and show its category
    tab.classList.add('active');
    const activeCategory = document.querySelector(`.category-content[data-category="${target}"]`);
    if (activeCategory) activeCategory.style.display = 'flex';
  });
});
