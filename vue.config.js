const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
});

// module.exports = {
//   configureWebpack: (config) => {
//     if (process.env.NODE_ENV === 'production') {
//       // mutate config for production...
//     } else {
//       // mutate for development...
//       module: {
//         rules: [
//           // ... other rules omitted

//           // this will apply to both plain `.scss` files
//           // AND `<style lang="scss">` blocks in `.vue` files
//           {
//             test: /\.scss$/,
//             use: ['vue-style-loader', 'css-loader', 'sass-loader'],
//           },
//         ];
//       }
//     }
//   },
// };
