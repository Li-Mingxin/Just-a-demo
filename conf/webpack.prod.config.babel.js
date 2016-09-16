//生产环境配置

'use strict';

import Config from 'webpack-config';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

export default new Config().extend('./conf/webpack.base.config.babel.js').merge({
  module: {
    loaders: [
      {
        test: /(\.scss)$/,
        include: path.resolve(__dirname, '../styles'),
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});
