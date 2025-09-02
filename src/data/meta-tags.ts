export const metaTags = [
  // Standard Meta Tags
  {
    name: 'description',
    content:
      'Experience the finest Thai cuisine in Ormond, Victoria. Ormond Thai Restaurant offers authentic Thai dishes made with fresh ingredients and traditional recipes.',
  },
  {
    name: 'keywords',
    content:
      'Thai Restaurant, Ormond Victoria, Authentic Thai Food, Ormond Thai Restaurant, Thai Cuisine, Thai Food Ormond, Best Thai Restaurant in Ormond',
  },
  { name: 'author', content: 'Ormond Thai Restaurant' },
  { charset: 'UTF-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

  // Open Graph (OG) Meta Tags for Social Media Sharing
  {
    property: 'og:title',
    content:
      'Ormond Thai Restaurant - Authentic Thai Food in Ormond, Victoria',
  },
  {
    property: 'og:description',
    content:
      'Discover the taste of authentic Thai cuisine at Ormond Thai Restaurant in Ormond, Victoria. Fresh ingredients, traditional recipes, and exceptional service await you.',
  },
  { property: 'og:image', content: 'https://Ormondthai.com.au/logo.png' }, // Replace with actual logo URL
  { property: 'og:url', content: 'https://Ormondthai.com.au' },
  { property: 'og:type', content: 'restaurant' },
  { property: 'og:locale', content: 'en_AU' }, // English (Australia)

  // Twitter Card Meta Tags
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:title',
    content:
      'Ormond Thai Restaurant - Authentic Thai Food in Ormond, Victoria',
  },
  {
    name: 'twitter:description',
    content:
      'Explore the authentic flavors of Thailand at Ormond Thai Restaurant in Ormond. Perfect for family dinners, takeaways, or special occasions.',
  },
  { name: 'twitter:image', content: 'https://Ormondthai.com.au/logo.png' }, // Replace with actual logo URL

  // Local Business Meta Tags (Schema.org Microdata)
  {
    property: 'business:contact_data:street_address',
    content: '475 North Road',
  },
  { property: 'business:contact_data:locality', content: 'Ormond' },
  { property: 'business:contact_data:region', content: 'Victoria' },
  { property: 'business:contact_data:postal_code', content: '3204' },
  { property: 'business:contact_data:country_name', content: 'Australia' },

  // Geo Meta Tags (Optional but helpful for local SEO)
  { name: 'geo.position', content: '-37.834,145.150' }, // Replace with exact latitude and longitude of the restaurant
  { name: 'geo.placename', content: 'Ormond, Victoria' },
  { name: 'geo.region', content: 'AU-VIC' }, // Australia (Victoria)
];
