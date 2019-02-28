# @linaj/plugin-eslint

Use ESLint to lint JavaScript.

## Install

```bash
yarn add @linaj/plugin-eslint --dev
```

## How to use

In your `lazy.config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: '@linaj/plugin-eslint'
    }
  ]
}
```

Then add a `.eslintrc.js` in your project:

```js
module.exports = {
  extends: ['eslint:recommended']
}
```

Now ESLint will check your JS files at compile time.
