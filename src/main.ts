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
    <img src="/logo.png" alt="Phaya Thai Logo" class="h-auto w-auto mb-2" />
   
  </div>
    <!-- Contact Details -->

  <!-- Scroll Down Indicator -->
  <!-- div class="mt-2 animate-bounce">
  <a href="#about">
    <img
      src="/pointer.png"
      alt="Scroll Down Indicator"
      class="w-auto h-auto"
    />
  </a>
</div -->
<div class="container mx-auto text-center text-lightGold font-roboto">
    <h3 class="text-4xl font-bold text-gold mb-8 font-roboto"><a href='https://phayathai.com.au'>www.PhayaThai.com.au</a></h3>
    <p class="text-md font-roboto">Open 7 day a week from 5.00 pm to 10.00 pm</p>
    <p class="text-md font-roboto">Shop: 6/96 Canterbury Road</p>
    <p class="text-md font-roboto">Blackburn South VIC 3130</p>
    <p class="text-md font-roboto flex justify-center items-center space-x-2">
     Visit on &nbsp;<i class="fa-brands fa-square-facebook text-gold text-xl"></i>
      <span>Phaya Thai restaurant</span>
    </p>
    <div class='flex justify-center items-center space-x-2'>
    <p class="text-md font-roboto flex justify-center items-center space-x-2">
      <i class="fas fa-phone-alt text-gold text-xl"></i>
      <span>(03) 9894 3819</span>
    </p>
    <p class="text-md font-roboto flex justify-center items-center space-x-2">
      <i class="fas fa-mobile-alt text-gold text-xl"></i>
      <span>041-2289289</span>
    </p></div>
  </div>
</section>

<!-- Navigation -->
<nav id="navigation" class="sticky top-0 bg-black text-white py-4 shadow-lg z-50">
  <div class="container mx-auto flex justify-center space-x-8">
    <a href="#hero" class="hover:text-gold transition menu-link">Home</a>
    <a href="#about" class="hover:text-gold transition menu-link">About Us</a>
    <a href="#food-banquet-menu" class="hover:text-gold transition menu-link">Menu</a>
     <a href="#gallery" class="hover:text-gold transition menu-link">Gallery</a>
    <a href="#contact" class="hover:text-gold transition menu-link">Contact Us</a>
  </div>
</nav>

<!-- About Us Section -->
<section id="about" class="py-20 bg-gray-900 text-gray-200">
</section>
<section id="food-banquet-menu" class="py-20 bg-gray-900 text-gray-300">
<div class = 'text-center mx-auto mb-6'>
<p>For those who have Vegetarian it’s also available</p>
  <p>Booking as a group is recommended to select banquet</p>
</div>

  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold text-center mb-12 ">Banquet Menu</h2>
    <div id="banquet-menu" class="mx-4 md:mx-auto"></div>
  </div>
</section>

<section id="food-dine-in-menu" class="py-20 bg-gray-900 text-gray-300">
  <div class="container mx-auto">
  
    <h2 class="text-4xl font-bold text-gold text-center mb-12 ">Dine In Menu</h2>
    <div id="dine-in-menu" class="mx-4 md:mx-auto"></div>
  </div>
</section>

<section id="food-takeaway-menu" class="py-20 bg-gray-900 text-gray-300">
  <div class="container mx-auto">
    <!-- h2 class="text-4xl font-bold text-gold text-center mb-12 ">Takeaway Menu</h2 -->
    <div id="takeaway-menu" class="mx-4 md:mx-auto"></div>
  </div>
</section>
<!-- Food Gallery Section -->
<section id="gallery" class="py-20 bg-gray-900 text-gray-200 text-center">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold mb-8 ">Gallery</h2>
    <video autoplay muted playsinline loop controls width="80%" class="mx-auto rounded-lg">
      <source src="/pyt.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 bg-gray-900 text-gray-200 text-center">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold mb-8 ">Contact Us</h2>
    <p class="text-lg">Shop 6/96 Canterbury Road, Blackburn South VIC 3130</p>
    <p class="text-lg">Phone: (03) 9894 3819</p>
    <p class="text-lg">Mobile: 041-2 289 289</p>
    <!-- p class="text-lg">Email: info@phayathai.com.au</p -->
  </div>
</section>

<!-- Footer -->
<footer class="bg-black text-gray-400 py-4 text-center">
  <p class='font-playfairdisplay'>&copy; <span id="current-year"></span> Phaya Thai Restaurant. All rights reserved.</p>
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

document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('video');
  if (video) {
    video.muted = true; // Ensure it's muted
    video.play().catch((error) => {
      console.error('Autoplay failed:', error);
    });
  }
});

console.log('Website is running!');
