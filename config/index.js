// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  lib: {
    env: require('./prod.env'),
    filename: 'ange',
    name: 'Ange',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
