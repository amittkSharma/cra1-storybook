const path = require("path")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  baseConfig.module.rules.push({
    test: /\.css$/,
    loaders: [
      'style-loader',
      'css-loader'
    ],
    include: path.resolve(__dirname, "../")
  });
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: [
      'thread-loader',
      'ts-loader?happyPackMode=true',
      'react-docgen-typescript-loader'
    ]
  }, {
    test: /\.md$/,
    loader: [
      'thread-loader',
      'markdown-loader'
    ]
  })
  config.plugins.push(new ForkTsCheckerWebpackPlugin({
    checkSyntacticErrors: true,
    watch: path.resolve(__dirname, "../stories"),
    workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
  }))
  config.resolve.extensions.push(".ts", ".tsx")
  return config;
}
