const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
const selectedText = document.getElementById('selectedText');
const selectedBar = document.getElementById('selectedBar');
const selectedIcon = document.getElementById('selectedIcon');

// Toggle menu open/close
menuIcon.addEventListener('click', () => {
  menu.classList.toggle('open');
  menuIcon.classList.toggle('open');
});

// Add delay animation for icons
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add('show');
  }, index * 100); // Delay staggered reveal
});

// Update selected text and icon, and hide menu on item click
menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu-item')) {
    const socialMedia = e.target.getAttribute('data-social');
    const iconClass = e.target.querySelector('i').className;
    
    selectedText.textContent = ` ${socialMedia}`;
    selectedIcon.className = iconClass;  // Update icon
    menu.classList.remove('open');
    menuIcon.classList.remove('open');
  }
});
