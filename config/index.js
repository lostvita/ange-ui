// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
  lib: {
    env: require('./prod.env'), // 声明构建环境
    filename: 'ange', // 构建生成的文件名
    name: 'Ange', // 定义标识
    assetsRoot: path.resolve(__dirname, '../dist'), // 构建生成目录
    assetsSubDirectory: '', // 静态资源目录：img、font等
    productionSourceMap: true, // 是否开启sourcemap
    productionGzip: false, // 是否开启gzip
    productionGzipExtensions: ['js', 'css'], // 开启gzip的文件的扩展后缀
    bundleAnalyzerReport: process.env.npm_config_report // 是否生成构建报告
  }
}
