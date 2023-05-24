module.exports = {
  plugins: [
    require('prettier-plugin-css-order'),
    require('prettier-plugin-import-sort'),
    require('prettier-plugin-organize-attributes'),
    require('prettier-plugin-organize-imports'),
  ],
  pluginSearchDirs: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
}
