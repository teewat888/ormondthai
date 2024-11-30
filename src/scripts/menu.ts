import { menuData } from '../data/menuItems';

export const renderMenu = () => {
  const foodMenuContainer = document.getElementById('food-menu');
  if (!foodMenuContainer) return;

  let menuHTML = '';

  menuData.forEach((category) => {
    menuHTML += `
      <div class="mb-12">
        <h3 class="text-2xl font-bold text-gold mb-4">${category.category}</h3>
        ${
          category.categoryWideOptions
            ? category.categoryWideOptions
                .map(
                  (option) => `
                    <div class="flex justify-between mb-2 text-lg">
                      <span>${option.type}</span>
                      <span class="font-bold text-gold">$${option.price.toFixed(
                        2
                      )}</span>
                    </div>
                  `
                )
                .join('')
            : ''
        }
        ${category.items
          .map(
            (item) => `
          <div class="mb-6">
            <div class="flex justify-between items-center">
              <span>${item.number}. ${item.name}</span>
              ${
                item.price
                  ? `<span class="font-bold text-gold">$${item.price.toFixed(
                      2
                    )}</span>`
                  : ''
              }
            </div>
            ${
              item.description
                ? `<p class="text-sm text-gray-400 mt-2">${item.description}</p>`
                : ''
            }
          </div>
        `
          )
          .join('')}
      </div>
    `;
  });

  foodMenuContainer.innerHTML = menuHTML;
};
