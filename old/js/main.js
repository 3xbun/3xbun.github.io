// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// Select Dom Items
const modal = document.querySelector('#modal');
const img = document.querySelectorAll('.item');
const modalImg = document.querySelector('#modalImage')
const close = document.querySelector('.close');
const caption = document.querySelector('#caption')

// Set Initial Modal State
let showModal = false;

img.forEach(item => item.addEventListener ('click', function () {
  const img = item.querySelector('img');
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
  
  modal.classList.add('show');
  showModal = true;
}));

close.addEventListener('click', function () {
  modal.classList.remove('show');
  showModal = false;
});