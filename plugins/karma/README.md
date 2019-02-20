# @lazy/plugin-karma

Automatic (headless) browser testing with [Karma](https://karma-runner.github.io/latest/index.html).

## Introduction

This plugin pre-configures [Karma](https://karma-runner.github.io/), [Jasmine](https://jasmine.github.io/) for you so that you can run the tests without any configurations.

## Install

```bash
yarn add @lazy/plugin-karma --dev
```

## How to use

In your `lazy.config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: '@lazy/plugin-karma'
    }
  ]
}
```

This plugin injected a new command to Lazy CLI: `lazy test:unit` which is a command running in Lazy's `test` mode.

To run it easier, you can configure this in npm scripts:

```json
{
  "name": "my-project",
  "scripts": {
    "test": "lazy test:unit",
    "build": "lazy --prod",
    "start": "lazy --serve"
  },
  "devDependencies": {
    "lazy": "^12.0.0"
  }
}
```

Now you can run `npm test` instead.

### Test File Patterns

By default this plugin use `**/*.{test,spec}.{js,ts}` (excluded `node_modules`) as test files, you can change this to any minimatch pattern (note the quotes to avoid shell expansion):

```bash
lazy test:unit "**/*.spec.coffee"
```

### Coverage Report

Use `--coverage` flag to show code coverage and generate coverage report to `./coverage` folder.

### Watching Files

Use `--watch` flag to watch test files.

### Running on CI

To run your tests in Continuous Integration Platforms like CircleCI, you will need `Chrome` installed in your test environment.
