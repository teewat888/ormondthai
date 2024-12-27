type DrinkItem = {
  name: string;
  region?: string | null;
  priceGlass?: string | null; // "Glass $x.xx"
  priceBottle?: string | null; // "Bottle $x.xx"
  price?: string | null;       // Single price for items like Soft Drink
  description?: string | null;
};

type DrinkCategory = {
  title: string;
  items: DrinkItem[];
};

export const renderDrinkMenu = (menuData: DrinkCategory[]) => {
  // 1) Split categories into 2 columns (left + right)
  const splitIndex = Math.ceil(menuData.length / 2);
  const leftColumnData = menuData.slice(0, splitIndex);
  const rightColumnData = menuData.slice(splitIndex);

  // 2) Render items in a category (with Glass/Bottle headings + prices + descriptions)
  const renderItems = (items: DrinkItem[]) => {
    return items
      .map((item) => {
        // --------------------------
        // CASE 1: Glass/Bottle
        // --------------------------
        if (item.priceGlass || item.priceBottle) {
          return `
            <div class="grid grid-cols-5 items-start font-roboto mb-4">
              <!-- Left: Name + Region + Description -->
              <div class="col-span-3">
                <span class="font-bold">${item.name}</span>
                ${item.region
              ? `<span class="text-gray-400"> (${item.region})</span>`
              : ""
            }
                ${item.description
              ? `<p class="text-sm text-gray-400">${item.description}</p>`
              : ""
            }
              </div>
              
              <!-- Right: Glass -->
              <div>
                ${item.priceGlass
              ? `
                      <div class="text-right text-sm">Glass</div>
                      <div class="text-right text-gold font-bold text-sm">
                        ${item.priceGlass}
                      </div>
                    `
              : ""
            }
              </div>
              
              <!-- Right: Bottle -->
              <div>
                ${item.priceBottle
              ? `
                      <div class="text-right  text-sm">Bottle</div>
                      <div class="text-right text-gold font-bold text-sm">
                        ${item.priceBottle}
                      </div>
                    `
              : ""
            }
              </div>
            </div>
          `;
        }

        // --------------------------
        // CASE 2: Single price field (e.g. Soft Drinks, $3.90)
        // --------------------------
        else if (item.price) {
          return `
            <div class="grid grid-cols-5 items-start font-roboto mb-4">
              <!-- Left: Name + Region + Description -->
              <div class="col-span-3">
                <span >${item.name}</span>
                ${item.region
              ? `<span class="text-gray-400"> (${item.region})</span>`
              : ""
            }
                ${item.description
              ? `<p class="text-sm text-gray-400">${item.description}</p>`
              : ""
            }
              </div>
              
              <!-- Right: Single Price (e.g., $3.90) -->
              <div class="col-span-2 text-right">
                <div class="font-bold text-gold text-sm">${item.price}</div>
              </div>
            </div>
          `;
        }

        // --------------------------
        // CASE 3: No price at all (just name + region + description)
        // --------------------------
        else {
          return `
            <div class="grid grid-cols-5 items-start font-roboto mb-4">
              <div class="col-span-5">
                <span class="font-bold">${item.name}</span>
                ${item.region
              ? `<span class="text-gray-400"> (${item.region})</span>`
              : ""
            }
                ${item.description
              ? `<p class="text-sm text-gray-400">${item.description}</p>`
              : ""
            }
              </div>
            </div>
          `;
        }
      })
      .join("");
  };

  // 3) Render a single category
  const renderCategory = (category: DrinkCategory) => {
    return `
      <div class="mb-12">
        <h3 class="text-2xl font-bold text-gold mb-4">${category.title}</h3>
        ${renderItems(category.items)}
      </div>
    `;
  };

  // 4) Build final HTML (1 column on small, 2 columns on lg)
  const menuHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left Column -->
      <div>
        ${leftColumnData.map(renderCategory).join("")}
      </div>
      <!-- Right Column -->
      <div>
        ${rightColumnData.map(renderCategory).join("")}
      </div>
    </div>
  `;

  return menuHTML;
};