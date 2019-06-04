const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build ? config.build.productionSourceMap : config.lib.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
