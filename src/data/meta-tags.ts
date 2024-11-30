export const metaTags = [
  // Standard Meta Tags
  {
    name: 'description',
    content:
      'Experience the finest Thai cuisine in Blackburn, Victoria. Phaya Thai Restaurant offers authentic Thai dishes made with fresh ingredients and traditional recipes.',
  },
  {
    name: 'keywords',
    content:
      'Thai Restaurant, Blackburn Victoria, Authentic Thai Food, Phaya Thai Restaurant, Thai Cuisine, Thai Food Blackburn, Best Thai Restaurant in Blackburn',
  },
  { name: 'author', content: 'Phaya Thai Restaurant' },
  { charset: 'UTF-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

  // Open Graph (OG) Meta Tags for Social Media Sharing
  {
    property: 'og:title',
    content:
      'Phaya Thai Restaurant - Authentic Thai Food in Blackburn, Victoria',
  },
  {
    property: 'og:description',
    content:
      'Discover the taste of authentic Thai cuisine at Phaya Thai Restaurant in Blackburn, Victoria. Fresh ingredients, traditional recipes, and exceptional service await you.',
  },
  { property: 'og:image', content: 'https://phayathai.com.au/logo.png' }, // Replace with actual logo URL
  { property: 'og:url', content: 'https://phayathai.com.au' },
  { property: 'og:type', content: 'restaurant' },
  { property: 'og:locale', content: 'en_AU' }, // English (Australia)

  // Twitter Card Meta Tags
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:title',
    content:
      'Phaya Thai Restaurant - Authentic Thai Food in Blackburn, Victoria',
  },
  {
    name: 'twitter:description',
    content:
      'Explore the authentic flavors of Thailand at Phaya Thai Restaurant in Blackburn. Perfect for family dinners, takeaways, or special occasions.',
  },
  { name: 'twitter:image', content: 'https://phayathai.com.au/logo.png' }, // Replace with actual logo URL

  // Local Business Meta Tags (Schema.org Microdata)
  {
    property: 'business:contact_data:street_address',
    content: '6/96 Canterbury Road',
  },
  { property: 'business:contact_data:locality', content: 'Blackburn South' },
  { property: 'business:contact_data:region', content: 'Victoria' },
  { property: 'business:contact_data:postal_code', content: '3130' },
  { property: 'business:contact_data:country_name', content: 'Australia' },

  // Geo Meta Tags (Optional but helpful for local SEO)
  { name: 'geo.position', content: '-37.834,145.150' }, // Replace with exact latitude and longitude of the restaurant
  { name: 'geo.placename', content: 'Blackburn South, Victoria' },
  { name: 'geo.region', content: 'AU-VIC' }, // Australia (Victoria)
];
