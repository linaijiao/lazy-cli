const Lazy = require('.')

const lazy = new Lazy()

module.exports = lazy.createWebpackChain().toConfig()
