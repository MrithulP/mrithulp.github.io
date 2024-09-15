// Toggle the sidebar size
function toggleNavbar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('shrink');
}

// Show the appropriate slide
function showSlide(slideId) {
  // Hide all slides
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.classList.remove('active'));

  // Show the selected slide
  const activeSlide = document.getElementById(`${slideId}-slide`);
  activeSlide.classList.add('active');

  // Remove 'active' class from all sidebar menu items
  const menuItems = document.querySelectorAll('.menu li');
  menuItems.forEach(item => item.classList.remove('active'));

  // Add 'active' class to the clicked menu item
  const activeMenuItem = document.getElementById(`${slideId}-btn`);
  activeMenuItem.classList.add('active');
}
