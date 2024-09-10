module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  
  // Add custom middleware
  {
    name: 'redirectMiddleware',
    resolve: './redirects.js', // Path to your custom middleware
  },
];
