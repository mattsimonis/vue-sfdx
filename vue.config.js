const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  baseUrl: './',
  outputDir: 'force-app/main/default/staticresources/VueApp',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: 'src/static', to: '' }
      ])
    ]
  }
}