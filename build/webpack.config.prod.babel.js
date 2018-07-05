import { defaults } from 'lodash';
import webpackDefaultConfig from './webpack.config.babel';

const webpackProdConfig = {
  mode: 'development',
};

export default defaults(webpackDefaultConfig, webpackProdConfig);
