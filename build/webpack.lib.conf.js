const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const fs = require('fs')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeJsPlugin = require('optimize-js-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function getFilename(ext, minimize) {
  return '[name]' + (minimize ? '.min' : '') + ext
}

module.exports = function(options) {

  if (options.components) {
    const root = './src/components'
    baseWebpackConfig.entry = { // UI组件主入口文件
      'components/index': [`${root}/index`]
    }
    const files = fs.readdirSync(root)
    files.forEach(component => { // 定义各组件的入口文件
      if (fs.statSync(path.join(root, component)).isDirectory()) {
        const entryKey = `components/${component}/index` 
        const entryValue = `${root}/${component}/index`
        baseWebpackConfig.entry[entryKey] = [entryValue]
      }
    })
  } else { // UI对外入口文件
    baseWebpackConfig.entry = {
      [config.lib.filename]: './src/index.js'
    }
  }

  const webpackConfig = merge(baseWebpackConfig, {
    module: {
      rules: utils.styleLoaders({
        sourceMap: false,
        extract: true,
        minimize: options.minimize
      })
    },
    externals: {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue'
      }
    },
    output: {
      path: config.lib.assetsRoot,
      filename: utils.assetsLibPath(getFilename('.js', options.minimize)),
      library: config.lib.name,
      libraryTarget: 'umd'
    },
    plugins: [
      // http://vuejs.github.io/vue-loader/en/workflow/production.html
      new webpack.DefinePlugin({
        'process.env': config.lib.env
      }),
      // extract css into its own file
      new ExtractTextPlugin({
        filename: utils.assetsLibPath(getFilename('.css', options.minimize))
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new VueLoaderPlugin()
    ]
  })

  if (options.minimize) {
    webpackConfig.optimization = {
      minimize: true
    }
    webpackConfig.plugins.push(
      new OptimizeJsPlugin({
        sourceMap: false
      })
    )
    webpackConfig.plugins.push(
      new webpack.optimize.OccurrenceOrderPlugin()
    )
    webpackConfig.plugins.push(
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    )
  }

  if (options.components) {
    delete webpackConfig.output.library
    webpackConfig.output.filename = utils.assetsLibPath(getFilename('.js', false))
  }

  if (config.lib.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          config.lib.productionGzipExtensions.join('|') +
          ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }

  if (config.lib.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
  }

  return webpackConfig
}
