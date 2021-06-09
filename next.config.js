// /* eslint-disable */
const path = require('path');
const withImages = require('next-images')
module.exports = withImages({
    exclude: path.resolve(__dirname, 'src/assets/svg'),
    webpack(config, options) {
        return config
    },
    images: {
        domains: ['images.unsplash.com'],
      },
})

// module.exports = {
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         issuer: {
//           test: /\.(js|ts)x?$/,
//         },
//         use: ['@svgr/webpack'],
//       });

//       return config;
//     },
//   };