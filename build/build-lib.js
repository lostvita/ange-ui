require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.lib.conf')

const spinner = ora('building for library...')
spinner.start()

rm(path.join(config.lib.assetsRoot, config.lib.assetsSubDirectory), err => {
  if (err) throw err

  const configs = [ // 构建三次
    webpackConfig({ // 压缩css样式表
      minimize: true
    }),
    webpackConfig({ // 未压缩css样式表
      minimize: false
    }),
    webpackConfig({ // 构建各子组件
      components: true,
      minimize: true
    })
  ]

  const promises = []

  configs.forEach(function (config) {
    const promise = new Promise(function (resolve, reject) {
      webpack(config, function (err, stats) {
          if (err) reject(err)
          else resolve(stats)
      })
    })
    promises.push(promise)
  })

  Promise.all(promises).then(function (results) {
    results.forEach(function (stats) {
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')
    }) 
    spinner.stop()
    spinner.succeed('Build complete!')
  }).catch(function (err) {
    throw err
  })
  
})
