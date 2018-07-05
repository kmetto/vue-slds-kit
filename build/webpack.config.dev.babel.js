import { defaults } from 'lodash';
import webpackDefaultConfig from './webpack.config.babel';

const webpackProdConfig = {
  mode: 'production',
  watch: true,
};

export default defaults(webpackDefaultConfig, webpackProdConfig);
