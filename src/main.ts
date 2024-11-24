import { foodGallery } from './data/foodGallery';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <!-- Hero Section -->
  <section id="hero" class="h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col justify-center items-center">
    <!-- Logo -->
    <div class="flex flex-col items-center text-center">
      <img src="/logo.png" alt="Phaya Thai Logo" class="h-40 w-auto mb-6" />
      <h1 class="text-4xl md:text-6xl font-bold tracking-wide text-gold">
        Phaya Thai Restaurant
      </h1>
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
      <a href="#gallery" class="hover:text-gold transition menu-link">Gallery</a>
      <!-- a href="#foodmenu" class="hover:text-gold transition menu-link">Menu</a -->
      <a href="#contact" class="hover:text-gold transition menu-link">Contact Us</a>
    </div>
  </nav>

  <!-- About Us Section -->
  <section id="about" class="py-20 bg-gray-900 text-gray-200">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-gold text-center mb-8">About Us</h2>
      <p class="text-lg leading-relaxed text-justify max-w-3xl mx-auto text-gray-300">
        Thai food is renowned around the world for its distinctive flavours and nutritional value. Thai food is one of the world’s most popular cuisines. Not only is it delicious, it is also very healthy. Thai herbs, rich in vitamins and minerals, provide a unique balance of flavours and nutritional value, making Thai food a great choice for those seeking both taste and wellbeing. Creating truly excellent Thai food is an art that requires skill, care and love for the craft. Every dish tells a story of meticulous preparation using fresh, high-quality ingredients that are carefully selected to achieve the perfect balance of flavours. 
        <br/><br/>
        Cooking has always been a passion of mine. I started learning at the age of nine when my mother first taught me the art of Thai cooking. This early experience allowed me to hone my skills, which eventually led to the opening of my first restaurant, Baiyoke Thai restaurant in Elsternwick. I then moved on to open Ruby Modern Thai at Rye in 2010, where I continued to develop my culinary skills. Now, with over 20 years of experience, I am excited to present my latest venture, Phaya Thai restaurant. 
        <br/><br/>
        I invite you to experience the flavours of Thai food prepared with passion and attention to detail. At Phaya Thai restaurant, we focus not only on taste, but also on cleanliness and quality. To ensure that every dish is safe and delicious, all vegetables are thoroughly washed to ensure the highest safety standards. I am honored to have the opportunity to cook healthy and delicious food for you and your family.
        <br/><br/>
        Thank you for trusting me to bring the essence of Thai food to you.
      </p>
    </div>
  </section>

  <!-- Food Gallery Section -->
  <section id="gallery" class="py-20 bg-gray-900 text-gray-200">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-gold text-center mb-12">Gallery</h2>
    <div id="food-gallery" class="relative">
      <!-- Initial layout will be dynamically inserted here -->
    </div>
       
      </div>
    </div>
  </section>

  

  <!-- Contact Section -->
  <section id="contact" class="py-20 bg-gray-900 text-gray-200 text-center">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-gold mb-8">Contact Us</h2>
      <p class="text-lg">Shop 6/96 Canterbury Road, Blackburn South VIC</p>
      <p class="text-lg">Phone: (03) 98943819</p>
      <p class="text-lg">Mobile: 0412289289</p>
      <p class="text-lg">Email: info@phayathai.com.au</p>
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

const layouts = [
  (data: typeof foodGallery) => `
    <div class="grid grid-cols-2 gap-4">
      ${data
        .map(
          (item) => `
        <div class="overflow-hidden rounded-lg shadow-lg">
          <img src="${item.image}" alt="${item.alt}" class="w-full h-40 object-cover" />
        </div>
      `
        )
        .join('')}
    </div>
  `,
  (data: typeof foodGallery) => `
    <div class="grid grid-cols-3 gap-4">
      ${data
        .map(
          (item) => `
        <div class="overflow-hidden rounded-lg shadow-lg">
          <img src="${item.image}" alt="${item.alt}" class="w-full h-56 object-cover" />
        </div>
      `
        )
        .join('')}
    </div>
  `,
];

let currentLayoutIndex = 0;
const shuffleArray = (array: typeof foodGallery) => {
  return array.sort(() => Math.random() - 0.5);
};
const renderGallery = (layoutIndex: number) => {
  const foodGalleryContainer = document.getElementById('food-gallery');
  if (!foodGalleryContainer) return;

  const shuffledData = shuffleArray([...foodGallery]);
  // Add fade-out effect
  foodGalleryContainer.classList.add('fade-out');

  setTimeout(() => {
    // Change the layout after fade-out
    foodGalleryContainer.innerHTML = layouts[layoutIndex](shuffledData);

    // Add fade-in effect
    foodGalleryContainer.classList.remove('fade-out');
    foodGalleryContainer.classList.add('fade-in');

    // Remove fade-in class after animation
    setTimeout(() => {
      foodGalleryContainer.classList.remove('fade-in');
    }, 1000); // Match fade-in animation duration
  }, 1000); // Match fade-out animation duration
};

// Automatically switch layouts every 5 seconds
setInterval(() => {
  currentLayoutIndex = (currentLayoutIndex + 1) % layouts.length;
  renderGallery(currentLayoutIndex);
}, 5000);

// Render the initial layout
renderGallery(currentLayoutIndex);

// food gallery section
// <div class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
//   <img src="${item.image}" alt="${item.alt}" class="w-full h-56 object-cover" />
//   <div class="p-4 bg-gray-800">
//     <h3 class="text-lg font-bold text-gold">${item.title}</h3>
//   </div>
// </div>

// <!-- Food Menu Section -->
// <section id="foodmenu" class="py-20 bg-gray-900 text-gray-300">
//   <div class="container mx-auto">
//     <h2 class="text-4xl font-bold text-gold text-center mb-12">Our Menu</h2>
//     <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
//       <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
//         <h3 class="text-2xl font-bold mb-4 text-gold">Starters</h3>
//         <div class="flex justify-between border-b border-gray-700 py-2">
//           <div>
//             <strong>Spring Rolls</strong>
//             <p class="text-gray-400">Crispy rolls filled with vegetables.</p>
//           </div>
//           <span class="font-bold text-gold">$10</span>
//         </div>
//          <div class="flex justify-between border-b border-gray-700 py-2">
//           <div>
//             <strong>Spring Rolls</strong>
//             <p class="text-gray-400">Crispy rolls filled with vegetables.</p>
//           </div>
//           <span class="font-bold text-gold">$10</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// Update footer with the current year
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear().toString();
}

console.log('Website is running!');
