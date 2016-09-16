//开发环境和生产环境共用配置

'use strict';

import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import assets from 'postcss-assets';
import autoprefixer from 'autoprefixer';
import doiuse from 'doiuse';
import reporter from 'postcss-reporter';

export default new Config().merge({
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modulesDirectories: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../styles'),
      path.resolve(__dirname, '../static'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app'],
      template: path.resolve(__dirname, '../template/index.html'),
    }),
  ],
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(png|jpe?g|ico|svg)(\?.*$|$)/,
        loader: 'file?name=[name].[ext]',
        include: path.resolve(__dirname, '../static'),
      }
    ]
  },
  postcss: [
    assets({
      relative: true,
      loadPaths: [path.resolve(__dirname, '../static')],
    }),
    autoprefixer(),
    doiuse({
      browsers: ['ie >= 8'],
      ignore: [
        'flexbox',
        'calc'
      ]
    }),
    reporter({ clearMessages: true })
  ],
});
