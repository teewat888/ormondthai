import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Hero Section -->
  <section class="h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col justify-center items-center">
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

  <!-- Footer -->
  <footer class="bg-black text-gray-400 py-4 text-center">
    <p>&copy; <span id="current-year"></span> Phaya Thai Restaurant. All rights reserved.</p>
  </footer>
`;

// JavaScript to Smooth Scroll to "About Us"
document.querySelector('a[href="#about"]')?.addEventListener('click', (e) => {
  e.preventDefault();
  const aboutSection = document.getElementById('about');
  aboutSection?.scrollIntoView({ behavior: 'smooth' });
});

const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear().toString();
}

console.log('Website is running!');
