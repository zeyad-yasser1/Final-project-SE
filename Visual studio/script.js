// JavaScript code

// Function to toggle the responsive class on the navigation menu
function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('responsive');
  
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    menuIcon.style.display = navItems.classList.contains('responsive') ? 'none' : 'inline-block';
    closeIcon.style.display = navItems.classList.contains('responsive') ? 'inline-block' : 'none';
  }
  
  // Event listener for the menu button click
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', toggleMenu);
  });
  