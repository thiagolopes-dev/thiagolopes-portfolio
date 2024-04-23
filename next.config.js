const path = require('path');

module.exports = {
  async headers() {
    return [
      {
        // Define o favicon no cabeçalho HTML
        source: '/app/favicon.ico',
        headers: [
          {
            key: 'link',
            value: '<link rel="icon" href="/app/favicon.ico" />',
          },
        ],
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
};
