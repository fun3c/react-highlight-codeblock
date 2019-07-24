module.exports = function (api) {
  api.cache(false);
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ];
  const plugins = [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties"
  ];
  // dev es
  const esmdev = {
    "presets": ["@babel/preset-env", { "modules": false }],
    "plugins": ["@babel/plugin-transform-runtime", { "useESModules": true, }]
  };
  // es module
  const esm = {
    "presets": [
      [ "@babel/preset-env", { "modules": false } ]
    ],
    "plugins": [
      ["@babel/plugin-transform-runtime", { "useESModules": true, }],
      [ "babel-plugin-transform-rename-import", { "original": "^(.+?)\\.less$", "replacement": "$1.css" } ]
    ]
  };
  // com module
  const commonjs = {
    "plugins": [
      [ "babel-plugin-transform-remove-imports", { "test": "(less|css)$" } ]
    ]
  };
  return {
    babelrcRoots: [
      "src/*"
    ],
    presets,
    plugins,
    env: { esmdev, esm, commonjs }
  };
};