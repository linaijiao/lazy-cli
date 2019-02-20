# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [12.4.5](https://github.com/egoist/lazy/compare/lazy@12.4.4...lazy@12.4.5) (2019-01-18)

### Bug Fixes

- support babel.transpileModules on windows, closes [#527](https://github.com/egoist/lazy/issues/527) ([62ecdb9](https://github.com/egoist/lazy/commit/62ecdb9))

## [12.4.4](https://github.com/egoist/lazy/compare/lazy@12.4.3...lazy@12.4.4) (2019-01-14)

### Bug Fixes

- **css:** disable tree-shaking for css files ([acc42f0](https://github.com/egoist/lazy/commit/acc42f0))

## [12.4.3](https://github.com/egoist/lazy/compare/lazy@12.4.2...lazy@12.4.3) (2019-01-11)

### Bug Fixes

- support plugin without lazy-plugin prefix ([59f706e](https://github.com/egoist/lazy/commit/59f706e))

## [12.4.2](https://github.com/egoist/lazy/compare/lazy@12.4.1...lazy@12.4.2) (2019-01-09)

### Bug Fixes

- properly add pnp plugins ([fdcd9e7](https://github.com/egoist/lazy/commit/fdcd9e7))

## [12.4.1](https://github.com/egoist/lazy/compare/lazy@12.4.0...lazy@12.4.1) (2019-01-09)

### Bug Fixes

- support yarn pnp ([ca61aaa](https://github.com/egoist/lazy/commit/ca61aaa))

# [12.4.0](https://github.com/egoist/lazy/compare/lazy@12.3.2...lazy@12.4.0) (2019-01-09)

### Bug Fixes

- set test mode for test command ([2cb92c4](https://github.com/egoist/lazy/commit/2cb92c4))
- tweak cli logs ([519a4fc](https://github.com/egoist/lazy/commit/519a4fc))

### Features

- add a hook to invoke before running command ([fc5bcf3](https://github.com/egoist/lazy/commit/fc5bcf3))
- add a shorthand to set mode for test:\* commands ([a4af8db](https://github.com/egoist/lazy/commit/a4af8db))

## [12.3.2](https://github.com/egoist/lazy/compare/lazy@12.3.1...lazy@12.3.2) (2019-01-09)

### Bug Fixes

- **serve:** read host and port from env vars ([7abfd2b](https://github.com/egoist/lazy/commit/7abfd2b))

## [12.3.1](https://github.com/egoist/lazy/compare/lazy@12.3.0...lazy@12.3.1) (2019-01-09)

### Bug Fixes

- ensure publicUrl ([5f0451f](https://github.com/egoist/lazy/commit/5f0451f)), closes [#520](https://github.com/egoist/lazy/issues/520)

# [12.3.0](https://github.com/egoist/lazy/compare/lazy@12.2.14...lazy@12.3.0) (2019-01-09)

### Bug Fixes

- use pug-plain-loader for vue template ([6948539](https://github.com/egoist/lazy/commit/6948539))

### Features

- show memory usage ([75f1376](https://github.com/egoist/lazy/commit/75f1376))

## [12.2.14](https://github.com/egoist/lazy/compare/lazy@12.2.13...lazy@12.2.14) (2019-01-03)

### Bug Fixes

- ignore `.DS_Store` in public folder ([#518](https://github.com/egoist/lazy/issues/518)) ([91afba5](https://github.com/egoist/lazy/commit/91afba5)), closes [#517](https://github.com/egoist/lazy/issues/517)

## [12.2.13](https://github.com/egoist/lazy/compare/lazy@12.2.12...lazy@12.2.13) (2019-01-02)

### Features

- allow config file to export a function ([8e82f66](https://github.com/egoist/lazy/commit/8e82f66))

## [12.2.12](https://github.com/egoist/lazy/compare/lazy@12.2.11...lazy@12.2.12) (2018-12-31)

**Note:** Version bump only for package lazy

## [12.2.11](https://github.com/egoist/lazy/compare/lazy@12.2.10...lazy@12.2.11) (2018-12-31)

### Bug Fixes

- use recommended bucklescript workflow ([2231c5c](https://github.com/egoist/lazy/commit/2231c5c))

## [12.2.10](https://github.com/egoist/lazy/compare/lazy@12.2.9...lazy@12.2.10) (2018-12-31)

### Bug Fixes

- let webpack watch all reason files ([e5c7a05](https://github.com/egoist/lazy/commit/e5c7a05))

## [12.2.9](https://github.com/egoist/lazy/compare/lazy@12.2.8...lazy@12.2.9) (2018-12-30)

### Bug Fixes

- cache support for vue templates ([aa0a430](https://github.com/egoist/lazy/commit/aa0a430))

## [12.2.8](https://github.com/egoist/lazy/compare/lazy@12.2.7...lazy@12.2.8) (2018-12-28)

### Features

- use source field from package.json as default app entry ([af61639](https://github.com/egoist/lazy/commit/af61639))

## [12.2.7](https://github.com/egoist/lazy/compare/lazy@12.2.6...lazy@12.2.7) (2018-12-25)

### Bug Fixes

- **cli:** help message ([648727e](https://github.com/egoist/lazy/commit/648727e))

### Features

- add a hook to allow modifing devServer config ([df939e6](https://github.com/egoist/lazy/commit/df939e6))

## [12.2.6](https://github.com/egoist/lazy/compare/lazy@12.2.5...lazy@12.2.6) (2018-12-23)

### Bug Fixes

- **cli:** cache is enabled by default ([b2171d5](https://github.com/egoist/lazy/commit/b2171d5))
- properly handle --no-config flag ([bb94787](https://github.com/egoist/lazy/commit/bb94787))

## [12.2.5](https://github.com/egoist/lazy/compare/lazy@12.2.4...lazy@12.2.5) (2018-12-22)

### Bug Fixes

- only change devtoolModuleFilenameTemplate under --serve flag ([fe5b708](https://github.com/egoist/lazy/commit/fe5b708))
- resolve modules in local development ([369a352](https://github.com/egoist/lazy/commit/369a352))

### Features

- add a new plugin option `when` ([17ff228](https://github.com/egoist/lazy/commit/17ff228))
- support all webpack targets ([0d51120](https://github.com/egoist/lazy/commit/0d51120))

## [12.2.4](https://github.com/egoist/lazy/compare/lazy@12.2.3...lazy@12.2.4) (2018-12-21)

### Bug Fixes

- react-error-overlay doesn't work with eval source map ([ddc8213](https://github.com/egoist/lazy/commit/ddc8213))
- use original file path in sourcemap in dev mode ([a2dfc5f](https://github.com/egoist/lazy/commit/a2dfc5f))

## [12.2.3](https://github.com/egoist/lazy/compare/lazy@12.2.2...lazy@12.2.3) (2018-12-21)

### Bug Fixes

- better naming for server hooks ([b9aab0b](https://github.com/egoist/lazy/commit/b9aab0b))
- **cli:** only open browser on the first successful build ([13b1ac8](https://github.com/egoist/lazy/commit/13b1ac8))

## [12.2.2](https://github.com/egoist/lazy/compare/lazy@12.2.1...lazy@12.2.2) (2018-12-19)

### Bug Fixes

- use bsb-js in bs-loader ([1712516](https://github.com/egoist/lazy/commit/1712516))

## [12.2.1](https://github.com/egoist/lazy/compare/lazy@12.2.0...lazy@12.2.1) (2018-12-19)

### Bug Fixes

- vue-loader doesn't quite work with inline loaders ([7c04af6](https://github.com/egoist/lazy/commit/7c04af6))

# [12.2.0](https://github.com/egoist/lazy/compare/lazy@12.1.6...lazy@12.2.0) (2018-12-18)

### Bug Fixes

- Improve devServer config validation ([#504](https://github.com/egoist/lazy/issues/504)) ([fd846b0](https://github.com/egoist/lazy/commit/fd846b0))

### Features

- builtin support for ReasonML ([5dec683](https://github.com/egoist/lazy/commit/5dec683))
- named imports for assets ([#505](https://github.com/egoist/lazy/issues/505)) ([32f153a](https://github.com/egoist/lazy/commit/32f153a))

## [12.1.6](https://github.com/egoist/lazy/compare/lazy@12.1.5...lazy@12.1.6) (2018-12-16)

### Bug Fixes

- allow to pass a string as plugin ([81caf4a](https://github.com/egoist/lazy/commit/81caf4a))

### Features

- add pug-loader ([4be8954](https://github.com/egoist/lazy/commit/4be8954))
