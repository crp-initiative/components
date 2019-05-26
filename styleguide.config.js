module.exports = {
  propsParser: require('react-docgen-typescript').parse,
  styleguideDir: './docs',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(ts|tsx)?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.svg$/,
          use: 'file-loader'
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png'
              }
            }
          ]
        }
      ]
    }
  },
  components: 'src/**/*.tsx',
  showUsage: true
};
