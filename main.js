// Toggle the sidebar size
function toggleNavbar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('shrink');
}
// Change slide
function showSlide(slideId) {

  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.classList.remove('active'));


  const activeSlide = document.getElementById(`${slideId}-slide`);
  activeSlide.classList.add('active');


  const menuItems = document.querySelectorAll('.menu li');
  menuItems.forEach(item => item.classList.remove('active'));
  


  const activeMenuItem = document.getElementById(`${slideId}-btn`);
  activeMenuItem.classList.add('active');
}
