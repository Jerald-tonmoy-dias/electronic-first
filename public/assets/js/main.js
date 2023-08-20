"use strict"


/********* Search Box ***********/
const closebtn = document.querySelector('.searchbox-close-btn');
const openbtn = document.querySelector('.searchbox-trigger-btn');
const searchbox = document.querySelector('.search-input');
const searchlabel = document.querySelector('.input-lable');
const toggleBtn = document.querySelector('.searchbox-trigger-btn.mobile');

toggleBtn.addEventListener('click', () => {
  searchbox.classList.toggle('active');
  toggleBtn.classList.toggle('active');
});

openbtn.addEventListener('click', () => {
  searchbox.classList.add('active');
  searchlabel.classList.add('active');
  closebtn.classList.add('active');
});

closebtn.addEventListener('click', () => {
  searchbox.classList.remove('active');
  searchlabel.classList.remove('active');
  closebtn.classList.remove('active');
});



/********* Category Menu ***********/
const categoryMenu = document.querySelector('.category-menu');
const megaMenuItems = categoryMenu.querySelectorAll('.has-megamenu');

// Toggle class on click
categoryMenu.addEventListener('click', event => {
  const target = event.target.closest('.has-megamenu');
  if (target && target.querySelector('.megamenu')) {
    megaMenuItems.forEach(item => {
      item.classList.remove('active');
    });
    target.classList.add('active');
  }
});

// Remove class if clicked outside
document.addEventListener('click', event => {
  if (!event.target.closest('.category-menu')) {
    megaMenuItems.forEach(item => {
      item.classList.remove('active');
    });
  }
});


/********* Sidebar ***********/
const sidebarOpen = document.querySelector('.open-sidebar');
const sidebarClose = document.querySelector('.close-sidebar');
const sidebar = document.querySelector('.sidebar-mobile-menu');

sidebarOpen.addEventListener('click', () => {
  sidebar.classList.add('active');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('active');
});