const path = require('path');

module.exports = {
    experiments: {
        topLevelAwait: true
    },
  entry: './src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};