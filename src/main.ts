// main.ts
import { renderAboutUs } from './scripts/content';
import { renderBanquetMenu, renderMenu } from './scripts/menu';
import { injectMetaTags } from './scripts/meta';
import { dineInMenu } from './data/menuItems-dine-in';
import './style.css';
import { banquetMenu } from './data/banquet-menu';
import { takeawayMenu } from './data/menuItems-takeaway';
import { renderDrinkMenu } from './scripts/drinkMenu';
import { drinkMenuData } from './data/menuItems-drink';

/* ===========================
   Preview Gate Configuration
   ===========================
   Toggle this to go live without password:
*/
const GO_LIVE = true; // <-- set to true to disable password gate entirely

// Use EITHER a plain password OR a hash (leave the other empty)
const PLAIN_PASSWORD = 'ormond1'; // easiest: set your password here
const PASSWORD_HASH = ''; // optional: SHA-256 hex of your password if you prefer not to store it in plain text

// Per-tab auth memory (use localStorage if you want persistence across tabs)
const AUTH_KEY = 'ot_auth_ok';

// Small helper for hash mode
async function sha256Hex(s: string) {
  const enc = new TextEncoder();
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(s));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

/* ===========================
   Gate UI
   =========================== */
function showGate() {
  const root = document.querySelector<HTMLDivElement>('#app')!;
  root.innerHTML = `
    <section class="min-h-screen flex items-center justify-center bg-black text-gray-100">
      <div class="w-full max-w-sm p-6 rounded-xl bg-gray-900 shadow-lg">
        <h1 class="text-2xl font-bold text-gold mb-4 text-center">Ormond Thai — Preview</h1>
        <p class="text-sm text-gray-400 mb-4 text-center">Enter preview password</p>
        <form id="gateForm" class="space-y-3">
          <input id="gatePwd" type="password" class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" placeholder="Password" />
          <button type="submit" class="w-full bg-gold text-black py-2 rounded hover:bg-lightGold transition">Enter</button>
          <p id="gateErr" class="text-red-400 text-sm h-5"></p>
        </form>
      </div>
    </section>
  `;

  const form = document.getElementById('gateForm') as HTMLFormElement;
  const pwdInput = document.getElementById('gatePwd') as HTMLInputElement;
  const err = document.getElementById('gateErr') as HTMLParagraphElement;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = (pwdInput.value || '').trim();

    try {
      // Plain mode
      if (PLAIN_PASSWORD) {
        if (input === PLAIN_PASSWORD) {
          sessionStorage.setItem(AUTH_KEY, '1');
          renderSite();
          return;
        }
      } else if (PASSWORD_HASH) {
        // Hash mode
        const hex = await sha256Hex(input);
        if (hex === PASSWORD_HASH) {
          sessionStorage.setItem(AUTH_KEY, '1');
          renderSite();
          return;
        }
      } else {
        console.warn('No password configured. Set PLAIN_PASSWORD or PASSWORD_HASH.');
      }
      err.textContent = 'Incorrect password';
    } catch (ex) {
      console.error(ex);
      err.textContent = 'Error verifying password';
    }
  });
}

/* ===========================
   Your Site Render
   =========================== */
function renderSite() {
  // -- Your original content starts here --
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Hero Section -->
<section id="hero" class="h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col justify-center items-center">
  <!-- Logo -->
  <div class="flex flex-col items-center text-center">
    <img src="/logo.png" alt="Ormond Thai Logo" class="h-auto w-auto mb-4" />
   
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
    <h3 class="text-4xl font-bold text-gold mb-8 font-roboto"><a href='#about'>www.OrmondThai.com.au</a></h3>
    <p class="text-md font-roboto">Open 7 day a week from 5.00 pm to 10.00 pm</p>
    <p class="text-md font-roboto">475 North Road</p>
    <p class="text-md font-roboto">Ormond VIC 3204</p>
    <p class="text-md font-roboto flex justify-center items-center space-x-2">
     Visit on &nbsp;<a href="#"><img src="/fb-logo.png" alt="facebook" class="h-6 w-auto" /></a>
      <span>Ormond Thai restaurant</span>
    </p>
    <div class='flex justify-center items-center space-x-2'>
    <p class="text-md font-roboto flex justify-center items-center space-x-2">
      <i class="fas fa-phone-alt text-gold text-xl"></i>
      <span>041-2289289</span>
    </p>
    <p class="text-md font-roboto flex justify-center items-center space-x-2">
      <i class="fas fa-mobile-alt text-gold text-xl"></i>
      <span>041-3965456</span>
    </p>
    </div>
      <!-- div class="mt-4">
        <button 
          id="openModalBtn"
          class="inline-block bg-gold text-black py-2 px-4 rounded-md hover:bg-lightGold transition"
        >
          Book Now
        </button>
      </div -->
  </div>
</section>

<!-- Navigation -->
<nav id="navigation" class="sticky top-0 bg-black text-white py-4 shadow-lg z-50">
  <div class="container md:mx-auto mx-2 flex justify-center space-x-8 flex-wrap ">
    <a href="#hero" class="hover:text-gold transition menu-link">Home</a>
    <a href="#about" class="hover:text-gold transition menu-link whitespace-nowrap">About Us</a>
    <a href="#food-banquet-menu" class="hover:text-gold transition menu-link">Menu</a>
     <a href="#gallery" class="hover:text-gold transition menu-link">Gallery</a>
     <!--a href="#team" class="hover:text-gold transition menu-link">Team</a-->
    <a href="#contact" class="hover:text-gold transition menu-link">Contact Us</a>
  </div>
</nav>

<!-- About Us Section -->
<section id="about" class="py-20 bg-gray-900 text-gray-200">
</section>
<section id="food-banquet-menu" class="py-20 bg-gray-900 text-gray-300">
<div class = 'text-center mx-auto mb-6'>
<p>For those who are Vegetarians, we also cater for you</p>
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
<section id="food-drink-menu" class="py-20 bg-gray-900 text-gray-300">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold text-center mb-12 ">Drink Menu</h2>
    <div id="drink-menu" class="mx-4 md:mx-auto"></div>
  </div>
</section>
<section id="food-takeaway-menu" class="py-20 bg-gray-900 text-gray-300">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold text-center mb-12 ">Takeaway Menu</h2>
    <div id="takeaway-menu" class="mx-4 md:mx-auto"></div>
  </div>
</section>
<!-- Food Gallery Section -->
<section id="gallery" class="py-20 bg-gray-900 text-gray-200 text-center">
  <div class="container mx-auto mb-10">
    <h2 class="text-4xl font-bold text-gold mb-8 ">Gallery</h2>
 <div class="relative">
  <video
    id="photoslideVideo"
    controls
    playsinline
    loop
     preload="auto"
     poster="/phd.png"
    width="80%"
    class="mx-auto rounded-lg"
  >
    <source src="/photoslide.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <audio id="photoslideMusic" loop>
    <source src="/music-looped.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</div>
  </div>
  </section>

<!-- Team Section -->
<!-- section id="team" class="py-20 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 text-gray-800">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold text-center mb-12">Team</h2>
    <div class="flex flex-col md:flex-row flex-wrap justify-center gap-8">
      <!-- Tula -->
      <!-- div class="group text-center cursor-pointer w-full md:w-1/3">
        <div class="relative">
          <img
            src="/tula.png"
            alt="Tula"
            class="w-full rounded-lg bg-white shadow-lg transform transition-transform duration-300 scale-95 group-hover:scale-100"
          />
        </div>
      </div -->
      <!-- Maticka -->
      <!--div class="group text-center cursor-pointer w-full md:w-1/3">
        <div class="relative">
          <img
            src="/maticka.png"
            alt="Maticka"
            class="w-full rounded-lg bg-white shadow-lg transform transition-transform duration-300 scale-95 group-hover:scale-100"
          />
        </div>
      </div -->
      <!-- Phijira -->
      <!-- div class="group text-center cursor-pointer w-full md:w-1/3">
        <div class="relative">
          <img
            src="/phijira.png"
            alt="Phijira"
            class="w-full rounded-lg bg-white shadow-lg transform transition-transform duration-300 scale-95 group-hover:scale-100"
          />
        </div>
      </div>
    </div -->
  </div>
</section -->
  
<!-- Contact Section -->
<section id="contact" class="py-20 bg-gray-900 text-gray-200 text-center">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-gold mb-8 ">Contact Us</h2>
    <p class="text-lg">475 North Road, Ormond VIC 3204</p>
    <p class="text-lg">Phone: 041-2289289</p>
    <p class="text-lg">Mobile: 041-3965456</p>
    <!-- p class="text-lg">Email: info@phayathai.com.au</p -->
  </div>
</section>

<!-- Footer -->
<footer class="bg-black text-gray-400 py-4 text-center">
  <p class='font-roboto'>&copy; <span id="current-year"></span> Ormond Thai Restaurant. All rights reserved.</p>
</footer>
 <!-- Modal -->
  <div 
    id="bookingModal" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden"
  >
    <div class="bg-white w-11/12 md:w-1/2 p-6 rounded shadow-lg relative">
      <button 
        id="closeModalBtn" 
        class="absolute top-3 right-3 text-black hover:text-gray-700 text-2xl"
      >
        &times;
      </button>
      <h2 class="text-2xl font-bold mb-4 text-center">Reservation</h2>
     <form id="bookingForm" class="space-y-4">
  <div>
    <label for="name" class="block mb-1">Name</label>
    <input type="text" id="name" name="name" required class="w-full p-2 border rounded" />
  </div>
  <div>
    <label for="phone" class="block mb-1">Phone</label>
    <input type="number" id="phone" name="phone" required class="w-full p-2 border rounded" />
  </div>
  <div>
    <label for="date" class="block mb-1">Date</label>
    <input type="date" id="date" name="date" required class="w-full p-2 border rounded" />
  </div>
  <div>
    <label for="time" class="block mb-1">Time</label>
    <input type="time" id="time" name="time" required class="w-full p-2 border rounded" />
  </div>
  <div>
    <label for="guests" class="block mb-1">Number of Guests</label>
    <input type="number" id="guests" name="guests" required class="w-full p-2 border rounded" />
  </div>
  
  <!-- Honeypot Field for Spam Prevention -->
  <div style="display: none;">
    <input type="text" id="honeypot" name="honeypot" />
  </div>

  <div class="text-center mt-4">
    <button 
      type="submit" 
      class="bg-gold text-black py-2 px-4 rounded hover:bg-lightGold transition"
    >
      Confirm Booking
    </button>
  </div>
</form>
    </div>
  </div>
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
  const takeawayContainer = document.getElementById('takeaway-menu');
  const banquetContainer = document.getElementById('banquet-menu');
  const drinkContainer = document.getElementById('drink-menu');

  if (dineInContainer) {
    dineInContainer.innerHTML = renderMenu(dineInMenu);
  }
  if (takeawayContainer) {
    takeawayContainer.innerHTML = renderMenu(takeawayMenu);
  }
  if (banquetContainer) {
    banquetContainer.innerHTML = renderBanquetMenu(banquetMenu);
  }

  if (drinkContainer) {
    drinkContainer.innerHTML = renderDrinkMenu(drinkMenuData);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("photoslideVideo") as HTMLVideoElement | null;
    const audio = document.getElementById("photoslideMusic") as HTMLAudioElement | null;

    if (!video || !audio) return;
    audio.loop = true;
    audio.play().catch((e) => console.warn("Autoplay blocked:", e));
    video.addEventListener("play", () => {
      audio.currentTime = video.currentTime;
      audio.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
    });

    video.addEventListener("pause", () => {
      audio.pause();
    });

    video.addEventListener("seeking", () => {
      audio.currentTime = video.currentTime;
    });

    video.addEventListener("timeupdate", () => {
      if (Math.abs(audio.currentTime - video.currentTime) > 0.3) {
        audio.currentTime = video.currentTime;
      }
    });

    const openModalBtn = document.getElementById("openModalBtn");
    const bookingModal = document.getElementById("bookingModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const bookingForm = document.getElementById("bookingForm");

    if (openModalBtn && bookingModal && closeModalBtn) {
      openModalBtn.addEventListener("click", () => {
        bookingModal.classList.remove("hidden");
      });

      closeModalBtn.addEventListener("click", () => {
        bookingModal.classList.add("hidden");
      });

      bookingModal.addEventListener("click", (e) => {
        if (e.target === bookingModal) {
          bookingModal.classList.add("hidden");
        }
      });
    }

    // Form submission handling
    if (bookingForm) {
      bookingForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Spam Prevention: Check honeypot field
        const honeypotField = document.getElementById("honeypot") as HTMLInputElement;
        if (honeypotField && honeypotField.value) {
          alert("Spam detected!");
          return;
        }

        const formData = new FormData(bookingForm as HTMLFormElement);
        const data = Object.fromEntries(formData);

        try {
          const response = await fetch("https://phayathai.com.au/.netlify/functions/send-booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            alert("Booking request sent!");
            if (bookingModal) {
              bookingModal.classList.add("hidden");
            }
          } else {
            alert("Something went wrong. Try again.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Error sending booking request.");
        }
      });
    }
  });

  console.log('Website is running!');
  // -- Your original content ends here --
}

/* ===========================
   Boot
   =========================== */
(function boot() {
  if (GO_LIVE) {
    renderSite();
    return;
  }
  if (sessionStorage.getItem(AUTH_KEY) === '1') {
    renderSite();
  } else {
    showGate();
  }
})();