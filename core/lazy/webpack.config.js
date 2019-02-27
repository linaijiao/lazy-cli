const lazy = require('.')

const lazy = new lazy()

module.exports = lazy.createWebpackChain().toConfig()
