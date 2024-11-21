import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="bg-gradient-to-r from-gray-900 via-black to-gray-700 text-white py-6 sticky top-0 z-50 shadow-lg">
  <div class="container mx-auto flex justify-between items-center pr-4 pl-2">
    <!-- Logo Section -->
    <div class="flex items-center justify-center md:justify-start space-x-4">
      <img src="/logo.png" alt="Phaya Thai Logo" class="h-32 w-auto" />
      <h1 class="text-sm md:block md:text-3xl font-extrabold tracking-wide text-orange-400">
        Phaya Thai Restaurant
      </h1>
    </div>

    <!-- Hamburger Button for Mobile -->
    <button
      id="menu-toggle"
      class="block md:hidden text-white focus:outline-none"
      aria-label="Toggle navigation"
    >
      <svg
        class="w-8 h-8 hover:scale-110 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Navigation Menu -->
    <nav
      id="menu"
      class="hidden md:flex flex-col md:flex-row md:space-x-10 bg-black md:bg-transparent w-full md:w-auto absolute md:relative top-16 md:top-auto left-0 md:left-auto z-10 md:z-auto"
    >
      <ul
        class="space-y-4 md:space-y-0 md:flex md:space-x-8 md:items-center text-center md:text-left"
      >
        <li>
          <a
            href="#home"
            class="hover:text-orange-400 block menu-link transition duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            class="hover:text-orange-400 block menu-link transition duration-300"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#foodmenu"
            class="hover:text-orange-400 block menu-link transition duration-300"
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="hover:text-orange-400 block menu-link transition duration-300"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

  <section id="home" class="py-20 bg-white text-center scroll-mt-40">
    <h2 class="text-4xl font-bold mb-4">Welcome to Phaya Thai Restaurant</h2>
    <p class="text-lg text-gray-600">Experience the authentic taste of Thailand.</p>
  </section>

  <section id="about" class="py-20 bg-gray-50 text-center scroll-mt-40">
    <h2 class="text-4xl font-bold mb-4">About Us</h2>
    <p class="px-4 md:px-0 text-lg text-gray-600 max-w-3xl mx-auto text-justify">
     Thai food is renowned around the world for its distinctive flavours and nutritional value. Thai food is one of the world’s most popular cuisines. Not only is it delicious, it is also very healthy. Thai herbs, rich in vitamins and minerals, provide a unique balance of flavours and nutritional value, making Thai food a great choice for those seeking both taste and wellbeing. Creating truly excellent Thai food is an art that requires skill, care and love for the craft. Every dish tells a story of meticulous preparation using fresh, high-quality ingredients that are carefully selected to achieve the perfect balance of flavours. 
      <br/><br/>
      Cooking has always been a passion of mine. I started learning at the age of nine when my mother first taught me the art of Thai cooking. This early experience allowed me to hone my skills, which eventually led to the opening of my first restaurant, Baiyoke Thai restaurant in Elsternwick. I then moved on to open Ruby Modern Thai at Rye in 2010, where I continued to develop my culinary skills. Now, with over 20 years of experience, I am excited to present my latest venture, Phaya Thai restaurant. 
      <br/><br/>
      I invite you to experience the flavours of Thai food prepared with passion and attention to detail. At Phaya Thai restaurant, we focus not only on taste, but also on cleanliness and quality. To ensure that every dish is safe and delicious, all vegetables are thoroughly washed to ensure the highest safety standards. I am honored to have the opportunity to cook healthy and delicious food for you and your family.
      <br/><br/>
      Thank you for trusting me to bring the essence of Thai food to you.
          </p>
  </section>

  <section id="foodmenu" class="py-20 bg-white ">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">Our Menu</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-50 p-4 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-4 text-orange-400">Starters</h3>
          <div class="flex justify-between border-b py-2">
            <div>
              <strong>Creamy Mushroom Soup</strong>
              <p class="text-gray-500">Rich and creamy mushroom soup.</p>
            </div>
            <span class="font-bold text-orange-400">$10</span>
          </div>
          <!-- Add more menu items here -->
           <div class="flex justify-between border-b py-2">
            <div>
              <strong>Creamy Mushroom Soup</strong>
              <p class="text-gray-500">Rich and creamy mushroom soup.</p>
            </div>
            <span class="font-bold text-orange-400">$10</span>
          </div>
        </div>
        <!-- Add more categories here -->
        <div class="bg-gray-50 p-4 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-4 text-orange-400">Starters</h3>
          <div class="flex justify-between border-b py-2">
            <div>
              <strong>Creamy Mushroom Soup</strong>
              <p class="text-gray-500">Rich and creamy mushroom soup.</p>
            </div>
            <span class="font-bold text-orange-400">$10</span>
          </div>
          <!-- Add more menu items here -->
           <div class="flex justify-between border-b py-2">
            <div>
              <strong>Creamy Mushroom Soup</strong>
              <p class="text-gray-500">Rich and creamy mushroom soup.</p>
            </div>
            <span class="font-bold text-orange-400">$10</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="py-20 bg-gray-50 text-center scroll-mt-20">
    <h2 class="text-4xl font-bold mb-4">Contact Us</h2>
    <p class="text-lg text-gray-600">123 Thai Street, Foodtown, TX 12345</p>
    <p class="text-lg text-gray-600">Phone: (123) 456-7890</p>
    <p class="text-lg text-gray-600">Email: info@phayathai.com.au</p>
  </section>

  <footer class="bg-black text-white py-4">
    <div class="container mx-auto text-center">
      &copy; 2024 Phaya Thai Restaurant. All rights reserved.
    </div>
  </footer>
`;

// Get references to the toggle button and menu
const menuToggle = document.getElementById('menu-toggle')!;
const menu = document.getElementById('menu')!;
const menuLinks = document.querySelectorAll('.menu-link');

// Toggle the menu on hamburger click
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Close the menu when a menu link is clicked
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
});

console.log('Website is running!');
