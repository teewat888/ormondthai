type Category = {
  category: string;
  categoryNumber: number;
  categoryWideOptions?: { type: string; price: number }[];
  priceHeaders?: string[]; // ['Small', 'Large']
  items?: {
    name: string;
    description?: string;
    prices?: { [size: string]: number }; // e.g., { small: 5.95, large: 6.95 }
    price?: number; // Single price for the item
    number?: number;
  }[];
};

export const renderMenu = (menuData: Category[]) => {
  const leftColumnCategories = menuData.filter(
    (menu) => menu.categoryNumber <= 5
  );

  const rightColumnCategories = menuData.filter(
    (menu) => menu.categoryNumber > 5 && menu.categoryNumber < 9
  );
  const extraCategories = menuData.filter((menu) => menu.categoryNumber === 9);
  const dessertCategory = menuData.find((menu) => menu.categoryNumber === 10);

  // Render items in a category
  const renderItems = (category: Category) => {
    let itemsHTML = '';

    // Render individual items
    itemsHTML += category.items
      ?.map((item) => {
        const menuName = item.number
          ? item?.number === -1
            ? `<div class="col-span-3">Special</div><div class="col-span-3">${item.name}</div>`
            : `<div class="col-span-3">${item?.number}. ${item.name}</div>`
          : `
            <div class="col-span-3">${item.name}</div>
            `;
        // Check if the item has multiple prices
        const pricesHTML = item.prices
          ? `
            <div class="grid grid-cols-5 items-center">
              <div class="col-span-3"></div> <!-- Empty for alignment -->
              <div class="text-sm text-gray-400 text-right">Small</div>
              <div class="text-sm text-gray-400 text-right">Large</div>
            </div>
            <div class="grid grid-cols-5 items-center">
              ${menuName}
              ${Object.keys(item.prices)
                .map((size) => {
                  const price = item.prices?.[size];
                  return price
                    ? `
                  <div class="text-right">
                    <span class="block font-bold text-gold text-sm">$${price.toFixed(
                      2
                    )}</span>
                  </div>
                `
                    : '<div></div>'; // Placeholder for alignment
                })
                .join('')}
            </div>
          `
          : `
            <div class="grid grid-cols-5 items-center">
              ${menuName}
              ${
                item.price
                  ? `<div class="col-span-2 text-right font-bold text-gold text-sm">$${item.price.toFixed(
                      2
                    )}</div>`
                  : '<div class="col-span-2"></div>'
              }
            </div>
          `;

        return `
          ${pricesHTML}
          ${
            item.description
              ? `<p class="text-sm text-gray-400 mb-2">${item.description}</p>`
              : ''
          }
        `;
      })
      .join('');

    return itemsHTML;
  };

  // Render a single category
  const renderCategory = (category: Category) => `
    <div class="mb-12">
      <h3 class="text-2xl font-bold text-gold mb-4 font-greatvibes">${
        category.category
      }</h3>
      ${
        category.categoryWideOptions
          ?.map(
            (option) => `
            <div class="flex justify-between mb-2 text-sm">
              <span>${option.type}</span>
              <span class="font-bold text-gold">$${option.price.toFixed(
                2
              )}</span>
            </div>
          `
          )
          .join('') || ''
      }
      ${renderItems(category)}
    </div>
  `;
  // Render items for extra categories without a category header
  const renderExtraItems = (categories: Category[]) =>
    categories.map((category) => renderItems(category)).join('');
  // Combine columns into the grid layout
  const menuHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>${leftColumnCategories.map(renderCategory).join('')}</div>
      <div>${rightColumnCategories.map(renderCategory).join('')}
        <div class='-mt-10 mb-6'>${renderExtraItems(extraCategories)}</div>
         ${dessertCategory ? renderCategory(dessertCategory) : ''}
      </div>
    </div>
  `;

  return menuHTML;
};

type BanquetMenu = {
  title: string;
  price: string;
  conditions: string;
  courses: {
    title: string;
    items: string[];
  }[];
};

export const renderBanquetMenu = (banquetMenu: BanquetMenu[]) => {
  const menuHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      ${banquetMenu
        .map(
          (banquet) => `
        <div class="p-6 border rounded-lg shadow-md bg-gray-800 text-gray-200">
          <h3 class="text-2xl font-bold text-gold mb-2 font-greatvibes">${
            banquet.title
          }</h3>
          <p class="text-lg font-semibold">${banquet.price}</p>
          <p class="text-sm text-gray-400 mb-4">${banquet.conditions}</p>
          ${banquet.courses
            .map(
              (course) => `
            <h4 class="text-lg font-bold text-gold mt-4 font-greatvibes">${
              course.title
            }</h4>
            <ul class="list-disc ml-6">
              ${course.items
                .map((item) => `<li class="text-sm text-gray-300">${item}</li>`)
                .join('')}
            </ul>
          `
            )
            .join('')}
        </div>
      `
        )
        .join('')}
    </div>
  `;
  return menuHTML;
};
