import { renderAboutUs } from './scripts/content';
import { renderBanquetMenu, renderMenu } from './scripts/menu';
import { injectMetaTags } from './scripts/meta';
// import { takeawayMenu } from './data/menuItems-takeaway';
import { dineInMenu } from './data/menuItems-dine-in';
import './style.css';
import { banquetMenu } from './data/banquet-menu';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Hero Section -->
<section id="hero" class="h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col justify-center items-center">
  <!-- Logo -->
  <div class="flex flex-col items-center text-center">
    <img src="/logo.png" alt="Phaya Thai Logo" class="h-40 w-auto mb-6" />
    <h1 class="text-4xl md:text-6xl font-bold tracking-wide text-gold font-greatvibes">
      Phaya Thai Restaurant
    </h1>
  </div>
    <!-- Contact Details -->
<div class="mt-8 text-center">
  <p class="text-lg text-gray-300">
    <span class="font-bold text-gold">Shop:</span> 6/96 Canterbury Road, Blackburn South VIC
  </p>
  <p class="text-lg text-gray-300">
    <span class="font-bold text-gold">Phone:</span> (03) 9894 3819 &nbsp; | &nbsp; 
    <span class="font-bold text-gold">Mobile:</span> 0412 289 289
  </p>
  <!-- p class="text-lg text-gray-300">
    <span class="font-bold text-gold">Email:</span> info@phayathai.com.au
  </p -->
</div>
  <!-- Scroll Down Indicator -->
  <div class="mt-12 animate-bounce">
    <a href="#about">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 text-gold"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v18m6-6l-6 6m0 0l-6-6"
        />
      </svg>
    </a>
  </div>
</section>

<!-- Navigation -->
<nav id="navigation" class="sticky top-0 bg-black text-white py-4 shadow-lg z-50">
  <div class="container mx-auto flex justify-center space-x-8">
    <a href="#hero" class="hover:text-gold transition menu-link">Home</a>
    <a href="#about" class="hover:text-gold transition menu-link">About Us</a>
    <!-- a href="#gallery" class="hover:text-gold transition menu-link">Gallery</a -->
    <a href="#banquet-menu" class="hover:text-gold transition menu-link">Menu</a>
    <a href="#contact" class="hover:text-gold transition menu-link">Contact Us</a>
  </div>
</nav>

<!-- About Us Section -->
<section id="about" class="py-20 bg-gray-900 text-gray-200">
  
</section>

<!-- Food Gallery Section -->
<!-- section id="gallery" class="py-20 bg-gray-900 text-gray-200">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-gold text-center mb-12 font-greatvibes">Gallery</h2>
  <div id="food-gallery" class="relative">
    <!-- Initial layout will be dynamically inserted here -->
  </div>
      
    </div>
  </div>
</section -->

<section id="food-banquet-menu" class="py-20 bg-gray-900 text-gray-300">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold text-center mb-12 font-greatvibes">Banquet Menu</h2>
    <div id="banquet-menu" class="mx-4 md:mx-auto"></div>
  </div>
</section>

<section id="food-dine-in-menu" class="py-20 bg-gray-900 text-gray-300">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold text-center mb-12 font-greatvibes">Dine In Menu</h2>
    <div id="dine-in-menu" class="mx-4 md:mx-auto"></div>
  </div>
</section>

<section id="food-takeaway-menu" class="py-20 bg-gray-900 text-gray-300">
  <div class="container mx-auto">
    <!-- h2 class="text-4xl font-bold text-gold text-center mb-12 font-greatvibes">Takeaway Menu</h2 -->
    <div id="takeaway-menu" class="mx-4 md:mx-auto"></div>
  </div>
</section>


<!-- Contact Section -->
<section id="contact" class="py-20 bg-gray-900 text-gray-200 text-center">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold mb-8 font-greatvibes">Contact Us</h2>
    <p class="text-lg">Shop 6/96 Canterbury Road, Blackburn South VIC</p>
    <p class="text-lg">Phone: (03) 98943819</p>
    <p class="text-lg">Mobile: 0412289289</p>
    <!-- p class="text-lg">Email: info@phayathai.com.au</p -->
  </div>
</section>

<!-- Footer -->
<footer class="bg-black text-gray-400 py-4 text-center">
  <p>&copy; <span id="current-year"></span> Phaya Thai Restaurant. All rights reserved.</p>
</footer>
`;

// JavaScript for Smooth Scrolling and Current Year
const menuLinks = document.querySelectorAll('.menu-link');
const currentYearElement = document.getElementById('current-year');

// Smooth scrolling for menu links
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href')!.substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Update footer with the current year
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear().toString();
}

// Call this function at the start of your script
injectMetaTags();
// Render
renderAboutUs();
const dineInContainer = document.getElementById('dine-in-menu');
// const takeawayContainer = document.getElementById('takeaway-menu');
const banquetContainer = document.getElementById('banquet-menu');

if (dineInContainer) {
  dineInContainer.innerHTML = renderMenu(dineInMenu);
}
// if (takeawayContainer) {
//   takeawayContainer.innerHTML = renderMenu(takeawayMenu);
// }
if (banquetContainer) {
  banquetContainer.innerHTML = renderBanquetMenu(banquetMenu);
}

console.log('Website is running!');
