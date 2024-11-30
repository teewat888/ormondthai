import { aboutUsData } from '../data/about-us';

export const renderAboutUs = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.innerHTML = `
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-gold text-center mb-8">${
        aboutUsData.title
      }</h2>
      <div class="text-lg leading-relaxed text-justify max-w-3xl mx-auto text-gray-300">
        ${aboutUsData.content
          .map((paragraph) => `<p class="mb-6">${paragraph}</p>`)
          .join('')}
      </div>
    </div>
  `;
  }
};
