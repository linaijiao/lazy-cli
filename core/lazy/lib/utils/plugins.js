const resolveFrom = require('resolve-from')
const logger = require('@lazy/logger')
const isLocalPath = require('./isLocalPath')
const PoiError = require('./PoiError')

const normalizePluginName = (name, cwd) => {
  if (isLocalPath(name)) return name

  // @lazy/foo => @lazy/plugin-foo
  // @my-org/hehe => @my-org/lazy-plugin-hehe
  if (/^@[^/]+\//.test(name)) {
    return name.replace(/^@([^/]+)\/(lazy-)?(plugin-)?/, (_, m1) => {
      return m1 === 'lazy' ? `@lazy/plugin-` : `@${m1}/lazy-plugin-`
    })
  }

  const prefixedName = name.replace(/^(lazy-plugin-)?/, 'lazy-plugin-')

  // if a prefixed name exists, use it directly
  if (resolveFrom.silent(cwd, prefixedName)) {
    return prefixedName
  }

  return name
}

exports.normalizePlugins = (plugins, cwd) => {
  return [].concat(plugins || []).map(v => {
    if (typeof v === 'string') {
      v = { resolve: v }
    }
    if (typeof v.resolve === 'string') {
      const pluginName = normalizePluginName(v.resolve, cwd)
      const resolvedPlugin = resolveFrom.silent(cwd, pluginName)
      if (!resolvedPlugin) {
        const message = `Cannot find plugin \`${pluginName}\` in your project`
        logger.error(message)
        logger.error(`Did you forget to install it?`)
        throw new PoiError({
          message,
          dismiss: true
        })
      }
      v = Object.assign({}, v, {
        resolve: resolvedPlugin
      })
    }
    return v
  })
}

exports.mergePlugins = (configPlugins, cliPlugins) => {
  return configPlugins.concat(
    cliPlugins.filter(cliPlugin => {
      return !configPlugins.find(
        configPlugin => configPlugin.resolve === cliPlugin.resolve
      )
    })
  )
}
