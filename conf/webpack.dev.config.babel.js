//开发环境配置

'use strict';

import Config from 'webpack-config';
import path from 'path';
import webpack from 'webpack';

export default new Config().extend('./conf/webpack.base.config.babel.js').merge({
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /(\.scss)$/,
        loader: 'style!css!sass!postcss',
        include: path.resolve(__dirname, '../styles'),
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
