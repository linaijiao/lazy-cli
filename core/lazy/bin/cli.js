#!/usr/bin/env node
// eslint-disable-next-line import/no-unassigned-import
require('v8-compile-cache')
const lazy = require('..')

process.on('unhandledRejection', error => {
  console.error(error)
  process.exit(1)
})

async function main() {
  try {
    const lazy = new lazy()
    await lazy.run()
  } catch (error) {
    require('../lib/utils/spinner').stop()
    if (error.lazy) {
      if (!error.dismiss) {
        require('@lazy/logger').error(error.message)
      }
    } else {
      console.error(error.stack)
    }
    process.exit(1)
  }
}

main()
